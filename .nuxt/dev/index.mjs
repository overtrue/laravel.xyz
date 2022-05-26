globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file:///Users/overtrue/www/laravel.xyz/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'http';
import { tmpdir } from 'os';
import { join } from 'path';
import { mkdirSync } from 'fs';
import { parentPort, threadId } from 'worker_threads';
import { provider, isWindows } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/std-env/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, useQuery, useCookie, createError, createApp, createRouter, lazyEventHandler, eventHandler } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/ohmyfetch/dist/node.mjs';
import destr from 'file:///Users/overtrue/www/laravel.xyz/node_modules/destr/dist/index.mjs';
import { createRouter as createRouter$1 } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/radix3/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/hookable/dist/index.mjs';
import { hash } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/ohash/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/unstorage/dist/index.mjs';
import _unstorage_drivers_fs from 'file:///Users/overtrue/www/laravel.xyz/node_modules/unstorage/dist/drivers/fs.mjs';
import { withQuery, withLeadingSlash, withoutTrailingSlash, joinURL } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/ufo/dist/index.mjs';
import { extname } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/pathe/dist/index.mjs';
import defu from 'file:///Users/overtrue/www/laravel.xyz/node_modules/defu/dist/defu.mjs';
import remarkEmoji from 'file:///Users/overtrue/www/laravel.xyz/node_modules/remark-emoji/index.js';
import rehypeSlug from 'file:///Users/overtrue/www/laravel.xyz/node_modules/rehype-slug/index.js';
import remarkSqueezeParagraphs from 'file:///Users/overtrue/www/laravel.xyz/node_modules/remark-squeeze-paragraphs/index.js';
import rehypeExternalLinks from 'file:///Users/overtrue/www/laravel.xyz/node_modules/rehype-external-links/index.js';
import remarkGfm from 'file:///Users/overtrue/www/laravel.xyz/node_modules/remark-gfm/index.js';
import rehypeSortAttributeValues from 'file:///Users/overtrue/www/laravel.xyz/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file:///Users/overtrue/www/laravel.xyz/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file:///Users/overtrue/www/laravel.xyz/node_modules/rehype-raw/index.js';
import yaml from 'file:///Users/overtrue/www/laravel.xyz/node_modules/js-yaml/dist/js-yaml.mjs';
import flat from 'file:///Users/overtrue/www/laravel.xyz/node_modules/flat/index.js';
import { unified } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/unified/index.js';
import remarkParse from 'file:///Users/overtrue/www/laravel.xyz/node_modules/remark-parse/index.js';
import remark2rehype from 'file:///Users/overtrue/www/laravel.xyz/node_modules/remark-rehype/index.js';
import { snakeCase, kebabCase, pascalCase } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/scule/dist/index.mjs';
import { visit } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/unist-util-visit/index.js';
import { stringifyEntitiesLight } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/stringify-entities/index.js';
import { parseEntities } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/parse-entities/index.js';
import { markdownLineEnding, markdownSpace, asciiAlpha, markdownLineEndingOrSpace, asciiAlphanumeric } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/micromark-util-character/index.js';
import { factorySpace } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/micromark-factory-space/index.js';
import { factoryWhitespace } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/micromark-factory-whitespace/index.js';
import { codeFenced } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/micromark-core-commonmark/index.js';
import { all } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/mdast-util-to-hast/index.js';
import { detab } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/detab/index.js';
import { u } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/unist-builder/index.js';
import { encode } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/mdurl/index.js';
import { position } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/unist-util-position/index.js';
import htmlTags from 'file:///Users/overtrue/www/laravel.xyz/node_modules/html-tags/index.js';
import slugify from 'file:///Users/overtrue/www/laravel.xyz/node_modules/slugify/slugify.js';
import { createRenderer } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/vue-bundle-renderer/dist/index.mjs';
import devalue from 'file:///Users/overtrue/www/laravel.xyz/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { renderToString } from 'file:///Users/overtrue/www/laravel.xyz/node_modules/vue/server-renderer/index.mjs';
import htmlTemplate from '/Users/overtrue/www/laravel.xyz/.nuxt/views/document.template.mjs';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{"content":{"base":"_content","tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"highlight":false,"wsUrl":"ws://localhost:3001/"}},"content":{"cacheVersion":2,"cacheIntegerity":"2586483675","transformers":["/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/server/transformers/markdown.mjs","/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/server/transformers/yaml.mjs","/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/server/transformers/json.mjs","/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/server/transformers/csv.mjs","/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/server/transformers/path-meta.mjs"],"base":"_content","watch":true,"sources":["content"],"ignores":["\\.","-"],"locales":[],"highlight":false,"markdown":{"tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"rehypePlugins":[],"remarkPlugins":[]},"yaml":{},"csv":{},"navigation":{"fields":[]}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const serverAssets = [{"baseName":"server","dir":"/Users/overtrue/www/laravel.xyz/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, _unstorage_drivers_fs({ base: asset.dir }));
}

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets);

