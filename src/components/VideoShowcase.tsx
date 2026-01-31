"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Maximize2 } from "lucide-react";
import { useRef, useState } from "react";

export default function VideoShowcase() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    }

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
        }
    }

    return (
        <section ref={containerRef} className="relative py-32 bg-black flex flex-col items-center justify-center">
            <motion.div
                style={{ scale, opacity }}
                className="w-full max-w-6xl px-4 relative"
            >
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(255,100,0,0.2)] group">
                    <video
                        ref={videoRef}
                        src="/images/0131.mp4"
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                        onClick={togglePlay}
                    />

                    {/* Overlay Controls */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 pointer-events-none group-hover:bg-black/20">
                        {!isPlaying && (
                            <motion.button
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                onClick={togglePlay}
                                className="pointer-events-auto w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 text-white"
                            >
                                <Play className="w-10 h-10 fill-white ml-2" />
                            </motion.button>
                        )}
                    </div>

                    <div className="absolute bottom-6 right-6 flex gap-4">
                        <button
                            onClick={toggleFullscreen}
                            className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
                        >
                            <Maximize2 className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <h3 className="text-white text-xl font-light tracking-[0.2em] uppercase">Experiencia Visual</h3>
                </div>
            </motion.div>
        </section>
    );
}
