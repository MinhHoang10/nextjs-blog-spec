// components/blog/SearchBar.tsx
'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'

export default function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Lấy giá trị search từ URL nếu có
  const [query, setQuery] = useState(searchParams.get('q') || '')

  // Debounce input: Đợi người dùng dừng gõ 300ms mới update URL
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query) {
        router.push(`/blog?q=${query}`)
      } else {
        router.push('/blog')
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query, router])

  // Clear button
  const handleClear = () => {
    setQuery('')
  }

  return (
    <div className="relative max-w-md w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tìm kiếm bài viết..."
        className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />

      {query && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </div>
  )
}