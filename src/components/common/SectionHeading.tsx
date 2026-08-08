import { clsx } from 'clsx';

interface SectionHeadingProps {
  /** Sets the id on the underlying heading, for the parent <section>'s aria-labelledby. */
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  /**
   * Phase 5 addition: internal pages (About, Services Index) need
   * their own h1, which this component didn't support before (every
   * homepage usage is an h2, since the Hero owns the page's one h1
   * there). Defaults to 'h2' — every existing homepage call site is
   * unaffected; only new page-level usages opt into 'h1'.
   */
  level?: 'h1' | 'h2';
}

/**
 * Every homepage section below the Hero uses this for its heading
 * block — one place defining the eyebrow/heading/description
 * pattern instead of each section re-implementing the same three
 * lines of markup and classes.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  level = 'h2',
}: SectionHeadingProps) {
  const Heading = level;

  return (
    <div className={clsx('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <span className="mb-3 block text-caption font-semibold uppercase tracking-wide text-brand-cta-dark">
          {eyebrow}
        </span>
      )}
      <Heading
        id={id}
        className={clsx('font-serif text-brand-900', level === 'h1' ? 'text-display' : 'text-h2')}
      >
        {title}
      </Heading>
      {description && (
        <p className="mt-3 text-body text-neutral-text-soft">{description}</p>
      )}
    </div>
  );
}