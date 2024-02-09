import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import LoadingScreen from '@/components/LoadingScreen';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

const proggy = localFont({
  src: './fonts/proggycleantt.ttf',
  display: 'swap',
  variable: '--font-proggy',
});

export const viewport: Viewport = {
  themeColor: 'black',
};

export const metadata: Metadata = {
  title: {
    template: '%s | Software Developer',
    default: 'David Onifade',
  },
  description:
    'Experienced software developer with 3+ years of expertise in standard web application development. Adept problem solver, dedicated to open-source contributions.',
  generator: 'David Onifade',
  applicationName: 'David Onifade | Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Porfolio', 'React', 'Nextjs'],
  authors: [{ name: 'David', url: 'https://davidfola.vercel.app' }],
  creator: 'David Onifade',
  publisher: 'David (Zyzer)',
  metadataBase: new URL('https://davidfola.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  category: 'technology',
  openGraph: {
    title: 'David Onifade | Software Developer',
    description:
      'Experienced software developer with 3+ years of expertise in standard web application development. Adept problem solver, dedicated to open-source contributions.',
    url: 'https://davidfola.vercel.app',
    siteName: 'David Onifade',
    images: 'https://davidfola.vercel.app/opengraph-image.jpeg',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon/icon.png',
    shortcut: '/favicon/shortcut-icon.png',
    apple: '/favicon/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon/apple-icon.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Onifade | Software Developer',
    description:
      'Experienced software developer with 3+ years of expertise in standard web application development. Adept problem solver, dedicated to open-source contributions.',
    siteId: '1467726470533754880',
    creator: '@zyzer01',
    creatorId: '1199097267287928838',
    images: ['https://davidfola.vercel.app/opengraph-image.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${proggy.variable}`}>
        <LoadingScreen>
          <div>
            {children}
            <div className="flex proggy justify-center">
              <p className="text-shade">
                Designed by{' '}
                <span className="text-gray-300">
                  {' '}
                  <Link href="https://behance.net/olubummokolawole" target="_blank">
                    Kolawole Olubummo
                  </Link>{' '}
                </span>
              </p>
            </div>
          </div>
        </LoadingScreen>
      </body>
    </html>
  );
}
