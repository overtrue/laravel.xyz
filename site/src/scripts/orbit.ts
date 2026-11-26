import { readValue, writeValue } from './activity';

export function savedAt(id:string) { return Number(readValue('saved:' + id)) || 0; }
export function saveItem(id:string, active:boolean) { return writeValue('saved:' + id,active ? String(Date.now()) : null); }
export function hasStamp(id:string) { return readValue('stamp:' + id) === '1'; }
export function earnStamp(id:string) { return writeValue('stamp:' + id,'1'); }
export function rememberLesson(id:string) { writeValue('last-lesson',id); }
export function lastVisitedLesson() { return readValue('last-lesson'); }
