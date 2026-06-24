import { Award, Users, Shield, Heart } from "lucide-react";
import doctorImg from "@/assets/doctor-real.jpeg";

const AboutSection = () => (
  <section id="about" className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left - History */}
        <div>
          <h2 className="section-heading">25 Years of Clinical Excellence</h2>
          <p className="text-muted-foreground mt-6 leading-relaxed text-lg">
            Established in 2001, this <strong className="text-foreground">South Delhi dental practice</strong> has been transforming smiles across New Delhi with cutting-edge technology and compassionate care. Combining <strong className="text-foreground">international standards</strong> with personalized attention, the clinic is trusted by over 50,000 patients for everything from routine checkups to complex <strong className="text-foreground">dental implants and cosmetic smile makeovers</strong>.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { icon: Shield, text: "Advanced Digital Imaging" },
              { icon: Heart, text: "Painless Techniques" },
              { icon: Award, text: "ISO 9001:2015 Certified" },
              { icon: Users, text: "20,000+ Happy Patients" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 p-4 rounded-xl bg-background">
                <item.icon className="text-primary shrink-0 mt-0.5" size={22} />
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Doctor */}
        <div className="text-center">
          <div className="w-64 h-64 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-xl">
            <img src={doctorImg} alt="Dr. Sandeep Preenja — Lead Dental Surgeon" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-display mt-6 text-foreground">Dr. Sandeep Preenja</h3>
          <p className="text-secondary font-semibold mt-1">B.D.S · Cosmetic & Implant Specialist</p>
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mt-3">
            28+ Years Experience
          </span>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            With over 28 years of expertise in <strong className="text-foreground">cosmetic and implant dentistry</strong>, Dr. Preenja has transformed thousands of smiles using the latest digital techniques and minimally invasive technology. His patient-first approach and commitment to painless dentistry have made this one of New Delhi's most trusted dental practices.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
