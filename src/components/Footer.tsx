import React from 'react';
import { Camera, MapPin, Mail, Phone, ChevronRight, Instagram, Youtube, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-deep-black text-white pt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center md:text-left">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-3 group">
              <div className="w-10 h-10 bg-royal-gold rounded-sm flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                <Camera className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] tracking-[0.3em] uppercase text-royal-gold font-bold">Authority</span>
                 <span className="text-xl font-serif tracking-tight">JAIPUR PRE-WEDDING</span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Jaipur's leading photography hub specializing in royal heritage storytelling and cinematic excellence since 2014.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/jaipurpreweddingshoot/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-royal-gold transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://youtube.com/@JaipurPreWeddingShoot" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-royal-gold transition-colors"><Youtube className="w-4 h-4" /></a>
              <a href="https://facebook.com/jaipurpreweddingshoot" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-royal-gold transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
          
          {/* Directory */}
          <div>
            <h4 className="text-[10px] font-bold mb-8 text-royal-gold uppercase tracking-[0.3em] opacity-60">Directory</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Locations', path: '/locations' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Packages', path: '/packages' },
                { name: 'Reviews', path: '/reviews' },
                { name: 'Contact', path: '/#contact' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/40 hover:text-white transition-colors text-sm font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Top Locations */}
          <div>
            <h4 className="text-[10px] font-bold mb-8 text-royal-gold uppercase tracking-[0.3em] opacity-60">Iconic Sites</h4>
            <ul className="space-y-4">
              {['Amer Fort', 'Jal Mahal', 'Patrika Gate', 'Nahargarh Fort', 'City Palace', 'Samode Palace'].map(loc => (
                <li key={loc}>
                  <a href="#" className="text-white/40 hover:text-white transition-colors text-sm font-light">
                    {loc} Pre Wedding
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold mb-8 text-royal-gold uppercase tracking-[0.3em] opacity-60">HQ Studio</h4>
            <ul className="space-y-5 text-sm font-light">
              <li className="flex items-start justify-center md:justify-start gap-4">
                <MapPin className="w-4 h-4 text-royal-gold shrink-0 mt-1 opacity-40" />
                <span className="text-white/40 leading-relaxed">Shop no. 5, 3rd Floor, Precious Mall, Moti Doongari Road, Adarsh Nagar, Jaipur, Rajasthan 302004</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4">
                <Phone className="w-4 h-4 text-royal-gold shrink-0 opacity-40" />
                <span className="text-white/40">+91 8209212476</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4">
                <Mail className="w-4 h-4 text-royal-gold shrink-0 opacity-40" />
                <span className="text-white/40">Jaipurpewweddingshoot@gmail.com</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Location Ticker */}
      <div className="bg-royal-gold py-6 overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-[scroll_40s_linear_infinite] px-10 items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] border-r border-black/20 pr-10 mr-10 text-black">Dominated Locations</span>
            <div className="flex gap-20 text-black text-sm font-bold uppercase tracking-tighter items-center">
              <span>Amer Fort Pre Wedding</span>
              <span className="opacity-20 text-xl font-serif">/</span>
              <span>Jal Mahal Couple Shoot</span>
              <span className="opacity-20 text-xl font-serif">/</span>
              <span>Patrika Gate Photography</span>
              <span className="opacity-20 text-xl font-serif">/</span>
              <span>Nahargarh Sunset Shoot</span>
              <span className="opacity-20 text-xl font-serif">/</span>
              <span>City Palace Royal Experience</span>
              <span className="opacity-20 text-xl font-serif">/</span>
              <span>Samode Palace Luxury</span>
              <span className="opacity-20 text-xl font-serif">/</span>
              <span>Albert Hall Shoot</span>
            </div>
            {/* Repeat for seamless loop */}
            <div className="flex gap-20 text-black text-sm font-bold uppercase tracking-tighter items-center ml-20">
              <span>Amer Fort Pre Wedding</span>
              <span className="opacity-20 text-xl font-serif">/</span>
              <span>Jal Mahal Couple Shoot</span>
              <span className="opacity-20 text-xl font-serif">/</span>
              <span>Patrika Gate Photography</span>
              <span className="opacity-20 text-xl font-serif">/</span>
              <span>Nahargarh Sunset Shoot</span>
              <span className="opacity-20 text-xl font-serif">/</span>
              <span>City Palace Royal Experience</span>
              <span className="opacity-20 text-xl font-serif">/</span>
              <span>Samode Palace Luxury</span>
              <span className="opacity-20 text-xl font-serif">/</span>
              <span>Albert Hall Shoot</span>
            </div>
        </div>
      </div>

      <div className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
          <p>© {currentYear} Jaipur Pre Wedding Shoot. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-royal-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-royal-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-royal-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </footer>
  );
}
