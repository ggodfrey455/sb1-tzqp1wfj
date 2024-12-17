"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bike, Bicycle, Motorcycle } from "lucide-react";

const categories = [
  {
    id: "motorcycle",
    name: "Moto",
    description: "Professional-grade motorcycles and essential gear for motocross and freestyle riding.",
    icon: Motorcycle,
  },
  {
    id: "surron",
    name: "Surron",
    description: "Electric bikes and protective equipment for off-road adventures.",
    icon: Bike,
  },
  {
    id: "mountain-bike",
    name: "Mountain Bike",
    description: "High-performance mountain bikes and components for extreme riding.",
    icon: Bicycle,
  },
];

export function GearCategories() {
  const router = useRouter();

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {categories.map((category) => (
        <Card key={category.id} className="p-6">
          <div className="flex flex-col items-center text-center">
            <category.icon className="w-12 h-12 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-muted-foreground mb-6">{category.description}</p>
            <Button 
              className="w-full"
              onClick={() => router.push(`gear/${category.id}`)}
            >
              Shop Gear
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}