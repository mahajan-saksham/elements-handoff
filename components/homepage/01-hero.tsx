import { ProductPlaceholder } from "@/components/shared/product-placeholder";

export function Hero() {
  return (
    <section className="bg-butter pt-16 pb-10 max-[700px]:pt-12 max-[700px]:pb-8">
      <div className="mx-auto max-w-[1280px] px-20 max-[900px]:px-6 max-[500px]:px-4">
        {/* Eyebrow */}
        <p className="eyebrow mb-3">clinical ayurveda</p>

        {/* H1 — all Inter, no italic. Accent word colored. */}
        <h1
          className="text-ink font-sans font-semibold tracking-[-0.03em] leading-[0.96] mb-7 max-[700px]:mb-5 max-w-[700px]"
          style={{ fontSize: "clamp(34px, 5vw, 58px)" }}
        >
          Your morning,{" "}
          <span className="text-sienna">examined.</span>
        </h1>

        {/* Two cards — quiz primary (left), coffee explore (right). Always 2-col. */}
        <div className="grid grid-cols-2 gap-3.5 max-[500px]:gap-2.5">
          {/* LEFT — Quiz card (primary) — gradient vayu→akasha */}
          <a
            href="/quiz"
            className="relative rounded-[20px] overflow-hidden min-h-[300px] max-[700px]:min-h-[240px] max-[500px]:min-h-[210px] flex flex-col justify-between p-5 max-[500px]:p-3.5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300"
            style={{
              background:
                "linear-gradient(145deg, #D2E2E8 0%, #C8D4E8 50%, #DCD2EA 100%)",
            }}
          >
            <div className="flex justify-end items-start">
              <span className="font-mono text-[9px] tracking-[0.12em] uppercase opacity-45">
                2 min · 7 Qs
              </span>
            </div>

            {/* Bar chart — centred visual */}
            <div className="flex-1 grid place-items-center py-2">
              <svg
                className="w-[75%] max-w-[200px]"
                viewBox="0 0 190 90"
                fill="none"
              >
                <rect
                  x="4"
                  y="48"
                  width="26"
                  height="36"
                  fill="#5B4E7A"
                  rx="4"
                />
                <rect
                  x="38"
                  y="10"
                  width="26"
                  height="74"
                  fill="#6A8AA8"
                  rx="4"
                />
                <rect
                  x="72"
                  y="24"
                  width="26"
                  height="60"
                  fill="#C4541E"
                  rx="4"
                />
                <rect
                  x="106"
                  y="42"
                  width="26"
                  height="42"
                  fill="#2E7A75"
                  rx="4"
                />
                <rect
                  x="140"
                  y="54"
                  width="26"
                  height="30"
                  fill="#6B7A3D"
                  rx="4"
                />
                <line
                  x1="0"
                  y1="87"
                  x2="170"
                  y2="87"
                  stroke="rgba(42,33,24,0.10)"
                  strokeWidth="0.5"
                />
              </svg>
            </div>

            <div>
              <h2 className="text-ink font-sans font-medium text-[17px] max-[500px]:text-[14px] leading-[1.2] tracking-[-0.01em] mb-2.5">
                See your elemental profile.
              </h2>
              <span className="text-[11px] font-medium inline-flex items-center gap-1.5 bg-saffron text-[#2E1F08] px-4 py-2 rounded-pill shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                Take the quiz →
              </span>
            </div>
          </a>

          {/* RIGHT — Collection explore card — warm neutral gradient */}
          <a
            href="/products"
            className="relative rounded-[20px] overflow-hidden min-h-[300px] max-[700px]:min-h-[240px] max-[500px]:min-h-[210px] flex flex-col justify-between p-5 max-[500px]:p-3.5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300"
            style={{
              background:
                "linear-gradient(160deg, #F5D3A8 0%, #E8E3D4 50%, #D2E2E8 100%)",
            }}
          >
            <div className="flex justify-end items-start">
              <span className="font-mono text-[9px] tracking-[0.12em] uppercase opacity-45">
                6 skus
              </span>
            </div>

            {/* Three small product silhouettes — centred */}
            <div className="flex-1 grid place-items-center py-2">
              <div className="flex items-end gap-2.5">
                <ProductPlaceholder
                  aspectRatio="3/4"
                  className="!rounded-[10px] w-[60px] max-[500px]:w-[44px]"
                  label="coffee"
                />
                <ProductPlaceholder
                  aspectRatio="1/1"
                  className="!rounded-[10px] w-[52px] max-[500px]:w-[38px]"
                  label="shilajit"
                />
                <ProductPlaceholder
                  aspectRatio="5/6"
                  className="!rounded-[10px] w-[48px] max-[500px]:w-[36px]"
                  label="brahmi"
                />
              </div>
            </div>

            <div>
              <h2 className="text-ink font-sans font-medium text-[17px] max-[500px]:text-[14px] leading-[1.2] tracking-[-0.01em] mb-1">
                Six rituals. One system.
              </h2>
              <p className="text-[11px] text-ink/45 mb-2.5 max-[500px]:hidden">
                Named extracts. Every batch tested.
              </p>
              <span className="text-[11px] font-medium inline-flex items-center gap-1.5 bg-ink text-bone px-4 py-2 rounded-pill shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                Shop collection →
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
