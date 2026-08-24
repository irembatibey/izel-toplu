import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Accordion } from '@/components/common/Accordion';
import type { FAQItem } from '@/lib/types';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular',
  description: 'Randevu, süreç ve genel işleyiş hakkında sıkça sorulan sorular.',
};

// General/logistics questions only — condition-specific FAQ items
// live on their own service detail pages (see ServiceDetailTemplate),
// so this list intentionally doesn't repeat those. Answers are
// explicit placeholders — no real answers have been provided yet,
// and none are invented here.
const FAQ_ITEMS: FAQItem[] = [
  { question: 'Seanslar ne kadar sürüyor?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
  { question: 'Online seans yapıyor musunuz?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
  { question: 'İlk seansta neler oluyor?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
  { question: 'Randevu nasıl alabilirim?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
];

export default function FAQPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'SSS' }]} />
      <PageHero
        eyebrow="SSS"
        title="Sıkça Sorulan Sorular"
        description="Randevu ve süreçle ilgili genel sorular. Belirli bir hizmet alanına dair sorularınız için ilgili hizmet sayfasındaki SSS bölümüne göz atabilirsiniz."
      />

      <section aria-label="Sıkça sorulan sorular listesi" className="py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <Accordion items={FAQ_ITEMS} />
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}