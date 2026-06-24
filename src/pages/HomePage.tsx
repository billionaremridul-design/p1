import { Link } from "react-router-dom";
import { Award, Users, Shield, Heart, Check, ArrowRight, Star, ChevronLeft, ChevronRight, MapPin, Phone, Mail, Clock, Gem, Sparkles, ShieldCheck, Smile, AlignLeft, Scissors, Baby, CalendarCheck } from "lucide-react";
import { useState, useEffect } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import WhatsAppButton from "@/components/WhatsAppButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logo from "@/assets/logo-new.png";
import galleryReception from "@/assets/gallery-reception.jpeg";
import galleryTreatment from "@/assets/gallery-treatment.jpeg";
import galleryExterior from "@/assets/gallery-exterior.jpeg";
import galleryEquipmentAsset from "@/assets/gallery-equipment-new.jpeg";
const galleryEquipment = galleryEquipmentAsset;
import galleryWaiting from "@/assets/gallery-waiting.jpeg";
import gallerySterilization from "@/assets/gallery-sterilization.jpeg";

import implants1 from "@/assets/results/implants-before-after-1.png";
import implants2 from "@/assets/results/implants-before-after-2.png";
import whitening1 from "@/assets/results/whitening-before-after-1.png";
import cosmetic1 from "@/assets/results/cosmetic-before-after.png";
import gapClosure from "@/assets/gap-closure-new.jpeg";
import cleaning from "@/assets/results/cleaning-before-after.webp";

import { services, serviceCardImages, supplementaryServiceSlugs } from "@/data/services";

import sliderWhiteningBefore from "@/assets/slider/whitening-before.png";
import sliderWhiteningAfter from "@/assets/slider/whitening-after.png";
import sliderGapBefore from "@/assets/slider/gap-before.png";
import sliderGapAfter from "@/assets/slider/gap-after.png";
import sliderSmileBefore from "@/assets/slider/smile-before.png";
import sliderSmileAfter from "@/assets/slider/smile-after.png";
import googleQr from "@/assets/google-qr.png";
import doctorPhoto from "@/assets/doctor-real.jpeg";

const PhoneIcon = Phone;

/* ── Data ── */
const supplementaryTitles: Record<string, { title: string; tagline: string }> = {
  "conservative-dentistry": { title: "Conservative Dentistry", tagline: "Preserve natural teeth with precision" },
  "dentures": { title: "Dentures", tagline: "Comfortable, natural-looking tooth replacement" },
  "preventive-dentistry": { title: "Preventive Dentistry", tagline: "Professional cleaning & lifelong oral health" },
  "invisalign": { title: "Invisalign", tagline: "Invisible braces — no wires, no brackets" },
};

const serviceCards = [
  ...services.map((s) => ({
    slug: s.slug,
    img: serviceCardImages[s.slug],
    title: s.shortTitle,
    tagline: s.tagline,
  })),
  ...supplementaryServiceSlugs.map((slug) => ({
    slug,
    img: serviceCardImages[slug],
    title: supplementaryTitles[slug].title,
    tagline: supplementaryTitles[slug].tagline,
  })),
];

const galleryImages = [
  { src: galleryReception, label: "Modern Reception Area" },
  { src: galleryTreatment, label: "Advanced Treatment Room" },
  { src: galleryEquipment, label: "Digital Imaging Equipment" },
  { src: galleryExterior, label: "Clinic Exterior" },
  { src: galleryWaiting, label: "Comfortable Consultatiom Area" },
  { src: gallerySterilization, label: "" },
];

const resultCategories = ["All", "Dental Implants", "Teeth Whitening", "Gap Closure", "Smile Makeover"];
const results = [
  { category: "Dental Implants", title: "Full Mouth Implants", duration: "2 months", img: implants1 },
  { category: "Dental Implants", title: "Implant Restoration", duration: "2-3 months", img: implants2 },
  { category: "Teeth Whitening", title: "Professional Whitening", duration: "1 session", img: whitening1 },
  { category: "Gap Closure", title: "Gap Closure Treatment", duration: "1 visit", img: gapClosure },
  { category: "Smile Makeover", title: "Deep Cleaning & Makeover", duration: "1 session", img: cleaning },
  { category: "Smile Makeover", title: "Full Smile Restoration", duration: "1-2 weeks", img: cosmetic1 },
];

