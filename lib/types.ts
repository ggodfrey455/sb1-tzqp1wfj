export interface EventTime {
  name: string;
  category: string;
  startTime: string;
  date: string;
  countdownText: string;
}

export interface DaySchedule {
  date: string;
  events: EventTime[];
}

export interface Equipment {
  name: string;
  brand: string;
  price: number;
  image: string;
}

export interface EquipmentCategory {
  category: string;
  items: Equipment[];
}

export interface Competition {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  athletes: string[];
  equipment?: EquipmentCategory[];
}

export interface Venue {
  name: string;
  description: string;
  address: string;
  elevation: string;
  capacity: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  categories: string[];
  dailySchedule: DaySchedule[];
  competitions: Competition[];
  venue: Venue;
}