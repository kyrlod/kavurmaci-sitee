"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const categories = [
  "Kavurmalar",
  "Izgaralar",
  "Kebaplar",
  "Çorbalar",
  "Tatlılar",
  "İçecekler",
];

const menuItems: Record<
  string,
  {
    name: string;
    desc: string;
    price: string;
    recommended?: boolean;
    img: string;
  }[]
> = {
  Kavurmalar: [
    {
      name: "Kuzu Kavurma",
      desc: "Özel baharatlarla közde pişirilen kuzu eti, soğan ve domates",
      price: "₺480",
      recommended: true,
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Dana Kavurma",
      desc: "Seçme dana etinden, geleneksel tarif ile hazırlanan kavurma",
      price: "₺420",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Karışık Kavurma",
      desc: "Dana ve kuzu kavurmanın eşsiz birlikteliği",
      price: "₺450",
      recommended: true,
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Ciğer Kavurma",
      desc: "Taze kuzu ciğeri, tereyağı ve özel baharatlar",
      price: "₺320",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=500&auto=format&fit=crop",
    },
  ],
  Izgaralar: [
    {
      name: "Antrikot",
      desc: "200gr özel kesim antrikot, közde pişirilmiş",
      price: "₺560",
      recommended: true,
      img: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Pirzola",
      desc: "Kuzu pirzola, özel marine ile 12 saat bekletilmiş",
      price: "₺520",
      img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Köfte",
      desc: "El yapımı ızgara köfte, özel baharat karışımı",
      price: "₺280",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Tavuk Izgara",
      desc: "Marine edilmiş tam but tavuk, közde çıtır çıtır",
      price: "₺240",
      img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=500&auto=format&fit=crop",
    },
  ],
  Kebaplar: [
    {
      name: "Adana Kebap",
      desc: "Acılı kıyma kebabı, közde pişirilmiş",
      price: "₺320",
      recommended: true,
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Urfa Kebap",
      desc: "Yavan kıyma kebabı, geleneksel tarif",
      price: "₺300",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Şiş Kebap",
      desc: "Kuzu şiş, özel marine soslu",
      price: "₺380",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Beyti",
      desc: "Lavaşa sarılı özel kıyma, tereyağı ve domates sosu",
      price: "₺350",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=500&auto=format&fit=crop",
    },
  ],
  Çorbalar: [
    {
      name: "İşkembe Çorbası",
      desc: "Geleneksel işkembe çorbası, sarımsaklı sirke",
      price: "₺120",
      recommended: true,
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Paça Çorbası",
      desc: "El yapımı paça çorbası, sabah erken saatlerde",
      price: "₺130",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Mercimek Çorbası",
      desc: "Kremalı kırmızı mercimek, tereyağlı",
      price: "₺80",
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=500&auto=format&fit=crop",
    },
  ],
  Tatlılar: [
    {
      name: "Kazandibi",
      desc: "Ev yapımı kazandibi, hafif karamelizeli",
      price: "₺120",
      recommended: true,
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Sütlaç",
      desc: "Geleneksel fırın sütlaç, tarçın ile",
      price: "₺110",
      img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Baklava",
      desc: "El açması Antep fıstıklı baklava",
      price: "₺150",
      img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=500&auto=format&fit=crop",
    },
  ],
  İçecekler: [
    {
      name: "Ayran",
      desc: "El yapımı köy yoğurdundan taze ayran",
      price: "₺50",
      recommended: true,
      img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Şalgam",
      desc: "Acılı / Acısız doğal şalgam suyu",
      price: "₺60",
      img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Türk Çayı",
      desc: "Demlik çay, sınırsız",
      price: "₺40",
      img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Türk Kahvesi",
      desc: "Orta, az veya sade, lokum ile",
      price: "₺90",
      img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=500&auto=format&fit=crop",
    },
  ],
};

function MenuCard({
  item,
  index,
}: {
  item: (typeof menuItems)[string][0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="menu-card group relative rounded-2xl overflow-hidden bg-dark-card border border-amber-900/20 hover:border-amber-600/40 transition-all duration-500"
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="menu-img object-cover transition-transform duration-700"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#110d08] via-transparent to-transparent" />
        {item.recommended && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-black"
            style={{ background: "linear-gradient(135deg, #fbbf24, #d97706)" }}
          >
            <Star size={10} fill="currentColor" />
            Tavsiye
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-lg font-bold text-[#f5f0e8] mb-2 group-hover:text-amber-300 transition-colors"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {item.name}
        </h3>
        <p className="text-sm text-amber-100/40 leading-relaxed mb-4">{item.desc}</p>
        <div className="flex items-center justify-between">
          <span
            className="text-xl font-bold text-gradient-gold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {item.price}
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ background: "rgba(245, 158, 11, 0.2)" }}
          >
            <span className="text-amber-400 text-lg">+</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [active, setActive] = useState("Kavurmalar");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-[#0a0807]">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-amber-700/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#110d08]/50 to-transparent h-32" />

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
              Lezzet Dünyamız
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="text-gradient-gold italic">Menümüz</span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 mb-10 pb-2 scrollbar-hide justify-start lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "text-black"
                  : "glass border border-amber-900/30 text-amber-100/50 hover:text-amber-300 hover:border-amber-600/40"
              }`}
              style={
                active === cat
                  ? { background: "linear-gradient(135deg, #fbbf24, #d97706)" }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(menuItems[active] || []).map((item, i) => (
            <MenuCard key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-amber-100/30 text-sm mt-10"
        >
          * Fiyatlara KDV dahildir. Menü güncelleme hakkı saklıdır.
        </motion.p>
      </div>
    </section>
  );
}
