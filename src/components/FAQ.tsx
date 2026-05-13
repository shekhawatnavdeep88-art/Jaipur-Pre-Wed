import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "What is the average cost of a pre-wedding shoot in Jaipur?",
      a: "The average cost of a pre wedding shoot in Jaipur ranges from ₹15,000 to ₹1,50,000 depending on locations, cinematography style, drone usage, editing quality, costumes, and duration. Basic photography packages start low, while cinematic video shoots with luxury locations cost more."
    },
    {
      q: "Which is the best location for a pre-wedding shoot in Jaipur?",
      a: "Amer Fort, Jal Mahal, Nahargarh Fort, Patrika Gate, and Samode Palace are among the most popular and cinematic pre wedding shoot locations in Jaipur. For a 'Royal' feel, Amer Fort is unbeatable. For color, Patrika Gate is best."
    },
    {
      q: "Is drone photography allowed in Jaipur heritage sites?",
      a: "Drone permissions depend on the specific location. Some heritage properties like Amer Fort require prior government approval and fee payment. Private palaces also have their own drone policies. Our team handles all necessary permissions for you."
    },
    {
      q: "Which month is best for a pre-wedding shoot in Jaipur?",
      a: "October to March is considered the best season for pre wedding photography in Jaipur because of the pleasant weather and soft, golden sunlight. Summers (April-June) can be extremely hot, making outdoor shoots challenging."
    },
    {
      q: "How many outfits should we carry for a 1-day shoot?",
      a: "We usually recommend 3 to 4 outfits for a full-day shoot. This allows for variety (Traditional, Semi-Western, and Formal) without spending too much time on garment changes. We also provide outfit consultation based on location colors."
    },
    {
      q: "Do you provide makeup and hair styling services?",
      a: "Yes, we have tie-ups with professional bridal makeup artists in Jaipur who specialize in long-lasting makeup for outdoor shoots. Professional styling ensures you look perfect under cinematic lighting."
    },
    {
      q: "What if it rains on the scheduled shoot day?",
      a: "Jaipur rarely sees heavy rain outside of monsoon (July-August). However, in case of bad weather, we offer flexible rescheduling or shift to indoor luxury palace locations where the shoot can continue uninterrupted."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-deep-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-royal-gold font-bold tracking-[0.3em] uppercase text-[10px]">Knowledge Hub</span>
          <h2 className="text-4xl font-serif text-white mt-4">Expert Intelligence</h2>
          <p className="text-white/40 mt-4 font-light italic">
            Navigating the cinematic landscape of Jaipur.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white/[0.02] border border-white/5 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className={cn(
                  "font-serif text-lg tracking-tight transition-colors duration-300",
                  openIndex === idx ? "text-royal-gold" : "text-white/80 group-hover:text-white"
                )}>
                  {faq.q}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-royal-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white/20 flex-shrink-0 group-hover:text-white/40" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-white/50 text-sm leading-relaxed font-light border-t border-white/5 pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        {/* AEO Schema Script */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a
              }
            }))
          })
        }} />
      </div>
    </section>
  );
}

import { cn } from '@/src/lib/utils';
