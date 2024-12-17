import type { Event } from '../types';

export const ufc300: Event = {
  id: "ufc-300-2024",
  title: "UFC 300",
  date: "April 13, 2024",
  location: "Las Vegas, Nevada",
  description: "A landmark UFC event featuring multiple championship bouts and the biggest names in mixed martial arts.",
  image: "https://images.unsplash.com/photo-1579191203631-aa89211b3c54?ixlib=rb-4.0.3",
  categories: ["MMA", "Championship", "UFC"],
  dailySchedule: [
    {
      date: "SATURDAY APR. 13",
      events: [
        {
          name: "Early Prelims",
          category: "PRELIMS",
          startTime: "6:00 PM",
          date: "APR. 13",
          countdownText: "3 MONTHS 13 DAYS"
        },
        {
          name: "Prelims",
          category: "PRELIMS",
          startTime: "8:00 PM",
          date: "APR. 13",
          countdownText: "3 MONTHS 13 DAYS 2 HOURS"
        },
        {
          name: "Main Card",
          category: "MAIN CARD",
          startTime: "10:00 PM",
          date: "APR. 13",
          countdownText: "3 MONTHS 13 DAYS 4 HOURS"
        }
      ]
    }
  ],
  competitions: [
    {
      id: "light-heavyweight-championship",
      name: "Light Heavyweight Championship",
      category: "Main Event",
      description: "Alex Pereira defends his Light Heavyweight title against Jamahal Hill in an explosive main event.",
      image: "https://images.unsplash.com/photo-1579191203631-aa89211b3c54?ixlib=rb-4.0.3",
      athletes: [
        "Alex Pereira (Champion)",
        "Jamahal Hill (Challenger)"
      ],
      equipment: [
        {
          category: "Fight Gear",
          items: [
            {
              name: "UFC 300 Official Fight Kit",
              brand: "Venum",
              price: 129.99,
              image: "https://images.unsplash.com/photo-1579191203631-aa89211b3c54"
            },
            {
              name: "Pro MMA Gloves",
              brand: "UFC",
              price: 89.99,
              image: "https://images.unsplash.com/photo-1579191203631-aa89211b3c54"
            }
          ]
        },
        {
          category: "Training Equipment",
          items: [
            {
              name: "Elite Training Shorts",
              brand: "Venum",
              price: 64.99,
              image: "https://images.unsplash.com/photo-1579191203631-aa89211b3c54"
            },
            {
              name: "Performance Mouthguard",
              brand: "Venum",
              price: 29.99,
              image: "https://images.unsplash.com/photo-1579191203631-aa89211b3c54"
            }
          ]
        }
      ]
    },
    {
      id: "strawweight-championship",
      name: "Strawweight Championship",
      category: "Co-Main Event",
      description: "Zhang Weili puts her Strawweight title on the line against Yan Xiaonan in an all-Chinese championship bout.",
      image: "https://images.unsplash.com/photo-1579191203631-aa89211b3c54?ixlib=rb-4.0.3",
      athletes: [
        "Zhang Weili (Champion)",
        "Yan Xiaonan (Challenger)"
      ],
      equipment: [
        {
          category: "Fight Gear",
          items: [
            {
              name: "Women's UFC 300 Fight Kit",
              brand: "Venum",
              price: 129.99,
              image: "https://images.unsplash.com/photo-1579191203631-aa89211b3c54"
            },
            {
              name: "Women's MMA Gloves",
              brand: "UFC",
              price: 79.99,
              image: "https://images.unsplash.com/photo-1579191203631-aa89211b3c54"
            }
          ]
        }
      ]
    },
    {
      id: "bmf-title-bout",
      name: "BMF Championship",
      category: "Featured Bout",
      description: "Justin Gaethje defends the BMF title against Max Holloway in what promises to be an explosive striking battle.",
      image: "https://images.unsplash.com/photo-1579191203631-aa89211b3c54?ixlib=rb-4.0.3",
      athletes: [
        "Justin Gaethje (Champion)",
        "Max Holloway (Challenger)"
      ],
      equipment: [
        {
          category: "Fight Gear",
          items: [
            {
              name: "BMF Championship Replica Belt",
              brand: "UFC",
              price: 849.99,
              image: "https://images.unsplash.com/photo-1579191203631-aa89211b3c54"
            },
            {
              name: "Limited Edition BMF Fight Kit",
              brand: "Venum",
              price: 149.99,
              image: "https://images.unsplash.com/photo-1579191203631-aa89211b3c54"
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "T-Mobile Arena",
    description: "The premier destination for combat sports in Las Vegas, hosting the milestone UFC 300 event.",
    address: "3780 Las Vegas Blvd S, Las Vegas, NV 89158",
    elevation: "2,030 ft",
    capacity: "20,000 spectators",
    image: "https://images.unsplash.com/photo-1579191203631-aa89211b3c54?ixlib=rb-4.0.3"
  }
};