import type { Metadata, Viewport } from 'next';
import { Newsreader, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_URL_PLACEHOLDER } from '@/lib/constants';
import '@/styles/globals.css';

/**
 * next/font: self-hosted at build time (no runtime Google Fonts
 * request — see the performance strategy agreed earlier). Both
 * fonts include 'latin-ext', not just 'latin' — required for
 * Turkish characters (İ, ş, ğ, ç, ö, ü) to render in the actual
 * loaded font rather than silently falling back to a system font.
 *
 * Newsreader needs one extra setting: next/font tries to
 * auto-generate a metric-matched fallback font (adjustFontFallback,
 * on by default) by looking up each family in an internal
 * precomputed metrics table, and Newsreader isn't in that table —
 * a known, confirmed-harmless limitation (see Next.js issue
 * trackers for "Failed to find font override values"), not a
 * problem with our config. The font still loads and renders
 * correctly; only the automatic fallback-sizing feature is
 * unavailable for this specific family. Disabling it explicitly
 * below avoids Next repeatedly failing that lookup and warning on
 * every build. We already declared a manual fallback stack
 * ('Georgia', 'serif') in tailwind.config.ts, so layout shift is
 * still mitigated — just not with pixel-matched metrics the way
 * Inter's fallback is.
 */
const newsreader = Newsreader({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  // PLACEHOLDER — real custom domain not configured yet (deployment
  // phase). Required for OG/Twitter image URL resolution; replace
  // before deploy or social share previews will point at the wrong
  // domain.
  metadataBase: new URL(SITE_URL_PLACEHOLDER),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    // PLACEHOLDER — see public/favicon.svg. Not a finished icon set.
    icon: '/favicon.svg',
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: 'website',
    locale: 'tr_TR',
    siteName: SITE_NAME,
    images: [
      {
        // PLACEHOLDER — /public/og-image.png does not exist yet.
        // Needs a real 1200x630 image before deploy, or social
        // platforms will show a broken preview image.
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'], // PLACEHOLDER — see above
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Brand-800 (#2E4356), duplicated here deliberately: the
  // theme-color meta tag is plain HTML and cannot consume a CSS
  // custom property, so this is the one place a brand color is
  // hardcoded rather than tokenized. If the brand-800 token value
  // ever changes, this line needs updating alongside it.
  themeColor: '#2E4356',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        {/*
          Skip link: visually hidden until focused, lets keyboard
          users jump straight to main content instead of tabbing
          through the entire header/nav on every page.
        */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-brand-cta focus:px-4 focus:py-2 focus:text-neutral-bg"
        >
          İçeriğe geç
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
