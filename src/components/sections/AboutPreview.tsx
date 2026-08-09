import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';

const PORTRAIT_SRC = '/images/portrait/about_photo.jpeg';

/**
 * Intentionally short and generic. Her actual personal narrative
 * (why she chose this field, her specific philosophy in her own
 * words) was discussed as *structure* for the About page, not
 * provided as actual content yet — so this preview restates only
 * what's already been established (field, evidence-based +
 * individualized approach) rather than inventing a personal story
 * that hasn't been written.
 */
export function AboutPreview() {
  return (
    <section aria-labelledby="about-preview-heading" className="py-20 md:py-28">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-brand-200/60 bg-brand-surface shadow-md">
            <Image
              src={PORTRAIT_SRC}
              alt="Profesyonel portre için ayrılmış alan — yakında eklenecek"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-brand-ease group-hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading id="about-preview-heading" eyebrow="Hakkımda" title="Kısaca Benim Hakkımda" />
          <p className="mt-4 text-body text-neutral-text-soft">
            İstinye Üniversitesi, Sağlık Bilimleri Fakültesi, Dil ve Konuşma Terapisi eğitimimi 2026 yılında onur derecesiyle tamamladım. Eğitim sürecimde farklı kurumlarda çocuk ve
            yetişkinlerle çalışarak klinik deneyimi kazandım...
          </p>
          <div className="mt-6">
            <Button href="/hakkimda" variant="ghost">
              Devamını Oku
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}