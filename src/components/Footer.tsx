import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logo-new.png";

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => (
  <footer className="bg-foreground text-background py-16 px-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Col 1 */}
      <div>
        <img src={logo} alt="Preenja's Dental & Implant Centre Logo" className="h-12 mb-4 brightness-0 invert" />
        <p className="text-background/80 font-display font-semibold mb-2">Cosmetic Implant & General Dentistry — Since 2001</p>
        <p className="text-background/60 text-sm leading-relaxed">
          Transforming smiles across New Delhi with cutting-edge technology.
        </p>
        <p className="text-background/40 text-sm mt-4">
          © {new Date().getFullYear()} Preenja's Dental & Implant Centre. All rights reserved.
        </p>
      </div>

      {/* Col 2 - Quick Links */}
      <div>
        <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
        <nav className="flex flex-col gap-2">
          <Link to="/" className="text-background/70 hover:text-background transition-colors text-sm">Home</Link>
          <Link to="/about" className="text-background/70 hover:text-background transition-colors text-sm">Profile</Link>
          {services.map((svc) => (
            <Link key={svc.slug} to={`/services/${svc.slug}`} className="text-background/70 hover:text-background transition-colors text-sm">
              {svc.shortTitle}
            </Link>
          ))}
          <Link to="/services/conservative-dentistry" className="text-background/70 hover:text-background transition-colors text-sm">Conservative Dentistry</Link>
          <Link to="/contact" className="text-background/70 hover:text-background transition-colors text-sm">Contact</Link>
        </nav>
      </div>

      {/* Col 3 - Contact + Social */}
      <div>
        <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
        <div className="space-y-2 text-background/70 text-sm">
          <p>Dr. Sandeep Preenja's Dental & Implant Centre</p>
          <p>E-588, Greater Kailash II, New Delhi 110048</p>
          <p>Tel: 011-48028735</p>
          <p>Mob: +91-9811297795, +91-7678324026</p>
          <p>Email: info@preenjadental.com</p>
          <div className="pt-3">
            <p className="font-semibold text-background/90">Clinic Hours</p>
            <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
            <p>Sunday: Closed</p>
            <p>Emergency: 24/7</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-6">
          <h4 className="font-display font-bold text-sm mb-3 text-background/90">Follow Us</h4>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/preenjasdental?igsh=emsyNnF4dG8xZGFr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-background/70"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/share/1AzHUQc6ko/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-background/70"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/dr-sandeep-preenja-3a0911aa?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-background/70"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
