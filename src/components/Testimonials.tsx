import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Ananya & Rahul",
    role: "International Couple",
    text: "The experience at Amer Fort was beyond words. We felt like we were filming a Bond movie. The attention to detail from the lighting to the costume curation was world-class.",
    rating: 5,
    location: "Amer Fort, Jaipur",
    image: "https://images.unsplash.com/photo-1590424744295-ff5da84cd57d?q=80&w=2070"
  },
  {
    name: "Sneha & Karan",
    role: "Royal Destination Pack",
    text: "Jaipur Pre Wedding Shoot didn't just take photos; they captured our soul. The drone footage at Jal Mahal is something we watch every single day. Absolute authority in their craft.",
    rating: 5,
    location: "Jal Mahal, Jaipur",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2070"
  },
  {
    name: "Priya & Amit",
    role: "Heritage Enthusiasts",
    text: "They knew hidden spots at Patrika Gate that we couldn't find on any travel blog. The efficiency and timing with the sun were perfect. Truly the best in the city.",
    rating: 5,
    location: "Patrika Gate, Jaipur",
    image: "https://images.unsplash.com/photo-1599689408611-6674ff217e25?q=80&w=2000"
  }
];

export function Testimonials() {
  const [active, setActive] = React.useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-deep-black relative overflow-hidden">
      {/* Decorative large font */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-black text-white/[0.01] select-none pointer-events-none whitespace-nowrap">
        HERITAGE VOICES
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <span className="text-royal-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Kind Words</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white">Client <span className="text-royal-gold italic">Legacy</span></h2>
          </div>
          <Link 
            to="/reviews" 
            className="group flex items-center gap-4 text-white/40 hover:text-royal-gold transition-colors"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">View All Testimonials</span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-royal-gold group-hover:bg-royal-gold group-hover:text-black transition-all">
               <ExternalLink className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image side - Occupies more space now */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[16/9] md:aspect-video lg:aspect-[4/3] overflow-hidden rounded-sm border border-white/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={testimonials[active].image}
                  initial={{ opacity: 0, scale: 1.2, filter: 'grayscale(100%)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'grayscale(0%)' }}
                  exit={{ opacity: 0, scale: 0.9, filter: 'grayscale(100%)' }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Floating Badge */}
              <div className="absolute top-8 left-8 p-4 bg-black/40 backdrop-blur-xl border border-white/10 text-white z-20">
                 <div className="text-[9px] uppercase tracking-widest font-black text-royal-gold mb-1">Authentic Moment</div>
                 <div className="text-xs font-serif italic">{testimonials[active].location}</div>
              </div>

              {/* Navigation Arrows - Integrated into image frame */}
              <div className="absolute bottom-0 right-0 p-8 flex gap-2 z-20">
                <button onClick={prev} className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-royal-gold hover:text-black hover:border-royal-gold transition-all">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button onClick={next} className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-royal-gold hover:text-black hover:border-royal-gold transition-all">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Decorative frame shadow */}
            <div className="absolute -inset-4 border border-royal-gold/10 -z-10 pointer-events-none translate-x-4 translate-y-4" />
          </div>

          {/* Content side */}
          <div className="lg:col-span-5 space-y-10">
            <Quote className="w-20 h-20 text-royal-gold opacity-10 -ml-4" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="flex gap-1.5">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-royal-gold fill-royal-gold" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-3xl font-serif text-white italic leading-[1.6]">
                  "{testimonials[active].text}"
                </p>

                <div className="pt-10 border-t border-white/10">
                   <div className="text-2xl font-serif text-royal-gold">{testimonials[active].name}</div>
                   <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mt-3">
                     {testimonials[active].role}
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-10">
              <a 
                href="https://wa.me/918209212476?text=Hi, I read your client stories and I want to book a shoot with you!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-royal-gold text-black px-10 py-5 rounded-sm font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-royal-gold/10"
              >
                Start Your Royal Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
