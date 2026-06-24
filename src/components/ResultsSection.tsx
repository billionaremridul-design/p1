import { useState } from "react";

import implants1Asset from "@/assets/results/full-mouth-implants-new.png.asset.json";
const implants1 = implants1Asset.url;
import implants2 from "@/assets/results/implant-restoration-real.jpeg";
import implants3 from "@/assets/results/implants-before-after-3.png";
import cosmetic1 from "@/assets/results/cosmetic-before-after.png";
import cosmetic2 from "@/assets/results/cosmetic-before-after-2.png";
import whitening1 from "@/assets/results/whitening-before-after-1.png";
import whitening2 from "@/assets/results/whitening-before-after-2.png";
import gapClosureAsset from "@/assets/results/gap-closure-new.png.asset.json";
const gapClosure = gapClosureAsset.url;
import cleaning from "@/assets/results/cleaning-before-after.webp";
import implantModel from "@/assets/results/implant-model.png";

const categories = [
  "All Treatments", "Dental Implants", "Teeth Whitening", "Gap Closure", "Cleaning & Cosmetic",
];

const results = [
  { category: "Dental Implants", title: "Full Mouth Implants", duration: "3 months", img: implants1 },
  { category: "Dental Implants", title: "Implant Stages", duration: "4 months", img: implants2 },
  { category: "Dental Implants", title: "Front Teeth Implants", duration: "2 months", img: implants3 },
  { category: "Dental Implants", title: "Implant Technology", duration: "", img: implantModel },
  { category: "Teeth Whitening", title: "Smile Makeover", duration: "1 session", img: whitening1 },
  { category: "Teeth Whitening", title: "Laser Whitening", duration: "1 session", img: whitening2 },
  { category: "Gap Closure", title: "Gap Closure Treatment", duration: "2 visits", img: gapClosure },
  { category: "Cleaning & Cosmetic", title: "Deep Cleaning", duration: "1 session", img: cleaning },
  { category: "Cleaning & Cosmetic", title: "Full Smile Restoration", duration: "3 months", img: cosmetic1 },
  { category: "Cleaning & Cosmetic", title: "Cosmetic Veneers", duration: "2 visits", img: cosmetic2 },
];

const ResultsSection = () => {
  const [active, setActive] = useState("All Treatments");
  const filtered = active === "All Treatments" ? results : results.filter((r) => r.category === active);

  return (
    <section id="results" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">See the Difference</h2>
        <p className="section-subheading text-center mb-8">Real transformations, Real confidence</p>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((r, i) => (
            <div key={`${r.title}-${i}`} className="group card-lift bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-colors">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={r.img}
                  alt={`Before and after: ${r.title} treatment at Preenja's Dental, GK2`}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-display font-bold text-foreground">{r.title}</h4>
                {r.duration && (
                  <p className="text-sm text-muted-foreground mt-1">Duration: {r.duration}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
