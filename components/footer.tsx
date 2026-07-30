"use client";

import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const t = useTranslations();

  const columns = [
    {
      heading: t("footer.col_pages"),
      links: [
        { label: t("nav.projects"), href: "/projects", external: false },
        { label: t("nav.readme"), href: "/readme", external: false },
        { label: t("nav.blog"), href: "/blog", external: false },
      ],
    },
    {
      heading: t("footer.col_connect"),
      links: [
        { label: t("footer.link_github"), href: SOCIAL_LINKS.GITHUB, external: true },
        { label: t("footer.link_linkedin"), href: SOCIAL_LINKS.LINKEDIN, external: true },
        { label: t("footer.link_gmail"), href: SOCIAL_LINKS.GMAIL, external: true },
      ],
    },
    {
      heading: t("footer.col_built_with"),
      links: [
        { label: "Next.js", href: "https://nextjs.org", external: true },
        { label: "Tailwind CSS", href: "https://tailwindcss.com", external: true },
        { label: "TypeScript", href: "https://www.typescriptlang.org", external: true },
      ],
    },
  ];

  return (
    <footer className="shrink-0 w-full font-mono border-t border-[#e5e5e5] dark:border-[#262626]">
      <div className="px-6 py-8 flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between">
        <Link
          href="/"
          className="text-sm font-bold text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-colors tracking-tight"
        >
          {t("footer.logo")}
        </Link>

        <div className="flex flex-wrap gap-8 sm:gap-12">
          {columns.map(col => (
            <div key={col.heading} className="flex flex-col gap-2.5">
              <span className="text-3xs font-semibold tracking-widest uppercase text-black/40 dark:text-white/30 mb-1">
                {col.heading}
              </span>
              {col.links.map(link =>
                !link.external ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xs text-black/60 dark:text-[#f0f7ff9e] hover:text-black dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-black/60 dark:text-[#f0f7ff9e] hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <Icon
                      icon="solar:arrow-right-up-linear"
                      className="size-2.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-3 border-t border-[#e5e5e5] dark:border-[#262626]">
        <p className="text-3xs text-black/30 dark:text-white/20">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
