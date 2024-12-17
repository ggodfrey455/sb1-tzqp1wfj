import type { Event } from '../types';

export const championsLeague: Event = {
  id: "champions-league-final-2024",
  title: "UEFA Champions League Final 2024",
  date: "June 1, 2024",
  location: "London, England",
  description: "Real Madrid vs Borussia Dortmund in the prestigious UEFA Champions League Final at Wembley Stadium.",
  image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3",
  categories: ["Soccer", "UEFA", "Championship"],
  dailySchedule: [
    {
      date: "SATURDAY JUNE 1",
      events: [
        {
          name: "Champions League Final",
          category: "CHAMPIONSHIP",
          startTime: "8:00 PM",
          date: "JUNE 1",
          countdownText: "5 MONTHS"
        }
      ]
    }
  ],
  competitions: [
    {
      id: "real-madrid-vs-dortmund",
      name: "Real Madrid vs Borussia Dortmund",
      category: "UEFA Final",
      description: "The culmination of Europe's premier club competition featuring Real Madrid and Borussia Dortmund.",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3",
      athletes: [
        "Jude Bellingham (Real Madrid)",
        "Vinicius Jr (Real Madrid)",
        "Toni Kroos (Real Madrid)",
        "Marco Reus (Dortmund)",
        "Julian Brandt (Dortmund)"
      ],
      equipment: [
        {
          category: "Match Gear",
          items: [
            {
              name: "London 24 UCLF Jersey",
              brand: "Adidas",
              price: 78.00,
              image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20"
            },
            {
              name: "UCL London Final 2024 Chronograph Watch",
              brand: "UEFA",
              price: 284.00,
              image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20"
            },
            {
              name: "2024 UEFA Champions League Final Celebration Montage",
              brand: "UEFA",
              price: 50.00,
              image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20"
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "Wembley Stadium",
    description: "The iconic home of English football hosts its eighth European Cup/Champions League final.",
    address: "Wembley, London, HA9 0WS",
    elevation: "83 ft",
    capacity: "90,000 spectators",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3"
  }
};