import {getCheckDigit} from "./luhn";

export const generateCard = (length: number, bin: string) => {
  const _bin = bin.replace(' ', '');
  const baseNumber = _bin + '1'.repeat(length - 1 - _bin.length);
  return baseNumber + getCheckDigit(baseNumber);
}
