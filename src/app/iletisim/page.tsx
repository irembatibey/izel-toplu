import type { Metadata } from 'next';
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'İzel Toplu ile iletişime geçin.',
};

const INSTAGRAM_URL = 'https://www.instagram.com/dkt.izeltoplu/';
const LINKEDIN_URL = 'https://tr.linkedin.com/in/izel-toplu-0745b3363';

const PATIKA_ADDRESS =
  'İhsaniye, Celal Atik Cd. No:56 D:1 A Blok, 10200 Bandırma/BALIKESİR';

const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  PATIKA_ADDRESS
)}&output=embed`;

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
        description="Randevu ve terapi süreci hakkında bilgi almak için benimle veya çalıştığım merkezle iletişime geçebilirsiniz."
      />

      <section
        aria-labelledby="contact-section-heading"
        className="py-16 md:py-24"
      >
        <Container>
          <div className="grid overflow-hidden rounded-lg border border-neutral-border bg-neutral-bg shadow-md md:grid-cols-[0.85fr_1.15fr]">
            {/* Contact information */}
            <Reveal>
              <div className="h-full bg-brand-900 p-8 text-neutral-bg md:p-10 lg:p-12">
                <div>
                  <p className="text-caption font-semibold uppercase tracking-[0.12em] text-brand-300">
                    İletişim Bilgileri
                  </p>

                  <h2
                    id="contact-section-heading"
                    className="mt-3 font-serif text-h2 text-neutral-bg"
                  >
                    Bana Ulaşın
                  </h2>

                  <p className="mt-4 max-w-md text-body text-neutral-bg/75">
                    Dil ve konuşma terapisi hakkında bilgi almak veya
                    iletişim kurmak için aşağıdaki kanallardan bana
                    ulaşabilirsiniz.
                  </p>
                </div>

                <div className="mt-10">
                  <p className="text-caption font-semibold uppercase tracking-[0.12em] text-brand-300">
                    İzel Toplu
                  </p>

                  <div className="mt-5 space-y-4">
                    <a
                      href="mailto:dkt.izeltoplu@gmail.com"
                      className="group flex items-start gap-3 text-body text-neutral-bg/85 transition-colors duration-250 ease-brand-ease hover:text-neutral-bg"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-neutral-bg/10">
                        <Mail
                          className="h-4 w-4 text-brand-300"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="pt-1">dkt.izeltoplu@gmail.com</span>
                    </a>

                    <a
                      href={INSTAGRAM_URL}
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
                      <span className="pt-1">@dkt.izeltoplu</span>
                    </a>

                    <a
                      href={LINKEDIN_URL}
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
                </div>

                <div className="my-9 border-t border-neutral-bg/15" />

                <div>
                  <p className="text-caption font-semibold uppercase tracking-[0.12em] text-brand-300">
                    Patika Dil, Konuşma ve Ergoterapi Merkezi
                  </p>

                  <p className="mt-3 max-w-sm text-body text-neutral-bg/75">
                    Değerlendirme ve Terapi Hizmetleri hakkında bilgi almak
                    isterseniz Patika Dil, Konuşma ve Ergoterapi Merkezi
                    ailesi olarak bizimle iletişime geçebilirsiniz.
                  </p>

                  <div className="mt-6 space-y-4">
                    <a
                      href="tel:+905496960110"
                      className="flex items-start gap-3 text-body text-neutral-bg/85 transition-colors duration-250 ease-brand-ease hover:text-neutral-bg"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-neutral-bg/10">
                        <Phone
                          className="h-4 w-4 text-brand-300"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="pt-1">0549 696 0110</span>
                    </a>

                    <a
                      href="mailto:info@patikadilkonusma.com"
                      className="flex items-start gap-3 text-body text-neutral-bg/85 transition-colors duration-250 ease-brand-ease hover:text-neutral-bg"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-neutral-bg/10">
                        <Mail
                          className="h-4 w-4 text-brand-300"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="pt-1">info@patikadilkonusma.com</span>
                    </a>

                    <div className="flex items-start gap-3 text-body text-neutral-bg/75">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-neutral-bg/10">
                        <MapPin
                          className="h-4 w-4 text-brand-300"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="pt-1">{PATIKA_ADDRESS}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal delay={0.1}>
              <div className="p-8 md:p-10 lg:p-12">
                <SectionHeading
                  eyebrow="Mesaj Gönderin"
                  title="Nasıl yardımcı olabilirim?"
                  description="Sorunuzu veya bilgi almak istediğiniz konuyu aşağıdaki form aracılığıyla iletebilirsiniz."
                />

                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Location */}
      <section
        aria-labelledby="location-heading"
        className="bg-neutral-bg-soft py-16 md:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="location-heading"
              eyebrow="Konum"
              title="Patika Dil, Konuşma ve Ergoterapi Merkezi"
              description={PATIKA_ADDRESS}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-lg border border-neutral-border bg-neutral-bg shadow-sm">
              <iframe
                title="Patika Dil, Konuşma ve Ergoterapi Merkezi konumu"
                src={MAP_URL}
                className="h-[320px] w-full border-0 md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}