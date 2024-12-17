import { useMemo } from 'react';
import { Equipment } from '../types';
import { calculateBundlePrice } from '../utils/bundle';

export function useGear(items: Equipment[]) {
  const bundleDetails = useMemo(() => calculateBundlePrice(items), [items]);
  
  return {
    ...bundleDetails,
    itemCount: items.length
  };
}