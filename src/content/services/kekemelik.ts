
import { Repeat } from 'lucide-react';
import type { ServiceDetail } from '@/lib/types';

/**
 * Structured content for Kekemelik.
 *
 * Sourced from the provided "Çalışma Alanları" reference document
 * (AKICILIK BOZUKLUĞU section, which the site presents under the
 * "Kekemelik" title/slug already established in the service
 * registry). Symptoms are taken directly from that section's
 * "Belirtiler" list.
 */
export const kekemelik: ServiceDetail = {
  slug: 'kekemelik',
  icon: Repeat,
  title: 'Kekemelik',
  shortDescription:
    'Konuşma akıcılığını etkileyen tekrar, uzatma veya duraksama şeklindeki güçlükler.',
  seoDescription:
    'Kekemelik belirtileri, değerlendirme ve terapi süreci hakkında bilgi edinin.',
  overview:
    'Kekemelik, konuşma sırasında akıcılığın kesintiye uğramasıyla ortaya çıkan bir durumdur ve hem çocuklarda hem de yetişkinlerde görülebilir. Kişi konuşurken sesleri, heceleri ya da kelimeleri tekrar edebilir, uzatabilir veya konuşmaya başlamakta zorlanabilir. Bu durum bazı kişilerde çocuklukta başlayıp devam edebilirken, bazı durumlarda sonradan da ortaya çıkabilir.',
  symptoms: [
    'Ses, hece veya kelimeleri tekrar etme',
    'Sesleri uzatma',
    'Konuşmaya başlarken zorlanma veya blok yaşama',
    'Konuşurken eşlik eden hareketler (göz kırpma, yüz kasılmaları vb.)',
    'Konuşmaktan kaçınma veya bazı kelimeleri söylemek istememe',
    'Heyecan, stres veya baskı altında takılmaların artması',
  ],
  symptomContent: {
    intro:
      'Kekemelik; konuşmanın akışında istemsiz kesintilerle, tekrarlarla veya uzatmalarla kendini gösteren, zamanla hem konuşma davranışına hem de kişinin duygularına yansıyabilen bir akıcılık bozukluğudur. Henüz terapiye başlamamış kişilerde belirtiler yaşa ve deneyime göre farklı biçimlerde öne çıkabilir.',
    sections: [
      {
        title: 'Çocuklarda Görülebilecek Belirtiler',
        items: [
          'Ses, hece veya tek heceli sözcük tekrarları: Konuşmaya başlarken ya da cümle içinde "b-b-baba", "ge-ge-gel" veya "ben-ben" gibi tekrarların görülmesidir.',
          'Ses uzatmaları: Bir sesin normalden daha uzun tutulmasıdır (örneğin "ssssüt" veya "mmmasa" şeklinde).',
          'Bloklar (takılma / sesin çıkamaması): Ağzın ve ses tellerinin konuşma pozisyonunda kilitlenmesi gibi, sesin birkaç an dışarı çıkamaması veya konuşmanın aniden durmasıdır.',
          'Konuşma sırasında eşlik eden fiziksel gerginlikler: Takılma anlarında göz kırpma, baş sallama, çene sıkma, dudak gerginliği veya nefesin düzensizleşmesi gibi zorlanma işaretlerinin eşlik etmesidir.',
          'Konuşma isteğinde değişim veya çekinme: Daha önce rahat konuşan ya da kendini ifade etmek isteyen çocuğun takılmalar arttıkça sessizleşmesi, kısa yanıtlar vermesi veya anlaşılamadığında/takıldığında hayal kırıklığı yaşamasıdır.',
        ],
      },
      {
        title: 'Yetişkinlerde Görülebilecek Belirtiler',
        items: [
          'Bloklar, uzatmalar ve tekrarların kalıcılaşması: Belirli seslerde veya sözcük başlarında sıkışmaların, ses uzatmalarının ya da tekrarların uzun süredir devam etmesidir.',
          'Kelime değiştirme ve cümle yeniden kurgulama: Takılma ihtimali hissedilen sözcük yerine son anda başka bir kelime seçme, cümlenin yapısını değiştirme veya dolambaçlı ifadeler kullanmadır.',
          'Belirli konuşma durumlarından kaçınma: Telefonla arama yapmaktan, kalabalıkta veya toplantılarda söz almaktan, kendini tanıtmaktan ya da sesli okumaktan geri durmadır.',
          'Konuşma öncesi kaygı ve zihinsel hazırlık: Söylenecek kelimeleri önceden zihinde prova etme, "Şimdi takılacağım" düşüncesiyle konuşma anından önce gerginlik ve nabız artışı hissetmedir.',
          'Beden dilinde gizleme veya eşlik eden hareketler: Takılmayı aşmak ya da gizlemek amacıyla baş hareketi, bakış kaçırma, boğaz temizleme veya gereksiz nefes alma gibi davranışların yerleşmesidir.',
        ],
      },
    ],
    note:
      'Erken çocukluk döneminde görülen her akıcılık dalgalanması kalıcı kekemeliğe dönüşmeyebilir; ancak tekrarların uzaması, blokların veya fiziksel gerginliğin eklenmesi ya da ailenin kaygı duyması durumunda erken değerlendirme değerli bir rehberlik sağlar.',
  },
  whoCanBenefit:
    'Konuşma akıcılığında tekrar, uzatma veya duraksama yaşayan çocuklar ve yetişkinler bu süreçten fayda görebilir.',
  process:
    'Terapi süreci, bireyin yaşına, ihtiyaçlarına ve akıcılık düzeyine göre özel olarak planlanır. İlk aşamada detaylı bir değerlendirme yapılarak konuşma örüntüsü, takılma sıklığı ve eşlik eden durumlar belirlenir. Seanslarda; konuşma akıcılığını destekleyen teknikler, nefes ve konuşma koordinasyonu çalışmaları ile daha rahat ve kontrollü konuşma becerileri geliştirilir. Konuşma sırasında oluşabilecek kaygı, kaçınma davranışları ve iletişim güveni üzerine de çalışılır.',
  faq: [
    {
      question: 'Çocuklarda görülen takılmalar kendiliğinden geçer mi?',
      answer:
        'Erken çocuklukta bazı akıcılık dalgalanmaları zamanla azalabilir; ancak blokların eklenmesi, fiziksel gerginlik görülmesi, takılmaların 6 aydan uzun sürmesi ya da çocuğun/ailenin rahatsızlık duyması halinde erken dönemde değerlendirme yapılması en sağlıklı yaklaşımdır.',
    },
    {
      question: 'Çocuğa "yavaş konuş" veya "derin nefes al" demek işe yarar mı?',
      answer:
        'Bu uyarılar çoğu zaman çocuğun konuşmaya daha fazla odaklanmasına ve gerilmesine yol açar. Bunun yerine baskı kurmadan dinlemek, kendi konuşma hızımızı doğal ve sakin tutmak ve çocuğun sözünü tamamlamamak daha destekleyicidir.',
    },
    {
      question: 'Yetişkinlik döneminde kekemelik için destek almak geç midir?',
      answer:
        'Hayır. Yetişkinlikte de konuşma gerginliğini yönetmeye, kelime ve durum kaçınmalarını azaltmaya ve iletişimi daha rahat sürdürmeye yönelik yapılandırılmış terapi süreçlerinden anlamlı fayda sağlanır.',
    },
    {
      question: 'Değerlendirme ve terapi süreci nasıl ilerler?',
      answer:
        'İlk görüşmede ayrıntılı öykü alınır; konuşma akıcılığı, eşlik eden davranışlar ve iletişime dair tutum/duygular değerlendirilir. Bulgulara göre çocuğun veya yetişkinin ihtiyacına özel bir plan oluşturulur.',
    },
  ],
  relatedSlugs: ['artikulasyon-bozukluklari', 'gecikmis-konusma-bozuklugu'],
};
