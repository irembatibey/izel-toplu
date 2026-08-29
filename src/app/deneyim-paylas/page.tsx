import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TestimonialForm } from '@/components/testimonials/TestimonialForm';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Deneyiminizi Paylaşın',
  description: 'Terapi sürecinizle ilgili deneyiminizi bizimle paylaşın.',
};

export default function ShareExperiencePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Deneyiminizi Paylaşın' },
        ]}
      />

      <PageHero
        eyebrow="Danışan Deneyimleri"
        title="Deneyiminizi Paylaşın"
        description="Terapi sürecinizle ilgili deneyiminizi bizimle paylaşabilirsiniz."
      />

      <section aria-labelledby="share-experience-heading" className="py-16 md:py-24">
        <Container narrow>
          <Reveal>
            <SectionHeading
              id="share-experience-heading"
              eyebrow="Yorum Formu"
              title="Deneyiminizi Bizimle Paylaşın"
            />
            <div className="mt-8">
              <TestimonialForm />
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}