const testimonials = [
  { name: "Pulkit Ahuja", review: "I had a great experience with Dr. Sandeep Preenja. He is very professional, knowledgeable, and makes sure his patients feel comfortable during the treatment. He explains the procedure clearly and takes time to answer all questions. The clinic environment is clean and the staff is friendly and helpful. I'm very satisfied with the treatment I received and would highly recommend Dr. Preenja to anyone looking for a reliable and skilled dentist.", date: "2 months ago" },
  { name: "Brito Burruchaga", review: "One of the most experienced dentists in Delhi. I'm glad I got a second opinion from Dr. Sandeep. He was able to provide a less invasive solution to my gum recession. This helped me avoid surgery, save money, and my teeth look great. Highly recommend!", date: "2 months ago" },
  { name: "Rachna Singh", review: "Dr. Sandeep is an excellent dentist—calm, patient, and extremely skilled. He always looks after my dental care so well and makes every visit comfortable. Highly recommended for anyone looking for trustworthy and gentle treatment", date: "1 month ago" },
  { name: "Meera Patel", review: "My daughter was nervous about her first dental visit, but the team's warmth and gentle approach turned it into a positive experience. She now looks forward to her checkups.", date: "2 months ago" },
  { name: "BellaMira", review: "I had a dental emergency on Holi and contacted Dr Preenja who gave me an urgent consultation to repair my tooth. He was very diligent and thorough, and explained each step in detail which made me very comfortable. The follow up and subsequent treatment went well and I am pleased with the result. I am very grateful for the appointment on a festival day and for Dr Preenja's care. Kind regards, Preeti Wadhwani.", date: "3 omonth ago" },
];

const specializations = [
  { slug: "cosmetic-dentistry", icon: Smile, title: "Cosmetic Dentistry" },
  { slug: "dental-implants", icon: Gem, title: "Dental Implants" },
  { slug: "root-canal-treatment", icon: ShieldCheck, title: "Root Canal Treatment" },
  { slug: "teeth-whitening", icon: Sparkles, title: "Teeth Whitening" },
];

const beforeAfterPairs = [
  { before: sliderWhiteningBefore, after: sliderWhiteningAfter, label: "Teeth Whitening" },
  { before: sliderGapBefore, after: sliderGapAfter, label: "Gap Closure" },
  { before: sliderSmileBefore, after: sliderSmileAfter, label: "Smile Makeover" },
];

const heroSlides = [
  {
    headline: <>We Enhance Your Smile With <span className="underline decoration-2 underline-offset-4">EXPERT CARE!</span></>,
    subtext: "Trusted by 50,000+ Patients Across Delhi NCR — Including International Patients",
  },
  {
    headline: <>All Dental Treatments <span className="underline decoration-2 underline-offset-4">UNDER ONE ROOF!</span></>,
    subtext: "Advanced cosmetic dentistry, painless implants, and complete smile makeovers",
  },
];

