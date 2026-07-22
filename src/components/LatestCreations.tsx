"use client";

import { motion } from "framer-motion";
import { latestCreations } from "@/data/products";
import AnimatedSection from "./AnimatedSection";

export default function LatestCreations() {
  const topLatest = latestCreations.slice(0, 4);

  return (
    <section
      id="latest"
      className="section-padding"
      style={{
        background:
          "linear-gradient(135deg, #FFF8F2 0%, #FADADD18 50%, #E8E3F818 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span
            className="inline-block text-sm font-semibold text-[#9b7ec8] bg-[#E8E3F8] rounded-full px-4 py-1.5 mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            ✨ Fresh off the hook
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#3D2B1F] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Latest Creations
          </h2>
          <p
            className="text-lg text-[#7A6358] max-w-xl mx-auto"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            The newest additions to our handcrafted family — made fresh, just for you.
          </p>
        </AnimatedSection>

        {/* Featured large card + side cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Featured */}
          {topLatest[0] && (
            <AnimatedSection delay={0.1} direction="left">
              <motion.div
                whileHover={{ y: -6 }}
                className="card-base group cursor-pointer h-full"
              >
                <div className="relative overflow-hidden h-72 sm:h-96">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={topLatest[0].image}
                    alt={topLatest[0].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#c984a4] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    🌟 Just Launched
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest opacity-80"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      {topLatest[0].category}
                    </span>
                    <h3
                      className="text-2xl font-bold mt-1"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {topLatest[0].name}
                    </h3>
                    <p
                      className="text-sm opacity-85 mt-1 line-clamp-2"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      {topLatest[0].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          )}

          {/* Stack of 3 smaller cards */}
          <AnimatedSection delay={0.2} direction="right">
            <div className="flex flex-col gap-5">
              {topLatest.slice(1, 4).map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="card-base group cursor-pointer flex gap-4 p-4"
                >
                  <div className="relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.badge && (
                      <span className="absolute top-1 left-1 bg-[#c984a4] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-xs font-semibold text-[#c984a4] uppercase tracking-wider"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      {product.category}
                    </span>
                    <h3
                      className="text-base font-bold text-[#3D2B1F] mt-0.5 truncate"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-sm text-[#7A6358] mt-1 line-clamp-2"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      {product.description}
                    </p>
                    <span
                      className="text-xs text-[#A89080] mt-1 block"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      Added {new Date(product.dateAdded).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
