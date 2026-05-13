import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LocationShowcase() {
  const locations = [
    {
      name: 'Amer Fort',
      tag: 'Royal & Grand',
      img: 'https://images.unsplash.com/photo-1590424744295-ff5da84cd57d?auto=format&fit=crop&q=80&w=800',
      description: 'The epitome of Jaipur heritage. Best for royal traditional shoots with massive stone hallways and golden hour views.'
    },
    {
      name: 'Jal Mahal',
      tag: 'Cinematic Water Palace',
      img: 'https://images.unsplash.com/photo-1599689408611-6674ff217e25?auto=format&fit=crop&q=80&w=800',
      description: 'Stunning palace in the middle of Man Sagar Lake. Perfect for sunrise silhouettes and peaceful couple portraits.'
    },
    {
      name: 'Patrika Gate',
      tag: 'Colorful Arts',
      img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
      description: 'Jaipur’s most Instagrammable entrance. Famous for its vibrant hand-painted arches and symmetrical architecture.'
    },
    {
      name: 'Nahargarh Fort',
      tag: 'Sunset Skyline',
      img: 'https://images.unsplash.com/photo-1524226416824-72535bbf189a?auto=format&fit=crop&q=80&w=800',
      description: 'Offers the best panoramic view of Jaipur city. Ideal for cinematic drone shoots and sunset romantic moments.'
    },
    {
      name: 'City Palace',
      tag: 'Luxury Heritage',
      img: 'https://images.unsplash.com/photo-1616038242814-a6eac7845d88?auto=format&fit=crop&q=80&w=800',
      description: 'A blend of Rajput and Mughal architecture. Home to the famous peacock gates and royal royal courtyards.'
    },
    {
      name: 'Albert Hall',
      tag: 'Victorian Elegance',
      img: 'https://images.unsplash.com/photo-1590050752117-23e933a28c39?auto=format&fit=crop&q=80&w=800',
      description: 'Perfect for night shoots with stunning lighting. Thousands of pigeons add a romantic, whimsical feel to the frames.'
    }
  ];

  return (
    <section id="locations" className="py-24 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-royal-gold font-bold tracking-[0.4em] uppercase text-[10px]">Iconic Backdrops</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mt-4">Heritage Locations</h2>
          <p className="text-white/40 mt-6 max-w-2xl mx-auto italic font-light">
            Every palace in Jaipur tells a cinematic story. Select your stage from the most prestigious heritage sites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y : 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-900 border border-white/10 group-hover:border-royal-gold/50 transition-colors">
                <img 
                  src={`${loc.img.split('?')[0]}?auto=format&fit=crop&q=80&w=800`} 
                  srcSet={`
                    ${loc.img.split('?')[0]}?auto=format&fit=crop&q=80&w=400 400w,
                    ${loc.img.split('?')[0]}?auto=format&fit=crop&q=80&w=800 800w,
                    ${loc.img.split('?')[0]}?auto=format&fit=crop&q=80&w=1200 1200w
                  `}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 600px"
                  alt={`${loc.name} Pre Wedding Shoot Jaipur`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="text-[10px] text-royal-gold font-bold uppercase tracking-[0.2em] mb-3 block opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                    {loc.tag}
                  </span>
                  <h3 className="text-3xl font-serif text-white mb-2">{loc.name}</h3>
                </div>
              </div>
              <div className="mt-8 border-l border-royal-gold/30 pl-6">
                <p className="text-white/40 text-sm mb-4 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                  {loc.description}
                </p>
                <a 
                  href={`https://wa.me/918209212476?text=Hi, I want to inquire about a pre-wedding shoot at ${loc.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-royal-gold text-[10px] font-black uppercase tracking-widest group-hover:gap-5 transition-all"
                >
                  Location Intelligence <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <Link to="/locations" className="inline-block border border-white/20 text-white hover:border-royal-gold hover:text-royal-gold px-12 py-5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all">
              Discover 15+ Dominated Locations
            </Link>
        </div>
      </div>
    </section>
  );
}
