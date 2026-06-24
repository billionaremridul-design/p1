import { Link, useParams, Navigate } from "react-router-dom";
import { useForm } from "@formspree/react";
import { ChevronRight, Check, ArrowRight, Phone, MapPin, Mail, Loader, Sparkles } from "lucide-react";
import {
  getServiceBySlug,
  services,
  serviceHeroImages,
  serviceContentImages,
  orthoImages,
} from "@/data/services";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import WhatsAppButton from "@/components/WhatsAppButton";
import CaseStudySection from "@/components/CaseStudySection";
import SimpleCaseStudyCard from "@/components/SimpleCaseStudyCard";
import pediatricBraces from "@/assets/pediatric/pediatric-braces.png.asset.json";
import pediatricInvisalign from "@/assets/pediatric/pediatric-invisalign.png.asset.json";
import implantCase2 from "@/assets/cases/implant-case-2.png.asset.json";
import implantCase3 from "@/assets/cases/implant-case-3.png.asset.json";
import gumCase from "@/assets/cases/gum-case.png.asset.json";
import invisalignCaseImg from "@/assets/cases/invisalign-case-result.png.asset.json";
import metalBracesCaseImg from "@/assets/cases/metal-braces-case-result.png.asset.json";

const orthoCaseCards = [
  { label: "Invisalign Clear Aligner Case", img: invisalignCaseImg.url, alt: "Invisalign clear aligner before and after — real patient result at Preenja's Dental & Implant Centre" },
  { label: "Metal Braces Correction Case", img: metalBracesCaseImg.url, alt: "Metal braces correction case — before, during treatment and final result" },
];

const { bracesTypes, bracesAnatomy, orthoCases, clearAligners } = orthoImages;

