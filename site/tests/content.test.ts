import { describe, expect, it } from 'vitest';
import { impactFacts, programs, projects } from '../src/content';

describe('Kaflah normalized content', () => {
  it('contains the three approved program ids', () => {
    expect(programs.map((program) => program.id)).toEqual(['sabzkal', 'qalam', 'khidmat-e-khalaq']);
  });

  it('contains only traceable project sources', () => {
    expect(projects).toHaveLength(9);
    expect(projects.every((project) => project.sourcePosts.length > 0)).toBe(true);
    expect(projects.every((project) => project.sourcePosts.every((source) => source.sourceUrl.includes('instagram.com/p/')))).toBe(true);
  });

  it('preserves the verified Iftar fact', () => {
    expect(impactFacts).toEqual(expect.arrayContaining([
      expect.objectContaining({ value: '2,000+', label: expect.stringContaining('people served') }),
    ]));
  });
});
