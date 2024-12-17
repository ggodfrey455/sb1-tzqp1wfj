import { Equipment } from '../types';
import { BUNDLE_CONFIG } from '../config/constants';

export function calculateBundlePrice(items: Equipment[]) {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const discountedTotal = total * (1 - BUNDLE_CONFIG.discountPercentage / 100);
  const savings = total - discountedTotal;

  return {
    total,
    discountedTotal,
    savings,
    discountPercentage: BUNDLE_CONFIG.discountPercentage,
  };
}