import Image from 'next/image';
import { MessageCircle, Clock, Building2, Users } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';

const PORTRAIT_SRC = '/images/placeholders/portrait-placeholder.svg';

// Compact trust row under the CTAs. Two of these three are
// explicit, bracketed placeholders — her actual years of experience
// and current workplace have not been provided, and inventing
// numbers here would violate the "no fabricated statistics/claims"
// requirement. The third item is a safe, general descriptor already
// established as approved content (works with both children and
// adults), not a specific unverified claim.
//
// Polish pass: swapped GraduationCap → Clock for the experience
// placeholder — a cap reads as "education/degree", a clock reads
// as "time/experience", a closer semantic match for what this
// item will eventually say.
const HERO_TRUST_ITEMS = [
  { icon: Clock, label: '[PLACEHOLDER: X yıl deneyim]' },
  { icon: Building2, label: '[PLACEHOLDER: Kurum adı]' },
  { icon: Users, label: 'Çocuk ve yetişkin danışanlar' },
] as const;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-brand-surface via-neutral-bg to-neutral-bg"
    >
      {/* Decorative background shapes — deliberately low-opacity (reduced
          from an earlier /40 pass) so they read as ambient warmth, not
          a visual feature competing with the content. Purely visual,
          hidden from assistive tech, never intercepts clicks. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-200/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand-surface-100/70 blur-3xl"
      />

      {/*
        Polish pass — column balance: was a strict 50/50 grid with a
        wide gap, which read as text and portrait feeling like two
        unrelated blocks on a large desktop viewport. Now an
        asymmetric ratio (text column slightly wider than the
        portrait) with a tighter gap pulls them into one visually
        connected composition instead of two evenly-weighted halves.
        Vertical padding also trimmed slightly (was up to py-32) —
        contributes to fixing the oversized gap before the next
        section, addressed further in TrustIndicators.tsx.
      */}
      <Container className="relative grid gap-10 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-20 lg:gap-14 lg:py-24">
        <div className="flex flex-col gap-6 md:order-1">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-neutral-bg px-4 py-1.5 text-caption font-semibold text-brand-800">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              Dil ve Konuşma Terapisti
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 id="hero-heading" className="font-serif text-display text-brand-900">
              Çocuğunuzun ve sizin sesinizi bulmanıza yardımcı oluyorum
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-md text-body text-neutral-text-soft">
              Konuşma ve dil gelişimi konusunda kanıta dayalı, kişiye özel destek — güvenli ve
              sıcak bir ortamda.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="/iletisim" variant="primary" showArrow>
                İletişime Geç
              </Button>
              <Button href="/hizmetler" variant="ghost">
                Hizmet Alanlarını İncele
              </Button>
            </div>
          </Reveal>

          {/* Polish pass: added hairline dividers between trust items
              (border-l on all but the first) — reads as one grouped,
              considered strip of facts rather than three loose bits
              of text floating with only gap spacing between them. */}
          <Reveal delay={0.4}>
            <ul className="flex flex-wrap gap-x-0 gap-y-3 pt-4">
              {HERO_TRUST_ITEMS.map((item, index) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 border-brand-200 pl-4 pr-4 text-caption text-neutral-text-soft first:pl-0 [&:not(:first-child)]:border-l"
                >
                  <item.icon className="h-4 w-4 text-brand-cta" aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="md:order-2">
          {/* Polish pass: subtle border for definition against light
              backgrounds, and a gentle scale-on-hover (not a real
              interaction, just a quiet living quality — respects
              reduced motion via the same duration token, and the
              scale is small enough to never feel gimmicky). */}
          <div className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-brand-200/60 bg-brand-surface shadow-md md:max-w-none">
            <Image
              src={PORTRAIT_SRC}
              alt="Profesyonel portre için ayrılmış alan — yakında eklenecek"
              fill
              sizes="(min-width: 768px) 480px, 90vw"
              className="object-cover transition-transform duration-500 ease-brand-ease group-hover:scale-[1.03]"
              priority
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}