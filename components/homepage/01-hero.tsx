import Image from "next/image";
import { Cta } from "@/components/shared/cta";

export function Hero() {
  return (
    <section className="bg-butter pt-12 pb-8 max-[700px]:pt-9 max-[700px]:pb-6">
      <div className="mx-auto max-w-[1280px] px-20 max-[900px]:px-6 max-[500px]:px-4">
        {/* H1 — all Inter, no italic. Accent word colored. */}
        <h1
          className="text-ink font-sans font-semibold tracking-[-0.03em] leading-[1.2] mb-7 max-[700px]:mb-5 max-w-[700px]"
          style={{ fontSize: "clamp(34px, 5vw, 58px)" }}
        >
          Doing everything right.{" "}
          Still feel <span className="text-sienna">wrong.</span>
        </h1>

        {/* Two cards — quiz primary (left), coffee explore (right). Always 2-col. */}
        <div className="grid grid-cols-2 gap-3 max-[500px]:gap-2.5">
          {/* LEFT — Quiz card (primary) — gradient vayu→akasha */}
          <a
            href="/quiz"
            className="group relative rounded-[20px] overflow-hidden min-h-[300px] max-[700px]:min-h-[240px] max-[500px]:min-h-[210px] flex flex-col justify-between p-6 max-[500px]:p-4 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300"
            style={{
              background:
                "linear-gradient(160deg, #F5D3A8 0%, #E8E3D4 50%, #D2E2E8 100%)",
            }}
          >
            {/* Text — top */}
            <div>
              <h2 className="text-ink font-sans font-semibold text-[28px] max-[700px]:text-[23px] max-[500px]:text-[18px] leading-[1.18] tracking-[-0.028em] mb-1.5">
Your <span className="text-sienna">elemental</span> profile.
              </h2>
              <p className="text-[13px] max-[500px]:text-[11px] text-ink/55 leading-snug max-[500px]:hidden">
                Two minutes. Seven questions.
              </p>
            </div>

            {/* Quiz visual — centred, fills middle */}
            <div className="flex-1 grid place-items-center py-3">
              <Image
                src="/images/quiz-visual-v3.png"
                alt="elemental profile"
                width={289}
                height={180}
                priority
                className="w-full max-w-[460px] h-auto scale-[1.12]"
              />
            </div>

            {/* CTA — bottom */}
            <Cta
              as="span"
              variant="primary"
              className="w-full justify-center max-[500px]:text-[12px] max-[500px]:px-4 max-[500px]:py-2"
            >
              Take the quiz
            </Cta>
          </a>

          {/* RIGHT — Collection explore card — warm neutral gradient */}
          <a
            href="/products"
            className="group relative rounded-[20px] overflow-hidden min-h-[300px] max-[700px]:min-h-[240px] max-[500px]:min-h-[210px] flex flex-col justify-between p-6 max-[500px]:p-4 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300"
            style={{
              background:
                "linear-gradient(160deg, #F5D3A8 0%, #E8E3D4 50%, #D2E2E8 100%)",
            }}
          >
            {/* Text — top */}
            <div>
              <h2 className="text-ink font-sans font-semibold text-[28px] max-[700px]:text-[23px] max-[500px]:text-[18px] leading-[1.18] tracking-[-0.028em] mb-1.5">
                Six rituals. One <span className="text-sienna">system.</span>
              </h2>
              <p className="text-[13px] max-[500px]:text-[11px] text-ink/55 leading-snug max-[500px]:hidden">
                Named extracts. Every batch tested.
              </p>
            </div>

            {/* Product photo — centred, fills middle */}
            <div className="flex-1 grid place-items-center py-3">
              <Image
                src="/images/collection-jars.png"
                alt="elements Five — Herbal Supplement and Triphala Churna jars"
                width={613}
                height={656}
                priority
                className="w-[88%] max-w-[280px] h-auto"
              />
            </div>

            {/* CTA — bottom */}
            <Cta
              as="span"
              variant="secondary"
              className="w-full justify-center max-[500px]:text-[12px] max-[500px]:px-4 max-[500px]:py-2"
            >
              Shop the range
            </Cta>
          </a>
        </div>

      </div>
    </section>
  );
}
