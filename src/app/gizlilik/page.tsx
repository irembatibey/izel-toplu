
import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: 'Gizlilik ve KVKK',
  description:
    'İzel Toplu web sitesinin gizlilik uygulamaları, kişisel verilerin işlenmesi ve korunmasına ilişkin bilgilendirme.',
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
                (KVKK) kapsamında, bu web sitesi aracılığıyla
                gerçekleştirilen kişisel veri işleme faaliyetleri
                bakımından veri sorumlusu İzel Toplu&apos;dur.
              </p>

              <p className="mt-4">
                Bu bilgilendirme metni, İzel Toplu&apos;ya ait web
                sitesinin ziyaret edilmesi ve web sitesinde sunulan
                iletişim bağlantılarının kullanılması kapsamında
                geçerlidir.
              </p>
            </section>

            {/* 2. İşlenen Kişisel Veriler */}
            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                2. İşlenen Kişisel Veriler
              </h2>

              <p className="mt-4">
                Web sitemiz, ziyaretçilere İzel Toplu&apos;nun çalışma
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
                erişim zamanı, istek bilgileri ve tarayıcı veya
                cihaz bilgileri gibi teknik veriler barındırma
                sağlayıcısı tarafından işlenebilir.
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
                <li>İletişim taleplerinin yanıtlanması.</li>
                <li>Bilgi ve hizmet taleplerinin değerlendirilmesi.</li>
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

            {/* 4. Hosting ve Teknik Erişim Kayıtları */}
            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                4. Hosting Hizmeti ve Teknik Erişim Kayıtları
              </h2>

              <p className="mt-4">
                Web sitemiz, GitHub tarafından sunulan GitHub Pages
                statik web sitesi barındırma hizmeti aracılığıyla
                yayınlanmaktadır.
              </p>

              <p className="mt-4">
                GitHub&apos;ın resmî dokümantasyonunda belirtildiği
                üzere, GitHub Pages üzerinden yayınlanan bir web
                sitesi ziyaret edildiğinde ziyaretçinin IP adresi
                güvenlik amaçlarıyla kaydedilmekte ve
                saklanmaktadır. Bu işlem, ziyaretçinin GitHub
                hesabına giriş yapmış olmasına bağlı değildir.
              </p>

              <p className="mt-4">
                GitHub&apos;ın genel gizlilik bildiriminde ayrıca
                IP adresi, cihaz bilgileri, istek tarih ve saatleri
                ve web sitesi kullanım bilgileri gibi verilerin
                hizmetlerin sunulması, güvenliğin sağlanması ve
                teknik sorunların giderilmesi gibi amaçlarla
                işlenebileceği açıklanmaktadır.
              </p>

              <p className="mt-4">
                Bu teknik kayıtların işlenmesi GitHub&apos;ın kendi
                hizmetleri kapsamında yürüttüğü veri işleme
                faaliyetlerini de içermektedir. Bu faaliyetler
                bakımından GitHub&apos;ın kendi gizlilik bildirimi
                ve ilgili hizmet koşulları geçerlidir.
              </p>

              <p className="mt-4">
                GitHub, GitHub Pages ziyaretçi IP kayıtları için
                kamuya açık dokümantasyonunda kesin bir saklama
                süresi belirtmemektedir. Saklama süresi, GitHub&apos;ın
                ilgili güvenlik ve veri saklama politikaları
                çerçevesinde belirlenmektedir.
              </p>

              <p className="mt-4">
                GitHub&apos;ın gizlilik uygulamaları hakkında
                ayrıntılı bilgiye aşağıdaki bağlantılardan
                ulaşabilirsiniz:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <a
                    href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-800 underline underline-offset-4"
                  >
                    GitHub Pages – Veri Toplama Açıklaması
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-800 underline underline-offset-4"
                  >
                    GitHub Genel Gizlilik Bildirimi
                  </a>
                </li>
              </ul>
            </section>

            {/* 5. Yurt Dışına Veri Aktarımı */}
            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                5. Yurt Dışına Veri Aktarımı
              </h2>

              <p className="mt-4">
                Web sitemizin GitHub Pages altyapısı üzerinden
                yayınlanması nedeniyle, web sitesinin ziyaret
                edilmesi sırasında oluşan teknik erişim kayıtları
                GitHub tarafından işlenebilmektedir.
              </p>

              <p className="mt-4">
                GitHub, kişisel verileri Amerika Birleşik
                Devletleri&apos;nde ve kendisinin, bağlı şirketlerinin
                veya alt hizmet sağlayıcılarının faaliyet
                gösterdiği diğer ülkelerde saklayabileceğini
                ve işleyebileceğini belirtmektedir.
              </p>

              <p className="mt-4">
                GitHub, kendi hizmetleri kapsamında gerçekleştirdiği
                uluslararası veri aktarımlarında uygulanabilir
                veri koruma düzenlemeleri ve sözleşmesel güvenceler
                çerçevesinde hareket ettiğini açıklamaktadır.
                Kullanılan hizmete ve veri işleme faaliyetinin
                niteliğine göre standart sözleşmeler ve diğer
                aktarım mekanizmaları söz konusu olabilmektedir.
              </p>

              <p className="mt-4">
                GitHub ayrıca hizmetlerinin sunulması için alt
                hizmet sağlayıcılarla çalışabilmektedir. Bu
                sağlayıcıların listesi GitHub tarafından
                yayımlanmaktadır.
              </p>

              <p className="mt-4">
                Türkiye&apos;de bulunan ziyaretçilere ait kişisel
                verilerin yurt dışına aktarılması bakımından
                6698 sayılı KVKK&apos;nın 9. maddesinde düzenlenen
                hükümler ve uygulanabilir aktarım şartları
                dikkate alınmaktadır.
              </p>

              <p className="mt-4">
                GitHub&apos;ın uluslararası veri aktarımları ve alt
                hizmet sağlayıcıları hakkında ayrıntılı bilgiye
                aşağıdaki bağlantılardan ulaşabilirsiniz:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <a
                    href="https://github.com/subprocessors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-800 underline underline-offset-4"
                  >
                    GitHub Alt Hizmet Sağlayıcıları
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/trust-center/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-800 underline underline-offset-4"
                  >
                    GitHub Trust Center – Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-800 underline underline-offset-4"
                  >
                    KVKK – Yurt Dışına Kişisel Veri Aktarımı
                  </a>
                </li>
              </ul>
            </section>

            {/* 6. Üçüncü Taraf Hizmetler */}
            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                6. Üçüncü Taraf Hizmetler ve Harici Bağlantılar
              </h2>

              <p className="mt-4">
                Web sitemizde ziyaretçilerin randevu ve danışma
                süreçleri hakkında bilgi alabilmeleri için
                Patika Dil Konuşma Terapisi&apos;nin web sitesine
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
                Patika Dil Konuşma Terapisi&apos;nin web sitesi
                üzerinden gerçekleştirilen iletişim ve randevu
                işlemleri, bu web sitesinin dışında yürütülür.
                Bu işlemler kapsamında paylaşılan kişisel veriler,
                ilgili web sitesinin kendi veri işleme süreçleri
                çerçevesinde değerlendirilir.
              </p>

              <p className="mt-4">
                Web sitemizin yayınlanması ve teknik olarak
                işletilmesi için kullanılan altyapı
                sağlayıcılarının kendi hizmetleri kapsamında
                teknik verileri işleyebilmesi mümkündür.
              </p>
            </section>

            {/* 7. İlgili Kişinin Hakları */}
            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                7. İlgili Kişinin Hakları
              </h2>

              <p className="mt-4">
                6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun
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
            </section>

            {/* 8. KVKK Başvuru ve İletişim */}
            <section>
              <h2 className="font-serif text-h3 text-brand-800">
                8. KVKK Kapsamındaki Başvurular ve İletişim
              </h2>

              <p className="mt-4">
                Kişisel verilerinizin işlenmesine ilişkin olarak
                6698 sayılı KVKK&apos;nın 11. maddesinde belirtilen
                haklarınızı kullanmak ve Kanun&apos;un 13. maddesi
                kapsamında veri sorumlusuna başvurmak için
                aşağıdaki e-posta adresi üzerinden iletişime
                geçebilirsiniz:
              </p>

              <p className="mt-4">
                <strong>Veri sorumlusu:</strong> İzel Toplu
              </p>

              <p className="mt-2">
                <strong>KVKK başvuru ve iletişim e-posta adresi:</strong>{' '}
                <a
                  href="mailto:dkt.izeltoplu@gmail.com"
                  className="text-brand-800 underline underline-offset-4"
                >
                  dkt.izeltoplu@gmail.com
                </a>
              </p>

              <p className="mt-4">
                Başvurunuzda talebinizi açıkça belirtmeniz ve
                kimliğinizin doğrulanabilmesi için gerekli
                bilgileri sağlamanız gerekebilir. Başvurular,
                KVKK ve ilgili mevzuatta belirtilen usul ve
                esaslar çerçevesinde değerlendirilir.
              </p>

              <p className="mt-4">
                E-posta yoluyla başvuru, ilgili mevzuatta
                belirtilen başvuru yöntemleri ve kimlik
                doğrulama koşulları dikkate alınarak
                değerlendirilir.
              </p>
            </section>

          </div>
        </Container>
      </main>
    </>
  );
}
