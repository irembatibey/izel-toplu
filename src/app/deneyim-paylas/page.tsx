
import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Danışan Deneyimleri',
  description:
    'Dil ve konuşma terapisi sürecine ilişkin danışan deneyimleri.',
};

export default function ShareExperiencePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Danışan Deneyimleri' },
        ]}
      />

      <PageHero
        eyebrow="Danışan Deneyimleri"
        title="Danışan Deneyimleri"
        description="Terapi sürecine ilişkin deneyimleri ve paylaşımları burada bulabilirsiniz."
      />

      <section
        aria-labelledby="share-experience-heading"
        className="py-16 md:py-24"
      >
        <Container narrow>
          <Reveal>
            <SectionHeading
              id="share-experience-heading"
              eyebrow="Gerçek Deneyimler"
              title="Danışanların Gözünden"
            />

            <p className="mt-6 text-center text-body text-neutral-text-soft">
              Danışan deneyimleri bu alanda paylaşılacaktır.
            </p>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
