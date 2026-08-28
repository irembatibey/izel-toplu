'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, X } from 'lucide-react';
import { clsx } from 'clsx';
import { Container } from '@/components/common/Container';
import type { Certificate } from '@/lib/types';

interface CertificateGalleryProps {
  certificates: Certificate[];
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Horizontal, slowly auto-scrolling certificate gallery with a
 * click-to-view lightbox.
 *
 * The scrolling itself is pure CSS (the `cert-scroll` keyframe
 * animation defined in tailwind.config.ts, applied via Tailwind's
 * motion-safe: variant — same pattern already used by
 * ExperienceTimeline's gentle-float). The track is rendered twice
 * back-to-back and animated from translateX(0) to translateX(-50%),
 * which keeps the loop seamless at any viewport width without any
 * JS pixel measurement. Hover/focus pausing is also pure CSS
 * (group-hover / group-focus-within toggling animation-play-state).
 *
 * This is a Client Component only because the "Belgeyi Görüntüle"
 * lightbox needs local open/close state — the scrolling animation
 * itself works identically in a Server Component and would keep
 * running even if this file had no "use client" directive.
 *
 * Focus trap / Escape / body-scroll-lock mirrors the existing
 * accessible-overlay pattern already established in MobileNav.tsx.
 */
export function CertificateGallery({ certificates }: CertificateGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeCertificate = activeIndex !== null ? certificates[activeIndex] ?? null : null;

  function openCertificate(index: number) {
    setActiveIndex(index);
    setIsOpen(true);
  }

  function closeCertificate() {
    setIsOpen(false);
    if (activeIndex !== null) {
      triggerRefs.current[activeIndex]?.focus();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      const firstFocusable = dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
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
        closeCertificate();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeIndex]);

  return (
    <>
      <Container>
        <div
          className={clsx(
            'group relative w-full overflow-hidden',
            '[mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%_-_24px),transparent)]',
            '[-webkit-mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%_-_24px),transparent)]'
          )}
        >
          <div className="flex w-max flex-nowrap gap-6 motion-safe:animate-cert-scroll motion-safe:group-hover:[animation-play-state:paused] motion-safe:group-focus-within:[animation-play-state:paused]">
            {[0, 1].map((copy) =>
              certificates.map((certificate, index) => (
                <article
                  key={`${copy}-${certificate.id}`}
                  aria-hidden={copy === 1 ? true : undefined}
                  className="w-[220px] flex-shrink-0 overflow-hidden rounded-md border border-neutral-border bg-neutral-bg shadow-sm sm:w-[240px]"
                >
                  <div className="relative aspect-[4/3] bg-brand-surface">
                    <Image
                      src={certificate.imageSrc}
                      alt={certificate.imageAlt}
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-caption font-semibold text-brand-900">{certificate.title}</h3>
                    <p className="mt-1 text-caption text-neutral-text-soft">
                      {certificate.institution} • {certificate.year}
                    </p>
                    <button
                      type="button"
                      ref={(el) => {
                        if (copy === 0) triggerRefs.current[index] = el;
                      }}
                      onClick={() => openCertificate(index)}
                      tabIndex={copy === 1 ? -1 : 0}
                      className="group/link mt-3 inline-flex items-center gap-1.5 text-caption font-semibold text-brand-cta-dark transition-colors duration-250 ease-brand-ease hover:text-brand-cta"
                    >
                      Belgeyi Görüntüle
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-280 ease-brand-ease group-hover/link:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </Container>

      {/* Backdrop */}
      <button
        type="button"
        onClick={closeCertificate}
        tabIndex={-1}
        aria-hidden="true"
        className={clsx(
          'fixed inset-0 z-40 cursor-default bg-brand-900/60 transition-opacity duration-300 ease-brand-ease',
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      />

      {/* Certificate viewer */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-viewer-title"
        className={clsx(
          'fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-320 ease-brand-ease',
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <div
          className={clsx(
            'relative flex w-full max-w-lg flex-col overflow-hidden rounded-lg bg-neutral-bg shadow-lg transition-transform duration-320 ease-brand-ease',
            isOpen ? 'scale-100' : 'scale-95'
          )}
        >
          <button
            type="button"
            onClick={closeCertificate}
            aria-label="Kapat"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-bg/90 text-brand-800 shadow-sm transition-colors duration-250 ease-brand-ease hover:text-brand-cta"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {activeCertificate && (
            <>
              <div className="relative aspect-[4/3] w-full bg-brand-surface">
                <Image
                  src={activeCertificate.imageSrc}
                  alt={activeCertificate.imageAlt}
                  fill
                  sizes="(min-width: 640px) 512px, 90vw"
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 id="certificate-viewer-title" className="text-h3 font-semibold text-brand-900">
                  {activeCertificate.title}
                </h3>
                <p className="mt-1 text-caption text-neutral-text-soft">
                  {activeCertificate.institution} • {activeCertificate.year}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}