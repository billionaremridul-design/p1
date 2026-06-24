import { useState } from "react";
import beforeAfterAsset from "@/assets/dentures/dentures-before-after.png.asset.json";
import patientAsset from "@/assets/dentures/denture-patient.jpeg.asset.json";

const shortText =
  "An elderly patient visited Preenja's Dental & Implant Centre, Greater Kailash II, with severely damaged and decayed teeth across both upper and lower arches, causing difficulty in chewing and significant aesthetic concerns. After a thorough clinical evaluation, Dr. Sandeep Preenja planned a complete full mouth rehabilitation using high-quality ceramic crowns and precision-fitted dental bridges — custom-designed to restore full chewing function and a natural, confident smile.";

const fullText =
  "The treatment was carried out in a structured timeline with digital impressions, careful tooth preparation, and multiple precision fitting sessions to ensure every crown and bridge matched the patient's natural bite and appearance.\n\nThe result: a completely transformed smile with full chewing function restored. The patient — who had been struggling with damaged teeth for years — left the clinic giving a double thumbs up. This case reflects Dr. Preenja's expertise in full mouth crown and bridge rehabilitation, ceramic crowns, and advanced restorative dentistry in South Delhi, Greater Kailash II, New Delhi.";

const CrownBridgeCaseStudy = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h2 className="section-heading mb-8">Real Patient Results</h2>
      <div className="space-y-8">
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
          <h3 className="font-display font-bold text-lg text-foreground mb-6">
            Full Mouth Crowns & Bridges Rehabilitation — Real Patient Case
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden bg-card border border-border">
              <img
                src={beforeAfterAsset.url}
                alt="Complete full mouth crowns and bridges before and after — real patient result at Preenja's Dental"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <figure className="rounded-xl overflow-hidden bg-card border border-border flex flex-col">
              <img
                src={patientAsset.url}
                alt="Happy elderly patient after full mouth crown and bridge rehabilitation at Preenja's Dental, Greater Kailash II"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              <figcaption className="text-sm text-muted-foreground text-center p-3 border-t border-border">
                Patient Satisfied After Full Mouth Crown & Bridge Rehabilitation
              </figcaption>
            </figure>
          </div>

          <div className="mt-5">
            <p className="text-muted-foreground leading-relaxed">
              {shortText}
              {expanded && (
                <span className="mt-2 block text-muted-foreground leading-relaxed whitespace-pre-line">{fullText}</span>
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
        </div>
      </div>
    </div>
  );
};

export default CrownBridgeCaseStudy;
