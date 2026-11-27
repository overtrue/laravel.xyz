import type { APIRoute } from 'astro';
import { searchResponse } from '../lib/search';

export const GET: APIRoute = () => searchResponse('en');
