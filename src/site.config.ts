// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: "Pranjal Sharma",
  role: "Linux & Server Administrator",
  email: "pranjalsharma01@outlook.com",
  tagline: "I monitor, maintain and improve web performance",
  description:
    "Hi I am Pranjal Sharma. I do Linux and Server Administration work.",
  status: "Currently volunteering for OpenStatus",
  social: [
    { label: "GitHub", href: "https://github.com/psdojo" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pranjal-sharma-73ba0a193" },
    { label: "Dev.to", href: "https://dev.to" },
    { label: "X", href: "https://x.com" },
    { label: "Email", href: "mailto:pranjalsharma01@outlook.com" },
  ],
  locale: "en",
} as const;

export const NAV_LINKS = [

  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
] as const;
