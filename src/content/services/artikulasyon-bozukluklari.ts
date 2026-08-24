import { Mic } from 'lucide-react';
import type { ServiceDetail } from '@/lib/types';

/**
 * Structured content for Artikülasyon Bozuklukları.
 *
 * Sourced from the provided "Çalışma Alanları" reference document
 * (ARTİKÜLASYON BOZUKLUĞU section). That section does not include a
 * dedicated "Belirtiler" (symptoms) list — only a "Neden Olur?"
 * (causes) list — so `symptoms` is left as an explicit placeholder
 * rather than repurposing the causes list or inventing symptoms.
 * See the Phase 7 engineering report for this flagged gap.
 */
export const artikulasyonBozukluklari: ServiceDetail = {
  slug: 'artikulasyon-bozukluklari',
  icon: Mic,
  title: 'Artikülasyon Bozuklukları',
  shortDescription:
    'Seslerin doğru şekilde üretilememesiyle ortaya çıkan konuşma güçlükleri.',
  seoDescription:
    'Artikülasyon bozukluğu nedenleri ve terapi süreci hakkında bilgi edinin.',
  overview:
    'Artikülasyon bozukluğu, bireyin konuşma seslerini yaşına ve gelişim düzeyine uygun şekilde doğru ve anlaşılır üretememesi durumudur. Seslerin hatalı çıkarılması, değiştirilmesi veya atlanması şeklinde görülebilir ve konuşmanın anlaşılırlığını etkileyebilir. Erken dönemde hedefe yönelik başlanan terapi, yanlış ses alışkanlığını önler ve akademik süreç içinde okuma-yazma becerilerini kolaylaştırır.',
  symptoms: ['[PLACEHOLDER: belirti listesi eklenecek]'],
  whoCanBenefit:
    'Konuşma seslerini yaşına ve gelişim düzeyine uygun şekilde üretmekte güçlük yaşayan bireyler bu süreçten fayda görebilir.',
  process:
    'Terapi süreci, bireyin yaşına ve ihtiyaçlarına göre özel olarak planlanır. İlk aşamada hangi seslerde zorlanma yaşandığı detaylı şekilde değerlendirilir ve buna uygun hedefler belirlenir. Seanslarda, öncelikle seslerin doğru üretimi öğretilir; ardından bu sesler hece, kelime ve cümle içinde aşamalı olarak çalışılarak günlük konuşmaya aktarılması hedeflenir. Gerekli durumlarda ağız-dil egzersizleri ile konuşma organlarının koordinasyonu desteklenir. Düzenli takip ve iş birliği ile, konuşma seslerinin daha doğru ve anlaşılır şekilde kullanılması sağlanır.',
  faq: [
    { question: 'Kaç yaşında değerlendirme yaptırmalıyım?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
    { question: 'Evde neler yapabilirim?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
  ],
  relatedSlugs: ['gecikmis-dil-gelisimi', 'kekemelik'],
};