"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const instituteTypes = [
  "School (K-12)",
  "Coaching Institute",
  "College / University",
  "EdTech Company",
  "Government Body",
  "Corporate Training",
  "Other",
];

const studentRanges = [
  "Under 500",
  "500 – 2,000",
  "2,000 – 10,000",
  "10,000 – 50,000",
  "50,000+",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    institute: "",
    type: "",
    contact: "",
    designation: "",
    email: "",
    phone: "",
    students: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ━━━ HERO with background ━━━ */}
      <section className="relative pt-28 sm:pt-36 md:pt-44 pb-32 md:pb-44 overflow-hidden">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ref/gmhm1kxxzgd-Background7.jpeg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h1 className="text-balance text-white type-6xl">
                Let&apos;s Connect
              </h1>
              <p className="mt-6 type-base text-white/70 text-pretty max-w-xl">
                Transform education at your institute with AI-powered learning
                solutions. We&apos;re here to discuss how Osmium can enhance
                outcomes for your students.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ CONTACT INFO ROW — pulled up over hero ━━━ */}
      <section className="-mt-20 relative z-10 pb-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Email */}
              <div className="relative isolate overflow-hidden rounded-2xl bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-warm-50">
                    <svg viewBox="0 0 20 20" fill="none" className="size-5 text-black">
                      <path d="M2.5 6.667l6.175 4.117a2.5 2.5 0 002.65 0L17.5 6.667M4.167 15.833h11.666A1.667 1.667 0 0017.5 14.167V5.833A1.667 1.667 0 0015.833 4.167H4.167A1.667 1.667 0 002.5 5.833v8.334a1.667 1.667 0 001.667 1.666z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="type-2xs text-warm-400 font-medium uppercase tracking-wider">Email Us</p>
                    <a href="mailto:partnerships@osmium.co.in" className="type-sm text-black font-medium hover:text-brand transition-colors truncate block">
                      partnerships@osmium.co.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="relative isolate overflow-hidden rounded-2xl bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-warm-50">
                    <svg viewBox="0 0 20 20" fill="none" className="size-5 text-black">
                      <path d="M17.5 14.1v2.5a1.667 1.667 0 01-1.817 1.667 16.492 16.492 0 01-7.191-2.559 16.25 16.25 0 01-5-5 16.492 16.492 0 01-2.559-7.225A1.667 1.667 0 012.6 1.667h2.5A1.667 1.667 0 016.767 3.1a10.7 10.7 0 00.583 2.342 1.667 1.667 0 01-.375 1.758L5.808 8.367a13.333 13.333 0 005 5l1.167-1.167a1.667 1.667 0 011.758-.375 10.7 10.7 0 002.342.583 1.667 1.667 0 011.425 1.692z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="type-2xs text-warm-400 font-medium uppercase tracking-wider">Call Us</p>
                    <a href="tel:+918209199581" className="type-sm text-black font-medium hover:text-brand transition-colors">
                      +91 8209199581
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="relative isolate overflow-hidden rounded-2xl bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-warm-50">
                    <svg viewBox="0 0 20 20" fill="none" className="size-5 text-black">
                      <path d="M7.5 17.5v-5a2.5 2.5 0 015 0v5M3.333 8.333L10 2.5l6.667 5.833V15.833A1.667 1.667 0 0115 17.5H5a1.667 1.667 0 01-1.667-1.667V8.333z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="type-2xs text-warm-400 font-medium uppercase tracking-wider">Follow Us</p>
                    <div className="flex items-center gap-2">
                      <a href="https://www.linkedin.com/company/navchetna/" target="_blank" rel="noopener noreferrer" className="type-sm text-black font-medium hover:text-brand transition-colors">LinkedIn</a>
                      <span className="text-warm-300 type-xs">|</span>
                      <a href="https://www.instagram.com/osmium_ai/" target="_blank" rel="noopener noreferrer" className="type-sm text-black font-medium hover:text-brand transition-colors">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ FORM SECTION ━━━ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="relative isolate overflow-hidden rounded-3xl bg-warm-50">
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-black/[0.075]" />

              <div>
                {/* ── Form side ── */}
                <div className="p-6 sm:p-10 md:p-14">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-16">
                      <div className="size-20 rounded-full bg-brand/10 flex items-center justify-center mb-8">
                        <svg viewBox="0 0 24 24" fill="none" className="size-10 text-brand">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h2 className="type-4xl text-black">
                        Thank you for reaching out!
                      </h2>
                      <p className="mt-4 type-base text-warm-500 max-w-md">
                        We&apos;ve received your partnership request. Our team will
                        review your details and get back to you within 24–48 hours.
                      </p>
                      <Link
                        href="/"
                        className="mt-10 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white active:scale-[0.98] transition-transform duration-300 ease-out hover:bg-warm-900 h-12 px-8 type-base"
                      >
                        Back to home
                      </Link>
                    </div>
                  ) : (
                    <>
                      <div className="mb-10">
                        <h2 className="type-3xl text-black">Partnership Request</h2>
                        <p className="mt-2 type-sm text-warm-500">
                          Fill in your details and we&apos;ll get back to you within 24 hours.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                          {/* Institute Name */}
                          <div className="sm:col-span-2">
                            <label className="block type-xs font-medium text-black mb-1.5">
                              Institute Name <span className="text-brand">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              value={form.institute}
                              onChange={(e) => update("institute", e.target.value)}
                              className="w-full h-11 rounded-lg bg-white border-0 px-4 type-sm text-black outline-none ring-[0.5px] ring-inset ring-black/10 transition-shadow focus:ring-2 focus:ring-black/20 placeholder:text-warm-400"
                              placeholder="Your institute name"
                            />
                          </div>

                          {/* Institute Type */}
                          <div>
                            <label className="block type-xs font-medium text-black mb-1.5">
                              Institute Type <span className="text-brand">*</span>
                            </label>
                            <div className="relative">
                              <select
                                required
                                value={form.type}
                                onChange={(e) => update("type", e.target.value)}
                                className="w-full h-11 rounded-lg bg-white border-0 px-4 type-sm text-black outline-none ring-[0.5px] ring-inset ring-black/10 transition-shadow focus:ring-2 focus:ring-black/20 appearance-none cursor-pointer"
                              >
                                <option value="" disabled>Select Type</option>
                                {instituteTypes.map((t) => (
                                  <option key={t} value={t}>{t}</option>
                                ))}
                              </select>
                              <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-warm-400" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>

                          {/* Contact Person */}
                          <div>
                            <label className="block type-xs font-medium text-black mb-1.5">
                              Contact Person <span className="text-brand">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              value={form.contact}
                              onChange={(e) => update("contact", e.target.value)}
                              className="w-full h-11 rounded-lg bg-white border-0 px-4 type-sm text-black outline-none ring-[0.5px] ring-inset ring-black/10 transition-shadow focus:ring-2 focus:ring-black/20 placeholder:text-warm-400"
                              placeholder="Full name"
                            />
                          </div>

                          {/* Designation */}
                          <div>
                            <label className="block type-xs font-medium text-black mb-1.5">
                              Designation
                            </label>
                            <input
                              type="text"
                              value={form.designation}
                              onChange={(e) => update("designation", e.target.value)}
                              className="w-full h-11 rounded-lg bg-white border-0 px-4 type-sm text-black outline-none ring-[0.5px] ring-inset ring-black/10 transition-shadow focus:ring-2 focus:ring-black/20 placeholder:text-warm-400"
                              placeholder="Principal, Director, etc."
                            />
                          </div>

                          {/* Email */}
                          <div>
                            <label className="block type-xs font-medium text-black mb-1.5">
                              Email Address <span className="text-brand">*</span>
                            </label>
                            <input
                              required
                              type="email"
                              value={form.email}
                              onChange={(e) => update("email", e.target.value)}
                              className="w-full h-11 rounded-lg bg-white border-0 px-4 type-sm text-black outline-none ring-[0.5px] ring-inset ring-black/10 transition-shadow focus:ring-2 focus:ring-black/20 placeholder:text-warm-400"
                              placeholder="you@institute.edu"
                            />
                          </div>

                          {/* Phone */}
                          <div>
                            <label className="block type-xs font-medium text-black mb-1.5">
                              Phone Number <span className="text-brand">*</span>
                            </label>
                            <input
                              required
                              type="tel"
                              value={form.phone}
                              onChange={(e) => update("phone", e.target.value)}
                              className="w-full h-11 rounded-lg bg-white border-0 px-4 type-sm text-black outline-none ring-[0.5px] ring-inset ring-black/10 transition-shadow focus:ring-2 focus:ring-black/20 placeholder:text-warm-400"
                              placeholder="+91 XXXXX XXXXX"
                            />
                          </div>

                          {/* Number of Students */}
                          <div>
                            <label className="block type-xs font-medium text-black mb-1.5">
                              Number of Students
                            </label>
                            <div className="relative">
                              <select
                                value={form.students}
                                onChange={(e) => update("students", e.target.value)}
                                className="w-full h-11 rounded-lg bg-white border-0 px-4 type-sm text-black outline-none ring-[0.5px] ring-inset ring-black/10 transition-shadow focus:ring-2 focus:ring-black/20 appearance-none cursor-pointer"
                              >
                                <option value="" disabled>Select Range</option>
                                {studentRanges.map((r) => (
                                  <option key={r} value={r}>{r}</option>
                                ))}
                              </select>
                              <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-warm-400" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>

                          {/* Location */}
                          <div>
                            <label className="block type-xs font-medium text-black mb-1.5">
                              Location
                            </label>
                            <input
                              type="text"
                              value={form.location}
                              onChange={(e) => update("location", e.target.value)}
                              className="w-full h-11 rounded-lg bg-white border-0 px-4 type-sm text-black outline-none ring-[0.5px] ring-inset ring-black/10 transition-shadow focus:ring-2 focus:ring-black/20 placeholder:text-warm-400"
                              placeholder="City, State"
                            />
                          </div>

                          {/* Message */}
                          <div className="sm:col-span-2">
                            <label className="block type-xs font-medium text-black mb-1.5">
                              Requirements &amp; Goals
                            </label>
                            <textarea
                              rows={4}
                              value={form.message}
                              onChange={(e) => update("message", e.target.value)}
                              className="w-full rounded-lg bg-white border-0 px-4 py-3 type-sm text-black outline-none ring-[0.5px] ring-inset ring-black/10 transition-shadow focus:ring-2 focus:ring-black/20 placeholder:text-warm-400 resize-none"
                              placeholder="Tell us about your specific needs, challenges, and how Osmium can help your institute..."
                            />
                          </div>

                          {/* Submit */}
                          <div className="sm:col-span-2 pt-3">
                            <button
                              type="submit"
                              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white active:scale-[0.98] transition-transform duration-300 ease-out hover:bg-warm-900 w-full sm:w-auto h-12 px-10 type-base font-medium gap-2"
                            >
                              Send Partnership Request
                              <svg viewBox="0 0 16 16" fill="none" className="size-4">
                                <path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                </div>


              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
