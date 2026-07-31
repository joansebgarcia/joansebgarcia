'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { LanguageSwitcher } from '@/components/language-switcher'
import { NavLink } from '@/components/nav-link'
import { SOCIAL_LINKS } from '@/lib/constants'

export function Nav() {
  const t = useTranslations()

  const navLinks = [
    { label: t('nav.projects'), href: '/projects', external: false },
    { label: t('nav.readme'), href: '/readme', external: false },
    { label: t('nav.blog'), href: '/blog', external: false },
    { label: t('nav.github'), href: SOCIAL_LINKS.GITHUB, external: true },
  ]

  return (
    <header className="h-10 border-y sm:border-t-0 flex items-stretch sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-[#e5e5e5] dark:border-[#262626] font-mono">
      <Link
        id="logo"
        href="/"
        className="relative px-6 border-r border-[#e5e5e5] dark:border-[#262626] flex items-center text-[17px] tracking-[-0.15px] font-bold text-black dark:text-white shrink-0"
      >
        Joan Garcia
      </Link>

      <nav className="flex divide-x divide-[#e5e5e5] dark:divide-[#262626] w-full overflow-x-auto overflow-y-hidden no-scrollbar">
        {navLinks.map((link) => (
          <NavLink key={link.label} href={link.href} external={link.external}>
            {link.label}
          </NavLink>
        ))}

        <DarkModeToggle />
        <LanguageSwitcher />
      </nav>
    </header>
  )
}
