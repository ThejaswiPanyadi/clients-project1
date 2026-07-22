"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFF8F2 0%, #FADADD22 40%, #E8E3F822 70%, #DCE8D522 100%)",
      }}
      aria-label="Hero section"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #FADADD 0%, #E8E3F8 50%, transparent 70%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />
      <div
        className="absolute bottom-[-50px] left-[-80px] w-[350px] h-[350px] opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #DCE8D5 0%, #F4E9DC 50%, transparent 70%)",
          borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
        }}
      />

      {/* Light Background Brand Logo */}
      <div className="absolute top-[62%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:left-auto md:right-8 lg:right-16 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px] opacity-35 sm:opacity-30 md:opacity-25 pointer-events-none select-none z-0">
        <Image
          src="/images/logo.png"
          alt="Yarnbloom Brand Logo Background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Floating crochet decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Yarn ball 1 */}
        <div
          className="float-animation absolute top-[15%] right-[8%] text-5xl opacity-60"
          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.08))" }}
        >
          🧶
        </div>
        {/* Yarn ball 2 */}
        <div
          className="float-animation-delay absolute top-[55%] right-[15%] text-3xl opacity-40"
          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.06))" }}
        >
          🧶
        </div>
        {/* Flower */}
        <div
          className="float-animation-slow absolute top-[25%] left-[5%] text-4xl opacity-50"
          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.06))" }}
        >
          🌸
        </div>
        {/* Needle */}
        <div
          className="float-animation absolute bottom-[30%] left-[10%] text-3xl opacity-40"
          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.06))" }}
        >
          🪡
        </div>
        {/* Star sparkles */}
        <div className="float-animation-delay absolute top-[40%] left-[3%] text-2xl opacity-50">
          ✨
        </div>
        <div className="float-animation-slow absolute bottom-[20%] right-[5%] text-2xl opacity-40">
          ✨
        </div>
        {/* Hearts */}
        <div className="float-animation absolute top-[70%] right-[25%] text-2xl opacity-35">
          🌿
        </div>
        <div className="float-animation-delay absolute top-[12%] right-[30%] text-xl opacity-30">
          💐
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[#FADADD] rounded-full px-4 py-2 mb-6"
          >
            <span className="text-[#c984a4] text-sm font-semibold"
              style={{ fontFamily: "Nunito, sans-serif" }}>
              ✨ Handmade with Premium Yarn
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#3D2B1F] leading-tight mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Handmade Crochet
            <br />
            <span
              className="gradient-text"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              with Love 🧶
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#7A6358] mb-10 leading-relaxed max-w-xl"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Every stitch is handcrafted with love, creativity, and care.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("collection")}
              className="btn-primary"
              aria-label="Explore the crochet collection"
            >
              🌸 Explore Collection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("about")}
              className="btn-secondary"
              aria-label="Learn about the creator"
            >
              💛 About Me
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-8 mt-14"
          >
            {[
              { value: "100+", label: "Happy Customers" },
              { value: "50+", label: "Unique Designs" },
              { value: "100%", label: "Handmade" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-bold gradient-text"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm text-[#A89080] mt-1"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#FADADD] rounded-full flex items-start justify-center pt-1.5 mx-auto"
        >
          <div className="w-1.5 h-3 bg-[#c984a4] rounded-full" />
        </motion.div>
        <p
          className="text-xs text-[#A89080] mt-2 text-center"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          Scroll down
        </p>
      </motion.div>
    </section>
  );
}
