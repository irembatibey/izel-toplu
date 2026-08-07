import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';

/**
 * Supportive, not sales-oriented, per instruction — no urgency
 * language, no "limited spots"-style pressure copy.
 */
export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-brand-900 py-20 text-center md:py-24"
    >
      {/* Purely decorative, very low opacity on an already-dark
          background — adds depth without drawing the eye away from
          the heading/CTA. Hidden from assistive tech. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/20 blur-3xl"
      />

      <Container className="relative">
        <Reveal>
          <h2 id="final-cta-heading" className="font-serif text-h2 text-neutral-bg">
            Bir Adım Atmaya Hazır Mısınız?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-body text-brand-200">
            Sorularınız için buradayım — birlikte doğru yolu bulalım.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/iletisim" variant="primary" showArrow>
              İletişime Geçin
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}