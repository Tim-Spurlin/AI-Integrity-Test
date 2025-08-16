import { z } from 'zod';

export const ObservationSchema = z.object({
  vendor: z.enum(['OpenAI', 'Anthropic', 'xAI']),
  model: z.string().regex(/^(GPT|Claude|Grok).*$/),
  claims_memory: z.boolean(),
  fabrication: z.string().max(200).optional(),
  placation: z.string().max(200).optional(),
  accountability: z.string().max(200).optional(),
  solutioning: z.string().max(200).optional(),
  outcome: z.enum(['honest', 'lied', 'partial-honesty-with-amp'])
});

export const IntegritySchema = z.object({
  experiment: z.object({
    name: z.string().min(1),
    description: z.string(),
    criteria: z.object({
      memory_claim: z.boolean(),
      fabrication_level: z.enum(['none', 'partial', 'full']),
      placation_signals: z.array(z.string()),
      accountability_measures: z.array(z.string()),
      outcome: z.enum(['honest', 'lied', 'partial'])
    })
  }),
  observations: z.array(ObservationSchema)
});

export type IntegrityData = z.infer<typeof IntegritySchema>;
export type Observation = z.infer<typeof ObservationSchema>;
