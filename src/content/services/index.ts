import { Sprout, Mic, Repeat, Brain, Volume2 } from 'lucide-react';
import type { ServiceSummary, ServiceDetail } from '@/lib/types';
import { gecikmisDilGelisimi } from './gecikmis-dil-gelisimi';
import { artikulasyonBozukluklari } from './artikulasyon-bozukluklari';
import { kekemelik } from './kekemelik';
import { afazi } from './afazi';
import { sesBozukluklari } from './ses-bozukluklari';

/**
 * Single source of truth for the five therapy areas' summary data —
 * used by both the homepage's Therapy Areas preview and the full
 * Services Index page.
 *
 * Location note: this lives in content/services/ (not lib/) because
 * it's the registry/index for this content type — matches the
 * project convention that content/ holds this site's actual data,
 * lib/ holds generic utilities. Moved here from lib/services.ts on
 * request; import path is now '@/content/services' everywhere.
 */
export const SERVICE_SUMMARIES: ServiceSummary[] = [
  {
    slug: 'gecikmis-dil-gelisimi',
    icon: Sprout,
    title: 'Gecikmiş Dil Gelişimi',
    shortDescription: 'Çocuğunuzun yaşına göre beklenen dil becerilerinde gecikme yaşanması durumları.',
  },
  {
    slug: 'artikulasyon-bozukluklari',
    icon: Mic,
    title: 'Artikülasyon Bozuklukları',
    shortDescription: 'Seslerin doğru şekilde üretilememesiyle ortaya çıkan konuşma güçlükleri.',
  },
  {
    slug: 'kekemelik',
    icon: Repeat,
    title: 'Kekemelik',
    shortDescription: 'Konuşma akıcılığını etkileyen tekrar, uzatma veya duraksama şeklindeki güçlükler.',
  },
  {
    slug: 'afazi',
    icon: Brain,
    title: 'Afazi',
    shortDescription: 'Beyin hasarı sonrası dil anlama veya ifade etmede yaşanan güçlükler.',
  },
  {
    slug: 'ses-bozukluklari',
    icon: Volume2,
    title: 'Ses Bozuklukları',
    shortDescription: 'Ses tonu, perdesi veya kalitesinde yaşanan değişiklikler.',
  },
];

// Phase 7: all five services now have full detail content. Adding a
// new service page in the future still means adding its ServiceDetail
// object under content/services/ and registering it here;
// SERVICE_SUMMARIES stays independent so index/homepage cards never
// depend on detail content existing.
const SERVICE_DETAILS: ServiceDetail[] = [
  gecikmisDilGelisimi,
  artikulasyonBozukluklari,
  kekemelik,
  afazi,
  sesBozukluklari,
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