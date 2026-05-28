import { Hero } from "@/components/homepage/01-hero";
import { Concerns } from "@/components/homepage/02-concerns";
import { HowItWorks } from "@/components/homepage/03-how-it-works";
import { Wedge } from "@/components/homepage/04-wedge";
import { Collection } from "@/components/homepage/06-collection";
import { Trust } from "@/components/homepage/07-trust";
import { FounderLetter } from "@/components/homepage/08-founder-letter";

export default function HomePage() {
  return (
    <main>
      {/* Act I — The Problem */}
      <Hero />
      <Concerns />
      <HowItWorks />

      {/* Act II — The Solution */}
      <Wedge />
      <Collection />

      {/* Act III — The Proof */}
      <Trust />
      <FounderLetter />
    </main>
  );
}
