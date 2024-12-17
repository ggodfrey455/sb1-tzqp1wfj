"use client";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-6">
          Ready to Transform Your Sports Shopping Experience?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Join thousands of athletes and enthusiasts who are already using our platform to discover and purchase sports equipment.
        </p>
        <Button size="lg" variant="secondary" className="text-lg">
          Start Free Trial
        </Button>
      </div>
    </section>
  );
}