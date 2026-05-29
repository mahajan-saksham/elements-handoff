"use client";

import { useState } from "react";
import { Cta, Chevron } from "@/components/shared/cta";

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
        <Cta as="button" variant="secondary" size="sm">
          Subscribe
        </Cta>
      </div>
      <p className="font-mono text-[10px] tracking-[0.08em] uppercase text-walnut mt-3">
        Issue 03 out May 21.{" "}
        <a href="#" className="group/cta inline-flex items-center gap-1 underline underline-offset-2">
          Read the latest
          <Chevron className="w-[10px] h-[10px]" />
        </a>
      </p>
    </div>
  );
}
