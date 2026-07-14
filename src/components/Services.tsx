import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import * as Icons from 'lucide-react';
import { services } from '../data';
import Reveal from './motion/Reveal';
import TiltCard from './motion/TiltCard';

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Services() {
  const reduced = useReducedMotion();

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
      className="py-24 bg-brand-onyx relative overflow-hidden"
    >
      {/* Ambient gold glow */}
      <div className="absolute top-1/2 left-[-10%] w-[35rem] h-[35rem] bg-brand-gold/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-[-5%] w-[28rem] h-[28rem] bg-brand-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Usluge
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-bold text-brand-ivory mt-2 tracking-tight">
            Sveobuhvatna knjigovodstvena podrška
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold/60 mx-auto mt-4" />
          <p className="font-sans text-sm sm:text-base text-brand-cream/60 mt-4 leading-relaxed">
            Kompletan asortiman administrativnih i finansijskih usluga za vaše svakodnevno poslovanje i punu zakonsku usklađenost.
          </p>
        </Reveal>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          id="services-grid"
          variants={gridVariants}
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service, index) => {
            // Dynamically resolve the icon component from Lucide
            const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;
            const number = String(index + 1).padStart(2, '0');

            return (
              <motion.div key={service.id} variants={cardVariants} className="h-full">
                <TiltCard className="group relative h-full p-8 rounded-2xl bg-brand-espresso border border-brand-gold/15 hover:border-brand-gold/50 hover:shadow-[0_0_40px_-12px_rgba(201,162,75,0.4)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  {/* Cursor-following gold sheen */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(280px circle at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(201,162,75,0.09), transparent 65%)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Ghost number */}
                  <span
                    className="absolute top-2 right-4 font-serif text-7xl font-bold text-brand-gold/[0.08] select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {number}
                  </span>

                  <div id={`service-card-${service.id}`}>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl bg-brand-gold/10 ring-1 ring-brand-gold/30 flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      <IconComponent size={22} className="stroke-[1.75]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-brand-ivory mb-3 group-hover:text-brand-gold transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-brand-cream/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Card CTA/Anchor */}
                  <a
                    href="#kontakt"
                    onClick={handleContactScroll}
                    className="relative z-10 mt-8 pt-4 border-t border-brand-gold/10 flex items-center justify-between text-brand-gold group-hover:text-brand-gold-bright transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Saznajte više / Upit
                    </span>
                    <Icons.ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </TiltCard>
              </motion.div>
            );
          })}

          {/* Gold CTA tile — completes the 3+3+2 grid */}
          <motion.div variants={cardVariants} className="h-full">
            <a
              href="#kontakt"
              onClick={handleContactScroll}
              className="group relative h-full p-8 rounded-2xl bg-gradient-to-br from-brand-gold-deep via-brand-gold to-brand-gold-bright text-brand-black flex flex-col justify-between overflow-hidden shadow-[0_0_50px_-15px_rgba(201,162,75,0.6)] hover:shadow-[0_0_60px_-10px_rgba(201,162,75,0.75)] transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-bright focus-visible:ring-offset-2 focus-visible:ring-offset-brand-onyx"
              id="service-card-cta"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-black/10 flex items-center justify-center text-brand-black mb-6">
                  <Icons.Handshake size={22} className="stroke-[1.75]" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 leading-snug">
                  Potreban vam je prilagođen paket usluga?
                </h3>
                <p className="text-sm text-brand-black/75 leading-relaxed">
                  Za vaš d.o.o. ili preduzetničku radnju pripremamo ponudu po meri.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-brand-black/15 flex items-center justify-between font-bold">
                <span className="text-[11px] uppercase tracking-wider">
                  Zatražite ponudu
                </span>
                <Icons.ArrowRight size={18} className="transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
