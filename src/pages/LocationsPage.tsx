import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LocationGallery } from '../components/LocationGallery';
import { InteractiveMap } from '../components/InteractiveMap';
import { ContactForm } from '../components/ContactForm';
import { motion } from 'motion/react';

export function LocationsPage() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Iconic Pre Wedding Locations in Jaipur | Amer Fort, Jal Mahal & More</title>
        <meta name="description" content="Discover the most beautiful pre wedding shoot locations in Jaipur. From royal forts to colorful gates, we know every hidden gem for your cinematic shoot." />
      </Helmet>
      
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-royal-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">The Stage</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">Heritage <span className="text-royal-gold italic">Backdrops</span></h1>
          <p className="text-white/40 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Jaipur is not just a city; it's a cinematic set. We have curated the most prestigious locations that offer the perfect blend of royal architecture and timeless romance.
          </p>
        </div>
      </section>

      <LocationGallery />
      <InteractiveMap />
      
      <section className="py-24 bg-deep-black border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif text-white mb-8">Need Exclusive Access?</h2>
            <p className="text-white/60 mb-12">
                Certain palaces and private properties require special permissions and heritage fees. Our team handles all legalities to ensure a seamless shoot.
            </p>
            <a 
                href="https://wa.me/918209212476?text=Hi, I want to inquire about exclusive location permissions in Jaipur." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-royal-gold text-black px-12 py-5 rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all"
            >
                Inquire About Permissions
            </a>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
