
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { NavLink } from './NavLink';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setIsOpen(false);
    toggleButtonRef.current?.focus();
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');

      const firstFocusable =
        drawerRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);

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
        closeMenu();
        return;
      }

      if (event.key !== 'Tab' || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          FOCUSABLE_SELECTOR
        )
      );

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () =>
      document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Menu toggle */}
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

      {/* Backdrop */}
      <button
        type="button"
        onClick={closeMenu}
        tabIndex={-1}
        aria-hidden="true"
        className={clsx(
          'fixed inset-0 z-40 cursor-default bg-brand-900/40 transition-opacity duration-300 ease-brand-ease',
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      />

      {/* Mobile drawer */}
      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${SITE_NAME} mobil menü`}
        className={clsx(
          'fixed inset-y-0 right-0 z-50 flex h-[100dvh] w-[min(340px,88vw)] flex-col overflow-hidden bg-white shadow-xl transition-transform duration-320 ease-brand-ease',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header: logo, brand and close button */}
        <div className="relative z-10 flex items-center justify-between px-6 pb-5 pt-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-[54px] w-[54px] flex-shrink-0">
              <Image
                src="/images/logo-cropped.png"
                alt={`${SITE_NAME} logosu`}
                fill
                sizes="54px"
                className="object-contain"
              />
            </div>

            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="font-serif text-lg leading-tight text-brand-800">
                {SITE_NAME}
              </span>

              <span className="text-[10px] leading-tight tracking-wide text-neutral-text-soft">
                Dil ve Konuşma Terapisti
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Menüyü kapat"
            className="ml-3 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-brand-800 transition-colors duration-250 ease-brand-ease hover:bg-brand-surface hover:text-brand-cta"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 border-t border-neutral-border" />

        {/* Navigation */}
        <nav
          aria-label="Mobil menü bağlantıları"
          className="relative z-10 flex-1 px-8 pt-10"
        >
          <ul className="flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  onClick={closeMenu}
                >
                  <span className="font-serif text-[25px] font-normal tracking-tight text-brand-800 transition-colors duration-250 ease-brand-ease hover:text-brand-cta">
                    {link.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Minimal blue wave decoration */}
        <div
          className="pointer-events-none relative mt-auto h-[105px] w-full flex-shrink-0"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 340 105"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 36 C75 12 125 72 205 52 C265 37 295 17 340 27 V105 H0 Z"
              fill="#E4F1F8"
            />

            <path
              d="M0 62 C75 34 132 83 205 70 C270 58 305 38 340 47 V105 H0 Z"
              fill="#C9E2F1"
            />

            <path
              d="M0 82 C80 59 135 94 210 84 C270 76 310 59 340 66 V105 H0 Z"
              fill="#A9CFE5"
              opacity="0.75"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
