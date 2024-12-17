"use client";

import { GearItemCard } from './gear-item-card';
import { GearBundle } from './gear-bundle';
import { useBundle } from '@/lib/hooks';
import type { Equipment } from '@/lib/types';

interface GearListProps {
  items: Equipment[];
}

export function GearList({ items }: GearListProps) {
  const { items: bundleItems } = useBundle();

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {items.map((item, index) => (
          <GearItemCard key={index} item={item} />
        ))}
      </div>
      <GearBundle items={bundleItems} />
    </div>
  );
}