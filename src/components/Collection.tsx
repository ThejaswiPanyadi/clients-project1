"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { products } from "@/data/products";
import AnimatedSection from "./AnimatedSection";

const allCategories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function Collection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section id="collection" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span
            className="inline-block text-sm font-semibold text-[#c984a4] bg-[#FADADD] rounded-full px-4 py-1.5 mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            🌸 Handcrafted Collection
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#3D2B1F] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Collection
          </h2>
          <p
            className="text-lg text-[#7A6358] max-w-xl mx-auto"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Every piece is made by hand with premium yarn and lots of love.
          </p>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {allCategories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-[#c984a4] text-white shadow-md shadow-[#c984a4]/30"
                  : "bg-[#FFF8F2] text-[#7A6358] hover:bg-[#FADADD] border border-[#F4E9DC]"
              }`}
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              {cat}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Product grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-base group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#c984a4] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-5">
                  <span
                    className="text-xs font-semibold text-[#c984a4] uppercase tracking-wider"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    {product.category}
                  </span>
                  <h3
                    className="text-lg font-bold text-[#3D2B1F] mt-1 mb-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-sm text-[#7A6358] leading-relaxed line-clamp-2"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    {product.price && (
                      <span
                        className="text-lg font-bold text-[#3D2B1F]"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {product.price}
                      </span>
                    )}
                    <button
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      className="flex items-center gap-1.5 text-sm font-semibold text-[#c984a4] hover:text-[#a9607f] transition-colors group"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                      aria-label={`Enquire about ${product.name}`}
                    >
                      <MessageCircle size={14} className="group-hover:scale-110 transition-transform" />
                      Enquire Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
