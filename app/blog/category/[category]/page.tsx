'use client'

import Link from 'next/link'
import posts from '@/data/posts.json'

interface CategoryPageProps {
  params: { category: string }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category
  const filtered = posts.filter((p) => p.category.slug === category)

  if (filtered.length === 0) {
    return (
      <div className="container mx-auto px-4 py-10">     
        <h1 className="text-3xl font-bold">Chuyên mục không tồn tại</h1>
        <p className="mt-4">Không tìm thấy bài viết cho chuyên mục: {category}</p>
        <Link href="/blog" className="mt-4 inline-block text-blue-600">
          Quay lại tất cả bài viết
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Chuyên mục: {category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((post) => (
          <article key={post.id} className="border rounded-lg p-4 hover:shadow">
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600">
              Đọc tiếp →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
