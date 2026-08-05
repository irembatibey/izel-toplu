/**
 * Site-wide constants.
 *
 * Real values only where already provided/approved. Anything not
 * yet finalized is a clearly marked placeholder, not an invented
 * stand-in — see PLACEHOLDER comments below and the Phase 3
 * engineering report for the full list.
 */

export const SITE_NAME = 'İzel Toplu';
export const SITE_TITLE = 'İzel Toplu | Dil ve Konuşma Terapisti';

// Reflects the approved information architecture — İzel Toplu is
// a Dil ve Konuşma Terapisti serving children and adults.
export const SITE_DESCRIPTION =
  'Dil ve konuşma terapisti İzel Toplu — çocuklarda ve yetişkinlerde dil, konuşma ve iletişim güçlükleri için terapi desteği.';

// PLACEHOLDER — the real custom domain has not been configured yet
// (confirmed: to be set up in the deployment phase). This value is
// required by Next's metadata API to resolve relative OG/Twitter
// image URLs; it MUST be replaced with the real domain before
// deployment, or social share previews will silently break.
export const SITE_URL_PLACEHOLDER = 'https://example.com';

export const NAV_LINKS = [
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/sss', label: 'SSS' },
  { href: '/iletisim', label: 'İletişim' },
] as const;

// Public, non-secret Formspree form ID. See .env.example — real
// value is supplied via NEXT_PUBLIC_FORMSPREE_ENDPOINT before deploy.
export const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? '';
