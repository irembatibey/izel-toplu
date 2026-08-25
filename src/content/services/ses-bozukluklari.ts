import { Volume2 } from 'lucide-react';
import type { ServiceDetail } from '@/lib/types';

/**
 * Structured content for Ses Bozuklukları.
 *
 * Sourced from the provided "Çalışma Alanları" reference document
 * (SES BOZUKLUĞU section). Symptoms are taken directly from that
 * section's "Belirtiler" list.
 */
export const sesBozukluklari: ServiceDetail = {
  slug: 'ses-bozukluklari',
  icon: Volume2,
  title: 'Ses Bozuklukları',
  shortDescription:
    'Ses tonu, perdesi veya kalitesinde yaşanan değişiklikler.',
  seoDescription:
    'Ses bozukluğu belirtileri, değerlendirme ve terapi süreci hakkında bilgi edinin.',
  overview:
    'Ses bozukluğu, kişinin sesinin kalitesinde, yüksekliğinde veya kullanımında farklılıklar olması durumudur. Ses kısık, çatallı, nefesli ya da yorgun çıkabilir; konuşurken zorlanma veya boğazda rahatsızlık hissi eşlik edebilir. Bu durum hem çocuklarda hem de yetişkinlerde görülebilir ve genellikle sesin yanlış ya da yoğun kullanımı, enfeksiyonlar veya bazı fizyolojik etkenlerle ilişkili olabilir.',
  symptoms: [
    'Sesin kısık, çatallı veya boğuk çıkması',
    'Konuşurken çabuk yorulma veya sesin çabuk tükenmesi',
    'Ses açmakta zorlanma veya sesin sürekli değişken olması',
    'Boğazda ağrı, yanma ya da takılma hissi',
    'Uzun süre konuşunca sesin belirgin şekilde kötüleşmesi',
    'Sık sık boğaz temizleme ihtiyacı',
  ],
  whoCanBenefit:
    'Ses kalitesinde, perdesinde veya kullanımında değişiklik yaşayan çocuklar ve yetişkinler bu süreçten fayda görebilir.',
  process:
    'Terapi süreci, kişinin ses kullanım alışkanlıklarına ve ihtiyaçlarına göre bireysel olarak planlanır. İlk aşamada detaylı bir değerlendirme yapılır ve sesin nasıl kullanıldığı analiz edilir; gerekli durumlarda kulak burun boğaz hekimi ile iş birliği sağlanır. Seanslarda; doğru nefes kullanımı, ses hijyeni ve sağlıklı ses üretimi üzerine çalışmalar yapılır. Kişiye günlük yaşamda uygulayabileceği pratik öneriler sunulur.',
  faq: [
    { question: 'Ses bozukluğu için önce hangi uzmana başvurmalıyım?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
    { question: 'Terapi süreci ne kadar sürer?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
  ],
  relatedSlugs: ['norolojik-dil-bozuklugu', 'kekemelik'],
};