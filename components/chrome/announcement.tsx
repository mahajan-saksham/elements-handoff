export function Announcement() {
  return (
    <div className="bg-marigold flex items-center justify-center gap-4 px-6 py-2.5 text-[11px] font-medium text-[#2E1F08] flex-wrap"
         style={{ height: "36px" }}>
      <span>
        Now on Blinkit, Zepto, Instamart in Bengaluru, Mumbai &amp; Delhi.{" "}
        <span className="font-serif italic font-medium">10-minute delivery.</span>
      </span>
      <a href="#" className="underline underline-offset-[3px]">
        See your city <span className="inline-block ml-1">→</span>
      </a>
    </div>
  );
}
