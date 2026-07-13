import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

export default function ImageBand() {
  const bandRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: bandRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-12%', '12%']);

  return (
    <section
      ref={bandRef}
      className="relative h-[45vh] md:h-[55vh] overflow-hidden bg-brand-black"
      aria-label="Preciznost. Poverenje. Kontinuitet."
    >
      {/* Window parallax image */}
      <motion.img
        src="/images/band-gold-marble.jpg"
        alt=""
        width={2048}
        height={878}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover scale-125"
        style={{ y: imageY }}
      />
      <div className="absolute inset-0 bg-brand-black/55 pointer-events-none" />

      {/* Centered statement */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, letterSpacing: '0.35em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.12em' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold text-brand-ivory uppercase"
        >
          Preciznost. Poverenje. Kontinuitet.
        </motion.div>
        <motion.div
          initial={reduced ? false : { opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
        />
      </div>
    </section>
  );
}
