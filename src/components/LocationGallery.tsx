import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { MapPin, Camera } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const locations = [
  {
    name: "Amer Fort",
    description: "The epitome of Jaipur heritage. Best for royal traditional shoots with massive stone hallways and golden hour views.",
    images: [
      "https://images.unsplash.com/photo-1590424744295-ff5da84cd57d?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1592345213144-173693ca40ec?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1617482390881-2292fe729486?auto=format&fit=crop&q=80&w=2000"
    ]
  },
  {
    name: "Patrika Gate",
    description: "Jaipur’s most Instagrammable entrance. Famous for its vibrant hand-painted arches and symmetrical architecture.",
    images: [
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1524492459423-5c2600c12dd1?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&q=80&w=2000"
    ]
  },
  {
    name: "Jal Mahal",
    description: "Stunning palace in the middle of Man Sagar Lake. Perfect for sunrise silhouettes and peaceful couple portraits.",
    images: [
      "https://images.unsplash.com/photo-1599689408611-6674ff217e25?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&q=80&w=2000"
    ]
  },
  {
    name: "Nahargarh Fort",
    description: "Offers the best panoramic view of Jaipur city. Ideal for cinematic drone shoots and sunset romantic moments at Stepwell.",
    images: [
      "https://images.unsplash.com/photo-1524226416824-72535bbf189a?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=2000"
    ]
  },
  {
    name: "City Palace",
    description: "A blend of Rajput and Mughal architecture. Home to the famous peacock gates and royal royal courtyards for a palace feel.",
    images: [
      "https://images.unsplash.com/photo-1616038242814-a6eac7845d88?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1598106203974-5bd19183664d?auto=format&fit=crop&q=80&w=2000"
    ]
  },
  {
    name: "Albert Hall",
    description: "Perfect for night shoots with stunning lighting. Thousands of pigeons add a romantic, whimsical feel to the frames.",
    images: [
      "https://images.unsplash.com/photo-1590050752117-23e933a28c39?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1590424744295-ff5da84cd57d?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=2000"
    ]
  }
];

export function LocationGallery() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-royal-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Visual Immersion</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">The <span className="text-royal-gold italic">Elite</span> Collection</h2>
        </div>

        <div className="space-y-32">
          {locations.map((loc, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="relative group">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    effect="fade"
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="aspect-[4/5] md:aspect-video rounded-sm border border-white/10"
                  >
                    {loc.images.map((img, imgIdx) => (
                      <SwiperSlide key={imgIdx}>
                        <img 
                          src={`${img.split('&w=')[0]}&auto=format&fit=crop&q=80&w=1200`} 
                          srcSet={`
                            ${img.split('&w=')[0]}&auto=format&fit=crop&q=80&w=400 400w,
                            ${img.split('&w=')[0]}&auto=format&fit=crop&q=80&w=800 800w,
                            ${img.split('&w=')[0]}&auto=format&fit=crop&q=80&w=1200 1200w,
                            ${img.split('&w=')[0]}&auto=format&fit=crop&q=80&w=1600 1600w
                          `}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                          alt={`${loc.name} Photography`} 
                          loading="lazy"
                          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-royal-gold/10 backdrop-blur-xl border border-royal-gold/20 flex items-center justify-center z-10">
                    <Camera className="w-8 h-8 text-royal-gold" />
                  </div>
                </div>
              </div>

              <div className={`space-y-8 ${idx % 2 !== 0 ? 'lg:order-1 lg:text-right' : ''}`}>
                <div className={`flex items-center gap-4 ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                  <MapPin className="w-5 h-5 text-royal-gold" />
                  <h3 className="text-3xl md:text-5xl font-serif text-white">{loc.name}</h3>
                </div>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                  {loc.description}
                </p>
                <div className={`flex gap-6 ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                   <a 
                    href={`https://wa.me/918209212476?text=Hi, I want to book a shoot at ${loc.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-royal-gold text-black px-8 py-4 rounded-sm font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all"
                   >
                    Book This Location
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
