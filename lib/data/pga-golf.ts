import type { Event } from '../types';

export const pgaGolf: Event = {
  id: "pga-tour-2024",
  title: "The Sentry 2024",
  date: "January 4-7, 2024",
  location: "Kapalua, Maui, Hawaii",
  description: "The PGA TOUR's season opener featuring an elite field of champions at the picturesque Kapalua Resort.",
  image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3",
  categories: ["Tournament", "Professional", "PGA TOUR"],
  dailySchedule: [
    {
      date: "THURSDAY JAN. 4",
      events: [
        {
          name: "Round 1",
          category: "TOURNAMENT",
          startTime: "12:30 PM",
          date: "JAN. 4",
          countdownText: "1 MONTH"
        }
      ]
    },
    {
      date: "FRIDAY JAN. 5",
      events: [
        {
          name: "Round 2",
          category: "TOURNAMENT",
          startTime: "12:30 PM",
          date: "JAN. 5",
          countdownText: "1 MONTH 1 DAY"
        }
      ]
    },
    {
      date: "SATURDAY JAN. 6",
      events: [
        {
          name: "Round 3",
          category: "TOURNAMENT",
          startTime: "1:00 PM",
          date: "JAN. 6",
          countdownText: "1 MONTH 2 DAYS"
        }
      ]
    },
    {
      date: "SUNDAY JAN. 7",
      events: [
        {
          name: "Final Round",
          category: "TOURNAMENT",
          startTime: "1:00 PM",
          date: "JAN. 7",
          countdownText: "1 MONTH 3 DAYS"
        }
      ]
    }
  ],
  competitions: [
    {
      id: "the-sentry-tournament",
      name: "The Sentry Tournament",
      category: "PGA TOUR",
      description: "A limited-field event featuring PGA TOUR winners from the previous calendar year competing for a prestigious title.",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3",
      athletes: [
        "Jon Rahm",
        "Scottie Scheffler",
        "Viktor Hovland",
        "Patrick Cantlay",
        "Xander Schauffele"
      ],
      equipment: [
        {
          category: "Golf Clubs",
          items: [
            {
              name: "Stealth 2 Plus Driver",
              brand: "TaylorMade",
              price: 599.99,
              image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b"
            },
            {
              name: "P770 Irons Set",
              brand: "TaylorMade",
              price: 1299.99,
              image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b"
            },
            {
              name: "Spider GT Putter",
              brand: "TaylorMade",
              price: 349.99,
              image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b"
            }
          ]
        },
        {
          category: "Accessories",
          items: [
            {
              name: "Tour Golf Bag",
              brand: "TaylorMade",
              price: 499.99,
              image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b"
            },
            {
              name: "Pro Golf Glove",
              brand: "FootJoy",
              price: 24.99,
              image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b"
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "Kapalua Resort - The Plantation Course",
    description: "A stunning oceanside course designed by Bill Coore and Ben Crenshaw, featuring dramatic elevation changes and spectacular views.",
    address: "2000 Plantation Club Dr, Lahaina, HI 96761",
    elevation: "Sea level to 500 ft",
    capacity: "12,000 spectators",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3"
  }
};