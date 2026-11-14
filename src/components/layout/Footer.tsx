import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SITE_NAME } from '@/lib/constants';
import { THERAPIST_CONTACT, INSTITUTION_CONTACT } from '@/content/contact';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-border bg-neutral-bg-soft">
      <Container className="grid gap-10 py-12 text-body text-neutral-text-soft md:grid-cols-4">
        <div>
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

          <p className="mt-2 max-w-xs">Dil ve Konuşma Terapisti</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium text-brand-800">İletişim</p>
          <p>{INSTITUTION_CONTACT.phone}</p>
          <p>{THERAPIST_CONTACT.email}</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium text-brand-800">Kurum &amp; Adres</p>
          <p>{INSTITUTION_CONTACT.name}</p>
          <p>{INSTITUTION_CONTACT.address}</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-medium text-brand-800">Sosyal Medya</p>

          <a
            href={THERAPIST_CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors duration-250 ease-brand-ease hover:text-brand-800"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            <span>@{THERAPIST_CONTACT.instagramHandle}</span>
          </a>

          <a
            href={THERAPIST_CONTACT.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors duration-250 ease-brand-ease hover:text-brand-800"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>
      </Container>

      <div className="border-t border-neutral-border">
        <Container className="py-6 text-caption text-neutral-text-soft">
          <p>
            © {currentYear} {SITE_NAME}. Tüm hakları saklıdır.{' '}
            <a
                href="/gizlilik"
                className="italic transition-colors duration-250 ease-brand-ease hover:text-brand-800"
            >
              Gizlilik ve KVKK
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}