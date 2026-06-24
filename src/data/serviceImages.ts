/**
 * Central service image registry — all assets live under src/assets/services/
 */

// Card / hero images (main services)
import dentalImplantsCard from "@/assets/services/dental-implants.jpg";
import dentalImplantsHero from "@/assets/services/dental-implants-new.png";
import teethWhiteningCard from "@/assets/services/teeth-whitening.avif";
import rootCanalCard from "@/assets/services/root-canal.jpg";
import cosmeticDentistryCard from "@/assets/services/cosmetic-dentistry.jpg";
import orthodonticsCard from "@/assets/services/orthodontics.jpg";
import orthodonticsHero from "@/assets/services/orthodontics-hero.png";
import gumTreatmentCard from "@/assets/services/gum-treatment.jpg";
import wisdomToothCard from "@/assets/services/wisdom-tooth.jpeg";
import pediatricDentistryCard from "@/assets/services/pediatric-dentistry.jpg";
import emergencyCareCard from "@/assets/services/emergency-care.jpg";

// Supplementary service pages (homepage cards)
import conservativeCard from "@/assets/services/conservative-dentistry.jpeg";
import denturesCard from "@/assets/services/dentures-1.jpeg";
import preventiveCard from "@/assets/services/preventive-dentistry.webp";
import invisalignCard from "@/assets/services/invisilign-aligners.jpg";

// Orthodontics detail sections
import bracesTypes from "@/assets/services/braces-types.png";
import bracesAnatomy from "@/assets/services/braces-anatomy.png";
import orthoCases from "@/assets/services/ortho-cases.png";
import clearAligners from "@/assets/services/clear-aligners.png";

// Conservative dentistry detail
import emaxBridge from "@/assets/services/emax-bridge.png";
import amalgamComposite from "@/assets/services/amalgam-composite.png";

// Dental bridges & crowns page
import dentalBridgeCeramic from "@/assets/services/dental-bridge-ceramic.png";
import crownsBeforeAfterCollage from "@/assets/services/crowns-before-after-collage.png";

// Service page content images
import gumHealthy from "@/assets/services/gum-healthy-vs-inflamed.jpg";
import gumScaling from "@/assets/services/gum-scaling-procedure.jpg";
import wisdomXray from "@/assets/services/wisdom-xray.jpg";
import wisdomProcedure from "@/assets/services/wisdom-extraction-procedure.jpg";
import pediatricSmile from "@/assets/services/pediatric-child-smiling.jpg";
import pediatricExam from "@/assets/services/pediatric-exam.jpg";
import emergencyConsult from "@/assets/services/emergency-consultation.jpg";
import emergencyTreat from "@/assets/services/emergency-treatment.jpg";

// Dentures & preventive page blocks
import denturesInfographic from "@/assets/services/dentures-infographic.jpeg";
import typesOfProsthesis from "@/assets/services/types-of-prosthesis.jpeg";
import partialDentureTypes from "@/assets/services/partial-denture-types.jpeg";
import preventiveTypes from "@/assets/services/preventive-types.jpeg";
import scalingBeforeAfter from "@/assets/services/scaling-before-after.jpeg";
import dentalProphylaxisTypes from "@/assets/services/dental-prophylaxis-types.png";
import oralProphylaxisBeforeAfter from "@/assets/services/oral-prophylaxis-before-after.png";

// Invisalign page blocks
import invisalignResults from "@/assets/services/invisalign-results.jpeg";
import invisalignSmileviewQr from "@/assets/services/invisalign-smileview-qr.jpeg";

