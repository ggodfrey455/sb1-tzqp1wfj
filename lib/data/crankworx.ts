import type { Event } from '../types';

export const crankworx: Event = {
  id: "crankworx-whistler-2024",
  title: "CrankWorx Whistler 2024",
  date: "August 2-11, 2024",
  location: "Whistler, British Columbia",
  description: "The ultimate mountain bike festival featuring the world's best riders competing in slopestyle, downhill, and more.",
  image: "https://images.unsplash.com/photo-1564247487028-ea19e2f85a6e?ixlib=rb-4.0.3",
  categories: ["Slopestyle", "Mountain Bike", "Freeride"],
  dailySchedule: [
    {
      date: "SATURDAY AUG. 10",
      events: [
        {
          name: "Red Bull Joyride - Slopestyle Finals",
          category: "SLOPESTYLE",
          startTime: "4:30 PM",
          date: "AUG. 10",
          countdownText: "8 MONTHS 10 DAYS"
        }
      ]
    }
  ],
  competitions: [
    {
      id: "red-bull-joyride",
      name: "Red Bull Joyride",
      category: "SLOPESTYLE",
      description: "The most prestigious slopestyle mountain bike competition in the world, featuring massive jumps and technical features.",
      image: "https://images.unsplash.com/photo-1563627806991-23f0623a533a?ixlib=rb-4.0.3",
      athletes: [
        "Emil Johansson (SWE)",
        "Brandon Semenuk (CAN)",
        "Erik Fedko (GER)",
        "Nicholi Rogatkin (USA)",
        "Max Fredriksson (SWE)"
      ],
      equipment: [
        {
          category: "Bikes",
          items: [
            {
              name: "Trek Ticket S Frame",
              brand: "Trek",
              price: 1500.00,
              image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91"
            },
            {
              name: "RockShox Pike DJ Fork",
              brand: "RockShox",
              price: 850.00,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            },
            {
              name: "RockShox Monarch RT3 Shock",
              brand: "RockShox",
              price: 400.00,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            }
          ]
        },
        {
          category: "Components",
          items: [
            {
              name: "SRAM X01 DH Drivetrain",
              brand: "SRAM",
              price: 1200.00,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            },
            {
              name: "SRAM Level Ultimate Brakes",
              brand: "SRAM",
              price: 300.00,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            }
          ]
        },
        {
          category: "Wheels & Controls",
          items: [
            {
              name: "Bontrager Line Pro 30 Wheelset",
              brand: "Bontrager",
              price: 1300.00,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            },
            {
              name: "Title MTB Components Set",
              brand: "Title MTB",
              price: 150.00,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            },
            {
              name: "Chromag Scarab Pedals",
              brand: "Chromag",
              price: 130.00,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "Whistler Mountain Bike Park",
    description: "Home to the world's most prestigious slopestyle course, featuring massive features and creative lines.",
    address: "4545 Blackcomb Way, Whistler, BC V8E 0X9, Canada",
    elevation: "2,181 ft",
    capacity: "30,000 spectators",
    image: "https://images.unsplash.com/photo-1564247487028-ea19e2f85a6e?ixlib=rb-4.0.3"
  }
};