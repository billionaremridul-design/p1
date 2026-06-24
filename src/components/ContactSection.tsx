import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.phone && contactForm.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setContactForm({ name: "", phone: "", message: "" });
    }
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.24!3d28.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGreater+Kailash+II+New+Delhi!5e0!3m2!1sen!2sin!4v1"
              className="w-full h-72 lg:h-full min-h-[300px]"
              loading="lazy"
              title="Clinic Location"
            />
          </div>

          {/* Contact Info + Form */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Phone, title: "Phone", lines: ["011-48028735", "+91-9811297795", "+91-7678324026"] },
                { icon: Clock, title: "Hours", lines: ["Mon–Sat: 10 AM – 8 PM", "Sun: Closed"] },
                { icon: MapPin, title: "Address", lines: ["E-588, Greater Kailash II", "New Delhi, Delhi 110048"] },
                { icon: Mail, title: "Email", lines: ["info@preenjadental.com"] },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 bg-background rounded-xl">
                  <item.icon className="text-primary shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                    {item.lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-display font-bold text-lg text-foreground">Send us a message</h3>
              <input
                className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-primary outline-none"
                placeholder="Your Name" value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} required
              />
              <input
                className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-primary outline-none"
                placeholder="Phone Number" value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} required
              />
              <textarea
                className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                rows={4} placeholder="Your Message" value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} required
              />
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold btn-glow hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                {sent ? "Message Sent!" : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
