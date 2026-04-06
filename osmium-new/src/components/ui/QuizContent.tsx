"use client";

import { useState } from "react";

interface Question {
    question: string;
    options: { label: string; text: string }[];
    correctIndex: number;
}

const QUESTIONS: Question[] = [
    {
        question: "What is the primary goal of user-centric design?",
        options: [
            { label: "A", text: "Aesthetic perfection" },
            { label: "B", text: "Business scalability" },
            { label: "C", text: "Solving real user problems" },
            { label: "D", text: "Technical optimization" },
        ],
        correctIndex: 2,
    },
    {
        question: "Which step comes first in the UCD process?",
        options: [
            { label: "A", text: "Prototyping" },
            { label: "B", text: "User research" },
            { label: "C", text: "Visual design" },
            { label: "D", text: "Development" },
        ],
        correctIndex: 1,
    },
    {
        question: "What does a persona represent in UCD?",
        options: [
            { label: "A", text: "A real customer" },
            { label: "B", text: "A fictional user archetype" },
            { label: "C", text: "The project manager" },
            { label: "D", text: "A competitor profile" },
        ],
        correctIndex: 1,
    },
    {
        question: "Usability testing is best done during which phase?",
        options: [
            { label: "A", text: "Only after launch" },
            { label: "B", text: "Before any design work" },
            { label: "C", text: "Iteratively throughout design" },
            { label: "D", text: "Only during development" },
        ],
        correctIndex: 2,
    },
    {
        question: "What is cognitive load in UX design?",
        options: [
            { label: "A", text: "Server processing time" },
            { label: "B", text: "Mental effort needed to use a product" },
            { label: "C", text: "Number of pages in an app" },
            { label: "D", text: "Amount of content on screen" },
        ],
        correctIndex: 1,
    },
];

interface QuizContentProps {
    onComplete?: (score: number, total: number, timeSeconds: number, answers: (boolean | null)[]) => void;
}

export function QuizContent({ onComplete }: QuizContentProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));

    const total = QUESTIONS.length;
    const q = QUESTIONS[currentIndex];
    const progress = ((currentIndex + 1) / total) * 100;

    const selectOption = (i: number) => {
        setSelectedOption(i);
        const updated = [...answers];
        updated[currentIndex] = i;
        setAnswers(updated);
    };

    const goNext = () => {
        if (currentIndex < total - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(answers[currentIndex + 1]);
        } else if (onComplete) {
            const score = answers.reduce<number>((acc, a, i) => acc + (a === QUESTIONS[i].correctIndex ? 1 : 0), 0);
            const results = answers.map((a, i) => a === null ? null : a === QUESTIONS[i].correctIndex);
            onComplete(score, total, 0, results);
        }
    };

    const goPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setSelectedOption(answers[currentIndex - 1]);
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex-1 overflow-y-auto px-5 py-4">
                <div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-neutral-900 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <p className="text-neutral-400 type-xs mt-2">
                    Question {currentIndex + 1}/{total}
                </p>

                <h2 className="text-neutral-900 font-medium type-base leading-snug mt-3">
                    {q.question}
                </h2>

                <div className="mt-4 space-y-2.5">
                    {q.options.map((opt, i) => {
                        const isSelected = selectedOption === i;
                        return (
                            <button
                                key={opt.label}
                                onClick={() => selectOption(i)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors text-left ${
                                    isSelected
                                        ? "border-neutral-900 bg-neutral-50"
                                        : "border-neutral-200 hover:border-neutral-300"
                                }`}
                            >
                                <span
                                    className={`w-7 h-7 rounded-full type-xs flex items-center justify-center shrink-0 font-medium ${
                                        isSelected
                                            ? "bg-neutral-900 text-white"
                                            : "bg-neutral-100 text-neutral-500"
                                    }`}
                                >
                                    {opt.label}
                                </span>
                                <span className="text-neutral-900 type-sm">{opt.text}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex gap-2.5 px-5 py-3 border-t border-neutral-100">
                <button
                    onClick={goPrev}
                    disabled={currentIndex === 0}
                    className="flex-1 h-10 rounded-xl border border-neutral-200 type-sm text-neutral-900 hover:bg-neutral-50 transition-colors disabled:opacity-30"
                >
                    Previous
                </button>
                <button
                    onClick={goNext}
                    disabled={selectedOption === null}
                    className="flex-1 h-10 rounded-xl bg-neutral-900 type-sm text-white hover:bg-neutral-800 transition-colors disabled:opacity-40"
                >
                    {currentIndex === total - 1 ? "Finish" : "Next"}
                </button>
            </div>
        </div>
    );
}
