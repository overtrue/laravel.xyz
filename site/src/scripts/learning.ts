import { isSkill, isTrack, type Skill, type Track } from '../data/roadmap';
import { readValue, writeValue } from './activity';

export function isDone(slug:string) { return readValue('task:' + slug) === '1'; }
export function markDone(slug:string, done:boolean) { return writeValue('task:' + slug,done ? '1' : null); }
export function getSavedChoice(): { track: Track; skill: Skill } | null {
  const [track,skill] = (readValue('route') ?? '').split('/');
  return isTrack(track) && isSkill(skill) ? {track,skill} : null;
}
export function getChoice(): { track: Track; skill: Skill } {
  return getSavedChoice() ?? { track: 'web', skill: 'beginner' };
}
export function saveChoice(track:Track, skill:Skill) { writeValue('route',track + '/' + skill); }
