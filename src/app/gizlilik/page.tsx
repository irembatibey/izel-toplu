
import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: 'Gizlilik ve KVKK',
  description:
    'İzel Toplu web sitesinin gizlilik uygulamaları ve kişisel verilerin korunmasına ilişkin bilgilendirme.',
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
        description="Web sitemizin gizlilik uygulamaları ve kişisel verilerinizin korunmasına ilişkin bilgilendirme."
      />

      <main>
        <Container className="max-w-3xl py-16 md:py-24">
          <div className="space-y-12 text-body text-neutral-text">

            {/* 1. Veri Sorumlusu */}
            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                1. Veri Sorumlusu
              </h2>

              <p className="mt-4">
                6698 sayılı Kişisel Verilerin Korunması Kanunu
                (KVKK) kapsamında, kişisel verilerinizin işlenmesine
                ilişkin olarak veri sorumlusu İzel Toplu'dur.
              </p>

              <p className="mt-4">
                Bu bilgilendirme metni, İzel Toplu'ya ait web sitesinin
                ziyaret edilmesi ve web sitesinde sunulan iletişim
                bağlantılarının kullanılması kapsamında geçerlidir.
              </p>
            </section>

            {/* 2. İşlenen Kişisel Veriler */}
            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                2. İşlenen Kişisel Veriler
              </h2>

              <p className="mt-4">
                Web sitemiz, ziyaretçilere İzel Toplu'nun çalışma
                alanları ve sunduğu hizmetler hakkında bilgi vermek
                amacıyla hazırlanmış tanıtım ve bilgilendirme
                platformudur.
              </p>

              <p className="mt-4">
                Web sitemiz üzerinden doğrudan kişisel veri
                toplanmasını sağlayan bir iletişim formu, kullanıcı
                hesabı, üyelik veya çevrim içi randevu sistemi
                bulunmamaktadır. Web sitesi üzerinden kullanıcı
                verilerinin kaydedildiği bir veritabanı da
                kullanılmamaktadır.
              </p>

              <p className="mt-4">
                Bununla birlikte, web sitesinin teknik altyapısı
                ve barındırma hizmetleri kapsamında IP adresi,
                erişim zamanı ve tarayıcı bilgileri gibi teknik
                veriler ilgili altyapı sağlayıcıları tarafından
                işlenebilir.
              </p>

              <p className="mt-4">
                Ziyaretçilerin kendi tercihleriyle e-posta üzerinden
                iletişime geçmeleri halinde, iletilen mesajlarda
                yer alan ad, soyad, e-posta adresi, telefon numarası
                ve mesaj içeriği gibi bilgiler iletişim süreci
                kapsamında işlenebilir.
              </p>
            </section>

            {/* 3. İşleme Amaçları */}
            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                3. Kişisel Verilerin İşlenme Amaçları
              </h2>

              <p className="mt-4">
                Web sitesi kapsamında kişisel verilerin işlenmesi
                söz konusu olduğunda, bu işlemler aşağıdaki
                amaçlarla sınırlıdır:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  İletişim taleplerinin yanıtlanması.
                </li>
                <li>
                  Bilgi ve hizmet taleplerinin değerlendirilmesi.
                </li>
                <li>
                  Web sitesinin teknik güvenliğinin ve
                  işleyişinin sağlanması.
                </li>
                <li>
                  İlgili mevzuattan kaynaklanan yükümlülüklerin
                  yerine getirilmesi.
                </li>
              </ul>
            </section>

            {/* 4. Üçüncü Taraf Hizmetler */}
            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                4. Üçüncü Taraf Hizmetler ve Harici Bağlantılar
              </h2>

              <p className="mt-4">
                Web sitemizde ziyaretçilerin randevu ve danışma
                süreçleri hakkında bilgi alabilmeleri için
                Patika Dil Konuşma Terapisi'nin web sitesine
                yönlendirme bağlantısı bulunmaktadır.
              </p>

              <p className="mt-4">
                Bu bağlantı üzerinden başka bir web sitesine
                geçiş yapıldığında, ilgili sitenin veri toplama,
                kişisel verileri işleme ve gizlilik uygulamaları
                kendi koşullarına ve bilgilendirme metinlerine
                tabidir.
              </p>

              <p className="mt-4">
                Patika Dil Konuşma Terapisi'nin web sitesi
                üzerinden gerçekleştirilen iletişim ve randevu
                işlemleri, bu web sitesinin dışında yürütülür.
                Bu işlemler kapsamında paylaşılan kişisel veriler,
                ilgili web sitesinin kendi veri işleme süreçleri
                çerçevesinde değerlendirilir.
              </p>

              <p className="mt-4">
                Web sitemizin teknik olarak yayınlanması ve
                barındırılması için kullanılan altyapı
                sağlayıcılarının kendi hizmetleri kapsamında
                teknik verileri işleyebilmesi mümkündür.
              </p>
            </section>

            {/* 5. Haklar */}
            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                5. İlgili Kişinin Hakları
              </h2>

              <p className="mt-4">
                6698 sayılı Kişisel Verilerin Korunması Kanunu'nun
                11. maddesi kapsamında, kişisel verilerinizin
                işlenmesi durumunda aşağıdaki haklara sahipsiniz:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Kişisel verilerinizin işlenip işlenmediğini
                  öğrenme.
                </li>
                <li>
                  Kişisel verileriniz işlenmişse buna ilişkin
                  bilgi talep etme.
                </li>
                <li>
                  Kişisel verilerinizin işlenme amacını ve
                  amaca uygun kullanılıp kullanılmadığını
                  öğrenme.
                </li>
                <li>
                  Yurt içinde veya yurt dışında kişisel
                  verilerinizin aktarıldığı üçüncü kişileri
                  bilme.
                </li>
                <li>
                  Eksik veya yanlış işlenmiş kişisel verilerin
                  düzeltilmesini isteme.
                </li>
                <li>
                  Kanunda öngörülen şartlar çerçevesinde
                  kişisel verilerinizin silinmesini veya
                  yok edilmesini isteme.
                </li>
                <li>
                  Düzeltme, silme veya yok etme işlemlerinin
                  aktarıldığı üçüncü kişilere bildirilmesini
                  isteme.
                </li>
                <li>
                  İşlenen verilerin münhasıran otomatik
                  sistemler aracılığıyla analiz edilmesi
                  suretiyle aleyhinize bir sonucun ortaya
                  çıkmasına itiraz etme.
                </li>
                <li>
                  Kişisel verilerinizin kanuna aykırı olarak
                  işlenmesi nedeniyle zarara uğramanız
                  hâlinde zararın giderilmesini talep etme.
                </li>
              </ul>

              <p className="mt-4">
                Haklarınıza ilişkin taleplerinizi, KVKK'nın
                13. maddesi ve ilgili mevzuat kapsamında
                veri sorumlusuna iletebilirsiniz.
              </p>
            </section>

            {/* 6. İletişim */}
            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                6. İletişim
              </h2>

              <p className="mt-4">
                Gizlilik uygulamalarımız ve kişisel verilerinizin
                korunmasıyla ilgili sorularınız veya KVKK
                kapsamındaki talepleriniz için veri sorumlusu
                İzel Toplu ile web sitesinde paylaşılan e-posta
                iletişim kanalı üzerinden iletişime geçebilirsiniz.
              </p>
            </section>

          </div>
        </Container>
      </main>
    </>
  );
}
