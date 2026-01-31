"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const steps = [
    {
        id: 1,
        title: "La Mermelada",
        sub: "Cocción lenta",
        desc: "Reducción lenta de bacon ahumado con un toque de café.",
        img: "/images/prep_bacon_cooking_1769866034304.png",
    },
    {
        id: 2,
        title: "El Marcado",
        sub: "Marcado de manzana",
        desc: "Manzana Granny Smith marcada a fuego vivo para despertar su acidez.",
        img: "/images/prep_apple_grilling_1769866048115.png",
    },
    {
        id: 3,
        title: "La Costra",
        sub: "Reacción de Maillard",
        desc: "Sellado perfecto de la carne Angus para retener sus jugos.",
        img: "/images/prep_meat_searing_1769866063061.png",
    },
    {
        id: 4,
        title: "El Montaje",
        sub: "El Montaje",
        desc: "Equilibrio arquitectónico de sabores y texturas.",
        img: "/images/prep_assembly_1769866075689.png",
    },
];

export default function Preparation() {
    return (
        <section className="bg-black py-20 md:py-40">
            <div className="container mx-auto px-4">
                <div className="mb-20">
                    <h2 className="text-3xl font-light text-white uppercase tracking-[0.2em] mb-4">La Elaboración</h2>
                    <div className="w-24 h-[1px] bg-orange-500" />
                </div>

                <div className="flex flex-col gap-32">
                    {steps.map((step, index) => (
                        <div key={step.id} className="sticky top-20 flex flex-col md:flex-row items-center gap-12 p-8 bg-zinc-900/10 backdrop-blur-3xl border border-white/5 rounded-3xl overflow-hidden">
                            <div className="w-full md:w-1/2 ">
                                <span className="text-8xl font-bold text-white/5 leading-none absolute -top-4 -left-4">{index + 1}</span>
                                <div className="relative z-10">
                                    <span className="text-orange-500 font-mono text-sm uppercase tracking-widest">{step.sub}</span>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">{step.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 relative aspect-video rounded-2xl overflow-hidden group">
                                <Image
                                    src={step.img}
                                    alt={step.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
