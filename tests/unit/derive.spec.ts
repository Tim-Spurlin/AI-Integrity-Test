import { describe, it, expect } from 'vitest';
import { deriveTags } from '../../src/lib/derive';

describe('deriveTags', () => {
  it('adds tags based on fields', () => {
    const tags = deriveTags({
      vendor: 'OpenAI',
      model: 'GPT-4o',
      claims_memory: true,
      outcome: 'lied',
      placation: 'apology'
    });
    expect(tags).toContain('placation');
  });
});
