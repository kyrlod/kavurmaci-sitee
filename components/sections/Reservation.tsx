"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Send, Users, Calendar, Clock, CheckCircle } from "lucide-react";

const PHONE = "+90 264 XXX XX XX";
const WHATSAPP = "905641234567";

export default function Reservation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    persons: "2",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Merhaba! Rezervasyon yapmak istiyorum.\n\nAd: ${form.name}\nTarih: ${form.date}\nSaat: ${form.time}\nKişi: ${form.persons}\nNot: ${form.note}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl glass-light border border-amber-900/30 focus:border-amber-600/50 focus:outline-none text-amber-100 placeholder-amber-100/25 text-sm transition-all duration-300 bg-transparent";

  return (
    <section id="reservation" className="relative py-24 md:py-32 bg-[#0f0a05]">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-amber-700/20 to-transparent" />
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-800/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6">
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400/70">
              Masa Ayırt
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="text-[#f5f0e8]">Rezervasyon</span>
            <br />
            <span className="text-gradient-gold italic">Yapın</span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8 border border-amber-900/20"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-64 text-center"
              >
                <CheckCircle size={48} className="text-amber-400 mb-4" />
                <h3
                  className="text-2xl font-bold text-amber-100 mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  WhatsApp Açıldı!
                </h3>
                <p className="text-amber-100/50 text-sm">
                  Rezervasyon talebiniz hazırlandı. WhatsApp&apos;tan gönderin.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm text-amber-400 underline"
                >
                  Tekrar Doldur
                </button>
              </motion.div>
            ) : (
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-amber-400/60 mb-2 tracking-wider uppercase">
                      Adınız
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ad Soyad"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-amber-400/60 mb-2 tracking-wider uppercase">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="05XX XXX XXXX"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-amber-400/60 mb-2 tracking-wider uppercase">
                      <Calendar size={12} className="inline mr-1" />
                      Tarih
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-amber-400/60 mb-2 tracking-wider uppercase">
                      <Clock size={12} className="inline mr-1" />
                      Saat
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Saat Seç</option>
                      {["11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"].map(
                        (t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-amber-400/60 mb-2 tracking-wider uppercase">
                    <Users size={12} className="inline mr-1" />
                    Kişi Sayısı
                  </label>
                  <select
                    name="persons"
                    value={form.persons}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {["1","2","3","4","5","6","7","8","10","12","15","20+"].map((n) => (
                      <option key={n} value={n}>
                        {n} Kişi
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-amber-400/60 mb-2 tracking-wider uppercase">
                    Özel Not
                  </label>
                  <textarea
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Özel istek veya notunuzu yazın..."
                    className={inputClass + " resize-none"}
                  />
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)",
                    boxShadow: "0 8px 32px rgba(245, 158, 11, 0.35)",
                  }}
                >
                  <Send size={18} />
                  WhatsApp ile Rezervasyon
                </button>
              </div>
            )}
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            {/* Phone Card */}
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-5 p-6 rounded-2xl glass-light border border-amber-900/20 hover:border-amber-600/40 transition-all duration-300 group"
            >
              <div
                className="p-4 rounded-xl flex-shrink-0"
                style={{ background: "rgba(245, 158, 11, 0.15)" }}
              >
                <Phone size={24} className="text-amber-400" />
              </div>
              <div>
                <div className="text-xs text-amber-400/60 uppercase tracking-wider mb-1">
                  Telefon ile Ara
                </div>
                <div
                  className="text-xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {PHONE}
                </div>
                <div className="text-xs text-amber-100/30 mt-1">7 gün açık · 10:00 – 23:00</div>
              </div>
            </a>

            {/* Working Hours */}
            <div className="p-6 rounded-2xl glass-light border border-amber-900/20">
              <div className="text-xs text-amber-400/60 uppercase tracking-wider mb-4">
                Çalışma Saatleri
              </div>
              {[
                { day: "Pazartesi – Cuma", hours: "10:00 – 23:00" },
                { day: "Cumartesi", hours: "09:00 – 23:30" },
                { day: "Pazar", hours: "09:00 – 23:00" },
              ].map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between py-3 border-b border-amber-900/15 last:border-0"
                >
                  <span className="text-sm text-amber-100/60">{h.day}</span>
                  <span className="text-sm text-amber-300 font-medium">{h.hours}</span>
                </div>
              ))}
            </div>

            {/* Status */}
            <div className="p-5 rounded-2xl glass-light border border-emerald-700/20 flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div>
                <div className="text-sm font-semibold text-emerald-400">Şu an Açık</div>
                <div className="text-xs text-amber-100/40">23:00&apos;a kadar hizmetinizdeyiz</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
