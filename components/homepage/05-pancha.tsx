const chips = [
  { name: "akasha", domain: "The clarity of an open mind.", code: "AK", textColor: "text-akasha" },
  { name: "vayu", domain: "The movement of breath and attention.", code: "VA", textColor: "text-vayu" },
  { name: "agni", domain: "The fire of transformation.", code: "AG", textColor: "text-agni" },
  { name: "jala", domain: "The flow of restoration.", code: "JA", textColor: "text-jala" },
  { name: "prithvi", domain: "The ground beneath you.", code: "PR", textColor: "text-prithvi" },
];

export function Pancha() {
  return (
    <section className="bg-cream py-24 max-[700px]:py-16 border-t-[0.5px] border-stone">
      <div className="mx-auto max-w-[1280px] px-20 max-[900px]:px-6 max-[500px]:px-4">
        {/* Intro */}
        <div className="max-w-[760px] mb-14">
          <p className="eyebrow mb-5">behind the concerns</p>
          <h2
            className="text-ink font-sans font-medium tracking-[-0.02em] leading-[1.08] mb-5"
            style={{ fontSize: "clamp(26px, 3.2vw, 38px)" }}
          >
            Five elements. The empirical model{" "}
            <em className="italic-accent">behind</em> every recommendation.
          </h2>
          <p
            className="text-walnut max-w-[720px]"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)", lineHeight: 1.36 }}
          >
            The Pancha Mahabhuta — Ayurveda&apos;s classical framework of
            experience. We use it as architecture, not decoration. Your quiz
            returns a profile across all five. Your ritual rebalances what&apos;s
            running off.
          </p>
        </div>

        {/* 5 reference chips — Butter-on-Cream, smaller than concern cards */}
        <div className="grid grid-cols-5 gap-3 mb-10 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1">
          {chips.map((c) => (
            <div
              key={c.name}
              className="bg-butter border-[0.5px] border-stone rounded-lg px-5 py-4"
            >
              <p className={`font-serif italic text-[22px] leading-none mb-2 ${c.textColor}`}>
                {c.name}
              </p>
              <p className="text-[13px] leading-[1.45] text-ink mb-3">
                {c.domain}
              </p>
              <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-walnut">
                · {c.code}
              </p>
            </div>
          ))}
        </div>

        {/* Ghost CTA */}
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-transparent text-ink font-medium text-[13px] px-[22px] py-3 rounded-md border-[0.5px] border-ink"
        >
          Read the Pancha system →
        </a>
      </div>
    </section>
  );
}