storage.mount('content:source:content', _unstorage_drivers_fs({"name":"content","driver":"fs","prefix":"","base":"/Users/overtrue/www/laravel.xyz/content","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('root', _unstorage_drivers_fs({"driver":"fs","base":"/Users/overtrue/www/laravel.xyz","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', _unstorage_drivers_fs({"driver":"fs","base":"/Users/overtrue/www/laravel.xyz/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', _unstorage_drivers_fs({"driver":"fs","base":"/Users/overtrue/www/laravel.xyz/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', _unstorage_drivers_fs({"driver":"fs","base":"/Users/overtrue/www/laravel.xyz/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      return event.req.originalUrl || event.req.url;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(_error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(_error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    description: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: _error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (errorObject.statusCode !== 404) {
    console.error("[nuxt] [request error]", errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error) => {
    console.error("[nitro] Error while generating error response", error);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => value === null ? void 0 : value);
      if (params[key] === 0) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, queryParams) => {
  const params = {
    ...queryParams
  };
  for (const key of arrayParams) {
    if (params[key]) {
      params[key] = ensureArray(params[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      params[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => Object.freeze(params),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(params.where), q]),
    sort: $set("sort", (sort) => [...ensureArray(params.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    findOne: () => fetcher({ ...params, first: true }),
    find: () => fetcher(params),
    findSurround: (query2, options) => fetcher({ ...params, surround: { query: query2, ...options } }),
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    $not: (item, condition) => !match(item, condition),
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    $in: (item, condition) => ensureArray(condition).some((cond) => match(item, cond)),
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    $type: (item, condition) => typeof item === String(condition),
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    $lt: (item, condition) => {
      return item < condition;
    },
    $lte: (item, condition) => {
      return item <= condition;
    },
    $gt: (item, condition) => {
      return item > condition;
    },
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before || 1;
    after = after || 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    (data, params) => params.surround ? surround(data, params.surround) : data,
    (data, params) => params.skip ? data.slice(params.skip) : data,
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    (data, params) => apply(withoutKeys(params.without))(data),
    (data, params) => apply(withKeys(params.only))(data),
    (data, params) => params.first ? data[0] : data
  ];
  return async (params) => {
    const data = await getContentsList();
    return pipelines.reduce(($data, pipe) => pipe($data, params) || $data, data);
  };
}

function parseFrontMatter$1(content) {
  let data = {};
  if (content.startsWith("---\n")) {
    const idx = content.indexOf("\n---");
    if (idx !== -1) {
      const frontmatter = content.slice(4, idx);
      if (frontmatter) {
        data = yaml.load(frontmatter);
        content = content.slice(idx + 4);
      }
    }
  }
  return {
    content,
    data: flat.unflatten(data || {}, {})
  };
}

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = ["h2", "h3", "h4"].reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

const FRONTMATTER_DELIMITER = "---";
function stringifyFrontMatter(data, content = "") {
  data = flat.flatten(data, {
    safe: true
  });
  return [
    FRONTMATTER_DELIMITER,
    yaml.dump(data, { lineWidth: -1 }),
    FRONTMATTER_DELIMITER,
    content
  ].join("\n");
}
function parseFrontMatter(content) {
  let data = {};
  if (content.startsWith(FRONTMATTER_DELIMITER + "\n")) {
    const idx = content.indexOf("\n" + FRONTMATTER_DELIMITER);
    if (idx !== -1) {
      const frontmatter = content.slice(4, idx);
      if (frontmatter) {
        data = yaml.load(frontmatter);
        content = content.slice(idx + 4);
      }
    }
  }
  return {
    content,
    data: flat.unflatten(data || {}, {})
  };
}

function track(options_) {
  const options = options_ || {};
  const now = options.now || {};
  let lineShift = options.lineShift || 0;
  let line = now.line || 1;
  let column = now.column || 1;
  return { move, current, shift };
  function current() {
    return { now: { line, column }, lineShift };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(value = "") {
    const chunks = value.split(/\r?\n|\r/g);
    const tail = chunks[chunks.length - 1];
    line += chunks.length - 1;
    column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
    return value;
  }
}
function containerFlow(parent, context, safeOptions = {}) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const tracker = track(safeOptions);
  const results = [];
  let index = -1;
  indexStack.push(-1);
  while (++index < children.length) {
    const child = children[index];
    indexStack[indexStack.length - 1] = index;
    results.push(tracker.move(context.handle(child, parent, context, {
      before: "\n",
      after: "\n",
      ...tracker.current()
    })));
    if (child.type !== "list") {
      context.bulletLastUsed = void 0;
    }
    if (index < children.length - 1) {
      results.push(tracker.move(between(child, children[index + 1])));
    }
  }
  indexStack.pop();
  return results.join("");
  function between(left, right) {
    let index2 = context.join.length;
    while (index2--) {
      const result = context.join[index2](left, right, parent, context);
      if (result === true || result === 1) {
        break;
      }
      if (typeof result === "number") {
        return "\n".repeat(1 + result);
      }
      if (result === false) {
        return "\n\n<!---->\n\n";
      }
    }
    return "\n\n";
  }
}
function containerPhrasing(parent, context, safeOptions) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const results = [];
  let index = -1;
  let before = safeOptions.before;
  indexStack.push(-1);
  let tracker = track(safeOptions);
  while (++index < children.length) {
    const child = children[index];
    let after;
    indexStack[indexStack.length - 1] = index;
    if (index + 1 < children.length) {
      let handle = context.handle.handlers[children[index + 1].type];
      if (handle && handle.peek) {
        handle = handle.peek;
      }
      after = handle ? handle(children[index + 1], parent, context, {
        before: "",
        after: "",
        ...tracker.current()
      }).charAt(0) : "";
    } else {
      after = safeOptions.after;
    }
    if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
      results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " ");
      before = " ";
      tracker = track(safeOptions);
      tracker.move(results.join(""));
    }
    results.push(tracker.move(context.handle(child, parent, context, {
      ...tracker.current(),
      before,
      after
    })));
    before = results[results.length - 1].slice(-1);
  }
  indexStack.pop();
  return results.join("");
}
function checkQuote(context) {
  const marker = context.options.quote || '"';
  if (marker !== '"' && marker !== "'") {
    throw new Error("Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`");
  }
  return marker;
}

const own = {}.hasOwnProperty;
const shortcut = /^[^\t\n\r "#'.<=>`}]+$/;
const baseFense = 2;
const toMarkdown = {
  unsafe: [
    {
      character: "\r",
      inConstruct: ["leafComponentLabel", "containerComponentLabel"]
    },
    {
      character: "\n",
      inConstruct: ["leafComponentLabel", "containerComponentLabel"]
    },
    {
      before: "[^:]",
      character: ":",
      after: "[A-Za-z]",
      inConstruct: ["phrasing"]
    },
    { atBreak: true, character: ":", after: ":" }
  ],
  handlers: {
    containerComponent: containerComponent$1,
    textComponent,
    componentContainerSection
  }
};
function componentContainerSection(node, _, context) {
  context.indexStack = context.stack;
  return `#${node.name}

${content(node, context)}`;
}
function textComponent(node, _, context) {
  context.indexStack = context.stack;
  const exit = context.enter(node.type);
  let value = ":" + (node.name || "") + label$3(node, context) + attributes$3(node, context);
  value += "\n" + content(node, context);
  exit();
  return value;
}
let nest = 0;
function containerComponent$1(node, _, context) {
  context.indexStack = context.stack;
  const prefix = ":".repeat(baseFense + nest);
  nest += 1;
  const exit = context.enter(node.type);
  let value = prefix + (node.name || "") + label$3(node, context) + attributes$3(node, context);
  let subvalue;
  if (node.fmAttributes) {
    value += "\n" + stringifyFrontMatter(node.fmAttributes).trim();
  }
  if (node.type === "containerComponent") {
    subvalue = content(node, context);
    if (subvalue) {
      value += "\n" + subvalue;
    }
    value += "\n" + prefix;
    if (nest > 1) {
      value = value.split("\n").map((line) => "  " + line).join("\n");
    }
  }
  nest -= 1;
  exit();
  return value;
}
containerComponent$1.peek = function peekComponent() {
  return ":";
};
function label$3(node, context) {
  let label2 = node;
  if (node.type === "containerComponent") {
    if (!inlineComponentLabel(node)) {
      return "";
    }
    label2 = node.children[0];
  }
  const exit = context.enter("label");
  const subexit = context.enter(node.type + "Label");
  const value = containerPhrasing(label2, context, { before: "[", after: "]" });
  subexit();
  exit();
  return value ? "[" + value + "]" : "";
}
function attributes$3(node, context) {
  const quote = checkQuote(context);
  const subset = node.type === "textComponent" ? [quote] : [quote, "\n", "\r"];
  const attrs = node.attributes || {};
  const values = [];
  let id;
  let classesFull = "";
  let classes = "";
  let value;
  let key;
  let index;
  for (key in attrs) {
    if (own.call(attrs, key) && attrs[key] != null) {
      value = String(attrs[key]);
      if (key === "id") {
        id = shortcut.test(value) ? "#" + value : quoted("id", value);
      } else if (key === "class") {
        value = value.split(/[\t\n\r ]+/g);
        classesFull = [];
        classes = [];
        index = -1;
        while (++index < value.length) {
          (shortcut.test(value[index]) ? classes : classesFull).push(value[index]);
        }
        classesFull = classesFull.length ? quoted("class", classesFull.join(" ")) : "";
        classes = classes.length ? "." + classes.join(".") : "";
      } else if (key.startsWith(":") && value === "true") {
        values.push(key.slice(1));
      } else {
        values.push(quoted(key, value));
      }
    }
  }
  if (classesFull) {
    values.unshift(classesFull);
  }
  if (classes) {
    values.unshift(classes);
  }
  if (id) {
    values.unshift(id);
  }
  return values.length ? "{" + values.join(" ") + "}" : "";
  function quoted(key2, value2) {
    return key2 + "=" + quote + stringifyEntitiesLight(value2, { subset }) + quote;
  }
}
function content(node, context) {
  const content2 = inlineComponentLabel(node) ? Object.assign({}, node, { children: node.children.slice(1) }) : node;
  return containerFlow(content2, context);
}
function inlineComponentLabel(node) {
  return node.children && node.children[0] && node.children[0].data && node.children[0].data.componentLabel;
}

const canContainEols = ["textComponent"];
const enter = {
  componentContainer: enterContainer,
  componentContainerSection: enterContainerSection,
  componentContainerDataSection: enterContainerDataSection,
  componentContainerAttributes: enterAttributes,
  componentContainerLabel: enterContainerLabel,
  componentLeaf: enterLeaf,
  componentLeafAttributes: enterAttributes,
  componentText: enterText,
  textSpan: enterTextSpan,
  componentTextAttributes: enterAttributes
};
const exit = {
  componentContainerSectionTitle: exitContainerSectionTitle,
  listUnordered: conditionalExit,
  listOrdered: conditionalExit,
  listItem: conditionalExit,
  componentContainerSection: exitContainerSection,
  componentContainerDataSection: exitContainerDataSection,
  componentContainer: exitContainer,
  componentContainerAttributeClassValue: exitAttributeClassValue,
  componentContainerAttributeIdValue: exitAttributeIdValue,
  componentContainerAttributeName: exitAttributeName,
  componentContainerAttributeValue: exitAttributeValue,
  componentContainerAttributes: exitAttributes,
  componentContainerLabel: exitContainerLabel,
  componentContainerName: exitName,
  componentContainerAttributeInitializerMarker() {
    const attributes = this.getData("componentAttributes");
    attributes[attributes.length - 1][1] = "";
  },
  componentLeaf: exitToken,
  componentLeafAttributeClassValue: exitAttributeClassValue,
  componentLeafAttributeIdValue: exitAttributeIdValue,
  componentLeafAttributeName: exitAttributeName,
  componentLeafAttributeValue: exitAttributeValue,
  componentLeafAttributes: exitAttributes,
  componentLeafName: exitName,
  componentText: exitToken,
  textSpan: exitToken,
  componentTextAttributeClassValue: exitAttributeClassValue,
  componentTextAttributeIdValue: exitAttributeIdValue,
  componentTextAttributeName: exitAttributeName,
  componentTextAttributeValue: exitAttributeValue,
  componentTextAttributes: exitAttributes,
  componentTextName: exitName
};
function enterContainer(token) {
  enterToken.call(this, "containerComponent", token);
}
function exitContainer(token) {
  const container = this.stack[this.stack.length - 1];
  if (container.children.length > 1) {
    const dataSection = container.children.find((child) => child.rawData);
    container.rawData = dataSection?.rawData;
  }
  container.children = container.children.flatMap((child) => {
    if (child.rawData) {
      return [];
    }
    if (child.name === "default" || !child.name) {
      return child.children;
    }
    child.data = {
      hName: "component-slot",
      hProperties: {
        ...child.attributes,
        [`v-slot:${child.name}`]: ""
      }
    };
    return child;
  });
  this.exit(token);
}
function enterContainerSection(token) {
  enterToken.call(this, "componentContainerSection", token);
}
function enterContainerDataSection(token) {
  enterToken.call(this, "componentContainerDataSection", token);
}
function exitContainerSection(token) {
  this.exit(token);
}
function exitContainerDataSection(token) {
  let section = this.stack[this.stack.length - 1];
  while (section.type === "listItem" || section.type === "list") {
    const [stackToken] = this.tokenStack[this.tokenStack.length - 1];
    this.exit(stackToken);
    section = this.stack[this.stack.length - 1];
  }
  if (section.type === "componentContainerDataSection") {
    section.rawData = this.sliceSerialize(token);
    this.exit(token);
  }
}
function exitContainerSectionTitle(token) {
  this.stack[this.stack.length - 1].name = this.sliceSerialize(token);
}
function enterLeaf(token) {
  enterToken.call(this, "leafComponent", token);
}
function enterTextSpan(token) {
  this.enter({ type: "textComponent", name: "span", attributes: {}, children: [] }, token);
}
function enterText(token) {
  enterToken.call(this, "textComponent", token);
}
function enterToken(type, token) {
  this.enter({ type, name: "", attributes: {}, children: [] }, token);
}
function exitName(token) {
  this.stack[this.stack.length - 1].name = this.sliceSerialize(token);
}
function enterContainerLabel(token) {
  this.enter({ type: "paragraph", data: { componentLabel: true }, children: [] }, token);
}
function exitContainerLabel(token) {
  this.exit(token);
}
function enterAttributes() {
  this.setData("componentAttributes", []);
  this.buffer();
}
function exitAttributeIdValue(token) {
  this.getData("componentAttributes").push(["id", parseEntities(this.sliceSerialize(token))]);
}
function exitAttributeClassValue(token) {
  this.getData("componentAttributes").push(["class", parseEntities(this.sliceSerialize(token))]);
}
function exitAttributeValue(token) {
  const attributes = this.getData("componentAttributes");
  attributes[attributes.length - 1][1] = parseEntities(this.sliceSerialize(token));
}
function exitAttributeName(token) {
  this.getData("componentAttributes").push([this.sliceSerialize(token), true]);
}
function exitAttributes() {
  const attributes = this.getData("componentAttributes");
  const cleaned = {};
  let index = -1;
  let attribute;
  while (++index < attributes.length) {
    attribute = attributes[index];
    const name = kebabCase(attribute[0]);
    if (name === "class" && cleaned.class) {
      cleaned.class += " " + attribute[1];
    } else {
      cleaned[name] = attribute[1];
    }
  }
  this.setData("componentAttributes");
  this.resume();
  let stackTop = this.stack[this.stack.length - 1];
  if (stackTop.type === "paragraph") {
    stackTop = stackTop.children[stackTop.children.length - 1];
  }
  stackTop.attributes = cleaned;
}
function exitToken(token) {
  this.exit(token);
}
function conditionalExit(token) {
  const [section] = this.tokenStack[this.tokenStack.length - 1];
  if (section.type === token.type) {
    this.exit(token);
  }
}
const fromMarkdown = {
  canContainEols,
  enter,
  exit
};

const ContainerSequenceSize = 2;
const SectionSequenceSize = 3;
const slotSeparatorCode = 35;
const slotSeparatorLength = 1;
const Codes = {
  EOF: null,
  quotationMark: 34,
  hash: 35,
  apostrophe: 39,
  backTick: 96,
  backSlash: 92,
  colon: 58,
  LessThan: 60,
  equals: 61,
  greaterThan: 62,
  dash: 45,
  dot: 46,
  space: 32,
  openingSquareBracket: 91,
  closingSquareBracket: 93,
  openingCurlyBracket: 123,
  closingCurlyBracket: 125,
  openingParentheses: 40,
  closingParentheses: 41,
  underscore: 95,
  uppercaseX: 88,
  lowercaseX: 120
};

function createLabel(effects, ok, nok, type, markerType, stringType, disallowEol) {
  let size = 0;
  let balance = 0;
  return start;
  function start(code) {
    if (code !== Codes.openingSquareBracket) {
      throw new Error("expected `[`");
    }
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    return afterStart;
  }
  function afterStart(code) {
    if (code === Codes.closingSquareBracket) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    return atBreak(code);
  }
  function atBreak(code) {
    if (code === Codes.EOF || size > 999) {
      return nok(code);
    }
    if (code === Codes.closingSquareBracket && !balance--) {
      return atClosingBrace(code);
    }
    if (markdownLineEnding(code)) {
      if (disallowEol) {
        return nok(code);
      }
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkText", { contentType: "text" });
    return label(code);
  }
  function label(code) {
    if (code === Codes.EOF || markdownLineEnding(code) || size > 999) {
      effects.exit("chunkText");
      return atBreak(code);
    }
    if (code === Codes.openingSquareBracket && ++balance > 3) {
      return nok(code);
    }
    if (code === Codes.closingSquareBracket && !balance--) {
      effects.exit("chunkText");
      return atClosingBrace(code);
    }
    effects.consume(code);
    return code === Codes.backSlash ? labelEscape : label;
  }
  function atClosingBrace(code) {
    effects.exit(stringType);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.exit(type);
    return ok;
  }
  function labelEscape(code) {
    if (code === Codes.openingSquareBracket || code === Codes.backSlash || code === Codes.closingSquareBracket) {
      effects.consume(code);
      size++;
      return label;
    }
    return label(code);
  }
}

const label$2 = { tokenize: tokenizeLabel$2, partial: true };
const gfmCheck = { tokenize: checkGfmTaskCheckbox, partial: true };
function tokenize$4(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code !== Codes.openingSquareBracket) {
      throw new Error("expected `[`");
    }
    if (self.previous === Codes.EOF && self._gfmTasklistFirstContentOfListItem) {
      return effects.check(gfmCheck, nok, attemptLabel)(code);
    }
    return attemptLabel(code);
  }
  function attemptLabel(code) {
    effects.enter("textSpan");
    return effects.attempt(label$2, exit, nok)(code);
  }
  function exit(code) {
    if (code === Codes.openingParentheses || code === Codes.openingSquareBracket) {
      return nok(code);
    }
    effects.exit("textSpan");
    return ok(code);
  }
}
function tokenizeLabel$2(effects, ok, nok) {
  return createLabel(effects, ok, nok, "componentTextLabel", "componentTextLabelMarker", "componentTextLabelString");
}
const tokenizeSpan = {
  tokenize: tokenize$4
};
function checkGfmTaskCheckbox(effects, ok, nok) {
  return enter;
  function enter(code) {
    effects.enter("formGfmTaskCheckbox");
    effects.consume(code);
    return check;
  }
  function check(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return check;
    }
    if (code === Codes.uppercaseX || code === Codes.lowercaseX) {
      effects.consume(code);
      return check;
    }
    if (code === Codes.closingSquareBracket) {
      effects.exit("formGfmTaskCheckbox");
      return ok(code);
    }
    return nok(code);
  }
}

function createAttributes(effects, ok, nok, attributesType, attributesMarkerType, attributeType, attributeIdType, attributeClassType, attributeNameType, attributeInitializerType, attributeValueLiteralType, attributeValueType, attributeValueMarker, attributeValueData, disallowEol) {
  let type;
  let marker;
  return start;
  function start(code) {
    effects.enter(attributesType);
    effects.enter(attributesMarkerType);
    effects.consume(code);
    effects.exit(attributesMarkerType);
    return between;
  }
  function between(code) {
    if (code === Codes.hash) {
      type = attributeIdType;
      return shortcutStart(code);
    }
    if (code === Codes.dot) {
      type = attributeClassType;
      return shortcutStart(code);
    }
    if (code === Codes.colon || code === Codes.underscore || asciiAlpha(code)) {
      effects.enter(attributeType);
      effects.enter(attributeNameType);
      effects.consume(code);
      return code === Codes.colon ? bindAttributeName : name;
    }
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, between, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, between)(code);
    }
    return end(code);
  }
  function shortcutStart(code) {
    effects.enter(attributeType);
    effects.enter(type);
    effects.enter(type + "Marker");
    effects.consume(code);
    effects.exit(type + "Marker");
    return shortcutStartAfter;
  }
  function shortcutStartAfter(code) {
    if (code === Codes.EOF || code === Codes.quotationMark || code === Codes.hash || code === Codes.apostrophe || code === Codes.dot || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick || code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code)) {
      return nok(code);
    }
    effects.enter(type + "Value");
    effects.consume(code);
    return shortcut;
  }
  function shortcut(code) {
    if (code === Codes.EOF || code === Codes.quotationMark || code === Codes.apostrophe || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick) {
      return nok(code);
    }
    if (code === Codes.hash || code === Codes.dot || code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code)) {
      effects.exit(type + "Value");
      effects.exit(type);
      effects.exit(attributeType);
      return between(code);
    }
    effects.consume(code);
    return shortcut;
  }
  function bindAttributeName(code) {
    if (code === Codes.dash || asciiAlphanumeric(code)) {
      effects.consume(code);
      return bindAttributeName;
    }
    effects.exit(attributeNameType);
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, bindAttributeNameAfter, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, bindAttributeNameAfter)(code);
    }
    return bindAttributeNameAfter(code);
  }
  function bindAttributeNameAfter(code) {
    if (code === Codes.equals) {
      effects.enter(attributeInitializerType);
      effects.consume(code);
      effects.exit(attributeInitializerType);
      return valueBefore;
    }
    effects.exit(attributeType);
    return nok(code);
  }
  function name(code) {
    if (code === Codes.dash || code === Codes.dot || code === Codes.colon || code === Codes.underscore || asciiAlphanumeric(code)) {
      effects.consume(code);
      return name;
    }
    effects.exit(attributeNameType);
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, nameAfter, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, nameAfter)(code);
    }
    return nameAfter(code);
  }
  function nameAfter(code) {
    if (code === Codes.equals) {
      effects.enter(attributeInitializerType);
      effects.consume(code);
      effects.exit(attributeInitializerType);
      return valueBefore;
    }
    effects.exit(attributeType);
    return between(code);
  }
  function valueBefore(code) {
    if (code === Codes.EOF || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick || code === Codes.closingCurlyBracket || disallowEol && markdownLineEnding(code)) {
      return nok(code);
    }
    if (code === Codes.quotationMark || code === Codes.apostrophe) {
      effects.enter(attributeValueLiteralType);
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      marker = code;
      return valueQuotedStart;
    }
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, valueBefore, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, valueBefore)(code);
    }
    effects.enter(attributeValueType);
    effects.enter(attributeValueData);
    effects.consume(code);
    marker = void 0;
    return valueUnquoted;
  }
  function valueUnquoted(code) {
    if (code === Codes.EOF || code === Codes.quotationMark || code === Codes.apostrophe || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick) {
      return nok(code);
    }
    if (code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code)) {
      effects.exit(attributeValueData);
      effects.exit(attributeValueType);
      effects.exit(attributeType);
      return between(code);
    }
    effects.consume(code);
    return valueUnquoted;
  }
  function valueQuotedStart(code) {
    if (code === marker) {
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      effects.exit(attributeValueLiteralType);
      effects.exit(attributeType);
      return valueQuotedAfter;
    }
    effects.enter(attributeValueType);
    return valueQuotedBetween(code);
  }
  function valueQuotedBetween(code) {
    if (code === marker) {
      effects.exit(attributeValueType);
      return valueQuotedStart(code);
    }
    if (code === Codes.EOF) {
      return nok(code);
    }
    if (markdownLineEnding(code)) {
      return disallowEol ? nok(code) : factoryWhitespace(effects, valueQuotedBetween)(code);
    }
    effects.enter(attributeValueData);
    effects.consume(code);
    return valueQuoted;
  }
  function valueQuoted(code) {
    if (code === marker || code === Codes.EOF || markdownLineEnding(code)) {
      effects.exit(attributeValueData);
      return valueQuotedBetween(code);
    }
    effects.consume(code);
    return valueQuoted;
  }
  function valueQuotedAfter(code) {
    return code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code) ? between(code) : end(code);
  }
  function end(code) {
    if (code === Codes.closingCurlyBracket) {
      effects.enter(attributesMarkerType);
      effects.consume(code);
      effects.exit(attributesMarkerType);
      effects.exit(attributesType);
      return ok;
    }
    return nok(code);
  }
}