const PediatricOrthoBanner = () => (
  <section className="container mx-auto px-4 mt-10">
    <div className="bg-primary/5 border-2 border-primary/40 rounded-2xl p-6 md:p-8 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
              <Sparkles className="text-primary" size={22} />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Braces & Invisalign for Children
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Helping kids achieve straighter smiles with comfortable, child-friendly orthodontic solutions — traditional braces and clear Invisalign aligners, both available for growing teeth.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden border border-border bg-card">
            <img src={pediatricBraces.url} alt="Child smiling with metal braces" className="w-full h-48 md:h-56 object-cover" loading="lazy" />
            <p className="text-center text-sm font-semibold text-foreground py-2">Braces</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-border bg-card">
            <img src={pediatricInvisalign.url} alt="Child holding clear Invisalign aligner" className="w-full h-48 md:h-56 object-cover" loading="lazy" />
            <p className="text-center text-sm font-semibold text-foreground py-2">Invisalign</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const imageMap: Record<string, string> = serviceHeroImages;

const OrthoExtraSections = () => (
  <>
    {/* Service Statement + Types Image */}
    <div className="space-y-8">
      <p className="text-lg text-muted-foreground leading-relaxed font-medium">
        We provide all types of orthodontic solutions — <strong className="text-foreground">Metal Braces</strong>, <strong className="text-foreground">Ceramic Braces</strong>, <strong className="text-foreground">Lingual Braces</strong>, <strong className="text-foreground">Self-Ligating Braces</strong>, and <strong className="text-foreground">Invisalign Clear Aligners</strong>.
      </p>
      <div className="bg-card rounded-2xl border border-border p-4 shadow-sm">
        <img src={bracesTypes} alt="Types of braces — Metal, Ceramic, Lingual, Self-Ligating, Clear Aligners" className="w-full h-auto object-contain rounded-xl" />
        <p className="text-sm text-muted-foreground text-center mt-4 italic">From traditional metal braces to virtually invisible aligners — all options available at our South Delhi clinic</p>
      </div>
    </div>

    {/* Orthodontic Solutions We Offer */}
    <div>
      <h2 className="section-heading mb-4">Orthodontic Solutions We Offer</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">Every patient has different needs, aesthetics, and budget. We offer the full spectrum of orthodontic options so you can choose what works best for your lifestyle.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: "Metal Braces", desc: "The most reliable and cost-effective orthodontic solution — ideal for complex cases requiring precise tooth movement." },
          { title: "Ceramic Braces", desc: "Tooth-coloured brackets that blend with your natural teeth — effective with a more discreet appearance." },
          { title: "Lingual Braces", desc: "Placed behind the teeth, completely hidden from view — the ultimate invisible fixed braces option." },
          { title: "Self-Ligating Braces", desc: "Advanced bracket systems that reduce friction and treatment time — fewer adjustment visits needed." },
          { title: "Invisalign Clear Aligners", desc: "Custom-made, removable clear trays — virtually invisible, comfortable, and perfect for mild to moderate cases." },
        ].map((b) => (
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

    {/* Braces Anatomy */}
    <div>
      <h2 className="section-heading mb-4">Understanding Your Braces</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">Knowing your orthodontic appliance helps you care for it better. Here is a clear breakdown of every component of your braces.</p>
      <div className="bg-card rounded-2xl border border-border p-4 shadow-sm">
        <img src={bracesAnatomy} alt="Braces anatomy diagram — Archwire, Bracket, Elastic, Hook, Coil, Separator" className="w-full h-auto object-contain rounded-xl" />
        <p className="text-sm text-muted-foreground text-center mt-4 italic">A detailed view of orthodontic braces components — explained clearly for every patient</p>
      </div>
    </div>

    {/* Ortho Case Studies */}
    <div>
      <h2 className="section-heading mb-4">Real Patient Results — Orthodontic Cases</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">See the real transformations achieved for our patients through braces and Invisalign treatment at Preenja's Dental & Implant Centre, New Delhi.</p>
      <div className="bg-card rounded-2xl border border-border p-4 shadow-sm mb-8">
        <img src={orthoCases} alt="Orthodontic cases — Crowding, Spacing, Overjet, Overbite, Midline Misalignment, Open Bite" className="w-full h-auto object-contain rounded-xl" />
        <p className="text-sm text-muted-foreground text-center mt-4 italic">Common bite and alignment problems we correct daily — Crowding, Spacing, Overjet, Overbite, Midline Misalignment, and Open Bite.</p>
      </div>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Every orthodontic case is unique. Whether it's <strong className="text-foreground">crowding</strong> causing overlapping teeth, <strong className="text-foreground">spacing</strong> creating gaps, <strong className="text-foreground">overjet</strong> or <strong className="text-foreground">overbite</strong> affecting your bite function, <strong className="text-foreground">midline misalignment</strong> throwing off facial symmetry, or an <strong className="text-foreground">open bite</strong> preventing proper chewing — our orthodontic solutions address each condition with precision-planned treatment tailored to your anatomy and goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orthoCaseCards.map((c) => (
          <div key={c.label} className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="w-full bg-muted overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
              <img
                src={c.img}
                alt={c.alt}
                className="w-full h-full"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <p className="font-display font-bold text-foreground text-lg">{c.label}</p>
              <p className="text-sm text-muted-foreground mt-1">Real patient result — Preenja's Dental & Implant Centre, New Delhi</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Clear Aligners Section */}
    <div>
      <h2 className="section-heading mb-8">Clear Aligners — The Modern Alternative</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="bg-card rounded-2xl border border-border p-4 shadow-sm">
          <img src={clearAligners} alt="Clear aligners — removable, invisible orthodontic treatment" className="w-full h-auto object-contain rounded-xl" />
        </div>
        <div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Clear aligners represent a revolution in orthodontic treatment — <strong className="text-foreground">removable, comfortable, no brackets, no wires</strong>. Custom-fabricated using 3D digital impressions, each set of aligners gradually shifts your teeth into their ideal position.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Unlike traditional braces, aligners can be removed for eating, brushing, and special occasions. Treatment progress is digitally mapped from day one, giving you a clear preview of your final result before treatment even begins.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Ideal for adults and working professionals who need an orthodontic solution that fits their lifestyle without compromising on results.
          </p>
          <p className="text-sm text-muted-foreground mt-6 italic">Clear Aligners — removable, comfortable, no brackets, no wires. A modern alternative to traditional braces available at Preenja's Dental & Implant Centre, South Delhi.</p>
        </div>
      </div>
    </div>
  </>
);

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");
  const [state, handleSubmit] = useForm("xpqbaeae");

  if (!service) return <Navigate to="/" replace />;

  const isOrtho = service.slug === "orthodontics-braces";

  const relatedServices = service.relatedSlugs
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className={`relative overflow-hidden ${isOrtho ? "h-[500px]" : "h-[400px]"}`}>
        <img src={imageMap[service.slug]} alt={`${service.shortTitle} — leading dental clinic in South Delhi`} className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span>Services</span>
            <ChevronRight size={14} />
            <span className="text-white">{service.shortTitle}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-white mb-3">{service.title}</h1>
          <p className="text-xl text-white/90 mb-5">{service.tagline}</p>
          {service.heroStats && (
            <div className="flex flex-wrap gap-4 mb-6">
              {service.heroStats.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-2.5 border border-white/20">
                  <p className="text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
          <Link to="/contact" className="inline-flex bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-lg font-bold btn-glow hover:opacity-90 transition-opacity self-start">
            Book Free Consultation
          </Link>
        </div>
      </section>

      {service.slug === "pediatric-dentistry" && <PediatricOrthoBanner />}

      {/* Main + Sidebar */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
            {/* Main — 70% */}
            <div className="lg:col-span-7 space-y-16">
              {/* Overview with alternating images */}
              <div>
                <h2 className="section-heading mb-6">{service.seoTitle || `Advanced ${service.shortTitle} Solutions in Greater Kailash II`}</h2>
                {(() => {
                  const paragraphs = service.overview.split("\n\n");
                  const contentImages = serviceContentImages[service.slug];
                  if (!contentImages) {
                    return paragraphs.map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4">{paragraph}</p>
                    ));
                  }
                  const blocks: React.ReactNode[] = [];
                  const parasPerBlock = Math.max(1, Math.ceil(paragraphs.length / contentImages.length));
                  contentImages.forEach((ci, idx) => {
                    const blockParas = paragraphs.slice(idx * parasPerBlock, (idx + 1) * parasPerBlock);
                    const imageLeft = idx % 2 === 1;
                    blocks.push(
                      <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10 ${imageLeft ? "" : ""}`}>
                        {imageLeft && (
                          <div className="rounded-2xl overflow-hidden border border-border">
                            <img src={ci.img} alt={ci.alt} className="w-full h-full object-cover" style={{ objectPosition: "center", minHeight: "280px" }} loading="lazy" />
                          </div>
                        )}
                        <div className="flex flex-col justify-center">
                          {blockParas.map((p, pi) => (
                            <p key={pi} className="text-muted-foreground text-lg leading-relaxed mb-4">{p}</p>
                          ))}
                        </div>
                        {!imageLeft && (
                          <div className="rounded-2xl overflow-hidden border border-border">
                            <img src={ci.img} alt={ci.alt} className="w-full h-full object-cover" style={{ objectPosition: "center", minHeight: "280px" }} loading="lazy" />
                          </div>
                        )}
                      </div>
                    );
                  });
                  const remaining = paragraphs.slice(contentImages.length * parasPerBlock);
                  if (remaining.length > 0) {
                    blocks.push(...remaining.map((p, i) => (
                      <p key={`rem-${i}`} className="text-muted-foreground text-lg leading-relaxed mb-4">{p}</p>
                    )));
                  }
                  return blocks;
                })()}
              </div>

              {/* Benefits */}
              <div>
                <h2 className="section-heading mb-8">Key Benefits of {service.shortTitle}</h2>
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

              {/* Long-form SEO block */}
              {service.seoDescription && (
                <div className="seo-content">
                  <h2 className="section-heading mb-6">Trusted {service.shortTitle} in {service.slug === "dental-implants" ? "New Delhi" : "South Delhi"}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{service.seoDescription}</p>
                </div>
              )}

              {/* Orthodontics extra sections */}
              {isOrtho && <OrthoExtraSections />}

              {/* Real Patient Results */}
              {service.slug === "dental-implants" ? (
                <div>
                  <h2 className="section-heading mb-8">Real Patient Results</h2>
                  <div className="space-y-8">
                    <SimpleCaseStudyCard
                      title="Full Mouth Implant Rehabilitation — Case 1"
                      imageUrl={implantCase2.url}
                      imageAlt="Full mouth implant rehabilitation before and after Preenja's Dental"
                      shortText="A patient presented with complete tooth loss across both arches with existing failing implant abutments. Dr. Sandeep Preenja performed a comprehensive full mouth implant rehabilitation — placing ceramic crowns over all implants for both upper and lower arches."
                      fullText="The result is a natural-looking, fully functional smile restored with precision implant dentistry at Preenja's Dental & Implant Centre, Greater Kailash II."
                    />
                    <SimpleCaseStudyCard
                      title="Implant Supported Complete Dentures — Case 2"
                      imageUrl={implantCase3.url}
                      imageAlt="Implant supported full arch restoration before and after Preenja's Dental"
                      shortText="This patient came with severely damaged teeth and multiple missing teeth across both arches. After thorough bone assessment and treatment planning, Dr. Preenja placed multiple implants and completed the restoration with precision-fitted complete dentures."
                      fullText="The transformation from failing teeth to a perfect, confident smile was achieved through structured implant surgery and prosthetic work a testament to advanced implant dentistry in South Delhi, New Delhi."
                    />
                  </div>
                </div>
              ) : service.slug === "gum-treatment" ? (
                <div>
                  <h2 className="section-heading mb-8">Real Patient Results</h2>
                  <SimpleCaseStudyCard
                    title="Gum Disease Treatment — Real Patient Case"
                    imageUrl={gumCase.url}
                    imageAlt="Gum disease treatment before and after inflamed gums restored to healthy state"
                    shortText="A patient visited Preenja's Dental & Implant Centre with severe gum disease — visibly inflamed gums, heavy tartar buildup, and significant gum recession causing exposed tooth roots. Dr. Sandeep Preenja carried out a comprehensive periodontal treatment plan including deep scaling, root planing, and gum therapy."
                    fullText="Post-treatment, the gums showed remarkable improvement in health, color, and attachment. This case demonstrates the importance of early gum disease intervention and expert periodontal care at our clinic in Greater Kailash II, New Delhi."
                  />
                </div>
              ) : (
                <CaseStudySection slug={service.slug} />
              )}

              {/* FAQs */}
              <div>
                <h2 className="section-heading mb-8">Common Concerns About {service.shortTitle}</h2>
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
                    <input type="hidden" name="_subject" value={`Inquiry for ${service.title}`} />
                    {state.errors && <p className="text-destructive text-sm">An error occurred. Please try again.</p>}
                    <button type="submit" disabled={state.submitting} className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold btn-glow hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                       {state.submitting ? <><Loader className="animate-spin" size={18}/> Sending...</> : "Submit"}
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
                    <a href="mailto:preenjasdental@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">preenjasdental@gmail.com</a>
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

      {/* Related */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-10">Explore Related Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rs) => rs && (
              <Link key={rs.slug} to={`/services/${rs.slug}`} className="group bg-card rounded-2xl p-6 border border-border hover:border-primary card-lift text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors">
                  <img src={imageMap[rs.slug]} alt={`Learn more about ${rs.shortTitle} services at Preenja's Dental`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{rs.shortTitle}</h3>
                <p className="text-sm text-muted-foreground mb-3">{rs.tagline}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default ServicePage;
