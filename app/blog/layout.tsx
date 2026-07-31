import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations()
  return { title: t('blog.seo_title') }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
