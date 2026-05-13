import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { MapPin as MapPinIcon } from 'lucide-react';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const heritageSites = [
  {
    name: "Amer Fort",
    description: "Jaipur's crown jewel. Massive stone hallways and golden hour views.",
    position: { lat: 26.9855, lng: 75.8513 },
    id: "amer-fort"
  },
  {
    name: "Patrika Gate",
    description: "Vibrant hand-painted arches and symmetrical architecture.",
    position: { lat: 26.8524, lng: 75.7972 },
    id: "patrika-gate"
  },
  {
    name: "Jal Mahal",
    description: "Stunning palace in the middle of Man Sagar Lake.",
    position: { lat: 26.9535, lng: 75.8458 },
    id: "jal-mahal"
  },
  {
    name: "Nahargarh Fort",
    description: "Panoramic view of Jaipur city and cinematic sunsets.",
    position: { lat: 26.9375, lng: 75.8155 },
    id: "nahargarh"
  },
  {
    name: "City Palace",
    description: "Blend of Rajput and Mughal architecture. Royal peacock gates.",
    position: { lat: 26.9255, lng: 75.8236 },
    id: "city-palace"
  },
  {
    name: "Albert Hall",
    description: "Stunning lighting for night shoots and thousands of pigeons.",
    position: { lat: 26.9115, lng: 75.8194 },
    id: "albert-hall"
  }
];

function MarkerWithInfoWindow({ site }: { site: typeof heritageSites[0] }) {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={site.position}
        onClick={() => setInfoWindowOpen(true)}
        title={site.name}
      >
        <div className="bg-royal-gold p-2 rounded-full border-2 border-black shadow-lg transform hover:scale-110 transition-transform">
          <MapPinIcon size={16} className="text-black" />
        </div>
      </AdvancedMarker>
      {infoWindowOpen && (
        <InfoWindow
          anchor={marker}
          onCloseClick={() => setInfoWindowOpen(false)}
          className="custom-info-window"
        >
          <div className="p-2 max-w-[200px]">
            <h4 className="font-serif text-lg font-bold text-black mb-1">{site.name}</h4>
            <p className="text-xs text-gray-600 mb-3">{site.description}</p>
            <a 
              href={`https://wa.me/918209212476?text=Hi, I want to book a shoot at ${site.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-royal-gold text-black text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-sm hover:bg-black hover:text-white transition-colors"
            >
              Book Shoot
            </a>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

export function InteractiveMap() {
  if (!hasValidKey) {
    return (
      <section className="py-24 bg-deep-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white/5 border border-white/10 p-12 text-center rounded-sm">
            <h2 className="text-3xl font-serif text-white mb-6 font-medium">Google Maps API Key Required</h2>
            <div className="space-y-6 text-white/60 text-sm leading-relaxed text-left max-w-xl mx-auto">
              <p><strong>Step 1:</strong> <a href="https://console.cloud.google.com/google/maps-apis/start?utm_campaign=gmp-code-assist-ais" target="_blank" rel="noopener" className="text-royal-gold underline">Get an API Key</a></p>
              <p><strong>Step 2:</strong> Add your key as a secret in AI Studio:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Open <strong>Settings</strong> (⚙️ gear icon, <strong>top-right corner</strong>)</li>
                <li>Select <strong>Secrets</strong></li>
                <li>Type <code className="text-royal-gold bg-white/10 px-1 py-0.5 rounded">GOOGLE_MAPS_PLATFORM_KEY</code> as the secret name, press <strong>Enter</strong></li>
                <li>Paste your API key as the value, press <strong>Enter</strong></li>
              </ul>
              <p className="text-center pt-4 italic">The app rebuilds automatically after you add the secret.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-royal-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Interactive Explorer</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">Heritage <span className="text-royal-gold italic">Geotags</span></h2>
        </div>

        <div className="h-[600px] w-full rounded-sm border border-white/10 overflow-hidden relative grayscale-[0.2] contrast-[1.1]">
          <APIProvider apiKey={API_KEY} version="weekly">
            <Map
              defaultCenter={{ lat: 26.9124, lng: 75.7873 }}
              defaultZoom={11}
              mapId="HERITAGE_MAP_ID"
              gestureHandling={'greedy'}
              disableDefaultUI={false}
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              style={{ width: '100%', height: '100%' }}
            >
              {heritageSites.map((site) => (
                <MarkerWithInfoWindow key={site.id} site={site} />
              ))}
            </Map>
          </APIProvider>
          
          {/* Legend Overlay */}
          <div className="absolute bottom-6 left-6 p-4 bg-black/60 backdrop-blur-xl border border-white/10 text-white z-10 pointer-events-none">
            <div className="text-[9px] uppercase tracking-widest font-black text-royal-gold mb-2">Heritage Map</div>
            <div className="text-xs font-serif italic text-white/60">Click markers to explore locations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
