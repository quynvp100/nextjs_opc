# Pacific Port - Website Cảng Biển

Website chuyên nghiệp cho dịch vụ đóng tàu, sửa chữa tàu thuyền và cảng biển được xây dựng với Next.js 16 và Tailwind CSS.

## ✨ Tính năng chính

- 🚢 **Responsive Design**: Tối ưu cho mọi thiết bị
- 💬 **Real-time Chatbot**: Hỗ trợ khách hàng 24/7 với khả năng kết nối nhân viên
- 🔍 **SEO Tối ưu**: Metadata, sitemap, robots.txt được cấu hình đầy đủ
- 🎨 **UI/UX Hiện đại**: Animations mượt mà với Framer Motion
- 📱 **Social Integration**: Tích hợp chia sẻ mạng xã hội
- ⚡ **Performance**: Build trên Next.js 16 với Turbopack

## 🛠️ Công nghệ sử dụng

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Heroicons
- **Real-time**: Socket.IO
- **Notifications**: React Hot Toast
- **State Management**: Zustand
- **Font**: Inter với hỗ trợ tiếng Việt

## 📦 Cài đặt và Chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Start production server
npm start
```

Website sẽ chạy tại: http://localhost:3000

## 📁 Cấu trúc project

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout với SEO metadata
│   ├── page.tsx           # Trang chủ
│   ├── contact/           # Trang liên hệ
│   ├── sitemap.ts         # Auto-generated sitemap
│   └── robots.ts          # SEO robots configuration
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Header với navigation
│   │   ├── Footer.tsx    # Footer với links
│   │   └── Layout.tsx    # Main layout wrapper
│   ├── chatbot/          # Chatbot system
│   │   └── ChatBot.tsx   # AI chatbot với staff connection
│   └── ui/               # UI components
└── lib/                  # Utilities
    └── socket.ts         # Socket.IO configuration
```

## 💬 Chatbot Features

- **AI Responses**: Tự động trả lời câu hỏi phổ biến về dịch vụ
- **Staff Connection**: Kết nối với nhân viên tư vấn real-time
- **Smart Keywords**: Nhận diện từ khóa dịch vụ tự động
- **Responsive UI**: Giao diện đẹp trên mọi thiết bị

## 🔍 SEO Tối ưu

- ✅ Title tags với template động
- ✅ Meta descriptions tối ưu
- ✅ Keywords targeting cho ngành hàng hải
- ✅ Open Graph cho social sharing
- ✅ Twitter Cards
- ✅ Sitemap.xml tự động
- ✅ Robots.txt chuẩn SEO

## 🎨 Thiết kế

- **Màu chính**: Blue gradient (blue-600 to blue-900)
- **Typography**: Inter font với hỗ trợ tiếng Việt
- **Animations**: Framer Motion cho transitions mượt mà
- **Mobile-first**: Responsive design hoàn chỉnh

## 📱 Features chính

1. **Hero Section**: Slogan "YOU DREAM, WE BUILD" với CTA buttons
2. **Services Grid**: 4 dịch vụ chính với icons và features
3. **Why Choose Us**: Thống kê và lợi thế cạnh tranh
4. **Contact Form**: Form liên hệ với validation
5. **Real-time Chat**: Chatbot AI + staff connection
6. **Social Integration**: Share buttons và social links

## 🚀 Deployment

### Vercel (Khuyên dùng):
```bash
vercel --prod
```

### Docker:
```bash
docker build -t port-website .
docker run -p 3000:3000 port-website
```

## 📞 Hỗ trợ

- **Hotline**: +84 123 456 789
- **Email**: info@pacificport.vn
- **Địa chỉ**: 123 Đường Cảng, Q.1, TP.HCM

---

**Phát triển bởi Pacific Port - Maritime Excellence** 🚢
