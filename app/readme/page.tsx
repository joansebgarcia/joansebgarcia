"use client";

import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const badges = ["Next.js", "Tailwind CSS", "TypeScript", "i18n"];

export default function ReadmePage() {
  const t = useTranslations();

  const stack = [
    { name: "Next.js", desc: t("readme.stack_next") },
    { name: "Tailwind CSS", desc: t("readme.stack_tailwind") },
    { name: "i18n", desc: t("readme.stack_i18n") },
    { name: "Dark Mode", desc: t("readme.stack_darkmode") },
    { name: "TypeScript", desc: t("readme.stack_typescript") },
    { name: "Geist Mono", desc: t("readme.stack_font") },
  ];

  return (
    <main className="max-w-2xl mx-auto flex flex-col px-6 pt-6 sm:pt-12 pb-16 relative container font-mono">
      <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#e5e5e5] dark:border-[#262626]">
        <Icon icon="solar:document-text-linear" className="size-4 text-black/40 dark:text-white/40" />
        <span className="text-sm text-black/50 dark:text-white/50">README.md</span>
        <span className="text-3xs text-black/30 dark:text-white/30 ml-auto">{t("readme.last_updated")}</span>
      </div>

      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-black dark:text-white leading-tight">
          <span className="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none">#</span>
          {t("readme.title")}
        </h1>
        <p className="mt-3 text-sm text-black/60 dark:text-[#f0f7ff9e] leading-relaxed">
          {t("readme.description")}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {badges.map(badge => (
          <span
            key={badge}
            className="inline-flex items-center gap-1.5 text-3xs px-2.5 py-1 rounded-full border border-[#e5e5e5] dark:border-[#262626] text-black/70 dark:text-white/70 bg-black/3 dark:bg-white/5"
          >
            <span className="size-1.5 rounded-full bg-emerald-500/80" />
            {badge}
          </span>
        ))}
      </div>

      <section className="mb-8">
        <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 leading-tight">
          <span className="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none">##</span>
          {t("readme.about_title")}
        </h2>
        <div className="text-sm text-black/60 dark:text-[#f0f7ff9e] leading-relaxed space-y-2">
          <p>{t("readme.about_p1")}</p>
          <p>{t("readme.about_p2")}</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 leading-tight">
          <span className="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none">##</span>
          {t("readme.quickstart_title")}
        </h2>
        <div className="rounded-lg border border-[#e5e5e5] dark:border-[#262626] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/3 dark:bg-white/3 border-b border-[#e5e5e5] dark:border-[#262626]">
            <Icon icon="solar:programming-linear" className="size-3.5 text-black/40 dark:text-white/40" />
            <span className="text-3xs text-black/40 dark:text-white/40">terminal</span>
          </div>
          <div className="p-4 bg-black/2 dark:bg-white/2">
            <pre className="text-sm text-black/80 dark:text-white/80 leading-relaxed overflow-x-auto">
              <code>
                <span className="text-black/40 dark:text-white/30 select-none">$</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">git clone</span>{" "}
                https://github.com/joansebgarcia/joansebgarcia.git
                {"\n"}
                <span className="text-black/40 dark:text-white/30 select-none">$</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">cd</span> sebastiandotdev
                {"\n"}
                <span className="text-black/40 dark:text-white/30 select-none">$</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">pnpm</span> install
                {"\n"}
                <span className="text-black/40 dark:text-white/30 select-none">$</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">pnpm</span> dev
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 leading-tight">
          <span className="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none">##</span>
          {t("readme.stack_title")}
        </h2>
        <div className="rounded-lg border border-[#e5e5e5] dark:border-[#262626] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/3 dark:bg-white/3 border-b border-[#e5e5e5] dark:border-[#262626]">
            <Icon icon="solar:code-square-linear" className="size-3.5 text-black/40 dark:text-white/40" />
            <span className="text-3xs text-black/40 dark:text-white/40">stack.yml</span>
          </div>
          <div className="p-4 bg-black/2 dark:bg-white/2">
            <ul className="text-sm space-y-2.5">
              {stack.map(item => (
                <li key={item.name} className="flex items-start gap-2">
                  <span className="text-emerald-500/70 dark:text-emerald-400/70 select-none mt-0.5 shrink-0">-</span>
                  <div>
                    <span className="text-black dark:text-white font-medium">{item.name}</span>
                    <span className="text-black/40 dark:text-white/40 mx-1.5">—</span>
                    <span className="text-black/60 dark:text-[#f0f7ff9e]">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 leading-tight">
          <span className="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none">##</span>
          {t("readme.features_title")}
        </h2>
        <ol className="text-sm text-black/60 dark:text-[#f0f7ff9e] leading-relaxed space-y-2 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-black/40 dark:text-white/30 select-none font-medium shrink-0">1.</span>
            {t("readme.feature_1")}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-black/40 dark:text-white/30 select-none font-medium shrink-0">2.</span>
            {t("readme.feature_2")}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-black/40 dark:text-white/30 select-none font-medium shrink-0">3.</span>
            {t("readme.feature_3")}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-black/40 dark:text-white/30 select-none font-medium shrink-0">4.</span>
            {t("readme.feature_4")}
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 leading-tight">
          <span className="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none">##</span>
          {t("readme.inspirations_title")}
        </h2>
        <p className="text-sm text-black/50 dark:text-white/40 mb-4">{t("readme.inspirations_desc")}</p>
        <ul className="text-sm space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-emerald-500/70 dark:text-emerald-400/70 select-none mt-0.5 shrink-0">*</span>
            <div>
              <span className="text-black dark:text-white font-medium">Navigation Menu</span>
              <span className="text-black/40 dark:text-white/40 mx-1.5">—</span>
              <span className="text-black/60 dark:text-[#f0f7ff9e]">{t("readme.insp_nav")}</span>
              <a
                href="https://terminal.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1.5 text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                terminal.shop
              </a>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500/70 dark:text-emerald-400/70 select-none mt-0.5 shrink-0">*</span>
            <div>
              <span className="text-black dark:text-white font-medium">Projects UI</span>
              <span className="text-black/40 dark:text-white/40 mx-1.5">—</span>
              <span className="text-black/60 dark:text-[#f0f7ff9e]">{t("readme.insp_projects")}</span>
              <a
                href="https://api.github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1.5 text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                GitHub API
              </a>
              <span className="text-black/30 dark:text-white/30 mx-1">&</span>
              <a
                href="https://pheralb.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                pheralb.dev
              </a>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500/70 dark:text-emerald-400/70 select-none mt-0.5 shrink-0">*</span>
            <div>
              <span className="text-black dark:text-white font-medium">Menu Mechanics</span>
              <span className="text-black/40 dark:text-white/40 mx-1.5">—</span>
              <span className="text-black/60 dark:text-[#f0f7ff9e]">{t("readme.insp_menu")}</span>
              <a
                href="https://v0.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1.5 text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                v0.dev
              </a>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500/70 dark:text-emerald-400/70 select-none mt-0.5 shrink-0">*</span>
            <div>
              <span className="text-black dark:text-white font-medium">Portfolio Design</span>
              <span className="text-black/40 dark:text-white/40 mx-1.5">—</span>
              <span className="text-black/60 dark:text-[#f0f7ff9e]">{t("readme.insp_design")}</span>
              <a
                href="https://v0.app/templates/simple-dev-portfolio-ZWxaausPnN3?ref=8NK2LZ"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1.5 text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                v0 template
              </a>
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 leading-tight">
          <span className="text-emerald-500/70 dark:text-emerald-400/70 mr-2 select-none">##</span>
          {t("readme.license_title")}
        </h2>
        <p className="text-sm text-black/60 dark:text-[#f0f7ff9e]">{t("readme.license_text")}</p>
      </section>

      <div className="border-t border-[#e5e5e5] dark:border-[#262626] mt-6 pt-4 flex items-center justify-between">
        <span className="text-3xs text-black/30 dark:text-white/20">EOF</span>
        <a
          href="https://github.com/joansebgarcia/sebastiandotdev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xs text-black/30 dark:text-white/20 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
        >
          <Icon icon="solar:star-linear" className="size-3" />
          {t("readme.star_repo")}
        </a>
      </div>
    </main>
  );
}
