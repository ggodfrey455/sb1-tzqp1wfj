"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Percent } from "lucide-react";
import { calculateBundleTotal, calculateDiscountedPrice, formatPrice } from "@/lib/utils/price";
import { DISCOUNT_PERCENTAGE } from "@/lib/constants/categories";
import type { Equipment } from "@/lib/types";

interface GearBundleProps {
  items: Equipment[];
}

export function GearBundle({ items }: GearBundleProps) {
  const prices = items.map(item => item.price);
  const total = calculateBundleTotal(prices);
  const discountedTotal = calculateDiscountedPrice(total, DISCOUNT_PERCENTAGE);
  const savings = total - discountedTotal;

  return (
    <Card className="p-6 mt-8">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold mb-4">Complete Bundle Deal</h3>
        <div className="flex items-center gap-2 mb-4">
          <Percent className="w-5 h-5 text-green-600" />
          <span className="text-lg">Save {DISCOUNT_PERCENTAGE}% when you buy the complete set</span>
        </div>
        <div className="space-y-2 mb-6 w-full max-w-md">
          <div className="flex justify-between">
            <span>Original Total:</span>
            <span className="line-through text-muted-foreground">
              ${formatPrice(total)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Bundle Price ({DISCOUNT_PERCENTAGE}% off):</span>
            <span className="font-bold text-green-600">
              ${formatPrice(discountedTotal)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>You Save:</span>
            <span className="text-green-600">${formatPrice(savings)}</span>
          </div>
        </div>
        <Button size="lg" className="w-full max-w-md">
          <Package className="w-5 h-5 mr-2" />
          Buy Complete Bundle
        </Button>
      </div>
    </Card>
  );
}