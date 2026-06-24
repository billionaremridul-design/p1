import InfoPageLayout, { AlternatingBlock } from "@/components/InfoPageLayout";
import SimpleCaseStudyCard from "@/components/SimpleCaseStudyCard";
import { preventiveImages } from "@/data/services";
import preventiveCase from "@/assets/preventive-case.jpeg";

const { preventiveTypes, scalingBeforeAfter, dentalProphylaxisTypes, oralProphylaxisBeforeAfter } = preventiveImages;

const blocks: AlternatingBlock[] = [
  {
    heading: "Prevention Is the Most Powerful Form of Dental Care",
    image: preventiveTypes,
    imageAlt: "5 different types of preventive dentistry — Dental Cleanings, Exams, X-rays, Oral Hygiene Instruction, Periodontal Care",
    paragraphs: [
      "The most expensive dental treatment is the one you needed but could have avoided. Preventive dentistry is a structured approach to maintaining oral health through regular professional care, early detection, and patient education — so small issues are caught before they become costly problems.",
      "At Preenja's Dental & Implant Centre, preventive care is the foundation of everything we do. Our preventive protocol includes professional dental cleanings, comprehensive oral examinations, digital X-rays, personalised oral hygiene instruction, and periodontal (gum) care — all delivered in a single, structured appointment.",
      "Patients who attend regular six-monthly check-ups consistently require fewer fillings, experience less gum disease, and maintain their natural teeth significantly longer than those who visit only when in pain.",
    ],
  },
  {
    heading: "Scaling & Polishing — Professional Teeth Cleaning That Goes Deeper",
    image: scalingBeforeAfter,
    imageAlt: "Scaling and polishing before and after — heavy tartar removed, healthy clean teeth restored",
    paragraphs: [
      "Scaling and polishing — also known as oral prophylaxis — is a professional cleaning procedure that removes hardened tartar, calculus, and bacterial plaque from areas that a regular toothbrush simply cannot reach. Tartar buildup along the gum line is the leading cause of gum disease, bad breath, and progressive bone loss around teeth. Left untreated, it silently destroys the foundation of your smile.",
      "During scaling, ultrasonic and hand instruments are used to remove all deposits from tooth surfaces and below the gum line. Polishing then removes surface stains and smoothens enamel, making it harder for new plaque to adhere.",
      "The result as seen in our real patient cases is dramatically cleaner teeth, healthier gums, and fresher breath after a single session. We recommend professional scaling every six months for optimal gum health.",
    ],
  },
  {
    heading: "What Happens During Your Preventive Care Appointment",
    image: dentalProphylaxisTypes,
    imageAlt: "Types of dental prophylaxis — Scaling, Polishing, Fluoride Treatment, Oral Hygiene Instruction",
    paragraphs: [
      "A comprehensive preventive appointment at our clinic follows a structured protocol designed to leave no aspect of your oral health unchecked. It begins with a full clinical examination of teeth, gums, and soft tissues, followed by digital X-rays where clinically indicated.",
      "Professional scaling removes all calculus and plaque deposits. Polishing restores surface smoothness and shine. Fluoride treatment strengthens enamel against decay. Finally, personalised oral hygiene instruction ensures you leave knowing exactly how to maintain your results at home.",
      "This structured approach means every visit adds measurable value to your long-term oral health — not just a quick clean, but a complete preventive health assessment.",
    ],
  },
  {
    heading: "Oral Prophylaxis — Real Results From Real Patients",
    image: oralProphylaxisBeforeAfter,
    imageAlt: "Oral prophylaxis before and after — visible tartar removal and gum health improvement",
    paragraphs: [
      "The before-and-after results of professional oral prophylaxis speak for themselves. Patients who arrive with visible tartar buildup, inflamed gums, and persistent bad breath leave with visibly cleaner teeth, healthier gum margins, and a fresh, confident smile.",
      "These results are achievable in a single appointment and maintained with regular six-monthly visits. At Preenja's Dental & Implant Centre in Greater Kailash II, every preventive appointment is performed with precision instruments and a patient-first approach that prioritises comfort throughout.",
      "Book your preventive care appointment today and take the most important step toward a lifetime of healthy teeth.",
    ],
  },
];

const PreventiveDentistryPage = () => (
  <InfoPageLayout
    breadcrumb="Preventive Dentistry"
    title="Preventive Dentistry in Greater Kailash II — Protect Your Smile for Life"
    subtitle="Professional cleanings, early detection, and personalised care to keep your teeth healthy for decades"
    blocks={blocks}
    ctaLabel="Book Your Preventive Care Appointment →"
    afterBlocks={
      <div>
        <h2 className="section-heading mb-8">Real Patient Results</h2>
        <SimpleCaseStudyCard
          title="Cavity Detection & Conservative Filling — Real Patient Case"
          imageUrl={preventiveCase}
          imageAlt="Cavity detection, root canal access, and conservative composite filling — 3-panel real patient case"
          shortText="A patient came in for a routine check-up at Preenja's Dental & Implant Centre, Greater Kailash II, where early-stage cavity was detected in a molar using our digital imaging. What appeared as a small cavity had already progressed deeper requiring precise root canal access and conservative restoration."
          fullText="Dr. Preenja performed a minimally invasive root canal followed by a tooth-coloured composite filling preserving the maximum natural tooth structure. The final result is a fully restored, pain-free tooth with no visible difference from the natural tooth. This case highlights the value of regular dental check-ups and early intervention for preserving natural teeth."
        />
      </div>
    }
  />
);

export default PreventiveDentistryPage;
