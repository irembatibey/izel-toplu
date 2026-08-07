import { ClipboardCheck, Target, RefreshCw, TrendingUp } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';

const PROCESS_STEPS = [
  {
    icon: ClipboardCheck,
    title: 'Değerlendirme',
    description: 'İhtiyaçların birlikte netleştirildiği ilk görüşme.',
  },
  {
    icon: Target,
    title: 'Kişiye Özel Plan',
    description: 'Değerlendirmeye göre oluşturulan terapi planı.',
  },
  {
    icon: RefreshCw,
    title: 'Düzenli Takip',
    description: 'Planın uygulandığı, düzenli terapi seansları.',
  },
  {
    icon: TrendingUp,
    title: 'İlerleme Değerlendirmesi',
    description: 'Sürecin gözden geçirilip gerektiğinde uyarlanması.',
  },
] as const;

/**
 * Redesigned from a numbered grid (felt like a generic corporate
 * process timeline) into a connected journey: a soft gradient
 * thread runs behind every step — vertical on mobile, horizontal
 * on desktop — and each icon sits on it inside a ring-masked circle,
 * so the line visually threads through rather than being layered
 * behind text. No numbers; sequence is carried by position and the
 * connecting line itself, which is what "guided journey" means
 * concretely rather than "corporate timeline with numbered boxes."
 *
 * The gradient fades to transparent at both ends (from-transparent
 * ... to-transparent) specifically so it never needs to align
 * pixel-perfectly with the first/last icon — it's deliberately
 * ambient rather than a precisely-drawn connector, keeping it
 * "extremely subtle... almost invisible during normal reading" as
 * specced, and robust to future content-length changes without
 * fragile positioning math.
 */
export function TherapyProcessPreview() {
  return (
    <section aria-labelledby="therapy-process-heading" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="therapy-process-heading"
            eyebrow="Süreç"
            title="Terapi Yolculuğu Nasıl İşliyor?"
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="relative mt-16 md:mt-20">
          {/* Decorative connecting thread — purely visual, hidden from assistive tech. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-300 to-transparent md:bottom-auto md:left-0 md:right-0 md:top-7 md:h-px md:w-auto md:bg-gradient-to-r"
          />

          <ol className="relative flex flex-col gap-10 md:flex-row md:gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.title} className="md:flex-1">
                <Reveal
                  delay={index * 0.1}
                  className="flex items-start gap-5 md:flex-col md:items-center md:gap-4 md:text-center"
                >
                  <span className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-brand-surface ring-4 ring-neutral-bg">
                    <step.icon className="h-6 w-6 text-brand-cta" aria-hidden="true" />
                  </span>
                  <div className="pt-1 md:pt-0">
                    <h3 className="text-h3 font-semibold text-brand-900">{step.title}</h3>
                    <p className="mt-1 text-body text-neutral-text-soft">{step.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}