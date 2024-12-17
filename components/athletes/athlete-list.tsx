"use client";

import { AthleteCard } from "./athlete-card";
import type { Competition } from "@/lib/types";

interface AthleteListProps {
  athletes: string[];
  competition: Competition;
}

export function AthleteList({ athletes, competition }: AthleteListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {athletes.map((athlete) => (
        <AthleteCard 
          key={athlete} 
          name={athlete} 
          category={competition.category}
          equipment={competition.equipment || []}
        />
      ))}
    </div>
  );
}