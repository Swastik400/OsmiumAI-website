"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WebGLBackground } from "@/components/ui/WebGLBackground";

export function Hero() {
  return (
    <section
      className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden selection:bg-brand/30"
      style={{ background: "linear-gradient(to bottom, #fff4e6 0%, #ffe0b2 40%, #ffcc80 70%, #ffcc80 100%)" }}
    >
      {/* Mountain Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] z-0">
        <WebGLBackground />
      </div>
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(to bottom, #fff4e6 0%, rgba(255,224,178,0.7) 45%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-[0.25em] font-semibold mb-6"
          style={{ color: "rgba(100, 55, 20, 0.5)" }}
        >
          India&apos;s AI Exam Strategist
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading leading-[1.05] tracking-tight select-none"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", color: "rgba(80, 40, 10, 0.9)" }}
        >
          We Don&apos;t Guess Exams.
          <br />
          <span style={{ color: "rgba(80, 40, 10, 0.55)" }}>We Predict Them.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-6 max-w-lg text-sm leading-relaxed"
          style={{ color: "rgba(100, 55, 20, 0.5)" }}
        >
          Osmium is your AI exam strategist, built from thousands of past papers,
          trained to predict what&apos;s coming next. Up to 50% of your real exam, decoded.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-8 flex items-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#6b3a1f] text-white px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-[#5a3018] active:scale-[0.98] shadow-lg"
          >
            Get started <ArrowRight size={14} />
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border text-sm font-medium px-6 py-2.5 transition-all duration-300 hover:border-[rgba(100,55,20,0.4)]"
            style={{ borderColor: "rgba(100, 55, 20, 0.2)", color: "rgba(100, 55, 20, 0.6)" }}
          >
            Explore features
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
