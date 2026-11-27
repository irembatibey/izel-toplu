
import { Volume2 } from 'lucide-react';
import type { ServiceDetail } from '@/lib/types';

/**
 * Structured content for Ses Bozuklukları.
 *
 * Sourced from the provided "Çalışma Alanları" reference document
 * (SES BOZUKLUĞU section). Symptoms are taken directly from that
 * section's "Belirtiler" list.
 */
export const sesBozukluklari: ServiceDetail = {
  slug: 'ses-bozukluklari',
  icon: Volume2,
  title: 'Ses Bozuklukları',
  shortDescription:
    'Ses tonu, perdesi veya kalitesinde yaşanan değişiklikler.',
  seoDescription:
    'Ses bozukluğu belirtileri, değerlendirme ve terapi süreci hakkında bilgi edinin.',
  overview:
    'Ses bozukluğu, kişinin sesinin kalitesinde, yüksekliğinde veya kullanımında farklılıklar olması durumudur. Ses kısık, çatallı, nefesli ya da yorgun çıkabilir; konuşurken zorlanma veya boğazda rahatsızlık hissi eşlik edebilir. Bu durum hem çocuklarda hem de yetişkinlerde görülebilir ve genellikle sesin yanlış ya da yoğun kullanımı, enfeksiyonlar veya bazı fizyolojik etkenlerle ilişkili olabilir.',
  symptoms: [
    'Sesin kısık, çatallı veya boğuk çıkması',
    'Konuşurken çabuk yorulma veya sesin çabuk tükenmesi',
    'Ses açmakta zorlanma veya sesin sürekli değişken olması',
    'Boğazda ağrı, yanma ya da takılma hissi',
    'Uzun süre konuşunca sesin belirgin şekilde kötüleşmesi',
    'Sık sık boğaz temizleme ihtiyacı',
  ],
  symptomContent: {
    intro:
      'Ses bozukluğu; ses tellerinin titreşimi, nefes desteği veya sesin rezonansı ile ilgili farklılıklar nedeniyle sesin tınısında, yüksekliğinde, şiddetinde ya da dayanıklılığında kişinin yaşını, cinsiyetini ve günlük iletişim ihtiyaçlarını karşılamayan değişikliklerle ortaya çıkar.',
    sections: [
      {
        title: 'Hangi Belirtiler Görülebilir?',
        items: [
          'Ses kısıklığı ve pürüzlü/boğuk tını: Sesin normalden daha hışıltılı, çatallı, nefesli, boğuk veya mat çıkmasıdır.',
          'Ses yorgunluğu ve dayanıklılık azalması: Gün içinde kısa süre konuşulduktan sonra bile seste zayıflama, yorulma veya konuşmayı sürdürmekte zorlanma yaşanmasıdır.',
          'Ses aralığında ve kontrolünde değişim: İnce (tiz) ya da kalın (pes) notalara ulaşamama, sesin aniden çatlaması/kırılması veya ses yüksekliğini ayarlamakta güçlük çekilmesidir.',
          'Sesin kesilmesi veya hiç çıkmaması: Konuşma sırasında sesin aniden kesilmesi ya da fısıltı düzeyine inmesidir.',
          'Boğazda gerginlik, kuruluk veya yanma hissi: Konuşurken ya da sonrasında boğaz bölgesinde sıkışma, gıcık, yanma veya aşırı boğaz temizleme isteği hissedilmesidir.',
        ],
      },
      {
        title: 'Günlük Yaşamda Nelere Dikkat Etmeliyiz?',
        items: [
          'Boğaz temizleme ve bağırma yerine alternatif yollar seçmeliyiz: Sık sık boğaz temizlemek ses tellerinin birbirine sertçe çarpmasına yol açar; bunun yerine küçük bir yudum su içmek veya yumuşak bir yutkunma/öksürük denemek daha koruyucudur. Gürültülü ortamlarda bağırmak yerine ortama yaklaşmak veya dikkat çekmek için farklı bir işaret kullanmalıyız.',
          'Gün boyu yeterli ve düzenli su tüketmeliyiz: Ses tellerinin sağlıklı titreşebilmesi için sistemik hidrasyon önemlidir. Gün içine yayılmış düzenli su içimi, ses dokularının nemli ve esnek kalmasına destek olur.',
          'Kafein, alkol, sigara ve kuru/dumanlı ortamları sınırlamalıyız: Sigara dumanı, yoğun klima/kalorifer kuruluğu ve aşırı kafein/alkol kullanımı ses tellerinde kuruluk ve tahrişi artırabilir. Bulunduğumuz ortamın nem dengesine de özen göstermeliyiz.',
          'Sesi zorlamadan, nefesle desteklenmiş rahat bir üretimle konuşmalıyız: Konuşurken boyun, omuz veya çene kaslarını kasmak yerine diyafram ve nefes desteğini rahat kullanmalı; uzun konuşma dönemlerinde sese kısa dinlenme araları vermeliyiz.',
          '2 haftayı aşan ses kısıklığını ihmal etmeden uzman değerlendirmesi almalıyız: Özellikle iki haftadan uzun süren ses değişikliklerinde, ağrı veya yutma güçlüğü gibi ek bulgular eşlik ettiğinde ya da ses mesleki açıdan kritik olduğunda kulak burun boğaz (KBB) hekimi ve dil ve konuşma terapisti iş birliğiyle değerlendirme yaptırmalıyız.',
        ],
      },
    ],
  },
  whoCanBenefit:
    'Ses kalitesinde, perdesinde veya kullanımında değişiklik yaşayan çocuklar ve yetişkinler bu süreçten fayda görebilir.',
  process:
    'Terapi süreci, kişinin ses kullanım alışkanlıklarına ve ihtiyaçlarına göre bireysel olarak planlanır. İlk aşamada detaylı bir değerlendirme yapılır ve sesin nasıl kullanıldığı analiz edilir; gerekli durumlarda kulak burun boğaz hekimi ile iş birliği sağlanır. Seanslarda; doğru nefes kullanımı, ses hijyeni ve sağlıklı ses üretimi üzerine çalışmalar yapılır. Kişiye günlük yaşamda uygulayabileceği pratik öneriler sunulur.',
  faq: [
    {
      question: 'Ses kısıklığı ne kadar sürerse uzman görüşü almalıyız?',
      answer:
        'Soğuk algınlığı veya kısa süreli ses yüklenmesine bağlı değişiklikler birkaç gün içinde toparlanabilir; ancak iki haftayı aşan ses kısıklıklarında, sık tekrarlayan ses yorgunluklarında ya da ağrı gibi ek şikayetlerde gecikmeden değerlendirme yapılması gerekir.',
    },
    {
      question: 'Ses terapisi öncesi KBB muayenesi gerekir mi?',
      answer:
        'Evet. Ses bozukluklarında öncelikle kulak burun boğaz (KBB) hekiminin ses tellerini değerlendirmesi, olası yapısal veya tıbbi durumların netleşmesini sağlar; ardından dil ve konuşma terapisti ile ses kullanımına yönelik bireysel terapi süreci planlanır.',
    },
    {
      question: 'Fısıldayarak konuşmak sesi dinlendirir mi?',
      answer:
        'Hayır. Fısıldamak sanılanın aksine boğaz ve ses tellerinde ek gerginlik oluşturabilir. Sesinizi dinlendirmek istediğinizde fısıltı yerine az, sakin ve zorlamadan konuşmak veya kısa süre sessiz kalmak daha uygundur.',
    },
    {
      question: 'Ses bozukluğu yalnızca çok konuşanlarda mı görülür?',
      answer:
        'Hayır. Çok konuşmak veya bağırmak önemli bir tetikleyici olsa da yanlış nefes ve kas kullanımı, boğaz temizleme alışkanlığı, reflü, kuruluk veya stres gibi etkenlerle daha az konuşan kişilerde ve çocuklarda da ses bozukluğu gelişebilir.',
    },
  ],
  relatedSlugs: ['norolojik-dil-bozuklugu', 'kekemelik'],
};
