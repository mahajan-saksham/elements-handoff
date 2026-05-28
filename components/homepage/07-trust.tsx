const scienceCards = [
  {
    num: "01 · extract",
    headline: "KSM-66 (Ixoreal, India)",
    accentWord: "Ixoreal,",
    body: "The most-studied ashwagandha extract in clinical literature — 24+ peer-reviewed RCTs. Root-only by design.",
    link: "See the studies →",
    gradient: "linear-gradient(145deg, #F7F2E6 0%, #F0EBD9 100%)",
  },
  {
    num: "02 · standardisation",
    headline: "Withanolide 5.2% ± 0.3",
    accentWord: "5.2% ± 0.3",
    body: "Published on every pack of every ashwagandha-containing SKU. Most brands won't.",
    link: "Read the methodology →",
    gradient: "linear-gradient(145deg, #F7F2E6 0%, #EDE8D8 100%)",
  },
  {
    num: "03 · lab reports",
    headline: "Eurofins, every batch",
    accentWord: "Eurofins,",
    body: "Heavy metals, pesticides, microbial load, withanolide assay. Tested independently. Reports linked on every PDP.",
    link: "View batch reports →",
    gradient: "linear-gradient(145deg, #F7F2E6 0%, #E8E3D4 100%)",
  },
];

const citations = [
  {
    num: "¹",
    text: "Salve J et al. Adaptogenic and Anxiolytic Effects of Ashwagandha Root Extract. Cureus 2019;11(12):e6466. n=60, p<0.001.",
  },
  {
    num: "²",
    text: "Chandrasekhar K et al. Prospective, Randomized Trial of KSM-66 Ashwagandha. Indian J Psychol Med 2012;34(3):255–262. n=64.",
  },
];

export function Trust() {
  return (
    <section className="bg-cream py-[140px] max-[700px]:py-16">
      <div className="mx-auto max-w-[1280px] px-20 max-[900px]:px-6 max-[500px]:px-4">
        {/* ===== TOP: Vaidya split-grid ===== */}
        <div className="grid grid-cols-[1.05fr_0.95fr] gap-16 items-center mb-24 max-[900px]:grid-cols-1 max-[900px]:gap-9">
          {/* Left — Vaidya text */}
          <div>
            <p className="eyebrow mb-5">evidence · authority</p>
            <h2
              className="text-ink font-sans font-semibold tracking-[-0.025em] leading-[1.02] mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
            >
              Reviewed by{" "}
              <span className="text-sienna">Dr. Anjali Iyer,</span> BAMS.
            </h2>
            <p
              className="text-walnut max-w-[480px] mb-7"
              style={{
                fontSize: "clamp(16px, 1.3vw, 19px)",
                lineHeight: 1.4,
              }}
            >
              Our in-house vaidya reviews every formulation, every claim, every
              Vaidya note across the catalogue. The human authority behind every
              batch.
            </p>

            {/* Credentials — gradient card */}
            <div
              className="rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] font-mono text-[10px] tracking-[0.12em] uppercase text-walnut leading-[2] p-5 mb-8 max-w-[480px]"
              style={{
                background:
                  "linear-gradient(135deg, #F7F2E6 0%, #F0EBD9 100%)",
              }}
            >
              BAMS · Government Ayurveda Medical College, Mysuru
              <br />
              12 years clinical practice · Bengaluru
              <br />
              Published:{" "}
              <span className="text-sienna normal-case tracking-normal text-[11px]">
                Journal of Ethnopharmacology,
              </span>{" "}
              2022
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-ink text-bone font-medium text-[12px] px-5 py-2.5 rounded-pill shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.14)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Read her protocols →
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-transparent text-ink font-medium text-[13px] px-[22px] py-3 rounded-pill border-[0.5px] border-ink/25 hover:border-ink/50 transition-colors"
              >
                Book a consult · ₹499
              </a>
            </div>
          </div>

          {/* Right — Simplified: centre disc with gradient backdrop */}
          <div className="relative aspect-square max-w-[340px] mx-auto grid place-items-center">
            <div
              className="absolute inset-[8%] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(196,84,30,0.06) 0%, rgba(196,84,30,0) 70%)",
              }}
            />
            <div
              className="w-[52%] aspect-square rounded-full shadow-[0_4px_28px_rgba(0,0,0,0.06)] grid place-items-center"
              style={{
                background:
                  "linear-gradient(145deg, #F7F2E6 0%, #F0EBD9 100%)",
              }}
            >
              <span className="font-sans font-semibold text-[80px] text-sienna leading-[0.9]">
                v
              </span>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM: Science cards — gradient, shadow-elevated ===== */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-[900px]:grid-cols-1">
          {scienceCards.map((card) => (
            <div
              key={card.num}
              className="rounded-[20px] px-6 py-7 flex flex-col shadow-[0_2px_14px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              style={{ background: card.gradient }}
            >
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-walnut/60 mb-7">
                {card.num}
              </span>
              <h3 className="text-[20px] leading-[1.2] tracking-[-0.015em] font-semibold text-ink mb-3">
                {card.headline.split(card.accentWord).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className="text-sienna">{card.accentWord}</span>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </h3>
              <p className="text-[13.5px] leading-[1.6] text-walnut mb-5 flex-1">
                {card.body}
              </p>
              <a
                href="#"
                className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink font-medium pt-4 border-t-[0.5px] border-ink/8 inline-flex items-center gap-1.5"
              >
                {card.link}
              </a>
            </div>
          ))}
        </div>

        {/* Citations */}
        <div className="border-t-[0.5px] border-stone pt-6 grid grid-cols-2 gap-x-8 gap-y-3 max-[700px]:grid-cols-1">
          {citations.map((c) => (
            <p
              key={c.num}
              className="font-mono text-[10px] leading-[1.7] text-walnut/70 tracking-[0.02em]"
            >
              <span className="text-sienna font-medium mr-2">{c.num}</span>
              {c.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
