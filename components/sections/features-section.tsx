"use client";

import { Card } from "@/components/ui/card";
import { Camera, ShoppingBag, Users } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Camera className="w-12 h-12 text-blue-600 mb-4" />}
            title="Instant Recognition"
            description="Take a photo of any sports equipment or vehicle and get instant identification of all components."
          />
          <FeatureCard
            icon={<ShoppingBag className="w-12 h-12 text-blue-600 mb-4" />}
            title="Bundle & Save"
            description="Get exclusive discounts when you purchase complete setups or bundles through our platform."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-blue-600 mb-4" />}
            title="Pro Athlete Profiles"
            description="Shop directly from pro athlete profiles and get the exact gear they use to compete."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}