const faqItems = [
  { q: "The Best Dentist in Greater Kailash II", a: "Dr. Sandeep Preenja, with over 28 years of clinical excellence, leads one of South Delhi's most trusted dental practices. Specializing in cosmetic dentistry, dental implants, and painless root canal treatments, the clinic at E-588, Greater Kailash II has earned a 5.0 Google rating from thousands of satisfied patients." },
  { q: "Areas Served — Delhi NCR and Beyond", a: "Located in the heart of South Delhi, the clinic serves patients from Greater Kailash I & II, CR Park, Panchsheel park, Jor bagh, Hauz Khas, Lajpat Nagar, Kalkaji, Nehru Place, Saket, Defence Colony, and surrounding areas including patients from international destinations like USA, UK, UAE, Canada, Australia, etc. The clinic is easily accessible via the Greater Kailash Metro Station Gate NO.2." },
  { q: "Orthodontic Treatment Availability", a: "Advanced orthodontic solutions including Invisalign clear aligners, ceramic braces, and traditional metal braces are available for patients of all ages. Treatment plans are digitally mapped for predictable, efficient results typically completed within 6 to 18 months." },
  { q: "Consultation Fees and Transparent Pricing", a: "Every treatment comes with a detailed cost breakdown before proceeding. UPI, cash,and all major cards are accepted ensuring premium dental care is accessible to everyone." },
  { q: "Emergency Dental Services in New Delhi", a: "Same-day emergency appointments are available for severe toothaches, knocked-out teeth, broken crowns, abscesses, and dental trauma. Call +91-9811297795 anytime — walk-ins are welcome, and urgent cases are prioritized for immediate pain relief." },
];

