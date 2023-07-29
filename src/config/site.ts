import { env } from "../../env.mjs";

export const siteConfig = {
  name: "Better",
  description: "더 나은 나만의 정보를 위한 플랫폼",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: "",
  links: {
    twitter: "https://twitter.com/Lalossol",
    github: "https://github.com/OhMinsSup",
  },
};

export type SiteMenuConfig = {
  id: string;
  href: string;
  segment: string | null;
  text: string;
  hidden?: boolean;
  disabled?: boolean;
};

export const siteMenuConfig = {
  main: [
    {
      id: "link-1",
      href: "/",
      segment: null,
      hidden: false,
      text: "My Feed",
    },
    {
      id: "link-2",
      href: "/explore",
      segment: "explore",
      hidden: false,
      text: "Explore",
    },
    {
      id: "link-3",
      href: "/bookmarks",
      segment: "bookmarks",
      hidden: false,
      text: "Bookmarks",
    },
  ] as SiteMenuConfig[],
};
