import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { courses } from './data/courses';

const schema = z.object({
  course: z.enum(courses.map(({ id }) => id)).default('taskboard'),
  title: z.string(),
  description: z.string(),
  order: z.number().int().positive(),
  checkpoint: z.string(),
  minutes: z.number().int().positive(),
  keywords: z.array(z.string()),
  sources: z.array(z.object({ label: z.string(), url: z.url() })),
});

export const collections = {
  guides: defineCollection({ loader: glob({ base: './src/guides/en', pattern: '*.md' }), schema }),
  guidesZh: defineCollection({ loader: glob({ base: './src/guides', pattern: '*.md' }), schema }),
};
