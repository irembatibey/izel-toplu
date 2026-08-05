'use client';

import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';

const SCROLL_THRESHOLD_PX = 8;

/**
 * Client component isolated to exactly one job: knowing whether the
 * page has scrolled past a small threshold, so the header can go
 * from transparent to elevated. Everything rendered inside it
 * (logo, nav, mobile toggle) is composed from the server-rendered
 * Header.tsx via `children` — that composition pattern is what lets
 * this file stay small instead of pulling the whole header into the
 * client bundle.
 *
 * Re-render discipline: state only updates when the boolean actually
 * flips (not on every scroll pixel), and the scroll handler is
 * throttled to one check per animation frame — avoids the classic
 * "re-render on every scroll event" performance mistake.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function handleScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setIsScrolled((prev) => {
          const next = window.scrollY > SCROLL_THRESHOLD_PX;
          return next === prev ? prev : next;
        });
        ticking = false;
      });
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 border-b transition-colors duration-300 ease-brand-ease',
        isScrolled
          ? 'border-neutral-border bg-neutral-bg/90 shadow-sm backdrop-blur-sm'
          : 'border-transparent bg-transparent'
      )}
    >
      {children}
    </header>
  );
}
