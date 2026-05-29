import Image from "next/image";
import { Cta } from "@/components/shared/cta";

export function Wedge() {
  return (
    <section
      className="relative overflow-hidden pt-[96px] pb-[140px] max-[700px]:pt-12 max-[700px]:pb-16"
      style={{
        background:
          "linear-gradient(135deg, #1A0F08 0%, #3D2415 50%, #6B3A18 100%)",
        color: "var(--color-bone)",
      }}
    >
      {/* Wordmark furniture */}
      <span
        className="absolute font-sans font-semibold leading-[0.85] pointer-events-none select-none z-[1] tracking-[-0.04em]"
        style={{
          fontSize: "clamp(180px, 22vw, 320px)",
          color: "rgba(242, 237, 227, 0.04)",
          left: "-60px",
          bottom: "-80px",
        }}
      >
        elements
      </span>

      <div className="relative z-[2] mx-auto max-w-[1280px] px-20 max-[900px]:px-6 max-[500px]:px-4">
        <div className="grid grid-cols-[1.15fr_0.85fr] gap-14 items-center max-[900px]:grid-cols-1">
          {/* Left column — copy */}
          <div>
            {/* H2 — all Inter, no Cormorant. Saffron accent word. */}
            <h2
              className="font-sans font-semibold text-bone leading-[1.0] tracking-[-0.025em] mb-7 max-w-[560px]"
              style={{ fontSize: "clamp(32px, 4.8vw, 56px)" }}
            >
              What founders take instead of a{" "}
              <span className="text-saffron">fourth</span> coffee.
            </h2>

            {/* Specs */}
            <div className="font-mono text-[11px] tracking-[0.06em] text-bone/60 leading-[1.8] mb-9">
              <p>
                <strong className="text-bone font-medium">
                  80 mg caffeine.
                </strong>{" "}
                100% Arabica.
              </p>
              <p>
                <strong className="text-bone font-medium">
                  600 mg KSM-66.
                </strong>{" "}
                Root-only ashwagandha extract.
              </p>
              <p>
                <strong className="text-bone font-medium">
                  100 mg L-theanine.
                </strong>{" "}
                The reason it&apos;s calm-alert, not jittery.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap mb-10">
              <Cta href="#" variant="secondary" onDark>
                Add to ritual · ₹99
              </Cta>
              <Cta href="#" variant="tertiary" onDark>
                See the formulation
              </Cta>
            </div>

            {/* Batch line */}
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-bone/40 pt-6 border-t-[0.5px] border-bone/12">
              Batch n° 2026.05.A · Withanolides 5.2% ± 0.3
            </div>
          </div>

          {/* Right column — floating product with amber glow */}
          <div className="relative aspect-square grid place-items-center">
            {/* Radial amber glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: "6%",
                background:
                  "radial-gradient(circle, rgba(240,185,71,0.32) 0%, rgba(240,185,71,0) 65%)",
              }}
            />
            <Image
              src="/images/wedge-coffee.png"
              alt="elements adaptogenic instant coffee — sachet and brewed cup"
              width={1398}
              height={1434}
              className="relative z-[2] w-[86%] h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
