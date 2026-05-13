import React from 'react';
import { motion } from 'motion/react';
import { Crown, Film, Video, Palmtree, Map, Share2, Palette, Info } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Services() {
  const services = [
    {
      title: 'Royal Pre Wedding Shoot',
      desc: 'Authentic heritage themes at Jaipur’s majestic forts and palaces with royal costumes.',
      icon: Crown,
      tags: ['Heritage', 'Cinematic']
    },
    {
      title: 'Cinematic Couple Shoot',
      desc: 'Movie-style storytelling with 4K output, professional lighting, and storytelling edits.',
      icon: Film,
      tags: ['4K Video', 'Storytelling']
    },
    {
      title: 'Drone Videography',
      desc: 'Breathtaking aerial views of Jaipur’s skyline and heritage sites for a grand feel.',
      icon: Video,
      tags: ['Aerial', 'Permissions']
    },
    {
      title: 'Luxury Palace Shoot',
      desc: 'Exclusive access to premium heritage hotels and restricted palace areas.',
      icon: Palmtree,
      tags: ['Exclusive', 'VIP Access']
    },
    {
      title: 'Save The Date Reels',
      desc: 'Trendy Invitation reels for Instagram and WhatsApp to announce your big day.',
      icon: Share2,
      tags: ['Social', 'Save-the-date']
    },
    {
      title: 'Outfit & Style Guard',
      desc: 'Expert consultation on costumes, colors, and makeup traditional to Jaipur.',
      icon: Palette,
      tags: ['Styling', 'Curation']
    }
  ];

  return (
    <section id="services" className="py-32 bg-deep-black overflow-hidden relative">
      {/* Decorative Watermark */}
      <div className="absolute top-20 -right-20 text-[15rem] font-serif font-black text-white/[0.02] select-none pointer-events-none leading-none rotate-90">
        AUTHORITY
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-12">
            <span className="text-royal-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Precision <span className="text-royal-gold italic">Craftsmanship</span> <br />
              & Authority
            </h2>
          </div>
          
          <div className="lg:col-span-12">
            <p className="text-white/60 text-xl font-light leading-relaxed max-w-4xl">
              We bridge the gap between photography and fine art. By controlling every variable—from drone permissions to color psychology—we ensure your royal shoot is an unmatched cinematic experience. Each frame is calibrated to provide the best topical authority for your brand.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10 mt-12 bg-white/[0.01]">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 border-r border-b border-white/10 hover:bg-royal-gold/5 transition-all duration-500 group relative overflow-hidden flex flex-col"
            >
              {/* Background glow on hover */}
              <div className="absolute -inset-full bg-gradient-to-tr from-royal-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-45 translate-x-1/2" />

              <div className="text-[10px] text-royal-gold font-black mb-6 tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity flex items-center gap-3">
                <span className="w-8 h-px bg-royal-gold/30" />
                SERVICE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </div>
              
              <h3 className="text-3xl font-serif text-white mb-6 group-hover:text-royal-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow group-hover:text-white/70 transition-colors">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest text-white/30 border border-white/10 px-2 py-1 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="relative">
                 <a 
                   href={`https://wa.me/918209212476?text=Hi, I want to inquire about your ${service.title} services.`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-3 text-royal-gold text-[10px] font-black uppercase tracking-[0.2em] group/link"
                 >
                   Explore Intelligence <Map className="w-3 h-3 group-hover/link:translate-x-2 transition-transform" />
                 </a>
                 <div className="absolute -bottom-2 left-0 w-0 h-px bg-royal-gold group-hover:w-full transition-all duration-500" />
              </div>

              {/* Decorative indexing */}
              <div className="absolute top-0 right-0 w-12 h-12 flex items-start justify-end p-2 overflow-hidden">
                <div className="text-[4rem] font-serif font-black text-white/5 leading-none translate-x-4 -translate-y-4">
                  {idx + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
