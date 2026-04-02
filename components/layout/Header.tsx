
// components/layout/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from './Navigation'
import { Search, Menu, X } from 'lucide-react'

interface HeaderProps {
  
}

export default function Header({}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* 1. Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-blue-700">
            HUST<span className="text-gray-900">BLOG</span>
          </span>
        </Link>

        {/* 2. Navigation Menu (Desktop) */}
        <Navigation />

        {/* 3. Search bar (Optional) & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:text-blue-600">
            <Search size={20} />
          </button>
          
          <button 
            className="md:hidden p-2 text-gray-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-4">
          <Link href="/" className="block text-base font-medium py-2">Trang chủ</Link>
          <Link href="/blog" className="block text-base font-medium py-2">Blog</Link>
          <Link href="/about" className="block text-base font-medium py-2">Giới thiệu</Link>
          <Link href="/contact" className="block text-base font-medium py-2">Liên hệ</Link>
        </div>
      )}
    </header>
  )
}