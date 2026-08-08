import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { getServiceSummaries } from '@/content/services';

/**
 * Phase 5 change: data moved to src/content/services/index.ts
 * (single source of truth shared with the Services Index page) —
 * see that file's comments. Everything else in this component is
 * unchanged from the approved Phase 4 polish.
 */
export function TherapyAreasPreview() {
  const services = getServiceSummaries();

  return (
    <section aria-labelledby="therapy-areas-heading" className="bg-neutral-bg-soft py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="therapy-areas-heading"
            eyebrow="Hizmet Alanları"
            title="Hangi Konularda Destek Sağlıyorum?"
            description="Çocuklarda ve yetişkinlerde sık görülen dil ve konuşma güçlüklerinden bazıları."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08}>
              <Card
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                href={`/hizmetler/${service.slug}`}
                linkLabel="Detaylı bilgi"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 flex justify-center">
          <Button href="/hizmetler" variant="ghost">
            Tüm Hizmet Alanlarını Gör
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}