"use client";

import { Button } from "@/components/ui/button";
import { Camera, Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold tracking-tight mb-6">
          Identify Sports Gear
          <span className="text-blue-600"> Instantly</span>
        </h2>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          Take a photo of any sports equipment and discover every component.
          Get exclusive bundle discounts on pro-athlete endorsed gear.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Button size="lg" className="text-lg">
            <Camera className="w-5 h-5 mr-2" />
            Scan Equipment
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            <Calendar className="w-5 h-5 mr-2" />
            Browse Events
          </Button>
        </div>
      </div>
    </section>
  );
}