import React, { useState } from 'react';
import { Camera, X, Maximize2, Info } from 'lucide-react';
import { galleryItems } from '../data';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setActiveImage(imageUrl);
    document.body.style.overflow = 'hidden'; // Lock scrolling
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = ''; // Unlock scrolling
  };

  return (
    <section 
      id="galerija" 
      className="py-24 bg-brand-ivory border-t border-brand-bronze/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
            Galerija
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-bold text-brand-chocolate mt-2 tracking-tight">
            Ambijent i radna etika
          </h2>
          <div className="w-16 h-[2px] bg-brand-bronze/50 mx-auto mt-4" />
          <p className="font-sans text-sm sm:text-base text-brand-chocolate/80 mt-4 leading-relaxed">
            Naš prostor odražava vrednosti koje unosimo u rad: preciznost, urednost, profesionalnost i diskreciju.
          </p>
        </div>

        {/* Informational Branding Notice */}
        <div className="max-w-3xl mx-auto mb-12" id="gallery-notice-banner">
          <div className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-brand-cream border border-brand-bronze/20 text-brand-chocolate">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-ivory border border-brand-bronze/35 flex items-center justify-center text-brand-walnut">
              <Camera size={18} className="stroke-[1.75]" />
            </div>
            <div>
              <p className="font-serif text-sm sm:text-base font-bold text-brand-chocolate leading-snug">
                Napomena o fotografijama lokala
              </p>
              <p className="text-xs sm:text-sm text-brand-chocolate/80 mt-1 leading-relaxed">
                Galeriju ćemo dopuniti originalnim fotografijama našeg novog poslovnog prostora u Novom Sadu čim se završi brendiranje i dekorisanje lokala. Trenutno su prikazane neutralne reprezentativne slike našeg rada.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          id="gallery-grid"
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-brand-cream border border-brand-bronze/10 aspect-4/3 cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
              onClick={() => openLightbox(item.imageUrl)}
              id={`gallery-item-${item.id}`}
            >
              {/* Image with warm filter styling to align with palette */}
              <img
                src={item.imageUrl}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[8%] contrast-[103%] brightness-[96%]"
              />

              {/* Tint overlay */}
              <div className="absolute inset-0 bg-brand-chocolate/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-brand-ivory/90 text-brand-walnut flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 size={16} />
                </div>
              </div>

              {/* Caption Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-chocolate/80 via-brand-chocolate/40 to-transparent text-brand-ivory">
                <p className="font-serif text-sm font-semibold tracking-wide">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-chocolate/90 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
          id="gallery-lightbox"
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-brand-ivory/10 hover:bg-brand-ivory/25 text-brand-ivory transition-colors focus:outline-none"
            aria-label="Zatvori sliku"
          >
            <X size={24} />
          </button>
          
          <div 
            className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl border border-brand-bronze/15"
            onClick={(e) => e.stopPropagation()} // Prevent closing on image click
          >
            <img
              src={activeImage}
              alt="Uvećani prikaz"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[85vh] object-contain rounded-xl filter sepia-[5%] contrast-[102%]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