const attributes$2 = { tokenize: tokenizeAttributes$2, partial: true };
const validEvents = [
  "textSpan",
  "attentionSequence",
  "codeText",
  "link",
  "image"
];
function tokenize$3(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code !== Codes.openingCurlyBracket) {
      throw new Error("expected `{`");
    }
    const event = self.events[self.events.length - 1];
    if (markdownLineEnding(self.previous) || !event || !validEvents.includes(event[1].type)) {
      return nok;
    }
    return effects.attempt(attributes$2, ok, nok)(code);
  }
}
function tokenizeAttributes$2(effects, ok, nok) {
  return createAttributes(effects, ok, nok, "componentTextAttributes", "componentTextAttributesMarker", "componentTextAttribute", "componentTextAttributeId", "componentTextAttributeClass", "componentTextAttributeName", "componentTextAttributeInitializerMarker", "componentTextAttributeValueLiteral", "componentTextAttributeValue", "componentTextAttributeValueMarker", "componentTextAttributeValueData");
}
const tokenizeAttribute = {
  tokenize: tokenize$3
};

function createName(effects, ok, nok, nameType) {
  const self = this;
  return start;
  function start(code) {
    if (asciiAlpha(code)) {
      effects.enter(nameType);
      effects.consume(code);
      return name;
    }
    return nok(code);
  }
  function name(code) {
    if (code === Codes.dash || code === Codes.underscore || asciiAlphanumeric(code)) {
      effects.consume(code);
      return name;
    }
    effects.exit(nameType);
    return self.previous === Codes.underscore ? nok(code) : ok(code);
  }
}

