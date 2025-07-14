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

export const metadata: Metadata = {
  title: "Peace Nwankpa - iGaming, Crypto & Esports Writer",
  description:
    "I craft high-impact content that simplifies blockchain, energizes gaming communities, and builds brand credibility.",
  keywords: [
    "writer",
    "crypto",
    "igaming",
    "esports",
    "blockchain",
    "content creator",
  ],
  authors: [{ name: "Peace Nwankpa" }],
  openGraph: {
    title: "Peace Nwankpa - iGaming, Crypto & Esports Writer",
    description:
      "I craft high-impact content that simplifies blockchain, energizes gaming communities, and builds brand credibility.",
    type: "website",
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
      <body className={`${rubik.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
