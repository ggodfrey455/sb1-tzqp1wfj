// Price calculation utilities
export function calculateBundleTotal(prices: number[]): number {
  return prices.reduce((sum, price) => sum + price, 0);
}

export function calculateDiscountedPrice(price: number, discountPercentage: number = 10): number {
  return price * (1 - discountPercentage / 100);
}

export function formatPrice(price: number): string {
  return price.toFixed(2);
}