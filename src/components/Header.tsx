import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X, ChevronDown, Phone, ShieldCheck, Smile, Sparkles, AlignLeft } from "lucide-react";
import { services } from "@/data/services";
import logo from "@/assets/logo-new.png";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/about" },
  { label: "Services", href: "#", isDropdown: true },
  { label: "Contact", href: "/contact" },
];

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isHome = location.pathname === "/";
  const isServicePage = location.pathname.startsWith("/services/");
  const textColor = "text-foreground";

  return (
    <header className={`sticky-header ${scrolled || !isHome ? "scrolled" : ""}`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Preenja's Dental & Implant Centre Logo" className="h-12 md:h-14 w-auto" style={{ background: "transparent", backgroundColor: "transparent" }} />
          <span className="hidden sm:inline font-display font-semibold text-[15px] md:text-base text-foreground leading-tight">
            Preenja's Dental &amp; Implant Centre
          </span>
        </Link>


        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((l) =>
            l.isDropdown ? (
              <div key="services" className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isServicePage ? "text-primary" : textColor
                  }`}
                >
                  Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-background border border-border rounded-xl shadow-xl py-2 w-64 z-50">
                    {services.map((svc) => (
                      <Link
                        key={svc.slug}
                        to={`/services/${svc.slug}`}
                        className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-primary/5 hover:text-primary ${
                          location.pathname === `/services/${svc.slug}` ? "text-primary bg-primary/5" : "text-foreground"
                        }`}
                      >
                        <svc.icon size={16} className="text-primary shrink-0" />
                        {svc.shortTitle}
                      </Link>
                    ))}
                    {[
                      { to: "/services/conservative-dentistry", label: "Conservative Dentistry", Icon: ShieldCheck },
                      { to: "/services/dentures", label: "Dentures", Icon: Smile },
                      { to: "/services/preventive-dentistry", label: "Preventive Dentistry", Icon: Sparkles },
                      { to: "/services/invisalign", label: "Invisalign", Icon: AlignLeft },
                    ].map(({ to, label, Icon }) => (
                      <Link
                        key={to}
                        to={to}
                        className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-primary/5 hover:text-primary ${
                          location.pathname === to ? "text-primary bg-primary/5" : "text-foreground"
                        }`}
                      >
                        <Icon size={16} className="text-primary shrink-0" />
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === l.href ? "text-primary" : textColor
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+919811297795" className={`hidden lg:flex items-center gap-1.5 text-sm font-medium ${textColor} hover:text-primary transition-colors`}>
            <Phone size={16} /> +91-9811297795
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition-colors text-foreground hover:bg-muted"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link
            to="/contact"
            className="hidden lg:inline-flex bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold btn-glow hover:opacity-90 transition-opacity"
          >
            Book Now
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col p-4 gap-1">
            <Link to="/" className={`font-medium py-2.5 transition-colors ${location.pathname === "/" ? "text-primary" : "text-foreground hover:text-primary"}`}>
              Home
            </Link>
            <Link to="/about" className={`font-medium py-2.5 transition-colors ${location.pathname === "/about" ? "text-primary" : "text-foreground hover:text-primary"}`}>
              Profile
            </Link>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between font-medium py-2.5 transition-colors ${isServicePage ? "text-primary" : "text-foreground"}`}
            >
              Services <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((svc) => (
                  <Link
                    key={svc.slug}
                    to={`/services/${svc.slug}`}
                    className={`flex items-center gap-2 py-2 text-sm transition-colors ${
                      location.pathname === `/services/${svc.slug}` ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <svc.icon size={14} />
                    {svc.shortTitle}
                  </Link>
                ))}
                {[
                  { to: "/services/conservative-dentistry", label: "Conservative Dentistry", Icon: ShieldCheck },
                  { to: "/services/dentures", label: "Dentures", Icon: Smile },
                  { to: "/services/preventive-dentistry", label: "Preventive Dentistry", Icon: Sparkles },
                  { to: "/services/invisalign", label: "Invisalign", Icon: AlignLeft },
                ].map(({ to, label, Icon }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`flex items-center gap-2 py-2 text-sm transition-colors ${
                      location.pathname === to ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <Icon size={14} />
                    {label}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/contact" className={`font-medium py-2.5 transition-colors ${location.pathname === "/contact" ? "text-primary" : "text-foreground hover:text-primary"}`}>
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-5 py-3 rounded-full text-center font-semibold mt-3"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
