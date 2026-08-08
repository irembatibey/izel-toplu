import type { LucideIcon } from 'lucide-react';

/**
 * Shared content/domain types.
 *
 * Replaces the Phase 1 placeholder ServiceFrontmatter shape (never
 * used by any real code) with the actual shapes Phase 5 needs. Split
 * into a lightweight Summary (used for cards — homepage Therapy
 * Areas preview and the Services Index) and a full Detail (used by
 * the Service Detail Template) so listing pages don't need full
 * detail content to exist for a service to appear in a card grid.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSummary {
  slug: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
}

export interface ServiceDetail extends ServiceSummary {
  seoDescription: string;
  overview: string;
  symptoms: string[];
  whoCanBenefit: string;
  process: string;
  faq: FAQItem[];
  relatedSlugs?: string[];
}