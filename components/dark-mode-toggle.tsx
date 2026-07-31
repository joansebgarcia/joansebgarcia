'use client'

import { useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'

const emptySubscribe = () => () => {}

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
}

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const t = useTranslations()
  const mounted = useMounted()

  const isDark = mounted && theme === 'dark'

  function toggle() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      className="text-black/60 dark:text-[#f0f7ff9e] h-full focus:bg-black/10 hover:bg-black/5 active:bg-black/10 dark:focus:bg-[#262626] dark:hover:bg-[#1a1a1a] dark:active:bg-[#262626] focus:outline-none px-4 flex items-center text-nowrap relative group transition-colors text-sm font-mono"
      onClick={toggle}
    >
      <div className="absolute inset-0 bg-black/5 dark:bg-white/5 -z-50 hidden group-hover:block" />
      {mounted
        ? isDark
          ? t('nav.theme_light').toLowerCase()
          : t('nav.theme_dark').toLowerCase()
        : t('nav.theme_dark').toLowerCase()}
    </button>
  )
}
