import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { CURRENT_WORK, SOCIAL_LINKS } from '@/lib/constants'

export default function HomePage() {
  const t = useTranslations()

  return (
    <div className="font-mono h-dvh overflow-hidden flex flex-col justify-between">
      <main className="max-w-2xl mx-auto px-6 pt-0 sm:pt-25 relative container flex flex-col">
        <span className="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle size-32 ring-1 ring-[#e5e5e5] dark:ring-[#262626]">
          <Image
            src="/joan.jpg"
            loading="eager"
            alt={t('hero.title')}
            width={128}
            height={128}
            className="h-full w-full rounded-[inherit] object-cover"
          />
        </span>

        <div className="mt-6 flex flex-col gap-1.5">
          <p className="text-xs text-black/40 dark:text-white/30 select-none">
            ~/
          </p>
          <h1 className="text-2xl font-bold text-black dark:text-white leading-tight">
            {t('hero.title')}
          </h1>
          <div className="text-sm text-black/60 dark:text-[#f0f7ff9e] leading-relaxed space-y-0.5 mt-1">
            <p>{t('hero.subtitle')}</p>
            <p>{t('hero.subtitle2')}</p>
          </div>
        </div>

        <div className="mt-6 mb-10 flex items-center gap-2 text-sm">
          <span className="text-black/40 dark:text-white/30">
            {t('hero.current_work')}
          </span>
          <span className="text-black/20 dark:text-white/15 select-none">
            →
          </span>
          <a
            href={CURRENT_WORK.LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white font-medium hover:underline underline-offset-4 inline-flex items-center gap-1 group"
          >
            {CURRENT_WORK.NAME}
            <Icon
              icon="solar:arrow-right-up-linear"
              className="size-3 text-black/40 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors"
            />
          </a>
        </div>

        <a
          href={SOCIAL_LINKS.GMAIL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-default"
        >
          <Icon icon="solar:letter-linear" className="size-4" />
          {t('hero.cta')}
        </a>
      </main>
      <div className="justify-end">
        <Footer />
      </div>
    </div>
  )
}
