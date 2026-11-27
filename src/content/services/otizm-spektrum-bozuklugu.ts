
import { Users } from 'lucide-react';
import type { ServiceDetail } from '@/lib/types';

/**
 * Structured content for Otizm Spektrum Bozukluğu.
 *
 * New service added per instruction — sourced entirely from the
 * "Çalışma Alanları" reference document (OTİZM SPEKTRUM BOZUKLUĞU
 * section). Icon: Users, chosen for the condition's emphasis on
 * social interaction/communication rather than a puzzle-piece style
 * icon, which carries contested associations in the autism
 * community and was deliberately avoided.
 */
export const otizmSpektrumBozuklugu: ServiceDetail = {
  slug: 'otizm-spektrum-bozuklugu',
  icon: Users,
  title: 'Otizm Spektrum Bozukluğu',
  shortDescription:
    'Çocuğun iletişim, sosyal etkileşim ve davranış alanlarında farklılıklar yaşadığı gelişimsel durumlar.',
  seoDescription:
    'Otizm spektrum bozukluğu belirtileri, değerlendirme ve terapi süreci hakkında bilgi edinin.',
  overview:
    'Otizm spektrum bozukluğu, çocuğun iletişim kurma, sosyal etkileşim ve davranış alanlarında farklılıklar yaşadığı nörogelişimsel bir durumdur. Her çocuk kendine özgüdür; bu nedenle otizm belirtileri her çocukta aynı şekilde görülmez. Bazı çocuklar konuşmada gecikme yaşarken, bazıları iletişim kurmakta ya da sosyal ortamlara uyum sağlamakta zorlanabilir. Bu durum bir "eksiklik" değil, farklı bir gelişim şeklidir.',
  symptoms: [
    'İsmi söylendiğinde her zaman tepki vermemesi',
    'Göz teması kurmakta zorlanması',
    'Konuşmada gecikme ya da konuşmanın hiç başlamaması',
    'İsteklerini ifade etmek yerine işaret etme veya yetişkinin elini yönlendirme',
    'Akranlarıyla oyun kurmakta zorlanma veya yalnız oynamayı tercih etme',
    'Aynı hareketleri tekrar etme (el çırpma, sallanma vb.)',
    'Rutinlere aşırı bağlılık ve değişikliklere zor uyum sağlama',
    'Bazı ses, ışık veya dokulara karşı aşırı hassasiyet',
  ],
  symptomContent: {
    intro:
      'Otizm spektrum bozukluğunda belirtiler sosyal iletişim ve etkileşim, tekrarlayıcı davranışlar, ilgi alanları ve duyusal tepkiler gibi farklı alanlarda görülebilir. Her bireyin özellikleri ve destek ihtiyaçları kendine özgüdür. Belirtiler yaşa ve iletişim düzeyine göre farklı biçimlerde ortaya çıkabilir.',
    sections: [
      {
        title: 'Sosyal Etkileşim ve İletişim Alanında Görülebilecek Belirtiler',
        items: [
          'Göz teması, ortak dikkat ve sosyal karşılık verme farklılıkları: Adı söylendiğinde tepki vermeme veya dönüp bakmama, bir nesneyi/olayı paylaşmak için karşıdakine bakma ya da parmakla gösterme gibi ortak dikkat davranışlarının sınırlı olması, gülümsemeye veya duygusal ifadelere beklenen karşılığın gelmemesi görülebilir.',
          'Sözel ve sözel olmayan iletişimde değişimler: Konuşmanın akranlara kıyasla gecikmesi, hiç başlamaması veya kazanılmış bazı kelimelerin/iletişim becerilerinin zamanla azalması; el sallama, başla onaylama/reddetme gibi jestlerin ve yüz ifadelerinin konuşmaya eşlik etmemesi dikkat çeker.',
          'Karşılıklı iletişim ve sosyal ipuçlarını okumada zorlanma: Konuşma gelişmiş olsa bile karşılıklı sohbeti sürdürmede, sıra almada, şaka/mecaz/kinaye gibi sözel olmayan anlamları çözmede veya karşıdaki kişinin duygusal tonunu yakalamada güçlük yaşanabilir.',
          'Paylaşılan oyun ve akran ilişkilerinde farklılıklar: Akranlarla kendiliğinden oyun başlatmada, ortak kurallara esnek uyum sağlamada veya oyuncakları amacına uygun/hayali (sembolik) biçimde kullanmada farklılıklar gözlemlenebilir.',
        ],
      },
      {
        title:
          'Tekrarlayıcı Davranışlar, İlgi Alanları ve Duyusal Tepkilerde Görülebilecek Belirtiler',
        items: [
          'Tekrarlayıcı motor ve sözel davranışlar: El çırpma, sallanma, parmak ucunda yürüme, nesneleri yan yana dizme ya da döndürme gibi hareketlerin yanı sıra duyulan kelimeleri veya kalıpları bağlamından kopuk biçimde tekrarlama (ekolali) veya zamir/tonlama kalıplarına takılma görülebilir.',
          'Rutinlere bağlılık ve değişime direnç: Günlük akışta, gidilen yolda, eşyaların yerleştirmesinde veya oyun düzeninde yapılan küçük değişikliklere karşı yoğun huzursuzluk, kaygı ya da duygusal patlamalar yaşanabilir.',
          'Sınırlı ve yoğun ilgi alanları: Belirli nesnelere, temalara, sayılara, harflere, haritalara veya nesnenin yalnızca bir parçasına yaşıtlarından çok daha yoğun ve uzun süreli odaklanma eğilimi görülebilir.',
          'Duyusal aşırı duyarlılık veya duyusal arayış: Yüksek seslere, kalabalık veya floresan/parlak ışıklara, etiket/kumaş dokularına, kokulara veya belirli yiyecek kıvamlarına karşı aşırı rahatsızlık ya da dokunma, koklama, dönme, zıplama veya görsel uyaranlara yoğun arayış ortaya çıkabilir.',
        ],
      },
      {
        title: 'Yaşa ve İletişim Düzeyine Göre Farklılaşabilen İpuçları',
        items: [
          'Erken çocukluk döneminde: İsimle çağrılmaya yanıt azlığı, işaret etme/gösterme eksikliği, sosyal gülümsemede sınırlılık ve oyunda tekdüzelik erken dikkat çeken işaretler arasındadır.',
          'Okul çağı ve sonrasında (özellikle sözel becerisi gelişmiş bireylerde): Kuralları veya rutini koruma konusunda katılık, sosyal ortamlarda kendini yalnız veya "farklı" hissetme, yoğun ilgi alanları üzerinden tek yönlü konuşma ya da gün boyu sosyal uyum sağlamaya çalışırken yaşanan yoğun zihinsel/duygusal yorgunluk öne çıkabilir.',
        ],
      },
    ],
    note:
      'Bu belirtilerin tek başına görülmesi kesin tanı anlamına gelmez. Ancak birden fazla alanda gözlemlendiğinde çocuk ve ergen ruh sağlığı uzmanları, çocuk hekimleri ve dil ve konuşma ile ergoterapi gibi disiplinlerarası ekiplerce yapılan bütüncül değerlendirme, bireyin güçlü yönlerini ve destek ihtiyaçlarını en doğru biçimde ortaya koyar.',
  },
  whoCanBenefit:
    'İletişim, sosyal etkileşim veya davranış alanlarında farklılık gösteren çocuklar ve aileleri bu süreçten fayda görebilir.',
  process:
    'Terapi süreci, her çocuğun ihtiyaçlarına göre bireysel olarak planlanır. İlk aşamada çocuğun iletişim, sosyal etkileşim ve oyun becerileri detaylı şekilde değerlendirilir; bu değerlendirme sonucunda çocuğa özel hedefler belirlenir ve buna uygun bir terapi programı oluşturulur. Seanslarda; iletişim kurma, göz teması, ortak dikkat, oyun becerileri ve dil gelişimi gibi alanlar desteklenir. Çocuğun ilgisini çeken materyaller ve oyunlar kullanılarak öğrenme süreci daha doğal ve keyifli hale getirilir. Ailelerin sürece aktif katılımı da oldukça önemlidir.',
  faq: [
    {
      question:
        'Bu belirtilerden birkaçı görülmesi otizm spektrum bozukluğu olduğu anlamına gelir mi?',
      answer:
        'Hayır. Tek bir davranış ya da geçici bir gelişimsel farklılık tek başına tanı koymak için yeterli değildir. Değerlendirmede belirtilerin sürekliliği, farklı ortamlarda görülmesi ve sosyal iletişim ile tekrarlayıcı/duyusal örüntülerde nasıl bir bütün oluşturduğu birlikte ele alınır.',
    },
    {
      question:
        'Otizm belirtileri ne zaman fark edilir, yetişkinlikte de fark edilebilir mi?',
      answer:
        'Çoğu durumda belirtiler erken çocukluk döneminde gözlemlenir; ancak özellikle sosyal maskeleme becerisi yüksek olan, sözel ifadesi güçlü olan ya da destekleyici çevrelerde büyüyen kişilerde farkındalık okul çağında, ergenlikte veya yetişkinlikte de ortaya çıkabilir.',
    },
    {
      question: 'Erken dönemde destek almak neden önemlidir?',
      answer:
        'Erken dönemde başlanan bütüncül destekler; çocuğun ortak dikkat, iletişim başlatma, oyun, duygu düzenleme ve günlük yaşam becerilerini güçlendirirken ailenin de süreci daha bilinçli ve rahat yönetmesine yardımcı olur.',
    },
    {
      question: 'Değerlendirme ve terapi süreci nasıl ilerler?',
      answer:
        'İlk aşamada ayrıntılı gelişim ve iletişim öyküsü alınır; sosyal etkileşim, dil-iletişim, oyun, duyusal işlemleme ve günlük yaşam becerileri gözlemlenir. Elde edilen bulgulara göre hekim değerlendirmesiyle eşgüdümlü olarak bireye ve aileye özel bir destek planı oluşturulur.',
    },
  ],
  relatedSlugs: ['gecikmis-konusma-bozuklugu', 'artikulasyon-bozukluklari'],
};
