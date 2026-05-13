import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Packages } from '../components/Packages';
import { ContactForm } from '../components/ContactForm';

export function PackagesPage() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Pricing & Packages | Best Pre Wedding Photography Jaipur Cost</title>
        <meta name="description" content="Affordable and luxury pre-wedding shoot packages in Jaipur. Transparent pricing for cinematic videos and heritage photography starting at ₹25,000." />
      </Helmet>
      
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-royal-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Our Collections</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">Investment & <span className="text-royal-gold italic">Value</span></h1>
          <p className="text-white/40 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            We believe that high-end cinematic storytelling should be accessible. Our packages are designed to provide maximum value while preserving the royal grandeur of your shoot.
          </p>
        </div>
      </section>

      <Packages />

      <section className="py-24 bg-deep-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-4xl font-serif text-white mb-6">Custom Collections</h2>
                   <p className="text-white/40 mb-8 leading-relaxed">
                        Don't see a package that fits your exact needs? We offer bespoke curation for multi-day shoots, destination weddings, and international travel. Our team will work with you to build a custom investment plan.
                   </p>
                   <ul className="space-y-4 mb-10">
                      {['Multi-city tours (Jaipur, Udaipur, Jodhpur)', 'Underwater photography', 'Same-day edit for reception', 'Luxury album printing'].map(item => (
                          <li key={item} className="flex items-center gap-3 text-white/60 text-sm italic font-light">
                             <div className="w-1 h-1 bg-royal-gold rounded-full" />
                             {item}
                          </li>
                      ))}
                   </ul>
                   <a 
                    href="https://wa.me/918209212476?text=Hi, I want to discuss a custom pre-wedding package for a multi-city shoot."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-royal-gold text-black px-10 py-4 rounded-sm font-bold text-[10px] uppercase tracking-[0.2em]"
                   >
                    Consult for Custom Plan
                   </a>
                </div>
                <div className="relative aspect-video bg-white/5 border border-white/10 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072" 
                        alt="Custom Pre Wedding Package Jaipur" 
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
            </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
