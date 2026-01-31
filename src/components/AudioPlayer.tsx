"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-4"
        >
            <audio
                ref={audioRef}
                src="/images/ElevenLabs_2026-01-31T14_33_48_Carmelo - Mature, Mysterious and Clear_pvc_sp96_s36_sb56_se0_b_m2.mp3"
                onEnded={() => setIsPlaying(false)}
            />

            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-white/20 transition-colors group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                <AnimatePresence mode="wait">
                    {isPlaying ? (
                        <motion.div
                            key="pause"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                        >
                            <Pause className="w-6 h-6 fill-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="play"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="ml-1" // Visually center the play icon
                        >
                            <Play className="w-6 h-6 fill-white" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            <motion.button
                onClick={() => {
                    if (audioRef.current) {
                        audioRef.current.currentTime = 0;
                        audioRef.current.play();
                        setIsPlaying(true);
                    }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                title="Reiniciar Audio"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-rotate-ccw"
                >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12" />
                    <path d="M3 3v9h9" />
                </svg>
            </motion.button>

            {/* Sound Wave Visualizer (Fake) */}
            {isPlaying && (
                <div className="hidden md:flex gap-1 h-4 items-center">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [4, 16, 4] }}
                            transition={{
                                repeat: Infinity,
                                duration: 0.5 + Math.random() * 0.5,
                                delay: i * 0.1
                            }}
                            className="w-1 bg-orange-500 rounded-full"
                        />
                    ))}
                </div>
            )}
        </motion.div>
    );
}
