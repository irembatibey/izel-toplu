
import type { Metadata, Viewport } from 'next';
import { Newsreader, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
} from '@/lib/constants';
import '@/styles/globals.css';

/**
 * Fonts are self-hosted at build time.
 * latin-ext is included for Turkish characters.
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
  metadataBase: new URL(SITE_URL),

  applicationName: SITE_NAME,

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  authors: [
    {
      name: 'İzel Toplu',
      url: SITE_URL,
    },
  ],

  creator: 'İzel Toplu',
  publisher: 'İzel Toplu',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/favicon-16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        url: '/favicon-96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    locale: 'tr_TR',
    siteName: SITE_NAME,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dil ve Konuşma Terapisti İzel Toplu',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2E4356',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${newsreader.variable} ${inter.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans">
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
