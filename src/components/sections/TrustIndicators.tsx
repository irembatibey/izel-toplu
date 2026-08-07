import { CheckCircle2, SlidersHorizontal, Users, HeartHandshake } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';

// These four points restate the strengths the therapist asked to
// have highlighted (evidence-based practice, individualized therapy,
// multidisciplinary/family collaboration, experience with both
// children and adults) — approved content categories from earlier
// planning, phrased generically rather than as unverifiable claims.
const TRUST_POINTS = [
  {
    icon: CheckCircle2,
    title: 'Kanıta Dayalı Yaklaşım',
    description: 'Güncel bilimsel literatürle desteklenen terapi yöntemleri.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Bireyselleştirilmiş Terapi',
    description: 'Her danışan için kişiye özel planlanan terapi programları.',
  },
  {
    icon: Users,
    title: 'Çocuk ve Yetişkin Deneyimi',
    description: 'Farklı yaş gruplarında klinik deneyim.',
  },
  {
    icon: HeartHandshake,
    title: 'Aile ve Kurumlarla İşbirliği',
    description: 'Aile ve gerektiğinde diğer uzmanlarla koordineli çalışma.',
  },
] as const;

/**
 * Deliberately NOT built from the Card component — specced as
 * "elegant, minimal... no large marketing cards." No border/shadow
 * on the items themselves; a hairline top border on the *section*
 * plus a hover color transition on each icon is as far as this
 * goes toward "interaction quality."
 *
 * Polish pass — section rhythm: this section previously used the
 * same symmetric py-20/28 as every other section, which combined
 * with the Hero's own bottom padding to create an oversized, dead
 * gap between the two. Now: a subtle top border (echoing the
 * hairline pattern already used in Header/Footer) gives the seam a
 * visual anchor, and padding is asymmetric — tighter above, more
 * generous below — so the page reads as one continuous flow rather
 * than the Hero ending and a new page starting.
 */
export function TrustIndicators() {
  return (
    <section
      aria-labelledby="trust-indicators-heading"
      className="border-t border-neutral-border pb-24 pt-16 md:pb-32 md:pt-20"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="trust-indicators-heading"
            eyebrow="Neden Ben?"
            title="Terapi Yaklaşımımın Temelleri"
          />
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.08}>
              <div className="group flex flex-col items-start gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-surface transition-colors duration-320 ease-brand-ease group-hover:bg-brand-cta">
                  <point.icon
                    className="h-5 w-5 text-brand-cta transition-colors duration-320 ease-brand-ease group-hover:text-neutral-bg"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="text-h3 font-semibold text-brand-900">{point.title}</h3>
                <p className="text-body text-neutral-text-soft">{point.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}