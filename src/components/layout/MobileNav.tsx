'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { NavLink } from './NavLink';

/**
 * Slide-in drawer, mobile-only (hidden md:up via the outer wrapper).
 * Client component — genuinely needs interaction: open/close state,
 * a focus trap, Escape-to-close, and body scroll lock while open.
 *
 * Accessibility: role="dialog" + aria-modal, focus moves into the
 * drawer on open and returns to the toggle button on close, Tab is
 * trapped within the drawer while it's open, Escape closes it.
 *
 * Motion: the slide transition uses design tokens (duration-320,
 * ease-brand-ease) and is automatically neutralized for
 * prefers-reduced-motion by the global rule in globals.css — no
 * per-component reduced-motion branching needed here.
 */
/**
 * Selects all genuinely tabbable elements — not just links/buttons.
 * Excludes disabled controls and anything explicitly removed from
 * the tab order (tabindex="-1", used by the backdrop button below,
 * which lives outside the drawer anyway and is never matched by
 * this query since it's DOM-scoped to drawerRef).
 */
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
      firstFocusable?.focus();
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      // Type-safe by construction, not assumption: destructuring
      // from an array TypeScript can't statically size still yields
      // `HTMLElement | undefined` under noUncheckedIndexedAccess, so
      // we check explicitly and bail out rather than asserting with
      // `!`. An empty drawer (nothing focusable) simply does nothing.
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={toggleButtonRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        aria-label="Menüyü aç"
        className="rounded-sm p-2 text-brand-800 transition-colors duration-250 ease-brand-ease hover:text-brand-cta"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Backdrop — a <button>, not a <div onClick>, so it's natively
          interactive (satisfies accessibility linting) without being
          reachable by keyboard/AT: tabIndex=-1 + aria-hidden remove it
          from the tab order and screen-reader tree, since Escape
          already provides the keyboard-equivalent dismissal. */}
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        tabIndex={-1}
        aria-hidden="true"
        className={clsx(
          'fixed inset-0 z-40 cursor-default bg-brand-900/40 transition-opacity duration-300 ease-brand-ease',
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      />

      {/* Drawer */}
      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${SITE_NAME} mobil menü`}
        className={clsx(
          'fixed inset-y-0 right-0 z-50 flex h-full w-[min(320px,85vw)] flex-col gap-8 bg-neutral-bg p-6 shadow-lg transition-transform duration-320 ease-brand-ease',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Menüyü kapat"
          className="self-end rounded-sm p-2 text-brand-800 transition-colors duration-250 ease-brand-ease hover:text-brand-cta"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>

        <nav aria-label="Mobil menü bağlantıları">
          <ul className="flex flex-col gap-6 text-h3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
