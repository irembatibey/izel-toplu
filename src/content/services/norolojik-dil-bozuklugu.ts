
import { Brain } from 'lucide-react';
import type { ServiceDetail } from '@/lib/types';

/**
 * Structured content for Nörolojik Dil Bozukluğu.
 *
 * Renamed from "Afazi" — the source "Çalışma Alanları" reference
 * document has no section literally titled "Afazi"; the actual
 * matching section is "NÖROLOJİK DİL BOZUKLUĞU", which describes
 * exactly this condition (dil bozukluğu arising from stroke, trauma,
 * or neurological causes). This restores the source's own heading
 * as the title/slug instead of the earlier assumed name. Old slug
 * 'afazi' is retired; do not reintroduce it.
 */
export const norolojikDilBozuklugu: ServiceDetail = {
  slug: 'norolojik-dil-bozuklugu',
  icon: Brain,
  title: 'Nörolojik Dil Bozukluğu',
  shortDescription:
    'Beyin kaynaklı nedenlerle dili anlama, ifade etme, okuma veya yazmada yaşanan güçlükler.',
  seoDescription:
    'Nörolojik dil bozukluğu belirtileri, değerlendirme ve terapi süreci hakkında bilgi edinin.',
  overview:
    'Nörolojik dil bozukluğu, beyin kaynaklı nedenlerle kişinin dili anlama, ifade etme, okuma ya da yazma becerilerinde zorlanma yaşaması durumudur. Kişi ne söylemek istediğini biliyor olabilir; ancak kelimeleri bulmakta, cümle kurmakta ya da kendini doğru ifade etmekte güçlük yaşayabilir. Bu durum bazı bireylerde doğuştan görülebilirken, bazı durumlarda inme, travma veya nörolojik hastalıklar sonrasında ortaya çıkabilir.',
  symptoms: [
    'Konuşurken doğru kelimeyi bulmakta zorlanma',
    'Cümle kurarken eksik, kısa ya da hatalı ifadeler kullanma',
    'Söylenenleri anlamada güçlük yaşama veya sık tekrar isteme',
    'Okuma ve yazma becerilerinde zorlanma',
    'Konuşma sırasında duraksama, tekrar etme veya akıcılıkta bozulma',
    'Karmaşık cümleleri anlamakta zorlanma',
    'İletişim kurarken zorlanma ve kendini ifade etmekte güçlük yaşama',
  ],
  symptomContent: {
    intro:
      'Nörolojik dil bozuklukları; beynin dil ve iletişimle ilişkili ağlarını etkileyen inme, kafa travması, nörodejeneratif durumlar, enfeksiyonlar veya yer kaplayan lezyonlar sonrasında ortaya çıkabilen, dilin anlaşılması, ifade edilmesi, okunması veya yazılması becerilerindeki edinilmiş güçlüklerdir. Belirtiler etkilenen beyin bölgelerine ve sürecin seyrine göre kişiden kişiye farklı yoğunluk ve biçimlerde görülebilir.',
    sections: [
      {
        title: 'İfade Edici Dilde Görülebilecek Belirtiler',
        items: [
          'Kelime bulma güçlüğü (anomi): Günlük yaşamda iyi bilinen nesnelerin, kişilerin veya eylemlerin adını o an hatırlayamama, cümle içinde duraklama veya aranan kelime yerine dolambaçlı açıklamalar yapmadır.',
          'Cümle kurma ve dilbilgisi yapısında değişimler: Kısa, telgrafvari veya eksik cümlelerle konuşma ya da uzun, karmaşık ama anlam bütünlüğü zayıf/akıcı görünen cümleler kurmadır.',
          'Kelime veya ses karıştırma (parafazi): Söylenmek istenen sözcük yerine sesçe benzer başka bir sözcüğü (örneğin "masa" yerine "kasa") veya anlamca ilişkili farklı bir sözcüğü (örneğin "çatal" yerine "kaşık") kullanmadır.',
          'Kendini ifade etmede çaba ve hayal kırıklığı: Düşünceleri sözcüklere dökerken zorlanma, cümleyi yarım bırakma ya da anlaşılamadığında çabuk yorulma ve öfkelenme/üzülme yaşanmasıdır.',
        ],
      },
      {
        title:
          'Anlama, Okuma, Yazma ve İletişimde Görülebilecek Belirtiler',
        items: [
          'Söyleneni anlamada güçlük: Hızlı konuşmaları, uzun veya çok adımlı yönergeleri, şakaları ya da mecazlı ifadeleri takip etmede zorlanma; sorulan soruya konuyla ilgisiz yanıt verme görülebilir.',
          'Okuma ve yazmada zorlanma (aleksi ve agrafi): Tabelaları, mesajları, gazeteyi veya kısa notları okumakta ve anlamakta güçlük çekme; harf/kelime yazmada, cümle kurmada veya imla/biçim bozuklukları yaşama dikkat çekebilir.',
          'Sayı ve günlük işlevsel dil becerilerinde değişimler: Saat/tarih/fiyat gibi sayısal ifadeleri okumada, anlamada veya kullanmada zorlanma; telefon görüşmesi yapma ya da alışveriş gibi günlük iletişim durumlarında çekinme görülebilir.',
          'İletişimde geri çekilme ve yorulma: Zihinsel yükün artmasıyla birlikte sohbetlere katılmaktan kaçınma, sessiz kalma veya gün içinde kısa konuşmalardan sonra bile zihinsel tükenmişlik hissetme ortaya çıkabilir.',
        ],
      },
    ],
    note:
      'Nörolojik dil bozukluğu bulguları, özellikle ani başlangıçlı olduğunda acil tıbbi değerlendirme gerektirir. Tıbbi ve nörolojik tablonun netleşmesinin ardından dil ve konuşma terapisti tarafından yapılan kapsamlı dil değerlendirmesi, bireyin güçlü yönlerini ve terapi hedeflerini belirler.',
  },
  whoCanBenefit:
    'İnme, travma veya nörolojik hastalıklar sonrasında dilde anlama ya da ifade güçlüğü yaşayan bireyler bu süreçten fayda görebilir.',
  process:
    'Terapi süreci, bireyin yaşına, ihtiyaçlarına ve yaşadığı dil güçlüklerinin türüne göre özel olarak planlanır. İlk aşamada dil anlama, ifade etme, okuma ve yazma becerileri detaylı şekilde değerlendirilir ve buna uygun hedefler belirlenir. Seanslarda; kelime bulma, cümle kurma, söyleneni anlama ve iletişim stratejileri üzerine çalışmalar yapılır. Amaç, bireyin günlük yaşamda kendini daha rahat ve anlaşılır şekilde ifade edebilmesini sağlamaktır.',
  faq: [
    {
      question:
        'Nörolojik dil bozukluğu (örneğin afazi) zihinsel yetilerin tamamen kaybolduğu anlamına mı gelir?',
      answer:
        'Hayır. Nörolojik dil bozuklukları kişinin düşüncelerini kelimelere dökme, söyleneni anlama, okuma veya yazma süreçlerini etkiler; ancak kişinin zekâsını, duygularını, anılarını veya yetişkin kimliğini ortadan kaldırmaz. İletişim kurarken saygılı, sabırlı ve yetişkin düzeyine uygun bir dil kullanmak büyük önem taşır.',
    },
    {
      question:
        'Nörolojik dil bozukluğu ile motor konuşma bozukluğu aynı durum mudur?',
      answer:
        'Hayır. Motor konuşma bozuklukları konuşma hareketlerinin planlanması veya kaslarla yürütülmesiyle ilgiliyken; nörolojik dil bozuklukları doğrudan kelime bulma, cümle kurma, anlama, okuma ve yazma gibi dil sisteminin işleyişini etkiler. Bazı danışanlarda bu iki tablo birlikte de görülebilir; değerlendirmede her iki alan ayrıntılı olarak incelenir.',
    },
    {
      question:
        'Terapiye ne zaman başlanmalıdır, aradan zaman geçtiyse yine de ilerleme sağlanabilir mi?',
      answer:
        'Tıbbi durum stabil hale gelir gelmez erken dönemde başlanan terapi süreci iyileşme potansiyelini güçlü biçimde destekler. Bununla birlikte, olayın üzerinden aylar veya yıllar geçmiş olsa bile hedefe yönelik bireysel dil ve konuşma terapisi ile işlevsel iletişim becerilerinde anlamlı kazanımlar elde edilebilir.',
    },
  ],
  relatedSlugs: ['motor-konusma-bozukluklari', 'ses-bozukluklari'],
};
