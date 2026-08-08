import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/common/Reveal';
import type { ServiceDetail } from '@/lib/types';

interface ServiceHeroProps {
  service: ServiceDetail;
}

/**
 * Deliberately simpler than the homepage Hero — no portrait, no
 * two-column layout, no decorative blobs. A service detail page's
 * hero exists to orient the visitor to this specific condition, not
 * to re-sell the practice — reusing the homepage Hero's full visual
 * weight here would compete with the homepage rather than support
 * it (and the homepage is explicitly not to be revisited).
 */
export function ServiceHero({ service }: ServiceHeroProps) {
  const Icon = service.icon;

  return (
    <section className="border-b border-neutral-border bg-brand-surface">
      <Container className="flex flex-col items-start gap-4 py-16 md:py-20">
        <span className="flex h-14 w-14 items-center justify-center rounded-md bg-neutral-bg shadow-sm">
          <Icon className="h-6 w-6 text-brand-cta" aria-hidden="true" />
        </span>
        <Reveal>
          <h1 className="font-serif text-display text-brand-900">{service.title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-body text-neutral-text-soft">{service.shortDescription}</p>
        </Reveal>
      </Container>
    </section>
  );
}