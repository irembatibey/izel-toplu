
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SITE_NAME } from '@/lib/constants';
import { THERAPIST_CONTACT } from '@/content/contact';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-border bg-neutral-bg-soft">
      <Container className="py-10 md:py-12">
        <div className="flex flex-col gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/images/logo-cropped.png"
                  alt={`${SITE_NAME} logosu`}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>

              <p className="font-serif text-h3 text-brand-800">
                {SITE_NAME}
              </p>
            </div>

            <p className="text-body text-neutral-text-soft">
              Dil ve Konuşma Terapisti
            </p>
          </div>

          <div className="border-t border-neutral-border" />

          {/* Contact and social media */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <p className="font-medium text-brand-800">İletişim</p>

              <a
                href={THERAPIST_CONTACT.mailtoHref}
                className="w-fit text-body text-neutral-text-soft transition-colors duration-250 ease-brand-ease hover:text-brand-800"
              >
                {THERAPIST_CONTACT.email}
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-medium text-brand-800">Sosyal Medya</p>

              <a
                href={THERAPIST_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-body text-neutral-text-soft transition-colors duration-250 ease-brand-ease hover:text-brand-800"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <span>@{THERAPIST_CONTACT.instagramHandle}</span>
              </a>

              <a
                href={THERAPIST_CONTACT.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-body text-neutral-text-soft transition-colors duration-250 ease-brand-ease hover:text-brand-800"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-border" />

          {/* Copyright */}
          <div className="flex flex-col gap-2 text-caption text-neutral-text-soft sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} {SITE_NAME}. Tüm hakları saklıdır.
            </p>

            <a
              href="/gizlilik"
              className="w-fit italic transition-colors duration-250 ease-brand-ease hover:text-brand-800"
            >
              Gizlilik ve KVKK
            </a>
          </div>

          {/* Developer credit */}
          <div className="border-t border-neutral-border/60 pt-4 text-center">
            <a
              href="https://www.linkedin.com/in/irembatibey/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="İrem Batıbey LinkedIn profili"
              className="text-xs text-neutral-text-soft/60 transition-colors duration-200 hover:text-brand-cta"
            >
              Designed & Developed by İrem Batıbey
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
