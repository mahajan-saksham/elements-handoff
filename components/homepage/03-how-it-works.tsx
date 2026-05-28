const steps = [
  {
    num: "01",
    headline: "Two minutes.",
    body: "Seven questions. Your elemental profile in a bar chart. Reviewed by Dr. Iyer before you see results.",
    gradient: "linear-gradient(145deg, #F7F2E6 0%, #F0EBD9 100%)",
  },
  {
    num: "02",
    headline: "Three products.",
    body: "Personalised to the elements you're running high or low on. Coffee, drops, churna — whatever the imbalance asks for.",
    gradient: "linear-gradient(145deg, #F7F2E6 0%, #EDE8D8 100%)",
  },
  {
    num: "03",
    headline: "One habit.",
    body: "Same time each morning. Refills on subscribe — 15% off, free shipping, cancel anytime.",
    gradient: "linear-gradient(145deg, #F7F2E6 0%, #E8E3D4 100%)",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-cream py-[120px] max-[700px]:py-16">
      <div className="mx-auto max-w-[1280px] px-20 max-[900px]:px-6 max-[500px]:px-4">
        {/* Intro */}
        <p className="eyebrow mb-4">the elements ritual</p>
        <h2
          className="text-ink font-sans font-semibold tracking-[-0.025em] leading-[1.06] mb-14 max-[700px]:mb-10"
          style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
        >
          From quiz to <span className="text-sienna">ritual</span>, in 14 days.
        </h2>

        {/* 3 step cards — gradient backgrounds, shadow-elevated */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-[900px]:grid-cols-1 max-[900px]:gap-5">
          {steps.map((s) => (
            <div
              key={s.num}
              className="rounded-[20px] p-7 max-[500px]:p-6 min-h-[220px] shadow-[0_2px_14px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              style={{ background: s.gradient }}
            >
              <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-walnut/60 mb-6">
                {s.num}
              </p>
              <h3 className="font-sans font-semibold text-ink text-[22px] max-[500px]:text-[19px] leading-[1.15] tracking-[-0.015em] mb-3">
                {s.headline}
              </h3>
              <p className="text-[14px] leading-[1.6] text-walnut">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* Ink CTA — pill with shadow */}
        <a
          href="/quiz"
          className="inline-flex items-center gap-2 bg-ink text-bone font-medium text-[13px] px-6 py-3 rounded-pill shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.14)] hover:-translate-y-0.5 transition-all duration-200"
        >
          Take the quiz →
        </a>
      </div>
    </section>
  );
}
