"use client";

import { useRef, useState, useCallback } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  zoom?: number;
  lensSize?: number;
  imageSrc?: string;
}

interface ImageBounds {
  x: number;
  y: number;
  w: number;
  h: number;
}

export function MagnifyZone({
  children,
  className = "",
  style,
  zoom = 2,
  lensSize = 180,
  imageSrc,
}: Props) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [bounds, setBounds] = useState<ImageBounds>({ x: 0, y: 0, w: 0, h: 0 });
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null);

  const handleEnter = useCallback(() => {
    const el = zoneRef.current;
    if (!el) return;

    const containerRect = el.getBoundingClientRect();
    const img = el.querySelector("img");

    if (img) {
      const actualSrc = img.currentSrc || img.src;
      if (!actualSrc) return;

      setResolvedSrc(actualSrc);

      // Calculate actual rendered image bounds within the container
      const imgRect = img.getBoundingClientRect();
      setBounds({
        x: imgRect.left - containerRect.left,
        y: imgRect.top - containerRect.top,
        w: imgRect.width,
        h: imgRect.height,
      });

      setShow(true);
      return;
    }

    if (imageSrc) {
      setResolvedSrc(imageSrc);
      setBounds({ x: 0, y: 0, w: el.offsetWidth, h: el.offsetHeight });
      setShow(true);
    }
  }, [imageSrc]);

  const handleLeave = useCallback(() => {
    setShow(false);
  }, []);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const rect = zoneRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const half = lensSize / 2;

  // Position relative to the actual image, not the container
  const relX = pos.x - bounds.x;
  const relY = pos.y - bounds.y;

  return (
    <div
      ref={zoneRef}
      className={`relative ${className}`}
      style={{ ...style, cursor: show && resolvedSrc ? "none" : undefined }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
    >
      {children}

      {show && resolvedSrc && (
        <>
          <div
            className="pointer-events-none absolute z-[60] rounded-full bg-black/30"
            style={{ width: 6, height: 6, top: pos.y - 3, left: pos.x - 3 }}
          />

          <div
            className="pointer-events-none absolute z-50 rounded-full border-2 border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden"
            style={{
              width: lensSize,
              height: lensSize,
              top: pos.y - half,
              left: pos.x - half,
              backgroundImage: `url(${resolvedSrc})`,
              backgroundSize: `${bounds.w * zoom}px ${bounds.h * zoom}px`,
              backgroundPosition: `${-(relX * zoom) + half}px ${-(relY * zoom) + half}px`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </>
      )}
    </div>
  );
}
