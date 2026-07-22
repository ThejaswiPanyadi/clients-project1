"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Share2, MessageCircle, Mail, MapPin, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const contactLinks = [
  {
    icon: Share2,
    label: "Instagram",
    handle: "@yarnbloom_crochet",
    href: "https://instagram.com/yarnbloom_crochet",
    color: "#e8748a",
    bg: "#FADADD",
    desc: "Follow for behind-the-scenes and new drops",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    handle: "Chat with us",
    href: " https://wa.me/+918310385649?text=Hi%20Sandhya!%20I%20saw%20your%20crochet%20creations%20and%20would%20love%20to%20place%20an%20order%20%F0%9F%A7%B6",
    color: "#7a9e7e",
    bg: "#DCE8D5",
    desc: "Fastest way to place a custom order",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "sandhyagowdaaladka@gmail.com",
    href: "mailto:sandhyagowdaaladka@gmail.com",
    color: "#9b7ec8",
    bg: "#E8E3F8",
    desc: "For bulk orders & collaborations",
  },
  {
    icon: MapPin,
    label: "Location",
    handle: "Bengaluru, Karnataka",
    href: "#",
    color: "#c9855a",
    bg: "#F4E9DC",
    desc: "Delivering across India 🇮🇳",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        background:
          "linear-gradient(135deg, #FFF8F2 0%, #FADADD1A 50%, #E8E3F81A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span
            className="inline-block text-sm font-semibold text-[#9b7ec8] bg-[#E8E3F8] rounded-full px-4 py-1.5 mb-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            💌 Get in Touch
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#3D2B1F] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Let&apos;s Connect
          </h2>
          <p
            className="text-lg text-[#7A6358] max-w-xl mx-auto"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Want a custom order, have a question, or just want to say hi? We&apos;d love to hear from you!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact links */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="space-y-4">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-[#F4E9DC] shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                    aria-label={`Contact via ${link.label}`}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: link.bg }}
                    >
                      <Icon size={22} style={{ color: link.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          color: link.color,
                        }}
                      >
                        {link.label}
                      </p>
                      <p
                        className="text-base font-bold text-[#3D2B1F] truncate"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {link.handle}
                      </p>
                      <p
                        className="text-sm text-[#A89080] mt-0.5"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      >
                        {link.desc}
                      </p>
                    </div>
                    <span
                      className="text-[#A89080] group-hover:translate-x-1 transition-transform duration-300 text-lg flex-shrink-0"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Right: Contact form */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#F4E9DC]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      <CheckCircle size={64} className="text-[#7a9e7e] mb-5" />
                    </motion.div>
                    <h3
                      className="text-2xl font-bold text-[#3D2B1F] mb-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Message Sent! 🎉
                    </h3>
                    <p
                      className="text-[#7A6358]"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      Thanks for reaching out! We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", message: "" });
                      }}
                      className="mt-6 text-sm font-semibold text-[#c984a4] hover:text-[#a9607f] transition-colors"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-5"
                    noValidate
                  >
                    <h3
                      className="text-xl font-bold text-[#3D2B1F] mb-6"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Send a Message ✉️
                    </h3>

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-semibold text-[#7A6358] mb-1.5"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Ananya"
                        className="w-full px-4 py-3 rounded-xl border border-[#F4E9DC] bg-[#FFF8F2] text-[#3D2B1F] placeholder-[#C4A898] text-sm focus:outline-none focus:border-[#c984a4] focus:ring-2 focus:ring-[#c984a4]/20 transition-all"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-semibold text-[#7A6358] mb-1.5"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#F4E9DC] bg-[#FFF8F2] text-[#3D2B1F] placeholder-[#C4A898] text-sm focus:outline-none focus:border-[#c984a4] focus:ring-2 focus:ring-[#c984a4]/20 transition-all"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-semibold text-[#7A6358] mb-1.5"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Tell us about your dream crochet piece..."
                        className="w-full px-4 py-3 rounded-xl border border-[#F4E9DC] bg-[#FFF8F2] text-[#3D2B1F] placeholder-[#C4A898] text-sm focus:outline-none focus:border-[#c984a4] focus:ring-2 focus:ring-[#c984a4]/20 transition-all resize-none"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.97 }}
                      className="w-full btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                      aria-label="Send message"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
