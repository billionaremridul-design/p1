import { useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { caseStudyImages } from "@/data/services";

const {
  implantBefore,
  implantAfter,
  rootcanalBefore,
  rootcanalAfter,
  cosmeticBefore,
  cosmeticAfter,
  veneersBefore,
  veneersAfter,
  whiteningBefore,
  whiteningAfter,
} = caseStudyImages;

interface CaseStudy {
  label: string;
  beforeImg: string;
  afterImg: string;
  shortText: string;
  fullText: string;
}

const caseStudies: Record<string, CaseStudy[]> = {
  "root-canal-treatment": [{
    label: "Root Canal Treatment with Metal-Free Ceramic Crown — Real Patient Case",
    beforeImg: rootcanalBefore,
    afterImg: rootcanalAfter,
    shortText: "A patient presented with a severely fractured front tooth with exposed root and active gum inflammation — a case requiring immediate root canal intervention. The tooth was saved through precise endodontic treatment followed by a custom metal-free ceramic crown. The final result is completely indistinguishable from the natural surrounding teeth.",
    fullText: "Root canal treatment is often feared unnecessarily. In this case, the procedure was completed with full pain management, preserving the natural tooth root rather than opting for extraction. A metal-free zirconia crown was placed, offering superior aesthetics and biocompatibility. The gum tissue healed completely and the crown blended seamlessly with adjacent teeth in both colour and shape. At Preenja's Dental & Implant Centre, Greater Kailash II, saving your natural tooth is always the first priority — extraction is always the last resort.",
  }],
  "cosmetic-dentistry": [
    {
      label: "Complete Smile Makeover — Real Patient Case",
      beforeImg: cosmeticBefore,
      afterImg: cosmeticAfter,
      shortText: "A patient in his 30s came with chipped, uneven front teeth affecting his confidence in professional and social settings. A complete smile makeover was planned using a combination of cosmetic reshaping and ceramic restorations. The transformation delivered a symmetrical, natural, and permanently confident smile.",
      fullText: "This case required careful analysis of tooth proportion, gum line symmetry, and facial balance before any treatment began. The final restorations were custom-designed to complement the patient's facial features — not just correct the teeth. No temporary veneers were used; the final restorations were placed with precision in a structured appointment sequence. Patients undergoing smile makeovers at Preenja's Dental & Implant Centre, Greater Kailash II, receive a fully personalised aesthetic plan — because no two smiles are the same.",
    },
    {
      label: "Porcelain Veneers for Gap Closure — Real Patient Case",
      beforeImg: veneersBefore,
      afterImg: veneersAfter,
      shortText: "A patient with visible gaps between front teeth and uneven tooth lengths sought a minimally invasive cosmetic solution. Minimal-preparation porcelain veneers were applied to close the gaps, correct proportions, and enhance overall smile aesthetics. The result required no drilling of healthy tooth structure.",
      fullText: "Dental veneers for gap closure are one of the most effective and conservative cosmetic procedures available — particularly when the underlying teeth are healthy. In this case, ultra-thin porcelain veneers were custom-fabricated and bonded to the front surfaces of the teeth with minimal enamel preparation. The patient's bite, lip support, and facial balance were all considered in the design phase. The outcome is a smile that looks naturally even, bright, and proportionate. At Preenja's Dental & Implant Centre in Greater Kailash II, New Delhi, veneer treatments are always planned conservatively — preserving as much of your natural tooth as possible.",
    },
  ],
  "teeth-whitening": [{
    label: "Professional Teeth Whitening — Real Patient Case",
    beforeImg: whiteningBefore,
    afterImg: whiteningAfter,
    shortText: "A patient with years of surface staining from tea, coffee, and natural discolouration underwent a professional in-clinic teeth whitening session. The treatment delivered visibly brighter, more even teeth in a single appointment with no sensitivity or enamel damage. The result is a naturally refreshed, confident smile.",
    fullText: "Professional teeth whitening at our clinic uses clinically tested whitening agents applied under controlled conditions — very different from over-the-counter strips or home kits that often cause uneven results and sensitivity. This patient achieved multiple shades of improvement in one session, with results that remain stable with basic maintenance. The procedure was completely painless and completed within the appointment window. At Preenja's Dental & Implant Centre, Greater Kailash II, New Delhi, teeth whitening is always preceded by an oral health check — because whitening works best on clean, healthy teeth.",
  }],
};

const ExpandableText = ({ shortText, fullText }: { shortText: string; fullText: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-5">
      <p className="text-muted-foreground leading-relaxed">
        {shortText}
        {expanded && (
          <span className="mt-2 block text-muted-foreground leading-relaxed">{fullText}</span>
        )}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-primary font-semibold text-sm hover:underline transition-all inline-flex items-center gap-1"
      >
        {expanded ? "Show Less" : "Read More"}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>
  );
};

const CaseStudySection = ({ slug }: { slug: string }) => {
  const cases = caseStudies[slug];
  if (!cases || cases.length === 0) return null;

  return (
    <div>
      <h2 className="section-heading mb-8">Real Patient Results</h2>
      <div className="space-y-8">
        {cases.map((cs, i) => (
          <div key={i} className="bg-card rounded-2xl border border-border p-6 md:p-8">
            <h3 className="font-display font-bold text-lg text-foreground mb-6">{cs.label}</h3>
            <div className="w-full">
              <BeforeAfterSlider
                beforeImg={cs.beforeImg}
                afterImg={cs.afterImg}
                beforeLabel="Before"
                afterLabel="After"
              />
            </div>
            <ExpandableText shortText={cs.shortText} fullText={cs.fullText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudySection;
