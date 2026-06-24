import InfoPageLayout, { AlternatingBlock } from "@/components/InfoPageLayout";
import { denturesImages } from "@/data/services";

const { denturesInfographic, typesOfProsthesis, partialDentureTypes } = denturesImages;

const blocks: AlternatingBlock[] = [
  {
    heading: "Complete & Partial Dentures — What You Need to Know",
    image: denturesInfographic,
    imageAlt: "What you should know about dentures — types, materials, cleaning, benefits",
    paragraphs: [
      "Dentures are removable dental appliances designed to replace missing teeth and restore the natural appearance of your smile. Whether you have lost a few teeth or require full arch replacement, modern dentures are crafted to fit comfortably, look natural, and restore full chewing function.",
      "At Preenja's Dental & Implant Centre, every denture is custom-fabricated to match your facial structure, gum colour, and bite — so you can speak, eat, and smile with complete confidence.",
      "Dentures are made from high-grade acrylic (PMMA) that closely mimics the texture and natural colour of real gum tissue, ensuring a lifelike result that feels as good as it looks.",
    ],
  },
  {
    heading: "Types of Dental Prosthesis — Finding the Right Solution",
    image: typesOfProsthesis,
    imageAlt: "Types of dental prosthesis — Crown, Post Retained Crown, Fixed Prosthesis, Removable Prosthesis, Implant, Implant Retained Crown",
    paragraphs: [
      "Not every patient requires the same solution. The right prosthesis depends on how many teeth are missing, the condition of remaining teeth, bone density, and your personal preference for fixed versus removable options.",
      "Options range from a single crown to a full removable prosthesis or implant-retained restoration. Full dentures replace an entire arch of missing teeth, while partial dentures fill gaps between existing natural teeth. Flexible dentures offer a metal-free, lightweight alternative to traditional cast partial dentures — ideal for patients who prioritise comfort and aesthetics.",
      "Dr. Sandeep Preenja assesses each case individually to recommend the most appropriate, long-lasting solution for your specific oral health needs.",
    ],
  },
  {
    heading: "Partial Dentures — Which Type Is Right for You?",
    image: partialDentureTypes,
    imageAlt: "Which type of partial denture is right for you — Cast Metal, Acrylic Flippers, Flexible Denture",
    paragraphs: [
      "Partial dentures come in several forms, each suited to different clinical situations. Cast metal partial dentures are the most durable and stable option for patients missing multiple teeth with healthy remaining teeth to anchor the framework.",
      "Acrylic flippers are a temporary, economical solution often used while waiting for permanent restorations or healing after extractions. Flexible dentures — made from nylon-based materials — offer superior comfort and aesthetics with no visible metal clasps, making them a popular choice for front-tooth replacement.",
      "During your consultation at Preenja's Dental & Implant Centre, Greater Kailash II, Dr. Preenja will evaluate your oral condition and lifestyle needs to recommend the partial denture type that delivers the best long-term outcome for you.",
    ],
  },
];

const DenturesPage = () => (
  <InfoPageLayout
    breadcrumb="Dentures"
    title="Dentures in New Delhi — Restore Your Smile & Confidence"
    subtitle="Comfortable, natural-looking tooth replacement solutions tailored to your needs"
    blocks={blocks}
    ctaLabel="Book Your Denture Consultation →"
  />
);

export default DenturesPage;
