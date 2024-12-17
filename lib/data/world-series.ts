import type { Event } from '../types';

export const worldSeries: Event = {
  id: "world-series-2024",
  title: "2024 World Series",
  date: "October 2024",
  location: "Los Angeles & New York",
  description: "The MLB championship series between the Los Angeles Dodgers and the New York Yankees.",
  image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3",
  categories: ["MLB", "Championship", "Baseball"],
  dailySchedule: [
    {
      date: "OCTOBER 2024",
      events: [
        {
          name: "World Series Game 1",
          category: "CHAMPIONSHIP",
          startTime: "8:00 PM",
          date: "OCT. 2024",
          countdownText: "10 MONTHS"
        }
      ]
    }
  ],
  competitions: [
    {
      id: "dodgers-vs-yankees",
      name: "Los Angeles Dodgers vs New York Yankees",
      category: "MLB Championship",
      description: "The championship series between the National League Champion Los Angeles Dodgers and the American League Champion New York Yankees.",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3",
      athletes: [
        "Mookie Betts (Dodgers)",
        "Freddie Freeman (Dodgers)",
        "Shohei Ohtani (Dodgers)",
        "Aaron Judge (Yankees)",
        "Juan Soto (Yankees)"
      ],
      equipment: [
        {
          category: "Championship Gear",
          items: [
            {
              name: "World Series Champions Hat",
              brand: "New Era",
              price: 39.99,
              image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390"
            },
            {
              name: "World Series Champions T-Shirt",
              brand: "Nike",
              price: 34.99,
              image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390"
            },
            {
              name: "World Series Champions Jersey",
              brand: "Nike",
              price: 159.99,
              image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390"
            }
          ]
        },
        {
          category: "Game Equipment",
          items: [
            {
              name: "Official MLB Game Ball",
              brand: "Rawlings",
              price: 29.99,
              image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390"
            },
            {
              name: "Pro Game Baseball Bat",
              brand: "Louisville Slugger",
              price: 149.99,
              image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390"
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "Multiple Venues",
    description: "Games will be played at Dodger Stadium in Los Angeles and Yankee Stadium in New York.",
    address: "Various Locations",
    elevation: "Various",
    capacity: "45,000-56,000 spectators",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3"
  }
};