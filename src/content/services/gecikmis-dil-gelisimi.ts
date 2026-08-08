import { Sprout } from 'lucide-react';
import type { ServiceDetail } from '@/lib/types';

/**
 * Structured content for one service/condition page.
 *
 * Content policy: overview / whoCanBenefit / process restate
 * general, already-approved concepts (what the condition is in
 * plain language, that therapy is individualized and evidence-based)
 * — not claims specific to the therapist and not invented statistics.
 * Symptoms and FAQ answers are left as explicit placeholders rather
 * than generated: a specific "signs to watch for" list or FAQ
 * answers carry real clinical weight, and per instruction, content
 * that hasn't actually been approved stays a placeholder instead of
 * being filled in with plausible-sounding text.
 */
export const gecikmisDilGelisimi: ServiceDetail = {
  slug: 'gecikmis-dil-gelisimi',
  icon: Sprout,
  title: 'Gecikmiş Dil Gelişimi',
  shortDescription:
    'Çocuğunuzun yaşına göre beklenen dil becerilerinde gecikme yaşanması durumları.',
  seoDescription:
    'Gecikmiş dil gelişimi belirtileri, değerlendirme ve terapi süreci hakkında bilgi edinin.',
  overview:
    'Gecikmiş dil gelişimi, bir çocuğun yaşıtlarına kıyasla dili anlama veya kullanma becerilerinde beklenenden daha yavaş ilerlemesi durumudur. Bu durum yaygındır ve erken fark edildiğinde doğru destekle önemli ilerleme kaydedilebilir.',
  symptoms: [
    '[PLACEHOLDER: yaşa göre belirti eklenecek]',
    '[PLACEHOLDER: yaşa göre belirti eklenecek]',
    '[PLACEHOLDER: yaşa göre belirti eklenecek]',
  ],
  whoCanBenefit:
    'Dil becerilerinde yaşıtlarına göre gecikme fark edilen çocuklar ve aileleri bu süreçten fayda görebilir.',
  process:
    'Süreç, çocuğun mevcut dil becerilerinin değerlendirilmesiyle başlar; ardından kişiye özel bir terapi planı oluşturulur ve düzenli seanslarla ilerleme takip edilir.',
  faq: [
    { question: 'Kaç yaşında değerlendirme yaptırmalıyım?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
    { question: 'Evde neler yapabilirim?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
  ],
  relatedSlugs: ['artikulasyon-bozukluklari', 'kekemelik'],
};