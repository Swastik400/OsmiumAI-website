"use client";

import { Flag, Check, X } from "lucide-react";

interface QuizResultProps {
    score: number;
    total: number;
    timeSeconds: number;
    answers?: (boolean | null)[];
    onRestart?: () => void;
    onViewSolution?: () => void;
}

export function QuizResult({ score, total, timeSeconds, answers = [], onRestart, onViewSolution }: QuizResultProps) {
    const minutes = Math.floor(timeSeconds / 60).toString().padStart(2, "0");
    const seconds = (timeSeconds % 60).toString().padStart(2, "0");

    return (
        <div className="overflow-y-auto">
            <div className="flex flex-col items-center px-5 py-8">
                <div className="flex items-center gap-2">
                    <Flag className="w-5 h-5 text-neutral-900" />
                    <h1 className="type-2xl font-bold text-neutral-900">
                        Excellent!
                    </h1>
                </div>

                <p className="type-xs text-neutral-400 mt-1">
                    You completed the quiz
                </p>

                <div className="w-full bg-white rounded-2xl p-6 mt-5 flex flex-col items-center ring-[0.5px] ring-inset ring-black/[0.06]">
                    <div className="flex w-full justify-around">
                        <div className="flex flex-col items-center">
                            <span className="type-xs text-neutral-400">Your Score</span>
                            <div className="flex items-baseline mt-1">
                                <span className="text-3xl font-bold text-neutral-900">{score}</span>
                                <span className="type-sm text-neutral-300 ml-1">/{total}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="type-xs text-neutral-400">Your Time</span>
                            <span className="text-3xl font-bold text-neutral-900 mt-1">{minutes}:{seconds}</span>
                        </div>
                    </div>

                    {answers.length > 0 && (
                        <>
                            <span className="type-xs text-neutral-300 mt-5">Your Answers</span>
                            <div className="flex gap-2 mt-3">
                                {answers.map((correct, i) => (
                                    <div
                                        key={i}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                            correct === null
                                                ? "bg-neutral-100"
                                                : correct
                                                  ? "bg-emerald-50 text-emerald-600"
                                                  : "bg-red-50 text-red-500"
                                        }`}
                                    >
                                        {correct === true && <Check className="w-4 h-4" />}
                                        {correct === false && <X className="w-4 h-4" />}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    <div className="flex gap-2.5 w-full mt-6">
                        <button
                            onClick={onRestart}
                            className="flex-1 h-10 rounded-xl border border-neutral-200 type-sm text-neutral-900 hover:bg-neutral-50 transition-colors"
                        >
                            Restart
                        </button>
                        <button
                            onClick={onViewSolution}
                            className="flex-1 h-10 rounded-xl bg-neutral-900 type-sm text-white hover:bg-neutral-800 transition-colors"
                        >
                            View Solution
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
