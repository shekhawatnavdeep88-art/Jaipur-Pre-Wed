import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactForm } from '../components/ContactForm';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1598966730333-bddbb58c5458?q=80&w=2070",
    alt: "Cinematic sunset silhouette of a couple at Jal Mahal water palace",
    title: "The Water Palace Silhouette"
  },
  {
    src: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2070",
    alt: "Aerial view of a pre-wedding shoot at the iconic Jal Mahal Jaipur",
    title: "Heritage Horizon"
  },
  {
    src: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=2000",
    alt: "Couple posing in royal ethnic attire amidst Amer Fort's grand architecture",
    title: "Royal Grandeur"
  },
  {
    src: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2000",
    alt: "Close-up portrait of a couple at Hawa Mahal during golden hour",
    title: "Eternal Moments"
  },
  {
    src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070",
    alt: "Candid pre-wedding moment captured at Panna Meena Ka Kund stepwell",
    title: "Symmetrical Love"
  },
  {
    src: "https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=2000",
    alt: "Traditional pre-wedding photography showcasing Jaipur's vibrant culture",
    title: "Vibrant Heritage"
  }
];

export function PortfolioPage() {
  const [selectedIdx, setSelectedIdx] = React.useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + portfolioImages.length) % portfolioImages.length);
    }
  };

  const handleNext = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % portfolioImages.length);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedIdx(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Portfolio | Cinematic Pre Wedding Photoshoot Gallery Jaipur</title>
        <meta name="description" content="View our portfolio of royal and cinematic pre-wedding shoots in Jaipur. Witness the magic we've created for couples at Jaipur's heritage sites." />
      </Helmet>
      
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-royal-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Visual Authority</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">Our <span className="text-royal-gold italic">Gallery</span></h1>
          <p className="text-white/40 text-lg max-w-3xl mx-auto font-light leading-relaxed text-center">
            Every couple has a unique story. Every frame we capture is a testament to that legacy. Explore our cinematic collection of heritage pre-wedding stories.
          </p>
        </div>
      </section>

      <section className="py-20 bg-deep-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioImages.map((img, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 20 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
                className="relative aspect-square overflow-hidden bg-white/5 border border-white/10 group cursor-pointer"
                onClick={() => setSelectedIdx(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View larger image: ${img.title}`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedIdx(idx)}
              >
                <img 
                  src={`${img.src.split('?')[0]}?auto=format&fit=crop&q=80&w=800`} 
                  srcSet={`
                    ${img.src.split('?')[0]}?auto=format&fit=crop&q=80&w=400 400w,
                    ${img.src.split('?')[0]}?auto=format&fit=crop&q=80&w=800 800w,
                    ${img.src.split('?')[0]}?auto=format&fit=crop&q=80&w=1200 1200w
                  `}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 600px"
                  alt={img.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                   <div className="w-10 h-10 rounded-full bg-royal-gold/20 backdrop-blur-md flex items-center justify-center text-royal-gold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Maximize2 className="w-5 h-5" />
                   </div>
                   <div className="text-royal-gold font-bold text-[10px] uppercase tracking-widest border border-royal-gold px-4 py-2 opacity-0 group-hover:opacity-100 transition-all delay-100">
                     View Concept
                   </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Gallery */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 overflow-hidden"
          >
            <button 
              onClick={() => setSelectedIdx(null)}
              className="absolute top-8 right-8 text-white/40 hover:text-royal-gold transition-colors p-2 z-50"
              aria-label="Close Gallery"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex items-center gap-4 text-[10px] font-black tracking-[0.3em] uppercase absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 z-50">
               <span>{selectedIdx + 1}</span>
               <div className="w-12 h-px bg-white/10" />
               <span>{portfolioImages.length}</span>
            </div>

            <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex items-center z-50">
               <button 
                onClick={handlePrev}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-royal-gold hover:border-royal-gold transition-all"
                aria-label="Previous image"
               >
                 <ChevronLeft className="w-6 h-6" />
               </button>
            </div>

            <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex items-center z-50">
               <button 
                onClick={handleNext}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-royal-gold hover:border-royal-gold transition-all"
                aria-label="Next image"
               >
                 <ChevronRight className="w-6 h-6" />
               </button>
            </div>

            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl w-full h-full flex flex-col items-center justify-center gap-8"
            >
              <img 
                src={`${portfolioImages[selectedIdx].src.split('?')[0]}?auto=format&fit=contain&q=80&w=2000`} 
                srcSet={`
                  ${portfolioImages[selectedIdx].src.split('?')[0]}?auto=format&fit=contain&q=80&w=800 800w,
                  ${portfolioImages[selectedIdx].src.split('?')[0]}?auto=format&fit=contain&q=80&w=1400 1400w,
                  ${portfolioImages[selectedIdx].src.split('?')[0]}?auto=format&fit=contain&q=80&w=2000 2000w
                `}
                sizes="100vw"
                alt={portfolioImages[selectedIdx].alt} 
                className="max-w-full max-h-[70vh] object-contain shadow-2xl border border-white/5"
              />
              <div className="text-center space-y-4 max-w-2xl px-6">
                 <span className="text-royal-gold font-bold tracking-[0.5em] uppercase text-[9px] block">Heritage Vision</span>
                 <h2 className="text-3xl md:text-5xl font-serif text-white italic">{portfolioImages[selectedIdx].title}</h2>
                 <p className="text-white/40 text-sm md:text-base font-light italic leading-relaxed">
                   {portfolioImages[selectedIdx].alt}
                 </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-32 bg-royal-gold">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-black mb-8 italic">Ready to be the next masterpiece?</h2>
          <p className="text-black/60 text-lg mb-12 max-w-2xl mx-auto">
            Your love story deserves a royal cinematic treatment. Book your dates now for the upcoming season.
          </p>
          <a 
            href="https://wa.me/918209212476?text=Hi, I want to book my pre-wedding shoot after seeing your portfolio." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-12 py-5 rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
