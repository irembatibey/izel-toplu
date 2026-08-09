import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, GraduationCap, Award, HeartHandshake } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ExperienceTimeline } from '@/components/about/ExperienceTimeline';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { EXPERIENCE_TIMELINE } from '@/content/about/experience';

export const metadata: Metadata = {
  title: 'Hakkımda',
  description: 'İzel Toplu hakkında — eğitim, klinik deneyim, yaklaşım ve çalışma felsefesi.',
};

const PORTRAIT_SRC = '/images/portrait/about_photo.jpeg';

// Approach points restate the same approved strength categories used
// on the homepage (evidence-based, individualized, cross-age
// experience, family collaboration) — written here as About-page-
// owned content rather than importing TrustIndicators, since that
// component is homepage-specific and the homepage isn't being
// revisited this phase.
const APPROACH_POINTS = [
  'Kanıta dayalı, güncel yöntemlerle desteklenen terapi süreçleri.',
  'Her danışan için kişiye özel planlanan, esnek terapi programları.',
  'Çocuk ve yetişkin danışanlarla geniş klinik deneyim.',
  'Gerektiğinde aile ve diğer uzmanlarla koordineli çalışma.',
] as const;

// Real education information as provided — no dates, institutions,
// or degrees beyond what was stated are included.
const EDUCATION_ITEMS = [
  'İstinye Üniversitesi, Sağlık Bilimleri Fakültesi — Dil ve Konuşma Terapisi (Lisans), 2026, onur derecesiyle mezuniyet',
  'Psikoloji Yandal Programı — devam ediyor',
] as const;

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hakkımda' }]} />
      <PageHero eyebrow="Hakkımda" title="İzel Toplu" />

      {/* Professional introduction */}
      <section aria-labelledby="about-intro-heading" className="py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-stretch md:gap-16">
          <Reveal>
            <div
                className="relative h-full min-h-[320px] overflow-hidden rounded-lg border border-brand-200/60 bg-brand-surface shadow-md">
              <Image
                  src={PORTRAIT_SRC}
                  alt="Profesyonel portre için ayrılmış alan — yakında eklenecek"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading id="about-intro-heading" eyebrow="Tanışalım" title="Kısaca Kendimden Bahsedeyim" />
            <div className="mt-4 space-y-4 text-body text-neutral-text-soft">
              <p>
                İstinye Üniversitesi, Sağlık Bilimleri Fakültesi, Dil ve Konuşma Terapisi eğitimimi 2026 yılında onur derecesiyle tamamladım.
                Lisans sürecim boyunca danışanlarıma daha bütüncül bir bakış açısıyla yaklaşabilmek adına Psikoloji alanında yandal eğitimime
                devam etmekteyim.
              </p>
              <p>
                Mesleki yolculuğum boyunca okul öncesi dönemdeki çocukların gelişim takibinden başlayarak özel eğitim merkezleri,
              kamu hizmet birimleri ve kapsamlı hastanelere uzanan geniş bir yelpazede saha deneyimi kazandım.
              </p>
              <p>
                Güncel olarak Bandırma’da Patika Dil, Konuşma ve Ergoterapi Merkezi’nde;
                dil bozuklukları, konuşma sesi bozuklukları, akıcılık bozuklukları, motor konuşma bozuklukları,
                nörojenik dil bozuklukları ile ses ve yutma bozuklukları alanlarında değerlendirme ve terapi hizmeti vermekteyim.
              </p>

            </div>
          </Reveal>
        </Container>
      </section>

      {/* Approach */}
      <section aria-labelledby="about-approach-heading" className="bg-neutral-bg-soft py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading id="about-approach-heading" eyebrow="Yaklaşım" title="Terapiye Nasıl Yaklaşıyorum" />
          </Reveal>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {APPROACH_POINTS.map((point, index) => (
              <Reveal key={point} delay={index * 0.06}>
                <li className="flex items-start gap-3 rounded-md border border-neutral-border bg-neutral-bg p-5 text-body text-neutral-text-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-cta" aria-hidden="true" />
                  {point}
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Education */}
      <section aria-labelledby="about-education-heading" className="py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <SectionHeading id="about-education-heading" eyebrow="Eğitim" title="Eğitim Geçmişi" />
            <ul className="mt-6 space-y-3">
              {EDUCATION_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-body text-neutral-text-soft">
                  <GraduationCap className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-cta" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Klinik ve Saha Deneyimi */}
      <section aria-labelledby="about-experience-heading" className="bg-neutral-bg-soft py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <SectionHeading
              id="about-experience-heading"
              eyebrow="Klinik ve Saha Deneyimi"
              title="Profesyonel Yolculuğum"
            />
          </Reveal>
          <ExperienceTimeline items={EXPERIENCE_TIMELINE} />
        </Container>
      </section>

      {/* Certificates */}
      <section aria-labelledby="about-certificates-heading" className="py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <SectionHeading id="about-certificates-heading" eyebrow="Sertifikalar" title="Sertifikalar ve Mesleki Eğitimler" />
            <div className="mt-6 rounded-md border border-dashed border-brand-300 bg-neutral-bg-soft p-8 text-center">
              <Award className="mx-auto mb-3 h-6 w-6 text-brand-300" aria-hidden="true" />
              <p className="text-body text-neutral-text-soft">
                Sertifika ve mesleki eğitim bilgileri yakında eklenecek.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Working philosophy */}
      <section aria-labelledby="about-philosophy-heading" className="bg-neutral-bg-soft py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <SectionHeading id="about-philosophy-heading" eyebrow="Çalışma Felsefesi" title="Çalışma Felsefem" />
            <div className="mt-6 flex items-start gap-3">
              <HeartHandshake className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-cta" aria-hidden="true" />
              <p className="text-body text-neutral-text-soft">
                Her danışanın kendine özgü bir yolculuğu olduğuna inanıyorum. Güven, şeffaflık ve
                düzenli iletişim, bu yolculuk boyunca çalışma şeklimin temelini oluşturuyor.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}