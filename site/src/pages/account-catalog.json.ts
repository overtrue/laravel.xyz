import type { APIRoute } from 'astro';
import { challengeIds } from '../data/challenges';
import { tracks, skills } from '../data/roadmap';
import { searchEntries } from '../lib/search';
import { getGuides } from '../lib/site';
import { courses } from '../data/courses';
import { quizKey } from '../data/quizzes';

export const GET: APIRoute = async () => Response.json({
  lessons: (await getGuides('en')).map(guide => guide.id),
  bookmarks: [...new Set((await searchEntries('en')).map(entry => 'key' in entry ? entry.key : entry.href))],
  stamps: challengeIds,
  quizzes: Object.fromEntries(courses.map(({id}) => [id, quizKey(id)])),
  routes: Object.keys(tracks).flatMap(track => Object.keys(skills).map(skill => track + '/' + skill)),
});
