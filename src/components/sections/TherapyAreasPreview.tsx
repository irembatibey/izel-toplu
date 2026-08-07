import { Sprout, Mic, Repeat, Brain, Volume2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';

// Plain-language, general clinical descriptions (not claims specific
// to the therapist) — consistent with the "explain simply, avoid
// unexplained jargon" content principle agreed during the content
// strategy phase. Slugs match the naming convention already agreed
// for individual service pages, which don't exist yet — these links
// will 404 until that later phase is built; disclosed in the
// engineering report, not a defect.
const THERAPY_AREAS = [
  {
    slug: 'gecikmis-dil-gelisimi',
    icon: Sprout,
    title: 'Gecikmiş Dil Gelişimi',
    description: 'Çocuğunuzun yaşına göre beklenen dil becerilerinde gecikme yaşanması durumları.',
  },
  {
    slug: 'artikulasyon-bozukluklari',
    icon: Mic,
    title: 'Artikülasyon Bozuklukları',
    description: 'Seslerin doğru şekilde üretilememesiyle ortaya çıkan konuşma güçlükleri.',
  },
  {
    slug: 'kekemelik',
    icon: Repeat,
    title: 'Kekemelik',
    description: 'Konuşma akıcılığını etkileyen tekrar, uzatma veya duraksama şeklindeki güçlükler.',
  },
  {
    slug: 'afazi',
    icon: Brain,
    title: 'Afazi',
    description: 'Beyin hasarı sonrası dil anlama veya ifade etmede yaşanan güçlükler.',
  },
  {
    slug: 'ses-bozukluklari',
    icon: Volume2,
    title: 'Ses Bozuklukları',
    description: 'Ses tonu, perdesi veya kalitesinde yaşanan değişiklikler.',
  },
] as const;

export function TherapyAreasPreview() {
  return (
    <section aria-labelledby="therapy-areas-heading" className="bg-neutral-bg-soft py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="therapy-areas-heading"
            eyebrow="Hizmet Alanları"
            title="Hangi Konularda Destek Sağlıyorum?"
            description="Çocuklarda ve yetişkinlerde sık görülen dil ve konuşma güçlüklerinden bazıları."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {THERAPY_AREAS.map((area, index) => (
            <Reveal key={area.slug} delay={index * 0.08}>
              <Card
                icon={area.icon}
                title={area.title}
                description={area.description}
                href={`/hizmetler/${area.slug}`}
                linkLabel="Detaylı bilgi"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 flex justify-center">
          <Button href="/hizmetler" variant="ghost">
            Tüm Hizmet Alanlarını Gör
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}