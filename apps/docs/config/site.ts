export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Unblock the internet",
  description: "Free your internet experience and enjoy what you want, when you want.",
  ogImage: "https://nextui.org/twitter-cards/nextui.jpeg",
  author: "Junior Garcia",
  email: "jrgarciadev@gmail.com",
  siteUrl: "https://unblockvpn.ai",
  creator: "@unblockvpn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unblockvpn.ai",
    siteName: "UnblockVPN",
    description: "Free your internet experience and enjoy what you want, when you want.",
    images: [
      {
        url: "https://nextui.org/twitter-cards/nextui.jpeg",
        width: 1200,
        height: 630,
        alt: "NextUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free your internet experience and enjoy what you want, when you want.",
    description: "Free your internet experience and enjoy what you want, when you want.",
    image: "https://nextui.org/twitter-cards/nextui.jpeg",
    creator: "@unblockvpn",
  },
  links: {
    github: "https://github.com/nextui-org/unblockvpn",
    twitter: "https://twitter.com/unblockvpn",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/unblockvpn",
    sponsor: "https://patreon.com/unblockvpn",
    portfolio: "https://unblockvpn.ai",
  },
};
