import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    type: z.enum(['journal', 'conference', 'preprint', 'book']),
    year: z.number().int(),
    date: z.string().regex(/^\d{4}(-(0[1-9]|1[0-2])(-(0[1-9]|[12]\d|3[01]))?)?$/, 'Date must be YYYY, YYYY-MM, or YYYY-MM-DD'),
    venue: z.string(),
    journal: z.string().optional(),
    conference: z.string().optional(),
    volume: z.union([z.number(), z.string()]).optional(),
    issue: z.union([z.number(), z.string()]).optional(),
    pages: z.string().optional(),
    publisher: z.string().optional(),
    location: z.string().optional(),
    issn: z.string().optional(),
    isbn: z.string().optional(),
    doi: z.string().optional(),
    publisherUrl: z.string().url().optional(),
    repositoryUrl: z.string().url().optional(),
    localPdf: z.string().optional(),
    pdfVersionLabel: z.string().optional(),
    featured: z.boolean().default(false),
    firstAuthor: z.boolean().default(false),
    isLead: z.boolean().default(false),
    topics: z.array(z.string()),
    summary: z.string(),
    legacyRedirects: z.array(z.string()).default([])
  })
});

export const collections = { publications };
