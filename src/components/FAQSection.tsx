import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is dental implant painful?", a: "Modern dental implant procedures are virtually painless. We use advanced local anesthesia and sedation techniques to ensure your complete comfort throughout the procedure. Most patients report minimal discomfort post-surgery." },
  { q: "How long does teeth whitening last?", a: "Professional teeth whitening results typically last 1-3 years depending on your diet and oral hygiene habits. We recommend periodic touch-ups and avoiding staining foods to maintain your bright smile." },
  { q: "Do you accept insurance?", a: "Yes, we accept most major dental insurance plans. Our front desk team will help verify your coverage and maximize your benefits. We also offer flexible payment plans for uninsured patients." },
  { q: "What are your payment options?", a: "We accept cash, all major credit/debit cards, UPI payments, and offer EMI options through select banks. We believe quality dental care should be accessible to everyone." },
  { q: "How often should I visit the dentist?", a: "We recommend dental check-ups every 6 months for optimal oral health. Regular visits help detect issues early, saving you time, money, and discomfort in the long run." },
  { q: "Do you provide emergency dental services?", a: "Yes, we provide emergency dental care with extended hours. Call our emergency line for immediate assistance. We prioritize urgent cases and strive to see emergency patients the same day." },
  { q: "Are treatments safe for children?", a: "Absolutely. Our pediatric dentistry team specializes in gentle, child-friendly treatments. We create a comfortable, fun environment that helps children develop positive associations with dental care." },
  { q: "What is the cost of dental implants?", a: "Dental implant costs vary based on the type and number of implants needed. We offer competitive pricing and flexible payment plans. Schedule a free consultation for a personalized treatment estimate." },
  { q: "Do you offer free consultation?", a: "Yes, we offer free initial consultations for new patients today! This includes a preliminary examination and discussion of treatment options tailored to your needs and budget." },
  { q: "How do I prepare for my first visit?", a: "Bring your ID, insurance card (if applicable), and any previous dental records. Arrive 10 minutes early to complete paperwork. List any medications you're taking and questions you'd like to discuss." },
];

const FAQSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <h2 className="section-heading text-center">Frequently Asked Questions</h2>
      <p className="section-subheading text-center mb-10">Everything you need to know</p>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
            <AccordionTrigger className="text-foreground font-display font-semibold text-left hover:text-primary hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
