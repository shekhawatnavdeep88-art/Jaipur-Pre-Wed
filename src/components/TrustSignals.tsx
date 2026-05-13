import React from 'react';
import { Star, Users, Award, Camera } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustSignals() {
  const stats = [
    { label: 'Happy Couples', value: '2000+', icon: Users, desc: 'Memories captured across India' },
    { label: 'Years Experience', value: '10+', icon: Award, desc: 'Professional heritage experts' },
    { label: 'Cinematic Reels', value: '500+', icon: Camera, desc: 'Social media ready content' },
    { label: 'Google Rating', value: '4.9/5', icon: Star, desc: 'From 1200+ verified reviews' },
  ];

  return (
    <section className="py-24 border-y border-white/10 bg-deep-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-serif text-royal-gold mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
              <p className="text-white/30 text-[11px] mt-2 font-light tracking-wide">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Google Reviews Simulation */}
        <div className="mt-20 pt-16 border-t border-white/5 text-center max-w-4xl mx-auto">
           <div className="flex items-center justify-center gap-4 mb-6">
             <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-deep-black bg-gray-800" />
                ))}
             </div>
             <div className="text-left">
                <div className="text-xs font-bold text-rich-cream tracking-wider">5.0 / 5.0 RATING</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-medium">From 1200+ Verified Google Reviews</div>
             </div>
           </div>
           <p className="text-2xl font-serif text-white/90 leading-relaxed italic">
             "Our pre-wedding shoot at Amer Fort was like something out of a Bollywood movie. The team handled everything from permissions to drone shots seamlessly."
           </p>
           <span className="block mt-6 text-xs font-bold text-royal-gold uppercase tracking-[0.3em]">Neha & Rahul, New Delhi</span>
        </div>
      </div>
    </section>
  );
}
