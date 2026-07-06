import React from 'react';
import { motion } from 'motion/react';
import { Award, UserCheck, Laptop, MapPin, ArrowRight, PhoneCall } from 'lucide-react';
import { businessDetails } from '../data';

export default function Hero() {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const trustIndicators = [
    {
      icon: Award,
      title: '15 godina iskustva',
      subtitle: 'Stabilnost i stručnost',
    },
    {
      icon: UserCheck,
      title: 'Personalizovana podrška',
      subtitle: 'Pristup po vašoj meri',
    },
    {
      icon: Laptop,
      title: 'Savremeni softver',
      subtitle: 'Brza i sigurna razmena',
    },
    {
      icon: MapPin,
      title: 'Kancelarija u Novom Sadu',
      subtitle: 'Miše Dimitrijevića 24',
    },
  ];

  return (
    <section 
      id="pocetna" 
      className="relative min-h-screen pt-28 md:pt-36 pb-16 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-brand-ivory via-brand-cream/60 to-brand-cream"
    >
      {/* Abstract elegant design accents */}
      <div className="absolute top-1/4 right-[-10%] w-[40rem] h-[40rem] bg-brand-bronze/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[30rem] h-[30rem] bg-brand-walnut/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Subtle tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-brand-bronze/30 rounded-full bg-brand-ivory/80 text-brand-walnut text-[11px] font-semibold tracking-widest uppercase mb-6 shadow-xs"
            id="hero-tag"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze animate-pulse" />
            <span>Pouzdan finansijski partner</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-6.5xl font-bold text-brand-chocolate tracking-tight leading-[1.08] mb-6"
            id="hero-headline"
          >
            Knjigovodstvo koje <br className="hidden sm:inline" />
            <span className="text-brand-walnut italic">prati vaš ritam</span>
          </motion.h1>

          {/* Subheadline & Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif text-xl sm:text-2xl text-brand-walnut font-medium mb-5 max-w-3xl mx-auto leading-relaxed"
            id="hero-subheadline"
          >
            Višegodišnje iskustvo, profesionalni pristup i posvećenost svakom klijentu.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-sans text-base sm:text-lg text-brand-chocolate/85 max-w-2.5xl mx-auto leading-relaxed mb-10"
            id="hero-description"
          >
            Knjigovodstvena agencija <strong className="font-semibold text-brand-chocolate">Bona Fides V&D</strong> pruža pouzdanu knjigovodstvenu podršku za firme, preduzetnike i poslovne ljude koji žele jasne informacije, urednu dokumentaciju i sigurnost u svakodnevnom poslovanju.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            id="hero-ctas"
          >
            <a
              href="#kontakt"
              onClick={(e) => handleCtaClick(e, 'kontakt')}
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-brand-walnut text-brand-ivory hover:bg-brand-chocolate font-medium text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span>Pošaljite upit</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href={`tel:${businessDetails.phoneFormatted}`}
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full border border-brand-walnut/30 bg-brand-ivory/80 text-brand-walnut hover:bg-brand-cream hover:border-brand-walnut font-medium text-sm uppercase tracking-wider transition-all duration-300"
            >
              <PhoneCall size={16} />
              <span>Pozovite nas</span>
            </a>
          </motion.div>

          {/* Trust Indicators Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10 text-left"
            id="hero-trust-indicators"
          >
            {trustIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon;
              return (
                <div
                  key={index}
                  className="p-5 md:p-6 rounded-2xl bg-brand-ivory border border-brand-bronze/10 shadow-xs hover:border-brand-bronze/30 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cream flex items-center justify-center text-brand-walnut mb-4">
                    <IconComponent size={20} className="stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-brand-chocolate leading-snug">
                      {indicator.title}
                    </h3>
                    <p className="text-xs text-brand-taupe mt-1 font-medium">
                      {indicator.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
