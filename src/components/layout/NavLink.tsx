'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * The only reason this is a client component: `usePathname()` is
 * needed to know the active route for `aria-current`/styling, and
 * that hook only works client-side. Everything else about the nav
 * (the list, the container, the map over NAV_LINKS) stays in server
 * components — see DesktopNav.tsx — so this stays a small, isolated
 * island rather than pulling the whole header into the client bundle.
 */
export function NavLink({ href, children, onClick, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'relative pb-1 text-neutral-text transition-colors duration-250 ease-brand-ease hover:text-brand-cta-dark',
        'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand-cta after:transition-all after:duration-280 after:ease-brand-ease',
        isActive
          ? 'font-medium text-brand-cta-dark after:w-full'
          : 'after:w-0 hover:after:w-full',
        className
      )}
    >
      {children}
    </Link>
  );
}