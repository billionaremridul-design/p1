import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-signboard.jpg";
import logo from "@/assets/logo-new.png";

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Comfortable and modern interior of Preenja's Dental Clinic in Greater Kailash" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <img src={logo} alt="Logo" className="h-32 md:h-40 mx-auto mb-6 animate-fade-in-up" />
      <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        PREENJA'S DENTAL
      </h1>
      <p className="text-lg md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        Cosmetic Implant & General Dentistry — Since 2001
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold btn-glow animate-pulse-glow hover:opacity-90 transition-opacity">
          Book Appointment
        </Link>
        <Link to="/gallery" className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-foreground hover:text-foreground transition-all duration-300">
          View Gallery
        </Link>
      </div>
    </div>
    <Link to="/gallery" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground animate-bounce-arrow">
      <ChevronDown size={36} />
    </Link>
  </section>
);

export default HeroSection;
