"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Plus, Minus } from "lucide-react";

const BILLING_OPTIONS = ["Monthly", "Annual"] as const;
type Billing = (typeof BILLING_OPTIONS)[number];

interface Plan {
  name: string;
  badge?: string;
  monthlyPrice: number;
  annualPrice: number;
  cta: string;
  ctaHref: string;
  features: string[];
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    cta: "Register",
    ctaHref: "/contact",
    features: [
      "2 mock tests per month",
      "Basic personalization level",
      "Courses & skills access",
      "PDF resources include",
      "AI career guidance",
      "More",
    ],
  },
  {
    name: "Pro",
    badge: "Most Popular",
    monthlyPrice: 499,
    annualPrice: 4990,
    cta: "Subscribe",
    ctaHref: "/contact",
    highlighted: true,
    features: [
      "15 mock tests per month",
      "High personalization level",
      "Full courses & skills access",
      "Complete PDF resources",
      "Advanced AI career guidance",
      "Advance personalized learning",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: 1199,
    annualPrice: 11990,
    cta: "Subscribe",
    ctaHref: "/contact",
    features: [
      "30 mock tests per month",
      "Highest personalization level",
      "Premium courses & skills access",
      "Exclusive PDF resources",
      "Expert AI career guidance",
      "Fully tailored learning experience",
    ],
  },
];

function DottedDivider() {
  return (
    <div className="relative h-[2px]">
      <div
        aria-hidden="true"
        className="absolute left-0 w-full h-[2px]"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 6px)",
          backgroundSize: "6px 100%",
        }}
      />
    </div>
  );
}

function PlanCard({
  plan,
  billing,
  isLast,
}: {
  plan: Plan;
  billing: Billing;
  isLast: boolean;
}) {
  const price = billing === "Monthly" ? plan.monthlyPrice : plan.annualPrice;

  return (
    <div className="relative min-w-[260px] flex-1 p-3 sm:p-4">
      <div className="relative flex flex-col h-full">
        {/* Card header */}
        <div className="relative max-w-full overflow-hidden rounded-[1.25rem] min-h-[12.5rem]">
          <div
            className={`absolute inset-0 w-full h-full ${
              plan.highlighted
                ? "bg-gradient-to-br from-warm-900 via-warm-800 to-warm-950"
                : "bg-gradient-to-br from-warm-100 via-warm-50 to-warm-200"
            }`}
          />
          {plan.name === "Free" && (
            <img
              src="/download.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-[1.25rem]"
            />
          )}
          {plan.name === "Pro" && (
            <img
              src="/pro-bg.jpeg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-[1.25rem]"
            />
          )}
          {plan.name === "Premium" && (
            <img
              src="/premium-bg.jpeg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-[1.25rem]"
            />
          )}
          <div className="relative p-5 flex flex-col justify-between min-h-[12.5rem] z-10">
            <div>
              <h3 className="mb-3 type-3xl text-white">
                {plan.name}
              </h3>
              {plan.badge && (
                <span className="inline-block border border-white/40 px-3 py-1 rounded-lg font-medium type-2xs text-white">
                  {plan.badge}
                </span>
              )}
            </div>
            <div className="text-white">
              <div className="flex items-end gap-1">
                <span className="type-2xl">₹{price}</span>
                <span className="opacity-80 type-xs">
                  {billing === "Monthly" ? "per month" : "per year"}
                </span>
              </div>
            </div>
          </div>
          <div className="absolute pointer-events-none inset-0 ring-[0.5px] ring-black/[0.075] ring-inset z-30 rounded-[1.25rem]" />
        </div>

        {/* CTA */}
        <div className="mt-4 mb-10">
          <Link
            href={plan.ctaHref}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full w-full h-12 type-sm font-medium transition-all duration-300 ease-out active:scale-[0.98] ${
              plan.highlighted
                ? "bg-brand text-white hover:bg-brand-dark"
                : "bg-black text-white hover:bg-warm-800"
            }`}
          >
            {plan.cta}
          </Link>
        </div>

        {/* Features */}
        <div className="flex-1">
          <ul>
            {plan.features.map((feature, i) => (
              <li key={feature}>
                <div className="flex items-start gap-3 py-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check
                      className="h-4 w-4 text-brand"
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="type-xs">{feature}</span>
                </div>
                {i < plan.features.length - 1 && <DottedDivider />}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Vertical divider between cards */}
      {!isLast && (
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-warm-200 hidden lg:block">
          <div
            className="absolute z-20 flex h-5 w-5 items-center justify-center rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ backgroundColor: "#fdfcfc" }}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-warm-300" />
          </div>
          <div
            className="absolute z-20 flex h-5 w-5 items-center justify-center rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
            style={{ backgroundColor: "#fdfcfc" }}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-warm-300" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  const [billing, setBilling] = useState<Billing>("Monthly");

  return (
    <section className="pt-28 sm:pt-36 md:pt-44 pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="type-5xl text-black">
            Simple pricing for every learner
          </h1>
          <p className="mt-4 type-base text-warm-500">
            Start free. Upgrade when you&apos;re ready. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex rounded-full ring-[0.5px] ring-inset ring-black/[0.075] bg-warm-50 p-1">
            {BILLING_OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => setBilling(option)}
                className={`relative rounded-full px-5 py-2 type-sm font-medium transition-all duration-200 ${
                  billing === option
                    ? "bg-white text-black shadow-[0_0_1px_rgba(0,0,0,0.4),0_4px_4px_rgba(0,0,0,0.04)]"
                    : "text-black/50 hover:text-black/70"
                }`}
              >
                {option}
                {option === "Annual" && (
                  <span className="ml-1.5 text-brand type-2xs font-medium">
                    Save 20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="flex flex-col lg:flex-nowrap lg:flex-row">
          {plans.map((plan, i) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              billing={billing}
              isLast={i === plans.length - 1}
            />
          ))}
        </div>

        {/* FAQ Section */}
        <PricingFAQ />
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "What is Osmium?",
    answer:
      "Osmium is an AI-powered education and career guidance platform designed to help students excel in their exams and make informed career decisions through personalized learning paths and expert guidance.",
  },
  {
    question: "How does AI personalization work?",
    answer:
      "Our AI analyzes your performance, learning patterns, and goals to create customized study plans, recommend relevant content, and provide targeted practice questions that adapt to your strengths and weaknesses.",
  },
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. All payments are processed securely through our trusted payment partners.",
  },
  {
    question: "Do you offer student discounts?",
    answer:
      "Yes! We offer special pricing for students. Contact our support team with your student ID to learn about available discounts and educational offers.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely! You can cancel your subscription at any time. You'll continue to have access to premium features until the end of your billing period.",
  },
];

function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="mt-24 pb-12 max-w-3xl mx-auto">
      <h2 className="type-4xl text-black text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-warm-200">
            <button
              onClick={() => toggle(i)}
              className="flex items-center justify-between w-full py-5 text-left gap-4"
            >
              <span className="type-base text-black font-medium">
                {faq.question}
              </span>
              <span className="flex-shrink-0 text-warm-500">
                {openIndex === i ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                openIndex === i ? "max-h-96 pb-5" : "max-h-0"
              }`}
            >
              <p className="type-sm text-warm-500">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
