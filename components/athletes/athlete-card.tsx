"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, User, Package, Percent } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { EquipmentCategory } from "@/lib/types";

interface AthleteCardProps {
  name: string;
  category: string;
  equipment: EquipmentCategory[];
}

export function AthleteCard({ name, category, equipment }: AthleteCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSupporting, setIsSupporting] = useState(false);

  const calculateBundleTotal = () => {
    let total = 0;
    equipment.forEach((category) => {
      category.items.forEach((item) => {
        total += item.price;
      });
    });
    return total;
  };

  const calculateDiscountedTotal = () => {
    const total = calculateBundleTotal();
    return total * 0.9; // 10% discount
  };

  const bundleTotal = calculateBundleTotal();
  const discountedTotal = calculateDiscountedTotal();
  const savings = bundleTotal - discountedTotal;

  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <User className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <Badge variant="secondary">{category}</Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="flex-1">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Shop Gear
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{name}&apos;s Equipment</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {equipment.map((category) => (
                  <div key={category.category}>
                    <h3 className="font-semibold mb-2">{category.category}</h3>
                    <div className="space-y-4">
                      {category.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-lg border">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">{item.brand}</p>
                            <p className="text-lg font-semibold mt-1">${item.price.toFixed(2)}</p>
                          </div>
                          <Button>Add to Cart</Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Bundle Total:</span>
                    <span className="text-lg line-through text-muted-foreground">
                      ${bundleTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Discounted Price (10% off):</span>
                    <span className="text-lg font-bold text-green-600">
                      ${discountedTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm">You Save:</span>
                    <span className="text-green-600 font-medium">
                      ${savings.toFixed(2)}
                    </span>
                  </div>
                  <Button className="w-full" size="lg" variant="default">
                    <Package className="w-4 h-4 mr-2" />
                    Buy Bundle
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    <Percent className="w-4 h-4 inline-block mr-1" />
                    Save 10% when you buy the complete bundle
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button 
            variant={isSupporting ? "default" : "outline"}
            className="flex-1"
            onClick={() => setIsSupporting(!isSupporting)}
          >
            <Heart className={`w-4 h-4 mr-2 ${isSupporting ? "fill-current" : ""}`} />
            {isSupporting ? "Supporting" : "Support"}
          </Button>
        </div>
      </div>
    </Card>
  );
}