"use client";

import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";

export interface Repo {
  name: string;
  url: string;
  description: string;
  stars: number;
  topics: string[];
  language: string | null;
}

export function ProjectsList({ repos }: { repos: Repo[] }) {
  const t = useTranslations();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRepos = useMemo(() => {
    if (!searchQuery) return repos;

    const query = searchQuery.toLowerCase();
    return repos.filter(
      repo =>
        repo.name.toLowerCase().includes(query) ||
        repo.description?.toLowerCase().includes(query) ||
        repo.topics.some(topic => topic.toLowerCase().includes(query)) ||
        repo.language?.toLowerCase().includes(query),
    );
  }, [repos, searchQuery]);

  return (
    <>
      <div className="relative mb-6">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40">
          <Icon icon="solar:magnifer-linear" className="size-4" />
        </div>
        <input
          id="search-repos"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          type="text"
          placeholder={t("projects.search_placeholder")}
          className="w-full bg-transparent border border-[#e5e5e5] dark:border-[#262626] rounded-lg py-2.5 pl-10 pr-4 text-sm text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-black/60 dark:text-[#f0f7ff9e] text-sm flex items-center gap-1.5">
          <Icon icon="solar:programming-bold" className="size-4" />
          {t("projects.repo_count", { count: filteredRepos.length })}
        </span>
        <a
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/60 dark:text-[#f0f7ff9e] text-sm flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"
        >
          {t("projects.view_on_github")}
          <Icon icon="solar:arrow-right-up-linear" className="size-3.5" />
        </a>
      </div>

      <div className="flex flex-col gap-3 pb-12">
        {filteredRepos.map(repo => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[#e5e5e5] dark:border-[#262626] rounded-lg p-4 hover:border-black/30 dark:hover:border-white/20 transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <h2 className="text-sm font-bold text-black dark:text-white">{repo.name}</h2>
                <Icon
                  icon="solar:arrow-right-up-linear"
                  className="size-3.5 text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors"
                />
              </div>
              {repo.stars > 0 && (
                <span className="text-black/60 dark:text-[#f0f7ff9e] text-sm flex items-center gap-1">
                  <Icon icon="solar:star-linear" className="size-3.5" />
                  {repo.stars}
                </span>
              )}
            </div>

            {repo.description && (
              <p className="text-black/60 dark:text-[#f0f7ff9e] text-sm mb-3">
                {repo.description}
              </p>
            )}

            <div className="flex items-center flex-wrap gap-1.5">
              {repo.language && (
                <span className="text-3xs px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70">
                  {repo.language}
                </span>
              )}
              {repo.topics.map(topic => (
                <span
                  key={topic}
                  className="text-3xs px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70"
                >
                  {topic}
                </span>
              ))}
            </div>
          </a>
        ))}

        {filteredRepos.length === 0 && (
          <div className="text-center py-12 text-black/40 dark:text-white/40 text-sm">
            {t("projects.no_results")}
          </div>
        )}
      </div>
    </>
  );
}
