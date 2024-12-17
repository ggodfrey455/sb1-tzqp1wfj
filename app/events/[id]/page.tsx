import { CompetitionSection } from "@/components/events/competition-section";
import { EventHeader } from "@/components/events/event-header";
import { EventSchedule } from "@/components/events/event-schedule";
import { events, getEventById } from "@/lib/events";

export function generateStaticParams() {
  return Object.keys(events).map((id) => ({ id }));
}

export default function EventPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <main className="min-h-screen bg-background">
      <EventHeader event={event} />
      <EventSchedule schedule={event.dailySchedule} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {event.competitions.map((competition) => (
            <CompetitionSection 
              key={competition.id} 
              competition={competition}
              eventId={params.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}