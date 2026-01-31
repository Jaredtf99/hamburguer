"use client";

import { motion } from "framer-motion";
import { Scale, Flame, Clock, Droplets, Layers, Sparkles } from "lucide-react";

export default function Specs() {
    return (
        <section className="relative min-h-screen bg-black flex items-center justify-center p-8 md:p-32 border-t border-white/5">

            {/* Background radial gradient for subtle depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black pointer-events-none" />

            <div className="max-w-6xl w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-sm font-light tracking-[0.5em] text-orange-500 uppercase mb-4">Especificaciones Técnicas</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Análisis de Composición</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* Primary Card: Angus */}
                    <motion.div
                        className="col-span-1 md:col-span-2 row-span-2 bg-zinc-900/20 border border-white/10 rounded-3xl p-10 flex flex-col justify-between group hover:border-white/20 transition-all duration-500"
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-white/5 rounded-2xl">
                                <Scale className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Núcleo Base</span>
                        </div>

                        <div>
                            <h4 className="text-6xl font-bold text-white mb-2">180<span className="text-2xl text-zinc-500 ml-1">g</span></h4>
                            <h3 className="text-xl text-white font-medium mb-4">Angus Madurado</h3>
                            <div className="w-full bg-white/5 h-[1px] mb-4" />
                            <ul className="text-zinc-400 space-y-2 font-light text-sm">
                                <li className="flex justify-between"><span>Maduración</span> <span className="text-white">45 Días</span></li>
                                <li className="flex justify-between"><span>Ratio de Grasa</span> <span className="text-white">20%</span></li>
                                <li className="flex justify-between"><span>Corte</span> <span className="text-white">Chuck Roll</span></li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Jam Card */}
                    <motion.div
                        className="col-span-1 md:col-span-2 bg-zinc-900/20 border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-500"
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white/5 rounded-2xl">
                                <Clock className="w-6 h-6 text-orange-500" />
                            </div>
                            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Proceso Lento</span>
                        </div>
                        <div>
                            <h4 className="text-4xl font-bold text-white mb-1">4 Horas</h4>
                            <p className="text-zinc-400 text-sm">Tiempo de reducción de la mermelada</p>
                        </div>
                    </motion.div>

                    {/* Apple Card */}
                    <motion.div
                        className="col-span-1 bg-zinc-900/20 border border-white/10 rounded-3xl p-8 flex flex-col gap-4 group hover:border-white/20 transition-all duration-500"
                        whileHover={{ y: -5 }}
                    >
                        <div className="p-3 bg-white/5 rounded-2xl w-fit">
                            <Droplets className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <h4 className="text-lg text-white font-bold">Acidez</h4>
                            <p className="text-zinc-500 text-sm">Granny Smith</p>
                        </div>
                    </motion.div>

                    {/* Cheese Card */}
                    <motion.div
                        className="col-span-1 bg-zinc-900/20 border border-white/10 rounded-3xl p-8 flex flex-col gap-4 group hover:border-white/20 transition-all duration-500"
                        whileHover={{ y: -5 }}
                    >
                        <div className="p-3 bg-white/5 rounded-2xl w-fit">
                            <Layers className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="text-lg text-white font-bold">Textura</h4>
                            <p className="text-zinc-500 text-sm">Queso de Cabra</p>
                        </div>
                    </motion.div>

                    {/* Flavor Profile */}
                    <motion.div
                        className="col-span-1 md:col-span-2 bg-gradient-to-br from-zinc-900/40 to-black border border-white/10 rounded-3xl p-8 flex items-center justify-between group hover:border-white/20 transition-all duration-500"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-orange-500/10 rounded-full">
                                <Sparkles className="w-8 h-8 text-orange-500" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white">Bomba de Umami</h4>
                                <p className="text-zinc-400 text-sm">Equilibrio perfecto de dulce y salado</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
