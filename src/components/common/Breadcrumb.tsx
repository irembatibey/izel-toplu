import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from './Container';
import { SITE_URL_PLACEHOLDER } from '@/lib/constants';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Server component — plain links and text, no interactivity, so no
 * client JS. Two things this adds beyond visible navigation:
 *
 * 1. Accessibility: a landmark nav (aria-label="Breadcrumb") with a
 *    real <ol> — a screen reader announces "navigation, breadcrumb,
 *    list, 3 items," giving wayfinding context that plain visual
 *    styling alone doesn't provide.
 * 2. SEO: JSON-LD BreadcrumbList structured data, which is what
 *    lets Google show a breadcrumb trail directly in search results
 *    instead of a raw URL. Uses dangerouslySetInnerHTML deliberately
 *    — this is the standard, justified use case for it (injecting a
 *    JSON-LD <script> tag), and the content is JSON.stringify'd from
 *    typed, code-controlled data (page labels and internal hrefs),
 *    never user input, so there's no injection risk.
 *
 * URLs in the structured data use SITE_URL_PLACEHOLDER, the same
 * placeholder domain already flagged in layout.tsx's metadata —
 * this will resolve correctly once the real custom domain is set;
 * no separate action needed here when that happens.
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${SITE_URL_PLACEHOLDER}${item.href}` }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="border-b border-neutral-border bg-neutral-bg-soft">
        <Container>
          <ol className="flex flex-wrap items-center gap-2 py-4 text-caption text-neutral-text-soft">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.label} className="flex items-center gap-2">
                  {index > 0 && (
                    <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                  )}
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="transition-colors duration-250 ease-brand-ease hover:text-brand-cta-dark"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      aria-current={isLast ? 'page' : undefined}
                      className={isLast ? 'font-medium text-brand-900' : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </Container>
      </nav>
    </>
  );
}