import { EmailCapture } from "@/components/interactive/email-capture";

export function FounderLetter() {
  return (
    <section className="bg-butter py-[140px] max-[700px]:py-16">
      <div className="mx-auto max-w-[720px] px-20 max-[900px]:px-6 max-[500px]:px-4 text-center">
        {/* Eyebrow */}
        <p className="eyebrow mb-6">a note from the founder</p>

        {/* H2 — all Inter, no serif italic. Colored accent. */}
        <h2
          className="font-sans font-semibold text-ink leading-[1.1] tracking-[-0.02em] mb-8"
          style={{ fontSize: "clamp(26px, 3vw, 34px)" }}
        >
          Built for the way you <span className="text-sienna">actually</span>{" "}
          live.
        </h2>

        {/* Single strongest paragraph */}
        <p className="text-[15px] leading-[1.75] text-ink/80 mb-5 max-w-[560px] mx-auto">
          For a year I looked for an Indian Ayurveda brand that respected my
          intelligence. I read every label. None of them disclosed extract
          standardisation. None of them named a Vaidya. None of them treated
          me like someone who knows what cortisol is. So I built one.
        </p>

        {/* Signoff */}
        <p className="font-sans font-medium text-sienna text-sm mt-6 mb-14">
          — the founder
        </p>

        {/* Email capture — gradient card, shadow-elevated */}
        <div
          className="max-w-[420px] mx-auto text-left rounded-[20px] p-7 shadow-[0_2px_14px_rgba(0,0,0,0.04)]"
          style={{
            background:
              "linear-gradient(145deg, #FBF8F0 0%, #F0EBD9 100%)",
          }}
        >
          <p className="eyebrow mb-3">the elements letter</p>
          <p
            className="text-walnut mb-5"
            style={{
              fontSize: "clamp(14px, 1.1vw, 15px)",
              lineHeight: 1.55,
            }}
          >
            Bi-weekly. Long-form. No promotions. No referral codes.
          </p>
          <EmailCapture />
        </div>
      </div>
    </section>
  );
}
