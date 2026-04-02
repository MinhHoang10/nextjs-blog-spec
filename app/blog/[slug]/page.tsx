// app/blog/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from '@/lib/api'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import PostContent from '@/components/blog/PostContent'
import CommentForm from '@/components/forms/CommentForm'

interface PostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for SSG
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
        <div className="mb-6 flex items-center gap-4 text-sm text-gray-500">
          <span>Tác giả: <strong>{post.author.name}</strong></span>
          <span>•</span>
          <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
          <span>•</span>
          <span>{post.readingTime} phút đọc</span>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority 
          />
        </div>
      </header>

      <PostContent content={post.content} />

      <section className="mt-12 border-t pt-10">
        <h2 className="mb-6 text-2xl font-bold">Bình luận</h2>
        <CommentForm postId={post.id} />
        {/* Comments list logic can be added here */}
      </section>
    </article>
  )
}

export const revalidate = 3600 // Revalidate every 1 hour