"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Users } from "lucide-react";
import type { Competition } from "@/lib/types";

interface CompetitionSectionProps {
  competition: Competition;
  eventId: string;
}

export function CompetitionSection({ competition, eventId }: CompetitionSectionProps) {
  const router = useRouter();

  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img
            src={competition.image}
            alt={competition.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="md:w-2/3">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">{competition.name}</h3>
            <Badge variant="secondary">{competition.category}</Badge>
          </div>
          <p className="text-muted-foreground mb-4">{competition.description}</p>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => router.push(`/events/${eventId}/competitions/${competition.id}`)}
            >
              <Users className="w-4 h-4" />
              Athletes Competing
            </Button>
            <Button className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Scan Equipment
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}