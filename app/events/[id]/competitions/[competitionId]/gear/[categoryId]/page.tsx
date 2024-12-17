import { getEventById, events } from "@/lib/events";
import { GearList } from "@/components/gear/gear-list";

export function generateStaticParams() {
  const paths = [];
  for (const [eventId, event] of Object.entries(events)) {
    for (const competition of event.competitions) {
      if (competition.equipment) {
        for (const category of competition.equipment) {
          paths.push({
            id: eventId,
            competitionId: competition.id,
            categoryId: category.category.toLowerCase().replace(" ", "-")
          });
        }
      }
    }
  }
  return paths;
}

export default function GearCategoryPage({
  params,
}: {
  params: { id: string; competitionId: string; categoryId: string };
}) {
  const event = getEventById(params.id);
  const competition = event?.competitions.find(c => c.id === params.competitionId);
  const category = competition?.equipment?.find(
    e => e.category.toLowerCase().replace(" ", "-") === params.categoryId
  );

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">{category.category} Gear</h1>
        <GearList items={category.items} />
      </div>
    </main>
  );
}