
import { Activity } from 'lucide-react';
import type { ServiceDetail } from '@/lib/types';

/**
 * Structured content for Motor Konuşma Bozuklukları.
 *
 * New service added per instruction — sourced entirely from the
 * "Çalışma Alanları" reference document (MOTOR KONUŞMA BOZUKLUKLARI
 * section). Icon: Activity, chosen to represent the muscle
 * coordination/motor-function aspect of this condition (distinct
 * from Mic/Volume2, which represent sound production and voice).
 */
export const motorKonusmaBozukluklari: ServiceDetail = {
  slug: 'motor-konusma-bozukluklari',
  icon: Activity,
  title: 'Motor Konuşma Bozuklukları',
  shortDescription:
    'Konuşma kaslarının koordineli çalışamamasından kaynaklanan konuşma güçlükleri.',
  seoDescription:
    'Motor konuşma bozuklukları belirtileri, değerlendirme ve terapi süreci hakkında bilgi edinin.',
  overview:
    'Motor konuşma bozukluğu, konuşma için gerekli olan kasların (dil, dudak, çene gibi) doğru ve koordineli şekilde çalışamaması sonucu ortaya çıkan bir durumdur. Kişi ne söylemek istediğini bilir; ancak bunu net ve akıcı bir şekilde ifade etmekte zorlanabilir. Konuşma anlaşılmaz, yavaş ya da düzensiz olabilir. Bu durum hem çocuklarda hem de yetişkinlerde görülebilir ve genellikle nörolojik temelli olabilir.',
  symptoms: [
    'Konuşmanın anlaşılmasının zor olması',
    'Sesleri doğru ve net çıkaramama',
    'Konuşmanın yavaş, kesik kesik ya da düzensiz olması',
    'Heceleri veya sesleri sıralarken zorlanma',
    'Uzun kelimeleri söylemede belirgin güçlük yaşama',
    'Konuşurken ağız hareketlerinde zorlanma veya uyumsuzluk',
    'Söylemek istediklerini ifade ederken çaba harcama',
  ],
  symptomContent: {
    intro:
      'Motor konuşma bozuklukları; konuşma seslerinin üretilmesi için gerekli olan solunum, ses üretimi (fonasyon), rezonans ve dil, dudak, çene ile damak hareketlerinin planlanması, programlanması veya kas kontrolü ile ilgili güçlükler sonucunda ortaya çıkar. Belirtiler; durumun gelişimsel mi yoksa sonradan mı ortaya çıktığına, kas gücüne/koordinasyonuna mı yoksa hareket planlamasına mı bağlı olduğuna göre farklı biçimlerde kendini gösterebilir.',
    sections: [
      {
        title:
          'Konuşma Hareketleri ve Anlaşılabilirlikte Görülebilecek Belirtiler',
        items: [
          'Konuşmanın boğuk, peltek veya güç anlaşılan çıkması: Dil, dudak veya çene hareketlerinin tam hedefine ulaşamaması ya da yavaş/sınırlı kalması nedeniyle seslerin net ayrılamaması ve özellikle tanımadık dinleyicilerce anlaşılmanın zorlaşmasıdır.',
          'Çok heceli veya yeni kelimelerde tutukluk ve tutarsızlık: Aynı kelimenin farklı denemelerde farklı biçimlerde söylenmesi, özellikle uzun veya karmaşık sözcüklerde hecelerin sırasının karışması, atlanması ya da zorlanılmasıdır.',
          'Konuşma hızı, ritim ve vurguda farklılıklar: Konuşmanın aşırı yavaş ve tekdüze olması, kesik kesik/hece hece ilerlemesi ya da vurgu ve tonlamanın konuşmanın doğal akışına uyum sağlayamamasıdır.',
          'Ses kalitesi, nefes ve rezonans değişiklikleri: Sesin zayıf, hışıltılı, gergin veya kısık çıkması; uzun cümlelerde nefesin çabuk tükenmesi ya da konuşmanın genizden (nazal) veya boğuk bir tınıyla duyulmasıdır.',
        ],
      },
      {
        title:
          'Oral-Motor Kontrol ve Günlük İletişime Yansıyan İpuçları',
        items: [
          'Dil, dudak ve çene hareketlerinde zorlanma veya gecikme: İstenen ağız hareketlerini başlatmada, sürdürmede ya da ardışık hareketlere geçişte yavaşlık, titreme, zayıflık veya belirgin çaba görülmesidir.',
          'Çiğneme, yutma veya salya kontrolünde eşlik eden güçlükler: Özellikle kas kontrolüne bağlı tablolarda besinleri ağız içinde yönetme, yutma sırasında zorlanma ya da ağız çevresinde salya kontrolünde güçlük gibi bulgular eşlik edebilir.',
          'Yorgunlukla birlikte konuşmanın belirginleşmesi: Gün sonuna doğru, yorgunken, heyecanlandığında ya da uzun süre konuştuğunda konuşma netliğinin ve anlaşılabilirliğinin daha da düşmesidir.',
          'İletişimde yorulma ve geri çekilme: Konuşma çabasının fiziksel ve zihinsel olarak yorucu hale gelmesi nedeniyle kısa ifadeler kullanma, konuşmayı erteleme veya konuşma gerektiren ortamlardan çekilme görülebilir.',
        ],
      },
    ],
    note:
      'Motor konuşma güçlükleri hem çocuklarda gelişimsel süreçte hem de yetişkinlerde çeşitli nörolojik veya tıbbi durumların ardından görülebilir. Belirtilerin başlangıç şekli ve seyri netlik kazandırmak için tıbbi/nörolojik değerlendirme ile dil ve konuşma terapistinin motor konuşma incelemesinin birlikte ele alınması önemlidir.',
  },
  whoCanBenefit:
    'Konuşma kaslarının koordinasyonunda güçlük yaşayan çocuk veya yetişkin bireyler bu süreçten fayda görebilir.',
  process:
    'Motor konuşma bozukluğunda terapi süreci, bireyin ihtiyaçlarına ve yaşadığı zorlukların türüne göre özel olarak planlanır. İlk aşamada konuşma sırasında kasların nasıl çalıştığı, seslerin nasıl üretildiği ve hangi alanlarda güçlük yaşandığı detaylı şekilde değerlendirilir. Bu doğrultuda kişiye özel hedefler belirlenir. Seanslarda; konuşma için gerekli kasların koordinasyonunu geliştirmeye yönelik çalışmalar yapılır. Seslerin doğru sıralanması, hece ve kelime üretimi ile konuşma akıcılığı desteklenir. Egzersizler genellikle tekrar ve yapılandırılmış çalışmalarla ilerler.',
  faq: [
    {
      question:
        'Motor konuşma bozukluğu ile artikülasyon bozukluğu aynı şey midir?',
      answer:
        'Hayır. Artikülasyon bozukluğu genellikle belirli seslerin tekil motor üretim alışkanlıklarıyla ilişkilidir; motor konuşma bozukluklarında ise solunum, ses üretimi, rezonans, konuşma hızı/ritmi veya konuşma hareketlerinin beyinden planlanması ve kaslarla yürütülmesi daha geniş bir düzeyde etkilenir.',
    },
    {
      question:
        'Bu belirtiler yalnızca çocuklarda mı görülür, yoksa sonradan da ortaya çıkabilir mi?',
      answer:
        'Her iki durumda da görülebilir. Çocuklarda gelişimsel konuşma apraksisi veya nöromotor gelişim farklılıklarıyla erken yaşlarda fark edilebilirken; yetişkinlerde inme, travma veya çeşitli nörolojik durumların ardından sonradan da ortaya çıkabilir.',
    },
    {
      question:
        'Konuşma anlaşılmadığında veya kişi çok yorulduğunda günlük iletişimde ne yapmalıyız?',
      answer:
        'Cümleleri kısa ve net tutmak, gürültülü ortamlardan uzaklaşmak, karşılıklı yüz yüze iletişim kurmak ve kişiye acele ettirmeden konuşması için zaman tanımak iletişimi belirgin biçimde rahatlatır.',
    },
    {
      question: 'Değerlendirme ve terapi süreci nasıl ilerler?',
      answer:
        'İlk görüşmede ayrıntılı tıbbi ve gelişimsel öykü alınır; oral-motor yapı ve hareketler, solunum-ses koordinasyonu, hece/kelime üretimi ve konuşma anlaşılırlığı değerlendirilir. Elde edilen bulgulara göre gerekli tıbbi konsültasyonlarla uyumlu, kişiye özel bir terapi planı oluşturulur.',
    },
  ],
  relatedSlugs: ['norolojik-dil-bozuklugu', 'artikulasyon-bozukluklari'],
};
