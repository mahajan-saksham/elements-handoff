"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Cta } from "@/components/shared/cta";

const steps = [
  {
    num: "01",
    tab: "Quiz",
    headline: "Two minutes.",
    accent: "Seven questions.",
    accentColor: "text-vayu",
    image: "/images/step-quiz.png",
  },
  {
    num: "02",
    tab: "Match",
    headline: "Three products.",
    accent: "One per imbalance.",
    accentColor: "text-agni",
    image: "/images/step-match.png",
  },
  {
    num: "03",
    tab: "Ritual",
    headline: "One habit.",
    accent: "Same time, each morning.",
    accentColor: "text-prithvi",
    image: "/images/step-ritual.png",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % steps.length);
    }, 5000);
    return () => clearInterval(id);
  }, [active]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) setActive((a) => (a + 1) % steps.length);
      else setActive((a) => (a - 1 + steps.length) % steps.length);
    }
    touchStartX.current = null;
  };

  return (
    <section className="bg-cream pt-[72px] pb-[120px] max-[700px]:pt-10 max-[700px]:pb-16">
      <div className="mx-auto max-w-[1280px] px-20 max-[900px]:px-6 max-[500px]:px-4">
        <h2
          className="text-ink font-sans font-semibold tracking-[-0.025em] leading-[1.06] mb-10 max-[700px]:mb-8"
          style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
        >
          From quiz to <span className="text-sienna">ritual</span>, in 14 days.
        </h2>

        {/* Swipeable carousel — flat editorial, no card */}
        <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {/* Slides track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {steps.map((s) => (
                <div key={s.num} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 items-center gap-14 max-[800px]:grid-cols-1 max-[800px]:gap-8">
                    {/* Image — flat, bold */}
                    <Image
                      src={s.image}
                      alt={s.tab}
                      width={1792}
                      height={2400}
                      className="w-full max-w-[460px] max-[800px]:max-w-[560px] max-[800px]:mx-auto aspect-[4/5] object-cover rounded-[20px]"
                    />

                    {/* Statement — left-aligned, bold */}
                    <h3 className="font-sans font-semibold text-ink text-[46px] max-[900px]:text-[30px] max-[500px]:text-[26px] leading-[1.04] tracking-[-0.03em] max-w-[460px] max-[800px]:mt-1">
                      {s.headline}{" "}
                      <span className={s.accentColor}>{s.accent}</span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer — progress + CTA. Spread to edges on mobile; grouped left on desktop (clear of the fixed quiz FAB). */}
          <div className="mt-12 max-[800px]:mt-10 flex items-center gap-8 max-[800px]:justify-between">
            <div className="flex items-center gap-2">
              {steps.map((s, i) => (
                <button
                  key={s.num}
                  onClick={() => setActive(i)}
                  aria-label={`Go to step ${s.num}`}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    i === active ? "w-12 bg-ink" : "w-6 bg-stone hover:bg-sand"
                  }`}
                />
              ))}
            </div>
            <Cta href="/quiz" variant="secondary">
              Take the quiz
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
