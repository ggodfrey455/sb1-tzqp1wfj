import type { Event } from '../types';

export const sponsoredRiders: Event = {
  id: "sponsored-riders-2024",
  title: "Sponsored Riders 2024",
  date: "2024",
  location: "Worldwide",
  description: "Featured athletes and their preferred gear across multiple disciplines.",
  image: "https://images.unsplash.com/photo-1563627806991-23f0623a533a?ixlib=rb-4.0.3",
  categories: ["Multi-Sport", "Motorcross", "Electric Bikes", "UTV"],
  dailySchedule: [], // No schedule for sponsored riders
  competitions: [
    {
      id: "gavin-godfrey",
      name: "Gavin Godfrey",
      category: "Multi-Sport Athlete",
      description: "Professional athlete excelling in multiple disciplines including motorcross, electric bikes, and UTV racing.",
      image: "https://images.unsplash.com/photo-1563627806991-23f0623a533a?ixlib=rb-4.0.3",
      athletes: [
        "Moto",
        "Surron",
        "Mountain Bike"
      ],
      equipment: [
        {
          category: "Moto",
          items: [
            {
              name: "Honda CRF450R Build (2025)",
              brand: "Honda",
              price: 12000.00,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            },
            {
              name: "Yoshimura RS-12 Full Exhaust System",
              brand: "Yoshimura",
              price: 1149.00,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            },
            {
              name: "Showa A-Kit Forks",
              brand: "Showa",
              price: 3999.00,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            },
            {
              name: "Vortex X10 ECU Tuning System",
              brand: "Vortex",
              price: 749.99,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            },
            {
              name: "Dunlop Geomax MX33 Tires (Front & Rear)",
              brand: "Dunlop",
              price: 250.00,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            },
            {
              name: "Renthal Twinwall Handlebars",
              brand: "Renthal",
              price: 109.95,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            },
            {
              name: "Acerbis Full Skid Plate",
              brand: "Acerbis",
              price: 109.95,
              image: "https://images.unsplash.com/photo-1568657704598-f6cfbaa75195"
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "Multiple Locations",
    description: "Our sponsored riders compete and perform at venues worldwide.",
    address: "Worldwide",
    elevation: "Various",
    capacity: "Various",
    image: "https://images.unsplash.com/photo-1563627806991-23f0623a533a?ixlib=rb-4.0.3"
  }
};