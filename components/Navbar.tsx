"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Menü", href: "#menu" },
  { label: "Galeri", href: "#gallery" },
  { label: "Yorumlar", href: "#reviews" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-amber-900/30 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            className="flex flex-col leading-none"
          >
            <span
              className="text-xl font-bold text-gradient-gold"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Kavurmacı
            </span>
            <span
              className="text-sm tracking-[0.25em] text-amber-400/80 uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Yakup Usta
            </span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-sm text-amber-100/70 hover:text-amber-400 transition-colors duration-300 tracking-wider uppercase font-medium relative group"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+905551234567"
              className="px-5 py-2 rounded-full border border-amber-600/50 text-amber-400 text-sm font-medium hover:bg-amber-600/10 transition-all duration-300"
            >
              Ara
            </a>
            <button
              onClick={() => handleNav("#reservation")}
              className="px-5 py-2 rounded-full text-sm font-medium text-black"
              style={{
                background: "linear-gradient(135deg, #fbbf24, #d97706)",
              }}
            >
              Rezervasyon
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-amber-400 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-5 text-amber-400"
              onClick={() => setOpen(false)}
            >
              <X size={28} />
            </button>
            <div className="text-center mb-6">
              <div
                className="text-3xl font-bold text-gradient-gold"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Kavurmacı Yakup Usta
              </div>
            </div>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNav(link.href)}
                className="text-2xl text-amber-100/80 hover:text-amber-400 transition-colors tracking-wide"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {link.label}
              </motion.button>
            ))}
            <div className="flex gap-4 mt-4">
              <a
                href="tel:+905551234567"
                className="px-6 py-3 rounded-full border border-amber-600/50 text-amber-400 font-medium"
              >
                Ara
              </a>
              <button
                onClick={() => handleNav("#reservation")}
                className="px-6 py-3 rounded-full text-sm font-medium text-black"
                style={{ background: "linear-gradient(135deg, #fbbf24, #d97706)" }}
              >
                Rezervasyon
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