const label$1 = { tokenize: tokenizeLabel$1, partial: true };
const attributes$1 = { tokenize: tokenizeAttributes$1, partial: true };
function previous(code) {
  return code !== Codes.colon || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenize$2(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code !== Codes.colon) {
      throw new Error("expected `:`");
    }
    if (self.previous !== null && !markdownLineEndingOrSpace(self.previous) && ![Codes.openingSquareBracket].includes(self.previous)) {
      return nok(code);
    }
    if (!previous.call(self, self.previous)) {
      throw new Error("expected correct previous");
    }
    effects.enter("componentText");
    effects.enter("componentTextMarker");
    effects.consume(code);
    effects.exit("componentTextMarker");
    return createName.call(self, effects, afterName, nok, "componentTextName");
  }
  function afterName(code) {
    if (code === Codes.colon) {
      return nok(code);
    }
    if (code === Codes.openingSquareBracket) {
      return effects.attempt(label$1, afterLabel, afterLabel)(code);
    }
    if (code === Codes.openingCurlyBracket) {
      return effects.attempt(attributes$1, afterAttributes, afterAttributes)(code);
    }
    return exit(code);
  }
  function afterAttributes(code) {
    if (code === Codes.openingSquareBracket) {
      return effects.attempt(label$1, afterLabel, afterLabel)(code);
    }
    return exit(code);
  }
  function afterLabel(code) {
    if (code === Codes.openingCurlyBracket) {
      return effects.attempt(attributes$1, exit, exit)(code);
    }
    return exit(code);
  }
  function exit(code) {
    if (!markdownLineEndingOrSpace(code) && code !== null && ![Codes.closingSquareBracket].includes(code)) {
      return nok(code);
    }
    effects.exit("componentText");
    return ok(code);
  }
}
function tokenizeLabel$1(effects, ok, nok) {
  return createLabel(effects, ok, nok, "componentTextLabel", "componentTextLabelMarker", "componentTextLabelString");
}
function tokenizeAttributes$1(effects, ok, nok) {
  return createAttributes(effects, ok, nok, "componentTextAttributes", "componentTextAttributesMarker", "componentTextAttribute", "componentTextAttributeId", "componentTextAttributeClass", "componentTextAttributeName", "componentTextAttributeInitializerMarker", "componentTextAttributeValueLiteral", "componentTextAttributeValue", "componentTextAttributeValueMarker", "componentTextAttributeValueData");
}
const tokenizeInline = {
  tokenize: tokenize$2,
  previous
};

