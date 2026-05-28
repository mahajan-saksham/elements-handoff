"use client";

import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
          className="flex-1 bg-cream border-[0.5px] border-stone rounded-md px-4 py-3 text-sm text-ink placeholder:text-walnut/60 focus:outline-none focus:border-sienna"
        />
        <button className="inline-flex items-center gap-2 bg-ink text-bone font-medium text-[12px] px-[18px] py-2.5 rounded-pill whitespace-nowrap">
          Subscribe →
        </button>
      </div>
      <p className="font-mono text-[10px] tracking-[0.08em] uppercase text-walnut mt-3">
        Issue 03 out May 21.{" "}
        <a href="#" className="underline underline-offset-2">
          Read the latest →
        </a>
      </p>
    </div>
  );
}
