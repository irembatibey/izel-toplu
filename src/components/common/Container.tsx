import { clsx } from 'clsx';
import type { ElementType, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Render as a different element when semantics require it (e.g. 'section'). */
  as?: ElementType<{ className?: string; children?: ReactNode }>;
}

/**
 * Single source of truth for content max-width and horizontal
 * padding. Every page/section that needs consistent content width
 * uses this instead of repeating max-w/px- values — the exact
 * duplication this phase was asked to avoid.
 *
 * Server component: no state, no interactivity, zero client JS cost.
 */
export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={clsx('mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </Component>
  );
}
