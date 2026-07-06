import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Structured JSON-LD Data for Accounting Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Bona Fides V&D",
    "alternateName": "Knjigovodstvena agencija Bona Fides V&D",
    "description": "Knjigovodstvena agencija Bona Fides V&D iz Novog Sada pruža vrhunske knjigovodstvene usluge, poresko savetovanje, platni promet i kadrovske poslove za pravna lica i preduzetnike.",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    "logo": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=300",
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
    <div className="relative min-h-screen bg-brand-cream text-brand-chocolate flex flex-col selection:bg-brand-bronze selection:text-brand-ivory" id="root-layout">
      {/* Schema.org Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Services />
        <Gallery />
        <Contact />
      </main>

      {/* Footer Block */}
      <Footer />
    </div>
  );
}