// Case study before/after (services/cases/)
import implantBefore from "@/assets/services/cases/implant-before.png";
import implantAfter from "@/assets/services/cases/implant-after.png";
import rootcanalBefore from "@/assets/services/cases/rootcanal-before.png";
import rootcanalAfter from "@/assets/services/cases/rootcanal-after.png";
import cosmeticBefore from "@/assets/services/cases/cosmetic-before.png";
import cosmeticAfter from "@/assets/services/cases/cosmetic-after.png";
import veneersBefore from "@/assets/services/cases/veneers-before.png";
import veneersAfter from "@/assets/services/cases/veneers-after.png";
import whiteningBefore from "@/assets/services/cases/whitening-before.png";
import whiteningAfter from "@/assets/services/cases/whitening-after.png";

/** Homepage service grid — one image per slug */
import dentalBridgesCrownsCard from "@/assets/services/crowns-before-after-collage.png";


export const serviceCardImages: Record<string, string> = {
  "dental-implants": dentalImplantsCard,
  "dental-bridges-crowns": dentalBridgesCrownsCard,
  "teeth-whitening": teethWhiteningCard,
  "root-canal-treatment": rootCanalCard,
  "cosmetic-dentistry": cosmeticDentistryCard,
  "orthodontics-braces": orthodonticsCard,
  "gum-treatment": gumTreatmentCard,
  "wisdom-tooth-extraction": wisdomToothCard,
  "pediatric-dentistry": pediatricDentistryCard,
  "emergency-dental-care": emergencyCareCard,
  "conservative-dentistry": conservativeCard,
  "dentures": denturesCard,
  "preventive-dentistry": preventiveCard,
  "invisalign": invisalignCard,
};

/** Service detail page hero images */
export const serviceHeroImages: Record<string, string> = {
  "dental-implants": dentalImplantsHero,
  "teeth-whitening": teethWhiteningCard,
  "root-canal-treatment": rootCanalCard,
  "cosmetic-dentistry": cosmeticDentistryCard,
  "orthodontics-braces": orthodonticsHero,
  "gum-treatment": gumTreatmentCard,
  "wisdom-tooth-extraction": wisdomToothCard,
  "pediatric-dentistry": pediatricDentistryCard,
  "emergency-dental-care": emergencyCareCard,
};

export const serviceContentImages: Record<string, { img: string; alt: string }[]> = {
  "gum-treatment": [
    { img: gumHealthy, alt: "Healthy vs inflamed gum tissue — clinical comparison" },
    { img: gumScaling, alt: "Professional deep scaling procedure for gum disease treatment" },
  ],
  "wisdom-tooth-extraction": [
    { img: wisdomXray, alt: "X-ray showing impacted wisdom tooth position" },
    { img: wisdomProcedure, alt: "Wisdom tooth extraction procedure in clinical setting" },
  ],
  "pediatric-dentistry": [
    { img: pediatricSmile, alt: "Happy child smiling in pediatric dental chair" },
    { img: pediatricExam, alt: "Gentle dentist examining child's teeth" },
  ],
  "emergency-dental-care": [
    { img: emergencyConsult, alt: "Emergency dental consultation — patient and dentist" },
    { img: emergencyTreat, alt: "Emergency dental treatment being performed" },
  ],
};

export const orthoImages = {
  bracesTypes,
  bracesAnatomy,
  orthoCases,
  clearAligners,
};

export const conservativeImages = {
  emaxBridge,
  amalgamComposite,
};

export const crownsBridgesImages = {
  dentalBridgeCeramic,
  crownsBeforeAfterCollage,
};

export const denturesImages = {
  denturesInfographic,
  typesOfProsthesis,
  partialDentureTypes,
};

export const preventiveImages = {
  preventiveTypes,
  scalingBeforeAfter,
  dentalProphylaxisTypes,
  oralProphylaxisBeforeAfter,
};

export const invisalignImages = {
  invisalignResults,
  invisalignSmileviewQr,
};

export const caseStudyImages = {
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
};

/** Supplementary services shown on homepage but not in services[] */
export const supplementaryServiceSlugs = [
  "conservative-dentistry",
  "dentures",
  "preventive-dentistry",
  "invisalign",
] as const;

export const getServiceCardImage = (slug: string): string | undefined => serviceCardImages[slug];
