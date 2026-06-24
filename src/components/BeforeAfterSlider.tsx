import { useState, useRef, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const sliderImageClass =
  "absolute top-0 left-0 w-full h-full object-contain bg-black";

const BeforeAfterSlider = ({ beforeImg, afterImg, beforeLabel = "Before", afterLabel = "After" }: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    const handleGlobalUp = () => { isDragging.current = false; };
    const handleGlobalMove = (e: MouseEvent) => {
      if (isDragging.current) updatePosition(e.clientX);
    };
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging.current) updatePosition(e.touches[0].clientX);
    };
    window.addEventListener("mouseup", handleGlobalUp);
    window.addEventListener("mousemove", handleGlobalMove);
    window.addEventListener("touchend", handleGlobalUp);
    window.addEventListener("touchmove", handleGlobalTouchMove);
    return () => {
      window.removeEventListener("mouseup", handleGlobalUp);
      window.removeEventListener("mousemove", handleGlobalMove);
      window.removeEventListener("touchend", handleGlobalUp);
      window.removeEventListener("touchmove", handleGlobalTouchMove);
    };
  }, [updatePosition]);

  const handleStart = (clientX: number) => {
    isDragging.current = true;
    updatePosition(clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl cursor-col-resize select-none border border-border"
      onMouseDown={(e) => handleStart(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
    >
      {/* After image (full background) */}
      <img
        src={afterImg}
        alt="After dental treatment at Preenja's Dental Clinic"
        className={sliderImageClass}
        loading="lazy"
        draggable={false}
      />

      {/* Before image (clipped from left) */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeImg}
          alt="Before treatment"
          className={sliderImageClass}
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-primary z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg pointer-events-none">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8l4 4-4 4" /><path d="M6 8l-4 4 4 4" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 bg-foreground/80 text-background text-xs font-semibold px-3 py-1 rounded-full z-20 pointer-events-none">{beforeLabel}</span>
      <span className="absolute bottom-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full z-20 pointer-events-none">{afterLabel}</span>
    </div>
  );
};

export default BeforeAfterSlider;
