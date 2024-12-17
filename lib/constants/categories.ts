import { Bike, Bicycle, Motorcycle } from 'lucide-react';

export const GEAR_CATEGORIES = [
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
] as const;

export const DISCOUNT_PERCENTAGE = 10;