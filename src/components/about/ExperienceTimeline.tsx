import { clsx } from 'clsx';
import type { ExperienceEntry } from '@/lib/types';

const FLOAT_DELAY_CLASSES = [
  '[animation-delay:0s]',
  '[animation-delay:0.6s]',
  '[animation-delay:1.2s]',
  '[animation-delay:1.8s]',
  '[animation-delay:2.4s]',
];

interface ExperienceTimelineProps {
  items: ExperienceEntry[];
}

const CATEGORY_ORDER: ExperienceEntry['category'][] = [
  'Stajlar',
  'Çalışma Hayatı',
];

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="space-y-16">
      {CATEGORY_ORDER.map((category) => {
        const categoryItems = items.filter((item) => item.category === category);

        if (categoryItems.length === 0) return null;

        return (
          <section key={category} aria-labelledby={`experience-${category}`}>
            <h3
              id={`experience-${category}`}
              className="mb-8 text-caption font-semibold uppercase tracking-[0.12em] text-brand-cta-dark"
            >
              {category}
            </h3>

            <ol className="relative space-y-10 border-l border-brand-200/70 pl-8 md:space-y-12 md:pl-10">
              {categoryItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li
                    key={`${category}-${item.institution}`}
                    tabIndex={0}
                    className="group relative rounded-md pl-6 focus:outline-none"
                  >
                    <span
                      className={clsx(
                        'absolute -left-[1.125rem] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-surface ring-4 ring-neutral-bg transition-shadow duration-320 ease-brand-ease group-hover:shadow-md group-focus:shadow-md',
                        'motion-safe:animate-gentle-float motion-safe:group-hover:[animation-play-state:paused] motion-safe:group-focus:[animation-play-state:paused]',
                        FLOAT_DELAY_CLASSES[index % FLOAT_DELAY_CLASSES.length]
                      )}
                    >
                      <Icon
                        className="h-5 w-5 text-brand-cta"
                        aria-hidden="true"
                      />
                    </span>

                    <div className="pt-1">
                      {item.current && (
                        <span className="mb-2 inline-flex items-center rounded-full bg-brand-surface px-2.5 py-0.5 text-caption font-semibold text-brand-cta-dark">
                          Güncel
                        </span>
                      )}

                      <h4 className="text-h3 font-semibold text-brand-900 transition-colors duration-250 ease-brand-ease group-hover:text-brand-cta-dark group-focus:text-brand-cta-dark">
                        {item.institution}
                      </h4>

                      <p className="mt-1 text-caption font-medium text-neutral-text-soft">
                        {item.location}
                      </p>

                      <p className="mt-3 text-body text-neutral-text-soft">
                        {item.summary}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}