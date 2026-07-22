"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "Latest", href: "#latest" },
  { label: "Categories", href: "#categories" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-sm" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group"
              aria-label="Go to home"
            >
              <div className="relative w-8 h-8 md:w-9 md:h-9 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Yarnbloom Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span
                className="font-heading text-xl font-700 text-[#3D2B1F]"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                yarnbloom{" "}
                <span
                  className="text-[#c984a4]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  _crochet
                </span>
              </span>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-[#FADADD] text-[#c984a4]"
                          : "text-[#7A6358] hover:text-[#3D2B1F] hover:bg-[#F4E9DC]"
                      }`}
                      style={{ fontFamily: "Nunito, sans-serif" }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-xl text-[#7A6358] hover:bg-[#F4E9DC] transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#FFF8F2] shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-[#F4E9DC]">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/logo.png"
                    alt="Yarnbloom Logo"
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                  <span
                    className="text-lg font-bold text-[#3D2B1F]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    yarnbloom_crochet
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-xl text-[#7A6358] hover:bg-[#F4E9DC]"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="p-5" aria-label="Mobile navigation">
                <ul className="space-y-2" role="list">
                  {navLinks.map((link, i) => {
                    const isActive =
                      activeSection === link.href.replace("#", "");
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <button
                          onClick={() => handleNavClick(link.href)}
                          className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all ${
                            isActive
                              ? "bg-[#FADADD] text-[#c984a4]"
                              : "text-[#7A6358] hover:bg-[#F4E9DC] hover:text-[#3D2B1F]"
                          }`}
                          style={{ fontFamily: "Nunito, sans-serif" }}
                        >
                          {link.label}
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
