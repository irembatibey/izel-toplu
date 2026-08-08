import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, GraduationCap, Award, HeartHandshake } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Hakkımda',
  description: 'İzel Toplu hakkında — eğitim, yaklaşım ve çalışma felsefesi.',
};

const PORTRAIT_SRC = '/images/placeholders/portrait-placeholder.svg';

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

// No real credentials have been provided yet — these stay explicit,
// bracketed placeholders rather than invented degrees/certificates,
// per instruction.
const EDUCATION_PLACEHOLDERS = [
  '[PLACEHOLDER: Lisans derecesi — üniversite, yıl]',
  '[PLACEHOLDER: Lisansüstü eğitim — üniversite, yıl]',
] as const;

const CERTIFICATE_PLACEHOLDERS = [
  '[PLACEHOLDER: Sertifika adı — kurum, yıl]',
  '[PLACEHOLDER: Sertifika adı — kurum, yıl]',
] as const;

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hakkımda' }]} />
      <PageHero eyebrow="Hakkımda" title="İzel Toplu" />

      {/* Professional introduction */}
      <section aria-labelledby="about-intro-heading" className="py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-brand-200/60 bg-brand-surface shadow-md">
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
            <p className="mt-4 text-body text-neutral-text-soft">
              İzel Toplu, çocuklarda ve yetişkinlerde dil ve konuşma gelişimini destekleyen, kanıta
              dayalı ve kişiye özel bir yaklaşım benimseyen bir dil ve konuşma terapistidir.
            </p>
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
              {EDUCATION_PLACEHOLDERS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-body text-neutral-text-soft">
                  <GraduationCap className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-cta" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Certificates */}
      <section aria-labelledby="about-certificates-heading" className="bg-neutral-bg-soft py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <SectionHeading id="about-certificates-heading" eyebrow="Sertifikalar" title="Sertifikalar ve Eğitimler" />
            <ul className="mt-6 space-y-3">
              {CERTIFICATE_PLACEHOLDERS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-body text-neutral-text-soft">
                  <Award className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-cta" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Working philosophy */}
      <section aria-labelledby="about-philosophy-heading" className="py-20 md:py-28">
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