import React from 'react';
import { Check, Zap, Crown, Camera } from 'lucide-react';
import { motion } from 'motion/react';

export function Packages() {
  const plans = [
    {
      name: 'Essential Spark',
      price: '₹15,000',
      tagline: 'Ideal for minimalist couples',
      features: [
        '3 Hours Shoot',
        '2 Premium Locations',
        '30 High-res Edits',
        'All Raw Images',
        '1 Social Media Reel',
      ],
      icon: Zap,
      recommended: false
    },
    {
      name: 'Cinematic Royal',
      price: '₹45,000',
      tagline: 'Most Popular Choice',
      features: [
        'Full Day Shoot (8h)',
        '4 Iconic Locations',
        '60 High-res Edits',
        'Cinematic Highlight Movie (3-4 mins)',
        'Drone 4K Footage',
        '2 Instagram Reels',
        'Makeup Artist Included'
      ],
      icon: Crown,
      recommended: true
    },
    {
      name: 'Luxury Legacy',
      price: '₹1,25,000',
      tagline: 'The Ultimate Experience',
      features: [
        '2 Days Exclusive Shoot',
        'Unlimited Locations',
        'Hotel Shoot Permissions',
        '100+ Master Edits',
        'Cinematic Documentary (10 mins)',
        '3D Drone Mapping',
        'Premium Costume Access',
        'Leather Bound Photo Album'
      ],
      icon: Camera,
      recommended: false
    }
  ];

  return (
    <section id="packages" className="py-24 bg-deep-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-royal-gold font-bold tracking-[0.4em] uppercase text-[10px]">Investment</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Curated Experiences</h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto font-light leading-relaxed italic">
            Cinematic storytelling shouldn't be a luxury. We offer tailored collections for every vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "relative p-10 flex flex-col h-full border transition-all duration-500",
                plan.recommended 
                  ? "border-royal-gold bg-black shadow-[0_0_50px_-12px_rgba(212,175,55,0.2)] scale-105 z-10" 
                  : "border-white/10 bg-white/[0.02]"
              )}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-royal-gold text-black px-6 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                  Platinum Selection
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif text-white mb-1 tracking-tight">{plan.name}</h3>
                <p className={cn("text-xs uppercase tracking-widest", plan.recommended ? "text-royal-gold font-bold" : "text-white/30")}>
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-10 pt-6 border-t border-white/5">
                <span className="text-4xl font-serif font-bold text-white tracking-tighter">{plan.price}</span>
                <span className="text-[10px] ml-2 text-white/40 uppercase tracking-widest font-medium">starting</span>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map(feat => (
                  <li key={feat} className="flex items-start gap-4 text-sm">
                    <Check className="w-4 h-4 shrink-0 text-royal-gold" />
                    <span className="text-white/60 font-light leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/918209212476?text=Hi, I am interested in the ${plan.name} package for my pre-wedding shoot.`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                "w-full py-5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all text-center",
                plan.recommended 
                  ? "bg-royal-gold text-black hover:bg-white hover:text-black" 
                  : "bg-white/5 border border-white/10 text-white hover:border-royal-gold hover:text-royal-gold"
              )}>
                Secure Your Date
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from '@/src/lib/utils';
