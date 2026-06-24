import { Award, ShieldCheck, Users, Star, Trophy } from "lucide-react";

const awards = [
  { icon: Trophy, title: "Best Dental Clinic 2024", sub: "Delhi Awards" },
  { icon: ShieldCheck, title: "ISO 9001:2015", sub: "Certified" },
  { icon: Award, title: "Member", sub: "Indian Dental Association" },
  { icon: Star, title: "Rating 5.0 ★", sub: "Google Reviews" },
  { icon: Users, title: "50,000+", sub: "Smiles Transformed" },
];

const AwardsSection = () => (
  <section className="py-16 bg-card border-y border-border">
    <div className="container mx-auto">
      <h2 className="section-heading text-center mb-12">Recognized Excellence</h2>
      <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide justify-start md:justify-center">
        {awards.map((a) => (
          <div key={a.title} className="flex flex-col items-center text-center min-w-[160px]">
            <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-3">
              <a.icon className="text-accent" size={28} />
            </div>
            <h4 className="font-display font-bold text-foreground">{a.title}</h4>
            <p className="text-sm text-muted-foreground">{a.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsSection;
