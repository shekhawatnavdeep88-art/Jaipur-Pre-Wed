import React from 'react';
import { Send, MapPin, Mail, Phone, Instagram, Youtube, Facebook } from 'lucide-react';

export function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black/40 border border-white/10 rounded-sm overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 bg-royal-gold p-12 text-black">
            <h2 className="text-4xl font-serif mb-8 italic">Get In Touch</h2>
            <p className="opacity-80 mb-12 text-sm leading-relaxed font-medium uppercase tracking-wide">
              Ready to create something magical? Discuss your cinematic vision with our specialists.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <Phone className="w-5 h-5 mt-1 opacity-40" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-40">Call / WhatsApp</div>
                  <div className="font-serif text-lg tracking-tight">+91 8209212476</div>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <Mail className="w-5 h-5 mt-1 opacity-40" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email Us</div>
                  <div className="font-serif text-lg tracking-tight">Jaipurpewweddingshoot@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <MapPin className="w-5 h-5 mt-1 opacity-40" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-40">Visit Studio</div>
                  <div className="font-serif text-lg tracking-tight">Shop no. 5, 3rd Floor, Precious Mall, Moti Doongari Road, Jaipur</div>
                </div>
              </div>
            </div>
            
            <div className="mt-20 pt-10 border-t border-black/10 flex gap-6">
              <a href="https://www.instagram.com/jaipurpreweddingshoot/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity"><Instagram className="w-5 h-5" /></a>
              <a href="https://youtube.com/@JaipurPreWeddingShoot" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity"><Youtube className="w-5 h-5" /></a>
              <a href="https://facebook.com/jaipurpreweddingshoot" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          
          {/* Lead Form */}
          <div className="lg:w-2/3 p-12 lg:p-20 bg-deep-black">
            <h3 className="text-3xl font-serif text-white mb-12">Book Free Consultation</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Rahul Sharma" 
                    className="w-full bg-white/[0.02] border-b border-white/10 px-0 py-4 text-white focus:border-royal-gold outline-none transition-all placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">WhatsApp Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="w-full bg-white/[0.02] border-b border-white/10 px-0 py-4 text-white focus:border-royal-gold outline-none transition-all placeholder:text-white/10"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Preferred Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-white/[0.02] border-b border-white/10 px-0 py-4 text-white focus:border-royal-gold outline-none transition-all [color-scheme:dark]"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Location Interest</label>
                  <select className="w-full bg-white/[0.02] border-b border-white/10 px-0 py-4 text-white focus:border-royal-gold outline-none transition-all appearance-none cursor-pointer">
                    <option className="bg-deep-black">Amer Fort</option>
                    <option className="bg-deep-black">Jal Mahal</option>
                    <option className="bg-deep-black">Patrika Gate</option>
                    <option className="bg-deep-black">City Palace</option>
                    <option className="bg-deep-black">Other / Not Decided</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Tell Us Your Vision</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your love story..." 
                  className="w-full bg-white/[0.02] border-b border-white/10 px-0 py-4 text-white focus:border-royal-gold outline-none transition-all placeholder:text-white/10 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-royal-gold text-black py-6 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-4 group"
              >
                Inquire Now <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
