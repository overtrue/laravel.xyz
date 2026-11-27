import type { CourseId } from './courses';
export type Artwork = 'web' | 'api' | 'ship' | 'atlas' | 'instruments' | 'dependencies' | 'community';
export const courseArtwork = {
  'php-composer':'web', taskboard:'web', 'rest-api':'api', eloquent:'api', 'api-access':'api',
  'async-work':'ship', 'automated-tests':'ship', 'deploy-operate':'ship', 'reservation-capstone':'ship',
} as const satisfies Record<CourseId, Artwork>;
