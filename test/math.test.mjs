import { describe, it, expect } from 'vitest';
import { cosine, rankBySimilarity } from '../src/math.mjs';

describe('Lab 04', () => {
  it('cosine similarity basic cases', () => {
    const a = [1, 0], b = [1, 0], c = [0, 1];
    expect(cosine(a, b)).toBeCloseTo(1, 6);
    expect(cosine(a, c)).toBeCloseTo(0, 6);
  });

  it('ranks the closest vector first', () => {
    const vecs = [{ id: 'a', embedding: [1, 0] }, { id: 'b', embedding: [0.6, 0.8] }];
    const q = [1, 0];
    const r = rankBySimilarity(vecs, q, 1);
    expect(r[0].id).toBe('a');
    expect(r[0].score).toBeGreaterThan(0.9);
  });
});