function sizeChunks(chunks) {
  let index = -1;
  let size = 0;
  while (++index < chunks.length) {
    size += typeof chunks[index] === "string" ? chunks[index].length : 1;
  }
  return size;
}
function prefixSize(events, type) {
  const tail = events[events.length - 1];
  if (!tail || tail[1].type !== type) {
    return 0;
  }
  return sizeChunks(tail[2].sliceStream(tail[1]));
}
function linePrefixSize(events) {
  let size = 0;
  let index = events.length - 1;
  let tail = events[index];
  while (index >= 0 && tail && tail[1].type === "linePrefix" && tail[0] === "exit") {
    size += sizeChunks(tail[2].sliceStream(tail[1]));
    index -= 1;
    tail = events[index];
  }
  return size;
}
const useTokenState = (tokenName) => {
  const token = {
    isOpen: false,
    enter: (effects) => {
      const initialState = token.isOpen;
      token.exit(effects);
      effects.enter(tokenName);
      token.isOpen = true;
      return () => {
        token.isOpen = initialState;
      };
    },
    enterOnce: (effects) => {
      const initialState = token.isOpen;
      if (!token.isOpen) {
        effects.enter(tokenName);
        token.isOpen = true;
      }
      return () => {
        token.isOpen = initialState;
      };
    },
    exit: (effects) => {
      const initialState = token.isOpen;
      if (token.isOpen) {
        effects.exit(tokenName);
        token.isOpen = false;
      }
      return () => {
        token.isOpen = initialState;
      };
    }
  };
  return token;
};

