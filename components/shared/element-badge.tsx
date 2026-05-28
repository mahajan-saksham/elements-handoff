type ElementCode = "AK" | "VA" | "AG" | "JA" | "PR";

const dotColors: Record<ElementCode, string> = {
  AK: "bg-akasha",
  VA: "bg-vayu",
  AG: "bg-agni",
  JA: "bg-jala",
  PR: "bg-prithvi",
};

const textColors: Record<ElementCode, string> = {
  AK: "text-akasha",
  VA: "text-vayu",
  AG: "text-agni",
  JA: "text-jala",
  PR: "text-prithvi",
};

export function ElementBadge({ codes }: { codes: ElementCode[] }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.16em] font-medium uppercase">
      {codes.map((code) => (
        <span key={code} className={`inline-block w-2 h-2 rounded-full ${dotColors[code]}`} />
      ))}
      <span className={textColors[codes[0]]}>
        {codes.join(" · ")}
      </span>
    </span>
  );
}
