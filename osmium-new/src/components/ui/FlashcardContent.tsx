"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Card {
    question: string;
    answer: string;
}

const CARDS: Card[] = [
    { question: "What is the difference between accuracy and precision?", answer: "Accuracy is how close a measurement is to the true value. Precision is how consistent repeated measurements are with each other." },
    { question: "What does UCD stand for?", answer: "User-Centered Design — a framework that grounds the design process in the needs and behaviors of real users." },
    { question: "What is a wireframe?", answer: "A low-fidelity visual guide that represents the skeletal structure of a page or screen layout." },
    { question: "Define cognitive load in UX.", answer: "The total mental effort required to use a product. Good design minimizes unnecessary cognitive load." },
    { question: "What is an affordance?", answer: "A property of an object that suggests how it can be used — e.g. a button looks pressable." },
];

export function FlashcardContent() {
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const card = CARDS[index];

    const go = (dir: number) => {
        const next = index + dir;
        if (next < 0 || next >= CARDS.length) return;
        setIndex(next);
        setFlipped(false);
    };

    return (
        <div className="flex flex-col items-center" style={{ backgroundColor: "#f7f5f3" }}>
            <div className="flex items-center justify-center w-full px-6 py-5">
                <div className="relative w-full" style={{ maxWidth: "18rem", aspectRatio: "4/5" }}>
                    {/* Back card 2 */}
                    <div className="absolute inset-x-3 top-0 bottom-3 rounded-xl bg-[#d8d8d8]" />
                    {/* Back card 1 */}
                    <div className="absolute inset-x-1.5 top-0 bottom-1.5 rounded-xl bg-[#e8e8e8]" />
                    {/* Main card — 3D flip */}
                    <div
                        className="relative w-full h-full cursor-pointer select-none"
                        style={{ perspective: "800px" }}
                        onClick={() => setFlipped(!flipped)}
                    >
                        <div
                            className="relative w-full h-full transition-transform duration-500"
                            style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                        >
                            {/* Front */}
                            <div
                                className="absolute inset-0 rounded-xl flex flex-col p-5"
                                style={{ backfaceVisibility: "hidden", backgroundColor: "#33342E" }}
                            >
                                <p className="flex-1 font-bold type-base leading-relaxed text-white">{card.question}</p>
                                <hr className="my-3 border-[#4d4d4d]" />
                                <p className="type-xs text-center text-[#888]">Tap to see answer</p>
                            </div>
                            {/* Back */}
                            <div
                                className="absolute inset-0 rounded-xl flex flex-col p-5"
                                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", backgroundColor: "#FFFFFF" }}
                            >
                                <p className="flex-1 font-bold type-base leading-relaxed text-neutral-900">{card.answer}</p>
                                <hr className="my-3 border-neutral-200" />
                                <p className="type-xs text-center text-neutral-400">Tap to see question</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-5 pb-4 pt-1">
                <button
                    onClick={() => go(-1)}
                    disabled={index === 0}
                    className="w-9 h-9 rounded-full bg-neutral-200 flex items-center justify-center hover:bg-neutral-300 transition-colors disabled:opacity-30"
                >
                    <ChevronLeft className="w-4 h-4 text-neutral-900" />
                </button>
                <span className="text-neutral-900 type-sm font-medium">{index + 1}/{CARDS.length}</span>
                <button
                    onClick={() => go(1)}
                    disabled={index === CARDS.length - 1}
                    className="w-9 h-9 rounded-full bg-neutral-200 flex items-center justify-center hover:bg-neutral-300 transition-colors disabled:opacity-30"
                >
                    <ChevronRight className="w-4 h-4 text-neutral-900" />
                </button>
            </div>
        </div>
    );
}
