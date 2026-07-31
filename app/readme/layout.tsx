import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'README.md — joansebgarcia',
}

export default function ReadmeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
