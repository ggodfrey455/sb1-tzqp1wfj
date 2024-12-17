import { winterXGames } from './data/winter-x-games';
import { summerXGames } from './data/summer-x-games';
import { redbullRampage } from './data/redbull-rampage';
import { monsterEnergySupercross } from './data/supercross';
import { nitroCircus } from './data/nitro-circus';
import { streetLeague } from './data/street-league';
import { sponsoredRiders } from './data/sponsored-riders';
import { pgaGolf } from './data/pga-golf';
import { crankworx } from './data/crankworx';
import { superBowl } from './data/super-bowl';
import { worldSeries } from './data/world-series';
import { championsLeague } from './data/champions-league';
import { nbaFinals } from './data/nba-finals';
import { ufc300 } from './data/ufc-300';
import type { Event } from './types';

export const events: Record<string, Event> = {
  "ufc-300-2024": ufc300,
  "champions-league-final-2024": championsLeague,
  "nba-finals-2024": nbaFinals,
  "super-bowl-lviii-2024": superBowl,
  "world-series-2024": worldSeries,
  "winter-x-games-2024": winterXGames,
  "summer-x-games-2024": summerXGames,
  "redbull-rampage-2024": redbullRampage,
  "monster-energy-supercross-2024": monsterEnergySupercross,
  "nitro-circus-world-games-2024": nitroCircus,
  "street-league-2024": streetLeague,
  "sponsored-riders-2024": sponsoredRiders,
  "pga-tour-2024": pgaGolf,
  "crankworx-whistler-2024": crankworx,
};

export function getEventById(id: string): Event | undefined {
  return events[id];
}

export function getAllEvents(): Event[] {
  return Object.values(events);
}

export function getEventCompetition(eventId: string, competitionId: string) {
  const event = getEventById(eventId);
  return event?.competitions.find(c => c.id === competitionId);
}