import type { Event } from '../types';

export const redbullRampage: Event = {
  id: "redbull-rampage-2024",
  title: "Red Bull Rampage 2024",
  date: "October 12-13, 2024",
  location: "Virgin, Utah",
  description: "The world's premier big-mountain freeride event, where the planet's best mountain bike athletes compete on the most challenging terrain.",
  image: "https://images.unsplash.com/photo-1564247769-c7f3cc5fe6f7?ixlib=rb-4.0.3",
  categories: ["Freeride", "Big Mountain", "Slopestyle"],
  dailySchedule: [
    {
      date: "SATURDAY OCT. 12",
      events: [
        {
          name: "Qualification Round",
          category: "FREERIDE",
          startTime: "10:00 AM",
          date: "OCT. 12",
          countdownText: "9 MONTHS 12 DAYS"
        },
        {
          name: "Course Preview",
          category: "PRACTICE",
          startTime: "2:00 PM",
          date: "OCT. 12",
          countdownText: "9 MONTHS 12 DAYS 4 HOURS"
        }
      ]
    },
    {
      date: "SUNDAY OCT. 13",
      events: [
        {
          name: "Women's Finals",
          category: "FREERIDE",
          startTime: "10:00 AM",
          date: "OCT. 13",
          countdownText: "9 MONTHS 13 DAYS"
        },
        {
          name: "Men's Finals",
          category: "FREERIDE",
          startTime: "1:00 PM",
          date: "OCT. 13",
          countdownText: "9 MONTHS 13 DAYS 4 HOURS"
        }
      ]
    }
  ],
  competitions: [
    {
      id: "womens-rampage-finals",
      name: "Women's Red Bull Rampage Finals",
      category: "FREERIDE",
      description: "The groundbreaking women's competition at Red Bull Rampage, showcasing the world's top female freeriders on the challenging Utah terrain.",
      image: "https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?ixlib=rb-4.0.3",
      athletes: [
        "Casey Brown (CAN)",
        "Vaea Verbeeck (CAN)",
        "Hannah Bergemann (USA)",
        "Vinny Armstrong (NZL)",
        "Robin Goomes (NZL)",
        "Louise Ferguson (UK)",
        "Camila Nogueira (ARG)",
        "Sam Soriano (USA)"
      ],
      equipment: [
        {
          category: "Bikes",
          items: [
            {
              name: "Trek Session 9.9 Women's",
              brand: "Trek",
              price: 8999.99,
              image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91"
            },
            {
              name: "Specialized Demo Race",
              brand: "Specialized",
              price: 7499.99,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            }
          ]
        },
        {
          category: "Protection",
          items: [
            {
              name: "Rampage Pro Carbon Helmet",
              brand: "Fox Racing",
              price: 549.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            },
            {
              name: "Impact Pro Knee Guards",
              brand: "POC",
              price: 149.99,
              image: "https://images.unsplash.com/photo-1585916435072-6d1c8c106dd2"
            },
            {
              name: "Airflex Pro Vest",
              brand: "Leatt",
              price: 279.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            }
          ]
        },
        {
          category: "Components",
          items: [
            {
              name: "Code RSC Brakes",
              brand: "SRAM",
              price: 349.99,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            },
            {
              name: "DHX2 Factory Shock",
              brand: "Fox Racing Shox",
              price: 749.99,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            }
          ]
        }
      ]
    },
    {
      id: "mens-rampage-finals",
      name: "Men's Red Bull Rampage Finals",
      category: "FREERIDE",
      description: "The ultimate test in men's freeride mountain biking, where riders navigate massive drops, steep terrain, and huge gaps on their custom-built lines.",
      image: "https://images.unsplash.com/photo-1563627806991-23f0623a533a?ixlib=rb-4.0.3",
      athletes: [
        "Carson Storch (USA)",
        "Brandon Semenuk (CAN)",
        "Szymon Godziek (POL)",
        "Cam Zink (USA)",
        "Tom Van Steenbergen (CAN)",
        "Brendan Fairclough (UK)",
        "Talus Turk (USA)",
        "Kyle Strait (USA)",
        "Ethan Nell (USA)",
        "Bienvenido Aguado (SPA)",
        "Adolf Silva (SPA)",
        "Clemens Kaudela (AUT)",
        "Kurt Sorge (CAN)",
        "Luke Whitlock (USA)",
        "Reed Boggs (USA)",
        "Thomas Genon (BEL)",
        "Tom Isted (UK)",
        "Tyler McCaul (USA)"
      ],
      equipment: [
        {
          category: "Bikes",
          items: [
            {
              name: "Trek Session 9.9",
              brand: "Trek",
              price: 8999.99,
              image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91"
            },
            {
              name: "YT TUES Pro Race",
              brand: "YT Industries",
              price: 6499.99,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            }
          ]
        },
        {
          category: "Protection",
          items: [
            {
              name: "Rampage Pro Carbon Helmet",
              brand: "Fox Racing",
              price: 549.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            },
            {
              name: "Impact Pro Knee Guards",
              brand: "POC",
              price: 149.99,
              image: "https://images.unsplash.com/photo-1585916435072-6d1c8c106dd2"
            },
            {
              name: "Leatt Body Protector",
              brand: "Leatt",
              price: 299.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            }
          ]
        },
        {
          category: "Components",
          items: [
            {
              name: "Code RSC Brakes",
              brand: "SRAM",
              price: 349.99,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            },
            {
              name: "DHX2 Factory Shock",
              brand: "Fox Racing Shox",
              price: 749.99,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "Red Bull Rampage Site",
    description: "Located in the stunning desert landscape of Virgin, Utah, the Rampage site features natural terrain that riders transform into their ultimate freeride lines.",
    address: "Virgin, UT 84779",
    elevation: "5,000 ft",
    capacity: "10,000 spectators",
    image: "https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-4.0.3"
  }
};