"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin, Phone, Utensils } from "lucide-react";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2074&auto=format&fit=crop";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Kavurmacı Yakup Usta premium restoran"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-[#0a0807]/60" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0807]/70 via-transparent to-[#0a0807]/50" />
      </div>

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-600/10 blur-[120px] rounded-full z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          {...fadeUp(0.2)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs tracking-[0.3em] uppercase text-amber-400/80 font-medium">
            Ferizli · Sakarya · Otoyol Üzeri
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          {...fadeUp(0.35)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <span className="text-[#f5f0e8]">Kavurmacı</span>
        </motion.h1>
        <motion.h1
          {...fadeUp(0.45)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold italic leading-tight mb-6"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <span className="text-gradient-gold gold-glow">Yakup Usta</span>
        </motion.h1>

        {/* Divider */}
        <motion.div {...fadeUp(0.55)} className="gold-divider mb-8" />

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.6)}
          className="text-base sm:text-lg text-amber-100/60 max-w-md mx-auto leading-relaxed tracking-wide"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          30 yıllık ustalık ile hazırlanan geleneksel kavurma ve ızgara etlerin
          premium adresi
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.75)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={() => scrollTo("#menu")}
            className="flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold text-sm tracking-wider w-full sm:w-auto justify-center hover:scale-105 transition-transform duration-300"
            style={{
              background: "linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)",
              boxShadow: "0 8px 32px rgba(245, 158, 11, 0.4)",
            }}
          >
            <Utensils size={16} />
            Menüyü Gör
          </button>
          <button
            onClick={() => scrollTo("#reservation")}
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-amber-500/40 text-amber-300 font-semibold text-sm tracking-wider w-full sm:w-auto justify-center hover:bg-amber-500/10 hover:border-amber-400/60 transition-all duration-300 glass"
          >
            <Phone size={16} />
            Rezervasyon
          </button>
          <a
            href="https://maps.google.com/?q=Kavurmacı+Yakup+Usta+Ferizli+Sakarya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-amber-900/40 text-amber-100/50 font-medium text-sm tracking-wider w-full sm:w-auto justify-center hover:text-amber-300 hover:border-amber-700/60 transition-all duration-300"
          >
            <MapPin size={16} />
            Yol Tarifi
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.9)}
          className="flex items-center justify-center gap-8 sm:gap-12 mt-14 pt-10 border-t border-amber-900/20"
        >
          {[
            { value: "30+", label: "Yıllık Deneyim" },
            { value: "500+", label: "Günlük Misafir" },
            { value: "4.9", label: "Google Puanı" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold text-gradient-gold"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-amber-100/40 tracking-wider uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-amber-400/50 hover:text-amber-400 transition-colors group"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Keşfet</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
