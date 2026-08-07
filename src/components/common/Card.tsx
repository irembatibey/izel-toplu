import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import type { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

/**
 * The "elegant card" used for Therapy Areas. Deliberately NOT used
 * for Trust Indicators, which was specced as minimal/non-card — see
 * TrustIndicators.tsx. Hover lift/shadow/icon-invert are pure CSS
 * (group-hover), no client component needed for interaction that
 * doesn't require JavaScript.
 */
export function Card({ icon: Icon, title, description, href, linkLabel }: CardProps) {
  const sharedClassName = clsx(
    'group flex h-full flex-col rounded-md border border-neutral-border bg-neutral-bg p-9 shadow-sm transition-all duration-320 ease-brand-ease hover:-translate-y-2 hover:border-brand-300 hover:shadow-lg'
  );

  const content = (
    <>
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-brand-surface-100 shadow-sm transition-all duration-320 ease-brand-ease group-hover:scale-105 group-hover:bg-brand-cta group-hover:shadow-md">
        <Icon
          className="h-6 w-6 text-brand-700 transition-colors duration-320 ease-brand-ease group-hover:text-neutral-bg"
          aria-hidden="true"
        />
      </span>
      <h3 className="mb-2 text-h3 font-semibold text-brand-900">{title}</h3>
      <p className="text-body text-neutral-text-soft">{description}</p>
      {href && linkLabel && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-body font-semibold text-brand-cta">
          {linkLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-280 ease-brand-ease group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return <div className={sharedClassName}>{content}</div>;
}