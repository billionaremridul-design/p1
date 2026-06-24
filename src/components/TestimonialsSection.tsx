import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", review: "The staff was so kind and helpful. Results exceeded my expectations! Dr. Preenja made me feel comfortable throughout the entire procedure. I couldn't be happier with my new smile.", date: "3 months ago" },
  { name: "Rajesh Kumar", review: "Painless implant procedure. Highly recommend Dr. Preenja! The modern equipment and clean environment gave me confidence from the moment I walked in.", date: "2 months ago" },
  { name: "Anita Gupta", review: "Best dental experience ever. Modern equipment, professional team. They explained every step of the treatment clearly. Five stars all the way!", date: "1 month ago" },
  { name: "Vikram Singh", review: "Transformed my smile completely. Worth every rupee! After years of being self-conscious, I finally have the confidence to smile freely. Thank you, Dr. Preenja!", date: "2 weeks ago" },
  { name: "Meera Patel", review: "Emergency tooth extraction done with zero pain. The team was incredibly responsive and caring. I was treated within 30 minutes of calling. Truly a world-class clinic.", date: "1 month ago" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => setCurrent(((i % testimonials.length) + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">What Our Patients Say</h2>
        <p className="section-subheading text-center mb-12">Trusted by thousands across New Delhi</p>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-background rounded-2xl p-8 md:p-10 text-center max-w-2xl mx-auto shadow-sm">
                    <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-display font-bold text-xl">{t.name[0]}</span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-foreground">{t.name}</h4>
                    <div className="flex justify-center gap-1 my-3">
                      {Array(5).fill(0).map((_, j) => <Star key={j} size={18} className="fill-accent text-accent" />)}
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">"{t.review}"</p>
                    <p className="text-sm text-muted-foreground mt-4">{t.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => goTo(current - 1)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 p-2 rounded-full bg-background shadow-lg text-foreground hover:text-primary transition-colors hidden md:block">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => goTo(current + 1)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 p-2 rounded-full bg-background shadow-lg text-foreground hover:text-primary transition-colors hidden md:block">
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-muted-foreground/30"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
