'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const REVEAL_DISTANCE_PX = 14;
const REVEAL_DURATION_S = 0.5;
const BRAND_EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * The only animation primitive in the homepage: fade + slight
 * upward motion, triggered once when scrolled into view (or
 * immediately, if already in view on load — which is what makes
 * this one component work for both the Hero and every section
 * below the fold, rather than needing separate mount/scroll
 * variants).
 *
 * useReducedMotion() (from framer-motion, reading the
 * prefers-reduced-motion media query) disables the animation
 * entirely when set — content simply appears in its final state,
 * no motion. This is the component-level reduced-motion handling;
 * the global CSS rule from Phase 2 covers CSS transitions, this
 * covers Framer Motion's JS-driven animation specifically.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: REVEAL_DISTANCE_PX }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: REVEAL_DURATION_S, delay, ease: BRAND_EASE }
      }
    >
      {children}
    </motion.div>
  );
}