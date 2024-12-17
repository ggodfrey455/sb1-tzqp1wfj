import { getEventById } from "@/lib/events";
import { GearCategories } from "@/components/gear/gear-categories";

export function generateStaticParams() {
  return [
    { id: "sponsored-riders-2024", competitionId: "gavin-godfrey" }
  ];
}

export default function GearPage({
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">{competition.name}&apos;s Gear</h1>
        <GearCategories />
      </div>
    </main>
  );
}