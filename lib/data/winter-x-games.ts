import { xGamesSchedule } from '../schedule';
import type { Event } from '../types';

export const winterXGames: Event = {
  id: "winter-x-games-2024",
  title: "Winter X Games 2024",
  date: "January 23-25, 2024",
  location: "Aspen, Colorado",
  description: "The premier winter action sports event featuring the world's best athletes competing in skiing, snowboarding, and more.",
  image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3",
  categories: ["Skiing", "Snowboarding", "Big Air", "Slopestyle", "SuperPipe"],
  dailySchedule: xGamesSchedule,
  competitions: [
    {
      id: "mens-snowboard-superpipe",
      name: "Men's Snowboard SuperPipe",
      category: "SUPERPIPE",
      description: "The world's top male snowboarders compete in the legendary SuperPipe competition.",
      image: "https://images.unsplash.com/photo-1518641847910-f9ad8d9df045?ixlib=rb-4.0.3",
      athletes: [
        "Shaun White",
        "Ayumu Hirano",
        "Scotty James",
        "Taylor Gold",
        "Chase Josey"
      ],
      equipment: [
        {
          category: "Snowboards",
          items: [
            {
              name: "Custom X Snowboard",
              brand: "Burton",
              price: 799.99,
              image: "https://images.unsplash.com/photo-1482442120256-9c03866de390"
            },
            {
              name: "Step On X Bindings",
              brand: "Burton",
              price: 349.99,
              image: "https://images.unsplash.com/photo-1522056615691-da7b8106c665"
            }
          ]
        },
        {
          category: "Protection",
          items: [
            {
              name: "Anon M4 Goggles",
              brand: "Burton",
              price: 299.99,
              image: "https://images.unsplash.com/photo-1587382107435-bf6a734b4c78"
            }
          ]
        }
      ]
    }
  ],
  venue: {
    name: "Buttermilk Mountain",
    description: "Home to Winter X Games Aspen, Buttermilk Mountain offers world-class terrain parks and the legendary X Games SuperPipe.",
    address: "38700 CO-82, Aspen, CO 81611",
    elevation: "9,900 ft",
    capacity: "15,000 spectators",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3"
  }
};