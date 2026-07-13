import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Award, UserCheck, Laptop, MapPin, ArrowRight, PhoneCall, ChevronDown } from 'lucide-react';
import { businessDetails } from '../data';
import GoldParticles from './motion/GoldParticles';

const headlineLine1 = 'IDEALNA PODRŠKA';
const headlineLine2 = 'ZA USPEŠNO POSLOVANJE';

const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: '0.6em', filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: '0em',
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '18%']);
  const contentY = useTransform(scrollYProgress, [0, 0.8], ['0%', reduced ? '0%' : '-12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, reduced ? 1 : 0.15]);

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
      ref={heroRef}
      className="relative min-h-screen pt-28 md:pt-36 pb-16 flex flex-col justify-center overflow-hidden bg-brand-black"
    >
      {/* Cinematic background: parallax image + dark gradient + gold glow */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <motion.img
          src="/images/hero-bg.jpg"
          alt=""
          width={2048}
          height={1152}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          initial={reduced ? false : { scale: 1.18, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/55 to-brand-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,75,0.12),transparent_60%)] pointer-events-none" />
      <GoldParticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          style={{ y: contentY, opacity: contentOpacity }}
        >

          {/* Subtle tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-brand-gold/40 rounded-full bg-brand-black/40 backdrop-blur-sm text-brand-gold text-[11px] font-semibold tracking-widest uppercase mb-8"
            id="hero-tag"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span>Pouzdan finansijski partner</span>
          </motion.div>

          {/* Gold hairline above headline */}
          <div className="mx-auto mb-8 h-px w-40 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

          {/* Headline */}
          <motion.h1
            variants={wordContainer}
            initial={reduced ? false : 'hidden'}
            animate="visible"
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide leading-[1.05] mb-8 uppercase"
            id="hero-headline"
          >
            <span className="block text-brand-ivory">
              {headlineLine1.split(' ').map((word, i) => (
                <motion.span key={`l1-${i}`} variants={wordItem} className="inline-block mr-[0.28em] last:mr-0">
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block mt-1">
              {headlineLine2.split(' ').map((word, i) => (
                <motion.span key={`l2-${i}`} variants={wordItem} className="inline-block mr-[0.28em] last:mr-0 text-gold-gradient">
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Gold hairline below headline */}
          <div className="mx-auto mb-8 h-px w-40 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-serif text-xl sm:text-2xl text-brand-cream/85 font-medium mb-10 max-w-3xl mx-auto leading-relaxed"
            id="hero-subheadline"
          >
            Višegodišnje iskustvo, profesionalni pristup i posvećenost svakom klijentu.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            id="hero-ctas"
          >
            <a
              href="#kontakt"
              onClick={(e) => handleCtaClick(e, 'kontakt')}
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-brand-gold text-brand-black hover:bg-brand-gold-bright font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(201,162,75,0.35)] hover:shadow-[0_0_45px_rgba(201,162,75,0.5)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
            >
              <span>Pošaljite upit</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={`tel:${businessDetails.phoneFormatted}`}
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full border border-brand-gold/50 text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold font-medium text-sm uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
            >
              <PhoneCall size={16} />
              <span>Pozovite nas</span>
            </a>
          </motion.div>

          {/* Trust Indicators Section */}
          <motion.div
            initial={reduced ? false : 'hidden'}
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } } }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10 text-left"
            id="hero-trust-indicators"
          >
            {trustIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
                  }}
                  className="p-5 md:p-6 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-brand-gold/15 hover:border-brand-gold/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-4">
                    <IconComponent size={20} className="stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-brand-ivory leading-snug">
                      {indicator.title}
                    </h3>
                    <p className="text-xs text-brand-cream/50 mt-1 font-medium">
                      {indicator.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll cue */}
      {!reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brand-gold/70 pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-brand-gold/60" />
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
