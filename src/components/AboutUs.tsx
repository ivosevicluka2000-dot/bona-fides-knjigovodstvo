import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Quote } from 'lucide-react';
import Reveal from './motion/Reveal';

export default function AboutUs() {
  const imageRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-20, 20]);

  return (
    <section
      id="o-nama"
      className="py-24 bg-brand-cream text-brand-chocolate relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-deep">
            O nama
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-bold text-brand-chocolate mt-2 tracking-tight">
            Vaš oslonac za stabilan i siguran rast
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4" />
        </Reveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Text Story */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-walnut leading-snug">
                Knjigovodstvena agencija Bona Fides V&D pruža profesionalne knjigovodstvene usluge, oslanjajući se na 15 godina iskustva u ovoj oblasti.
              </h3>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-sm sm:text-base text-brand-chocolate/85 leading-relaxed">
                Vaš biznis je jedinstven — zato nudimo personalizovanu podršku i pristup prilagođen vašim stvarnim potrebama, uz savremeni softver za brzu razmenu dokumentacije i jasan uvid u poslovanje u svakom trenutku. Komunikacija je brza, direktna i bez komplikovanog žargona.
              </p>
            </Reveal>

            {/* Quote Block */}
            <Reveal delay={0.2}>
              <div className="relative p-6 sm:p-8 rounded-2xl bg-brand-ivory border-l-2 border-brand-gold mt-8 shadow-sm">
                <Quote className="absolute top-4 right-4 text-brand-gold/15 w-16 h-16 pointer-events-none stroke-[1]" />
                <p className="font-serif text-lg sm:text-2xl font-medium text-brand-chocolate italic relative z-10">
                  &ldquo;Fokusirajte se na rast poslovanja, a knjigovodstvene poslove prepustite nama.&rdquo;
                </p>
                <div className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-gold-deep">
                  — Ljiljana Marić, osnivač i zastupnik
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Framed image + stat card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div ref={imageRef} className="relative">
                {/* Decorative gold offset frame */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-brand-gold/40 pointer-events-none" aria-hidden="true" />
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                  style={{ y: imageY }}
                  whileHover={reduced ? undefined : { scale: 1.02 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <img
                    src="/images/about-still-life.jpg"
                    alt="Elegantan radni sto sa poslovnim knjigama i zlatnim nalivperom"
                    width={1200}
                    height={1500}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Quick Stat Card — overlapped onto the image corner */}
                <div className="relative z-10 -mt-12 ml-[-0.5rem] sm:ml-[-1rem] mr-8 p-6 rounded-2xl bg-brand-black text-brand-cream flex items-center justify-between shadow-2xl border border-brand-gold/20">
                  <div>
                    <div className="font-serif text-3xl sm:text-4xl font-bold text-brand-gold">
                      15+ Godina
                    </div>
                    <div className="text-[10px] uppercase font-semibold tracking-widest text-brand-cream/60 mt-1">
                      Stručnog iskustva u finansijama
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold text-lg font-serif italic">
                    BF
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
