import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter as FontSans } from "next/font/google";
import { cn } from "~/utils/util";
import { siteConfig } from "~/config/site";
import { Providers } from "./providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["better", "더 나은"],
  creator: "veloss",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  authors: [
    {
      name: "veloss",
      url: "https://velog.io/@veloss",
    },
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@veloss",
  },

  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(siteConfig.url),
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="ko">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
