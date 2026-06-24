import { useState } from "react";

interface SimpleCaseStudyCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  shortText: string;
  fullText?: string;
}

const SimpleCaseStudyCard = ({ title, imageUrl, imageAlt, shortText, fullText }: SimpleCaseStudyCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
      <h3 className="font-display font-bold text-lg text-foreground mb-6">{title}</h3>
      <div className="w-full rounded-xl overflow-hidden border border-border bg-card">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
      <div className="mt-5">
        <p className={`text-muted-foreground leading-relaxed ${!expanded && fullText ? "line-clamp-3" : ""}`}>
          {shortText}
        </p>
        {fullText && expanded && (
          <p className="mt-2 text-muted-foreground leading-relaxed whitespace-pre-line">{fullText}</p>
        )}
        {fullText && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-primary font-semibold text-sm hover:underline transition-all inline-flex items-center gap-1"
          >
            {expanded ? "Show Less" : "Read More"}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SimpleCaseStudyCard;
