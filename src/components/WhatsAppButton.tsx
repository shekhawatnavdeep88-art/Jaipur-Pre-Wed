import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-royal-gold"
      />
      <motion.a
        href="https://wa.me/918209212476?text=Hi, I would like to inquire about a pre-wedding shoot in Jaipur."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group hover:pr-8 transition-all"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold uppercase text-[10px] tracking-widest">
          Inquire Now
        </span>
      </motion.a>
    </div>
  );
}