function tokenizeFrontMatter(effects, ok, _nok, next, initialPrefix) {
  let previous;
  return effects.attempt({
    tokenize: tokenizeDataSection,
    partial: true
  }, dataSectionOpen, next);
  function tokenizeDataSection(effects2, ok2, nok) {
    const self = this;
    let size = 0;
    let sectionIndentSize = 0;
    return closingPrefixAfter;
    function dataLineFirstSpaces(code) {
      if (markdownSpace(code)) {
        effects2.consume(code);
        sectionIndentSize += 1;
        return dataLineFirstSpaces;
      }
      effects2.exit("space");
      return closingPrefixAfter(code);
    }
    function closingPrefixAfter(code) {
      if (markdownSpace(code)) {
        effects2.enter("space");
        return dataLineFirstSpaces(code);
      }
      if (sectionIndentSize === 0) {
        sectionIndentSize = linePrefixSize(self.events);
      }
      effects2.enter("componentContainerSectionSequence");
      return closingSectionSequence(code);
    }
    function closingSectionSequence(code) {
      if (code === Codes.dash || markdownSpace(code)) {
        effects2.consume(code);
        size++;
        return closingSectionSequence;
      }
      if (size < SectionSequenceSize) {
        return nok(code);
      }
      if (sectionIndentSize !== initialPrefix) {
        return nok(code);
      }
      if (!markdownLineEnding(code)) {
        return nok(code);
      }
      effects2.exit("componentContainerSectionSequence");
      return factorySpace(effects2, ok2, "whitespace")(code);
    }
  }
  function dataSectionOpen(code) {
    effects.enter("componentContainerDataSection");
    return effects.attempt({
      tokenize: tokenizeDataSection,
      partial: true
    }, dataSectionClose, dataChunkStart)(code);
  }
  function dataChunkStart(code) {
    if (code === null) {
      effects.exit("componentContainerDataSection");
      effects.exit("componentContainer");
      return ok(code);
    }
    const token = effects.enter("chunkDocument", {
      contentType: "document",
      previous
    });
    if (previous) {
      previous.next = token;
    }
    previous = token;
    return dataContentContinue(code);
  }
  function dataContentContinue(code) {
    if (code === null) {
      effects.exit("chunkDocument");
      effects.exit("componentContainerDataSection");
      effects.exit("componentContainer");
      return ok(code);
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit("chunkDocument");
      return effects.attempt({
        tokenize: tokenizeDataSection,
        partial: true
      }, dataSectionClose, dataChunkStart);
    }
    effects.consume(code);
    return dataContentContinue;
  }
  function dataSectionClose(code) {
    effects.exit("componentContainerDataSection");
    return factorySpace(effects, next, "whitespace")(code);
  }
}

const label = { tokenize: tokenizeLabel, partial: true };
const attributes = { tokenize: tokenizeAttributes, partial: true };
function tokenize$1(effects, ok, nok) {
  const self = this;
  const initialPrefix = linePrefixSize(this.events);
  let sizeOpen = 0;
  let previous;
  const childContainersSequenceSize = [];
  let containerFirstLine = true;
  const section = useTokenState("componentContainerSection");
  return start;
  function start(code) {
    if (code !== Codes.colon) {
      throw new Error("expected `:`");
    }
    effects.enter("componentContainer");
    effects.enter("componentContainerFence");
    effects.enter("componentContainerSequence");
    return sequenceOpen(code);
  }
  function tokenizeSectionClosing(effects2, ok2, nok2) {
    let size = 0;
    let sectionIndentSize = 0;
    let revertSectionState;
    return closingPrefixAfter;
    function closingPrefixAfter(code) {
      sectionIndentSize = linePrefixSize(self.events);
      revertSectionState = section.exit(effects2);
      effects2.enter("componentContainerSectionSequence");
      return closingSectionSequence(code);
    }
    function closingSectionSequence(code) {
      if (code === slotSeparatorCode) {
        effects2.consume(code);
        size++;
        return closingSectionSequence;
      }
      if (size !== slotSeparatorLength) {
        revertSectionState();
        return nok2(code);
      }
      if (sectionIndentSize !== initialPrefix) {
        revertSectionState();
        return nok2(code);
      }
      if (!asciiAlpha(code)) {
        revertSectionState();
        return nok2(code);
      }
      effects2.exit("componentContainerSectionSequence");
      return factorySpace(effects2, ok2, "whitespace")(code);
    }
  }
  function sectionOpen(code) {
    section.enter(effects);
    if (markdownLineEnding(code)) {
      return factorySpace(effects, lineStart, "whitespace")(code);
    }
    effects.enter("componentContainerSectionTitle");
    return sectionTitle(code);
  }
  function sectionTitle(code) {
    if (markdownLineEnding(code)) {
      effects.exit("componentContainerSectionTitle");
      return factorySpace(effects, lineStart, "linePrefix", 4)(code);
    }
    effects.consume(code);
    return sectionTitle;
  }
  function sequenceOpen(code) {
    if (code === Codes.colon) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }
    if (sizeOpen < ContainerSequenceSize) {
      return nok(code);
    }
    effects.exit("componentContainerSequence");
    return createName.call(self, effects, afterName, nok, "componentContainerName")(code);
  }
  function afterName(code) {
    return code === Codes.openingSquareBracket ? effects.attempt(label, afterLabel, afterLabel)(code) : afterLabel(code);
  }
  function afterLabel(code) {
    return code === Codes.openingCurlyBracket ? effects.attempt(attributes, afterAttributes, afterAttributes)(code) : afterAttributes(code);
  }
  function afterAttributes(code) {
    return factorySpace(effects, openAfter, "whitespace")(code);
  }
  function openAfter(code) {
    effects.exit("componentContainerFence");
    if (code === null) {
      effects.exit("componentContainer");
      return ok(code);
    }
    if (markdownLineEnding(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return self.interrupt ? ok : contentStart;
    }
    return nok(code);
  }
  function contentStart(code) {
    if (code === null) {
      effects.exit("componentContainer");
      return ok(code);
    }
    if (containerFirstLine && (code === Codes.dash || markdownSpace(code))) {
      containerFirstLine = false;
      return tokenizeFrontMatter(effects, ok, nok, contentStart, initialPrefix)(code);
    }
    effects.enter("componentContainerContent");
    return lineStart(code);
  }
  function lineStartAfterPrefix(code) {
    if (code === null) {
      return after(code);
    }
    if (!childContainersSequenceSize.length && (code === slotSeparatorCode || code === Codes.space)) {
      return effects.attempt({ tokenize: tokenizeSectionClosing, partial: true }, sectionOpen, chunkStart)(code);
    }
    if (code === Codes.colon) {
      return effects.attempt({ tokenize: tokenizeClosingFence, partial: true }, after, chunkStart)(code);
    }
    return chunkStart(code);
  }
  function lineStart(code) {
    if (code === null) {
      return after(code);
    }
    return initialPrefix ? factorySpace(effects, lineStartAfterPrefix, "linePrefix", initialPrefix + 1)(code) : lineStartAfterPrefix(code);
  }
  function chunkStart(code) {
    if (code === null) {
      return after(code);
    }
    section.enterOnce(effects);
    const token = effects.enter("chunkDocument", {
      contentType: "document",
      previous
    });
    if (previous) {
      previous.next = token;
    }
    previous = token;
    return contentContinue(code);
  }
  function contentContinue(code) {
    if (code === null) {
      effects.exit("chunkDocument");
      return after(code);
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit("chunkDocument");
      return lineStart;
    }
    effects.consume(code);
    return contentContinue;
  }
  function after(code) {
    section.exit(effects);
    effects.exit("componentContainerContent");
    effects.exit("componentContainer");
    return ok(code);
  }
  function tokenizeClosingFence(effects2, ok2, nok2) {
    let size = 0;
    return factorySpace(effects2, closingPrefixAfter, "linePrefix", 4);
    function closingPrefixAfter(code) {
      effects2.enter("componentContainerFence");
      effects2.enter("componentContainerSequence");
      return closingSequence(code);
    }
    function closingSequence(code) {
      if (code === Codes.colon) {
        effects2.consume(code);
        size++;
        return closingSequence;
      }
      if (childContainersSequenceSize.length) {
        if (size === childContainersSequenceSize[childContainersSequenceSize.length - 1]) {
          childContainersSequenceSize.pop();
        }
        return nok2(code);
      }
      if (size !== sizeOpen) {
        return nok2(code);
      }
      effects2.exit("componentContainerSequence");
      return factorySpace(effects2, closingSequenceEnd, "whitespace")(code);
    }
    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects2.exit("componentContainerFence");
        return ok2(code);
      }
      childContainersSequenceSize.push(size);
      return nok2(code);
    }
  }
}
function tokenizeLabel(effects, ok, nok) {
  return createLabel(effects, ok, nok, "componentContainerLabel", "componentContainerLabelMarker", "componentContainerLabelString", true);
}
function tokenizeAttributes(effects, ok, nok) {
  return createAttributes(effects, ok, nok, "componentContainerAttributes", "componentContainerAttributesMarker", "componentContainerAttribute", "componentContainerAttributeId", "componentContainerAttributeClass", "componentContainerAttributeName", "componentContainerAttributeInitializerMarker", "componentContainerAttributeValueLiteral", "componentContainerAttributeValue", "componentContainerAttributeValueMarker", "componentContainerAttributeValueData", true);
}
const tokenizeContainer = {
  tokenize: tokenize$1,
  concrete: true
};

