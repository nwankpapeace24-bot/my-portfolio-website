import type { Metadata } from "next";
import {
  Inter,
  Sora,
  Rubik,
  Lexend_Deca,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// SEO Configuration
const siteConfig = {
  name: "Peace Nwankpa",
  title: "Peace Nwankpa — iGaming, Crypto & Esports Writer",
  description:
    "I craft high-impact iGaming content that electrifies casino communities, demystifies crypto betting, and boosts operator trust. With a gambler's intuition and a marketer's precision, I turn complex trends into engaging stories that drive deposits, clicks, and loyalty.",
  url: "https://peacenwankpa.vercel.app", // Replace with your actual domain
  ogImage: "/img-5.jpg", // Social media image - Peace's photo
  favicon: "/logo.jpg", // Browser favicon/logo
  author: {
    name: "Peace Nwankpa",
    twitter: "@lulu246777", // Replace with actual Twitter handle
    linkedin: "Peace (Ugonma) Nwankpa", // Replace with actual LinkedIn username
  },
  keywords: [
    "iGaming writer",
    "crypto content creator",
    "esports writer",
    "blockchain content",
    "gaming industry writer",
    "cryptocurrency expert",
    "content strategy",
    "Peace Nwankpa",
    "freelance writer",
    "technical writing",
    "gaming journalism",
    "crypto analysis",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,

  // Favicon and icons - Using logo.jpg
  icons: {
    icon: [
      { url: "/img-5.jpg", sizes: "any" },
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },

  // Open Graph (Facebook, LinkedIn, etc.) - Using img-5.jpg
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage, // This is /img-5.jpg
        width: 1200,
        height: 630,
        alt: `${siteConfig.author.name} - Professional Writer`,
        type: "image/jpeg",
      },
      {
        url: "/img-5.jpg", // Square version fallback
        width: 800,
        height: 800,
        alt: `${siteConfig.author.name} - Professional Writer`,
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card - Using img-5.jpg
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.author.twitter,
    site: siteConfig.author.twitter,
    images: [
      {
        url: siteConfig.ogImage, // This is /img-5.jpg
        alt: `${siteConfig.author.name} - Professional Writer`,
      },
    ],
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your actual verification codes)
  verification: {
    google: "your-google-verification-code", // Replace with actual code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Category for app stores and directories
  category: "Business",

  // Additional structured data
  other: {
    "application-name": siteConfig.name,
    "msapplication-TileColor": "#3D52A0",
    "theme-color": "#3D52A0",
    "msapplication-TileImage": "/logo.jpg", // Using logo for Windows tiles
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${rubik.variable} ${lexendDeca.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Additional SEO tags */}
        <link rel="canonical" href={siteConfig.url} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.author.name,
              url: siteConfig.url,
              image: siteConfig.ogImage, // Using img-5.jpg for structured data
              description: siteConfig.description,
              jobTitle: "iGaming, Crypto & Esports Writer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              knowsAbout: [
                "iGaming",
                "Cryptocurrency",
                "Esports",
                "Blockchain Technology",
                "Content Writing",
                "Technical Writing",
              ],
              sameAs: [
                `https://twitter.com/${siteConfig.author.twitter.replace(
                  "@",
                  ""
                )}`,
                `https://linkedin.com/in/${siteConfig.author.linkedin}`,
              ],
            }),
          }}
        />
      </head>
      <body className={`${rubik.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
