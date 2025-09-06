export type SiteConfig = {
  name: string
  shortName: string
  description: string
  url: string
  images: {
    og: string
    hero: string
    avatar: string
  }
  social: {
    xHandle: string
    xUrl: string
    instagramUrl: string
    githubUrl: string
    email: string
  }
  person: {
    birthdateISO: string
    city: string
    countryCode: string
    location: { lat: number; lon: number }
  }
  posthog: {
    apiHost: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Rushab Jain',
  shortName: 'Rushab',
  description: 'Exploring the Post AI world',
  url: 'https://rushab.me',
  images: {
    og: '/og-image.png',
    hero: '/yb-hero.jpg',
    avatar: '/logos/yb.jpg',
  },
  social: {
    xHandle: '@ybhrdwj',
    xUrl: 'https://x.com/rushabtated4',
    instagramUrl: 'https://instagram.com/rushabtated4',
    githubUrl: 'https://github.com/rushabtated4',
    email: 'rushabtated4@gmail.com',
  },
  person: {
    birthdateISO: '2000-06-09',
    city: 'Mumbai',
    countryCode: 'IN',
    location: { lat: 19.076, lon: 72.8777 },
  },
  posthog: {
    apiHost: '/ingest',
  },
}



