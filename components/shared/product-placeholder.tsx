interface ProductPlaceholderProps {
  aspectRatio?: string;
  className?: string;
  variant?: "light" | "dark";
  label?: string;
}

export function ProductPlaceholder({
  aspectRatio = "3/4",
  className = "",
  variant = "light",
  label = "product photo",
}: ProductPlaceholderProps) {
  const isLight = variant === "light";

  return (
    <div
      className={`relative rounded-lg overflow-hidden ${className}`}
      style={{
        aspectRatio,
        background: isLight
          ? "linear-gradient(180deg, rgba(42,33,24,0.04) 0%, rgba(42,33,24,0.01) 100%)"
          : "linear-gradient(180deg, rgba(247,242,230,0.08) 0%, rgba(247,242,230,0.02) 100%)",
        border: isLight
          ? "0.5px solid var(--color-stone)"
          : "0.5px solid rgba(242,237,227,0.12)",
      }}
    >
      <span
        className={`absolute inset-0 grid place-items-center font-mono text-[9px] tracking-[0.14em] uppercase ${
          isLight ? "text-ink/20" : "text-bone/25"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
