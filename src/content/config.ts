import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    world: z.enum(['build', 'breathe', 'be', 'personal']),
    excerpt: z.string(),
    slug: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    description: z.string(),
    current: z.boolean().default(false),
  }),
});

const kindWords = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    attribution: z.string(),
    world: z.enum(['breathe', 'be']),
  }),
});

export const collections = {
  posts,
  projects,
  work,
  'kind-words': kindWords,
};
