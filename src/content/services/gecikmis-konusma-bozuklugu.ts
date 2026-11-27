
import { Sprout } from 'lucide-react';
import type { ServiceDetail } from '@/lib/types';

/**
 * Structured content for Gecikmiş Konuşma Bozukluğu.
 */
export const gecikmisKonusmaBozuklugu: ServiceDetail = {
  slug: 'gecikmis-konusma-bozuklugu',
  icon: Sprout,
  title: 'Gecikmiş Konuşma Bozukluğu',
  shortDescription:
    'Çocuğun yaşıtlarına göre konuşma becerilerinde gecikme yaşanması durumları.',
  seoDescription:
    'Gecikmiş konuşma bozukluğu belirtileri, değerlendirme ve terapi süreci hakkında bilgi edinin.',

  overview:
    'Gecikmiş konuşma, çocuğun konuşma becerilerinin yaşıtlarına göre daha yavaş gelişmesi durumudur. Bazı çocuklar konuşmaya biraz geç başlayabilir; ancak kelime sayısının artmaması, cümle kurmada zorlanma ya da kendini ifade etmekte güçlük yaşanması dikkat edilmesi gereken işaretlerdir. Bu durum; çevresel etkenler, sınırlı dilsel uyaran, işitsel zorluklar veya gelişimsel farklılıklardan kaynaklanabilir.',

  symptoms: [
    'Çocuğun yaşıtlarına göre konuşmaya daha geç başlaması',
    'Kelime dağarcığının beklenenden daha yavaş gelişmesi',
    'İsteklerini çoğunlukla işaret ederek ya da tek kelimelerle anlatması',
    'Söylenenleri anlamada zaman zaman zorlanması',
    'Sosyal etkileşim ve iletişim kurmada isteksizlik veya çekingenlik',
  ],

  symptomContent: {
    intro:
      'Gecikmiş konuşmada ilerleme, kelimeleri ezberletmekten çok çocuğun iletişim kurmak istemesiyle ve günlük anlarda kurulan sıcak paylaşımlarla başlar. Seanslarda attığımız adımları ev ortamında da desteklemek için şu noktalara birlikte dikkat etmeliyiz:',

    sections: [
      {
        title: 'Nelere Dikkat Etmeliyiz?',
        items: [
          'Ekran süresini sınırlamalı ve yerine karşılıklı etkileşim koymalıyız: Televizyon, telefon ve tablet gibi tek yönlü uyaranlar çocuğun konuşma girişimini azaltabilir. Bunun yerine göz teması kurduğumuz, sırayla beklediğimiz ve seslerle/sözcüklerle karşılık verdiğimiz canlı etkileşim alanları açmalıyız.',

          'Çocuğu konuşmaya zorlamak yerine dil modeli sunmalıyız: "Hadi söyle, araba de" gibi baskı yaratan istekler yerine, çocuğun ilgisini çeken nesne ve durumları doğal, kısa ve net cümlelerle adlandırmalıyız ("Bak, sarı kamyon geliyor" gibi).',

          'Çocuğun sözel olmayan iletişimini de yanıtlamalıyız: İşaret etme, bakış yöneltme, ses çıkarma veya jestlerle kurduğu her iletişim denemesini fark edip karşılık vermeliyiz. Çocuğun ifadesine anlam yükleyip karşılık vermek, iletişimin işe yaradığını hissettirir.',

          'Günlük rutinleri doğal bir dil öğrenme alanına çevirmeliyiz: Banyo, yemek hazırlama, giyinme, alışveriş ve oyun zamanlarında aynı kelimeleri ve basit yapıları tekrarlamak, çocuğun yeni sözcükleri bağlam içinde tanımasını kolaylaştırır.',

          'Çocuğa yanıt vermesi için zaman tanımalıyız: Soru sorduktan veya bir fırsat sunduktan sonra cümleyi hemen tamamlamadan ya da araya girmeden birkaç saniye beklemeliyiz. Bu kısa bekleme süresi çocuğun düşüncesini toparlamasına ve katılım göstermesine alan açar.',

          'Sözcüklerin yanı sıra anlama ve oyun becerilerini de desteklemeliyiz: Dil gelişimi yalnızca söylenen kelime sayısıyla sınırlı değildir. Yönergeleri anlama, ortak dikkat kurma, sembolik oyun oynama ve duygu paylaşma becerilerini birlikte beslemeliyiz.',

          'Süreci kıyaslamadan, uzman rehberliğinde sürdürmeliyiz: Her çocuğun dil ve iletişim gelişim hızı kendine özgüdür. Çocuğu yaşıtlarıyla karşılaştırmak yerine değerlendirme bulgularına dayanan bireysel planı takip etmeli ve evdeki gözlemleri seanslarda paylaşmalıyız.',
        ],
      },
    ],
  },

  whoCanBenefit:
    'Konuşma becerilerinde yaşıtlarına göre gecikme fark edilen çocuklar ve aileleri bu süreçten fayda görebilir.',

  process:
    'Gecikmiş konuşmada terapi süreci, çocuğun bireysel ihtiyaçlarına göre planlanır. İlk aşamada çocuğun dil anlama ve ifade etme becerileri detaylı şekilde değerlendirilir; bu değerlendirme sonucunda çocuğa özel hedefler belirlenir ve uygun bir terapi programı oluşturulur. Seanslarda; kelime dağarcığını artırma, cümle kurma, iletişim başlatma ve sürdürme gibi beceriler oyun temelli çalışmalarla desteklenir. Ailelerin sürece aktif katılımı oldukça önemlidir; seans dışında evde uygulanabilecek öneriler paylaşılır.',

  faq: [
    {
      question: 'Çocuğumun konuşması zamanla kendiliğinden açılır mı?',
      answer:
        'Bazı çocuklarda dil gelişimi yaşla birlikte hızlanabilir; ancak beklemek yerine erken dönemde yapılan bir değerlendirme, çocuğun gerçekten yalnızca zamana mı yoksa hedefe yönelik bir desteğe mi ihtiyaç duyduğunu netleştirir.',
    },
    {
      question:
        'Hangi durumlarda bir dil ve konuşma terapistine başvurmalıyız?',
      answer:
        'Çocuğunuz yaşıtlarına kıyasla sınırlı kelime kullanıyorsa, cümle kurmada gerideyse, basit yönergeleri anlamakta zorlanıyorsa, göz teması ve ortak dikkat sınırlıysa ya da iletişim kurarken çabuk öfkelenip geri çekiliyorsa görüş alabilirsiniz.',
    },
    {
      question:
        'Ekran süresini azaltmak konuşmayı tek başına başlatır mı?',
      answer:
        'Ekranı azaltmak dikkat dağınıklığını ve tek yönlü uyaran yükünü düşürerek önemli bir alan açar; ancak asıl gelişimi sağlayan şey ekranın kapatılmasının ardından kurulan karşılıklı oyun, sohbet ve dil etkileşimidir.',
    },
    {
      question:
        'Çocuğumu konuşmaya zorlamalı mıyım, yoksa kendi haline mi bırakmalıyım?',
      answer:
        'Ne zorlayıcı "Hadi söyle" baskısı ne de tamamen kendi haline bırakmak idealdir. Çocuğun ilgisini merkeze alan, sabırla bekleyen ve doğal dil modelleri sunan dengeli bir yaklaşım en sağlıklı zemini oluşturur.',
    },
    {
      question: 'Değerlendirme ve terapi süreci nasıl ilerler?',
      answer:
        'Önce gelişim öyküsü alınır; ardından çocuğun anlama, ifade etme, oyun, sosyal iletişim ve oral-motor becerileri değerlendirilir. Elde edilen bulgulara göre çocuğun ihtiyacına uygun bireysel bir terapi ve aile rehberliği planı oluşturulur.',
    },
  ],

  relatedSlugs: [
    'artikulasyon-bozukluklari',
    'otizm-spektrum-bozuklugu',
  ],
};
