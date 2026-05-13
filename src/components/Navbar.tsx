import React from 'react';
import { Camera, MapPin, Phone, Instagram, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Locations', href: '/locations' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/#services' },
    { name: 'Packages', href: '/#packages' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-deep-black/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <span className="text-[10px] tracking-[0.3em] uppercase text-royal-gold font-bold">The Authority Hub</span>
          <span className="text-2xl font-serif tracking-tight text-rich-cream group-hover:text-royal-gold transition-colors">
            JAIPUR PRE-WEDDING
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 uppercase text-[11px] tracking-widest font-medium">
          {navLinks.map((link) => (
            link.href.startsWith('/#') || !link.href.startsWith('/') ? (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-royal-gold transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-white/70 hover:text-royal-gold transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          <a 
            href="https://wa.me/918209212476?text=Hi, I would like to inquire about a pre-wedding shoot in Jaipur."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-deep-black transition-all rounded-full font-bold"
          >
            WhatsApp Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={isScrolled ? "text-royal-dark" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-royal-dark" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-deep-black border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              link.href.startsWith('/#') || !link.href.startsWith('/') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-serif text-white hover:text-royal-gold px-2 py-1 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-serif text-white hover:text-royal-gold px-2 py-1 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a 
              href="https://wa.me/918209212476?text=Hi, I would like to book a free consultation via mobile."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-royal-gold text-black py-4 rounded-sm font-bold mt-2 text-center text-xs uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Book Free Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
