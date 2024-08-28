export interface SampleCheckout {
  url: string;
  label: string;
}

export const sampleCheckouts: SampleCheckout[] = [
  {
    url: 'https://www.mystoredemo.io/#/checkout',
    label: 'Adyen'
  },
  {
    url: 'https://checkout.stripe.dev/preview',
    label: 'Stripe',
  }
]
