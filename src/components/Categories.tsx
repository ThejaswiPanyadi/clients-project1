"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import AnimatedSection from "./AnimatedSection";

export default function Categories() {
  return (
    <section id="categories" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span
            className="inline-block text-sm font-semibold text-[#7a9e7e] bg-[#DCE8D5] rounded-full px-4 py-1.5 mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            🧸 Browse by Category
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#3D2B1F] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Shop by Category
          </h2>
          <p
            className="text-lg text-[#7A6358] max-w-xl mx-auto"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Find the perfect handmade creation for every occasion and personality.
          </p>
        </AnimatedSection>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.id} delay={i * 0.08} direction="up">
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 group overflow-hidden"
                style={{ background: cat.bgColor }}
              >
                {/* Subtle inner glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${cat.color}22, transparent 70%)`,
                  }}
                />

                <div
                  className="text-4xl mb-3 relative z-10 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {cat.icon}
                </div>
                <h3
                  className="text-sm font-bold relative z-10"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: cat.color,
                  }}
                >
                  {cat.name}
                </h3>
                <p
                  className="text-xs mt-1.5 leading-snug relative z-10 opacity-75"
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    color: cat.color,
                  }}
                >
                  {cat.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                  style={{ background: cat.color }}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
