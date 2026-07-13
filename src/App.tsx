import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ImageBand from './components/ImageBand';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/motion/ScrollProgress';

export default function App() {
  // Structured JSON-LD Data for Accounting Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Bona Fides V&D",
    "alternateName": "Knjigovodstvena agencija Bona Fides V&D",
    "description": "Knjigovodstvena agencija Bona Fides V&D iz Novog Sada pruža vrhunske knjigovodstvene usluge, poresko savetovanje, platni promet i kadrovske poslove za pravna lica i preduzetnike.",
    "image": "https://bonafides.rs/images/hero-bg.jpg",
    "logo": "https://bonafides.rs/logo.png",
    "url": "https://bonafides.rs/",
    "telephone": "+381641658424",
    "email": "bonafidesknjigovodstvo@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Miše Dimitrijevića 24, lokal broj 2",
      "addressLocality": "Novi Sad",
      "postalCode": "21000",
      "addressCountry": "RS"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.2410889,
      "longitude": 19.835478
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "15:00"
    },
    "priceRange": "$$",
    "founder": {
      "@type": "Person",
      "name": "Ljiljana Marić"
    },
    "taxID": "115716079"
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-brand-cream flex flex-col selection:bg-brand-gold selection:text-brand-black" id="root-layout">
      {/* Schema.org Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Gold scroll progress indicator */}
      <ScrollProgress />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Services />
        <ImageBand />
        <Contact />
      </main>

      {/* Footer Block */}
      <Footer />
    </div>
  );
}
