"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
// import profilePic from "../../public/images/profile.jpeg";

const highlights = [
  {
    icon: "🧶",
    label: "Premium Yarn",
    desc: "Only the softest, highest quality materials are used",
  },
  {
    icon: "💛",
    label: "Made with Love",
    desc: "Every stitch is placed with care and intention",
  },
  {
    icon: "🌱",
    label: "Sustainable",
    desc: "Eco-conscious choices in materials and packaging",
  },
  {
    icon: "✨",
    label: "Unique Designs",
    desc: "Each piece is one-of-a-kind and truly special",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile Card */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Background Blobs */}
              <div
                className="absolute -top-8 -left-8 w-64 h-64 opacity-30 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, #FADADD 0%, #E8E3F8 60%, transparent 80%)",
                  borderRadius:
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              />
              <div
                className="absolute -bottom-6 -right-6 w-48 h-48 opacity-25 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, #DCE8D5 0%, #F4E9DC 60%, transparent 80%)",
                  borderRadius:
                    "40% 60% 70% 30% / 40% 70% 30% 60%",
                }}
              />

              {/* Profile Card */}
              <div className="relative bg-gradient-to-br from-[#FFF8F2] to-[#FADADD]/40 rounded-3xl p-8 shadow-xl border border-[#FADADD]/60">

                {/* Profile Image */}
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FADADD] via-[#E8E3F8] to-[#F4E9DC] p-1 shadow-xl">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                      {/* <Image */}
                        // src=
                        alt="Sandhya Gowda"
                        fill
                        priority
                        className="object-cover"
                      {/* /> */}
                    </div>
                  </div>
                </div>

                {/* Name */}
                <div className="text-center">
                  <h3
                    className="text-2xl font-bold text-[#3D2B1F]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Sandhya Gowdaaa
                  </h3>

                  <p
                    className="text-[#c984a4] font-semibold mt-1"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    Founder & Crochet Artist
                  </p>

                  <p
                    className="text-[#7A6358] mt-4 text-sm leading-relaxed"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    "I started crocheting during lockdown and fell completely
                    in love. Now I get to share that love with the world —
                    one stitch at a time."
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#FADADD]">
                  {[
                    { value: "1+", label: "Years" },
                    { value: "100+", label: "Orders" },
                    { value: "50+", label: "Designs" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div
                        className="text-xl font-bold gradient-text"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {item.value}
                      </div>

                      <div
                        className="text-xs text-[#A89080] mt-1"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Content */}
          <AnimatedSection direction="right" delay={0.1}>
            <span
              className="inline-block text-sm font-semibold text-[#c984a4] bg-[#FADADD] rounded-full px-4 py-1.5 mb-5"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              💛 The Story Behind the Stitches
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold text-[#3D2B1F] mb-6 leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Made with Heart,{" "}
              <span className="gradient-text">
                Stitch by Stitch
              </span>
            </h2>

            <p
              className="text-lg text-[#7A6358] leading-relaxed mb-6"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Crochet Haven was born from a simple love of yarn and the joy of
              creating something beautiful with bare hands. Based in India,
              every piece that leaves our hands carries warmth, creativity,
              and a tiny piece of our heart.
            </p>

            <p
              className="text-base text-[#7A6358] leading-relaxed mb-10"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Whether it's a plushie for your little one, a bouquet that never
              wilts, or a tiny keychain that sparks joy — we put our whole heart
              into every creation.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#FFF8F2] border border-[#F4E9DC] hover:border-[#FADADD] transition-colors group"
                >
                  <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>

                  <div>
                    <p
                      className="text-sm font-bold text-[#3D2B1F]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.label}
                    </p>

                    <p
                      className="text-xs text-[#A89080] mt-0.5 leading-snug"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      {item.desc}
                    </p>
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