import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function NotFound() {
  const t = useTranslations()

  return (
    <main className="flex-1 flex flex-col items-center justify-center py-20 px-6 text-center font-mono">
      <p className="text-8xl sm:text-9xl font-medium text-black/40 dark:text-white/30 mb-4">
        404
      </p>
      <h1 className="text-2xl sm:text-3xl font-medium mb-8 text-black dark:text-white">
        {t('error.404')}
      </h1>
      <Link href="/" className="btn btn-default">
        {t('common.go_back_home')}
      </Link>
    </main>
  )
}
