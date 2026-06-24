import { Link } from "react-router-dom";
import { Shield, Microscope, ClipboardList, SprayCan, Handshake, MapPin, Check, ArrowRight, Calendar, Users, Trophy, Star } from "lucide-react";
import profileImg1 from "@/assets/profile-1.png";
import profileImg2 from "@/assets/profile-2.png";
import profileImg3 from "@/assets/profile-3.png";
import drSandeepProfile from "@/assets/dr-sandeep-preenja-profile.jpeg";
import clinicExteriorImg from "@/assets/clinic-exterior-main.jpeg";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedCounter from "@/components/AnimatedCounter";

const PlaceholderImage = ({ alt }: { alt: string }) => (
  <div className="w-full h-full min-h-[400px] bg-muted/30 border-2 border-dashed border-border rounded-2xl flex items-center justify-center">
    <div className="text-center p-8">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
        <MapPin className="text-primary" size={28} />
      </div>
      <p className="text-muted-foreground text-sm font-medium">{alt}</p>
      <p className="text-muted-foreground/60 text-xs mt-1">Image coming soon</p>
    </div>
  </div>
);

const features = [
  { icon: Shield, title: "28 Years of Proven Expertise", desc: "Dr. Preenja's nearly three decades of clinical experience make him one of the most seasoned dental professionals in South Delhi — with the skill depth to handle everything from routine fillings to full-arch implant rehabilitation." },
  { icon: Microscope, title: "Advanced Implant Technology", desc: "As a specialist in dental implantology, the clinic uses internationally trusted implant systems and precision surgical techniques to deliver natural-looking, long-lasting tooth replacements." },
  { icon: ClipboardList, title: "Transparent Treatment Planning", desc: "Every procedure is explained step by step — with clear timelines, honest cost estimates, and zero hidden fees. Patients never leave confused about their treatment." },
  { icon: SprayCan, title: "European-Grade Sterilisation Standards", desc: "Instrument sterilisation and infection control at our clinic follow strict international protocols — ensuring a hygienically safe environment for every patient, every time." },
  { icon: Handshake, title: "Unhurried, Patient-Centred Consultations", desc: "No rushed appointments. Dr. Preenja gives each patient the time they deserve — listening carefully, answering every question, and ensuring you feel fully informed before any treatment begins." },
  { icon: MapPin, title: "Easily Accessible in Greater Kailash II", desc: "Centrally located in GK II, New Delhi, the clinic is conveniently accessible for patients from Greater Kailash, Lajpat Nagar, Nehru Place, Kalkaji, Hauz Khas, and across South Delhi." },
];

const treatmentSteps = [
  { title: "Comprehensive Initial Consultation", desc: "Dr. Preenja begins with a thorough oral health assessment — reviewing your dental history, identifying concerns, and understanding your goals before forming any opinion on treatment." },
  { title: "Advanced Digital Diagnosis", desc: "Using modern imaging and diagnostic tools, we build a precise picture of your oral health — ensuring every treatment recommendation is backed by clinical evidence, not assumption." },
  { title: "Personalised Treatment Planning", desc: "Your treatment plan is tailored entirely to your needs, comfort level, and timeline. Every option is discussed openly, including alternatives and associated costs." },
  { title: "Precision Procedures, Pain-Minimised", desc: "Whether it is a dental implant placement, root canal, or cosmetic procedure — every treatment is performed with meticulous technique and maximum attention to patient comfort." },
  { title: "Final Restoration & Results", desc: "Restorations are crafted for natural aesthetics and long-term durability — so your smile looks, feels, and functions exactly as it should." },
  { title: "Post-Treatment Follow-Up", desc: "Our commitment does not end when your procedure is complete. Scheduled follow-ups and aftercare guidance ensure your results are protected for the long term." },
];

const serviceAreas = [
  "Greater Kailash I & II (GK I / GK II)",
  "Lajpat Nagar",
  "Nehru Place",
  "Kalkaji",
  "Hauz Khas",
  "Defence Colony",
  "South Extension",
  "Saket",
];

