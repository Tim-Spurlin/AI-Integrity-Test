import { z } from 'zod';

export const IntegritySchema = z.object({
  experiment: z.object({
    name: z.string().min(1),
    description: z.string(),
    criteria: z.object({
      memory_claim: z.boolean(),
      fabrication_level: z.enum(['none', 'partial', 'full']),
      placation_signals: z.array(z.string()),
      accountability_measures: z.array(z.string()),
      outcome: z.enum(['honest', 'lied', 'partial']),
    }),
  }),
  observations: z.array(z.object({
    vendor: z.enum(['OpenAI', 'Anthropic', 'xAI']),
    model: z.string().regex(/^(GPT|Claude|Grok).*$/),
    claims_memory: z.boolean(),
    fabrication: z.string().max(200),
    placation: z.string().max(200),
    accountability: z.string().max(200),
    solutioning: z.string().max(200),
    outcome: z.enum(['honest', 'lied', 'partial-honesty-with-amp']),
  })),
});
export type Observation = z.infer<typeof IntegritySchema>['observations'][number];