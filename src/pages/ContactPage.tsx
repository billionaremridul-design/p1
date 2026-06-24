import { useForm } from "@formspree/react";
import { Phone, Mail, Clock, MapPin, Send, Instagram, Facebook, Star, Loader } from "lucide-react";
import BookingSection from "@/components/BookingSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xpqbaeae");

  const treatments = [
    "General Checkup", "Dental Implants", "Teeth Whitening", "Root Canal Treatment",
    "Cosmetic Dentistry", "Orthodontics (Braces)", "Gum Treatment",
    "Wisdom Tooth Extraction", "Pediatric Dentistry", "Emergency Dental Care",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-card text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-4">Get in Touch — We're Here to Help</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Schedule your visit, ask a question, or request a consultation Today! The team responds within 24 hours.</p>
        </div>
      </section>

      {/* Map + Contact */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Map + Address Card */}
            <div className="space-y-5">
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                <iframe
                  src="https://maps.google.com/maps?q=Dr+Sandeep+Preenja%27s+Dental+%26+Implant+Centre,+E-588,+Block+E,+Greater+Kailash+II,+New+Delhi,+Delhi+110048&output=embed"
                  className="w-full h-[400px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Preenja's Dental & Implant Centre Location"
                />
              </div>

              <div className="bg-card rounded-2xl border border-border p-5 sm:p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-base">Clinic Address</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      E-588, next to Savitri Cinema Complex, Block E,<br className="hidden sm:block" /> Greater Kailash II, Greater Kailash, New Delhi, Delhi 110048
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=E-588,+next+to+Savitri+Cinema+Complex,+Block+E,+Greater+Kailash+II,+New+Delhi+110048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Get Directions
                </a>

              </div>
            </div>

            {/* Contact Info + Form */}
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">Contact Information</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: MapPin, title: "Address", lines: ["E-588, next to Savitri Cinema Complex, Block E,", "Greater Kailash II, New Delhi, Delhi 110048"] },
                  { icon: Phone, title: "Phone", lines: ["011-48028735", "+91-9811297795", "+91-7678324026"] },
                  { icon: Mail, title: "Email", lines: ["info@preenjadental.com"] },
                  { icon: Clock, title: "Clinic Hours", lines: ["Mon – Sat: 10:00 AM – 8:00 PM", "Sunday: Closed", "(Emergency services available 24/7)"] },
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

              {/* Social */}
              <div className="flex gap-3 mb-8">
                {[
                  { icon: Instagram, href: "https://instagram.com/preenjadental", label: "Instagram" },
                  { icon: Facebook, href: "https://facebook.com/preenjadental", label: "Facebook" },
                  { icon: Star, href: "https://g.page/preenjadental", label: "Google Reviews" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label={s.label}>
                    <s.icon size={18} />
                  </a>
                ))}
              </div>

              {/* Quick Contact Form */}
              <h3 className="font-display font-bold text-lg text-foreground mb-4">Send a Message</h3>
              {state.succeeded ? (
                <div className="bg-primary/10 text-primary rounded-xl p-4 font-medium">
                  Thank you — your message has been received. The team will be in touch within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input id="name" name="name" className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-primary outline-none" placeholder="Your Name *" required />
                  <div className="flex gap-4">
                    <div className="flex flex-1">
                      <span className="px-3 py-3 rounded-l-xl bg-muted border border-r-0 border-input text-muted-foreground text-sm">+91</span>
                      <input id="phone" name="phone" className="flex-1 px-4 py-3 rounded-r-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-primary outline-none" placeholder="Phone Number *" required />
                    </div>
                  </div>
                  <input id="email" name="email" className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-primary outline-none" placeholder="Email Address *" type="email" required />
                  <select id="treatment" name="treatment" className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-primary outline-none" required>
                    <option value="">Treatment Interest *</option>
                    {treatments.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <input id="date" name="date" className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-primary outline-none" type="date" />
                  <textarea id="message" name="message" className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-primary outline-none resize-none" rows={3} placeholder="Message (optional)" />
                  <input type="hidden" name="_subject" value="New Message from Website Contact Form" />
                  {state.errors && <p className="text-destructive text-sm">An error occurred. Please try again.</p>}
                  <button type="submit" disabled={state.submitting} className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold btn-glow hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    {state.submitting ? <><Loader className="animate-spin" size={18}/> Sending...</> : <><Send size={18} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
