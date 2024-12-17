import type { Event, Competition } from '../types';

export function getEventCompetition(event: Event | undefined, competitionId: string): Competition | undefined {
  return event?.competitions.find(c => c.id === competitionId);
}

export function getCompetitionCategory(competition: Competition | undefined, categoryId: string): string | undefined {
  return competition?.equipment?.find(
    e => e.category.toLowerCase().replace(" ", "-") === categoryId
  )?.category;
}