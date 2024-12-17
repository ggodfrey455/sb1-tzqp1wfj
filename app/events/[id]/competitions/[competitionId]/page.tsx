import { getEventById, events } from "@/lib/events";
import { AthleteList } from "@/components/athletes/athlete-list";
import { CompetitionHeader } from "@/components/competitions/competition-header";

export function generateStaticParams() {
  const paths = [];
  for (const [eventId, event] of Object.entries(events)) {
    for (const competition of event.competitions) {
      paths.push({
        id: eventId,
        competitionId: competition.id,
      });
    }
  }
  return paths;
}

export default function CompetitionAthletesPage({
  params,
}: {
  params: { id: string; competitionId: string };
}) {
  const event = getEventById(params.id);
  const competition = event?.competitions.find(c => c.id === params.competitionId);

  if (!competition) {
    return <div>Competition not found</div>;
  }

  return (
    <main className="min-h-screen bg-background">
      <CompetitionHeader competition={competition} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">Athletes Competing</h2>
        <AthleteList athletes={competition.athletes} competition={competition} />
      </div>
    </main>
  );
}