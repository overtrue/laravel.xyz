import {
  generateRegistrationOptions, generateAuthenticationOptions,
  verifyAuthenticationResponse, verifyRegistrationResponse,
} from '@simplewebauthn/server';
import { correctCount } from '../src/lib/quiz-score.ts';

const sessionCookie = '__Host-orbit-session';
const flowCookie = '__Host-orbit-flow';
const sessionSeconds = 60 * 60 * 24 * 30;
const flowSeconds = 300;
const now = () => Math.floor(Date.now() / 1000);
const encode = bytes => btoa(String.fromCharCode(...bytes)).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
const decode = value => Uint8Array.from(atob(value.replaceAll('-', '+').replaceAll('_', '/')), c => c.charCodeAt(0));
const random = size => encode(crypto.getRandomValues(new Uint8Array(size)));
const hash = async value => encode(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))));
const cookie = (name, value, age) => name + '=' + value + '; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=' + age;

class Problem extends Error {
  constructor(status, code) { super(code); this.status = status; }
}
const fail = (status, code) => { throw new Problem(status, code); };

function json(data, status = 200, cookies = []) {
  const headers = new Headers({'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'private, no-store', 'X-Content-Type-Options':'nosniff'});
  cookies.forEach(value => headers.append('Set-Cookie', value));
  return new Response(JSON.stringify(data), {status, headers});
}

function readToken(request, name) {
  const prefix = name + '=';
  const raw = (request.headers.get('Cookie') ?? '').split(';').map(part => part.trim()).find(part => part.startsWith(prefix))?.slice(prefix.length);
  return raw && /^[A-Za-z0-9_-]{43}$/.test(raw) ? raw : null;
}

async function input(request) {
  if (request.headers.get('Content-Type')?.split(';')[0].trim() !== 'application/json') fail(415, 'invalid');
  const max = 65536;
  if (Number(request.headers.get('Content-Length')) > max) fail(413, 'too_large');
  const reader = request.body?.getReader();
  if (!reader) fail(400, 'invalid');
  const bytes = new Uint8Array(max);
  let size = 0;
  while (true) {
    const {value,done} = await reader.read();
    if (done) break;
    if (size + value.length > max) { await reader.cancel(); fail(413,'too_large'); }
    bytes.set(value,size); size += value.length;
  }
  let body;
  try { body = JSON.parse(new TextDecoder().decode(bytes.subarray(0,size))); } catch { fail(400,'invalid'); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) fail(400,'invalid');
  return body;
}

let catalog;
async function validateChanges(env, changes, previous = {}) {
  if (!changes || typeof changes !== 'object' || Array.isArray(changes)) fail(400,'invalid_progress');
  if (!catalog) {
    const res = await env.ASSETS.fetch(new Request(new URL('/account-catalog.json',env.ORIGIN)));
    if (!res.ok) fail(503,'unavailable');
    const {quizzes, ...data} = await res.json();
    catalog = Object.fromEntries(Object.entries(data).map(([key,list]) => [key,new Set(list)]));
    catalog.quizzes = new Map(Object.entries(quizzes ?? {}));
  }
  const clean = Object.create(null);
  for (const [key,value] of Object.entries(changes)) {
    const colon = key.indexOf(':');
    const kind = colon < 0 ? key : key.slice(0,colon);
    const id = colon < 0 ? '' : key.slice(colon+1);
    let valid = false;
    if (key === 'route') valid = value === null || catalog.routes.has(value);
    if (key === 'last-lesson') valid = value === null || catalog.lessons.has(value);
    if (kind === 'task' || kind === 'read') valid = catalog.lessons.has(id) && (value === '1' || value === null);
    if (kind === 'stamp') valid = catalog.stamps.has(id) && (value === '1' || value === null);
    if (kind === 'quiz' && catalog.quizzes.has(id)) {
      const answers = catalog.quizzes.get(id);
      const hits = correctCount(value, answers);
      if (hits === null) fail(400,'invalid_progress');
      // Regrade the sheet and retain the best even if a lower offline result arrives later.
      if (hits > (correctCount(previous[key], answers) ?? -1)) clean[key] = value;
      continue;
    }
    if (kind === 'saved') valid = catalog.bookmarks.has(id) && (value === null || (typeof value === 'string' && /^[1-9]\d{0,14}$/.test(value)));
    if (!valid) fail(400,'invalid_progress');
    clean[key] = value;
  }
  return clean;
}

async function session(request, db) {
  const token = readToken(request,sessionCookie);
  if (!token) return null;
  return db.prepare('SELECT a.id, a.generation, a.revision, a.progress FROM sessions s JOIN accounts a ON a.id=s.account_id AND a.generation=s.generation WHERE s.token_hash=? AND s.expires>?')
    .bind(await hash(token),now()).first();
}
const profile = row => ({id:row.id, revision:row.revision, values:JSON.parse(row.progress)});

async function options(mode, body, env) {
  const rpID = new URL(env.ORIGIN).hostname;
  let accountId = null, recoveryHash = null, options;
  if (mode === 'login') {
    options = await generateAuthenticationOptions({rpID,userVerification:'required',timeout:120000});
  } else {
    if (mode === 'recover') {
      const normalized = typeof body.code === 'string' ? body.code.replace(/[-\s]/g,'').toLowerCase() : '';
      if (!/^[0-9a-f]{32}$/.test(normalized)) fail(400,'invalid_recovery');
      recoveryHash = await hash(normalized);
      const account = await env.DB.prepare('SELECT id FROM accounts WHERE recovery_hash=?').bind(recoveryHash).first();
      if (!account) fail(400,'invalid_recovery');
      accountId = account.id;
    } else accountId = random(16);
    options = await generateRegistrationOptions({
      rpID,rpName:'Artisan Orbit',userID:decode(accountId),userName:'Orbit ' + accountId.slice(0,8),
      attestationType:'none',authenticatorSelection:{residentKey:'required',userVerification:'required'},timeout:120000,
      supportedAlgorithmIDs:[-7,-257],
    });
  }
  const token = random(32);
  await env.DB.batch([
    env.DB.prepare('DELETE FROM ceremonies WHERE expires<=?').bind(now()),
    env.DB.prepare('DELETE FROM sessions WHERE expires<=?').bind(now()),
    env.DB.prepare('INSERT INTO ceremonies VALUES (?,?,?,?,?,?)').bind(await hash(token),mode,options.challenge,accountId,recoveryHash,now()+flowSeconds),
  ]);
  return json({options},200,[cookie(flowCookie,token,flowSeconds)]);
}

async function proof(verify, parameters) {
  let result;
  try { result = await verify(parameters); } catch { fail(400,'invalid_passkey'); }
  if (!result.verified) fail(400,'invalid_passkey');
  return result;
}

async function finish(mode, request, body, env) {
  const token = readToken(request,flowCookie);
  if (!token) fail(400,'expired_flow');
  const db = env.DB;
  const flow = await db.prepare('DELETE FROM ceremonies WHERE token_hash=? AND purpose=? AND expires>? RETURNING *')
    .bind(await hash(token),mode,now()).first();
  if (!flow) fail(400,'expired_flow');
  const response = body.credential;
  if (!response || typeof response.id !== 'string' || response.id.length > 1500) fail(400,'invalid_passkey');
  const params = { response, expectedChallenge:flow.challenge, expectedOrigin:env.ORIGIN, expectedRPID:new URL(env.ORIGIN).hostname, requireUserVerification:true };
  const sessionToken = random(32), tokenHash = await hash(sessionToken), expiry = now()+sessionSeconds;
  let id = flow.account_id, recoveryCode;
  if (mode === 'login') {
    const acct = await db.prepare('SELECT id, credential, public_key, counter, generation FROM accounts WHERE credential=?').bind(response.id).first();
    if (!acct || (response.response?.userHandle && response.response.userHandle !== acct.id)) fail(400,'invalid_passkey');
    const {authenticationInfo} = await proof(verifyAuthenticationResponse,{...params,credential:{id:acct.credential,publicKey:decode(acct.public_key),counter:acct.counter}});
    id = acct.id;
    const counter = authenticationInfo.newCounter;
    const updated = await db.prepare('UPDATE accounts SET counter=? WHERE id=? AND credential=? AND counter=? AND generation=?')
      .bind(counter,id,acct.credential,acct.counter,acct.generation).run();
    if (!updated.meta.changes) fail(409,'retry_login');
    const created = await db.prepare('INSERT INTO sessions SELECT ?,id,generation,? FROM accounts WHERE id=? AND generation=?').bind(tokenHash,expiry,id,acct.generation).run();
    if (!created.meta.changes) fail(409,'retry_login');
  } else {
    const {registrationInfo:{credential}} = await proof(verifyRegistrationResponse,params);
    const secret = Array.from(crypto.getRandomValues(new Uint8Array(16)), byte => byte.toString(16).padStart(2,'0')).join('');
    recoveryCode = secret.match(/.{4}/g).join('-');
    const recoveryHash = await hash(secret);
    const key = encode(credential.publicKey);
    const stmt = mode === 'register'
      ? db.prepare('INSERT INTO accounts (id,credential,public_key,counter,recovery_hash,progress) VALUES (?,?,?,?,?,?)')
          .bind(id,credential.id,key,credential.counter,recoveryHash,JSON.stringify(await validateChanges(env,body.initial ?? {})))
      : db.prepare('UPDATE accounts SET credential=?,public_key=?,counter=?,recovery_hash=?,generation=generation+1 WHERE id=? AND recovery_hash=?')
          .bind(credential.id,key,credential.counter,recoveryHash,id,flow.recovery_hash);
    const result = await db.batch([stmt,
      db.prepare('INSERT INTO sessions SELECT ?,id,generation,? FROM accounts WHERE id=? AND recovery_hash=?').bind(tokenHash,expiry,id,recoveryHash),
    ]);
    if (!result[1].meta.changes) fail(409,'invalid_recovery');
  }
  const row = await db.prepare('SELECT id,revision,progress FROM accounts WHERE id=?').bind(id).first();
  return json({account:profile(row),recoveryCode},200,[cookie(sessionCookie,sessionToken,sessionSeconds),cookie(flowCookie,'',0)]);
}

async function api(request, env, path) {
  if (new URL(request.url).origin !== env.ORIGIN) fail(403,'origin');
  if (request.method === 'GET' && path === '/api/account') {
    const row = await session(request,env.DB);
    return json({account:row ? profile(row) : null});
  }
  if (request.headers.get('Origin') !== env.ORIGIN) fail(403,'origin');
  if (request.method === 'POST' && /^\/api\/auth\/(register|login|recover)\/(options|finish)$/.test(path)) {
    const [, , ,mode,action] = path.split('/');
    const {success} = await env.AUTH_LIMIT.limit({key:request.headers.get('CF-Connecting-IP') || 'local'});
    if (!success) fail(429,'rate_limited');
    const body = await input(request);
    return action === 'options' ? options(mode,body,env) : finish(mode,request,body,env);
  }
  const row = await session(request,env.DB);
  if (!row) fail(401,'signed_out');
  const body = await input(request);
  if (body.account !== row.id) fail(409,'different_account');
  if (request.method === 'PATCH' && path === '/api/progress') {
    if (!Number.isSafeInteger(body.revision) || body.revision < 0) fail(400,'invalid');
    if (row.revision !== body.revision) return json({error:'conflict',account:profile(row)},409);
    const changes = await validateChanges(env,body.changes,JSON.parse(row.progress));
    const next = await env.DB.prepare('UPDATE accounts SET progress=json_patch(progress,?),revision=revision+1 WHERE id=? AND revision=? AND generation=? RETURNING id,revision,progress')
      .bind(JSON.stringify(changes),row.id,body.revision,row.generation).first();
    if (next) return json({account:profile(next)});
    const latest = await session(request,env.DB);
    if (!latest) fail(401,'signed_out');
    return json({error:'conflict',account:profile(latest)},409);
  }
  if (request.method === 'POST' && path === '/api/logout') {
    await env.DB.prepare('DELETE FROM sessions WHERE token_hash=?').bind(await hash(readToken(request,sessionCookie))).run();
  } else if (request.method === 'DELETE' && path === '/api/account') {
    const removed = await env.DB.prepare('DELETE FROM accounts WHERE id=? AND generation=?').bind(row.id,row.generation).run();
    if (!removed.meta.changes) fail(401,'signed_out');
  } else fail(404,'not_found');
  return json({ok:true},200,[cookie(sessionCookie,'',0),cookie(flowCookie,'',0)]);
}

export default {
  async fetch(request,env) {
    const {pathname} = new URL(request.url);
    if (!pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
    try { return await api(request,env,pathname); }
    catch (error) {
      if (error instanceof Problem) return json({error:error.message},error.status);
      console.error('Orbit account request failed',request.method,pathname,error.name);
      return json({error:'unavailable'},503);
    }
  },
};
