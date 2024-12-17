"use client";

import { MapPin } from "lucide-react";
import type { Venue } from "@/lib/types";

export function EventVenue({ venue }: { venue: Venue }) {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="w-6 h-6 text-blue-600" />
          <h2 className="text-3xl font-bold">Venue Information</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{venue.name}</h3>
            <p className="text-muted-foreground mb-4">{venue.description}</p>
            <div className="space-y-2">
              <p><strong>Address:</strong> {venue.address}</p>
              <p><strong>Elevation:</strong> {venue.elevation}</p>
              <p><strong>Capacity:</strong> {venue.capacity}</p>
            </div>
          </div>
          <div className="h-64 md:h-auto">
            <img
              src={venue.image}
              alt={venue.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}