import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

/**
 * Pointer-tracked 3D tilt wrapper. Also exposes the normalized pointer
 * position as CSS vars (--pointer-x / --pointer-y, in %) so children can
 * render a cursor-following sheen. Static on touch devices and under
 * prefers-reduced-motion.
 */
export default function TiltCard({ children, className, maxTilt = 7 }: TiltCardProps) {
  const reduced = useReducedMotion();
  const [coarse, setCoarse] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    setCoarse(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const interactive = !reduced && !coarse;

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    px.set(x);
    py.set(y);
    ref.current.style.setProperty('--pointer-x', `${x * 100}%`);
    ref.current.style.setProperty('--pointer-y', `${y * 100}%`);
  };

  const handlePointerLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  if (!interactive) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div style={{ perspective: 900 }} className="h-full">
      <motion.div
        ref={ref}
        className={className}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {children}
      </motion.div>
    </div>
  );
}
