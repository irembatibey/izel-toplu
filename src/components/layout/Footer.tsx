import { Container } from '@/components/common/Container';
import { SITE_NAME } from '@/lib/constants';
import { THERAPIST_CONTACT, INSTITUTION_CONTACT } from '@/content/contact';

/**
 * Server component, fully static — no interactivity, zero client JS.
 *
 * Contact/institution values are sourced from src/content/contact.ts
 * — the single source of truth shared with the /iletisim page. Do
 * not hardcode contact details here again; update contact.ts instead.
 */
export function Footer() {
  // Static export bakes this in at build time, not per-request — it
  // will read correctly at each rebuild/deploy, but won't tick over
  // automatically on Jan 1 without a new build. Acceptable for a
  // site that rebuilds periodically; noting it so it's a documented
  // tradeoff, not a surprise.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-border bg-neutral-bg-soft">
      <Container className="grid gap-10 py-12 text-body text-neutral-text-soft md:grid-cols-4">
        <div>
          <p className="font-serif text-h3 text-brand-800">{SITE_NAME}</p>
          <p className="mt-2 max-w-xs">Dil ve Konuşma Terapisti</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium text-brand-800">İletişim</p>
          <p>{INSTITUTION_CONTACT.phone}</p>
          <p>{THERAPIST_CONTACT.email}</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium text-brand-800">Kurum &amp; Adres</p>
          <p>{INSTITUTION_CONTACT.name}</p>
          <p>{INSTITUTION_CONTACT.address}</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium text-brand-800">Sosyal Medya</p>
          <p className="italic text-caption">(bağlantılar henüz eklenmedi)</p>
        </div>
      </Container>

      <div className="border-t border-neutral-border">
        <Container className="py-6 text-caption text-neutral-text-soft">
          <p>
            © {currentYear} {SITE_NAME}. Tüm hakları saklıdır.{' '}
            <span className="italic">(Gizlilik politikası yakında eklenecek)</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}