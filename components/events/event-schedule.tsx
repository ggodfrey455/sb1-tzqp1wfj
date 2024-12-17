"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import type { DaySchedule } from "@/lib/types";

export function EventSchedule({ schedule }: { schedule: DaySchedule[] }) {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Event Schedule</h2>
        <div className="space-y-8">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-card rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{day.date}</h3>
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <Card key={eventIndex} className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <Badge className="mb-2">{event.category}</Badge>
                        <h4 className="font-medium">{event.name}</h4>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>Starts at {event.startTime}</span>
                        </div>
                        <Badge variant="outline">{event.countdownText}</Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}