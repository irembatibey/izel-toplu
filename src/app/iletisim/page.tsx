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
import { THERAPIST_CONTACT, INSTITUTION_CONTACT } from '@/content/contact';

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
                </div>

                <div className="my-9 border-t border-neutral-bg/15" />

                <div>
                  <p className="text-caption font-semibold uppercase tracking-[0.12em] text-brand-300">
                    {INSTITUTION_CONTACT.name}
                  </p>

                  <p className="mt-3 max-w-sm text-body text-neutral-bg/75">
                    Değerlendirme ve Terapi Hizmetleri hakkında bilgi almak
                    isterseniz Patika Dil, Konuşma ve Ergoterapi Merkezi
                    ailesi olarak bizimle iletişime geçebilirsiniz.
                  </p>

                  <div className="mt-6 space-y-4">
                      <a
                      href={INSTITUTION_CONTACT.phoneHref}
                      className="flex items-start gap-3 text-body text-neutral-bg/85 transition-colors duration-250 ease-brand-ease hover:text-neutral-bg"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-neutral-bg/10">
                        <Phone
                          className="h-4 w-4 text-brand-300"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="pt-1">{INSTITUTION_CONTACT.phone}</span>
                    </a>

                      <a
                      href={INSTITUTION_CONTACT.mailtoHref}
                      className="flex items-start gap-3 text-body text-neutral-bg/85 transition-colors duration-250 ease-brand-ease hover:text-neutral-bg"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-neutral-bg/10">
                        <Mail
                          className="h-4 w-4 text-brand-300"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="pt-1">{INSTITUTION_CONTACT.email}</span>
                    </a>

                    <div className="flex items-start gap-3 text-body text-neutral-bg/75">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-neutral-bg/10">
                        <MapPin
                          className="h-4 w-4 text-brand-300"

                          aria-hidden="true"
                        />
                      </span>
                      <span className="pt-1">{INSTITUTION_CONTACT.address}</span>
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
              title={INSTITUTION_CONTACT.name}
              description={INSTITUTION_CONTACT.address}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-lg border border-neutral-border bg-neutral-bg shadow-sm">
              <iframe
                title={INSTITUTION_CONTACT.mapTitle}
                src={INSTITUTION_CONTACT.mapEmbedUrl}
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