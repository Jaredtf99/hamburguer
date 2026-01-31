"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ingredients = [
    {
        id: "bun-top",
        name: "Pan Pretzel",
        desc: "Salado y Tierno",
        img: "/images/ingredient_bun_1769865901789.png",
    },
    {
        id: "jam",
        name: "Mermelada de Bacon",
        desc: "Ahumada y Dulce",
        img: "/images/ingredient_bacon_jam_1769865915452.png",
    },
    {
        id: "apple",
        name: "Manzana Granny Smith",
        desc: "Ácida y Fresca",
        img: "/images/ingredient_apple_1769865953951.png",
    },
    {
        id: "arugula",
        name: "Rúcula Fresca",
        desc: "Picante y Crujiente",
        img: "/images/ingredient_arugula_1769876950866.png",
    },
    {
        id: "cheese",
        name: "Queso de Cabra",
        desc: "Intenso y Cremoso",
        img: "/images/ingredient_cheese_1769865966924.png",
    },
    {
        id: "meat",
        name: "Carne Angus",
        desc: "Jugosa y Potente",
        img: "/images/ingredient_meat_1769866004231.png",
    },
];

export default function Architecture() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={containerRef} className="relative py-32 bg-black overflow-hidden">
            <div className="container mx-auto px-4 mb-24 text-center">
                <h2 className="text-sm md:text-base font-light tracking-[0.5em] text-gray-400 uppercase">
                    Arquitectura
                </h2>
                <h3 className="text-4xl md:text-6xl font-bold text-white mt-4">
                    Una Torre de Sabor
                </h3>
            </div>

            <div className="relative w-full max-w-lg mx-auto h-[1200px] flex flex-col items-center justify-between">
                {/* Background Line */}
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent origin-top"
                />

                {ingredients.map((item, index) => (
                    <MotionIngredient key={item.id} item={item} index={index} />
                ))}
            </div>
        </section>
    );
}

function MotionIngredient({ item, index }: { item: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex items-center gap-8 w-full"
        >
            <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'order-last text-left'}`}>
                <h4 className="text-2xl font-bold text-white">{item.name}</h4>
                <p className="text-orange-500 font-mono text-xs uppercase mt-1">{item.desc}</p>
            </div>

            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 z-10">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-xl" />
                <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                />
            </div>

            <div className="flex-1" />
        </motion.div>
    )
}
