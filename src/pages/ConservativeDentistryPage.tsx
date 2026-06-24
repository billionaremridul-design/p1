import { Link } from "react-router-dom";
import { ChevronRight, Phone, MapPin, Mail, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

import { conservativeImages } from "@/data/services";

const { emaxBridge, amalgamComposite } = conservativeImages;

const ConservativeDentistryPage = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

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
            <span className="text-foreground">Conservative Dentistry</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-3">Conservative Dentistry in Greater Kailash II</h1>
          <p className="text-xl text-muted-foreground mb-5">Preserving your natural teeth with precision restorations</p>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-primary/10 rounded-xl px-5 py-2.5 border border-primary/20">
              <p className="text-xl font-bold text-primary">Metal-Free</p>
              <p className="text-xs text-muted-foreground">Restorations</p>
            </div>
            <div className="bg-primary/10 rounded-xl px-5 py-2.5 border border-primary/20">
              <p className="text-xl font-bold text-primary">Single Visit</p>
              <p className="text-xs text-muted-foreground">Most Cases</p>
            </div>
          </div>
          <Link to="/contact" className="inline-flex bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-lg font-bold btn-glow hover:opacity-90 transition-opacity self-start">
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
                <h2 className="section-heading mb-6">Advanced Conservative Dentistry — Save More, Drill Less</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Conservative dentistry focuses on preserving as much of your natural tooth structure as possible. Rather than extracting damaged teeth, we repair, restore, and protect them using modern materials and minimally invasive techniques.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  From replacing old metal amalgam fillings with invisible tooth-coloured composites to restoring missing teeth with metal-free Emax ceramic bridges — every procedure at Preenja's Dental & Implant Centre is designed to deliver lasting results with maximum preservation of your natural teeth.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At our South Delhi clinic, conservative dentistry means treating the problem at its root while keeping your smile intact — naturally.
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="section-heading mb-8">Key Benefits of Conservative Dentistry</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Preserve Natural Tooth", desc: "Minimal drilling, maximum tooth retention" },
                    { title: "Metal-Free Materials", desc: "Biocompatible composites and ceramics" },
                    { title: "Single Visit", desc: "Most restorations completed in one appointment" },
                    { title: "Natural Aesthetics", desc: "Invisible restorations matched to your teeth" },
                    { title: "Long-Lasting Results", desc: "Durable materials for years of function" },
                    { title: "Painless Procedures", desc: "Modern anaesthesia for complete comfort" },
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

              {/* Real Patient Results */}
              <div>
                <h2 className="section-heading mb-4">Real Patient Results</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">These are real clinical cases treated at Preenja's Dental & Implant Centre, New Delhi — showing the precision and care behind every restoration.</p>

                {/* Case 1 — Emax Bridge */}
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8 mb-8">
                  <h3 className="font-display font-bold text-lg text-foreground mb-6">Missing Tooth Restored — Emax Crown Bridge</h3>
                  <img src={emaxBridge} alt="Emax ceramic bridge — before and after — missing upper front tooth restored" className="w-full h-auto object-contain rounded-xl" />
                  <p className="text-muted-foreground mt-6 leading-relaxed">
                    A missing upper front tooth replaced with a custom Emax ceramic bridge — fully metal-free, natural-looking, and seamlessly matched to surrounding teeth. Top: Before. Bottom: After.
                  </p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Emax restorations mimic natural enamel translucency. The bridge was shade-matched precisely with zero metal used — biocompatible, gum-friendly, and long-lasting. At Preenja's Dental & Implant Centre, every restoration is planned for both aesthetics and long-term oral health.
                  </p>
                </div>

                {/* Case 2 — Amalgam to Composite */}
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <h3 className="font-display font-bold text-lg text-foreground mb-6">Silver Amalgam Replaced with Tooth-Coloured Composite</h3>
                  <img src={amalgamComposite} alt="Amalgam filling replaced with tooth-coloured composite — before and after" className="w-full h-auto object-contain rounded-xl" />
                  <p className="text-muted-foreground mt-6 leading-relaxed">
                    Ageing metal amalgam fillings removed and replaced with matched tooth-coloured composite restorations — completed in a single visit with zero discomfort. Top: Before. Bottom: After.
                  </p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Composite bonds directly to tooth structure requiring less removal of healthy tooth than amalgam. Fully metal-free, completely invisible result. Conservative dentistry at Preenja's always preserves maximum natural tooth structure.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar — 30% */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="bg-card rounded-2xl border border-border p-6 sticky top-28">
                <h3 className="font-display font-bold text-xl text-foreground mb-5">Get in Touch</h3>
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Check className="text-primary" size={28} />
                    </div>
                    <p className="font-display font-bold text-foreground">Thank You!</p>
                    <p className="text-sm text-muted-foreground mt-1">We'll contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                    <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                    <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                    <textarea placeholder="Your Message" rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none" />
                    <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold btn-glow hover:opacity-90 transition-opacity">Submit</button>
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
                    <a href="mailto:preenjasdental@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@preenjadental.com</a>
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

export default ConservativeDentistryPage;
