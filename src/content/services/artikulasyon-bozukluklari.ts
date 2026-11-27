
import { Mic } from 'lucide-react';
import type { ServiceDetail } from '@/lib/types';

/**
 * Structured content for Artikülasyon Bozuklukları.
 */
export const artikulasyonBozukluklari: ServiceDetail = {
  slug: 'artikulasyon-bozukluklari',
  icon: Mic,
  title: 'Artikülasyon Bozuklukları',
  shortDescription:
    'Seslerin doğru şekilde üretilememesiyle ortaya çıkan konuşma güçlükleri.',

  seoDescription:
    'Artikülasyon bozukluğu belirtileri, nedenleri ve terapi süreci hakkında bilgi edinin.',

  overview:
    'Artikülasyon bozukluğu, bireyin konuşma seslerini yaşına ve gelişim düzeyine uygun şekilde doğru ve anlaşılır üretememesi durumudur. Seslerin hatalı çıkarılması, değiştirilmesi veya atlanması şeklinde görülebilir ve konuşmanın anlaşılırlığını etkileyebilir. Erken dönemde hedefe yönelik başlanan terapi, yanlış ses alışkanlığını önler ve akademik süreç içinde okuma-yazma becerilerini kolaylaştırır.',

  symptoms: [],

  symptomContent: {
    intro:
      'Artikülasyon bozukluğu; konuşma seslerinin dil, dudak, diş veya çene koordinasyonundaki farklılıklar nedeniyle beklenenden farklı üretilmesiyle ortaya çıkar. Belirtiler yaşa ve sesin günlük konuşmaya yerleşmiş olma düzeyine göre farklı şekillerde kendini gösterir.',

    sections: [
      {
        title: 'Çocuklarda Görülebilecek Belirtiler',
        items: [
          'Seslerin yerine başka seslerin geçmesi: Çocuğun üretmekte zorlandığı sesin yerine daha kolay çıkan bir ses kullanmasıdır (örneğin /k/ yerine /t/, /s/ yerine /t/ veya /ş/ üretilmesi).',

          'Kelime içi ve sonu seslerin atlanması: Bazı seslerin kelimeden düşürülmesidir (örneğin "araba" yerine "arba" veya "balık" yerine "balı" söylenmesi).',

          'Seslerin çarpıtılarak (bozularak) çıkması: Sesin başka bir sese dönüşmeden, hışıltılı, boğuk veya olağandan farklı bir tınıyla duyulmasıdır; özellikle sürtünmeli seslerde dikkat çeker.',

          'Anlaşılmamak ve tekrar zorunda kalmak: Aile dışındaki kişilerin veya akranların çocuğu ilk seferde anlamakta zorlanması, çocuğun sık sık tekrarlamak durumunda kalmasıdır.',

          'Konuşma isteğinde azalma veya hayal kırıklığı: Anlaşılamadığını fark eden çocukta öfkelenme, sessizleşme veya kelimeleri kısa kesme gibi tepkiler görülebilir.',
        ],
      },
      {
        title: 'Yetişkinlerde Görülebilecek Belirtiler',
        items: [
          'Belirli seslerin kalıcı olarak farklı üretilmesi: Çocukluktan bu yana yerleşmiş ya da sonradan gelişen nedenlerle belirli seslerin (özellikle /r/, /s/, /ş/ gibi seslerin) konuşmada tutarlı biçimde farklı çıkmasıdır.',

          'Uzun veya karmaşık kelimelerde bozulma: Günlük sohbetin bir kısmında idare edilebilen seslerin; sunum, hızlı konuşma veya çok heceli kelimelerde belirginleşmesidir.',

          'Kelime değiştirme ve kaçınma davranışları: Zorlanılan sesi içeren kelimeler yerine eş anlamlısını seçme, konuşma sırasını kısa tutma veya kalabalık/resmi ortamlarda söz almaktan çekinmedir.',

          'Konuşma sırasında gerginlik veya yorgunluk: Doğru sesi çıkarmaya çalışırken çene, dil veya dudaklarda kasılma hissetme ya da konuşma sonrası yorgunluk yaşamadır.',

          'Mesleki veya sosyal iletişimde özgüven kaybı: Sesli okuma, toplantı, telefon görüşmesi veya sunum gibi durumlarda konuşmanın anlaşılırlığı ya da estetiği nedeniyle kaygı duymadır.',
        ],
      },
    ],

    note:
      'Her sesin gelişimsel olarak kazanılma yaşı aynı değildir; bazı ses hataları yaşla birlikte kendiliğinden düzelebilirken bazıları erken dönemde değerlendirme ve destek gerektirir.',
  },

  whoCanBenefit:
    'Konuşma seslerini yaşına ve gelişim düzeyine uygun şekilde üretmekte güçlük yaşayan bireyler bu süreçten fayda görebilir.',

  process:
    'Terapi süreci, bireyin yaşına ve ihtiyaçlarına göre özel olarak planlanır. İlk aşamada hangi seslerde zorlanma yaşandığı detaylı şekilde değerlendirilir ve buna uygun hedefler belirlenir. Seanslarda, öncelikle seslerin doğru üretimi öğretilir; ardından bu sesler hece, kelime ve cümle içinde aşamalı olarak çalışılarak günlük konuşmaya aktarılması hedeflenir. Gerekli durumlarda ağız-dil egzersizleri ile konuşma organlarının koordinasyonu desteklenir. Düzenli takip ve iş birliği ile, konuşma seslerinin daha doğru ve anlaşılır şekilde kullanılması sağlanır.',

  faq: [
    {
      question: 'Artikülasyon bozukluğu kendiliğinden geçer mi?',
      answer:
        'Bazı ses hataları çocuğun gelişim süreci içinde yaşla birlikte azalabilir; ancak kalıcı yer değiştirmeler, ses düşürmeler, belirgin çarpıtmalar veya ilerleyen yaşlarda devam eden üretim farklılıkları çoğu zaman değerlendirme ve hedefe yönelik terapi gerektirir.',
    },
    {
      question:
        'Çocuğumu ne zaman bir dil ve konuşma terapistine göstermeliyim?',
      answer:
        'Çocuğunuzun konuşması ailesi dışındaki kişilerce sık sık anlaşılmıyorsa, ses hataları nedeniyle konuşmaktan çekiniyor veya öfkeleniyorsa ya da yaşına göre beklenen ses edinimlerinde gecikme fark ediyorsanız beklemeden görüş alabilirsiniz.',
    },
    {
      question: 'Yetişkinlik döneminde artikülasyon terapisi işe yarar mı?',
      answer:
        'Evet. Yetişkinlerde de düzenli, yapılandırılmış ve kişiye özel planlanan terapi süreçleriyle belirli seslerin üretimi, konuşma anlaşılırlığı ve iletişimdeki özgüven üzerinde anlamlı ilerleme sağlanabilir.',
    },
    {
      question: 'Değerlendirme ve terapi süreci nasıl ilerler?',
      answer:
        'İlk aşamada ayrıntılı öykü alma ve artikülasyon/konuşma sesi değerlendirmesi yapılır. Elde edilen bulgulara göre terapiye gerek olup olmadığı belirlenir; gerekiyorsa bireyin yaşına, ses hedeflerine ve günlük yaşam ihtiyaçlarına uygun plan oluşturulur.',
    },
  ],

  relatedSlugs: [
    'gecikmis-konusma-bozuklugu',
    'motor-konusma-bozukluklari',
  ],
};
