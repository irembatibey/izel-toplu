
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { Container } from '@/components/common/Container';
import type { Certificate } from '@/lib/types';

interface CertificateGalleryProps {
  certificates: Certificate[];
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function CertificateGallery({
  certificates,
}: CertificateGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isManualControl, setIsManualControl] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const trackRef = useRef<HTMLDivElement>(null);

  const activeCertificate =
    activeIndex !== null ? certificates[activeIndex] ?? null : null;

  function openCertificate(index: number) {
    setActiveIndex(index);
    setIsOpen(true);
    setIsManualControl(true);
  }

  function closeCertificate() {
    setIsOpen(false);

    if (activeIndex !== null) {
      triggerRefs.current[activeIndex]?.focus();
    }
  }

  function goToCertificate(index: number) {
    if (!trackRef.current || certificates.length === 0) return;

    const cards = trackRef.current.children;
    const target = cards[index] as HTMLElement | undefined;

    if (!target) return;

    setCurrentIndex(index);
    setIsManualControl(true);

    trackRef.current.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth',
    });
  }

  function goToPrevious() {
    if (certificates.length <= 1) return;

    const nextIndex =
      currentIndex === 0 ? certificates.length - 1 : currentIndex - 1;

    goToCertificate(nextIndex);
  }

  function goToNext() {
    if (certificates.length <= 1) return;

    const nextIndex =
      currentIndex === certificates.length - 1 ? 0 : currentIndex + 1;

    goToCertificate(nextIndex);
  }

  // Otomatik kaydırma
  useEffect(() => {
    if (isManualControl || isOpen || certificates.length <= 1) return;

    const interval = window.setInterval(() => {
      const nextIndex =
        currentIndex === certificates.length - 1 ? 0 : currentIndex + 1;

      const cards = trackRef.current?.children;
      const target = cards?.[nextIndex] as HTMLElement | undefined;

      if (!target || !trackRef.current) return;

      setCurrentIndex(nextIndex);

      trackRef.current.scrollTo({
        left: target.offsetLeft,
        behavior: 'smooth',
      });
    }, 3500);

    return () => window.clearInterval(interval);
  }, [isManualControl, isOpen, currentIndex, certificates.length]);

  // Kullanıcı kaydırdığında aktif sertifikayı güncelle
  function handleScroll() {
    if (!trackRef.current) return;

    const cards = Array.from(trackRef.current.children) as HTMLElement[];

    if (!cards.length) return;

    const scrollPosition = trackRef.current.scrollLeft;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - scrollPosition);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  }

  // Lightbox body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');

      const firstFocusable =
        dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);

      firstFocusable?.focus();
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  // Lightbox keyboard controls
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
        <div className="w-full">
          {/* Certificate carousel */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className={clsx(
              'flex w-full gap-6 overflow-x-auto scroll-smooth pb-4',
              'snap-x snap-mandatory',
              '[scrollbar-width:none]',
              '[&::-webkit-scrollbar]:hidden'
            )}
          >
            {certificates.map((certificate, index) => (
              <article
                key={certificate.id}
                className="w-[220px] flex-shrink-0 snap-start overflow-hidden rounded-md border border-neutral-border bg-neutral-bg shadow-sm sm:w-[240px]"
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
                  <h3 className="text-caption font-semibold text-brand-900">
                    {certificate.title}
                  </h3>

                  <p className="mt-1 text-caption text-neutral-text-soft">
                    {certificate.institution} • {certificate.year}
                  </p>

                  <button
                    type="button"
                    ref={(el) => {
                      triggerRefs.current[index] = el;
                    }}
                    onClick={() => openCertificate(index)}
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
            ))}
          </div>

          {/* Carousel navigation */}
          <div className="mt-5 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Önceki sertifika"
              disabled={certificates.length <= 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-border text-brand-800 transition-colors hover:bg-brand-surface disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Sonraki sertifika"
              disabled={certificates.length <= 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-border text-brand-800 transition-colors hover:bg-brand-surface disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Direct certificate selection */}
          <div
            className="mt-4 flex flex-wrap items-center justify-center gap-2"
            aria-label="Sertifika seçimi"
          >
            {certificates.map((certificate, index) => (
              <button
                key={certificate.id}
                type="button"
                onClick={() => goToCertificate(index)}
                aria-label={`${index + 1}. sertifikaya git: ${certificate.title}`}
                aria-current={currentIndex === index ? 'true' : undefined}
                className={clsx(
                  'h-2.5 w-2.5 rounded-full transition-all duration-200',
                  currentIndex === index
                    ? 'scale-125 bg-brand-cta'
                    : 'bg-neutral-border hover:bg-brand-cta/60'
                )}
              />
            ))}
          </div>

          <p className="mt-3 text-center text-caption text-neutral-text-soft">
            {currentIndex + 1} / {certificates.length} sertifika
          </p>
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
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
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
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
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
                  key={`${activeCertificate.imageSrc}?v=2`}
                  src={`${activeCertificate.imageSrc}?v=2`}
                  alt={activeCertificate.imageAlt}
                  fill
                  unoptimized
                  sizes="(min-width: 640px) 512px, 90vw"
                  className="object-contain"
                />
              </div>

              <div className="p-6">
                <h3
                  id="certificate-viewer-title"
                  className="text-h3 font-semibold text-brand-900"
                >
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
