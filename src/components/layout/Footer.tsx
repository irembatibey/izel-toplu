import { Container } from '@/components/common/Container';
import { SITE_NAME } from '@/lib/constants';

/**
 * Server component, fully static — no interactivity, zero client JS.
 *
 * Content policy for this phase: every field below is either (a)
 * already-approved real content, or (b) a clearly bracketed
 * [PLACEHOLDER: ...] string. Nothing here is an invented address,
 * phone number, institution name, or social handle — see the Phase 3
 * engineering report for the exact list of what needs replacing.
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
          <p>[PLACEHOLDER: telefon numarası]</p>
          <p>[PLACEHOLDER: e-posta adresi]</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium text-brand-800">Kurum &amp; Adres</p>
          <p>[PLACEHOLDER: görev yapılan kurum adı]</p>
          <p>[PLACEHOLDER: adres bilgisi]</p>
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
