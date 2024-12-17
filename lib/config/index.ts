// Centralize configuration
export const SITE_CONFIG = {
  name: 'GearSpot',
  description: 'Sports Equipment Recognition Platform',
  url: 'https://gearspot.com',
  discountPercentage: 10,
} as const;

export const IMAGE_CONFIG = {
  defaultQuality: 75,
  defaultPlaceholder: 'blur',
} as const;

export const ROUTES = {
  home: '/',
  events: '/events',
  competitions: '/competitions',
  gear: '/gear',
} as const;