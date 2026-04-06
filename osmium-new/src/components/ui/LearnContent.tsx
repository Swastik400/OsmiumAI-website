"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown, Play } from "lucide-react";

const VIDEO_ID = "4OVptMIxsT4";

export function LearnContent() {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
        if (isDisliked) setIsDisliked(false);
    };

    const handleDislike = () => {
        setIsDisliked(!isDisliked);
        if (isLiked) setIsLiked(false);
    };

    return (
        <div className="flex-auto overflow-y-auto">
            <div className="p-5 space-y-4">
                <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">
                    {isPlaying ? (
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
                            title="What is User-centered-Design process?"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <button onClick={() => setIsPlaying(true)} className="w-full h-full relative">
                            <img
                                src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                                alt="Video thumbnail"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 m-auto w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                                <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                            </div>
                        </button>
                    )}
                </div>

                {/* Title and Like/Dislike */}
                <div className="flex items-start gap-4">
                    <div className="flex-1">
                        <h2 className="text-gray-900 font-serif italic text-base leading-relaxed">
                            What is User-centered-Design process? Simply understand it
                        </h2>
                    </div>

                    <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-2">
                        <button
                            onClick={handleLike}
                            className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isLiked ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            <ThumbsUp className="w-4 h-4" />
                        </button>

                        <div className="w-px h-4 bg-gray-300 mx-1" />

                        <button
                            onClick={handleDislike}
                            className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isDisliked ? 'bg-red-100 text-red-600' : 'text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            <ThumbsDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Dashed Separator */}
                <div className="border-t-2 border-dashed border-gray-300 my-6" />

                {/* Main Heading */}
                <h1 className="text-gray-900 font-bold text-xl mt-6" style={{ fontFamily: 'Baskervville, serif' }}>
                    User-Centric Design (UCD)
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mt-4">
                    User-Centric Design is a systematic design approach that prioritizes user needs, behaviors, limitations, and contexts at every stage of product development. Design decisions are validated by how effectively they help users achieve their goals, not by visual preference or technical convenience.
                </p>

                {/* Core Principle Section */}
                <h2 className="text-gray-900 font-bold text-xl mt-6" style={{ fontFamily: 'Baskervville, serif' }}>
                    1. Core Principle
                </h2>

                <div className="flex gap-4 mt-3">
                    <div className="w-0.5 bg-gray-400 flex-shrink-0" />
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                        A product is well designed only if it enables users to accomplish their intended tasks efficiently, confidently, and without unnecessary cognitive effort.
                    </p>
                </div>

                {/* Additional Text */}
                <p className="text-gray-600 text-base mt-5">
                    Visual appeal supports usability; it never replaces it.
                </p>

                {/* Bottom spacing */}
                <div className="h-10" />
            </div>
        </div>
    );
}