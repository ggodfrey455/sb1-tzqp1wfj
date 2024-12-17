import type { Event } from '../types';

export const summerXGames: Event = {
  id: "summer-x-games-2024",
  title: "Summer X Games 2024",
  date: "July 19-21, 2024",
  location: "Minneapolis, Minnesota",
  description: "The world's premier action sports event featuring skateboarding, BMX, Moto X, and more.",
  image: "https://images.unsplash.com/photo-1564247488937-056a36703cee?ixlib=rb-4.0.3",
  categories: ["Skateboarding", "BMX", "Moto X", "Street", "Park"],
  dailySchedule: [
    {
      date: "FRIDAY JULY 19",
      events: [
        {
          name: "Men's Skateboard Street Elimination",
          category: "STREET",
          startTime: "11:00 AM",
          date: "JULY 19",
          countdownText: "6 MONTHS 19 DAYS"
        },
        {
          name: "BMX Park Elimination",
          category: "PARK",
          startTime: "2:00 PM",
          date: "JULY 19",
          countdownText: "6 MONTHS 19 DAYS 3 HOURS"
        },
        {
          name: "Moto X Best Whip",
          category: "MOTO X",
          startTime: "5:00 PM",
          date: "JULY 19",
          countdownText: "6 MONTHS 19 DAYS 6 HOURS"
        },
        {
          name: "BMX Street Final",
          category: "STREET",
          startTime: "7:30 PM",
          date: "JULY 19",
          countdownText: "6 MONTHS 19 DAYS 8 HOURS 30 MIN"
        }
      ]
    },
    {
      date: "SATURDAY JULY 20",
      events: [
        {
          name: "Women's Skateboard Park",
          category: "PARK",
          startTime: "10:30 AM",
          date: "JULY 20",
          countdownText: "6 MONTHS 20 DAYS"
        },
        {
          name: "Men's BMX Park Final",
          category: "PARK",
          startTime: "1:00 PM",
          date: "JULY 20",
          countdownText: "6 MONTHS 20 DAYS 2 HOURS 30 MIN"
        },
        {
          name: "Women's Skateboard Street",
          category: "STREET",
          startTime: "3:30 PM",
          date: "JULY 20",
          countdownText: "6 MONTHS 20 DAYS 5 HOURS"
        },
        {
          name: "Moto X Freestyle Final",
          category: "MOTO X",
          startTime: "7:00 PM",
          date: "JULY 20",
          countdownText: "6 MONTHS 20 DAYS 8 HOURS 30 MIN"
        }
      ]
    },
    {
      date: "SUNDAY JULY 21",
      events: [
        {
          name: "Men's Skateboard Park Final",
          category: "PARK",
          startTime: "11:00 AM",
          date: "JULY 21",
          countdownText: "6 MONTHS 21 DAYS"
        },
        {
          name: "BMX Dirt Final",
          category: "DIRT",
          startTime: "1:30 PM",
          date: "JULY 21",
          countdownText: "6 MONTHS 21 DAYS 2 HOURS 30 MIN"
        },
        {
          name: "Men's Skateboard Street Final",
          category: "STREET",
          startTime: "4:00 PM",
          date: "JULY 21",
          countdownText: "6 MONTHS 21 DAYS 5 HOURS"
        },
        {
          name: "Moto X Best Trick",
          category: "MOTO X",
          startTime: "6:30 PM",
          date: "JULY 21",
          countdownText: "6 MONTHS 21 DAYS 7 HOURS 30 MIN"
        }
      ]
    }
  ],
  competitions: [
    {
      id: "mens-skateboard-street",
      name: "Men's Skateboard Street",
      category: "STREET",
      description: "The world's top street skateboarders compete on a custom-designed course featuring stairs, rails, and gaps.",
      image: "https://images.unsplash.com/photo-1564247487028-ea19e2f85a6e?ixlib=rb-4.0.3",
      athletes: [
        "Nyjah Huston (USA)",
        "Yuto Horigome (JPN)",
        "Gustavo Ribeiro (POR)",
        "Aurelien Giraud (FRA)",
        "Shane O'Neill (AUS)"
      ],
      equipment: [
        {
          category: "Skateboards",
          items: [
            {
              name: "Pro Street Complete",
              brand: "Element",
              price: 199.99,
              image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030"
            },
            {
              name: "Thunder Trucks",
              brand: "Thunder",
              price: 54.99,
              image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030"
            }
          ]
        },
        {
          category: "Protection",
          items: [
            {
              name: "Elite Pro Helmet",
              brand: "Pro-Tec",
              price: 69.99,
              image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030"
            }
          ]
        }
      ]
    },
    {
      id: "bmx-park",
      name: "BMX Park",
      category: "PARK",
      description: "BMX riders showcase their skills in a flowing concrete park with transitions, spines, and massive quarters.",
      image: "https://images.unsplash.com/photo-1563627806991-23f0623a533a?ixlib=rb-4.0.3",
      athletes: [
        "Logan Martin (AUS)",
        "Daniel Dhers (VEN)",
        "Justin Dowell (USA)",
        "Kenneth Tencio (CRC)",
        "Nick Bruce (USA)"
      ],
      equipment: [
        {
          category: "Bikes",
          items: [
            {
              name: "Pro Park BMX Bike",
              brand: "Colony",
              price: 899.99,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            }
          ]
        },
        {
          category: "Protection",
          items: [
            {
              name: "Full Face Helmet",
              brand: "Fox Racing",
              price: 199.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "U.S. Bank Stadium",
    description: "Home to Summer X Games Minneapolis, featuring world-class street and park courses inside a state-of-the-art indoor facility.",
    address: "401 Chicago Ave, Minneapolis, MN 55415",
    elevation: "830 ft",
    capacity: "73,000 spectators",
    image: "https://images.unsplash.com/photo-1564247488937-056a36703cee?ixlib=rb-4.0.3"
  }
};