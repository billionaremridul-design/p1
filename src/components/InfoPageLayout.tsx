import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, MapPin, Mail } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export interface AlternatingBlock {
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

interface InfoPageLayoutProps {
  breadcrumb: string;
  title: string;
  subtitle: string;
  blocks: AlternatingBlock[];
  ctaLabel: string;
  afterBlocks?: ReactNode;
}

const InfoPageLayout = ({ breadcrumb, title, subtitle, blocks, ctaLabel, afterBlocks }: InfoPageLayoutProps) => {
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
            <span className="text-foreground">{breadcrumb}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-3">{title}</h1>
          <p className="text-xl text-muted-foreground mb-5">{subtitle}</p>
          <Link to="/contact" className="inline-flex bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-lg font-bold btn-glow hover:opacity-90 transition-opacity self-start">
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* Main + Sidebar */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
            <div className="lg:col-span-7 space-y-16">
              {blocks.map((block, idx) => {
                const imageLeft = idx % 2 === 1;
                const imageEl = (
                  <div className="bg-card rounded-2xl border border-border p-4 shadow-md">
                    <img
                      src={block.image}
                      alt={block.imageAlt}
                      className="w-full h-auto object-contain rounded-xl"
                      loading="lazy"
                    />
                  </div>
                );
                const textEl = (
                  <div className="flex flex-col justify-center">
                    <h2 className="section-heading mb-5">{block.heading}</h2>
                    {block.paragraphs.map((p, pi) => (
                      <p key={pi} className="text-muted-foreground text-lg leading-relaxed mb-4">{p}</p>
                    ))}
                  </div>
                );
                return (
                  <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {imageLeft ? <>{imageEl}{textEl}</> : <>{textEl}{imageEl}</>}
                  </div>
                );
              })}

              {afterBlocks}

              <div className="text-center pt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-lg font-bold btn-glow hover:opacity-90 transition-opacity">
                  {ctaLabel}
                </Link>
              </div>
            </div>

            {/* Sidebar — 30% */}
            <aside className="lg:col-span-3">
              <div className="sticky top-28 space-y-6">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-md">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">Get in Touch</h3>
                  <div className="space-y-3 text-sm">
                    <a href="tel:+919811297795" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <Phone size={18} className="text-primary" /> +91-9811297795
                    </a>
                    <a href="mailto:info@preenjasdental.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <Mail size={18} className="text-primary" /> info@preenjasdental.com
                    </a>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>Preenja's Dental & Implant Centre, Greater Kailash II, New Delhi</span>
                    </div>
                  </div>
                  <Link to="/contact" className="mt-5 inline-flex w-full justify-center bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold btn-glow hover:opacity-90 transition-opacity">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default InfoPageLayout;
