"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    id: 1,
    name: "pradithi rai",
    location: "Manglore",
    avatar: "🌸",
    avatarBg: "#FADADD",
    rating: 5,
    text: " Absolutely loved the corchet! 🤍 It's so pretty and the quality is amazing. You can truly see the love and effort behind it. Do check out her page and support her beautiful work! ✨❤️",
    product: "Hair band",
    date: "June 2026",
  },
  {
    id: 2,
    name: "Anjali Reddy",
    location: "Hyderabad",
    avatar: "🧸",
    avatarBg: "#E8E3F8",
    rating: 5,
    text: "The teddy bear plushie is the softest thing I've ever held. My daughter sleeps with it every night. Sandhya packed it so beautifully — felt like opening a luxury gift!",
    product: "Crochet Teddy Bear",
    date: "May 2025",
  },
  {
    id: 3,
    name: "Meera Iyer",
    location: "Chennai",
    avatar: "💐",
    avatarBg: "#DCE8D5",
    rating: 5,
    text: "Got a custom crochet bouquet for my mom's anniversary. She cried happy tears 😭 The attention to detail and the colours Sandhya chose were perfect. 10/10!",
    product: "Custom Bouquet",
    date: "July 2025",
  },
  {
    id: 4,
    name: "Kavya M.",
    location: "Mysuru",
    avatar: "🌼",
    avatarBg: "#fce7f3",
    rating: 5,
    text: "Bought three daisy keychains for me and my friends — we're basically twins now 😂 Tiny, adorable and incredibly well-made for the price. Super fast delivery too!",
    product: "Daisy Keychain",
    date: "June 2025",
  },
  {
    id: 5,
    name: "Sneha Kulkarni",
    location: "Pune",
    avatar: "🎀",
    avatarBg: "#F4E9DC",
    rating: 5,
    text: "The floral headband is gorgeous! Got so many compliments at my sister's mehendi. Sandhya was super responsive on WhatsApp and delivered ahead of schedule. Love it!",
    product: "Floral Headband",
    date: "July 2025",
  },
  {
    id: 6,
    name: "Divya Nair",
    location: "Kochi",
    avatar: "🐰",
    avatarBg: "#dbeafe",
    rating: 5,
    text: "The bunny plush arrived so beautifully wrapped! I ordered it as a baby shower gift and everyone at the party wanted to know where I got it from. Will be back for more!",
    product: "Bunny Plush",
    date: "June 2025",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-[#f59e0b] fill-[#f59e0b]" : "text-[#e5e7eb]"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="testimonials"
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span
            className="inline-block text-sm font-semibold text-[#c984a4] bg-[#FADADD] rounded-full px-4 py-1.5 mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            💛 Happy Customers
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#3D2B1F] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            What They&apos;re Saying
          </h2>
          <p
            className="text-lg text-[#7A6358] max-w-xl mx-auto"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Every review is a little love letter — and they mean the world to us.
          </p>
        </AnimatedSection>

        {/* Stats bar */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-10 mb-14">
          {[
            { value: "100+", label: "Happy Orders" },
            { value: "5.0", label: "Average Rating" },
            { value: "100%", label: "Handmade" },
            { value: "48h", label: "Avg. Response" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-bold gradient-text"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {s.value}
              </div>
              <div
                className="text-sm text-[#A89080] mt-1"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </AnimatedSection>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          {/* Cards row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const isCurrent = i === current;
              return (
                <motion.div
                  key={t.id}
                  animate={{
                    scale: isCurrent ? 1 : 0.97,
                    opacity: isCurrent ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#FFF8F2] rounded-3xl p-6 border border-[#F4E9DC] shadow-sm hover:shadow-md transition-shadow cursor-default relative overflow-hidden group"
                >
                  {/* Decorative gradient */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 opacity-30 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${t.avatarBg} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Top row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm"
                      style={{ background: t.avatarBg }}
                    >
                      {t.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-bold text-[#3D2B1F] truncate"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {t.name}
                      </p>
                      <p
                        className="text-xs text-[#A89080]"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      >
                        {t.location} · {t.date}
                      </p>
                    </div>
                    <StarRating rating={t.rating} />
                  </div>

                  {/* Review text */}
                  <p
                    className="text-sm text-[#7A6358] leading-relaxed mb-4"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Product tag */}
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c984a4] bg-[#FADADD] rounded-full px-3 py-1"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    🧶 {t.product}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                stopAutoPlay();
                startAutoPlay();
              }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                background: i === current ? "#c984a4" : "#FADADD",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Instagram proof strip */}
        <AnimatedSection delay={0.3} className="mt-14">
          <div className="bg-gradient-to-r from-[#FADADD]/60 via-[#E8E3F8]/60 to-[#DCE8D5]/60 rounded-3xl p-8 text-center border border-[#F4E9DC]">
            <p
              className="text-sm font-semibold text-[#7A6358] mb-3"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              📸 Follow us on Instagram for behind-the-scenes peeks & new drops
            </p>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://instagram.com/yarnbloom_crochet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e8748a] to-[#c984a4] text-white font-bold rounded-full px-6 py-2.5 shadow-md hover:shadow-lg transition-shadow text-sm"
              style={{ fontFamily: "Poppins, sans-serif" }}
              aria-label="Follow yarnbloom_crochet on Instagram"
            >
              ✨ @yarnbloom_crochet
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
