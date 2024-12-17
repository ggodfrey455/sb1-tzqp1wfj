import type { Event } from '../types';

export const streetLeague: Event = {
  id: "street-league-2024",
  title: "Street League Skateboarding Championship 2024",
  date: "June 15-16, 2024",
  location: "Las Vegas, Nevada",
  description: "The world's premier professional street skateboarding competition featuring the most talented skaters competing for the biggest prize purse in skateboarding.",
  image: "https://images.unsplash.com/photo-1564247487028-ea19e2f85a6e?ixlib=rb-4.0.3",
  categories: ["Men's Street", "Women's Street", "Next Gen"],
  dailySchedule: [
    {
      date: "SATURDAY JUNE 15",
      events: [
        {
          name: "Men's Prelims",
          category: "MEN'S STREET",
          startTime: "11:00 AM",
          date: "JUNE 15",
          countdownText: "5 MONTHS 15 DAYS"
        },
        {
          name: "Women's Prelims",
          category: "WOMEN'S STREET",
          startTime: "2:00 PM",
          date: "JUNE 15",
          countdownText: "5 MONTHS 15 DAYS 3 HOURS"
        },
        {
          name: "Next Gen Qualifiers",
          category: "NEXT GEN",
          startTime: "5:00 PM",
          date: "JUNE 15",
          countdownText: "5 MONTHS 15 DAYS 6 HOURS"
        }
      ]
    },
    {
      date: "SUNDAY JUNE 16",
      events: [
        {
          name: "Next Gen Finals",
          category: "NEXT GEN",
          startTime: "11:00 AM",
          date: "JUNE 16",
          countdownText: "5 MONTHS 16 DAYS"
        },
        {
          name: "Women's Finals",
          category: "WOMEN'S STREET",
          startTime: "2:00 PM",
          date: "JUNE 16",
          countdownText: "5 MONTHS 16 DAYS 3 HOURS"
        },
        {
          name: "Men's Finals",
          category: "MEN'S STREET",
          startTime: "5:00 PM",
          date: "JUNE 16",
          countdownText: "5 MONTHS 16 DAYS 6 HOURS"
        }
      ]
    }
  ],
  competitions: [
    {
      id: "mens-street-finals",
      name: "Men's Street Finals",
      category: "MEN'S STREET",
      description: "The world's top male street skateboarders compete in a unique format combining technical tricks and creative lines for the championship title.",
      image: "https://images.unsplash.com/photo-1564247487028-ea19e2f85a6e?ixlib=rb-4.0.3",
      athletes: [
        "Nyjah Huston (USA)",
        "Yuto Horigome (JPN)",
        "Gustavo Ribeiro (POR)",
        "Aurelien Giraud (FRA)",
        "Shane O'Neill (AUS)",
        "Chris Joslin (USA)",
        "Dashawn Jordan (USA)",
        "Vincent Milou (FRA)"
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
              name: "Thunder Hi 149 Trucks",
              brand: "Thunder",
              price: 54.99,
              image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030"
            },
            {
              name: "Formula Four Wheels",
              brand: "Spitfire",
              price: 42.99,
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
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            },
            {
              name: "Street Series Knee Pads",
              brand: "187 Killer Pads",
              price: 49.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            }
          ]
        },
        {
          category: "Footwear",
          items: [
            {
              name: "Nyjah 3",
              brand: "Nike SB",
              price: 95.99,
              image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030"
            }
          ]
        }
      ]
    },
    {
      id: "womens-street-finals",
      name: "Women's Street Finals",
      category: "WOMEN'S STREET",
      description: "Elite female skateboarders showcase their skills in a competition that combines technical precision with style and creativity.",
      image: "https://images.unsplash.com/photo-1564247488937-056a36703cee?ixlib=rb-4.0.3",
      athletes: [
        "Pamela Rosa (BRA)",
        "Rayssa Leal (BRA)",
        "Momiji Nishiya (JPN)",
        "Aori Nishimura (JPN)",
        "Leticia Bufoni (BRA)",
        "Roos Zwetsloot (NED)",
        "Mariah Duran (USA)",
        "Funa Nakayama (JPN)"
      ],
      equipment: [
        {
          category: "Skateboards",
          items: [
            {
              name: "Pro Street Complete",
              brand: "Santa Cruz",
              price: 189.99,
              image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030"
            },
            {
              name: "Independent Stage 11 Trucks",
              brand: "Independent",
              price: 59.99,
              image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030"
            }
          ]
        },
        {
          category: "Protection",
          items: [
            {
              name: "Classic Helmet",
              brand: "Triple 8",
              price: 59.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            }
          ]
        },
        {
          category: "Footwear",
          items: [
            {
              name: "Nizza Platform",
              brand: "Adidas",
              price: 85.99,
              image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030"
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "UFC APEX",
    description: "A state-of-the-art event facility featuring a custom-built street course designed to challenge the world's best skateboarders.",
    address: "6650 El Camino Rd, Las Vegas, NV 89118",
    elevation: "2,001 ft",
    capacity: "5,000 spectators",
    image: "https://images.unsplash.com/photo-1564247488937-056a36703cee?ixlib=rb-4.0.3"
  }
};