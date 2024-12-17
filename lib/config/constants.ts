export const SITE_CONFIG = {
  name: 'Gear Connect',
  description: 'Sports Equipment Recognition Platform',
  discountPercentage: 10,
} as const;

export const BUNDLE_CONFIG = {
  discountPercentage: 10,
} as const;

export const ROUTES = {
  home: '/',
  events: '/events',
  gear: '/gear',
} as const;