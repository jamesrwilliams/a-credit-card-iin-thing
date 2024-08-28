import {getCheckDigit, isValidLuhn} from "./luhn";

describe('getCheckDigit()', () => {
  it('should', () => {
    expect(getCheckDigit('123456789')).toBe(7);
  });
  it('should return false if input is invalid', () => {
    expect(getCheckDigit('foo-bar')).toBe(false);
  });
});

describe('isValidLuhn()', () => {
  it('should return false if input is invalid', () => {
    expect(isValidLuhn('foo-bar')).toBe(false);
  });
  it('should correctly calculate', () => {
    expect(isValidLuhn('1234567897')).toBe(true);
  });
  it('error', () => {
    expect(isValidLuhn('1234567890')).toBe(false);
  });
});
