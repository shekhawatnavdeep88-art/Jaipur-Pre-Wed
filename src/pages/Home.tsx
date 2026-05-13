import React from 'react';
import { Hero } from '../components/Hero';
import { TrustSignals } from '../components/TrustSignals';
import { Services } from '../components/Services';
import { LocationShowcase } from '../components/LocationShowcase';
import { VideoSection } from '../components/VideoSection';
import { HomeGallery } from '../components/HomeGallery';
import { Testimonials } from '../components/Testimonials';
import { Packages } from '../components/Packages';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';
import { Helmet } from 'react-helmet-async';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Best Pre Wedding Shoot in Jaipur | Jaipur Pre Wedding Shoot</title>
        <meta name="description" content="Looking for the best pre wedding photoshoot in Jaipur? We transform special moments into cinematic memories at Amer Fort, Jal Mahal, and more. Call +91 8209212476." />
        <meta name="keywords" content="pre wedding shoot jaipur, photography jaipur, best pre wedding video jaipur, royal pre wedding shoot, heritage photoshoot jaipur" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Jaipur Pre Wedding Shoot",
              "image": "https://images.unsplash.com/photo-1590424744295-ff5da84cd57d",
              "@id": "https://jaipurpreweddingshoot.com",
              "url": "https://jaipurpreweddingshoot.com",
              "telephone": "+918209212476",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop no. 5, 3rd Floor, Precious Mall, Moti Doongari Road",
                "addressLocality": "Jaipur",
                "postalCode": "302004",
                "addressRegion": "RJ",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.9124,
                "longitude": 75.7873
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://facebook.com/jaipurpreweddingshoot",
                "https://www.instagram.com/jaipurpreweddingshoot/",
                "https://youtube.com/@JaipurPreWeddingShoot"
              ]
            }
          `}
        </script>
      </Helmet>
      <Hero />
      <TrustSignals />
      <Services />
      <LocationShowcase />
      <VideoSection />
      <HomeGallery />
      <Testimonials />
      <Packages />
      <FAQ />
      <ContactForm />
    </>
  );
}
