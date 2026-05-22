"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mehmet Yılmaz",
    date: "Mayıs 2024",
    rating: 5,
    text: "İstanbul'dan Ankara yolculuğumda durduğum en iyi restoran. Kuzu kavurma inanılmazdı, eti ağzımda eriyordu. Yakup Usta'nın ellerine sağlık!",
    tag: "Google",
  },
  {
    name: "Ayşe Kara",
    date: "Nisan 2024",
    rating: 5,
    text: "Otoyol restoranı olmasına rağmen şehrin en iyi restoranlarıyla yarışabilir. Servis mükemmel, mekan çok temiz ve şık. Kesinlikle tavsiye ederim.",
    tag: "Google",
  },
  {
    name: "Hasan Demir",
    date: "Nisan 2024",
    rating: 5,
    text: "Antrikot ve pirzola muhteşemdi. Her seyahatimde burada mola veriyorum artık. Ailem de çok beğendi. Fiyat/performans açısından da çok iyi.",
    tag: "Google",
  },
  {
    name: "Fatma Çelik",
    date: "Mart 2024",
    rating: 5,
    text: "Kavurma hayatımda yediğim en lezzetli kavurmaydı. Baharatların dengesi, etin yumuşaklığı, sunumu... Her şey mükemmeldi. Tebrikler!",
    tag: "Google",
  },
  {
    name: "Ali Öztürk",
    date: "Mart 2024",
    rating: 5,
    text: "Sakarya'nın en iyi et restoranı diyebilirim. Adana kebap da çok başarılıydı. Personel güleryüzlü ve profesyonel. Tekrar geleceğiz.",
    tag: "Google",
  },
  {
    name: "Zeynep Arslan",
    date: "Şubat 2024",
    rating: 5,
    text: "Yakup Usta'nın karışık kavurması nefis. Mekan çok şık, atmosfer gerçekten premium hissettiriyor. Otoyol üstü olduğunu unuttum adeta.",
    tag: "Google",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-amber-900"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const visible = 3;
  const max = reviews.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-[#0a0807]">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-amber-700/20 to-transparent" />
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-800/5 blur-[150px] rounded-full pointer-events-none" />

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
              Misafir Yorumları
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="text-[#f5f0e8]">Onlar</span>{" "}
            <span className="text-gradient-gold italic">Anlatsın</span>
          </h2>
          <p className="text-amber-100/40 text-sm">
            Google&apos;da 4.9 puan · 800+ değerlendirme
          </p>
          <div className="gold-divider mt-4" />
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {reviews.slice(current, current + visible).map((review, i) => (
            <motion.div
              key={review.name + current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-dark-card border border-amber-900/20 hover:border-amber-600/30 transition-all duration-500 group"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
            >
              <Quote
                size={32}
                className="text-amber-700/20 absolute top-5 right-5 group-hover:text-amber-600/30 transition-colors"
              />
              <StarRating rating={review.rating} />
              <p className="mt-4 mb-5 text-amber-100/60 text-sm leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-amber-900/20">
                <div>
                  <div
                    className="font-semibold text-amber-100 text-sm"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {review.name}
                  </div>
                  <div className="text-xs text-amber-100/30 mt-0.5">{review.date}</div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-amber-900/20 text-amber-400/60">
                  {review.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 rounded-2xl bg-dark-card border border-amber-900/20"
          >
            <Quote size={28} className="text-amber-700/20 float-right" />
            <StarRating rating={reviews[current].rating} />
            <p className="mt-4 mb-5 text-amber-100/60 text-sm leading-relaxed">
              &ldquo;{reviews[current].text}&rdquo;
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-amber-900/20">
              <div>
                <div className="font-semibold text-amber-100 text-sm">
                  {reviews[current].name}
                </div>
                <div className="text-xs text-amber-100/30 mt-0.5">{reviews[current].date}</div>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-amber-900/20 text-amber-400/60">
                {reviews[current].tag}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            disabled={current === 0}
            className="p-3 rounded-full glass border border-amber-900/30 text-amber-400 disabled:opacity-30 hover:border-amber-600/50 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: reviews.length - (visible - 1) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === i ? "bg-amber-400 w-6" : "bg-amber-800/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={current >= max}
            className="p-3 rounded-full glass border border-amber-900/30 text-amber-400 disabled:opacity-30 hover:border-amber-600/50 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
