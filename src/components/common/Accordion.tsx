'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { clsx } from 'clsx';
import type { FAQItem } from '@/lib/types';

interface AccordionProps {
  items: FAQItem[];
}

/**
 * Client component — genuinely needs interaction (open/close state).
 * Height animation uses the CSS grid-rows trick (0fr/1fr) rather
 * than measuring scrollHeight in JS — no layout thrash, no extra
 * effect, and it automatically respects prefers-reduced-motion via
 * the same global transition-duration override from Phase 2 (no
 * component-level reduced-motion branching needed here, unlike
 * Reveal, which uses Framer Motion's JS-driven animation instead of
 * a CSS transition).
 */
export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-border rounded-md border border-neutral-border bg-neutral-bg">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-body font-semibold text-brand-900 transition-colors duration-250 ease-brand-ease hover:text-brand-cta-dark"
              >
                {item.question}
                <Plus
                  className={clsx(
                    'h-5 w-5 flex-shrink-0 text-brand-cta transition-transform duration-280 ease-brand-ease',
                    isOpen && 'rotate-45'
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={clsx(
                'grid transition-all duration-320 ease-brand-ease',
                isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden px-6">
                <p className="text-body text-neutral-text-soft">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}