/* ── Page ── */
const HomePage = () => {
  const [activeResult, setActiveResult] = useState("All");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [showStickyBtn, setShowStickyBtn] = useState(false);
  const filteredResults = activeResult === "All" ? results : results.filter((r) => r.category === activeResult);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTestimonial((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowStickyBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (i: number) => setCurrentTestimonial(((i % testimonials.length) + testimonials.length) % testimonials.length);
  const goToHeroSlide = (i: number) => setCurrentHeroSlide(((i % heroSlides.length) + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const timer = setInterval(() => setCurrentHeroSlide((p) => (p + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentHeroSlide];

  return (
    <div className="min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-20 lg:pt-24 bg-primary overflow-hidden">
        {/* Decorative diagonal stripes */}
        <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
          <div className="absolute -right-20 top-1/4 w-[600px] h-32 bg-white/10 rotate-[-18deg]" />
          <div className="absolute -right-10 top-1/2 w-[700px] h-24 bg-white/15 rotate-[-18deg]" />
          <div className="absolute -right-32 top-3/4 w-[500px] h-20 bg-white/10 rotate-[-18deg]" />
        </div>

        <div className="relative w-full px-4 sm:px-8 lg:px-16 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-12 items-center min-h-[520px]">
            {/* LEFT — content */}
            <div className="text-primary-foreground">
              <p className="italic text-[13px] text-white/90 mb-3">
                South Delhi's Most Trusted Dental Clinic
              </p>
              <h2 className="text-[22px] font-bold text-white mb-3">
                Dr. Sandeep Preenja
              </h2>
              <h1 className="font-display font-black text-white leading-[1.05] mb-5 text-3xl sm:text-4xl lg:text-5xl xl:text-[48px]">
                {slide.headline}
              </h1>
              <p className="text-white/90 text-[15px] leading-relaxed mb-6 max-w-xl">
                25 Years of Excellence in Greater Kailash II, New Delhi. Trusted by 50,000+ Patients Across Delhi NCR — Including International Patients.
              </p>

              {/* Service pills */}
              <div className="flex flex-wrap gap-2 mb-7">
                {[
                  { icon: AlignLeft, label: "Invisalign" },
                  { icon: Gem, label: "Crowns" },
                  { icon: ShieldCheck, label: "Root Canal" },
                  { icon: Gem, label: "Implants" },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white rounded-full text-[15px] font-semibold"
                    style={{ padding: "10px 18px" }}
                  >
                    <item.icon size={16} />
                    {item.label}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-3.5 rounded-full text-[15px] font-bold shadow-lg hover:bg-white/90 transition-colors"
                >
                  <CalendarCheck size={18} />
                  Book An Appointment
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-7 py-3.5 rounded-full text-[15px] font-bold hover:bg-white/10 transition-colors"
                >
                  About Dr. Preenja
                  <ArrowRight size={18} />
                </Link>
              </div>

              <p className="text-white/90 text-[13px] flex items-center gap-2">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span><strong>5.0 Google Rated</strong> — 120+ Reviews from satisfied patients</span>
              </p>

              {/* Slide dots */}
              <div className="flex gap-2 mt-6">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToHeroSlide(i)}
                    className={`h-2 rounded-full transition-all ${i === currentHeroSlide ? "w-8 bg-white" : "w-2 bg-white/40"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT — doctor photo + floating badges */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="relative rounded-2xl overflow-hidden bg-white/5 aspect-[4/5]">
                  <img
                    src={doctorPhoto}
                    alt="Dr. Sandeep Preenja — Cosmetic and Implant Dentist in Greater Kailash II"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Floating badges — hidden on mobile */}
                <div className="hidden md:flex absolute -top-4 -right-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl items-center gap-2 animate-fade-in-up">
                  <span className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                    <Gem size={18} className="text-primary" />
                  </span>
                  <span className="text-xs font-bold text-foreground">Implants</span>
                </div>

                <div className="hidden md:flex absolute top-1/3 -left-6 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl items-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <span className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                    <Smile size={18} className="text-primary" />
                  </span>
                  <span className="text-xs font-bold text-foreground">Invisalign</span>
                </div>

                <div className="hidden md:flex absolute bottom-16 -right-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl items-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  <span className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                    <Award size={18} className="text-primary" />
                  </span>
                  <span className="text-xs font-bold text-foreground">Crowns</span>
                </div>

                {/* Trusted Since badge */}
                <div className="absolute -bottom-3 right-4 bg-white text-foreground px-4 py-2 rounded-lg shadow-xl text-xs font-bold flex items-center gap-2">
                  <ShieldCheck size={14} className="text-primary" />
                  Trusted Since 2001
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ ANIMATED STATS ═══ */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Star, value: 50000, suffix: "+", label: "Rating 5.0 ★" },
              { icon: Award, value: 28, suffix: "+", label: "Years of Experience" },
              { icon: Shield, value: 15, suffix: "+", label: "Awards" },
              { icon: Smile, value: 50000, suffix: "+", label: "Smiles Transformed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary" size={28} />
                </div>
                <p className="text-4xl md:text-5xl font-display font-bold text-foreground">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>

                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SEO ABOUT PREVIEW — Long-form block ═══ */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <h2 className="section-heading text-center mb-10">The Best Dentist in New Delhi based in Greater kailash II — Precision Care at Its Finest</h2>
          <div className="seo-content space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              For nearly 3 decades, Dr. Sandeep Preenja has led one of the most respected <strong className="text-foreground">dental practice in New Delhi</strong>. The practice, established in 2001, brings together advanced clinical technology, trained professionals, and a patient-first philosophy that has earned the trust of more than 50,000 individuals across Delhi NCR and beyond.
            </p>
            <p>
              From <strong className="text-foreground">painless dental implants</strong> and <strong className="text-foreground">single-visit root canal treatments</strong> to <strong className="text-foreground">cosmetic smile makeovers</strong> and Invisalign clear aligners, every procedure is performed with meticulous precision using state-of-the-art digital imaging, 3D-guided surgery, and advanced biomaterials. The final outcome is consistently superior with minimal discomfort and faster recovery times.
            </p>
            <p>
            Located at E-588, Greater Kailash II, a block away from GK metro station ( next to hotel bloom) — the clinic serves patients from GK II,CR Park, Saket, Panchsheel Park, Chirag Delhi, Hauz Khas, Kalkaji, Nehru Place, Defence Colony, Lajpat Nagar, and wider <strong className="text-foreground">New Delhi</strong> region. Whether it's a routine check-up, emergency care, or a complete smile transformation, every visit is designed around comfort, clarity, and clinical excellence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Link to="/about" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold btn-glow hover:opacity-90 transition-opacity text-center">
              Explore Our Story
            </Link>
            <Link to="/services/dental-implants" className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-center">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SPECIALIZATIONS ═══ */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-80 h-[26rem] md:w-96 md:h-[32rem] rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl bg-white">
                <img src={doctorPhoto} alt="Dr. Sandeep Preenja — Cosmetic and Implant Dentist in GK2" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
            </div>
            <div className="lg:col-span-3">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">SPECIALIZATIONS OF</p>
              <h2 className="section-heading mb-4">Dr. Sandeep Preenja</h2>
              <p className="font-bold text-foreground mb-2">
              Dr. Sandeep Preenja is One of the Best Dentists in New Delhi
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A qualified and highly experienced cosmetic and implant specialist with 28+ years of clinical mastery, Dr. Preenja is recognized across New Delhi for delivering natural-looking results using the latest in digital dentistry, painless procedures and minimally invasive techniques. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specializations.map((spec) => (
                  <Link
                    key={spec.slug}
                    to={`/services/${spec.slug}`}
                    className="group flex items-center gap-4 p-5 bg-background rounded-xl border border-border hover:border-primary transition-all card-lift"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <spec.icon className="text-primary" size={24} />
                    </div>
                    <span className="font-display font-bold text-foreground flex-1">{spec.title}</span>
                    <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES GRID — Rectangular cards with overlay ═══ */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="section-heading text-center">Comprehensive Dental Services</h2>
          <p className="section-subheading text-center mb-12">Advanced treatments tailored to every smile</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((svc) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className="group relative rounded-2xl overflow-hidden card-lift border border-border"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={svc.img}
                    alt={`${svc.title} — Best dental clinic in South Delhi`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-bold text-xl text-white mb-1">{svc.title}</h3>
                  <p className="text-white/70 text-sm mb-3">{svc.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REVIEW PLATFORMS ═══ */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-4">Highly Rated Dental Clinic in New Delhi based in Greater Kailash </h2>
          <p className="section-subheading text-center mb-12">Verified ratings across leading healthcare platforms</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { platform: "Google", rating: "5.0", reviews: "120+", color: "text-primary" },
              { platform: "JustDial", rating: "4.9", reviews: "125+", color: "text-primary" },
              { platform: "Practo", rating: "5.0", reviews: "85+", color: "text-primary" },
            ].map((p) => (
              <div key={p.platform} className="review-platform-badge flex flex-col items-center bg-background rounded-2xl p-8 border border-border min-w-[200px] card-lift">
                <span className="font-display font-bold text-2xl text-foreground mb-2">{p.platform}</span>
                <div className="flex gap-0.5 mb-2">
                  {Array(5).fill(0).map((_, j) => <Star key={j} size={18} className="fill-accent text-accent" />)}
                </div>
                <span className="text-3xl font-display font-bold text-primary">{p.rating}</span>
                <span className="text-sm text-muted-foreground mt-1">{p.reviews} Reviews</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LONG-FORM SEO CONTENT ═══ */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <h2 className="section-heading text-center mb-10">Comprehensive Care at the Leading Dental Clinic in GK2</h2>
          <div className="seo-content grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { num: "01", title: "Specialised Orthodontics", text: "From traditional metal braces to Invisalign clear aligners, our orthodontic solutions address crowding, spacing, overbites, and underbites for patients of all ages. Digitally mapped treatment plans deliver predictable results within 6–18 months." },
              { num: "02", title: "Painless Root Canal Treatments", text: "Advanced rotary endodontic instruments and digital apex locators make root canal therapy virtually painless. Most treatments are completed in a single visit, saving the natural tooth and eliminating infection with precision." },
              { num: "03", title: "Dental Implants & Tooth Replacement", text: "Premium titanium implants placed with 3D-guided surgery ensure a 98% success rate. Single-tooth implants, All-on-4, and All-on-6 full-mouth restorations — all performed under one roof by an experienced implantologist." },
              { num: "04", title: "Cosmetic Dentistry & Smile Makeovers", text: "Porcelain veneers, dental bonding, gum contouring, and digital smile design — our cosmetic treatments are planned around your facial features for natural-looking results that enhance your confidence and personality." },
            ].map((item) => (
              <div key={item.num} className="p-6 bg-card rounded-2xl border border-border">
                <span className="text-4xl font-display font-bold text-primary/20">{item.num}</span>
                <h3 className="font-display font-bold text-xl text-foreground mt-2 mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRANSPARENT PRICING ═══ */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">Transparent Pricing — No Hidden Costs</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every treatment begins with a detailed cost breakdown and written estimate. Flexible EMI options through select banks, UPI, and all major credit and debit cards are accepted. Premium dental care should be accessible — and at this clinic, it is.
          </p>
        </div>
      </section>

      {/* ═══ BEFORE/AFTER SMILE TRANSFORMATIONS ═══ */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <h2 className="section-heading text-center">Real Smile Transformations</h2>
          <p className="section-subheading text-center mb-12">Drag the slider to compare before and after results</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {beforeAfterPairs.map((pair, i) => (
              <div key={i}>
                <BeforeAfterSlider beforeImg={pair.before} afterImg={pair.after} />
                <p className="text-center text-sm text-muted-foreground mt-3 font-medium">{pair.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLINIC GALLERY ═══ */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="section-heading text-center">Experience Our World-Class Facility</h2>
          <p className="section-subheading text-center mb-12">State-of-the-art technology meets patient comfort</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img) => (
              <div key={img.label} className="gallery-item relative aspect-[4/3] rounded-xl">
                <img src={img.src} alt={`${img.label} — Dental clinic in South Delhi`} className="w-full h-full object-cover object-center rounded-xl" loading="lazy" />
                <div className="gallery-overlay rounded-xl">
                  <span className="text-white font-display font-semibold text-lg">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BEFORE & AFTER RESULTS GALLERY ═══ */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <h2 className="section-heading text-center">Proven Results — Real Transformations</h2>
          <p className="section-subheading text-center mb-8">Documented outcomes from actual patients</p>
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 justify-center">
            {resultCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveResult(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeResult === cat ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-muted border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResults.map((r, i) => (
              <div key={`${r.title}-${i}`} className="group card-lift bg-background rounded-2xl overflow-hidden border border-border hover:border-primary transition-colors">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={r.img} alt={`${r.title} — before and after dental treatment`} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="p-4">
                  <h4 className="font-display font-bold text-foreground">{r.title}</h4>
                  {r.duration && <p className="text-sm text-muted-foreground mt-1">Duration: {r.duration}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="inline-flex bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold btn-glow hover:opacity-90 transition-opacity">
              Book Your Free Consultation Today
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="section-heading text-center">Real Patient Experiences</h2>
          <p className="section-subheading text-center mb-8">Thousands of families across South Delhi trust this clinic with their smiles</p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { platform: "Google", rating: "5.0", reviews: "120+" },
              { platform: "Practo", rating: "5.0", reviews: "85+" },
              { platform: "JustDial", rating: "5.0", reviews: "60+" },
            ].map((p) => (
              <div key={p.platform} className="flex items-center gap-3 bg-card rounded-full px-6 py-3 border border-border">
                <span className="font-display font-bold text-foreground">{p.platform}</span>
                <div className="flex gap-0.5">
                  {Array(5).fill(0).map((_, j) => <Star key={j} size={14} className="fill-accent text-accent" />)}
                </div>
                <span className="text-sm text-muted-foreground">{p.rating} • {p.reviews} Reviews</span>
              </div>
            ))}
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-4">
                    <div className="bg-card rounded-2xl p-8 md:p-10 text-center shadow-sm">
                      <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-primary font-display font-bold text-xl">{t.name[0]}</span>
                      </div>
                      <h4 className="font-display font-bold text-lg text-foreground">{t.name}</h4>
                      <div className="flex justify-center gap-1 my-3">
                        {Array(5).fill(0).map((_, j) => <Star key={j} size={18} className="fill-accent text-accent" />)}
                      </div>
                      <p className="text-muted-foreground italic leading-relaxed">"{t.review}"</p>
                      <p className="text-sm text-muted-foreground mt-4">{t.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => goTo(currentTestimonial - 1)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 p-2 rounded-full bg-card shadow-lg text-foreground hover:text-primary transition-colors hidden md:block" aria-label="Previous testimonial">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => goTo(currentTestimonial + 1)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 p-2 rounded-full bg-card shadow-lg text-foreground hover:text-primary transition-colors hidden md:block" aria-label="Next testimonial">
              <ChevronRight size={24} />
            </button>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentTestimonial ? "bg-primary w-8" : "bg-muted-foreground/30"}`} aria-label={`Go to testimonial ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOOKING CTA ═══ */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="section-heading">Your Perfect Smile Starts Today</h2>
          <p className="section-subheading mb-8">Book a consultation with Dr. Sandeep Preenja Today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold btn-glow hover:opacity-90 transition-opacity">
              Book Online Now
            </Link>
            <a href="tel:+919811297795" className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all">
              Call +91-9811297795
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="section-heading text-center">Common Queries about Dental Care Answered</h2>
          <p className="section-subheading text-center mb-10">Essential information about treatments, pricing, and clinic access</p>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary transition-colors"
              >
                <AccordionTrigger className="text-foreground font-display font-semibold text-left hover:text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══ LOCATION & QUALITY ═══ */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-5xl">
          <h2 className="section-heading text-center mb-6">South Delhi's Premier Dental Destination</h2>
          <div className="seo-content text-center max-w-3xl mx-auto mb-10">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Situated at E-588, Greater Kailash II, a block away from GK metro station (next to hotel bloom) — the clinic is easily accessible from CR Park, Saket, Chirag Delhi Kalkaji, Nehru Place, Defence Colony, Lajpat Nagar, and wider New Delhi region. With over 25 years of clinical practice and 1,00,000+ patients served, the clinic upholds uncompromising standards of sterilization, hygiene, and patient safety
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT & MAP ═══ */}
      <section id="contact-section" className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://maps.google.com/maps?q=Dr+Sandeep+Preenja%27s+Dental+%26+Implant+Centre,+E-588,+Block+E,+Greater+Kailash+II,+New+Delhi,+Delhi+110048&output=embed"
                className="w-full h-72 lg:h-full min-h-[350px]"
                style={{ border: 0 }}
                loading="lazy"
                title="Dental clinic location in Greater Kailash II New Delhi"
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-foreground">Visit the Clinic</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: MapPin, title: "Address", lines: ["E-588, Greater Kailash II", "New Delhi, Delhi 110048"] },
                  { icon: PhoneIcon, title: "Phone", lines: ["011-48028735", "+91-9811297795", "+91-7678324026"] },
                  { icon: Mail, title: "Email", lines: ["info@preenjadental.com"] },
                  { icon: Clock, title: "Hours", lines: ["Mon–Sat: 10 AM – 8 PM", "Sun: Closed", "Emergency: 24/7"] },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-4 bg-card rounded-xl border border-border">
                    <item.icon className="text-primary shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                      {item.lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://maps.google.com/?q=E-588,+next+to+Savitri+Cinema+Complex,+Block+E,+Greater+Kailash+II,+New+Delhi+110048"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GOOGLE QR CODE ═══ */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto flex justify-center">
          <div className="text-center">
            <img src={googleQr} alt="Check us out on Google — Preenja's Dental" className="w-64 h-auto mx-auto rounded-2xl" loading="lazy" />
            <p className="text-muted-foreground text-sm mt-4">Scan to find us on Google</p>
          </div>
        </div>
      </section>

      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 hidden md:block ${
          showStickyBtn ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold text-lg btn-glow hover:opacity-90 transition-opacity shadow-xl"
        >
          Book Appointment
        </button>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default HomePage;