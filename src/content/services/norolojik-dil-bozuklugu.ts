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
  whoCanBenefit:
    'İnme, travma veya nörolojik hastalıklar sonrasında dilde anlama ya da ifade güçlüğü yaşayan bireyler bu süreçten fayda görebilir.',
  process:
    'Terapi süreci, bireyin yaşına, ihtiyaçlarına ve yaşadığı dil güçlüklerinin türüne göre özel olarak planlanır. İlk aşamada dil anlama, ifade etme, okuma ve yazma becerileri detaylı şekilde değerlendirilir ve buna uygun hedefler belirlenir. Seanslarda; kelime bulma, cümle kurma, söyleneni anlama ve iletişim stratejileri üzerine çalışmalar yapılır. Amaç, bireyin günlük yaşamda kendini daha rahat ve anlaşılır şekilde ifade edebilmesini sağlamaktır.',
  faq: [
    { question: 'Nörolojik dil bozukluğu terapisi ne zaman başlamalı?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
    { question: 'Aile süreçte nasıl destek olabilir?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
  ],
  relatedSlugs: ['motor-konusma-bozukluklari', 'ses-bozukluklari'],
};