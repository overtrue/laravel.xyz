export const questionCount = 4;
export const passCount = 3;
export const points = (correct:number) => correct * (100 / questionCount);

// A sheet uses the authored question and option positions, independent of display order or language.
export function correctCount(sheet:unknown, key:string): number | null {
  if (typeof sheet !== 'string' || !/^v1:[012]{4}$/.test(sheet) || key.length !== questionCount) return null;
  return [...key].filter((answer, index) => sheet[index + 3] === answer).length;
}
