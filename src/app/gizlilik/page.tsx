import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: 'Gizlilik ve KVKK',
  description:
    'Kişisel verilerin korunması ve gizlilik hakkında bilgilendirme.',
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Gizlilik ve KVKK' },
        ]}
      />

      <PageHero
        eyebrow="Gizlilik"
        title="Gizlilik ve KVKK"
        description="Kişisel verilerinizin korunmasına ilişkin bilgilendirme."
      />

      <main>
        <Container className="max-w-3xl py-16 md:py-24">
          <div className="space-y-12 text-body text-neutral-text">
            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                1. Veri Sorumlusu
              </h2>

              <p className="mt-4">
                İzel Toplu
              </p>
            </section>

            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                2. İşlenen Kişisel Veriler
              </h2>

              <p className="mt-4">
                Bu bölümde iletişim formları ve diğer iletişim kanalları
                aracılığıyla toplanan kişisel verilere ilişkin bilgiler
                yer alacaktır.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                3. Kişisel Verilerin İşlenme Amaçları
              </h2>

              <p className="mt-4">
                Kişisel verilerin hangi amaçlarla işlendiğine ilişkin
                bilgilendirme burada yer alacaktır.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                4. Üçüncü Taraf Hizmetler
              </h2>

              <p className="mt-4">
                Formspree gibi üçüncü taraf hizmet sağlayıcıların
                kullanımına ilişkin bilgiler burada yer alacaktır.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                5. Haklarınız
              </h2>

              <p className="mt-4">
                İlgili kişinin KVKK kapsamındaki haklarına ilişkin
                bilgilendirme burada yer alacaktır.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                6. İletişim
              </h2>

              <p className="mt-4">
                Gizlilik ve kişisel verilerle ilgili iletişim bilgileri
                burada yer alacaktır.
              </p>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}