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
  whoCanBenefit:
    'Konuşma akıcılığında tekrar, uzatma veya duraksama yaşayan çocuklar ve yetişkinler bu süreçten fayda görebilir.',
  process:
    'Terapi süreci, bireyin yaşına, ihtiyaçlarına ve akıcılık düzeyine göre özel olarak planlanır. İlk aşamada detaylı bir değerlendirme yapılarak konuşma örüntüsü, takılma sıklığı ve eşlik eden durumlar belirlenir. Seanslarda; konuşma akıcılığını destekleyen teknikler, nefes ve konuşma koordinasyonu çalışmaları ile daha rahat ve kontrollü konuşma becerileri geliştirilir. Konuşma sırasında oluşabilecek kaygı, kaçınma davranışları ve iletişim güveni üzerine de çalışılır.',
  faq: [
    { question: 'Kekemelik her yaşta terapiyle desteklenebilir mi?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
    { question: 'Değerlendirme süreci nasıl işliyor?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
  ],
  relatedSlugs: ['artikulasyon-bozukluklari', 'gecikmis-dil-gelisimi'],
};