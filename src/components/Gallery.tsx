"use client";

import { motion } from "framer-motion";
import { products } from "@/data/products";
import AnimatedSection from "./AnimatedSection";

// Use product images as gallery items with a masonry layout
const galleryItems = [
  ...products,
  // Duplicate a few for visual richness in the masonry
  products[0],
  products[2],
  products[4],
].slice(0, 9);

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, #FFF8F2 0%, #fce7f322 40%, #FFF8F2 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span
            className="inline-block text-sm font-semibold text-[#e8748a] bg-[#FADADD] rounded-full px-4 py-1.5 mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            📸 Handmade Gallery
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#3D2B1F] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Gallery
          </h2>
          <p
            className="text-lg text-[#7A6358] max-w-xl mx-auto"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            A peek into our world of yarn, stitches, and endless creativity.
          </p>
        </AnimatedSection>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={`${item.id}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="masonry-item group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                style={{
                  aspectRatio: i % 3 === 0 ? "4/5" : i % 3 === 1 ? "1/1" : "4/3",
                  objectFit: "cover",
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p
                    className="text-white text-xs font-semibold uppercase tracking-wider opacity-80"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    {item.category}
                  </p>
                  <h3
                    className="text-white text-base font-bold mt-0.5"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
