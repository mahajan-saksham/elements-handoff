import Image from "next/image";

export function Nav() {
  return (
    <nav className="bg-butter sticky top-0 z-50 border-b-[0.5px] border-stone">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-20 py-[18px] max-[900px]:px-6 max-[900px]:py-3.5">
        {/* Left: brand logo */}
        <a href="/" className="inline-flex items-center">
          <Image
            src="/images/logo-v3.png"
            alt="elements by vaidyam"
            width={506}
            height={104}
            priority
            className="h-12 w-auto max-[900px]:h-10"
          />
        </a>

        {/* Center: nav links — hidden on mobile */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-[13px] font-medium text-ink hover:text-sienna transition-colors">
            Shop
          </a>
          <a href="#" className="text-[13px] font-medium text-ink hover:text-sienna transition-colors">
            Quiz
          </a>
          <a href="#" className="text-[13px] font-medium text-ink hover:text-sienna transition-colors">
            Learn
          </a>
        </div>

        {/* Right: cart pill */}
        <div className="flex items-center gap-[18px]">
          <a
            href="#"
            className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink border-[0.5px] border-stone px-3 py-2 rounded-pill"
          >
            Cart · 0
          </a>
        </div>
      </div>
    </nav>
  );
}
