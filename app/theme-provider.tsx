'use client'

import { ThemeProvider } from 'next-themes'

export function ThemeClientProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      storageKey="seb-color-mode"
    >
      {children}
    </ThemeProvider>
  )
}
