"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  external,
  children,
}: {
  href: string;
  external: boolean;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = !external && pathname === href;

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`text-black/60 dark:text-[#f0f7ff9e] h-full focus:bg-black/10 hover:bg-black/5 active:bg-black/10 dark:focus:bg-[#262626] dark:hover:bg-[#1a1a1a] dark:active:bg-[#262626] focus:outline-none px-4 flex items-center text-nowrap relative group transition-colors text-sm ${
        isActive ? "bg-black/5 text-black! dark:bg-[#1a1a1a] dark:text-white!" : ""
      }`}
    >
      <div className="absolute inset-0 bg-black/5 dark:bg-white/5 -z-50 hidden group-hover:block" />
      {children}
    </Link>
  );
}
