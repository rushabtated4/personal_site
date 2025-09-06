import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { getPostBySlug } from '@/lib/mdx'
import { formatDate } from '@/lib/formatDate'
import { MDXContent } from '@/components/MDXContent'
import { Metadata } from 'next'
import { buildPostMetadata } from '@/lib/seo'
import { siteConfig } from '@/config/site'
import { getAbsoluteUrl } from '@/lib/url'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: `Post Not Found | ${siteConfig.name}`,
      description: 'The requested post could not be found.',
    }
  }

  return buildPostMetadata({ slug, title: post.title, description: post.description, date: post.date, category: post.category })
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1084px] px-4 sm:px-6 pt-6 sm:pt-[54px]">
        {/* Navigation and Date */}
        <div className="w-full pb-8 sm:pb-[96px]">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <Link 
              href="/" 
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600"
            >
              <ChevronLeft className="h-4 w-4" />
              Writing
            </Link>
            <time className="text-sm text-gray-400">
              {formatDate(post.date)}
            </time>
          </div>
        </div>

        {/* Article Content */}
        <article className="mx-auto w-full max-w-2xl pb-16 sm:pb-32">
          {/* Category */}
          <div className="mb-1 text-sm text-gray-400">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="mb-3 text-[28px] font-semibold tracking-[-0.02em] text-gray-900">
            {post.title}
          </h1>

          {/* Author and Share */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={siteConfig.images.avatar}
                alt={siteConfig.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm text-gray-600">by {siteConfig.name}</span>
            </div>
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `Just finished reading — ${post.title} by ${siteConfig.social.xHandle}\n\n${getAbsoluteUrl(`/writing/${slug}`)}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1 text-sm text-gray-400 hover:border-gray-400 hover:text-gray-600"
            >
              <Image 
                src="/x.svg" 
                alt="Share on X (Twitter)" 
                width={14} 
                height={14}
                className="opacity-60 group-hover:opacity-100"
              />
              Share
            </a>
          </div>

          {/* Divider */}
          <div className="mb-8 h-px w-full bg-gray-200" />

          {/* Content */}
          <div>
            <MDXContent content={post.content} />
          </div>
        </article>
      </div>
    </div>
  )
} 