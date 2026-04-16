"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface QBankItem {
    question: string;
    answer: string;
    difficulty: "Easy" | "Medium" | "Hard";
}

const QUESTIONS: QBankItem[] = [
    { question: "Who is the primary focus of User-Centric Design?", answer: "The end user  emphasizing their needs, expectations, behaviors, and real-world context to ensure the product is intuitive and meaningful.", difficulty: "Easy" },
    { question: "What is a persona in UCD?", answer: "A fictional character created to represent a user type that might use a product in a similar way.", difficulty: "Easy" },
    { question: "Why is user research important in UCD?", answer: "It helps understand user needs, behaviors, and pain points, ensuring the design addresses real problems and creates meaningful solutions.", difficulty: "Easy" },
    { question: "How does UCD improve usability?", answer: "By focusing on user needs and testing with real users, UCD creates intuitive interfaces that reduce friction and improve satisfaction.", difficulty: "Easy" },
];

const diffColor: Record<string, { text: string; bg: string }> = {
    Easy: { text: "text-green-800", bg: "bg-green-100" },
    Medium: { text: "text-amber-800", bg: "bg-amber-100" },
    Hard: { text: "text-red-800", bg: "bg-red-100" },
};

export function QBankContent() {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <div className="flex-auto overflow-y-auto" style={{ backgroundColor: "#f7f5f3", maxHeight: "24rem" }}>
            <div className="px-5 pt-4 pb-6 space-y-4">
                {QUESTIONS.map((q, i) => {
                    const open = expanded === i;
                    const dc = diffColor[q.difficulty];
                    return (
                        <div key={i} className="bg-white rounded-2xl shadow-sm">
                            <button
                                onClick={() => setExpanded(open ? null : i)}
                                className="w-full text-left px-4 py-3"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-neutral-500 text-[10px]">Question {i + 1}.</span>
                                    <span className={`text-[10px] px-2 py-1 rounded-full ${dc.text} ${dc.bg}`}>{q.difficulty}</span>
                                    <span className="flex-1" />
                                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                                </div>
                                <p className="text-neutral-900 font-semibold text-sm leading-snug mt-2">
                                    {q.question}
                                </p>
                            </button>
                            {open && (
                                <div className="px-4 pb-4">
                                    <hr className="border-dashed border-neutral-200 mb-3" />
                                    <p className="text-neutral-700 text-sm leading-relaxed">
                                        {q.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
