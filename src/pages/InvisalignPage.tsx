import InfoPageLayout, { AlternatingBlock } from "@/components/InfoPageLayout";
import { invisalignImages } from "@/data/services";

const { invisalignResults, invisalignSmileviewQr } = invisalignImages;

const blocks: AlternatingBlock[] = [
  {
    heading: "Invisalign — Clinically Proven Results Without Traditional Braces",
    image: invisalignResults,
    imageAlt: "Invisalign actual results real patient before and after smile transformations",
    paragraphs: [
      "Invisalign uses a series of custom-made, removable clear aligners that gradually shift your teeth into their ideal position with no metal brackets, no wires, and no dietary restrictions. Each aligner is worn for approximately two weeks before progressing to the next in the series, gently moving teeth according to a precise digital treatment plan mapped out before your treatment even begins.",
      "Invisalign is effective for a wide range of orthodontic cases including crowding, spacing, overbite, underbite, crossbite, and open bite. The aligners are virtually invisible when worn most people around you will never know you are straightening your teeth.",
      "Preenja's Dental & Implant Centre is an authorised Invisalign provider in New Delhi, with Dr. Sandeep Preenja's 28 years of clinical experience ensuring your treatment is planned and monitored with the precision it deserves.",
    ],
  },
  {
    heading: "See Your New Smile Before Treatment Begins",
    image: invisalignSmileviewQr,
    imageAlt: "Invisalign SmileView QR card with Preenja's Dental branding — see your smile transformation in seconds",
    paragraphs: [
      "Invisalign's SmileView technology allows you to visualise what your smile could look like after treatment before you commit to a single aligner. Simply scan the QR code on this card, open your camera, and see a simulation of your potential smile transformation in seconds.",
      "This is not a commitment it is a preview. It gives you a realistic sense of the outcome and helps you make a confident, informed decision about whether Invisalign is right for you.",
      "At our clinic, every Invisalign consultation begins with a comprehensive digital smile assessment, a review of your tooth positions and bite, and a fully transparent treatment plan — including duration, number of aligners, and complete pricing with zero hidden costs.",
    ],
  },
];

const comparison = [
  "Virtually invisible vs visibly metal",
  "Removable for eating and brushing vs fixed 24/7",
  "Smooth plastic vs brackets and wires that can irritate",
  "Fewer clinic visits required vs monthly adjustments",
  "Predictable digital treatment planning vs manual adjustments",
  "Same clinical effectiveness for most cases",
];

const InvisalignPage = () => (
  <InfoPageLayout
    breadcrumb="Invisalign"
    title="Invisalign Clear Aligners in New Delhi — Straighten Your Teeth Invisibly"
    subtitle="The world's most trusted clear aligner system — no brackets, no wires, no disruption to your life"
    blocks={blocks}
    ctaLabel="Book Your Invisalign Consultation →"
    afterBlocks={
      <div>
        <h2 className="section-heading mb-5">Invisalign vs Traditional Braces — Key Differences</h2>
        <ul className="space-y-3">
          {comparison.map((item) => (
            <li key={item} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    }
  />
);

export default InvisalignPage;
