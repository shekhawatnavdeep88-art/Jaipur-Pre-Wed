import React from 'react';
import { motion } from 'motion/react';
import { Expand, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const photos = [
  {
    url: "https://images.unsplash.com/photo-1590424744295-ff5da84cd57d?q=80&w=2070",
    title: "Amer Fort Royal",
    size: "col-span-2 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2070",
    title: "Patrika Arches",
    size: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1599689408611-6674ff217e25?q=80&w=2000",
    title: "Jal Mahal Sunset",
    size: "col-span-1 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1524226416824-72535bbf189a?q=80&w=2000",
    title: "Nahargarh View",
    size: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=2000",
    title: "Palace Interiors",
    size: "col-span-2 row-span-1"
  }
];

export function HomeGallery() {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-royal-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">The Vault</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white">Cinematic <span className="text-royal-gold italic">Legacy</span></h2>
          </div>
          <Link to="/portfolio" className="group flex items-center gap-4 text-white/40 hover:text-white transition-colors">
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Enter Full Portfolio</span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
               <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {photos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${item.size} group relative overflow-hidden bg-white/5 border border-white/5`}
            >
              <img 
                src={`${item.url.split('&w=')[0]}&q=80&w=800`} 
                srcSet={`
                  ${item.url.split('&w=')[0]}&q=80&w=400 400w,
                  ${item.url.split('&w=')[0]}&q=80&w=800 800w,
                  ${item.url.split('&w=')[0]}&q=80&w=1200 1200w
                `}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 400px"
                alt={item.title} 
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                 <span className="text-royal-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{item.title}</span>
                 <div className="h-px bg-royal-gold w-0 group-hover:w-full transition-all duration-700" />
              </div>
              <div className="absolute top-4 right-4 p-3 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                 <Expand className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
