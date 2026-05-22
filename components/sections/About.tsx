"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Award, Flame, Star } from "lucide-react";

const ABOUT_IMG_1 =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop";
const ABOUT_IMG_2 =
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop";

const features = [
  {
    icon: Flame,
    title: "Geleneksel Tarif",
    desc: "Kuşaktan kuşağa aktarılan geleneksel kavurma tarifleri",
  },
  {
    icon: Award,
    title: "Premium Et",
    desc: "Seçme dana ve kuzu etlerinden hazırlanan özel kavurmalar",
  },
  {
    icon: Star,
    title: "30 Yıl Deneyim",
    desc: "1994'ten bu yana Sakarya'nın vazgeçilmez tat durağı",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0807] via-[#0f0a05] to-[#0a0807]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-700/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[500px] md:h-[600px]"
          >
            <div className="absolute top-0 left-0 w-[65%] h-[75%] rounded-2xl overflow-hidden">
              <Image
                src={ABOUT_IMG_1}
                alt="Restoran iç mekan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] h-[65%] rounded-2xl overflow-hidden border-2 border-amber-700/20">
              <Image
                src={ABOUT_IMG_2}
                alt="Kavurma"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-amber-900/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass px-5 py-4 rounded-2xl text-center border border-amber-600/30"
              style={{ boxShadow: "0 0 40px rgba(245, 158, 11, 0.2)" }}
            >
              <div
                className="text-3xl font-bold text-gradient-gold"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                1994
              </div>
              <div className="text-xs text-amber-400/60 tracking-widest uppercase mt-1">
                Kuruluş Yılı
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-amber-400/70">
                Hikayemiz
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="text-[#f5f0e8]">Ustanın</span>{" "}
              <span className="text-gradient-gold italic">Elinden</span>
              <br />
              <span className="text-[#f5f0e8]">Sofranıza</span>
            </h2>

            <div className="gold-divider mb-8" style={{ marginLeft: 0 }} />

            <p className="text-amber-100/60 leading-relaxed mb-5 text-base">
              1994 yılında Yakup Usta&apos;nın geleneksel tariflerle açtığı bu restoran,
              bugün Sakarya&apos;nın en premium kavurma deneyimini sunuyor. Otoyol
              üzerindeki stratejik konumuyla, İstanbul&apos;dan Ankara&apos;ya uzanan yolcularda
              vazgeçilmez bir durak hâline geldi.
            </p>
            <p className="text-amber-100/50 leading-relaxed mb-10 text-base">
              Sabahın erken saatlerinde başlayan hazırlık süreci, seçme etlerle,
              özel baharatlarla ve Yakup Usta&apos;nın onlarca yıllık deneyimiyle buluşur.
              Her tabak, bir lezzet şölenidir.
            </p>

            {/* Features */}
            <div className="grid gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl glass-light"
                >
                  <div
                    className="p-2 rounded-lg flex-shrink-0"
                    style={{ background: "rgba(245, 158, 11, 0.15)" }}
                  >
                    <f.icon size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <div
                      className="font-semibold text-amber-100 mb-1"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {f.title}
                    </div>
                    <div className="text-sm text-amber-100/50">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
