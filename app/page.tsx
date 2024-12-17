"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { EventsSection } from "@/components/sections/events-section";
import { getAllEvents } from "@/lib/events";
import { SITE_CONFIG } from "@/lib/config/constants";

export default function Home() {
  const events = getAllEvents();

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground text-center py-8">
        <h1 className="text-5xl font-bold">{SITE_CONFIG.name}</h1>
        <p className="text-xl mt-2">Sports Equipment Recognition Platform</p>
      </div>
      <HeroSection />
      <EventsSection events={events} />
    </main>
  );
}