"use client";

import { useState, useCallback } from "react";
import {
  QUESTIONS,
  ELEMENTS,
  DOSHA_NAME,
  PRODUCTS,
  CITATIONS,
  computeResults,
  type QuizResult,
} from "@/lib/pancha";

type Screen = "intro" | "quiz" | "results";

export default function QuizPage() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(QUESTIONS.length).fill(null)
  );
  const [result, setResult] = useState<QuizResult | null>(null);

  const start = useCallback(() => {
    setIdx(0);
    setAnswers(new Array(QUESTIONS.length).fill(null));
    setScreen("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const choose = useCallback(
    (optIdx: number) => {
      const next = [...answers];
      next[idx] = optIdx;
      setAnswers(next);
      if (idx < QUESTIONS.length - 1) {
        setIdx(idx + 1);
      } else {
        const r = computeResults(next);
        setResult(r);
        setScreen("results");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [answers, idx]
  );

  const back = useCallback(() => {
    if (idx > 0) setIdx(idx - 1);
  }, [idx]);

  const restart = useCallback(() => {
    setScreen("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-butter">
      <div className="max-w-[680px] mx-auto px-6 pt-6 pb-20">
        {screen === "intro" && <Intro onStart={start} />}
        {screen === "quiz" && (
          <Quiz idx={idx} onChoose={choose} onBack={back} />
        )}
        {screen === "results" && result && (
          <Results result={result} onRestart={restart} />
        )}
      </div>
    </div>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <section>
      <p className="eyebrow mb-4">the pancha quiz</p>
      <h1
        className="font-sans font-semibold text-ink leading-[1.0] tracking-[-0.025em] mb-5"
        style={{ fontSize: "clamp(34px, 5vw, 46px)" }}
      >
        Five elements. One quiz.
        <br />
        Your morning, <span className="text-sienna">mapped.</span>
      </h1>
      <p className="text-[18px] leading-[1.5] text-ink max-w-[62ch] mb-6">
        Before we suggest anything, we&apos;d like to understand your mornings.
        Twelve questions across the five elements —{" "}
        <span className="font-serif italic text-sienna">
          akasha, vayu, agni, jala, prithvi
        </span>
        . We read your stable constitution and your current state, then map you
        to a ritual built around clinical evidence.
      </p>
      <div className="flex gap-6 flex-wrap mt-6 font-mono text-[11px] text-walnut tracking-[0.04em]">
        <div>
          <strong className="text-ink font-medium">12</strong> questions
        </div>
        <div>
          <strong className="text-ink font-medium">~2</strong> minutes
        </div>
        <div>
          <strong className="text-ink font-medium">0</strong> emails asked
        </div>
      </div>
      <button
        onClick={onStart}
        className="mt-7 inline-flex items-center gap-2 bg-saffron text-[#2E1F08] font-medium text-[14px] px-7 py-3.5 rounded-[8px] hover:brightness-[0.97] hover:-translate-y-0.5 transition-all duration-150"
      >
        see your elemental profile →
      </button>
    </section>
  );
}

function Quiz({
  idx,
  onChoose,
  onBack,
}: {
  idx: number;
  onChoose: (i: number) => void;
  onBack: () => void;
}) {
  const Q = QUESTIONS[idx];
  const progress = ((idx / QUESTIONS.length) * 100).toFixed(0);

  return (
    <section>
      {/* Progress track */}
      <div className="h-[3px] bg-stone rounded-[2px] mb-8 overflow-hidden">
        <div
          className="h-full bg-sienna transition-[width] duration-400 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-walnut mb-2">
        <span className="text-sienna font-medium">
          {String(idx + 1).padStart(2, "0")}
        </span>{" "}
        of {QUESTIONS.length}
      </p>
      <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-walnut mb-6">
        {Q.phase === "prakriti"
          ? "part one · your constitution (lifelong)"
          : "part two · your current state (last 30 days)"}
      </p>

      <h2 className="font-sans font-medium text-ink leading-[1.2] tracking-[-0.02em] mb-7 max-w-[22ch]" style={{ fontSize: "clamp(23px, 3.5vw, 28px)" }}>
        {Q.q}
      </h2>

      <div className="flex flex-col gap-3">
        {Q.opts.map((opt, i) => (
          <button
            key={i}
            onClick={() => onChoose(i)}
            className="flex items-center justify-between gap-4 w-full text-left bg-cream border-[0.5px] border-stone rounded-[14px] px-[18px] py-4 text-[15px] text-ink hover:bg-butter hover:border-sand hover:translate-x-0.5 transition-all duration-150"
          >
            <span>{opt.t}</span>
            <span className="text-walnut text-[15px] flex-shrink-0">→</span>
          </button>
        ))}
      </div>

      {idx > 0 && (
        <button
          onClick={onBack}
          className="mt-5 font-mono text-[11px] tracking-[0.1em] uppercase text-walnut underline underline-offset-[3px] hover:text-ink transition-colors"
        >
          ← back
        </button>
      )}
    </section>
  );
}

function Results({
  result,
  onRestart,
}: {
  result: QuizResult;
  onRestart: () => void;
}) {
  const { domVik, domPrak, elements, vikritiData } = result;
  const maxPct = Math.max(...ELEMENTS.map((e) => elements[e.key]), 1);

  return (
    <div>
      {/* Profile header */}
      <section className="mb-10">
        <p className="eyebrow mb-4">your elemental profile · current state</p>
        <h2
          className="font-sans font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-3"
          style={{ fontSize: "clamp(27px, 4vw, 34px)" }}
        >
          You&apos;re running high in{" "}
          <span className="text-sienna">
            {domVik === "V" ? "vayu" : domVik === "P" ? "agni" : "prithvi"}.
          </span>
        </h2>
        <p className="text-[17px] leading-[1.5] text-ink max-w-[60ch] mb-2">
          {vikritiData.vaidya}
        </p>
        <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-walnut flex items-center gap-2">
          <span
            className="inline-block w-[6px] h-[6px] rounded-full bg-sienna"
          />
          reviewed by dr. anjali iyer, bams · in-house vaidya
        </div>
      </section>

      {/* Bar chart */}
      <section className="mb-10">
        <div className="flex items-end gap-2.5 h-[200px] p-[18px] bg-cream border-[0.5px] border-stone rounded-[14px] mb-2.5">
          {ELEMENTS.map((e) => {
            const pct = elements[e.key];
            const h = Math.round((pct / maxPct) * 130) + 4;
            return (
              <div
                key={e.key}
                className="flex-1 flex flex-col items-center justify-end h-full"
              >
                <span className="font-mono text-[12px] font-medium text-ink mb-1.5">
                  {pct}%
                </span>
                <div
                  className="w-full rounded-t-[3px] transition-all duration-700"
                  style={{ height: h, background: e.color }}
                />
                <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-walnut mt-2">
                  {e.code}
                </span>
                <span className="font-serif italic text-[13px] text-walnut">
                  {e.name}
                </span>
              </div>
            );
          })}
        </div>
        <p className="font-mono text-[11px] text-walnut">
          your stable constitution reads{" "}
          <strong className="text-ink font-medium">
            {DOSHA_NAME[domPrak]}-leaning
          </strong>{" "}
          · today you&apos;re carrying a{" "}
          <strong className="text-ink font-medium">
            {DOSHA_NAME[domVik]}
          </strong>{" "}
          imbalance. recommendations target the imbalance, not the baseline.
        </p>
      </section>

      {/* Inference */}
      <section className="mb-10">
        <p className="eyebrow mb-4">things you didn&apos;t tell us</p>
        <div className="bg-cream border-[0.5px] border-stone rounded-[14px] px-5">
          {vikritiData.infer.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 py-4 ${
                i < vikritiData.infer.length - 1
                  ? "border-b-[0.5px] border-stone"
                  : ""
              }`}
            >
              <span className="font-mono text-[13px] font-medium text-sienna min-w-[42px] pt-0.5">
                {item.c}
              </span>
              <span className="text-[15px] text-ink">{item.t}</span>
            </div>
          ))}
        </div>
        <p className="font-mono text-[10px] leading-[1.55] text-walnut mt-3.5">
          These are predictions, not guesses we dressed up. They come from how
          your answer pattern co-occurs with traits you didn&apos;t report — and
          every figure is held to a measured hit-rate, recalibrated as more
          people take the quiz. If one&apos;s wrong, tell the vaidya and the
          model learns.
        </p>
      </section>

      {/* 14-day ritual */}
      <section className="mb-10">
        <p className="eyebrow mb-4">your 14-day ritual</p>
        <p className="font-mono text-[11px] text-walnut mb-4">
          mapped to your{" "}
          <span className="font-serif italic text-sienna">
            {DOSHA_NAME[domVik]}
          </span>{" "}
          imbalance — built to balance the elements you&apos;re running high on.
        </p>

        <div className="flex flex-col gap-3">
          {vikritiData.products.map((item) => {
            const P = PRODUCTS[item.p];
            return (
              <div
                key={item.p}
                className="flex gap-4 bg-cream border-[0.5px] border-stone rounded-[14px] p-[18px] items-start"
              >
                <div
                  className="w-[46px] h-[46px] rounded-[12px] flex-shrink-0 flex items-center justify-center font-serif italic text-[22px] text-white"
                  style={{ background: P.dots[0][1] }}
                >
                  {P.mark}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-sans font-medium text-[16px] text-ink flex items-center gap-2.5 flex-wrap">
                    {P.nm}
                    <span className="inline-flex items-center gap-[5px]">
                      {P.dots.map((d, di) => (
                        <span
                          key={di}
                          className="w-2 h-2 rounded-full"
                          style={{ background: d[1] }}
                        />
                      ))}
                      <span className="font-serif italic text-[12px] text-walnut ml-0.5">
                        {P.el}
                      </span>
                    </span>
                  </div>
                  <p className="text-[14px] text-ink mt-1.5 mb-2">
                    {item.why}
                  </p>
                  <p className="font-mono text-[10px] leading-[1.5] text-walnut">
                    {item.cite}
                  </p>
                </div>
                <span className="font-mono text-[13px] font-medium text-ink whitespace-nowrap">
                  {P.price}
                </span>
              </div>
            );
          })}
        </div>

        <button
          onClick={() =>
            alert(
              "In the live build this opens the cart with your 14-day ritual pre-loaded."
            )
          }
          className="mt-7 inline-flex items-center gap-2 bg-saffron text-[#2E1F08] font-medium text-[14px] px-7 py-3.5 rounded-[8px] hover:brightness-[0.97] hover:-translate-y-0.5 transition-all duration-150"
        >
          start the 14-day ritual →
        </button>
      </section>

      {/* Disclaimer */}
      <div className="text-[12px] leading-[1.6] text-walnut bg-cream border-[0.5px] border-stone rounded-[12px] p-4 mt-8">
        This is a wellness self-assessment based on the Ayurvedic Pancha
        Mahabhuta framework. It is not a medical diagnosis. Statements about
        products describe traditional use and structure-function support, not
        treatment or cure. If you are pregnant, nursing, on medication, or
        managing a health condition, consult a registered Ayurvedic physician
        (BAMS) or your doctor before starting any supplement.
      </div>

      {/* Citations */}
      <div className="font-mono text-[10px] leading-[1.7] text-walnut mt-6">
        <p className="tracking-[0.14em] uppercase mb-2">the evidence</p>
        {CITATIONS.map((c, i) => (
          <p key={i} className="mb-1">
            <strong className="text-ink font-medium">
              {c.split(".")[0]}.
            </strong>
            {c.substring(c.indexOf(".") + 1)}
          </p>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="mt-6 font-mono text-[11px] tracking-[0.1em] uppercase text-walnut underline underline-offset-[3px] hover:text-ink transition-colors"
      >
        ↻ retake the quiz
      </button>

      {/* Elemental bar */}
      <div className="flex h-[5px] w-full mt-9 rounded-[2px] overflow-hidden">
        {ELEMENTS.map((e) => (
          <div key={e.key} className="flex-1" style={{ background: e.color }} />
        ))}
      </div>
    </div>
  );
}
