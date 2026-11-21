
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllServiceDetailSlugs,
  getServiceDetailBySlug,
} from '@/content/services';
import { ServiceDetailTemplate } from '@/components/services/ServiceDetailTemplate';

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Static export requires every dynamic route's params known at
 * build time.
 */
export function generateStaticParams() {
  return getAllServiceDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceDetailBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.seoDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;

  const service = getServiceDetailBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailTemplate service={service} />;
}
