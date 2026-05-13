import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=2000" 
          alt="Royal Pre Wedding Shoot Jaipur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 via-deep-black/40 to-deep-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-6 block">
            Jaipur's Elite Photography Authority
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.05]">
            Best <span className="text-royal-gold italic">Pre Wedding</span> <br />
            Shoot in Jaipur
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Award-winning heritage storytelling. Experience the most <span className="text-white">royal, cinematic & luxury pre wedding photoshoot</span> at Amer Fort and Jal Mahal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/918209212476?text=Hi, I would like to book a free consultation for a royal pre-wedding shoot."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-royal-gold text-deep-black px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-royal-gold/20 flex items-center justify-center"
            >
              Book Free Consultation
            </a>
            <a 
              href="https://wa.me/918209212476?text=Hi, I would like to see the pricing packages for Jaipur pre-wedding shoots."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/20 hover:border-white text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest transition-all text-center"
            >
              View Packages
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-white/60 text-sm font-medium animate-pulse">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-royal-gold" />
              Drone Experts
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-royal-gold" />
              Luxury Palaces
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-royal-gold" />
              Cinematic Reels
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements for visual interest */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs font-bold tracking-widest uppercase">Explore More</span>
        <div className="w-px h-12 bg-gradient-to-b from-royal-gold to-transparent" />
      </div>
    </section>
  );
}
