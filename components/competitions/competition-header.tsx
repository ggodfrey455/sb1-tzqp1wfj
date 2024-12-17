"use client";

import { Badge } from "@/components/ui/badge";
import type { Competition } from "@/lib/types";

interface CompetitionHeaderProps {
  competition: Competition;
}

export function CompetitionHeader({ competition }: CompetitionHeaderProps) {
  return (
    <div className="relative h-[300px]">
      <img
        src={competition.image}
        alt={competition.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <Badge className="mb-4">{competition.category}</Badge>
          <h1 className="text-4xl font-bold mb-4">{competition.name}</h1>
          <p className="text-lg max-w-2xl">{competition.description}</p>
        </div>
      </div>
    </div>
  );
}