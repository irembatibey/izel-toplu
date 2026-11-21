
import type { Metadata } from 'next';
import {
  Instagram,
  Linkedin,
  Mail,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/common/Reveal';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Button } from '@/components/common/Button';
import { THERAPIST_CONTACT } from '@/content/contact';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'İzel Toplu ile iletişime geçin.',
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'İletişim' },
        ]}
      />

      <PageHero
        eyebrow="İletişim"
        title="Sorularınız İçin Buradayım"
        description="Dil ve konuşma terapisi hakkında bilgi almak veya benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz."
      />

      <section
        aria-labelledby="contact-section-heading"
        className="py-16 md:py-24"
      >
        <Container>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-neutral-border bg-brand-900 p-8 text-neutral-bg shadow-md md:p-12">
            <Reveal>
              <div>
                <p className="text-caption font-semibold uppercase tracking-[0.12em] text-brand-300">
                  İletişim Bilgileri
                </p>

                <h2
                  id="contact-section-heading"
                  className="mt-3 font-serif text-h2 text-neutral-bg"
                >
                  İzel Toplu
                </h2>

                <p className="mt-4 max-w-md text-body text-neutral-bg/75">

                </p>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href={THERAPIST_CONTACT.mailtoHref}
                  className="group flex items-start gap-3 text-body text-neutral-bg/85 transition-colors duration-250 ease-brand-ease hover:text-neutral-bg"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-neutral-bg/10">
                    <Mail
                      className="h-4 w-4 text-brand-300"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="pt-1">{THERAPIST_CONTACT.email}</span>
                </a>

                <a
                  href={THERAPIST_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 text-body text-neutral-bg/85 transition-colors duration-250 ease-brand-ease hover:text-neutral-bg"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-neutral-bg/10">
                    <Instagram
                      className="h-4 w-4 text-brand-300"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="pt-1">
                    @{THERAPIST_CONTACT.instagramHandle}
                  </span>
                </a>

                <a
                  href={THERAPIST_CONTACT.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 text-body text-neutral-bg/85 transition-colors duration-250 ease-brand-ease hover:text-neutral-bg"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-neutral-bg/10">
                    <Linkedin
                      className="h-4 w-4 text-brand-300"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="pt-1">LinkedIn</span>
                </a>
              </div>

              <div className="my-9 border-t border-neutral-bg/15" />

              <div>
                <p className="text-caption font-semibold uppercase tracking-[0.12em] text-brand-300">
                  Randevu ve Bilgi
                </p>

                <h3 className="mt-3 font-serif text-h3 text-neutral-bg">
                  Patika Dil ve Konuşma Merkezi
                </h3>

                <p className="mt-3 max-w-lg text-body text-neutral-bg/75">
                  Randevu almak veya merkezde sunulan hizmetler hakkında
                  bilgi edinmek için Patika Dil ve Konuşma Merkezi&apos;nin
                  iletişim sayfasını ziyaret edebilirsiniz.
                </p>

                <div className="mt-7">
                  <Button
                    href="https://patikadilkonusma.com/iletisim/"
                    variant="primary"
                    showArrow
                  >
                    Patika ile İletişime Geçin
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
