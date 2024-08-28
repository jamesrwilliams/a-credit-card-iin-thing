import {generateRange} from "../lib/generateRange";

export interface NetworkEntry {
  label: string;
  lengths: number[],
  sample?: string;
  iinRange: number[];
}

/**
 * Credit card network specifications.
 *
 * @see https://en.wikipedia.org/wiki/Payment_card_number
 */
export const networks: Record<string, NetworkEntry> = {
  "amex": {
    label: "American Express",
    lengths: [15],
    iinRange: [...generateRange(34, 37)],
  },
  "mastercard": {
    label: "Mastercard",
    lengths: [16],
    iinRange: [...generateRange(51, 55), ...generateRange(2221, 2720)],
  },
  "jcb": {
    label: "JCB",
    lengths: [16, 17, 18, 19],
    iinRange: [...generateRange(3528,3589)]
  },
  "visa": {
    label: "Visa",
    lengths: [16, 13, 19],
    iinRange: [4],
  },
  "visa-electron": {
    label: 'Visa Electron',
    lengths: [16],
    iinRange: [4026, 417500, 4508, 4844, 4913, 4917],
  }
}
