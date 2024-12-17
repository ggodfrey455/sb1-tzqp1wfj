import type { Event } from '../types';

export const nbaFinals: Event = {
  id: "nba-finals-2024",
  title: "2024 NBA Finals",
  date: "June 6-17, 2024",
  location: "Boston & Dallas",
  description: "The NBA championship series between the Boston Celtics and Dallas Mavericks.",
  image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3",
  categories: ["NBA", "Basketball", "Championship"],
  dailySchedule: [
    {
      date: "THURSDAY JUNE 6",
      events: [
        {
          name: "NBA Finals Game 1",
          category: "CHAMPIONSHIP",
          startTime: "9:00 PM",
          date: "JUNE 6",
          countdownText: "5 MONTHS 6 DAYS"
        }
      ]
    }
  ],
  competitions: [
    {
      id: "celtics-vs-mavericks",
      name: "Boston Celtics vs Dallas Mavericks",
      category: "NBA Finals",
      description: "The Celtics seek their 18th championship against Luka Dončić and the Mavericks.",
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3",
      athletes: [
        "Jayson Tatum (Celtics)",
        "Jaylen Brown (Celtics)",
        "Jrue Holiday (Celtics)",
        "Luka Dončić (Mavericks)",
        "Kyrie Irving (Mavericks)"
      ],
      equipment: [
        {
          category: "Championship Gear",
          items: [
            {
              name: "Jrue Holiday Celtics Autographed 2024 NBA Finals Champions Jersey",
              brand: "Nike",
              price: 499.99,
              image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a"
            },
            {
              name: "Celtics 2024 NBA Finals Champions Banner Collection Long Sleeve",
              brand: "Nike",
              price: 44.99,
              image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a"
            },
            {
              name: "2024 NBA Finals Collector Patch",
              brand: "NBA",
              price: 14.99,
              image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a"
            }
          ]
        },
        {
          category: "Game Equipment",
          items: [
            {
              name: "Official NBA Game Ball",
              brand: "Spalding",
              price: 169.99,
              image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a"
            },
            {
              name: "NBA Finals Court Replica",
              brand: "NBA",
              price: 299.99,
              image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a"
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "TD Garden & American Airlines Center",
    description: "The series alternates between the historic TD Garden in Boston and the modern American Airlines Center in Dallas.",
    address: "Multiple Venues",
    elevation: "Various",
    capacity: "19,156-20,000 spectators",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3"
  }
};