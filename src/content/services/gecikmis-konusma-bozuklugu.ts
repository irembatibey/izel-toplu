import { Sprout } from 'lucide-react';
import type { ServiceDetail } from '@/lib/types';

/**
 * Structured content for Gecikmiş Konuşma Bozukluğu.
 *
 * Renamed from "Gecikmiş Dil Gelişimi" (Phase 5) to restore the
 * exact terminology used in the source "Çalışma Alanları" reference
 * document — that section is titled "GECİKMİŞ KONUŞMA BOZUKLUĞU".
 * Old slug 'gecikmis-dil-gelisimi' is retired; do not reintroduce it.
 *
 * `symptoms` was previously left as a placeholder even though the
 * source document does contain a real "Belirtiler" list for this
 * condition — it's populated directly from that list now, since
 * using only-and-all of the provided source content is the current
 * instruction.
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
  whoCanBenefit:
    'Konuşma becerilerinde yaşıtlarına göre gecikme fark edilen çocuklar ve aileleri bu süreçten fayda görebilir.',
  process:
    'Gecikmiş konuşmada terapi süreci, çocuğun bireysel ihtiyaçlarına göre planlanır. İlk aşamada çocuğun dil anlama ve ifade etme becerileri detaylı şekilde değerlendirilir; bu değerlendirme sonucunda çocuğa özel hedefler belirlenir ve uygun bir terapi programı oluşturulur. Seanslarda; kelime dağarcığını artırma, cümle kurma, iletişim başlatma ve sürdürme gibi beceriler oyun temelli çalışmalarla desteklenir. Ailelerin sürece aktif katılımı oldukça önemlidir; seans dışında evde uygulanabilecek öneriler paylaşılır.',
  faq: [
    { question: 'Kaç yaşında değerlendirme yaptırmalıyım?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
    { question: 'Evde neler yapabilirim?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
  ],
  relatedSlugs: ['artikulasyon-bozukluklari', 'otizm-spektrum-bozuklugu'],
};