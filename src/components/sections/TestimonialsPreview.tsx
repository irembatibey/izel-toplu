import { Quote } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';

const TESTIMONIAL_PLACEHOLDER_COUNT = 2;

/**
 * No real testimonials exist yet, and none are invented here — per
 * instruction. This lays out the future layout (dashed border is a
 * deliberate visual signal distinguishing it from finished content
 * elsewhere on the page) so real testimonials can drop in later
 * without a structural change.
 */
export function TestimonialsPreview() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-neutral-bg-soft py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Danışan Deneyimleri"
            title="Danışanlarımız Ne Diyor?"
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mx-auto mt-12 grid gap-6 md:max-w-3xl md:grid-cols-2">
          {Array.from({ length: TESTIMONIAL_PLACEHOLDER_COUNT }).map((_, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="rounded-md border border-dashed border-brand-300 bg-neutral-bg p-9 text-center">
                <Quote className="mx-auto mb-4 h-6 w-6 text-brand-300" aria-hidden="true" />
                <p className="text-body italic text-neutral-text-soft">
                  [PLACEHOLDER: Danışan yorumu buraya eklenecek]
                </p>
                <p className="mt-4 text-caption font-semibold text-brand-800">
                  [PLACEHOLDER: İsim / Yakınlık]
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}