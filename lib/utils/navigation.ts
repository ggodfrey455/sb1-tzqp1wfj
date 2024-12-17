// Navigation utilities
export function generateEventUrl(eventId: string) {
  return `/events/${eventId}`;
}

export function generateCompetitionUrl(eventId: string, competitionId: string) {
  return `/events/${eventId}/competitions/${competitionId}`;
}

export function generateGearUrl(eventId: string, competitionId: string, categoryId: string) {
  return `/events/${eventId}/competitions/${competitionId}/gear/${categoryId}`;
}