// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Pranjal Sharma',
  role: 'Linux & Server Administrator',
  email: 'pranjalsharma01@outlook.com',
  tagline: 'I monitor, maintain and improve web performance',
  description:
    'Hi I am Pranjal Sharma. I do Linux and Server Administration work.',
  status: 'Currently volunteering for OpenStatus',
  social: [
    { label: 'GitHub', href: 'https://github.com/your-username' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-username' },
    { label: 'X', href: 'https://x.com/your-username' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
