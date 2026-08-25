import { Sprout, Mic, Repeat, Brain, Volume2, Users, Activity } from 'lucide-react';
import type { ServiceSummary, ServiceDetail } from '@/lib/types';
import { gecikmisKonusmaBozuklugu } from './gecikmis-konusma-bozuklugu';
import { artikulasyonBozukluklari } from './artikulasyon-bozukluklari';
import { kekemelik } from './kekemelik';
import { norolojikDilBozuklugu } from './norolojik-dil-bozuklugu';
import { sesBozukluklari } from './ses-bozukluklari';
import { otizmSpektrumBozuklugu } from './otizm-spektrum-bozuklugu';
import { motorKonusmaBozukluklari } from './motor-konusma-bozukluklari';

/**
 * Single source of truth for all seven therapy areas' summary data —
 * used by both the homepage's Therapy Areas preview and the full
 * Services Index page.
 *
 * Phase 7 correction: titles/slugs for two entries were renamed to
 * restore the exact terminology used in the source "Çalışma
 * Alanları" reference document ("Gecikmiş Dil Gelişimi" →
 * "Gecikmiş Konuşma Bozukluğu"; "Afazi" → "Nörolojik Dil
 * Bozukluğu"), and two services present in that source but missing
 * from the site (Otizm Spektrum Bozukluğu, Motor Konuşma
 * Bozuklukları) were added. Icons were reviewed for all seven
 * entries for semantic fit — see individual comments below.
 *
 * Location note: this lives in content/services/ (not lib/) because
 * it's the registry/index for this content type — matches the
 * project convention that content/ holds this site's actual data,
 * lib/ holds generic utilities.
 */
export const SERVICE_SUMMARIES: ServiceSummary[] = [
  {
    slug: 'gecikmis-konusma-bozuklugu',
    // Sprout: early growth/development metaphor, fits a childhood
    // developmental-delay condition.
    icon: Sprout,
    title: 'Gecikmiş Konuşma Bozukluğu',
    shortDescription: 'Çocuğun yaşıtlarına göre konuşma becerilerinde gecikme yaşanması durumları.',
  },
  {
    slug: 'artikulasyon-bozukluklari',
    // Mic: speech-sound production, the core of this condition.
    icon: Mic,
    title: 'Artikülasyon Bozuklukları',
    shortDescription: 'Seslerin doğru şekilde üretilememesiyle ortaya çıkan konuşma güçlükleri.',
  },
  {
    slug: 'kekemelik',
    // Repeat: directly mirrors the repetition/blocking pattern of
    // stuttering.
    icon: Repeat,
    title: 'Kekemelik',
    shortDescription: 'Konuşma akıcılığını etkileyen tekrar, uzatma veya duraksama şeklindeki güçlükler.',
  },
  {
    slug: 'norolojik-dil-bozuklugu',
    // Brain: the condition is explicitly brain/neurologically based.
    icon: Brain,
    title: 'Nörolojik Dil Bozukluğu',
    shortDescription: 'Beyin kaynaklı nedenlerle dili anlama, ifade etme, okuma veya yazmada yaşanan güçlükler.',
  },
  {
    slug: 'ses-bozukluklari',
    // Volume2: voice/volume — directly represents vocal quality.
    icon: Volume2,
    title: 'Ses Bozuklukları',
    shortDescription: 'Ses tonu, perdesi veya kalitesinde yaşanan değişiklikler.',
  },
  {
    slug: 'otizm-spektrum-bozuklugu',
    // Users: social interaction/communication emphasis. Deliberately
    // not a puzzle-piece icon, which carries contested associations
    // within the autism community.
    icon: Users,
    title: 'Otizm Spektrum Bozukluğu',
    shortDescription: 'Çocuğun iletişim, sosyal etkileşim ve davranış alanlarında farklılıklar yaşadığı gelişimsel durumlar.',
  },
  {
    slug: 'motor-konusma-bozukluklari',
    // Activity: represents the motor/muscle-coordination aspect,
    // distinct from Mic/Volume2 (sound and voice production).
    icon: Activity,
    title: 'Motor Konuşma Bozuklukları',
    shortDescription: 'Konuşma kaslarının koordineli çalışamamasından kaynaklanan konuşma güçlükleri.',
  },
];

// All seven services now have full detail content. Adding a new
// service page in the future still means adding its ServiceDetail
// object under content/services/ and registering it here;
// SERVICE_SUMMARIES stays independent so index/homepage cards never
// depend on detail content existing.
const SERVICE_DETAILS: ServiceDetail[] = [
  gecikmisKonusmaBozuklugu,
  artikulasyonBozukluklari,
  kekemelik,
  norolojikDilBozuklugu,
  sesBozukluklari,
  otizmSpektrumBozuklugu,
  motorKonusmaBozukluklari,
];

export function getServiceSummaries(): ServiceSummary[] {
  return SERVICE_SUMMARIES;
}

export function getServiceDetailBySlug(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((service) => service.slug === slug);
}

export function getAllServiceDetailSlugs(): string[] {
  return SERVICE_DETAILS.map((service) => service.slug);
}