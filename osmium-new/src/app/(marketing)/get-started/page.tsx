"use client";

import { useState } from "react";
import Link from "next/link";

const examTypes = [
  "JEE (Main / Advanced)",
  "NEET",
  "CUET",
  "UPSC",
  "CAT",
  "Board Exams (CBSE / State)",
  "Other",
];

const countryCodes = [
  { code: "+91",  country: "India",          flag: "🇮🇳" },
  { code: "+1",   country: "USA / Canada",    flag: "🇺🇸" },
  { code: "+44",  country: "UK",              flag: "🇬🇧" },
  { code: "+61",  country: "Australia",       flag: "🇦🇺" },
  { code: "+971", country: "UAE",             flag: "🇦🇪" },
  { code: "+966", country: "Saudi Arabia",    flag: "🇸🇦" },
  { code: "+65",  country: "Singapore",       flag: "🇸🇬" },
  { code: "+60",  country: "Malaysia",        flag: "🇲🇾" },
  { code: "+64",  country: "New Zealand",     flag: "🇳🇿" },
  { code: "+27",  country: "South Africa",    flag: "🇿🇦" },
  { code: "+49",  country: "Germany",         flag: "🇩🇪" },
  { code: "+33",  country: "France",          flag: "🇫🇷" },
  { code: "+39",  country: "Italy",           flag: "🇮🇹" },
  { code: "+34",  country: "Spain",           flag: "🇪🇸" },
  { code: "+31",  country: "Netherlands",     flag: "🇳🇱" },
  { code: "+46",  country: "Sweden",          flag: "🇸🇪" },
  { code: "+47",  country: "Norway",          flag: "🇳🇴" },
  { code: "+45",  country: "Denmark",         flag: "🇩🇰" },
  { code: "+41",  country: "Switzerland",     flag: "🇨🇭" },
  { code: "+43",  country: "Austria",         flag: "🇦🇹" },
  { code: "+32",  country: "Belgium",         flag: "🇧🇪" },
  { code: "+351", country: "Portugal",        flag: "🇵🇹" },
  { code: "+48",  country: "Poland",          flag: "🇵🇱" },
  { code: "+7",   country: "Russia",          flag: "🇷🇺" },
  { code: "+86",  country: "China",           flag: "🇨🇳" },
  { code: "+81",  country: "Japan",           flag: "🇯🇵" },
  { code: "+82",  country: "South Korea",     flag: "🇰🇷" },
  { code: "+62",  country: "Indonesia",       flag: "🇮🇩" },
  { code: "+63",  country: "Philippines",     flag: "🇵🇭" },
  { code: "+66",  country: "Thailand",        flag: "🇹🇭" },
  { code: "+84",  country: "Vietnam",         flag: "🇻🇳" },
  { code: "+880", country: "Bangladesh",      flag: "🇧🇩" },
  { code: "+92",  country: "Pakistan",        flag: "🇵🇰" },
  { code: "+94",  country: "Sri Lanka",       flag: "🇱🇰" },
  { code: "+977", country: "Nepal",           flag: "🇳🇵" },
  { code: "+20",  country: "Egypt",           flag: "🇪🇬" },
  { code: "+234", country: "Nigeria",         flag: "🇳🇬" },
  { code: "+254", country: "Kenya",           flag: "🇰🇪" },
  { code: "+55",  country: "Brazil",          flag: "🇧🇷" },
  { code: "+52",  country: "Mexico",          flag: "🇲🇽" },
  { code: "+54",  country: "Argentina",       flag: "🇦🇷" },
  { code: "+56",  country: "Chile",           flag: "🇨🇱" },
  { code: "+57",  country: "Colombia",        flag: "🇨🇴" },
];

