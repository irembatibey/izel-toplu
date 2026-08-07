import { clsx } from 'clsx';

interface SectionHeadingProps {
  /** Sets the id on the underlying h2, for the parent <section>'s aria-labelledby. */
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Every homepage section below the Hero uses this for its heading
 * block — one place defining the eyebrow/h2/description pattern
 * instead of each section re-implementing the same three lines of
 * markup and classes (the duplication this phase was asked to
 * avoid). Always renders an h2 — the Hero's h1 is the page's only
 * h1, keeping heading hierarchy correct sitewide.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <span className="mb-3 block text-caption font-semibold uppercase tracking-wide text-brand-cta">
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="font-serif text-h2 text-brand-900">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-body text-neutral-text-soft">{description}</p>
      )}
    </div>
  );
}