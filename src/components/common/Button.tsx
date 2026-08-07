import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
}

// Design-token-only variant styles — no hardcoded colors, no
// hex/rgb values, everything traces to a Tailwind theme token.
const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-cta text-neutral-bg shadow-md hover:bg-brand-cta-dark hover:shadow-lg',
  secondary: 'bg-brand-800 text-neutral-bg hover:bg-brand-900',
  ghost:
    'border border-brand-300 text-brand-800 hover:border-brand-cta hover:bg-brand-surface',
};

/**
 * Server component — a styled Link, nothing more. No client state,
 * no onClick handler needed yet (that arrives with the contact form
 * in a later phase); hover/active states are pure CSS.
 */
export function Button({
  href,
  children,
  variant = 'primary',
  showArrow = false,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-body font-semibold transition-all duration-280 ease-brand-ease hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
        VARIANT_STYLES[variant],
        className
      )}
    >
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-280 ease-brand-ease group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}