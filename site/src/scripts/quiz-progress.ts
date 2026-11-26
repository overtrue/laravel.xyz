import { activeAccount, readValue, writeValue } from './activity';
import { getSavedChoice } from './learning';
import { itinerary, learningStarts } from '../data/roadmap';
import { correctCount, passCount } from '../lib/quiz-score';
import type { CourseId } from '../data/courses';

export type Stop = {id:CourseId; key:string; title:string};
export const bestScore = (id:string, key:string) => correctCount(readValue('quiz:' + id), key);

export async function keepBest(id:string, key:string, sheet:string) {
  const actor = activeAccount();
  const hits = correctCount(sheet, key);
  function save() {
    if (actor !== activeAccount() || hits === null) return false;
    if (hits <= (bestScore(id, key) ?? -1)) return true;
    const saved = writeValue('quiz:' + id, sheet);
    if (saved) window.dispatchEvent(new Event('orbit:activity'));
    return saved;
  }
  return navigator.locks ? navigator.locks.request('orbit-quiz:' + (actor ?? 'guest') + ':' + id, save) : save();
}

export function nextStop(stops:Stop[], after?:string) {
  const choice = getSavedChoice();
  const preferred = choice ? itinerary(choice.track, choice.skill) : [];
  const core:CourseId[] = learningStarts.flatMap(start => [...start.courses]);
  const options = after && !core.some(id => id === after) ? stops.map(stop => stop.id) : core;
  const path = preferred.length && (!after || preferred.some(id => id === after)) ? preferred : options;
  const offset = path.findIndex(id => id === after) + 1;
  const order = new Set([...path.slice(offset), ...path.slice(0, offset), ...options]);
  for (const id of order) {
    const stop = stops.find(item => item.id === id)!;
    if (id !== after && (bestScore(id, stop.key) ?? -1) < passCount) return stop;
  }
}
