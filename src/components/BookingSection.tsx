import { useState } from "react";
import { useForm } from "@formspree/react";
import { Check, ArrowLeft, ArrowRight, Calendar, Clock, Loader } from "lucide-react";

const treatments = ["General Checkup", "Dental Implants", "Teeth Whitening", "Root Canal", "Emergency", "Other"];
const morningSlots = ["6:00 AM", "7:00 AM", "9:00 AM", "10:00 AM"];
const afternoonSlots = ["11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];
const eveningSlots = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];

const getNext10Days = () => {
  const days: Date[] = [];
  for (let i = 0; i < 10; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push(d);
  }
  return days;
};

const slotStatus = (slot: string): "available" | "filling" | "full" => {
  if (["9:00 AM", "10:00 AM", "6:00 PM"].includes(slot)) return "filling";
  if (slot === "7:00 AM") return "full";
  return "available";
};

const BookingSection = () => {
  const [formspreeState, handleSubmit] = useForm("xpqbaeae");
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", email: "", treatment: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState("");

  const dates = getNext10Days();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) e.phone = "Enter valid 10-digit number";
    if (!form.email.includes("@")) e.email = "Enter valid email";
    if (!form.treatment) e.treatment = "Select a treatment";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    if (!selectedSlot) { setErrors({ slot: "Please select a time slot" }); return false; }
    setErrors({});
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
        setStep(2);
    }
  };

  const handleFinalSubmit = () => {
    if (validateStep2()) {
        const submissionData = {
            ...form,
            date: selectedDate.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
            time: selectedSlot,
            _subject: `New Appointment from ${form.name}`,
        };
        handleSubmit(submissionData);
    }
  }

  const slotColor = (s: string) => {
    const status = slotStatus(s);
    if (status === "full") return "bg-destructive/10 text-destructive cursor-not-allowed opacity-50";
    if (s === selectedSlot) return "bg-primary text-primary-foreground";
    if (status === "filling") return "bg-accent/20 text-accent-foreground hover:bg-accent/30 border border-accent/50";
    return "bg-card text-foreground hover:bg-primary/10 border border-border";
  };

  if (formspreeState.succeeded) {
    return (
        <section id="booking" className="section-padding">
            <div className="container mx-auto max-w-2xl">
                 <div className="bg-card rounded-2xl p-8 md:p-10 border border-border text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Check className="text-primary" size={40} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">Thank You! Your Appointment is Confirmed</h3>
                    <div className="bg-background rounded-xl p-6 mt-6 text-left space-y-3 max-w-sm mx-auto">
                        <p className="text-sm"><span className="text-muted-foreground">Name:</span> <span className="font-medium text-foreground">{form.name}</span></p>
                        <p className="text-sm"><span className="text-muted-foreground">Date:</span> <span className="font-medium text-foreground">{selectedDate.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span></p>
                        <p className="text-sm"><span className="text-muted-foreground">Time:</span> <span className="font-medium text-foreground">{selectedSlot}</span></p>
                        <p className="text-sm"><span className="text-muted-foreground">Treatment:</span> <span className="font-medium text-foreground">{form.treatment}</span></p>
                    </div>
                    <p className="text-muted-foreground text-sm mt-6">We've sent a confirmation to your email and WhatsApp</p>
                    <button onClick={() => { setStep(1); setForm({ name: "", phone: "", email: "", treatment: "" }); setSelectedSlot(""); window.location.reload(); }} className="mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                        Make Another Booking
                    </button>
                </div>
            </div>
        </section>
    );
  }


  return (
    <section id="booking" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <h2 className="section-heading text-center">Book Your Appointment</h2>
        <p className="section-subheading text-center mb-10">Quick and easy — book in under 2 minutes</p>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                {step > s ? <Check size={16} /> : s}
              </div>
              {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-primary" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
              <input
                name="name"
                className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
              <div className="flex">
                <span className="px-3 py-3 rounded-l-xl bg-muted border border-r-0 border-input text-muted-foreground text-sm">+91</span>
                <input
                  name="phone"
                  className="flex-1 px-4 py-3 rounded-r-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-primary outline-none"
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="9876543210"
                />
              </div>
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
              <input
                name="email"
                className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-primary outline-none"
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com" type="email"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Treatment Interest</label>
              <select
                name="treatment"
                className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-primary outline-none"
                value={form.treatment} onChange={(e) => setForm({ ...form, treatment: e.target.value })}
              >
                <option value="">Select treatment</option>
                {treatments.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.treatment && <p className="text-destructive text-sm mt-1">{errors.treatment}</p>}
            </div>
            <button onClick={handleNext} className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold btn-glow hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Next <ArrowRight size={18} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={20} className="text-primary" />
                <h3 className="font-display font-bold text-lg text-foreground">Select Date</h3>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {dates.map((d) => (
                  <button
                    key={d.toISOString()}
                    onClick={() => setSelectedDate(d)}
                    className={`flex flex-col items-center min-w-[60px] py-3 px-3 rounded-xl transition-all ${
                      selectedDate.toDateString() === d.toDateString()
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border border-border text-foreground hover:border-primary"
                    }`}
                  >
                    <span className="text-xs font-medium">{dayNames[d.getDay()]}</span>
                    <span className="text-lg font-bold">{d.getDate()}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} className="text-primary" />
                <h3 className="font-display font-bold text-lg text-foreground">Select Time</h3>
              </div>
              {[
                { label: "Morning", slots: morningSlots },
                { label: "Afternoon", slots: afternoonSlots },
                { label: "Evening", slots: eveningSlots },
              ].map((group) => (
                <div key={group.label} className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">{group.label}</p>
                  <div className="grid grid-cols-4 gap-2">
                    {group.slots.map((s) => (
                      <button
                        key={s}
                        disabled={slotStatus(s) === "full"}
                        onClick={() => setSelectedSlot(s)}
                        className={`py-2.5 px-2 rounded-lg text-sm font-medium transition-all ${slotColor(s)}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              {errors.slot && <p className="text-destructive text-sm">{errors.slot}</p>}
               {formspreeState.errors && <p className="text-destructive text-sm mt-2">There was an error submitting the form. Please try again.</p>}
              <div className="flex gap-2 text-xs text-muted-foreground mt-2">
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-primary rounded" /> Available</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-accent/40 rounded border border-accent/50" /> Filling Fast</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-destructive/20 rounded" /> Full</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 py-3.5 rounded-xl font-semibold border border-border text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2">
                <ArrowLeft size={18} /> Back
              </button>
              <button onClick={handleFinalSubmit} disabled={formspreeState.submitting} className="flex-1 bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold btn-glow hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                {formspreeState.submitting ? <><Loader className="animate-spin" size={18} /> Submitting...</> : "Confirm Booking"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
