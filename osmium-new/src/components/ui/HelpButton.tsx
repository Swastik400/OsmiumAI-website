"use client";

import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";

export function HelpButton() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      const pastHero = scrollY > windowH * 0.8;
      const nearFooter = scrollY + windowH > docH - 300;

      setVisible(pastHero && !nearFooter);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible && !open) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {/* Chat panel */}
      {open && (
        <div
          className="pointer-events-auto w-[22rem] rounded-2xl overflow-hidden animate-in"
          style={{
            backgroundColor: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.06]">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Osmium" className="h-5 w-auto" />
              <div>
                <p className="type-sm font-medium text-black">Osmium Support</p>
                <p className="type-xs text-warm-400">We typically reply instantly</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="size-8 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors"
            >
              <X className="size-4 text-warm-500" />
            </button>
          </div>

          {/* Messages */}
          <div className="px-5 py-5 min-h-[14rem] flex flex-col gap-3">
            <div className="flex gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="" className="h-4 w-auto mt-1.5 flex-none" />
              <div className="bg-[#f5f3f1] rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
                <p className="type-xs text-black">
                  Hi there! 👋 How can we help you today?
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="" className="h-4 w-auto mt-1.5 flex-none" />
              <div className="bg-[#f5f3f1] rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
                <p className="type-xs text-black">
                  Ask us anything about Osmium, pricing, features, or getting started.
                </p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 rounded-xl bg-[#f5f3f1] px-4 py-3 ring-[0.5px] ring-inset ring-black/[0.06]">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-auto bg-transparent outline-none type-xs text-black placeholder:text-warm-400"
              />
              <button className="size-7 rounded-full bg-black flex items-center justify-center flex-none hover:bg-warm-800 transition-colors">
                <Send className="size-3 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="pointer-events-auto flex items-center gap-3 rounded-full px-4 pl-3 backdrop-blur-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-95"
        style={{
          backgroundColor: "rgba(245,242,239,0.8)",
          height: 52,
          minWidth: "fit-content",
          boxShadow: "rgba(78,50,23,0.04) 0px 6px 16px 0px, rgba(0,0,0,0.1) 0px 0px 0px 1px",
        }}
      >
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Osmium" className="h-5 w-auto" />
        <p className="type-sm font-medium text-black whitespace-nowrap">
          <span className="md:hidden">Help</span>
          <span className="hidden md:inline">Need help?</span>
        </p>
      </button>
    </div>
  );
}