const AboutPage = () => (
  <div className="min-h-screen pt-20">
    {/* SECTION 1 — Hero / Intro */}
    <section className="py-16 md:py-24 bg-card px-4">
      <div className="container mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">KNOW ABOUT US</p>
        <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground leading-tight max-w-4xl">
          Trusted Dental Care in Greater Kailash — 25 Years of Clinical Excellence
        </h1>
        <p className="text-lg text-muted-foreground mt-6 max-w-3xl leading-relaxed">
          At Preenja's Dental & Implant Centre, exceptional care is built on three things: deep clinical expertise, honest communication, and genuine patient trust.
        </p>
        <p className="text-muted-foreground mt-4 max-w-3xl leading-relaxed">
          Established in 2001 and located in the heart of Greater Kailash II, New Delhi, we have spent the last 25 years serving thousands of families across South Delhi — from preventive check-ups and routine dentistry to advanced <strong className="text-foreground">dental implants</strong>, <strong className="text-foreground">smile makeovers</strong>, and complex restorations. Every patient is treated with the same standard: thorough, unhurried, and always centred around their comfort.
        </p>
        <p className="text-foreground font-semibold mt-4 italic">
          No rushed appointments. No unnecessary procedures. Just honest dentistry you can rely on.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold btn-glow hover:opacity-90 transition-opacity mt-8">
          Book a Consultation with Dr. Preenja <ArrowRight size={20} />
        </Link>
      </div>
    </section>

    {/* SECTION 2 — Clinic Story: Image LEFT, Text RIGHT */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <figure className="rounded-2xl overflow-hidden bg-card shadow-md">
            <img
              src={drSandeepProfile}
              alt="Dr. Sandeep Preenja — Lead Dental Surgeon at Preenja's Dental & Implant Centre"
              className="w-full h-full min-h-[400px] object-cover"
            />
            <figcaption className="text-center text-sm font-semibold text-foreground py-3">
              Dr. Sandeep Preenja
            </figcaption>
          </figure>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">Experience The Care</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Preenja's Dental & Implant Centre was founded in 2001 on a conviction that patients in South Delhi deserve reliable, high-quality dental care — delivered with complete transparency and respect.
              </p>
              <p>
                <strong className="text-foreground">Dr. Sandeep Preenja</strong> brings 28 years of hands-on clinical practice to every consultation, having begun his career in 1998. Over nearly three decades, he has built a reputation as one of Greater Kailash's most trusted dental professionals — known for his calm, methodical approach and his commitment to genuinely understanding each patient before recommending any treatment.
              </p>
              <p>
                The clinic is designed to feel modern, calm, and reassuring — supported by strict sterilisation protocols, digital diagnostics, and evidence-based treatment planning that meet the highest standards of clinical safety.
              </p>
              <p>
                At Preenja's, care is never transactional. It is a relationship built over time — where your health and long-term outcomes always come first.
              </p>
            </div>
            <p className="text-foreground font-semibold mt-6 italic border-l-4 border-primary pl-4">
              25 years as a clinic. 28 years of Dr. Preenja's clinical experience. One unwavering standard of care.
            </p>
            <Link to="/about#doctor" className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:underline">
              Meet Dr. Sandeep Preenja <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 3 — Doctor Profile: Text LEFT, Image RIGHT */}
    <section id="doctor" className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">28 YEARS OF CLINICAL MASTERY</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
              Meet Dr. Sandeep Preenja — Cheif Dental Surgeon & Smile Makeover Expert, New Delhi
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dr. Sandeep Preenja is one of South Delhi's most respected and experienced dental professionals, with a clinical career spanning <strong className="text-foreground">28 years</strong> across general dentistry, restorative care, and advanced dental implantology.
              </p>
              <p>
                His approach goes beyond treating teeth. Before recommending any procedure, Dr. Preenja takes time to understand each patient's complete oral health history, lifestyle, and long-term goals. Treatment plans are always explained clearly with full transparency on procedure, process, and pricing so patients feel confident, not confused.
              </p>
              <p>
                Dr. Preenja specialises in <strong className="text-foreground">full-mouth dental implants</strong>, complex tooth replacement, smile reconstruction, and precision restorative dentistry. His depth of experience with implant systems and bone grafting techniques has made him a preferred choice for patients seeking reliable, long-lasting results across New Delhi and South Delhi.
              </p>
              <p>
                Whether you are visiting for a routine consultation or a complex implant procedure, you will experience the same commitment: thorough assessment, honest advice, and clinical care that prioritises your long-term oral health above all else.
              </p>
            </div>
            <p className="text-foreground font-semibold mt-6 italic border-l-4 border-primary pl-4">
              28 years. Thousands of smiles restored. One unwavering standard of care.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:underline">
              Schedule Your Consultation <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={profileImg1} alt="Dr. Sandeep Preenja at a dental conference" className="w-full h-full object-cover rounded-2xl min-h-[400px]" />
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 4 — Stats Bar */}
    <section className="py-14 bg-primary">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
          {[
            { icon: Star, value: 50000, suffix: "+", label: "Rating 5.0 ★" },
            { icon: Calendar, value: 28, suffix: "+", label: "Years of Experience" },
            { icon: Trophy, value: 15, suffix: "+", label: "Awards" },
            { icon: Users, value: 50000, suffix: "+", label: "Smiles Transformed" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <stat.icon size={28} className="opacity-80" />
              <span className="text-3xl md:text-4xl font-bold font-display">
                <AnimatedCounter end={stat.value} />{stat.suffix}
              </span>
              <span className="text-sm opacity-90 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 5 — The Preenja Difference: Image LEFT, Grid RIGHT */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4 text-center">THE PREENJA DIFFERENCE</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground text-center mb-4">
          A Dental Clinic in South Delhi Built Around Your Trust
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Every detail at Preenja's Dental & Implant Centre — from our clinical protocols to our patient communication is designed with one purpose: to give you complete confidence in your care.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden">
            <img src={profileImg2} alt="Dr. Preenja receiving certification award" className="w-full h-full object-cover rounded-2xl min-h-[500px]" loading="lazy" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 6 — Treatment Process: Text LEFT, Image RIGHT */}
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">YOUR FIRST VISIT</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
              Clarity at Every Step of Your Treatment
            </h2>
            <p className="text-muted-foreground mb-8">
              A visit to Preenja's Dental & Implant Centre is designed to be calm, clear, and completely transparent from the very beginning.
            </p>
            <div className="space-y-6">
              {treatmentSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="text-primary" size={16} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-foreground font-semibold mt-8 italic border-l-4 border-primary pl-4">
              At every stage, you are informed, involved, and in control of your care.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold btn-glow hover:opacity-90 transition-opacity mt-8 w-fit">
              Book Your First Appointment <ArrowRight size={18} />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={profileImg3} alt="Dr. Preenja at Indian Dental Association event" className="w-full h-full object-cover rounded-2xl min-h-[400px]" />
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 7 — Location & Accessibility: Image LEFT, Text RIGHT */}
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="rounded-2xl overflow-hidden min-h-[400px]">
            <img
              src={clinicExteriorImg}
              alt="Preenja's Dental & Implant Centre — Clinic exterior in Greater Kailash II, New Delhi"
              className="w-full h-full"
              style={{ width: "100%", height: "100%", minHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
              Serving South Delhi From the Heart of Greater Kailash II
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Preenja's Dental & Implant Centre is centrally located in Greater Kailash II, New Delhi — making it one of the most accessible dental clinics for residents across South Delhi.
            </p>
            <p className="text-foreground font-semibold mb-4">We regularly serve patients from:</p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin size={14} className="text-primary shrink-0" />
                  {area}
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whether you are searching for a <strong className="text-foreground">dental clinic near me</strong> in South Delhi, a specialist for <strong className="text-foreground">dental implants in New Delhi</strong>, or simply a reliable family dentist in Greater Kailash — our doors are open to you.
            </p>
            <p className="text-foreground font-semibold italic border-l-4 border-primary pl-4">
              Patients across South Delhi have trusted us for nearly three decades. Your search for dependable dental care ends here.
            </p>
            <a
              href="https://maps.google.com/?q=E-588,+next+to+Savitri+Cinema+Complex,+Block+E,+Greater+Kailash+II,+New+Delhi+110048"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:underline"
            >
              Get Directions to Our Clinic <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 8 — Closing CTA */}
    <section className="section-padding bg-primary/5">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">Begin Your Journey to Better Oral Health</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          28 years of trusted dental care. Thousands of patients who chose quality over compromise. A clinic that measures its success by the confidence of every smile it has restored.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          If you are looking for a <strong className="text-foreground">dentist in Greater Kailash</strong> or across South Delhi who genuinely prioritises your long-term wellbeing — we are ready to welcome you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold btn-glow hover:opacity-90 transition-opacity">
            Book a Consultation with Dr. Sandeep Preenja <ArrowRight size={20} />
          </Link>
          <Link to="/#services" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/5 transition-colors">
            Explore Our Services <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>

    <WhatsAppButton />
  </div>
);

export default AboutPage;
