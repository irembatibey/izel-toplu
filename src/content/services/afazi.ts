import { Brain } from 'lucide-react';
import type { ServiceDetail } from '@/lib/types';

/**
 * Structured content for Afazi.
 *
 * ASSUMPTION FLAGGED FOR APPROVAL: the provided "Çalışma Alanları"
 * reference document does not contain a section literally titled
 * "Afazi" — the only matching section is "NÖROLOJİK DİL BOZUKLUĞU",
 * which describes dil bozuklukları arising from stroke, trauma, or
 * neurological conditions (i.e. what "afazi" clinically refers to),
 * and the About-page content separately confirms the therapist's
 * real clinical experience with "afazi ... tanılı" cases in that
 * same context. This file reuses that section's content under the
 * already-established "Afazi" title/slug from the service registry.
 * If this mapping isn't correct, this file should be revised rather
 * than treated as final.
 */
export const afazi: ServiceDetail = {
  slug: 'afazi',
  icon: Brain,
  title: 'Afazi',
  shortDescription:
    'Beyin hasarı sonrası dil anlama veya ifade etmede yaşanan güçlükler.',
  seoDescription:
    'Afazi belirtileri, değerlendirme ve terapi süreci hakkında bilgi edinin.',
  overview:
    'Afazi, beyin kaynaklı nedenlerle kişinin dili anlama, ifade etme, okuma ya da yazma becerilerinde zorlanma yaşaması durumudur. Kişi ne söylemek istediğini biliyor olabilir; ancak kelimeleri bulmakta, cümle kurmakta ya da kendini doğru ifade etmekte güçlük yaşayabilir. Bu durum bazı bireylerde doğuştan görülebilirken, bazı durumlarda inme, travma veya nörolojik hastalıklar sonrasında ortaya çıkabilir.',
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
    { question: 'Afazi terapisi ne zaman başlamalı?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
    { question: 'Aile süreçte nasıl destek olabilir?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
  ],
  relatedSlugs: ['ses-bozukluklari', 'gecikmis-dil-gelisimi'],
};