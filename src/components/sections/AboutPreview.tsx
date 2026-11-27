
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';

const PORTRAIT_SRC = '/images/portrait/newphoto.jpeg';

export function AboutPreview() {
  return (
    <section
      aria-labelledby="about-preview-heading"
      className="py-20 md:py-28"
    >
      <Container className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <div className="flex items-center justify-center">
            <Image
              src={PORTRAIT_SRC}
              alt="Dil ve Konuşma Terapisti İzel Toplu"
              width={1476}
              height={2047}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full rounded-lg shadow-md"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            id="about-preview-heading"
            eyebrow="Hakkımda"
            title="Kısaca Benim Hakkımda"
          />

          <p className="mt-4 text-body text-neutral-text-soft">
            İstinye Üniversitesi, Sağlık Bilimleri Fakültesi, Dil ve Konuşma
            Terapisi eğitimimi 2026 yılında onur derecesiyle tamamladım.
            Eğitim sürecimde farklı kurumlarda çocuk ve yetişkinlerle
            çalışarak klinik deneyimi kazandım...
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
