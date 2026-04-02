// components/layout/Navigation.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils' // Import từ utils để tái sử dụng

const navItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Giới thiệu', href: '/about' },
  { label: 'Liên hệ', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => {
        // Kiểm tra xem route có đang active không
        // Logic: Khớp hoàn toàn với '/' hoặc bắt đầu bằng href (cho các trang con của blog)
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-blue-600 relative py-1",
              isActive 
                ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-blue-600" 
                : "text-gray-600"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}