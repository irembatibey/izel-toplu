import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllServiceDetailSlugs, getServiceDetailBySlug } from '@/content/services';
import { ServiceDetailTemplate } from '@/components/services/ServiceDetailTemplate';

interface ServiceDetailPageProps {
  params: { slug: string };
}

/**
 * Static export requires every dynamic route's params known at
 * build time — this is what makes generateStaticParams mandatory
 * here, not optional. Currently returns one slug (the only service
 * with full detail content); the other four summary-only slugs from
 * content/services/index.ts simply don't get a generated page yet,
 * matching the already-disclosed pattern from the homepage cards.
 */
export function generateStaticParams() {
  return getAllServiceDetailSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const service = getServiceDetailBySlug(params.slug);
  if (!service) {
    return {};
  }
  return {
    title: service.title,
    description: service.seoDescription,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceDetailBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailTemplate service={service} />;
}