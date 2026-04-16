import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HelpButton } from "@/components/ui/HelpButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Osmium  AI-Powered Education & Career Guidance Platform",
  description:
    "We don't guess exams, we predict them. Osmium is your AI exam strategist built from thousands of past papers.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap" rel="stylesheet" />

        {/* ── Critical above-the-fold images ── */}
        <link rel="preload" as="image" href="/logo.png" />
        <link rel="preload" as="image" href="/ref/aws.svg" />
        <link rel="preload" as="image" href="/ref/homeguru.svg" />
        <link rel="preload" as="image" href="/ref/nineone.svg" />

        {/* ── Homepage section images ── */}
        <link rel="preload" as="image" href="/Group 1712.png" />
        <link rel="preload" as="image" href="/Group 1713.png" />
        <link rel="preload" as="image" href="/Group 1708 1.png" />
        <link rel="preload" as="image" href="/AI study mentor chat interface design.png" />
        <link rel="preload" as="image" href="/ref/gmhm1kxxzgd-Background7.jpeg" />
        <link rel="preload" as="image" href="/ref/green.jpeg" />
        <link rel="preload" as="image" href="/ref/redchdw2op-bento-orange-blue-2@3x.jpeg" />
        <link rel="preload" as="image" href="/learn.png" />
        <link rel="preload" as="image" href="/HERO IMAGE.png" />
        <link rel="preload" as="image" href="/Osmium AI and other platforms 1.png" />
        <link rel="preload" as="image" href="/team.jpeg" />
        <link rel="preload" as="image" href="/ref/Group 180.svg" />

        {/* ── Feature showcase images ── */}
        <link rel="preload" as="image" href="/chatbot 2.png" />
        <link rel="preload" as="image" href="/careerPath.png" />
        <link rel="preload" as="image" href="/test attempt.png" />
        <link rel="preload" as="image" href="/iphone mockup.png" />
        <link rel="preload" as="image" href="/mental and career.png" />

        {/* ── About page images ── */}
        <link rel="preload" as="image" href="/ref/qrihua4053-nvida-bg.jpeg" />
        <link rel="preload" as="image" href="/ref/purpleblue.jpeg" />
        <link rel="preload" as="image" href="/team1.jpeg" />
        <link rel="preload" as="image" href="/team2.jpeg" />
        <link rel="preload" as="image" href="/team3.jpeg" />
        <link rel="preload" as="image" href="/team/ayush.jpg" />
        <link rel="preload" as="image" href="/team/varun.jpg" />
        <link rel="preload" as="image" href="/team/swastik.jpg" />
        <link rel="preload" as="image" href="/team/suman.jpg" />
        <link rel="preload" as="image" href="/team/dharaval.jpg" />
        <link rel="preload" as="image" href="/about-bg.jpeg" />

        {/* ── Other page images ── */}
        <link rel="preload" as="image" href="/contact-bg.png" />
        <link rel="preload" as="image" href="/hero-bg.png" />
        <link rel="preload" as="image" href="/download.webp" />
        <link rel="preload" as="image" href="/pro-bg.jpeg" />
        <link rel="preload" as="image" href="/premium-bg.jpeg" />
        <link rel="preload" as="image" href="/free.svg" />
        <link rel="preload" as="image" href="/pro.svg" />
        <link rel="preload" as="image" href="/premium.svg" />
        <link rel="preload" as="image" href="/ref/timeline@3x.png" />
      </head>
      <body className="min-h-screen text-black antialiased" style={{ backgroundColor: '#fdfcfc' }}>
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
        <HelpButton />
      </body>
    </html>
  );
}
