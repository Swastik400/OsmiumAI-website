"use client";

import { useEffect, useRef } from "react";

interface LogoItem {
  name: string;
  src?: string | null;
  imgStyle?: React.CSSProperties;
}

interface LogoCarouselProps {
  logos: LogoItem[];
  speed?: number;
  logoWidth?: number;
  gap?: number;
}

export function LogoCarousel({ logos, speed = 30, logoWidth = 150, gap = 60 }: LogoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const singleSetWidth = logos.length * (logoWidth + gap);
    const duration = singleSetWidth / speed;

    inner.style.animation = `logo-scroll ${duration}s linear infinite`;
  }, [logos.length, logoWidth, gap, speed]);

  const itemStyle: React.CSSProperties = {
    width: logoWidth,
    height: 60,
    marginRight: gap,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Duplicate logos 3x for seamless loop
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-carousel-container w-full" role="region" aria-label="Partner logos carousel">
      <style>{`
        @keyframes logo-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-${logos.length * (logoWidth + gap)}px, 0, 0); }
        }
        .logo-carousel-track {
          mask: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .logo-carousel-inner:hover {
          animation-play-state: paused !important;
        }
      `}</style>
      <div ref={trackRef} className="logo-carousel-track" style={{ overflow: "hidden", width: "100%", position: "relative" }}>
        <div
          ref={innerRef}
          className="logo-carousel-inner"
          style={{ display: "flex", alignItems: "center", willChange: "transform" }}
        >
          {allLogos.map((logo, i) => (
            <div key={`${logo.name}-${i}`} style={itemStyle}>
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "grayscale(100%) brightness(0.8)",
                    opacity: 0.7,
                    transition: "filter 0.3s ease, opacity 0.3s ease",
                    ...logo.imgStyle,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%) brightness(1)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(100%) brightness(0.8)";
                    e.currentTarget.style.opacity = "0.7";
                  }}
                />
              ) : (
                <span className="text-sm font-semibold text-black/30 whitespace-nowrap transition-colors duration-300 hover:text-black/70 select-none">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
