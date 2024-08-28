import {generateRange} from "./generateRange";

describe('generateRange()', () => {
  it('should work', () => {
    expect(generateRange(1,4)).toStrictEqual([1,2,3,4]);
  });
  it('should work with weird values', () => {
    expect(generateRange(1,1)).toStrictEqual([1]);
  });
  it('should work with weirder values', () => {
    expect(generateRange(1,0)).toStrictEqual([]);
  });
});
