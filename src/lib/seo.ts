import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { getAbsoluteUrl } from '@/lib/url'

export function buildBaseMetadata(): Metadata {
  return {
    title: siteConfig.name,
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    icons: {
      icon: '/favicon.ico?v=1',
      apple: '/apple-touch-icon.png?v=1',
      shortcut: '/favicon-16x16.png?v=1',
    },
    manifest: '/manifest.webmanifest',
    openGraph: {
      type: 'website',
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [getAbsoluteUrl(siteConfig.images.og)],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [getAbsoluteUrl(siteConfig.images.og)],
      creator: siteConfig.social.xHandle,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function buildPostMetadata(post: { slug: string; title: string; description?: string; date?: string; category?: string }): Metadata {
  const url = getAbsoluteUrl(`/writing/${post.slug}`)
  const description = post.description || post.title
  const ogUrl = `/api/og?slug=${post.slug}&title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category || '')}&date=${encodeURIComponent(post.date || '')}`

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description,
    openGraph: {
      type: 'article',
      title: post.title,
      description,
      url,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: siteConfig.name,
      publishedTime: post.date,
      authors: [siteConfig.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      creator: siteConfig.social.xHandle,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}


