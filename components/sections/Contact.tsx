"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48152.36!2d30.55!3d40.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzM2LjAiTiAzMMKwMzMnMDAuMCJF!5e0!3m2!1str!2str!4v1717000000000!5m2!1str!2str";

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0a0807]">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-amber-700/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-5" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6">
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400/70">
              Bizi Bulun
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="text-[#f5f0e8]">Konum &</span>{" "}
            <span className="text-gradient-gold italic">İletişim</span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-amber-900/20"
            style={{ height: "420px" }}
          >
            <iframe
              src={mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kavurmacı Yakup Usta Konum"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 pointer-events-none border border-amber-600/10 rounded-2xl" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Address */}
            <div className="p-6 rounded-2xl glass-light border border-amber-900/20">
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-xl flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(245, 158, 11, 0.15)" }}
                >
                  <MapPin size={20} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-amber-400/60 uppercase tracking-wider mb-2">
                    Adres
                  </div>
                  <div
                    className="text-lg font-bold text-amber-100 mb-1"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Ferizli, Sakarya
                  </div>
                  <div className="text-sm text-amber-100/50 leading-relaxed">
                    TEM Otoyolu Ferizli Çıkışı Üzeri, Sakarya / Türkiye
                  </div>
                  <a
                    href="https://maps.google.com/?q=Kavurmacı+Yakup+Usta+Ferizli+Sakarya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-xs text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <Navigation size={12} />
                    Yol Tarifi Al
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+902641234567"
              className="flex items-center gap-4 p-6 rounded-2xl glass-light border border-amber-900/20 hover:border-amber-600/40 transition-all duration-300 group"
            >
              <div
                className="p-3 rounded-xl flex-shrink-0"
                style={{ background: "rgba(245, 158, 11, 0.15)" }}
              >
                <Phone size={20} className="text-amber-400" />
              </div>
              <div>
                <div className="text-xs text-amber-400/60 uppercase tracking-wider mb-1">
                  Telefon
                </div>
                <div
                  className="text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  +90 264 XXX XX XX
                </div>
              </div>
            </a>

            {/* Hours */}
            <div className="p-6 rounded-2xl glass-light border border-amber-900/20">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-3 rounded-xl flex-shrink-0"
                  style={{ background: "rgba(245, 158, 11, 0.15)" }}
                >
                  <Clock size={20} className="text-amber-400" />
                </div>
                <div className="text-xs text-amber-400/60 uppercase tracking-wider">
                  Çalışma Saatleri
                </div>
              </div>
              {[
                { day: "Pzt – Cum", time: "10:00 – 23:00" },
                { day: "Cumartesi", time: "09:00 – 23:30" },
                { day: "Pazar", time: "09:00 – 23:00" },
              ].map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between py-2.5 border-b border-amber-900/15 last:border-0"
                >
                  <span className="text-sm text-amber-100/50">{h.day}</span>
                  <span className="text-sm text-amber-300 font-medium">{h.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
