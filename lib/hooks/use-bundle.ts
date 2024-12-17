import { useCallback } from 'react';
import { Equipment } from '../types';
import { calculateBundlePrice } from '../utils/bundle';

export function useBundle(items: Equipment[]) {
  const addToBundle = useCallback((item: Equipment) => {
    // Implementation for adding items to bundle
    console.log('Adding to bundle:', item);
  }, []);

  const removeFromBundle = useCallback((itemId: string) => {
    // Implementation for removing items from bundle
    console.log('Removing from bundle:', itemId);
  }, []);

  const bundleDetails = calculateBundlePrice(items);

  return {
    ...bundleDetails,
    addToBundle,
    removeFromBundle,
  };
}