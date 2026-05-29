import Image from "next/image";

const concerns = [
  {
    label: "Brain fog",
    accent: "& clarity",
    accentColor: "text-akasha",
    dotColor: "bg-akasha",
    icon: "/images/icons/1.png",
    gradient: "linear-gradient(90deg, rgba(220,210,234,0.35) 0%, rgba(251,248,240,0.6) 100%)",
    href: "/elements/akasha",
  },
  {
    label: "Jittery",
    accent: "focus",
    accentColor: "text-vayu",
    dotColor: "bg-vayu",
    icon: "/images/icons/2.png",
    gradient: "linear-gradient(90deg, rgba(210,226,232,0.35) 0%, rgba(251,248,240,0.6) 100%)",
    href: "/elements/vayu",
  },
  {
    label: "Low",
    accent: "energy",
    accentColor: "text-agni",
    dotColor: "bg-agni",
    icon: "/images/icons/3.png",
    gradient: "linear-gradient(90deg, rgba(245,211,168,0.3) 0%, rgba(251,248,240,0.6) 100%)",
    href: "/elements/agni",
  },
  {
    label: "Stress",
    accent: "& recovery",
    accentColor: "text-jala",
    dotColor: "bg-jala",
    icon: "/images/icons/4.png",
    gradient: "linear-gradient(90deg, rgba(199,221,218,0.35) 0%, rgba(251,248,240,0.6) 100%)",
    href: "/elements/jala",
  },
  {
    label: "Better",
    accent: "sleep",
    accentColor: "text-prithvi",
    dotColor: "bg-prithvi",
    icon: "/images/icons/5.png",
    gradient: "linear-gradient(90deg, rgba(220,227,206,0.35) 0%, rgba(251,248,240,0.6) 100%)",
    href: "/elements/prithvi",
  },
];

export function Concerns() {
  return (
    <section className="bg-butter pt-4 pb-24 max-[700px]:pt-2 max-[700px]:pb-16">
      <div className="mx-auto max-w-[1280px] px-20 max-[900px]:px-6 max-[500px]:px-4">
        {/* H2 — no italic, clean Inter */}
        <h2
          className="text-ink font-sans font-semibold tracking-[-0.025em] leading-[1.06] mb-6 max-[700px]:mb-5"
          style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
        >
          Pick your concern.
        </h2>

        {/* Concern rows — hims pattern: full-width, stacked, with element accent */}
        <div className="flex flex-col gap-3">
          {concerns.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex items-center justify-between rounded-[20px] px-7 py-5 max-[500px]:px-5 max-[500px]:py-4 shadow-[0_1px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: c.gradient }}
            >
              <div className="flex items-center gap-4">
                {/* Element circle with icon */}
                <span className="relative grid place-items-center w-10 h-10 max-[500px]:w-8 max-[500px]:h-8 rounded-full flex-shrink-0">
                  <span
                    className={`absolute inset-0 rounded-full ${c.dotColor} opacity-20`}
                  />
                  <Image
                    src={c.icon}
                    alt=""
                    width={80}
                    height={80}
                    className="relative w-[78%] h-[78%] object-contain"
                  />
                </span>
                <span className="text-[18px] max-[500px]:text-[15px] font-medium text-ink tracking-[-0.01em]">
                  {c.label}{" "}
                  <span className={c.accentColor}>{c.accent}</span>
                </span>
              </div>
              <span className="text-walnut/40 text-[18px] group-hover:text-ink/60 group-hover:translate-x-1 transition-all duration-200">
                ›
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
