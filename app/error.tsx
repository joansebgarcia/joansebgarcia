"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  const t = useTranslations();
  const router = useRouter();

  return (
    <main className="flex-1 flex flex-col items-center justify-center py-20 px-6 text-center font-mono">
      <h1 className="text-2xl sm:text-3xl font-medium mb-4 text-black dark:text-white">
        {t("error.default")}
      </h1>

      {error.message && (
        <p className="text-black/60 dark:text-[#f0f7ff9e] text-base max-w-md mb-8">
          {error.message}
        </p>
      )}

      <button type="button" onClick={() => router.push("/")} className="btn btn-default">
        {t("common.go_back_home")}
      </button>
    </main>
  );
}
