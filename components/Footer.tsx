"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, MapPin, Phone, Heart } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const links = [
  { label: "Hakkımızda", href: "#about" },
  { label: "Menü", href: "#menu" },
  { label: "Galeri", href: "#gallery" },
  { label: "Yorumlar", href: "#reviews" },
  { label: "Rezervasyon", href: "#reservation" },
  { label: "İletişim", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080604] border-t border-amber-900/20">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-amber-700/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div
              className="text-2xl font-bold text-gradient-gold mb-2"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Kavurmacı
            </div>
            <div className="text-sm tracking-[0.25em] text-amber-400/60 uppercase mb-5">
              Yakup Usta
            </div>
            <p className="text-sm text-amber-100/40 leading-relaxed max-w-xs">
              1994&apos;ten bu yana geleneksel lezzetleri, modern bir deneyimle sunan
              Sakarya&apos;nın premium kavurma restoranı.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl glass-light border border-amber-900/20 text-amber-400/60 hover:text-amber-400 hover:border-amber-600/40 transition-all duration-300"
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs text-amber-400/60 uppercase tracking-widest mb-5">
              Sayfalar
            </div>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm text-amber-100/40 hover:text-amber-300 transition-colors duration-300"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs text-amber-400/60 uppercase tracking-widest mb-5">
              İletişim
            </div>
            <div className="space-y-4">
              <a
                href="tel:+902641234567"
                className="flex items-center gap-3 text-sm text-amber-100/40 hover:text-amber-300 transition-colors duration-300"
              >
                <Phone size={16} className="text-amber-600" />
                +90 264 XXX XX XX
              </a>
              <div className="flex items-start gap-3 text-sm text-amber-100/40">
                <MapPin size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                TEM Otoyolu Ferizli Çıkışı Üzeri,<br />
                Ferizli / Sakarya
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-amber-900/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-amber-100/25">
            © {new Date().getFullYear()} Kavurmacı Yakup Usta. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-amber-100/20 flex items-center gap-1">
            <Heart size={10} className="text-amber-700" />
            Ferizli, Sakarya
          </p>
        </div>
      </div>
    </footer>
  );
}