export default function GetStartedPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    exam: "",
  });
  const [dialCode, setDialCode] = useState("+91");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    let attempts = 0;
    while (attempts < 3) {
      try {
        const res = await fetch(
          "https://5z57jjk428.execute-api.ap-southeast-1.amazonaws.com/prod/waitlist",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...form, phone: `${dialCode}${form.phone}` }),
          }
        );
        if (!res.ok) throw new Error("Server error");
        setSubmitted(true);
        setLoading(false);
        return;
      } catch (err: unknown) {
        attempts++;
        const isNetwork = err instanceof TypeError;
        if (attempts < 3 && isNetwork) {
          await new Promise((r) => setTimeout(r, 1000 * attempts));
          continue;
        }
        setError(
          isNetwork
            ? "Network error — please check your connection and try again."
            : "Something went wrong. Please try again."
        );
      }
    }
    setLoading(false);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row">
      {/* Left  Branding (hidden on mobile) */}
      <div className="relative hidden md:flex w-full md:w-1/2 h-screen flex-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-bg.png"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }}
        />


      </div>

      {/* Right  Waitlist form */}
      <div className="w-full md:w-1/2 h-screen overflow-y-auto flex flex-col justify-center">
        <div className="px-6 sm:px-10 md:px-14 lg:px-16 py-6 md:py-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[60vh]">
              <div className="size-14 rounded-full bg-brand/10 flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="size-7 text-brand">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="type-3xl text-black">You&apos;re on the list!</h2>
              <p className="mt-2 type-sm text-warm-500 max-w-xs">
                We&apos;ll notify you as soon as early access opens. Meanwhile, try Osmium on WhatsApp!
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2 text-sm font-medium active:scale-95 transition-transform"
                >
                  Back to home
                </Link>
                <a
                  href="https://wa.me/919129139145?text=Hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2 text-sm font-medium active:scale-95 transition-transform"
                  style={{ boxShadow: "inset 0 0 12px rgba(0,0,0,0.06), 0px 0px 1px rgba(0,0,0,0.2)" }}
                >
                  Try on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-1.5 mb-6 type-xs text-warm-400 hover:text-black transition-colors cursor-pointer"
              >
                <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
                  <path d="M12.667 8H3.333M7.333 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
              </button>

              <h1 className="type-3xl text-black">Get started with Osmium</h1>
              <p className="mt-2 type-sm text-warm-400 max-w-sm">
                Join the waitlist for early access. We&apos;ll let you know when it&apos;s your turn.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Name */}
                <div>
                  <label className="type-2xs font-medium text-black">
                    Full name <span className="text-brand">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="eg. Rahul Sharma"
                    className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="type-2xs font-medium text-black">
                    Email <span className="text-brand">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="eg. rahul@gmail.com"
                    className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="type-2xs font-medium text-black">
                    WhatsApp number <span className="text-brand">*</span>
                  </label>
                  <div className="flex items-end gap-0 mt-1">
                    {/* Country code dropdown */}
                    <div className="relative flex-none">
                      <select
                        value={dialCode}
                        onChange={(e) => setDialCode(e.target.value)}
                        aria-label="Country code"
                        className="appearance-none bg-transparent border-0 border-b border-warm-200 pb-1.5 pr-5 type-xs text-black outline-none cursor-pointer focus:border-black transition-colors"
                      >
                        {countryCodes.map((c) => (
                          <option key={c.code + c.country} value={c.code}>
                            {c.flag} {c.code} {c.country}
                          </option>
                        ))}
                      </select>
                      <svg className="pointer-events-none absolute right-0 bottom-2 size-3 text-warm-400" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="w-px h-4 bg-warm-200 mb-1.5 mx-2 flex-none" />
                    {/* Number input */}
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value.replace(/\D/g, ""))}
                      placeholder="9876543210"
                      className="flex-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none placeholder:text-warm-300 focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Exam type */}
                <div>
                  <label className="type-2xs font-medium text-black">
                    Preparing for <span className="text-brand">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={form.exam}
                      aria-label="Exam type"
                      onChange={(e) => update("exam", e.target.value)}
                      className="w-full mt-1 pb-1.5 border-0 border-b border-warm-200 bg-transparent type-xs text-black outline-none appearance-none cursor-pointer focus:border-black transition-colors"
                    >
                      <option value="" disabled>Select your exam</option>
                      {examTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <svg className="pointer-events-none absolute right-0 bottom-2 size-3.5 text-warm-400" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  {error && (
                    <p className="text-red-500 type-xs mb-3">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-full bg-[#131313] text-white px-7 py-2.5 text-sm font-medium transition-all duration-300 active:scale-95 hover:bg-warm-800 gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ boxShadow: "inset 0 0 12px rgba(255,255,255,0.15), 0px 0px 2px 0 rgba(0,0,0,0.1)" }}
                  >
                    {loading ? "Joining…" : "Join waitlist"}
                    {!loading && (
                      <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
                        <path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="mt-8 pt-6 border-t border-warm-100">
                <p className="type-2xs text-warm-400">
                  Are you an institute or school?{" "}
                  <Link href="/contact" className="text-brand hover:underline font-medium">
                    Talk to our sales team →
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
