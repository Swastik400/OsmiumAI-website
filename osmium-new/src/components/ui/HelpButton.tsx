"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, MessageCircle } from "lucide-react";

export function HelpButton() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  if (!visible && !open) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s, transform 0.5s",
      }}
    >
      {/* Chat panel */}
      <div
        className="pointer-events-auto w-[22rem] rounded-2xl overflow-hidden flex flex-col"
        style={{
          backgroundColor: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
          maxHeight: open ? "28rem" : "0px",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(8px) scale(0.98)",
          transition: "max-height 0.35s ease, opacity 0.25s ease, transform 0.3s ease",
          transformOrigin: "bottom right",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.06] flex-none">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Osmium" className="h-5 w-auto" />
            <p className="type-sm font-semibold text-black leading-tight">Osmium Support</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="size-8 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors"
          >
            <X className="size-4 text-warm-500" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-auto overflow-y-auto scrollbar-none px-5 py-5 flex flex-col gap-4" style={{ minHeight: "16rem" }}>
          {/* Bot message 1 */}
          <div className="flex gap-2.5 max-w-[85%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Osmium" className="h-4 w-auto flex-none mt-1" />
            <div className="flex flex-col gap-1.5">
              <div className="bg-[#f5f3f1] rounded-2xl rounded-tl-sm px-4 py-3">
                <p className="type-xs text-black leading-relaxed">
                  Hi there! 👋 How can we help you today?
                </p>
              </div>
              <div className="bg-[#f5f3f1] rounded-2xl rounded-tl-sm px-4 py-3">
                <p className="type-xs text-black leading-relaxed">
                  Ask us anything about Osmium, pricing, features, or getting started.
                </p>
              </div>
              <p className="type-2xs text-warm-300 px-1">Just now</p>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="flex-none px-4 pb-4 pt-2 border-t border-black/[0.04]">
          <div className="flex items-center gap-2 rounded-xl bg-[#f5f3f1] px-3 py-2.5 ring-[0.5px] ring-inset ring-black/[0.06] focus-within:ring-black/[0.15] transition-all">
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-auto bg-transparent outline-none type-xs text-black placeholder:text-warm-400"
              onKeyDown={(e) => {
                if (e.key === "Enter" && message.trim()) setMessage("");
              }}
            />
            <button
              className={`size-7 rounded-full flex items-center justify-center flex-none transition-all duration-200 ${
                message.trim()
                  ? "bg-black hover:bg-warm-800 scale-100"
                  : "bg-black/20 scale-95"
              }`}
              disabled={!message.trim()}
              onClick={() => message.trim() && setMessage("")}
            >
              <Send className="size-3 text-white" />
            </button>
          </div>
          <p className="type-2xs text-warm-300 text-center mt-2">Powered by Osmium AI</p>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="pointer-events-auto flex items-center gap-2.5 rounded-full px-4 pl-3.5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-95"
        style={{
          backgroundColor: open ? "rgba(0,0,0,0.9)" : "rgba(245,242,239,0.9)",
          height: 48,
          boxShadow: "0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)",
        }}
      >
        {open ? (
          <X className="size-4 text-white" />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Osmium" className="h-5 w-auto" />
          </>
        )}
        <p className={`type-sm font-medium whitespace-nowrap ${open ? "text-white" : "text-black"}`}>
          {open ? (
            <span className="hidden md:inline">Close</span>
          ) : (
            <>
              <span className="md:hidden">Help</span>
              <span className="hidden md:inline">Need help?</span>
            </>
          )}
        </p>
      </button>
    </div>
  );
}
