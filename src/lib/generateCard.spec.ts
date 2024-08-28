import {generateCard} from "./generateCard";

describe('generateCard()', () => {
  it('should produce a card with a 4 digit bin', () => {
    expect(generateCard(16, '4111')).toBe('4111111111111111');
  });
  it('should produce a card with no bin', () => {
    expect(generateCard(16, '')).toBe('1111111111111117');
  });
  it('should handle cases where the bin has spaces', () => {
    expect(generateCard(16, '5194 90')).toBe('5194901111111112');
  });
  it('should work', () => {
    expect(generateCard(16,'417500')).toBe('4175001111111117');
  });
  it('creates a long JCB', () => {
    expect(generateCard(19, '3528')).toBe('3528111111111111116')
  });
});
