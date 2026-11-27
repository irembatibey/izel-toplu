
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, GraduationCap } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ExperienceTimeline } from '@/components/about/ExperienceTimeline';
import { CertificateGallery } from '@/components/about/CertificateGallery';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { EXPERIENCE_TIMELINE } from '@/content/about/experience';
import { CERTIFICATES } from '@/content/about/certificates';

export const metadata: Metadata = {
  title: 'Hakkımda',
  description:
    'İzel Toplu hakkında — eğitim, klinik deneyim, yaklaşım ve çalışma felsefesi.',
};

const PORTRAIT_SRC = '/images/portrait/newphoto.jpeg';

const APPROACH_POINTS = [
  'Kanıta dayalı, güncel yöntemlerle desteklenen terapi süreçleri.',
  'Her danışan için kişiye özel planlanan, esnek terapi programları.',
  'Çocuk ve yetişkin danışanlarla geniş klinik deneyim.',
  'Aile ve diğer uzmanlarla koordineli çalışma.',
] as const;

const EDUCATION_ITEMS = [
  'İstinye Üniversitesi, Sağlık Bilimleri Fakültesi — Dil ve Konuşma Terapisi (Lisans), 2026, onur derecesiyle mezuniyet',
  'İstinye Üniversitesi, İnsan ve Toplum Bilimleri Fakültesi — Psikoloji Yandal Programı (devam ediyor)',
] as const;

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hakkımda' },
        ]}
      />

      <PageHero eyebrow="Hakkımda" title="İzel Toplu" />

      {/* Professional introduction */}
      <section
        aria-labelledby="about-intro-heading"
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
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full rounded-lg shadow-md"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              id="about-intro-heading"
              eyebrow="Tanışalım"
              title="Kısaca Kendimden Bahsedeyim"
            />

            <div className="mt-4 space-y-4 text-body text-neutral-text-soft">
              <p>
                İstinye Üniversitesi, Sağlık Bilimleri Fakültesi, Dil ve
                Konuşma Terapisi eğitimimi 2026 yılında onur derecesiyle
                tamamladım. Lisans sürecim boyunca danışanlarıma daha
                bütüncül bir bakış açısıyla yaklaşabilmek adına Psikoloji
                alanında yandal eğitimime devam etmekteyim.
              </p>

              <p>
                Mesleki yolculuğum boyunca okul öncesi dönemdeki çocukların
                gelişim takibinden başlayarak özel eğitim merkezleri,
                kamu hizmet birimleri ve kapsamlı hastanelere uzanan geniş
                bir yelpazede saha deneyimi kazandım.
              </p>

              <p>
                Güncel olarak Bandırma’da Patika Dil, Konuşma ve Ergoterapi
                Merkezi’nde; dil bozuklukları, konuşma sesi bozuklukları,
                akıcılık bozuklukları, motor konuşma bozuklukları,
                nörojenik dil bozuklukları ile ses ve yutma bozuklukları
                alanlarında değerlendirme ve terapi hizmeti vermekteyim.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Approach */}
      <section
        aria-labelledby="about-approach-heading"
        className="bg-neutral-bg-soft py-20 md:py-28"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="about-approach-heading"
              eyebrow="Yaklaşım"
              title="Terapiye Nasıl Yaklaşıyorum"
            />
          </Reveal>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {APPROACH_POINTS.map((point, index) => (
              <Reveal key={point} delay={index * 0.06}>
                <li className="flex items-start gap-3 rounded-md border border-neutral-border bg-neutral-bg p-5 text-body text-neutral-text-soft">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-cta"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Education */}
      <section
        aria-labelledby="about-education-heading"
        className="py-20 md:py-28"
      >
        <Container narrow>
          <Reveal>
            <SectionHeading
              id="about-education-heading"
              eyebrow="Eğitim"
              title="Eğitim Geçmişi"
            />

            <ul className="mt-6 space-y-3">
              {EDUCATION_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-body text-neutral-text-soft"
                >
                  <GraduationCap
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-cta"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Klinik ve Saha Deneyimi */}
      <section
        aria-labelledby="about-experience-heading"
        className="bg-neutral-bg-soft py-20 md:py-28"
      >
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
      <section
        aria-labelledby="about-certificates-heading"
        className="py-20 md:py-28"
      >
        <Container narrow>
          <Reveal>
            <SectionHeading
              id="about-certificates-heading"
              eyebrow="Sertifikalar"
              title="Sertifikalar ve Mesleki Eğitimler"
            />
          </Reveal>
        </Container>

        <div className="mt-10">
          <CertificateGallery certificates={CERTIFICATES} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
