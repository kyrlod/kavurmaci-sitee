"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "905641234567";
const MESSAGE = "Merhaba! Rezervasyon yapmak istiyorum.";

export default function WhatsAppFloat() {
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişim"
      className="whatsapp-float flex items-center gap-3 px-4 py-3 rounded-full shadow-2xl group"
      style={{
        background: "linear-gradient(135deg, #25d366, #128c7e)",
        boxShadow: "0 8px 32px rgba(37, 211, 102, 0.4)",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 4 }}
      >
        <MessageCircle size={22} className="text-white fill-white" />
      </motion.div>
      <span className="text-white text-sm font-semibold hidden sm:block">
        Rezervasyon
      </span>
    </motion.a>
  );
}
