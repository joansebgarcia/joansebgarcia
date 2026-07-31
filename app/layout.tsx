import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { Nav } from '@/components/nav'
import { ThemeClientProvider } from './theme-provider'
import './globals.css'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations()

  return {
    metadataBase: new URL('https://joangarcia.dev'),
    title: {
      template: `%s | ${t('seo.home.title')}`,
      default: t('seo.home.title'),
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        {
          url: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          url: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },
    manifest: '/manifest.json',
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <ThemeClientProvider>
            <Nav />

            <div
              className="fixed inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle, currentColor 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />

            <div className="flex-1 overflow-y-auto flex flex-col">
              {children}
            </div>
          </ThemeClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
