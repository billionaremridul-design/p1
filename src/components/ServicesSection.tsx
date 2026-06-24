import { Gem, ArrowRight } from "lucide-react"; // Only Gem is used as a type for icon, ArrowRight for the link
import { Link } from "react-router-dom";
import { services, ServiceData } from "@/data/services"; // Import services and ServiceData from central source

const ServiceCard = ({ service }: { service: ServiceData }) => {
  // Removed useState, AnimatePresence, and motion as expand/collapse is no longer needed.
  // The card will now link directly to the service page.

  return (
    <Link
      to={`/services/${service.slug}`}
      className="card-lift group bg-card rounded-2xl p-8 border border-border hover:border-primary transition-colors text-center flex flex-col items-center"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
        <service.icon className="text-primary" size={28} />
      </div>
      <h3 className="font-display font-bold text-xl text-foreground mb-2">{service.shortTitle}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{service.tagline}</p> {/* flex-grow to ensure consistent height */}
      <span className="inline-flex items-center gap-1 mt-auto text-primary font-semibold text-sm group-hover:gap-2 transition-all">
        Learn More <ArrowRight size={16} />
      </span>
    </Link>
  );
};

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto">
      <h2 className="section-heading text-center">Comprehensive Dental Care</h2>
      <p className="section-subheading text-center mb-12">Everything you need under one roof</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
