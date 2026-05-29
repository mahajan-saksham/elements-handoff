import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "md" | "sm";

const variantClass: Record<string, string> = {
  // Light surfaces
  primary:
    "bg-saffron text-[#2E1F08] shadow-[0_2px_10px_rgba(0,0,0,0.10)] hover:shadow-[0_8px_22px_rgba(0,0,0,0.16)] hover:-translate-y-0.5",
  secondary:
    "bg-ink text-bone shadow-[0_2px_10px_rgba(0,0,0,0.10)] hover:shadow-[0_8px_22px_rgba(0,0,0,0.16)] hover:-translate-y-0.5",
  tertiary:
    "bg-transparent text-ink border-[0.5px] border-ink/25 hover:border-ink/50 hover:bg-ink/[0.03]",
  // Dark surfaces
  "primary-dark":
    "bg-saffron text-[#2E1F08] shadow-[0_2px_10px_rgba(0,0,0,0.20)] hover:shadow-[0_8px_22px_rgba(0,0,0,0.30)] hover:-translate-y-0.5",
  "secondary-dark":
    "bg-bone text-cocoa shadow-[0_2px_12px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_22px_rgba(0,0,0,0.28)] hover:-translate-y-0.5",
  "tertiary-dark":
    "bg-transparent text-bone border-[0.5px] border-bone/30 hover:border-bone/60",
};

const sizeClass: Record<Size, string> = {
  md: "text-[13px] px-5 py-2.5",
  sm: "text-[12px] px-4 py-2",
};

export function Chevron({
  className = "w-[13px] h-[13px]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`${className} shrink-0 transition-transform duration-300 group-hover/cta:translate-x-[3px]`}
    >
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Cta({
  children,
  variant = "primary",
  size = "md",
  onDark = false,
  withChevron,
  href,
  as,
  className = "",
  type,
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  onDark?: boolean;
  /** Defaults to true for primary/secondary, false for tertiary. */
  withChevron?: boolean;
  href?: string;
  as?: "a" | "span" | "button";
  className?: string;
  type?: "button" | "submit";
}) {
  const key = onDark ? `${variant}-dark` : variant;
  const showChevron = withChevron ?? variant !== "tertiary";
  const cls = `group/cta inline-flex items-center gap-2 font-semibold tracking-[-0.01em] rounded-full transition-all duration-300 whitespace-nowrap ${sizeClass[size]} ${variantClass[key]} ${className}`;

  const inner = (
    <>
      {children}
      {showChevron && <Chevron />}
    </>
  );

  const Tag = as ?? (href ? "a" : "button");
  if (Tag === "a")
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  if (Tag === "span") return <span className={cls}>{inner}</span>;
  return (
    <button type={type ?? "button"} className={cls}>
      {inner}
    </button>
  );
}
