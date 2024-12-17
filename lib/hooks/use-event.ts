import { useCallback } from 'react';
import { getEventById, getEventCompetition } from '../events';

export function useEvent(eventId: string) {
  const event = getEventById(eventId);
  
  const getCompetition = useCallback((competitionId: string) => {
    return getEventCompetition(eventId, competitionId);
  }, [eventId]);

  return {
    event,
    getCompetition
  };
}