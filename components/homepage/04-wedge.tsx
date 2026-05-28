import { ProductPlaceholder } from "@/components/shared/product-placeholder";

export function Wedge() {
  return (
    <section
      className="relative overflow-hidden py-[140px] max-[700px]:py-16"
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
            {/* Saffron eyebrow */}
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-saffron mb-6">
              Hero sku · 01 of 06
            </p>

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
              <a
                href="#"
                className="inline-flex items-center gap-2.5 bg-bone text-cocoa font-medium text-sm px-7 py-3.5 rounded-pill shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Add to ritual · ₹99 →
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-transparent text-bone font-medium text-[13px] px-[22px] py-3 rounded-pill border-[0.5px] border-bone/30 hover:border-bone/60 transition-colors"
              >
                See the formulation
              </a>
            </div>

            {/* Batch line */}
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-bone/40 pt-6 border-t-[0.5px] border-bone/12">
              Batch n° 2026.05.A · Withanolides 5.2% ± 0.3
            </div>
          </div>

          {/* Right column — product placeholder with amber glow */}
          <div className="relative aspect-square grid place-items-center">
            {/* Radial amber glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: "12%",
                background:
                  "radial-gradient(circle, rgba(240,185,71,0.30) 0%, rgba(240,185,71,0) 65%)",
              }}
            />
            <div className="relative z-[2] w-[65%]">
              <ProductPlaceholder
                variant="dark"
                aspectRatio="3/4"
                label="coffee · hero photo"
                className="!rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
