import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import { Announcement } from "@/components/chrome/announcement";
import { Nav } from "@/components/chrome/nav";
import { ElementalBar } from "@/components/chrome/elemental-bar";
import { Footer } from "@/components/chrome/footer";
import { QuizFAB } from "@/components/chrome/quiz-fab";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "elements by vaidyam · clinical ayurveda",
  description:
    "Clinical Ayurveda for people who read the label. Named extracts, standardisation disclosed, every batch reviewed by our in-house vaidya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-sans" suppressHydrationWarning>
        <Announcement />
        <Nav />
        <ElementalBar />
        {children}
        <Footer />
        <QuizFAB />
      </body>
    </html>
  );
}
