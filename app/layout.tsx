import type { Metadata } from 'next'
import '@/styles/globals.css'


export const metadata: Metadata = {
  title: 'پنل ادمین',
  description: 'فروشگاه آنلاین فروش پسته',
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
