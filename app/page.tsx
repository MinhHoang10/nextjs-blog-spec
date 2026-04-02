'use client';

import Image from 'next/image';
import Link from 'next/link';
import posts from '@/data/posts.json';

export default function Home() {
  // Get 4 featured posts (newest ones)
  const featured = posts.slice(0, 4);
  // Get latest 3 posts  
  const latest = posts.slice(0, 3);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                Nơi chia sẻ Kiến thức & Trải nghiệm của tôi.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Chào mừng bạn đến với Blog Giáo dục & Kiến thức. Tại đây, chúng tôi chia sẻ những bài giảng, tài liệu học tập và kinh nghiệm thực tế trong lĩnh vực công nghệ và giáo dục.
              </p>
              <div className="flex gap-4">
                <Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                  Khám phá ngay
                </Link>
                <Link href="/about" className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50">
                  Tìm hiểu thêm
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="https://picsum.photos/500/400?random=1" 
                alt="Hero"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Bài viết nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-700 font-medium">
                    Đọc tiếp →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Bài viết mới nhất</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              Xem tất cả bài viết →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latest.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-700 font-medium">
                    Đọc tiếp →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Bạn thích những nội dung này?</h2>
          <p className="text-lg mb-8">
            Đăng ký nhận thông báo mỗi khi có bài viết mới. Tôi cam kết không spam.
          </p>
          <form className="flex gap-3">
            <input 
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-medium">
              Đăng ký
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

