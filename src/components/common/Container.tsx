import { clsx } from 'clsx';
import type { ElementType, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Render as a different element when semantics require it (e.g. 'section'). */
  as?: ElementType<{ className?: string; children?: ReactNode }>;
  /**
   * Phase 5 review fix: use the narrower prose max-width (768px,
   * Tailwind's max-w-3xl) instead of the standard 1200px content
   * width — for long-form text sections on service/about pages.
   *
   * Previously, sections needing this passed className="max-w-3xl"
   * directly, which silently collided with Container's own
   * max-w-content class — both are separate Tailwind utility classes
   * setting the same CSS property, concatenated via clsx with no
   * deduplication, so which one actually won was determined by
   * Tailwind's internal stylesheet ordering, not the order authored
   * in code. It happened to render correctly, but that was luck, not
   * a guarantee — a real bug waiting to surface on any future
   * Tailwind rebuild. This prop removes the collision entirely by
   * choosing one or the other, never both.
   */
  narrow?: boolean;
}

/**
 * Single source of truth for content max-width and horizontal
 * padding. Every page/section that needs consistent content width
 * uses this instead of repeating max-w/px- values.
 *
 * Server component: no state, no interactivity, zero client JS cost.
 */
export function Container({ children, className, as: Component = 'div', narrow = false }: ContainerProps) {
  return (
    <Component
      className={clsx(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        narrow ? 'max-w-3xl' : 'max-w-content',
        className
      )}
    >
      {children}
    </Component>
  );
}