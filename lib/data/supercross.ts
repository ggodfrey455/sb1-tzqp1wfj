import type { Event } from '../types';

export const monsterEnergySupercross: Event = {
  id: "monster-energy-supercross-2024",
  title: "Monster Energy Supercross 2024",
  date: "January 6, 2024",
  location: "Anaheim, California",
  description: "The opening round of the 2024 Monster Energy AMA Supercross Championship at the iconic Angel Stadium.",
  image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195?ixlib=rb-4.0.3",
  categories: ["450SX", "250SX West"],
  dailySchedule: [
    {
      date: "SATURDAY JAN. 6",
      events: [
        {
          name: "450SX Practice & Qualifying",
          category: "450SX",
          startTime: "12:00 PM",
          date: "JAN. 6",
          countdownText: "1 MONTH"
        },
        {
          name: "250SX West Practice & Qualifying",
          category: "250SX West",
          startTime: "1:30 PM",
          date: "JAN. 6",
          countdownText: "1 MONTH 1 HOUR 30 MIN"
        },
        {
          name: "Opening Ceremonies",
          category: "CEREMONY",
          startTime: "6:30 PM",
          date: "JAN. 6",
          countdownText: "1 MONTH 6 HOURS 30 MIN"
        },
        {
          name: "450SX Heat Races",
          category: "450SX",
          startTime: "7:00 PM",
          date: "JAN. 6",
          countdownText: "1 MONTH 7 HOURS"
        },
        {
          name: "250SX West Heat Races",
          category: "250SX West",
          startTime: "8:00 PM",
          date: "JAN. 6",
          countdownText: "1 MONTH 8 HOURS"
        },
        {
          name: "450SX Main Event",
          category: "450SX",
          startTime: "9:30 PM",
          date: "JAN. 6",
          countdownText: "1 MONTH 9 HOURS 30 MIN"
        }
      ]
    }
  ],
  competitions: [
    {
      id: "450sx-main-event",
      name: "450SX Main Event",
      category: "450SX",
      description: "The premier class of Supercross featuring the world's top riders battling on 450cc motorcycles.",
      image: "https://images.unsplash.com/photo-1637417494623-c0f3478c1edc?ixlib=rb-4.0.3",
      athletes: [
        "Eli Tomac (USA)",
        "Chase Sexton (USA)",
        "Cooper Webb (USA)",
        "Jason Anderson (USA)",
        "Ken Roczen (GER)"
      ],
      equipment: [
        {
          category: "Motorcycles",
          items: [
            {
              name: "CRF450RWE",
              brand: "Honda",
              price: 12399.99,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            },
            {
              name: "KX450SR",
              brand: "Kawasaki",
              price: 11999.99,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            }
          ]
        },
        {
          category: "Protection",
          items: [
            {
              name: "Flex Air Pro Helmet",
              brand: "Fox Racing",
              price: 649.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            },
            {
              name: "Instinct Pro Boots",
              brand: "Fox Racing",
              price: 599.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            },
            {
              name: "Leatt Body Protector 6.5",
              brand: "Leatt",
              price: 399.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            }
          ]
        },
        {
          category: "Components",
          items: [
            {
              name: "Pro Circuit Exhaust System",
              brand: "Pro Circuit",
              price: 999.99,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            },
            {
              name: "Factory Racing Triple Clamps",
              brand: "ARC",
              price: 799.99,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            }
          ]
        }
      ]
    },
    {
      id: "250sx-west-main-event",
      name: "250SX West Main Event",
      category: "250SX West",
      description: "The regional 250cc class showcasing the sport's rising stars and future champions.",
      image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195?ixlib=rb-4.0.3",
      athletes: [
        "Jett Lawrence (AUS)",
        "RJ Hampshire (USA)",
        "Cameron McAdoo (USA)",
        "Austin Forkner (USA)",
        "Hunter Lawrence (AUS)"
      ],
      equipment: [
        {
          category: "Motorcycles",
          items: [
            {
              name: "CRF250R",
              brand: "Honda",
              price: 8599.99,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            },
            {
              name: "KX250",
              brand: "Kawasaki",
              price: 8399.99,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            }
          ]
        },
        {
          category: "Protection",
          items: [
            {
              name: "V3 RS Helmet",
              brand: "Fox Racing",
              price: 499.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            },
            {
              name: "Instinct X Boots",
              brand: "Fox Racing",
              price: 549.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            }
          ]
        },
        {
          category: "Components",
          items: [
            {
              name: "Complete Race System",
              brand: "Pro Circuit",
              price: 899.99,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            },
            {
              name: "Holeshot Device",
              brand: "Pro Circuit",
              price: 299.99,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "Angel Stadium of Anaheim",
    description: "The iconic home of Supercross Round 1, featuring a challenging track design that tests riders' skills and endurance.",
    address: "2000 E Gene Autry Way, Anaheim, CA 92806",
    elevation: "157 ft",
    capacity: "45,517 spectators",
    image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195?ixlib=rb-4.0.3"
  }
};