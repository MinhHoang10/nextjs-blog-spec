# Blog Next.js - Dự Án Blog Hiện Đại

Đây là một dự án blog được xây dựng bằng Next.js 16, sử dụng App Router và TypeScript để tạo ra một trang blog hiện đại, responsive với các tính năng đầy đủ.

Link Deploy : https://blog-nextjs-pdwho338m-hoangr271-4925s-projects.vercel.app/

Tài liệu báo cáo: https://docs.google.com/document/d/1IB0Ctwb_ovAYnUYLzukI0UaWvHc2n_nZ10J51gA6v3w/edit?tab=t.0

## ✨ Tính Năng

- 🏠 **Trang chủ** với phần hero, bài viết nổi bật và newsletter
- 📝 **Trang blog** với danh sách bài viết, tìm kiếm và lọc theo danh mục
- 📄 **Trang bài viết chi tiết** với định tuyến động
- 📞 **Trang liên hệ** với form liên hệ có validation
- ℹ️ **Trang giới thiệu** với thông tin về tác giả
- 🔍 **Tìm kiếm và lọc** bài viết theo danh mục
- 📱 **Responsive design** hoàn toàn trên mọi thiết bị
- ⚡ **Static Site Generation (SSG)** cho hiệu suất tối ưu
- 🎨 **Tailwind CSS** cho styling hiện đại
- 📧 **Form validation** với React Hook Form và Zod
- 🔧 **TypeScript** cho type safety

## 🚀 Công Nghệ Sử Dụng

- **Next.js 16** - Framework React với App Router
- **React 19** - Thư viện UI
- **TypeScript** - Type safety
- **Tailwind CSS v4** - CSS framework
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **clsx & tailwind-merge** - Utility functions

## 📁 Cấu Trúc Dự Án

```
blog-nextjs/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Route groups
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── blog/             # Blog components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── data/                 # Static data
├── lib/                  # Utilities
├── public/               # Static assets
└── types/                # TypeScript types
```

## 🛠️ Cài Đặt và Chạy

### Yêu cầu hệ thống
- Node.js 18+
- npm hoặc yarn hoặc pnpm

### Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

### Chạy development server
```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt để xem kết quả.

### Build cho production
```bash
npm run build
# hoặc
yarn build
# hoặc
pnpm build
```

### Chạy production build
```bash
npm start
# hoặc
yarn start
# hoặc
pnpm start
```


### Tùy chỉnh styling
- Chỉnh sửa `app/globals.css` cho global styles
- Sử dụng Tailwind classes trong components
- Tùy chỉnh theme trong `tailwind.config.ts`

### API Routes
- `GET /api/posts` - Lấy danh sách bài viết
- `POST /api/contact` - Gửi form liên hệ

## 🚀 Triển Khai

### Vercel (Khuyến nghị)
1. Đẩy code lên GitHub
2. Kết nối repository với [Vercel](https://vercel.com)
3. Vercel sẽ tự động detect Next.js và deploy

### Các nền tảng khác
Dự án tương thích với bất kỳ nền tảng hosting nào hỗ trợ Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📚 Tài Liệu Tham Khảo

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## 🤝 Đóng Góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 Giấy Phép

Dự án này sử dụng giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 👨‍💻 Tác Giả

**Nguyễn Huy Hoàng** 



---
