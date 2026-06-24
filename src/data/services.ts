import { Gem, Sparkles, ShieldCheck, Smile, AlignLeft, Heart, Scissors, Baby, Phone, Crown } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: typeof Gem;
  title: string;
  shortTitle: string;
  tagline: string;
  seoTitle?: string;
  seoDescription?: string;
  heroStats?: { label: string; value: string }[];
  overview: string;
  benefits: { title: string; desc: string }[];
  steps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const services: ServiceData[] = [
  {
    slug: "dental-implants",
    icon: Gem,
    title: "Dental Implants in Greater Kailash II",
    shortTitle: "Dental Implants",
    tagline: "Permanent tooth replacement solutions",
    seoTitle: "Advanced Dental Implant Solutions in Greater Kailash II",
    seoDescription: "With over 15 years of implantology expertise, Dr. Sandeep Preenja and his team has been placing thousands of dental implants using Premium different types of impant fixtures, 3D-guided surgery, and computer-aided planning. The clinic's 98% success rate reflects a commitment to precision placement, biocompatible materials, and comprehensive aftercare. Patients from across South Delhi — including CR Park, Hauz khas, panchsheel park, Nehru place, Jor bagh,Lajpat Nagar, Kalkaji, and Defence Colony — choose this practice for single-tooth implants, All-on-4 full-arch restorations, and immediate-loading implant protocols that restore function and aesthetics in the shortest possible time.",
    heroStats: [
      { label: "Success Rate", value: "98%" },
      { label: "Duration", value: "2-4 months" },
    ],
    overview: `Dental implants represent the gold standard in permanent tooth replacement titanium posts that integrate with the jawbone to support crowns, bridges, or full-arch prosthetics. Unlike removable dentures, implants preserve bone density, maintain facial structure, and function exactly like natural teeth.

At this South Delhi practice, every implant procedure begins with a comprehensive CBCT scan and digital treatment plan. Computer-guided surgery ensures precise angulation and depth, minimizing tissue disruption and accelerating healing. Premium implant systems are used exclusively, providing long-term durability and a natural aesthetic result.

Whether a single missing tooth needs replacement or an entire arch requires restoration through All-on-4 or All-on-6 protocols, treatment plans are customized to individual anatomy, bone density, and lifestyle requirements always with patient comfort as the highest priority.`,
    benefits: [
      { title: "Permanent Solution", desc: "Lasts 20+ years with proper care" },
      { title: "Natural Look & Feel", desc: "Indistinguishable from real teeth" },
      { title: "Prevents Bone Loss", desc: "Preserves jawbone density" },
      { title: "No Damage to Adjacent Teeth", desc: "Unlike traditional bridges" },
      { title: "Improved Chewing", desc: "Restore full bite strength" },
      { title: "Boosts Confidence", desc: "Smile without hesitation" },
      { title: "Easy Maintenance", desc: "Brush and floss normally" },
      { title: "High Success Rate", desc: "98% success with experienced hands" },
    ],
    steps: [
      { title: "Initial Consultation & 3D Imaging", desc: "Comprehensive dental examination, digital X-rays and CBCT scans, treatment planning and cost discussion." },
      { title: "Implant Placement Surgery", desc: "Local anesthesia for comfort, precision implant insertion into jawbone. 1-2 hours procedure with minimal discomfort." },
      { title: "Healing Period (2-3 months)", desc: "Osseointegration — bone fuses with implant. Regular follow-up checkups with temporary prosthetic if needed." },
      { title: "Crown & Bridge Attachment", desc: "Custom-made ceramic crown, color-matched to natural teeth. Final fitting and bite adjustment." },
    ],
    faqs: [
      { q: "Pain levels during implant surgery", a: "With modern anesthesia techniques, the procedure is virtually painless. Most patients report less discomfort than a tooth extraction. Detailed post-operative care instructions and pain management ensure quick recovery." },
      { q: "Expected lifespan of dental implants", a: "With proper oral hygiene and regular dental checkups, implants can last 20-30 years or even a lifetime. The success rate at this clinic is 98%." },
      { q: "Candidacy for dental implants", a: "Most adults with good oral health are candidates. Bone density, gum health, and medical history are evaluated during consultation to ensure suitability." },
      { q: "Dental implant costs in New Delhi", a: "Costs vary based on the number of implants and complexity. Single tooth implants typically range from ₹25,000-₹80,000. Flexible payment plans and detailed cost breakdowns are provided during consultation." },
    ],
    relatedSlugs: ["cosmetic-dentistry", "teeth-whitening", "root-canal-treatment"],
  },
  {
    slug: "dental-bridges-crowns",
    icon: Crown,
    title: "Dental Bridges & Crowns in Greater Kailash II",
    shortTitle: "Dental Bridges & Crowns",
    tagline: "Restore strength, function & your natural smile",
    heroStats: [
      { label: "Crowns Placed", value: "15000+" },
      { label: "Crowns Available", value: "Same-Day" },
      { label: "Options", value: "Ceramic & Zirconia" },
    ],
    overview: `A dental crown is a custom-made cap that fits over a damaged, decayed, or weakened tooth restoring its shape, strength, and appearance. At Preenja's Dental & Implant Centre, we use high-quality ceramic and zirconia crowns that blend seamlessly with your natural teeth.

Dental bridges are used to replace one or more missing teeth by anchoring an artificial tooth between two crowned natural teeth or implants. The result is a fixed, permanent solution that restores chewing function and prevents surrounding teeth from shifting.

Dr. Sandeep Preenja has placed over 15000+ crowns and bridges across patients from Greater Kailash II, GK I, CR Park, Saket, Defence Colony, Lajpat Nager and across New Delhi. Every crown and bridge is fabricated using precision digital impressions for a perfect, comfortable fit with results that look and feel completely natural.`,
    benefits: [
      { title: "Natural Appearance", desc: "Ceramic & zirconia crowns match your exact tooth colour" },
      { title: "Long Lasting", desc: "Crowns and bridges that last 10-15 years with proper care" },
      { title: "Painless Procedure", desc: "Local anaesthesia ensures a comfortable, stress-free experience" },
      { title: "Fixed Solution", desc: "No removal needed, functions exactly like natural teeth" },
    ],
    steps: [
      { title: "Consultation & X-Ray", desc: "Thorough examination and digital X-ray to assess the tooth" },
      { title: "Tooth Preparation", desc: "The tooth is gently shaped to fit the crown precisely" },
      { title: "Digital Impressions", desc: "Accurate impressions taken for a perfect fit" },
      { title: "Crown/Bridge Fabrication", desc: "Custom-made in a dental lab using premium materials" },
      { title: "Fitting & Bonding", desc: "Crown or bridge is permanently bonded for a natural feel" },
    ],
    faqs: [
      { q: "How long do dental crowns and bridges last?", a: "With proper oral hygiene and regular dental checkups, ceramic and zirconia crowns and bridges typically last 10-15 years or longer. Avoiding hard foods and maintaining good gum health extends their lifespan significantly." },
      { q: "Are crowns and bridges painful to get?", a: "The procedure is performed under local anaesthesia, making it completely comfortable. Most patients experience only mild sensitivity for a day or two after the procedure." },
      { q: "What is the difference between a crown and a bridge?", a: "A crown covers and protects a single damaged tooth. A bridge replaces one or more missing teeth by anchoring artificial teeth to crowned adjacent teeth or implants." },
    ],
    relatedSlugs: ["dental-implants", "cosmetic-dentistry", "root-canal-treatment"],
  },
  {
    slug: "teeth-whitening",
    icon: Sparkles,
    title: "Teeth Whitening in Greater Kailash II",
    shortTitle: "Teeth Whitening",
    tagline: "Achieve a brighter, confident smile",
    seoTitle: "Professional Teeth Whitening — Brighter Smiles in One Visit",
    seoDescription: "Professional LED-activated whitening at this South Delhi clinic delivers up to 8 shades brighter teeth in a single 45-minute session. Using dentist-grade, enamel-safe formulations supervised by Dr. Sandeep Preenja, results are dramatically superior to over-the-counter alternatives. Custom take-home maintenance kits extend the brightness for 1-3 years. Patients from across New Delhi trust this practice for safe, predictable, and lasting whitening results.",
    heroStats: [
      { label: "Shades Brighter", value: "Up to 8" },
      { label: "Session Time", value: "45 mins" },
    ],
    overview: `Professional teeth whitening delivers dramatic, lasting brightness that no over-the-counter product can match. Advanced LED-activated whitening systems brighten teeth by up to 8 shades in a single 45-minute session — safely, comfortably, and under expert supervision.

Dentist-grade formulations are carefully selected to maximize whitening power while protecting enamel integrity and minimizing sensitivity. Custom-fitted take-home kits complement in-office treatments, allowing patients to maintain their results between visits for up to three years.

Whether preparing for a special occasion or simply refreshing everyday confidence, professional whitening delivers consistent, predictable results tailored to individual tooth shade and cosmetic goals.`,
    benefits: [
      { title: "Instant Results", desc: "Visibly whiter teeth in just one session" },
      { title: "Safe & Professional", desc: "Supervised by experienced dentists" },
      { title: "Long-Lasting", desc: "Results last 1-3 years with proper care" },
      { title: "Enamel Safe", desc: "Gentle formula protects tooth structure" },
      { title: "Minimal Sensitivity", desc: "Advanced gel minimizes discomfort" },
      { title: "Custom Take-Home Kits", desc: "Maintain results between visits" },
    ],
    steps: [
      { title: "Shade Assessment", desc: "Current tooth shade is evaluated and desired results are discussed." },
      { title: "Teeth Cleaning", desc: "Professional cleaning removes surface stains and plaque for optimal whitening." },
      { title: "Whitening Application", desc: "Professional-grade whitening gel applied and activated with LED light for 3-4 cycles." },
      { title: "Results & Aftercare", desc: "Immediate results visible. Take-home kit and care instructions provided for maintenance." },
    ],
    faqs: [
      { q: "Duration of whitening results", a: "Professional teeth whitening results typically last 1-3 years depending on diet and oral hygiene habits. Periodic touch-ups and avoiding staining foods and beverages are recommended." },
      { q: "Safety of professional whitening", a: "Professional teeth whitening is completely safe when performed by a qualified dentist. Enamel-safe formulations minimize sensitivity while delivering maximum brightness." },
      { q: "Post-treatment sensitivity", a: "Some temporary sensitivity is normal but usually resolves within 24-48 hours. Desensitizing agents are used to minimize any discomfort during and after treatment." },
    ],
    relatedSlugs: ["cosmetic-dentistry", "dental-implants", "gum-treatment"],
  },
  {
    slug: "root-canal-treatment",
    icon: ShieldCheck,
    title: "Root Canal Treatment in Greater Kailash II",
    shortTitle: "Root Canal Treatment",
    tagline: "Pain-free advanced techniques",
    seoTitle: "Painless Root Canal Treatment — Save Your Natural Tooth",
    seoDescription: "Root canal therapy at this South Delhi clinic has been redefined through rotary endodontic instruments, digital apex locators, and magnification-assisted procedures. Dr. Sandeep Preenja's 28+ years of endodontic expertise ensure precise, comfortable treatment — most cases completed in a single visit. The 95% success rate and same-day pain relief make this practice the preferred choice for patients across New Delhi seeking modern, painless root canal treatment.",
    heroStats: [
      { label: "Success Rate", value: "95%" },
      { label: "Visits", value: "1-2" },
    ],
    overview: `Modern root canal treatment bears no resemblance to the dreaded procedures of decades past. Using rotary endodontic instruments, digital apex locators, and advanced anesthesia protocols, infected tooth pulp is removed with precision and comfort — most treatments completed in a single visit.

The treatment saves damaged teeth by removing infected pulp tissue, cleaning and shaping the root canals with meticulous accuracy, then sealing them to prevent future infection. Electronic measuring systems and magnification-assisted techniques deliver consistently superior outcomes compared to traditional methods.

With 28+ years of endodontic expertise, every procedure prioritizes patient comfort, tooth preservation, and long-term structural integrity — returning patients to normal activities the same day.`,
    benefits: [
      { title: "Painless Procedure", desc: "Advanced anesthesia eliminates discomfort" },
      { title: "Save Your Natural Tooth", desc: "Avoid extraction and preserve your smile" },
      { title: "Single Visit Treatment", desc: "Most cases completed in one appointment" },
      { title: "Latest Technology", desc: "Rotary instruments and digital apex locators" },
      { title: "Long-Term Solution", desc: "Properly treated teeth last a lifetime" },
      { title: "Quick Recovery", desc: "Return to normal activities the same day" },
    ],
    steps: [
      { title: "Diagnosis & X-Ray", desc: "Digital X-rays identify the infected tooth and extent of damage." },
      { title: "Anesthesia & Access", desc: "Local anesthesia ensures complete comfort. Small opening made in the tooth crown." },
      { title: "Cleaning & Shaping", desc: "Infected pulp removed, canals cleaned and shaped with rotary instruments." },
      { title: "Filling & Crown", desc: "Canals sealed with biocompatible material. Custom crown placed for protection." },
    ],
    faqs: [
      { q: "Pain levels during root canal treatment", a: "With modern anesthesia and techniques, root canal treatment is no more uncomfortable than getting a filling. Most patients are surprised at how painless the procedure is." },
      { q: "Treatment duration", a: "Most root canals are completed in 1-2 visits, each lasting 45-90 minutes. Complex cases may require an additional visit." },
      { q: "Post-treatment expectations", a: "After treatment, mild sensitivity for a few days is normal. A crown is placed to protect and strengthen the treated tooth for long-term durability." },
    ],
    relatedSlugs: ["dental-implants", "wisdom-tooth-extraction", "emergency-dental-care"],
  },
  {
    slug: "cosmetic-dentistry",
    icon: Smile,
    title: "Cosmetic Dentistry in Greater Kailash II",
    shortTitle: "Cosmetic Dentistry",
    tagline: "Complete smile makeovers",
    seoTitle: "Premium Cosmetic Dentistry — Natural-Looking Smile Transformations",
    seoDescription: "With over 5,000 successful smile transformations, Dr. Sandeep Preenja combines artistic vision with clinical precision to deliver cosmetic results that look completely natural. Porcelain veneers, dental bonding, digital smile design, gum contouring, and tooth reshaping — every treatment is planned around individual facial features and personal aesthetic goals. The practice in South Delhi is a destination for patients seeking premium cosmetic dentistry with lasting results.",
    heroStats: [
      { label: "Smile Makeovers", value: "5000+" },
      { label: "Experience", value: "28+ Years" },
    ],
    overview: `Cosmetic dentistry at its finest combines artistic vision with technical precision to create smile transformations that look entirely natural. Digital smile design technology allows patients to preview their new smile before any treatment begins — ensuring expectations are met with confidence.

Comprehensive cosmetic treatments include porcelain veneers, dental bonding, smile design, gum contouring, and tooth reshaping. Every procedure is planned around individual facial features, skin tone, and personal aesthetic goals to deliver results that enhance both appearance and self-assurance.

With over 5,000 successful smile transformations, expertise in aesthetic dentistry ensures every treatment delivers both functional excellence and lasting cosmetic beauty — using only premium materials and minimally invasive techniques.`,
    benefits: [
      { title: "Digital Smile Design", desc: "Preview your new smile before treatment" },
      { title: "Natural Results", desc: "Matched to facial features and skin tone" },
      { title: "Multiple Options", desc: "Veneers, bonding, contouring, and more" },
      { title: "Minimally Invasive", desc: "Preserve maximum natural tooth structure" },
      { title: "Quick Transformation", desc: "Many procedures completed in 1-2 visits" },
      { title: "Lasting Beauty", desc: "Premium materials for durable results" },
    ],
    steps: [
      { title: "Smile Analysis", desc: "Comprehensive evaluation of teeth, gums, and facial structure with digital imaging." },
      { title: "Digital Design Preview", desc: "Simulation of the new smile using advanced software before any treatment begins." },
      { title: "Treatment Execution", desc: "Precision procedures using the latest materials and techniques for optimal results." },
      { title: "Final Reveal", desc: "Stunning new smile complete. Maintenance guidance provided for lasting results." },
    ],
    faqs: [
      { q: "Available cosmetic treatments", a: "Porcelain veneers, dental bonding, teeth whitening, gum contouring, smile makeovers, and tooth reshaping. The best options are recommended based on specific needs and goals." },
      { q: "Veneer lifespan", a: "High-quality porcelain veneers typically last 10-15 years with proper care. Premium materials and precise bonding techniques ensure maximum durability." },
      { q: "Closing gaps between teeth", a: "Gaps can be closed using veneers, bonding, or clear aligners depending on the size and location. The best approach is recommended during consultation." },
    ],
    relatedSlugs: ["teeth-whitening", "orthodontics-braces", "dental-implants"],
  },
  {
    slug: "orthodontics-braces",
    icon: AlignLeft,
    title: "Orthodontics & Braces in Greater Kailash II",
    shortTitle: "Orthodontics (Braces)",
    tagline: "Invisible alignment solutions",
    seoTitle: "Advanced Orthodontic Solutions — Braces & Invisalign in South Delhi",
    seoDescription: "Traditional metal braces, ceramic braces, and Invisalign clear aligners — a full range of orthodontic solutions for patients of all ages. Digitally mapped treatment plans deliver predictable, efficient results within 6 to 18 months. The South Delhi practice is a preferred destination for discreet, comfortable teeth straightening with expert orthodontic supervision.",
    heroStats: [
      { label: "Treatment Options", value: "3+" },
      { label: "Duration", value: "6-18 months" },
    ],
    overview: `Perfectly aligned teeth enhance both appearance and oral health. A full range of orthodontic solutions — traditional metal braces, ceramic braces, and Invisalign clear aligners — address crowding, spacing, overbites, and underbites for patients of all ages.

Clear aligner therapy uses custom-made, virtually invisible trays to gradually straighten teeth without brackets or wires. Treatment plans are digitally mapped from start to finish, providing a clear preview of projected results before commitment.

Expert orthodontic supervision ensures efficient treatment with comfortable, predictable outcomes — whether addressing minor alignment concerns or complex bite irregularities.`,
    benefits: [
      { title: "Invisible Options", desc: "Clear aligners nearly undetectable" },
      { title: "Digital Treatment Planning", desc: "See results before starting" },
      { title: "Comfortable Treatment", desc: "Modern brackets and smooth aligners" },
      { title: "All Age Groups", desc: "Solutions for children, teens, and adults" },
      { title: "Faster Results", desc: "Advanced techniques reduce treatment time" },
      { title: "Flexible Options", desc: "Choose from braces, ceramic, or clear aligners" },
    ],
    steps: [
      { title: "Orthodontic Consultation", desc: "Complete assessment with digital scans, X-rays, and photos to plan treatment." },
      { title: "Treatment Plan", desc: "Personalized plan reviewed with projected timeline and expected results." },
      { title: "Appliance Fitting", desc: "Braces placed or first set of aligners provided. Instructions for care and maintenance." },
      { title: "Regular Adjustments", desc: "Periodic visits to monitor progress and make adjustments until the perfect smile is achieved." },
    ],
    faqs: [
      { q: "Clear aligners vs traditional braces", a: "For most cases, clear aligners are equally effective. They work best for mild to moderate alignment issues. Complex cases may benefit from traditional braces. The best option is recommended during consultation." },
      { q: "Orthodontic treatment duration", a: "Treatment duration varies from 6-18 months depending on case complexity. Clear aligners may offer faster results for mild cases." },
      { q: "Orthodontics for adults", a: "Many orthodontic patients are adults. Clear aligners are especially popular among working professionals who prefer discreet treatment." },
    ],
    relatedSlugs: ["cosmetic-dentistry", "teeth-whitening", "pediatric-dentistry"],
  },
  {
    slug: "gum-treatment",
    icon: Heart,
    title: "Gum Treatment in Greater Kailash II",
    shortTitle: "Gum Treatment",
    tagline: "Restore healthy gums, prevent disease",
    seoTitle: "Expert Gum Treatment & Periodontal Care in South Delhi",
    seoDescription: "Comprehensive periodontal care addresses all stages of gum disease — from mild gingivitis to advanced periodontitis. Laser gum therapy, deep scaling, root planing, gum grafting, and pocket reduction surgery are performed with the latest technology for minimally invasive treatment and faster healing. Regular professional cleanings and personalized maintenance plans help prevent gum issues before they develop into serious conditions.",
    heroStats: [
      { label: "Treatments", value: "10,000+" },
      { label: "Recovery", value: "1-2 weeks" },
    ],
    overview: `Healthy gums are the foundation of every beautiful smile. Comprehensive periodontal treatments address all stages of gum disease, from mild gingivitis to advanced periodontitis, using the latest diagnostic and therapeutic technologies.

Deep scaling and root planing, laser gum therapy, gum grafting, and pocket reduction surgery — each treatment is selected based on the severity of the condition and individual patient needs. Laser technology enables minimally invasive procedures with faster healing and significantly less discomfort than traditional methods.

Early detection and treatment of gum disease is crucial for maintaining teeth and overall systemic health. Regular professional cleanings help prevent gum issues before they develop, saving patients from more complex and costly treatments in the future.`,
    benefits: [
      { title: "Laser Gum Therapy", desc: "Minimally invasive with faster healing" },
      { title: "Prevents Tooth Loss", desc: "Treating gum disease saves teeth" },
      { title: "Improves Overall Health", desc: "Gum health linked to heart and diabetes" },
      { title: "Fresh Breath", desc: "Eliminate bacteria causing bad breath" },
      { title: "Pain-Free Treatment", desc: "Modern techniques minimize discomfort" },
      { title: "Aesthetic Improvement", desc: "Gum contouring for a balanced smile" },
    ],
    steps: [
      { title: "Gum Evaluation", desc: "Comprehensive assessment of gum health, pocket depths, and bone levels." },
      { title: "Deep Cleaning", desc: "Professional scaling and root planing to remove plaque and tartar below the gumline." },
      { title: "Advanced Treatment", desc: "Laser therapy, grafting, or pocket reduction as needed for severe cases." },
      { title: "Maintenance Plan", desc: "Personalized oral hygiene instructions and scheduled follow-up cleanings." },
    ],
    faqs: [
      { q: "Signs of gum disease", a: "Bleeding gums, redness, swelling, bad breath, and receding gums are key indicators. Early evaluation and intervention prevent progression to more serious stages." },
      { q: "Comfort during gum treatment", a: "Modern gum treatments, especially laser therapy, are minimally invasive and largely pain-free. Local anesthesia ensures complete comfort throughout the procedure." },
      { q: "Reversibility of gum disease", a: "Early-stage gum disease (gingivitis) is fully reversible with professional treatment and proper home care. Advanced periodontitis can be managed and controlled effectively." },
    ],
    relatedSlugs: ["teeth-whitening", "dental-implants", "emergency-dental-care"],
  },
  {
    slug: "wisdom-tooth-extraction",
    icon: Scissors,
    title: "Wisdom Tooth Extraction in Greater Kailash II",
    shortTitle: "Wisdom Tooth Extraction",
    tagline: "Safe and comfortable procedures",
    seoTitle: "Safe Wisdom Tooth Extraction — Expert Oral Surgery in South Delhi",
    seoDescription: "Panoramic X-rays and 3D imaging guide every wisdom tooth extraction for maximum safety and predictability. Whether a simple extraction or complex surgical removal of impacted teeth, decades of oral surgery experience ensure smooth, comfortable outcomes with minimal downtime. Most patients return to normal activities within 2-3 days.",
    heroStats: [
      { label: "Procedure Time", value: "30-60 mins" },
      { label: "Recovery", value: "3-5 days" },
    ],
    overview: `Wisdom tooth extraction is performed with precision, safety, and patient comfort as the top priorities. Panoramic X-rays and 3D imaging assess the exact position of wisdom teeth, enabling the safest and most efficient extraction approach.

Whether a simple extraction or a complex surgical removal of deeply impacted teeth, decades of oral surgery experience ensure smooth, predictable outcomes. Advanced anesthesia techniques eliminate discomfort during the procedure, and comprehensive post-operative guidance supports comfortable healing.

Most patients return to normal activities within 2-3 days, with complete healing typically achieved within one to two weeks.`,
    benefits: [
      { title: "Expert Surgical Care", desc: "Decades of experience in oral surgery" },
      { title: "3D Imaging Guidance", desc: "Precise planning for safe extraction" },
      { title: "Minimal Discomfort", desc: "Advanced anesthesia techniques" },
      { title: "Quick Recovery", desc: "Most patients recover in 3-5 days" },
      { title: "Prevents Complications", desc: "Avoid infection, crowding, and cysts" },
      { title: "Comprehensive Aftercare", desc: "Detailed recovery guidance provided" },
    ],
    steps: [
      { title: "Assessment & Imaging", desc: "Panoramic X-rays and 3D scans evaluate tooth position and plan the approach." },
      { title: "Anesthesia", desc: "Local anesthesia administered for a completely pain-free experience." },
      { title: "Extraction", desc: "Tooth carefully removed using specialized instruments with minimal tissue disruption." },
      { title: "Recovery & Follow-Up", desc: "Post-operative instructions provided. Follow-up visit ensures proper healing." },
    ],
    faqs: [
      { q: "Timing for wisdom tooth removal", a: "Wisdom teeth should be removed if they're impacted, causing pain, crowding other teeth, or showing signs of infection. Evaluation in late teens or early twenties is recommended." },
      { q: "Post-extraction comfort", a: "The procedure itself is painless under local anesthesia. Post-operative discomfort is manageable with prescribed pain medication and typically subsides within 3-5 days." },
      { q: "Dietary guidelines after extraction", a: "Soft foods like yogurt, soup, and mashed potatoes are recommended for the first few days. Hot, spicy, or crunchy foods should be avoided. A detailed dietary guide is provided after the procedure." },
    ],
    relatedSlugs: ["root-canal-treatment", "emergency-dental-care", "dental-implants"],
  },
  {
    slug: "pediatric-dentistry",
    icon: Baby,
    title: "Pediatric Dentistry in Greater Kailash II",
    shortTitle: "Pediatric Dentistry",
    tagline: "Gentle care for growing smiles",
    seoTitle: "Gentle Pediatric Dentistry — Expert Children's Dental Care in South Delhi",
    seoDescription: "A warm, child-friendly environment paired with gentle techniques and specially trained professionals makes dental visits a positive experience for young patients. Fluoride treatments, dental sealants, cavity fillings, space maintainers, and emergency care — comprehensive children's dental services that build healthy habits from the earliest years. Over 5,000 children treated with care and compassion.",
    heroStats: [
      { label: "Children Treated", value: "5000+" },
      { label: "Age Group", value: "1-16 years" },
      { label: "Paediatric Cases Done", value: "10,000+" },
    ],
    overview: `Healthy teeth for life begin with positive dental experiences in childhood. A warm, fun environment puts young patients at ease while building the foundation for lifelong oral health habits.

Comprehensive children's dental care includes fluoride treatments, dental sealants, cavity fillings, space maintainers, and emergency care for dental injuries. Gentle techniques, colorful equipment, and patient explanations make every visit a positive experience — even for the most anxious children.

Both children and parents receive guidance on proper oral hygiene habits that last a lifetime. Regular checkups from an early age help prevent dental problems and ensure healthy development of teeth and jaw.`,
    benefits: [
      { title: "Child-Friendly Environment", desc: "Fun, comfortable atmosphere for kids" },
      { title: "Gentle Techniques", desc: "Specially trained in pediatric care" },
      { title: "Preventive Focus", desc: "Fluoride, sealants, and education" },
      { title: "Early Detection", desc: "Catch problems before they develop" },
      { title: "Habit Building", desc: "Teach lifelong oral hygiene habits" },
      { title: "Emergency Care", desc: "Quick treatment for dental injuries" },
    ],
    steps: [
      { title: "First Visit", desc: "Friendly introduction to the dental environment. Gentle examination and getting to know the child." },
      { title: "Preventive Care", desc: "Professional cleaning, fluoride treatment, and dental sealants to protect growing teeth." },
      { title: "Treatment if Needed", desc: "Gentle fillings, space maintainers, or other treatments using child-appropriate techniques." },
      { title: "Education & Follow-Up", desc: "Fun brushing and flossing instructions. Regular checkups scheduled every 6 months." },
    ],
    faqs: [
      { q: "First dental visit timing", a: "A first dental visit by age 1 or when the first tooth appears is recommended. Early visits establish a dental home and help identify any concerns early." },
      { q: "Managing dental anxiety in children", a: "The team is specially trained in child psychology. Positive reinforcement, gentle techniques, and age-appropriate explanations make every visit comfortable and enjoyable." },
      { q: "Safety of dental X-rays for children", a: "Modern digital X-rays use minimal radiation — far less than older systems. X-rays are only taken when clinically necessary and protective shielding is always used." },
    ],
    relatedSlugs: ["orthodontics-braces", "emergency-dental-care", "gum-treatment"],
  },
  {
    slug: "emergency-dental-care",
    icon: Phone,
    title: "Emergency Dental Care in Greater Kailash II",
    shortTitle: "Emergency Dental Care",
    tagline: "Immediate relief when you need it most",
    seoTitle: "24/7 Emergency Dental Care — Immediate Relief in South Delhi",
    seoDescription: "Same-day emergency appointments for severe toothaches, knocked-out teeth, broken crowns, abscesses, and dental trauma. Call +91-9811297795 anytime for immediate guidance. Walk-ins are welcome, and urgent cases are prioritized for rapid pain relief and definitive treatment — all under one roof at the Greater Kailash II clinic.",
    heroStats: [
      { label: "Response Time", value: "Same Day" },
      { label: "Available", value: "24/7" },
    ],
    overview: `Dental emergencies demand immediate, expert attention — and that is exactly what this practice delivers. Emergency dental services cover severe toothaches, knocked-out teeth, broken crowns, abscesses, and trauma injuries with same-day appointments and 24/7 phone support.

Call +91-9811297795 anytime for immediate guidance and same-day scheduling. Urgent cases are prioritized to relieve pain quickly and prevent further damage. The latest diagnostic and treatment tools enable comprehensive emergency care from initial assessment to definitive resolution.

Whether it's a weekend, holiday, or late evening, emergency support ensures no patient is left in pain. From pain relief to complete treatment, everything is handled under one roof.`,
    benefits: [
      { title: "Same-Day Appointments", desc: "Immediate attention for urgent cases" },
      { title: "24/7 Phone Support", desc: "Call anytime for guidance" },
      { title: "Pain Relief Priority", desc: "Quick relief is the first goal" },
      { title: "Complete Treatment", desc: "From diagnosis to resolution in one visit" },
      { title: "All Emergencies Covered", desc: "Trauma, infections, broken teeth, and more" },
      { title: "Walk-Ins Welcome", desc: "No appointment needed for emergencies" },
    ],
    steps: [
      { title: "Call Immediately", desc: "Call +91-9811297795. The team provides immediate guidance and arranges same-day appointment." },
      { title: "Emergency Assessment", desc: "Rapid diagnosis with digital X-rays to identify the problem and determine treatment." },
      { title: "Pain Relief & Treatment", desc: "Immediate pain management followed by definitive treatment to address the root cause." },
      { title: "Follow-Up Care", desc: "Post-treatment instructions and follow-up appointment to ensure complete recovery." },
    ],
    faqs: [
      { q: "Defining a dental emergency", a: "Severe toothache, knocked-out or broken tooth, bleeding that won't stop, swelling, abscess, or injury to the mouth. When in doubt, call — immediate advice is always available." },
      { q: "Walk-in emergency availability", a: "Walk-ins are welcome for dental emergencies. Calling ahead helps the team prepare and reduces wait time." },
      { q: "Handling a knocked-out tooth", a: "Keep the tooth moist — place it back in the socket if possible, or store it in milk. Reaching the clinic within 30-60 minutes gives the best chance of re-implantation." },
    ],
    relatedSlugs: ["root-canal-treatment", "wisdom-tooth-extraction", "dental-implants"],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export {
  serviceCardImages,
  serviceHeroImages,
  serviceContentImages,
  orthoImages,
  conservativeImages,
  crownsBridgesImages,
  denturesImages,
  preventiveImages,
  invisalignImages,
  caseStudyImages,
  supplementaryServiceSlugs,
  getServiceCardImage,
} from "./serviceImages";
