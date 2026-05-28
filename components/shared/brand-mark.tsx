export function BrandMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      {/* bowl */}
      <path d="M5 18 Q16 28 27 18" />
      {/* stem */}
      <line x1="16" y1="6" x2="16" y2="18" />
      {/* outer leaves */}
      <path d="M16 13 Q12 11 11 7" />
      <path d="M16 13 Q20 11 21 7" />
      {/* inner leaves */}
      <path d="M16 10 Q14 8 13 5" />
      <path d="M16 10 Q18 8 19 5" />
    </svg>
  );
}
