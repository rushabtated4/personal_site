import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { PostHogProvider } from '@/components/PostHogProvider'
import './globals.css'
import { Metadata } from 'next'
import { buildBaseMetadata } from '@/lib/seo'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = buildBaseMetadata()

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`}>
      <body className="text-gray-900">
        <PostHogProvider>
          <Header />
          <main>
            {children}
          </main>
        </PostHogProvider>
      </body>
    </html>
  )
}
