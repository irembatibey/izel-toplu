import type { Config } from 'tailwindcss';

/**
 * Phase 2 — Design Foundation.
 *
 * Tokens below are a direct, 1:1 mapping from the approved Brand
 * Style Guide v3 (all-blue palette, no terracotta/orange, Lucide
 * icon system, Newsreader/Inter type pairing). Every value here
 * traces back to a specific swatch/spec in that guide — see the
 * Phase 2 engineering report for the mapping table.
 *
 * Colors are defined as CSS custom properties (RGB triplets) in
 * globals.css and referenced here via rgb(var(...) / <alpha-value>)
 * so Tailwind's opacity modifiers (e.g. bg-brand-cta/50) work
 * correctly — the standard pattern for CSS-variable-based Tailwind
 * themes.
 */
const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
    './src/content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: 'rgb(var(--color-brand-900) / <alpha-value>)',
          800: 'rgb(var(--color-brand-800) / <alpha-value>)',
          700: 'rgb(var(--color-brand-700) / <alpha-value>)',
          600: 'rgb(var(--color-brand-600) / <alpha-value>)',
          cta: 'rgb(var(--color-brand-cta) / <alpha-value>)',
          'cta-dark': 'rgb(var(--color-brand-cta-dark) / <alpha-value>)',
          300: 'rgb(var(--color-brand-300) / <alpha-value>)',
          200: 'rgb(var(--color-brand-200) / <alpha-value>)',
          surface: 'rgb(var(--color-brand-surface) / <alpha-value>)',
          'surface-100': 'rgb(var(--color-brand-surface-100) / <alpha-value>)',
        },
        neutral: {
          text: 'rgb(var(--color-neutral-text) / <alpha-value>)',
          'text-soft': 'rgb(var(--color-neutral-text-soft) / <alpha-value>)',
          border: 'rgb(var(--color-neutral-border) / <alpha-value>)',
          bg: 'rgb(var(--color-neutral-bg) / <alpha-value>)',
          'bg-soft': 'rgb(var(--color-neutral-bg-soft) / <alpha-value>)',
        },
      },
      fontFamily: {
        // CSS vars populated by next/font in Phase 3 (Layout Shell).
        // Fallback stacks below keep type reasonable if a page ever
        // renders before that's wired up.
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Named, additive sizes matching the approved style guide's
        // type specimen — existing Tailwind text-* sizes are left
        // untouched for general-purpose use.
        display: ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h2: ['1.9rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        h3: ['1.2rem', { lineHeight: '1.4' }],
        body: ['1rem', { lineHeight: '1.7' }],
        caption: ['0.82rem', { lineHeight: '1.5' }],
      },
      borderRadius: {
        // Overrides sm/md/lg/full directly — this IS the project's
        // radius system, not an addition alongside Tailwind's
        // defaults. xl/2xl/etc remain Tailwind defaults, unused by
        // the approved design but left available.
        sm: '8px',
        md: '12px',
        lg: '22px',
        full: '9999px',
      },
      boxShadow: {
        // Same reasoning as radius: these override Tailwind's
        // default sm/md/lg so `shadow-md` etc. always resolve to
        // the approved brand-tinted elevation, never a generic
        // gray shadow, anywhere in the codebase.
        sm: '0 2px 12px rgb(var(--color-brand-900) / 0.06)',
        md: '0 10px 28px rgb(var(--color-brand-900) / 0.10)',
        lg: '0 20px 48px rgb(var(--color-brand-900) / 0.16)',
      },
      transitionTimingFunction: {
        'brand-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        250: '250ms',
        280: '280ms',
        320: '320ms',
        340: '340ms',
      },
      // Spacing: intentionally NOT extended. Tailwind's default
      // spacing scale is already 4px-based (p-1=4px, p-2=8px,
      // p-3=12px, p-4=16px, p-6=24px, p-8=32px, p-12=48px,
      // p-16=64px, p-24=96px) — exactly the scale used throughout
      // the approved style guide. Adding a parallel custom scale
      // here would duplicate what already exists for no benefit.
      maxWidth: {
        // Phase 3 addition: the approved style guide specifies a
        // ~1200px max content width, but no layout component existed
        // in Phase 2 to consume it. Added now, as a token (not a
        // hardcoded value in Container.tsx), rather than expanding
        // scope of the "locked" Phase 2 file without a reason tied
        // to actual component need.
        content: '1200px',
      },
      keyframes: {
        // About page addition: a very subtle, ambient floating
        // motion for the experience timeline's icon markers (2-4px
        // range, per spec — 3px used here). Defined once as a
        // token, applied via Tailwind's built-in `motion-safe:`
        // variant (no custom media-query CSS needed — motion-safe
        // already wraps this in @media (prefers-reduced-motion:
        // no-preference) automatically), so it's disabled entirely,
        // not just slowed down, when reduced motion is requested.
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
      animation: {
        'gentle-float': 'gentle-float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;