import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/**
 * Phase 5 review extraction: the bordered bg-brand-surface hero
 * block was identical, word-for-word, in both hakkimda/page.tsx and
 * hizmetler/page.tsx — real duplication, not just a similar pattern,
 * so it's extracted here. ServiceHero (icon-forward, different
 * content shape) deliberately stays separate rather than being
 * forced into this shape — see its own file for that reasoning.
 */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-neutral-border bg-brand-surface">
      <Container className="py-16 md:py-20">
        <Reveal>
          <SectionHeading level="h1" eyebrow={eyebrow} title={title} description={description} />
        </Reveal>
      </Container>
    </section>
  );
}