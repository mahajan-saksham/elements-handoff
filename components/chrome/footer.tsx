import { ElementalBar } from "./elemental-bar";

export function Footer() {
  return (
    <footer className="bg-cocoa text-bone">
      <ElementalBar />

      <div className="mx-auto max-w-[1280px] px-20 max-[900px]:px-6 max-[500px]:px-4">
        {/* 4-column grid */}
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pt-[72px] pb-12 max-[800px]:grid-cols-2 max-[800px]:gap-x-6 max-[800px]:gap-y-10 max-[480px]:grid-cols-1">
          {/* Column 1 — Brand */}
          <div>
            <span className="font-serif italic text-[56px] leading-none text-bone block mb-[18px]">
              elements
            </span>
            <p className="text-[13px] leading-[1.65] text-bone/60 max-w-[280px]">
              Clinical Ayurveda. Named extracts. Published standardisation.
              Made in Bengaluru, by Vaidyam.
            </p>
          </div>

          {/* Column 2 — Products */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.18em] uppercase text-saffron font-medium mb-[18px]">
              Products
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Adaptogenic Coffee</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Pure Shilajit Resin</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Brahmi Rasayana</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Ashwagandha Tablets</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Triphala Churna</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Herbal Supplement</a></li>
            </ul>
          </div>

          {/* Column 3 — Elements */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.18em] uppercase text-saffron font-medium mb-[18px]">
              Elements
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Akasha · ether</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Vayu · air</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Agni · fire</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Jala · water</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Prithvi · earth</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors font-serif italic">Take the Pancha quiz →</a></li>
            </ul>
          </div>

          {/* Column 4 — Brand & Letter */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.18em] uppercase text-saffron font-medium mb-[18px]">
              Brand
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">The Elements Letter</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Manifesto</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Dr. Anjali Iyer, vaidya</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Science library</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Sourcing &amp; lab reports</a></li>
              <li><a href="#" className="text-[13px] text-bone/85 hover:text-saffron hover:opacity-100 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Base row */}
        <div className="border-t-[0.5px] border-bone/15 py-6 pb-9 flex justify-between items-center gap-6 flex-wrap font-mono text-[10px] tracking-[0.08em] text-bone/50 uppercase">
          <div>© 2026 vaidyam · made in bengaluru · FSSAI lic. xxxxxxxxxxx</div>
          <div className="flex gap-[18px] items-center">
            <span className="px-3 py-1.5 border-[0.5px] border-bone/20 rounded-pill text-[9px]">Blinkit</span>
            <span className="px-3 py-1.5 border-[0.5px] border-bone/20 rounded-pill text-[9px]">Zepto</span>
            <span className="px-3 py-1.5 border-[0.5px] border-bone/20 rounded-pill text-[9px]">Instamart</span>
            <span className="px-3 py-1.5 border-[0.5px] border-bone/20 rounded-pill text-[9px]">BB Now</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
