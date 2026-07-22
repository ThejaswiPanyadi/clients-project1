"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Heart } from "lucide-react";

function Instagram({ size = 24, className = "", style }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Collection", href: "#collection" },
      { label: "Latest Creations", href: "#latest" },
      { label: "Categories", href: "#categories" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#testimonials" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "#about" },
      { label: "Custom Orders", href: "#contact" },
      { label: "Shipping & Care", href: "#contact" },
      { label: "FAQs", href: "#contact" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/yarnbloom_crochet", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/+918310385649", label: "WhatsApp" },
  { icon: Mail, href: "sandhyagowdaaladka@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#3D2B1F] text-white">
      {/* CTA strip */}
      <div
        className="py-16 px-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, #c984a4 0%, #9b7ec8 50%, #6b9fd4 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Want Something Special? 🌸
          </h2>
          <p
            className="text-white/85 text-lg mb-8 max-w-md mx-auto"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Every piece is custom-made with love. Let&apos;s create something
            uniquely yours!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#c984a4] font-bold rounded-full px-7 py-3 shadow-lg hover:shadow-xl transition-all text-sm"
              style={{ fontFamily: "Poppins, sans-serif" }}
              aria-label="Order via WhatsApp"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://instagram.com/yarnbloom_crochet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white font-bold rounded-full px-7 py-3 border border-white/30 hover:bg-white/25 transition-all text-sm"
              style={{ fontFamily: "Poppins, sans-serif" }}
              aria-label="Follow on Instagram"
            >
              <Instagram size={18} />
              Follow on Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🧶</span>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                yarnbloom
                <span className="text-[#c984a4]">_crochet</span>
              </span>
            </div>
            <p
              className="text-white/65 text-sm leading-relaxed max-w-xs mb-6"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Handcrafted with love in Bengaluru, India. Every stitch tells a
              story, every piece is made with heart.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#c984a4] flex items-center justify-center transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4
                className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-white/65 hover:text-white transition-colors duration-200 text-left"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider & bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/40 text-sm text-center sm:text-left"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            © {new Date().getFullYear()} yarnbloom_crochet · All rights reserved
          </p>
          <p
            className="flex items-center gap-1.5 text-white/40 text-sm"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Heart size={14} className="text-[#c984a4] fill-[#c984a4]" />
            </motion.span>{" "}
            by Sandhya Gowda
          </p>
        </div>
      </div>
    </footer>
  );
}
