
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

const serviceSlugs = [
  'artikulasyon-bozukluklari',
  'gecikmis-konusma-bozuklugu',
  'kekemelik',
  'motor-konusma-bozukluklari',
  'norolojik-dil-bozuklugu',
  'otizm-spektrum-bozuklugu',
  'ses-bozukluklari',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/hakkimda/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/hizmetler/`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/iletisim/`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/deneyim-paylas/`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/gizlilik/`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/hizmetler/${slug}/`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...mainPages, ...servicePages];
}
