import { Link } from "react-router-dom";
import { ChevronRight, Phone, MapPin, Mail, Check, Loader } from "lucide-react";
import { useForm } from "@formspree/react";
import WhatsAppButton from "@/components/WhatsAppButton";
import CrownBridgeCaseStudy from "@/components/CrownBridgeCaseStudy";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { crownsBridgesImages, caseStudyImages } from "@/data/services";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getServiceBySlug } from "@/data/services";
import { useState } from "react";

const { dentalBridgeCeramic, crownsBeforeAfterCollage } = crownsBridgesImages;
const { implantBefore, implantAfter } = caseStudyImages;

const ImplantRehabCard = () => {
  const [expanded, setExpanded] = useState(false);
  const shortText = "A patient came to us with severely damaged teeth, failing metal restorations, and significant bone loss across both arches. Full-mouth implant rehabilitation was planned and executed over a structured treatment timeline. The result: a completely restored, natural-looking smile with full chewing function.";
  const fullText = "This case involved careful pre-surgical planning, including bone assessment and customised implant positioning for both upper and lower arches. Ceramic crowns were placed over the implants to ensure a natural appearance and long-term durability. The patient had avoided smiling for years before treatment. Post-restoration, function, aesthetics, and confidence were fully restored. At Preenja's Dental & Implant Centre in Greater Kailash II, full-mouth dental implant rehabilitation is performed with precision, patience, and a commitment to results that last a lifetime.";
  return (
    <div className="bg-card rounded-2xl border border-border p-6 md:p-8 mt-8">
      <h3 className="font-display font-bold text-lg text-foreground mb-6">Full Mouth Implant Rehabilitation — Real Patient Case</h3>
      <BeforeAfterSlider beforeImg={implantBefore} afterImg={implantAfter} beforeLabel="Before" afterLabel="After" />
      <div className="mt-5">
        <p className="text-muted-foreground leading-relaxed">
          {shortText}
          {expanded && <span className="mt-2 block text-muted-foreground leading-relaxed">{fullText}</span>}
        </p>
        <button onClick={() => setExpanded(!expanded)} className="mt-3 text-primary font-semibold text-sm hover:underline transition-all inline-flex items-center gap-1">
          {expanded ? "Show Less" : "Read More"}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const service = getServiceBySlug("dental-bridges-crowns")!;

const DentalBridgesCrownsPage = () => {
  const [state, handleSubmit] = useForm("xpqbaeae");

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden bg-gradient-to-br from-primary/20 via-card to-primary/10">
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span>Services</span>
            <ChevronRight size={14} />
            <span className="text-foreground">Dental Bridges & Crowns</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-3">
            Dental Bridges & Crowns in Greater Kailash II
          </h1>
          <p className="text-xl text-muted-foreground mb-5">
            Restore your smile with precision-crafted crowns and bridges
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            {["15000+ Crowns Placed", "Same-Day Crowns Available", "Ceramic & Zirconia Options"].map((badge) => (
              <div key={badge} className="bg-primary/10 rounded-xl px-5 py-2.5 border border-primary/20">
                <p className="text-sm font-bold text-primary">{badge}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-lg font-bold btn-glow hover:opacity-90 transition-opacity self-start"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* Main + Sidebar */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
            {/* Main — 70% */}
            <div className="lg:col-span-7 space-y-16">
              {/* Overview */}
              <div>
                <h2 className="section-heading mb-6">Restore Your Smile With Natural-Looking Crowns & Bridges</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  A dental crown is a custom-made cap that fits over a damaged, decayed, or weakened tooth restoring its shape, strength, and appearance. At Preenja's Dental & Implant Centre, we use high-quality ceramic and zirconia crowns that blend seamlessly with your natural teeth.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
                  <div className="flex flex-col justify-center">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Dental bridges are used to replace one or more missing teeth by anchoring an artificial tooth between two crowned natural teeth or implants. The result is a fixed, permanent solution that restores chewing function and prevents surrounding teeth from shifting.
                    </p>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-border">
                    <img
                      src={dentalBridgeCeramic}
                      alt="Precision-crafted four-unit ceramic dental bridge — high-quality zirconia restorative work"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center", minHeight: "280px" }}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
                  <div className="rounded-2xl overflow-hidden border border-border order-2 md:order-1">
                    <img
                      src={crownsBeforeAfterCollage}
                      alt="Full mouth crown and bridge rehabilitation — before, prosthetics, and after results"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center", minHeight: "280px" }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center order-1 md:order-2">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Dr. Sandeep Preenja has placed over 15000+ crowns and bridges across patients from Greater Kailash II, GK I, CR Park, Saket, Defence Colony, Lajpat Nager and across New Delhi. Every crown and bridge is fabricated using precision digital impressions for a perfect, comfortable fit with results that look and feel completely natural.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="section-heading mb-8">Key Benefits of Dental Bridges & Crowns</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((b) => (
                    <div key={b.title} className="flex items-start gap-3 p-5 bg-card rounded-xl border border-border">
                      <Check className="text-primary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-display font-bold text-foreground">{b.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div>
                <h2 className="section-heading mb-10">The Treatment Process — Step by Step</h2>
                <div className="space-y-6">
                  {service.steps.map((step, i) => (
                    <div key={step.title} className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-display font-bold text-lg">
                        {i + 1}
                      </div>
                      <div className="flex-1 pb-6">
                        <h3 className="font-display font-bold text-lg text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real Patient Results */}
              <div>
                <CrownBridgeCaseStudy />
                <ImplantRehabCard />
              </div>

              {/* FAQs */}
              <div>
                <h2 className="section-heading mb-8">Common Concerns About Dental Bridges & Crowns</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {service.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary transition-colors">
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
            </div>

            {/* Sidebar — 30% */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="bg-card rounded-2xl border border-border p-6 sticky top-28">
                <h3 className="font-display font-bold text-xl text-foreground mb-5">Get in Touch</h3>
                {state.succeeded ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Check className="text-primary" size={28} />
                    </div>
                    <p className="font-display font-bold text-foreground">Thank You!</p>
                    <p className="text-sm text-muted-foreground mt-1">We'll contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input name="name" type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                    <input name="phone" type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                    <input name="email" type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                    <textarea name="message" placeholder="Your Message" rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none" />
                    <input type="hidden" name="_subject" value="Inquiry for Dental Bridges & Crowns" />
                    {state.errors && <p className="text-destructive text-sm">An error occurred. Please try again.</p>}
                    <button type="submit" disabled={state.submitting} className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold btn-glow hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      {state.submitting ? <><Loader className="animate-spin" size={18} /> Sending...</> : "Submit"}
                    </button>
                  </form>
                )}
                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary shrink-0 mt-0.5" size={16} />
                    <p className="text-sm text-muted-foreground">E-588, Greater Kailash II, New Delhi 110048</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary shrink-0" size={16} />
                    <a href="tel:+919811297795" className="text-sm text-muted-foreground hover:text-primary transition-colors">+91-9811297795</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary shrink-0" size={16} />
                    <a href="mailto:info@preenjadental.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@preenjadental.com</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="section-heading mb-4">Your Perfect Smile Starts Today</h2>
          <p className="section-subheading mb-8">Book a consultation with Dr. Sandeep Preenja Today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold btn-glow hover:opacity-90 transition-opacity">Book Now</Link>
            <a href="tel:+919811297795" className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2">
              <Phone size={20} /> Call +91-9811297795
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default DentalBridgesCrownsPage;
