import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { Reveal } from '@/components/common/Reveal';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { getServiceSummaries } from '@/content/services';

export const metadata: Metadata = {
  title: 'Hizmet Alanları',
  description: 'Çocuklarda ve yetişkinlerde dil ve konuşma güçlükleri için sunulan hizmet alanları.',
};

export default function ServicesIndexPage() {
  const services = getServiceSummaries();

  return (
    <>
      <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hizmetler' }]} />
      <PageHero
        eyebrow="Hizmet Alanları"
        title="Hangi Konularda Destek Sağlıyorum?"
        description="Çocuklarda ve yetişkinlerde sık görülen dil ve konuşma güçlüklerinin tümü."
      />

      <section aria-label="Hizmet alanları listesi" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
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
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}