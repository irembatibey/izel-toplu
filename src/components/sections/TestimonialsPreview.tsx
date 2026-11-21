
import { Quote } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { TESTIMONIALS } from '@/content/testimonials';

/**
 * No fake or placeholder testimonials are ever shown here.
 */
export function TestimonialsPreview() {
  const hasTestimonials = TESTIMONIALS.length > 0;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-neutral-bg-soft py-20 md:py-28"
    >
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

        {hasTestimonials ? (
          <div className="mx-auto mt-12 grid gap-6 md:max-w-3xl md:grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <Reveal
                key={`${testimonial.author}-${index}`}
                delay={index * 0.1}
              >
                <div className="rounded-md border border-neutral-border bg-neutral-bg p-9 text-center shadow-sm">
                  <Quote
                    className="mx-auto mb-4 h-6 w-6 text-brand-300"
                    aria-hidden="true"
                  />
                  <p className="text-body italic text-neutral-text-soft">
                    {testimonial.quote}
                  </p>
                  <p className="mt-4 text-caption font-semibold text-brand-800">
                    {testimonial.author}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 max-w-md text-center">
              <Quote
                className="mx-auto mb-4 h-6 w-6 text-brand-300"
                aria-hidden="true"
              />
              <p className="text-body text-neutral-text-soft">
                Henüz danışan yorumu bulunmuyor.
              </p>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
