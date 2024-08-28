/**
 * IIN ranges are weird, so I am lazy and this makes validation smoother brained.
 * @param start
 * @param end
 */
export function generateRange(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
