import type { Event } from '../types';

export const superBowl: Event = {
  id: "super-bowl-lviii-2024",
  title: "Super Bowl LVIII",
  date: "February 11, 2024",
  location: "Las Vegas, Nevada",
  description: "The NFL's championship game featuring the Kansas City Chiefs and the San Francisco 49ers at Allegiant Stadium.",
  image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3",
  categories: ["NFL", "Championship", "Football"],
  dailySchedule: [
    {
      date: "SUNDAY FEB. 11",
      events: [
        {
          name: "Super Bowl LVIII Kickoff",
          category: "CHAMPIONSHIP",
          startTime: "6:30 PM",
          date: "FEB. 11",
          countdownText: "2 MONTHS 11 DAYS"
        }
      ]
    }
  ],
  competitions: [
    {
      id: "chiefs-vs-49ers",
      name: "Kansas City Chiefs vs San Francisco 49ers",
      category: "NFL Championship",
      description: "The championship game between the AFC Champion Kansas City Chiefs and the NFC Champion San Francisco 49ers.",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3",
      athletes: [
        "Patrick Mahomes (Chiefs)",
        "Travis Kelce (Chiefs)",
        "Chris Jones (Chiefs)",
        "Brock Purdy (49ers)",
        "Christian McCaffrey (49ers)"
      ],
      equipment: [
        {
          category: "Championship Gear",
          items: [
            {
              name: "Super Bowl LVIII Champions Hat",
              brand: "New Era",
              price: 34.99,
              image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1"
            },
            {
              name: "Super Bowl LVIII Champions T-Shirt",
              brand: "Nike",
              price: 39.99,
              image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1"
            },
            {
              name: "Super Bowl LVIII Champions Jersey",
              brand: "Nike",
              price: 149.99,
              image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1"
            }
          ]
        },
        {
          category: "Game Equipment",
          items: [
            {
              name: "Official NFL Game Ball",
              brand: "Wilson",
              price: 119.99,
              image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1"
            },
            {
              name: "Super Bowl LVIII Game Jersey",
              brand: "Nike",
              price: 199.99,
              image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1"
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "Allegiant Stadium",
    description: "The state-of-the-art home of Super Bowl LVIII, featuring a retractable natural grass field and seating for 65,000 fans.",
    address: "3333 Al Davis Way, Las Vegas, NV 89118",
    elevation: "2,030 ft",
    capacity: "65,000 spectators",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3"
  }
};