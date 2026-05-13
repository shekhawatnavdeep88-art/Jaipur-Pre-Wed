import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export function ReviewsPage() {
  const reviews = [
    {
      name: "Ananya & Rahul",
      text: "The experience at Amer Fort was beyond words. The team managed everything from permissions to lighting. We felt like royalty!",
      rating: 5,
      date: "Oct 2023"
    },
    {
      name: "Sneha & Karan",
      text: "Best decision we made for our wedding. The cinematic video is something we treasure. The quality is international standard.",
      rating: 5,
      date: "Dec 2023"
    },
    {
      name: "Priya & Amit",
      text: "They knew the best spots at Patrika Gate that weren't crowded. Professional, punctual, and very creative.",
      rating: 5,
      date: "Jan 2024"
    }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Reviews & Testimonials | Best Pre Wedding Photographer Jaipur</title>
        <meta name="description" content="Read reviews from couples who experienced the magic of a royal pre-wedding shoot with us in Jaipur. Highly rated for professionalism and cinematic quality." />
      </Helmet>
      
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-royal-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Feedback</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">Client <span className="text-royal-gold italic">Stories</span></h1>
          <p className="text-white/40 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Our true authority comes from the satisfaction of our clients. Discover how we've helped couples immortalize their love in the Pink City.
          </p>
        </div>
      </section>

      <section className="py-20 bg-deep-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {reviews.map((rev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/[0.02] border border-white/5 p-10 relative"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-royal-gold/10" />
                <div className="flex gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-royal-gold fill-royal-gold" />
                  ))}
                </div>
                <p className="text-white/70 text-lg font-light leading-relaxed mb-8 italic">
                  "{rev.text}"
                </p>
                <div className="border-t border-white/5 pt-6">
                   <div className="text-white font-serif text-xl">{rev.name}</div>
                   <div className="text-white/30 text-[10px] uppercase tracking-widest mt-1">{rev.date} shoot</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactForm />
    </div>
  );
}