function tokenize(effects, ok, nok) {
  const self = this;
  return factorySpace(effects, lineStart, "linePrefix");
  function lineStart(code) {
    if (prefixSize(self.events, "linePrefix") < 4) {
      return nok(code);
    }
    switch (code) {
      case Codes.backTick:
        return codeFenced.tokenize.call(self, effects, ok, nok)(code);
      case Codes.colon:
        return tokenizeContainer.tokenize.call(self, effects, ok, nok)(code);
      default:
        return nok(code);
    }
  }
}
const tokenizeContainerIndented = {
  tokenize
};

function micromarkComponentsExtension() {
  return {
    text: {
      [Codes.colon]: tokenizeInline,
      [Codes.openingSquareBracket]: [tokenizeSpan],
      [Codes.openingCurlyBracket]: tokenizeAttribute
    },
    flow: {
      [Codes.colon]: [tokenizeContainer]
    },
    flowInitial: {
      "-2": tokenizeContainerIndented,
      "-1": tokenizeContainerIndented,
      [Codes.space]: tokenizeContainerIndented
    }
  };
}

const toFrontMatter = (yamlString) => `---
${yamlString}
---`;
const remarkMDC = (function({ components = [] } = {}) {
  const data = this.data();
  add("micromarkExtensions", micromarkComponentsExtension());
  add("fromMarkdownExtensions", fromMarkdown);
  add("toMarkdownExtensions", toMarkdown);
  function add(field, value) {
    if (!data[field]) {
      data[field] = [];
    }
    data[field].push(value);
  }
  if (components.length) {
    return async (tree, { data: data2 }) => {
      const jobs = [];
      visit(tree, ["textComponent", "leafComponent", "containerComponent"], (node) => {
        bindNode(node);
        const { instance: handler, options } = components.find((c) => c.name === node.name) || {};
        if (handler) {
          jobs.push(handler(options)(node, data2));
        }
      });
      await Promise.all(jobs);
      return tree;
    };
  }
  return (tree) => {
    visit(tree, ["textComponent", "leafComponent", "containerComponent"], (node) => {
      bindNode(node);
    });
  };
});
function bindNode(node) {
  const nodeData = node.data || (node.data = {});
  node.fmAttributes = getNodeData(node);
  nodeData.hName = kebabCase(node.name);
  nodeData.hProperties = bindData({
    ...node.attributes,
    ...node.fmAttributes
  });
}
function getNodeData(node) {
  if (!node.rawData) {
    return {};
  }
  const yaml = node.rawData.replace(/\s-+$/, "");
  const { data } = parseFrontMatter(toFrontMatter(yaml));
  return data;
}
function bindData(data) {
  const entries = Object.entries(data).map(([key, value]) => {
    if (key.startsWith(":")) {
      return [key, value];
    }
    if (typeof value === "string") {
      return [key, value];
    }
    return [`:${key}`, JSON.stringify(value)];
  });
  return Object.fromEntries(entries);
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]+)}/);
  const filenameTokens = lang.match(/\[(.+)\]/);
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) ? filenameTokens[1] : void 0
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(node.position, "code", {
    language,
    filename,
    highlights,
    code
  }, [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]);
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(h({}, "input", {
      type: "checkbox",
      checked: node.checked,
      disabled: true
    }));
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h({
    start: position(result[1]).start,
    end: position(result[result.length - 1]).end
  }, "tbody", wrap(result.slice(1), true));
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.type === "element") {
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children.flatMap((child) => {
          if (child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {}
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return null;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return null;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}

const usePlugins = (plugins, stream) => plugins.reduce((stream2, plugin) => stream2.use(plugin[0] || plugin, plugin[1] || void 0), stream);
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process({
      value: content,
      data: options.data
    }, (error, file) => {
      if (error) {
        return reject(error);
      }
      Object.assign(options.data, file?.data || {});
      resolve(file?.result);
    });
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: [
    remarkEmoji,
    remarkSqueezeParagraphs,
    remarkGfm
  ],
  rehypePlugins: [
    rehypeSlug,
    rehypeExternalLinks,
    rehypeSortAttributeValues,
    rehypeSortAttributes,
    [rehypeRaw, { passThrough: ["element"] }]
  ]
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter$1(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
  return content;
}

const importPlugin = async (p) => [
  await import(p[0]).then((res) => res.default || res),
  typeof p[1] === "object" ? { ...p[1] } : p[1]
];
const markdown_2c8c94e9 = {
  name: "markdown",
  extentions: [".md"],
  parse: async (_id, content) => {
    const config = { ...useRuntimeConfig().content?.markdown || {} };
    config.rehypePlugins = await Promise.all((config.rehypePlugins || []).map(importPlugin));
    config.remarkPlugins = await Promise.all((config.remarkPlugins || []).map(importPlugin));
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
};

const yaml_18453fa1 = {
  name: "Yaml",
  extentions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter$1(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
};

const json_846cad3c = {
  name: "Json",
  extentions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed = content;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('file:///Users/overtrue/www/laravel.xyz/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
};

const csv_221e5148 = {
  name: "csv",
  extentions: [".csv"],
  parse: async (_id, content) => {
    const config = { ...useRuntimeConfig().content?.csv || {} };
    const csvToJson = await import('file:///Users/overtrue/www/laravel.xyz/node_modules/csvtojson/v2/index.js').then((m) => m.default || m);
    const parsed = await csvToJson({ output: "json", ...config }).fromString(content);
    return {
      _id,
      _type: "csv",
      body: parsed
    };
  }
};

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta_27c4fa03 = {
  name: "path-meta",
  extentions: [".*"],
  transform(content) {
    const { locales, defaultLocale } = useRuntimeConfig().content || {};
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = parts.join("/");
    return {
      _path: generatePath(filePath),
      _draft: isDraft(filePath),
      _partial: isPartial(filePath),
      _locale,
      ...content,
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
};
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path) => withLeadingSlash(withoutTrailingSlash(path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/")));
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index/, "").replace(/\.draft/, "");
}

const transformers = [markdown_2c8c94e9, yaml_18453fa1, json_846cad3c, csv_221e5148, pathMeta_27c4fa03];
const getParser = (ext) => transformers.find(p => ext.match(new RegExp(p.extentions.join("|"),  "i")) && p.parse);
const getTransformers = (ext) => transformers.filter(p => ext.match(new RegExp(p.extentions.join("|"),  "i")) && p.transform);

async function parseContent(id, content) {
  const ext = extname(id);
  const plugin = getParser(ext);
  if (!plugin) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return {
      _id: id,
      body: content
    };
  }
  const parsed = await plugin.parse(id, content);
  const transformers = getTransformers(ext);
  const result = await transformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    return cur.transform(next);
  }, Promise.resolve(parsed));
  return result;
}

const isPreview = (event) => {
  const previewToken = useQuery(event).previewToken || useCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = useQuery(event).previewToken || useCookie(event, "previewToken");
  return { key };
};

const sourceStorage = prefixStorage(useStorage(), "content:source");
prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const contentIgnores = contentConfig.ignores.map((p) => typeof p === "string" ? new RegExp(`^${p}`) : p);
const contentIgnorePredicate = (key) => !key.startsWith("preview:") && !contentIgnores.some((prefix) => key.split(":").some((k) => prefix.test(k)));
const getContentsIds = async (event, prefix) => {
  let keys = [];
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(previewKeys.map(async (key2) => {
        const meta = await sourceStorage.getMeta(key2);
        if (meta?.__deleted) {
          keysSet.delete(key2.substring(previewPrefix.length));
        } else {
          keysSet.add(key2.substring(previewPrefix.length));
        }
      }));
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  const meta = await sourceStorage.getMeta(id);
  const hash$1 = hash({
    meta,
    version: contentConfig.cacheVersion,
    integerity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
  });
  return parsed;
};
function serverQueryContent(event, path, ...pathParts) {
  let params = path || {};
  if (typeof path === "string") {
    path = withLeadingSlash(joinURL(path, ...pathParts));
    params = {
      where: [{ _path: new RegExp(`^${path}`) }]
    };
  }
  const pipelineFetcher = createPipelineFetcher(() => getContentsList(event));
  if (!params.sort?.length) {
    params.sort = [{ _file: 1, $numeric: true }];
  }
  return createQuery(pipelineFetcher, params);
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const memory = {};
const getContentQuery = (event) => {
  const { qid } = event.context.params;
  const query = useQuery(event) || {};
  if (qid && query._params) {
    memory[qid] = parseQueryParams(query._params);
    return memory[qid];
  }
  if (memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseQueryParams(query._params);
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  query.where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      query.where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = query.sort.split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where[key] = query[key];
  }
  return query;
};

const _146187 = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const contents = await serverQueryContent(event, query).find();
  if (query.first && Array.isArray(contents) && contents.length === 0) {
    throw createError({
      statusMessage: "Document not found!",
      statusCode: 404,
      data: {
        description: "Could not find document for the given query.",
        query
      }
    });
  }
  return contents;
});

const _220963 = defineEventHandler(async (event) => {
  const now = Date.now();
  await serverQueryContent(event).find();
  return {
    generatedAt: now,
    generateTime: Date.now() - now
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().content;
  const pickNavigationFields = pick(["title", ...navigation.fields]);
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => {
      return {
        title: content2.title,
        _path: content2._path,
        _file: content2._file,
        children: [],
        ...pickNavigationFields(content2),
        ...content2._draft ? { _draft: true } : {}
      };
    };
    const navItem = getNavItem(content);
    if (isIndex) {
      const indexItem = getNavItem(content);
      navItem.children.push(indexItem);
      Object.assign(navItem, pickNavigationFields(configs[navItem._path]));
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        const conf = configs[currentPathPart];
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}

const _108785 = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const contents = await serverQueryContent(event, query).where({
    _partial: false
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

const _lazy_369246 = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/__nuxt_error', handler: _lazy_369246, lazy: true, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid', handler: _146187, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _146187, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache', handler: _220963, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _108785, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _108785, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_369246, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();

const server = new Server(nitroApp.h3App.nodeHandler);
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection]", err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException]", err));
}

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const getClientManifest = () => import('/Users/overtrue/www/laravel.xyz/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r);
const getServerEntry = () => import('/Users/overtrue/www/laravel.xyz/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const clientManifest = await getClientManifest();
  if (!clientManifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const renderToString$1 = async (input, context) => {
    const html = await renderToString(input, context);
    return `<div id="__nuxt">${html}</div>`;
  };
  return createRenderer(createSSRApp, {
    clientManifest,
    renderToString: renderToString$1,
    publicPath: buildAssetsURL()
  });
});
const getSPARenderer = lazyCachedFunction(async () => {
  const clientManifest = await getClientManifest();
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      serverRendered: false,
      config: {
        public: config.public,
        app: config.app
      }
    };
    let entryFiles = Object.values(clientManifest).filter((fileValue) => fileValue.isEntry);
    if ("all" in clientManifest && "initial" in clientManifest) {
      entryFiles = clientManifest.initial.map((file) => ({ file }));
    }
    return Promise.resolve({
      html: '<div id="__nuxt"></div>',
      renderResourceHints: () => "",
      renderStyles: () => entryFiles.flatMap(({ css }) => css).filter((css) => css != null).map((file) => `<link rel="stylesheet" href="${buildAssetsURL(file)}">`).join(""),
      renderScripts: () => entryFiles.map(({ file }) => {
        const isMJS = !file.endsWith(".js");
        return `<script ${isMJS ? 'type="module"' : ""} src="${buildAssetsURL(file)}"><\/script>`;
      }).join("")
    });
  };
  return { renderToString };
});
const renderer = eventHandler(async (event) => {
  const ssrError = event.req.url?.startsWith("/__nuxt_error") ? useQuery(event) : null;
  const url = ssrError?.url || event.req.url;
  const ssrContext = {
    url,
    event,
    req: event.req,
    res: event.res,
    runtimeConfig: useRuntimeConfig(),
    noSSR: !!event.req.headers["x-nuxt-no-ssr"],
    error: ssrError,
    redirected: void 0,
    nuxt: void 0,
    payload: void 0
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const rendered = await renderer.renderToString(ssrContext).catch((e) => {
    if (!ssrError) {
      throw e;
    }
  });
  if (!rendered) {
    return;
  }
  if (ssrContext.redirected || event.res.writableEnded) {
    return;
  }
  if (ssrContext.error && !ssrError) {
    throw ssrContext.error;
  }
  if (ssrContext.nuxt?.hooks) {
    await ssrContext.nuxt.hooks.callHook("app:rendered");
  }
  const html = await renderHTML(ssrContext.payload, rendered, ssrContext);
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  return html;
});
async function renderHTML(payload, rendered, ssrContext) {
  const state = `<script>window.__NUXT__=${devalue(payload)}<\/script>`;
  rendered.meta = rendered.meta || {};
  if (ssrContext.renderMeta) {
    Object.assign(rendered.meta, await ssrContext.renderMeta());
  }
  return htmlTemplate({
    HTML_ATTRS: rendered.meta.htmlAttrs || "",
    HEAD_ATTRS: rendered.meta.headAttrs || "",
    HEAD: (rendered.meta.headTags || "") + rendered.renderResourceHints() + rendered.renderStyles() + (ssrContext.styles || ""),
    BODY_ATTRS: rendered.meta.bodyAttrs || "",
    BODY_PREPEND: ssrContext.teleports?.body || "",
    APP: (rendered.meta.bodyScriptsPrepend || "") + rendered.html + state + rendered.renderScripts() + (rendered.meta.bodyScripts || "")
  });
}
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': renderer
});
//# sourceMappingURL=index.mjs.map
