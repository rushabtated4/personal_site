import { siteConfig } from '@/config/site'

export function getAbsoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const base = siteConfig.url.endsWith('/') ? siteConfig.url.slice(0, -1) : siteConfig.url
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${cleanPath}`
}


