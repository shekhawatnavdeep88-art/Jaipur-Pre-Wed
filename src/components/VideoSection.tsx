import React from 'react';
import { Play, Film } from 'lucide-react';
import { motion } from 'motion/react';

export function VideoSection() {
  const videos = [
    {
      id: 'vVfF9V6yVyw',
      title: 'Amer Fort Royal Cinematic',
      location: 'Amer Fort, Jaipur'
    },
    {
      id: 'rX_H-F0a0mE',
      title: 'Heritage Love Story',
      location: 'Patrika Gate, Jaipur'
    },
    {
      id: 'z-nZ8_Y1oYI',
      title: 'The Palace Chronicles',
      location: 'City Palace, Jaipur'
    }
  ];

  return (
    <section id="videos" className="py-32 bg-black overflow-hidden relative">
      {/* Decorative text */}
      <div className="absolute top-10 left-10 text-[10rem] font-serif font-black text-white/[0.03] select-none pointer-events-none rotate-90 origin-top-left translate-y-32">
        CINEMA
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <span className="text-royal-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Motion Pictures</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
            Cinematic <span className="text-royal-gold italic">Storytelling</span>
          </h2>
          <p className="text-white/40 mt-8 max-w-2xl text-lg font-light leading-relaxed">
            Witness the convergence of heritage and motion. Each film is a bespoke production, capturing the soul of Jaipur's architecture and your unique bond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {videos.map((vid, idx) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden bg-white/5 border border-white/10 group-hover:border-royal-gold transition-colors duration-500">
                <iframe
                  className="w-full h-full grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  src={`https://www.youtube.com/embed/${vid.id}?autoplay=0&controls=0&rel=0&modestbranding=1`}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Overlay to catch clicks and redirect to youtube if they want, or just purely for aesthetics */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:border-royal-gold transition-all duration-500">
                    <Play className="w-6 h-6 text-white group-hover:text-royal-gold fill-current" />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-l border-white/10 pl-6 group-hover:border-royal-gold transition-colors">
                <span className="text-[10px] text-royal-gold font-bold uppercase tracking-[0.2em] mb-2 block">
                  {vid.location}
                </span>
                <h3 className="text-xl font-serif text-white group-hover:text-royal-gold transition-colors">
                  {vid.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <a 
            href="https://youtube.com/@JaipurPreWeddingShoot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white/60 hover:text-royal-gold transition-colors group"
          >
            <Film className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Explore Full YouTube Authority</span>
          </a>
        </div>
      </div>
    </section>
  );
}
