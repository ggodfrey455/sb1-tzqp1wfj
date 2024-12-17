"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils/price";
import type { Equipment } from "@/lib/types";

interface GearItemCardProps {
  item: Equipment;
}

export function GearItemCard({ item }: GearItemCardProps) {
  return (
    <Card className="overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-muted-foreground mb-2">{item.brand}</p>
        <p className="text-2xl font-bold mb-4">${formatPrice(item.price)}</p>
        <Button className="w-full">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}