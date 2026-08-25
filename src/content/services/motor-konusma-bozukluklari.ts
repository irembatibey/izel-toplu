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
  whoCanBenefit:
    'Konuşma kaslarının koordinasyonunda güçlük yaşayan çocuk veya yetişkin bireyler bu süreçten fayda görebilir.',
  process:
    'Motor konuşma bozukluğunda terapi süreci, bireyin ihtiyaçlarına ve yaşadığı zorlukların türüne göre özel olarak planlanır. İlk aşamada konuşma sırasında kasların nasıl çalıştığı, seslerin nasıl üretildiği ve hangi alanlarda güçlük yaşandığı detaylı şekilde değerlendirilir. Bu doğrultuda kişiye özel hedefler belirlenir. Seanslarda; konuşma için gerekli kasların koordinasyonunu geliştirmeye yönelik çalışmalar yapılır. Seslerin doğru sıralanması, hece ve kelime üretimi ile konuşma akıcılığı desteklenir. Egzersizler genellikle tekrar ve yapılandırılmış çalışmalarla ilerler.',
  faq: [
    { question: 'Motor konuşma bozukluğu hangi yaş grubunda görülür?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
    { question: 'Terapi ne sıklıkla yapılmalı?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
  ],
  relatedSlugs: ['norolojik-dil-bozuklugu', 'artikulasyon-bozukluklari'],
};