/**
 * Shared content/domain types.
 *
 * Phase 1 scope: the shapes we already agreed on during content
 * strategy, so MDX frontmatter has a type contract to target in a
 * later phase. Not wired to any parsing logic yet — see mdx.ts.
 */

export interface ServiceFrontmatter {
  slug: string;
  title: string;
  shortDescription: string;
  seoDescription: string;
  icon: string; // maps to a lucide-react icon name
  relatedSlugs?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
