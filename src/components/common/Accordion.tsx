
'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { FAQItem } from '@/lib/types';

interface AccordionProps {
  items: FAQItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-neutral-border border-y border-neutral-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `accordion-answer-${index}`;

        return (
          <div key={`${item.question}-${index}`}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={answerId}
              className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-brand-800"
            >
              <span className="text-body font-medium text-neutral-text">
                {item.question}
              </span>

              <Plus
                className={`h-5 w-5 flex-shrink-0 text-brand-cta transition-transform duration-200 ${
                  isOpen ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div
                id={answerId}
                className="pb-5 pr-8 text-body leading-relaxed text-neutral-text-soft"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
