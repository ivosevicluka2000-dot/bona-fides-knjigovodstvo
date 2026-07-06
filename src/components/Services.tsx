import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { services } from '../data';

export default function Services() {
  const handleContactScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('kontakt');
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

  return (
    <section 
      id="usluge" 
      className="py-24 bg-brand-cream relative"
    >
      {/* Abstract design elements */}
      <div className="absolute top-1/2 left-[-10%] w-[35rem] h-[35rem] bg-brand-bronze/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
            Usluge
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-bold text-brand-chocolate mt-2 tracking-tight">
            Sveobuhvatna knjigovodstvena podrška
          </h2>
          <div className="w-16 h-[2px] bg-brand-bronze/50 mx-auto mt-4" />
          <p className="font-sans text-sm sm:text-base text-brand-chocolate/80 mt-4 leading-relaxed">
            Pružamo kompletan asortiman administrativnih i finansijskih usluga osmišljenih da olakšaju vaše svakodnevno poslovanje i osiguraju punu zakonsku usklađenost.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" 
          id="services-grid"
        >
          {services.map((service, index) => {
            // Dynamically resolve the icon component from Lucide
            const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;
            
            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-2xl bg-brand-ivory border border-brand-bronze/10 shadow-xs hover:shadow-md hover:border-brand-bronze/35 hover:bg-brand-ivory transition-all duration-300 flex flex-col justify-between"
                id={`service-card-${service.id}`}
              >
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-brand-cream rounded-bl-2xl border-l border-b border-brand-bronze/10 group-hover:border-brand-bronze/35 transition-colors" />

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-walnut mb-6 group-hover:bg-brand-chocolate group-hover:text-brand-cream transition-all duration-300">
                    <IconComponent size={22} className="stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-brand-chocolate mb-3 group-hover:text-brand-walnut transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-chocolate/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card CTA/Anchor */}
                <div className="mt-8 pt-4 border-t border-brand-bronze/5 flex items-center justify-between text-brand-walnut group-hover:text-brand-chocolate transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    Saznajte više / Upit
                  </span>
                  <Icons.ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom micro statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-2xl bg-brand-ivory/60 border border-brand-bronze/10">
            <span className="text-xs sm:text-sm text-brand-chocolate/80 font-medium">
              Potreban vam je prilagođen paket usluga za vaš d.o.o. ili preduzetničku radnju?
            </span>
            <a
              href="#kontakt"
              onClick={handleContactScroll}
              className="text-xs sm:text-sm font-bold text-brand-walnut hover:text-brand-chocolate border-b border-brand-walnut hover:border-brand-chocolate pb-0.5 tracking-wide transition-all"
            >
              Konsultujte se sa nama
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
