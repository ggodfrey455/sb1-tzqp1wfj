import { useMemo } from 'react';
import { calculateBundleTotal, calculateDiscountedPrice } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/config';
import type { Equipment } from '@/lib/types';

export function useBundlePrice(items: Equipment[]) {
  return useMemo(() => {
    const total = calculateBundleTotal(items.map(item => item.price));
    const discountedTotal = calculateDiscountedPrice(total, SITE_CONFIG.discountPercentage);
    const savings = total - discountedTotal;

    return {
      total,
      discountedTotal,
      savings,
      discountPercentage: SITE_CONFIG.discountPercentage,
    };
  }, [items]);
}