import { Users } from 'lucide-react';
import type { ServiceDetail } from '@/lib/types';

/**
 * Structured content for Otizm Spektrum Bozukluğu.
 *
 * New service added per instruction — sourced entirely from the
 * "Çalışma Alanları" reference document (OTİZM SPEKTRUM BOZUKLUĞU
 * section). Icon: Users, chosen for the condition's emphasis on
 * social interaction/communication rather than a puzzle-piece style
 * icon, which carries contested associations in the autism
 * community and was deliberately avoided.
 */
export const otizmSpektrumBozuklugu: ServiceDetail = {
  slug: 'otizm-spektrum-bozuklugu',
  icon: Users,
  title: 'Otizm Spektrum Bozukluğu',
  shortDescription:
    'Çocuğun iletişim, sosyal etkileşim ve davranış alanlarında farklılıklar yaşadığı gelişimsel durumlar.',
  seoDescription:
    'Otizm spektrum bozukluğu belirtileri, değerlendirme ve terapi süreci hakkında bilgi edinin.',
  overview:
    'Otizm spektrum bozukluğu, çocuğun iletişim kurma, sosyal etkileşim ve davranış alanlarında farklılıklar yaşadığı nörogelişimsel bir durumdur. Her çocuk kendine özgüdür; bu nedenle otizm belirtileri her çocukta aynı şekilde görülmez. Bazı çocuklar konuşmada gecikme yaşarken, bazıları iletişim kurmakta ya da sosyal ortamlara uyum sağlamakta zorlanabilir. Bu durum bir "eksiklik" değil, farklı bir gelişim şeklidir.',
  symptoms: [
    'İsmi söylendiğinde her zaman tepki vermemesi',
    'Göz teması kurmakta zorlanması',
    'Konuşmada gecikme ya da konuşmanın hiç başlamaması',
    'İsteklerini ifade etmek yerine işaret etme veya yetişkinin elini yönlendirme',
    'Akranlarıyla oyun kurmakta zorlanma veya yalnız oynamayı tercih etme',
    'Aynı hareketleri tekrar etme (el çırpma, sallanma vb.)',
    'Rutinlere aşırı bağlılık ve değişikliklere zor uyum sağlama',
    'Bazı ses, ışık veya dokulara karşı aşırı hassasiyet',
  ],
  whoCanBenefit:
    'İletişim, sosyal etkileşim veya davranış alanlarında farklılık gösteren çocuklar ve aileleri bu süreçten fayda görebilir.',
  process:
    'Terapi süreci, her çocuğun ihtiyaçlarına göre bireysel olarak planlanır. İlk aşamada çocuğun iletişim, sosyal etkileşim ve oyun becerileri detaylı şekilde değerlendirilir; bu değerlendirme sonucunda çocuğa özel hedefler belirlenir ve buna uygun bir terapi programı oluşturulur. Seanslarda; iletişim kurma, göz teması, ortak dikkat, oyun becerileri ve dil gelişimi gibi alanlar desteklenir. Çocuğun ilgisini çeken materyaller ve oyunlar kullanılarak öğrenme süreci daha doğal ve keyifli hale getirilir. Ailelerin sürece aktif katılımı da oldukça önemlidir.',
  faq: [
    { question: 'Değerlendirme süreci nasıl başlıyor?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
    { question: 'Ailelere seans dışında nasıl destek veriliyor?', answer: '[PLACEHOLDER: yanıt eklenecek]' },
  ],
  relatedSlugs: ['gecikmis-konusma-bozuklugu', 'artikulasyon-bozukluklari'],
};