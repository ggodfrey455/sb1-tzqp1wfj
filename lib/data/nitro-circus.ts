import type { Event } from '../types';

export const nitroCircus: Event = {
  id: "nitro-circus-world-games-2024",
  title: "Nitro Circus World Games 2024",
  date: "September 14-15, 2024",
  location: "Salt Lake City, Utah",
  description: "The ultimate action sports spectacle featuring the world's most daring athletes pushing the boundaries of what's possible on motorcycles, BMX, skateboards, and more.",
  image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3",
  categories: ["FMX", "BMX", "Skateboard", "Scooter"],
  dailySchedule: [
    {
      date: "SATURDAY SEPT. 14",
      events: [
        {
          name: "BMX Mega Ramp Qualifying",
          category: "BMX",
          startTime: "1:00 PM",
          date: "SEPT. 14",
          countdownText: "8 MONTHS 14 DAYS"
        },
        {
          name: "Scooter Best Trick",
          category: "SCOOTER",
          startTime: "3:00 PM",
          date: "SEPT. 14",
          countdownText: "8 MONTHS 14 DAYS 2 HOURS"
        },
        {
          name: "Skateboard Big Air",
          category: "SKATEBOARD",
          startTime: "5:00 PM",
          date: "SEPT. 14",
          countdownText: "8 MONTHS 14 DAYS 4 HOURS"
        },
        {
          name: "FMX Triple Hit Contest",
          category: "FMX",
          startTime: "7:00 PM",
          date: "SEPT. 14",
          countdownText: "8 MONTHS 14 DAYS 6 HOURS"
        }
      ]
    },
    {
      date: "SUNDAY SEPT. 15",
      events: [
        {
          name: "BMX Mega Ramp Finals",
          category: "BMX",
          startTime: "2:00 PM",
          date: "SEPT. 15",
          countdownText: "8 MONTHS 15 DAYS 1 HOUR"
        },
        {
          name: "World First Attempts",
          category: "SPECIAL",
          startTime: "4:00 PM",
          date: "SEPT. 15",
          countdownText: "8 MONTHS 15 DAYS 3 HOURS"
        },
        {
          name: "FMX Best Trick",
          category: "FMX",
          startTime: "6:00 PM",
          date: "SEPT. 15",
          countdownText: "8 MONTHS 15 DAYS 5 HOURS"
        }
      ]
    }
  ],
  competitions: [
    {
      id: "fmx-triple-hit",
      name: "FMX Triple Hit Contest",
      category: "FMX",
      description: "The most intense FMX competition where riders perform three consecutive tricks on three massive jumps, pushing the limits of what's possible on a motorcycle.",
      image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3",
      athletes: [
        "Travis Pastrana (USA)",
        "Josh Sheehan (AUS)",
        "Ryan Williams (AUS)",
        "Jarryd McNeil (AUS)",
        "Axell Hodges (USA)",
        "Luc Ackermann (GER)",
        "Pat Bowden (AUS)",
        "Blake Williams (AUS)"
      ],
      equipment: [
        {
          category: "Motorcycles",
          items: [
            {
              name: "YZ250F Special Edition",
              brand: "Yamaha",
              price: 9299.99,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            },
            {
              name: "RM-Z450",
              brand: "Suzuki",
              price: 8999.99,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            }
          ]
        },
        {
          category: "Protection",
          items: [
            {
              name: "V3 RS Rigz Helmet",
              brand: "Fox Racing",
              price: 699.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            },
            {
              name: "Comp R Boot",
              brand: "Fox Racing",
              price: 299.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            }
          ]
        }
      ]
    },
    {
      id: "bmx-mega-ramp",
      name: "BMX Mega Ramp",
      category: "BMX",
      description: "Athletes launch off the massive Mega Ramp, performing groundbreaking tricks while soaring through the air.",
      image: "https://images.unsplash.com/photo-1563627806991-23f0623a533a?ixlib=rb-4.0.3",
      athletes: [
        "James Foster (USA)",
        "Andy Buckworth (AUS)",
        "Vince Byron (AUS)",
        "Morgan Wade (USA)",
        "Zack Warden (USA)"
      ],
      equipment: [
        {
          category: "Bikes",
          items: [
            {
              name: "Mega Ramp Pro BMX",
              brand: "GT Bicycles",
              price: 1299.99,
              image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7"
            }
          ]
        },
        {
          category: "Protection",
          items: [
            {
              name: "Full Face BMX Helmet",
              brand: "Troy Lee Designs",
              price: 299.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            }
          ]
        }
      ]
    },
    {
      id: "skateboard-big-air",
      name: "Skateboard Big Air",
      category: "SKATEBOARD",
      description: "Skateboarders tackle the massive Big Air ramp, combining technical tricks with massive air time.",
      image: "https://images.unsplash.com/photo-1564247487028-ea19e2f85a6e?ixlib=rb-4.0.3",
      athletes: [
        "Elliot Sloan (USA)",
        "Mitchie Brusco (USA)",
        "Clay Kreiner (USA)",
        "Jake Brown (AUS)",
        "Rune Glifberg (DEN)"
      ],
      equipment: [
        {
          category: "Skateboards",
          items: [
            {
              name: "Big Air Pro Model",
              brand: "Element",
              price: 169.99,
              image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030"
            }
          ]
        },
        {
          category: "Protection",
          items: [
            {
              name: "Big Air Helmet",
              brand: "Pro-Tec",
              price: 89.99,
              image: "https://images.unsplash.com/photo-1573641287741-f7df0c327155"
            }
          ]
        }
      ]
    },
    {
      id: "fmx-best-trick",
      name: "FMX Best Trick",
      category: "FMX",
      description: "The most progressive FMX competition where riders attempt never-before-seen tricks.",
      image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3",
      athletes: [
        "Travis Pastrana (USA)",
        "Josh Sheehan (AUS)",
        "Harry Bink (AUS)",
        "Axell Hodges (USA)",
        "Rob Adelberg (AUS)"
      ],
      equipment: [
        {
          category: "Motorcycles",
          items: [
            {
              name: "KX450 Special Edition",
              brand: "Kawasaki",
              price: 9499.99,
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
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "Rice-Eccles Stadium",
    description: "Home to the Nitro Circus World Games, featuring massive custom-built ramps and obstacles for the most progressive action sports tricks.",
    address: "451 S 1400 E, Salt Lake City, UT 84112",
    elevation: "4,657 ft",
    capacity: "45,807 spectators",
    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3"
  }
};