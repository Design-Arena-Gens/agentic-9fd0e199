import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ITAFCOUTURE — Brand Board',
  description: 'A luxury fashion brandboard for ITAFCOUTURE digital fashion maison',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
