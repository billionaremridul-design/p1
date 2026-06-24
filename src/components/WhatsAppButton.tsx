import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/919811297795?text=Hi%2C%20I'd%20like%20to%20book%20an%20appointment%20at%20Preenja's%20Dental"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <span className="bg-foreground text-background text-sm font-medium px-4 py-2 rounded-full shadow-lg animate-fade-in-up whitespace-nowrap">
          Let's chat on WhatsApp
        </span>
      )}
      <span className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform animate-pulse-glow">
        <MessageCircle size={28} />
      </span>
    </a>
  );
};

export default WhatsAppButton;
