import { CheckCircle2, Users2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { Accordion } from '@/components/common/Accordion';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Card } from '@/components/common/Card';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { ServiceHero } from './ServiceHero';
import { getServiceSummaries } from '@/content/services';
import type { ServiceDetail } from '@/lib/types';

interface ServiceDetailTemplateProps {
  service: ServiceDetail;
}

/**
 * Generic by construction: every section reads from the `service`
 * prop; nothing here branches on a specific slug or condition name.
 * Adding a new service page later means adding a new ServiceDetail
 * data object (content/services/) and registering it in
 * content/services/index.ts — this template does not change.
 *
 * CTA section reuses the homepage's FinalCTA component directly
 * rather than duplicating a CTA block — it was already fully
 * generic (no homepage-specific content), so this is composition,
 * not a homepage revisit.
 */
export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const relatedServices = getServiceSummaries().filter((summary) =>
    service.relatedSlugs?.includes(summary.slug)
  );

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hizmetler', href: '/hizmetler' },
          { label: service.title },
        ]}
      />
      <ServiceHero service={service} />

      <section aria-labelledby="service-overview-heading" className="py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <SectionHeading id="service-overview-heading" eyebrow="Bu Nedir?" title="Genel Bakış" />
            <p className="mt-4 text-body text-neutral-text-soft">{service.overview}</p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="service-symptoms-heading" className="bg-neutral-bg-soft py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <SectionHeading id="service-symptoms-heading" eyebrow="Belirtiler" title="Nelere Dikkat Etmeli?" />
            <ul className="mt-6 space-y-3">
              {service.symptoms.map((symptom) => (
                <li key={symptom} className="flex items-start gap-3 text-body text-neutral-text-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-cta" aria-hidden="true" />
                  {symptom}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="service-who-heading" className="py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <SectionHeading id="service-who-heading" eyebrow="Kimler İçin" title="Bu Süreç Kimler İçin Uygun?" />
            <div className="mt-6 flex items-start gap-3">
              <Users2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-cta" aria-hidden="true" />
              <p className="text-body text-neutral-text-soft">{service.whoCanBenefit}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="service-process-heading" className="bg-neutral-bg-soft py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <SectionHeading id="service-process-heading" eyebrow="Süreç" title="Terapi Süreci Nasıl İşliyor?" />
            <p className="mt-4 text-body text-neutral-text-soft">{service.process}</p>
          </Reveal>
        </Container>
      </section>

      {service.faq.length > 0 && (
        <section aria-labelledby="service-faq-heading" className="py-20 md:py-28">
          <Container narrow>
            <Reveal>
              <SectionHeading id="service-faq-heading" eyebrow="SSS" title="Sıkça Sorulan Sorular" />
              <div className="mt-8">
                <Accordion items={service.faq} />
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section aria-labelledby="service-related-heading" className="bg-neutral-bg-soft py-20 md:py-28">
          <Container>
            <Reveal>
              <SectionHeading
                id="service-related-heading"
                eyebrow="İlgili Konular"
                title="Diğer Hizmet Alanları"
                align="center"
                className="mx-auto"
              />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related, index) => (
                <Reveal key={related.slug} delay={index * 0.08}>
                  <Card
                    icon={related.icon}
                    title={related.title}
                    description={related.shortDescription}
                    href={`/hizmetler/${related.slug}`}
                    linkLabel="Detaylı bilgi"
                  />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FinalCTA />
    </>
  );
}