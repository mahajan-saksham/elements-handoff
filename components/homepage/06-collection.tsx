import { ProductPlaceholder } from "@/components/shared/product-placeholder";
import { Cta } from "@/components/shared/cta";

const skus = [
  {
    num: "01",
    name: "Adaptogenic Coffee",
    gradient: "linear-gradient(150deg, #F5D3A8 0%, #F0E4CA 100%)",
    price: "From ₹99",
  },
  {
    num: "02",
    name: "Pure Shilajit Resin",
    gradient: "linear-gradient(150deg, #DCE3CE 0%, #E8ECD8 100%)",
    price: "₹1,499",
  },
  {
    num: "03",
    name: "Brahmi Rasayana",
    gradient: "linear-gradient(150deg, #DCD2EA 0%, #E6DEF0 100%)",
    price: "₹799",
  },
  {
    num: "04",
    name: "Ashwagandha Tablets",
    gradient: "linear-gradient(150deg, #DCE3CE 0%, #D4DCBE 100%)",
    price: "₹599",
  },
  {
    num: "05",
    name: "Triphala Churna",
    gradient: "linear-gradient(150deg, #DCE3CE 0%, #E0E8CC 100%)",
    price: "₹449",
  },
  {
    num: "06",
    name: "Herbal Supplement",
    gradient: "linear-gradient(150deg, #C7DDDA 0%, #D4E6E2 100%)",
    price: "₹699",
  },
];

export function Collection() {
  return (
    <section className="bg-butter py-[140px] max-[700px]:py-16">
      <div className="mx-auto max-w-[1280px] px-20 max-[900px]:px-6 max-[500px]:px-4">
        {/* Intro */}
        <div className="max-w-[720px] mb-16 max-[700px]:mb-10">
          <p className="eyebrow mb-4">the six rituals</p>
          <h2
            className="text-ink font-sans font-semibold tracking-[-0.025em] leading-[1.06]"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Six elements. One <span className="text-sienna">ritual.</span>
          </h2>
        </div>

        {/* SKU grid — gradient cards, image-dominant, shadow-elevated */}
        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {skus.map((s) => (
            <a
              key={s.num}
              href="#"
              className="rounded-[20px] overflow-hidden flex flex-col shadow-[0_2px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300"
              style={{ background: s.gradient }}
            >
              {/* Image area — dominant */}
              <div className="relative h-[220px] max-[560px]:h-[180px] overflow-hidden">
                <ProductPlaceholder
                  aspectRatio="auto"
                  className="absolute inset-0 !rounded-none h-full w-full"
                  label={`${s.name.toLowerCase()}`}
                />
                <span className="absolute top-4 right-4 font-mono text-[9px] tracking-[0.14em] uppercase opacity-40">
                  {s.num}
                </span>
              </div>

              {/* Text area — compact */}
              <div className="p-5 pt-4 flex flex-col gap-2">
                <p className="text-[16px] leading-[1.2] font-medium tracking-[-0.01em]">
                  {s.name}
                </p>
                <div className="flex items-center justify-between pt-3 border-t-[0.5px] border-ink/8">
                  <span className="font-mono text-[11px] tracking-[0.04em] font-medium">
                    {s.price}
                  </span>
                  <Cta as="span" variant="secondary" size="sm">
                    Examine
                  </Cta>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
