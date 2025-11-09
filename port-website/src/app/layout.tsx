import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pacificport.vn'),
  title: {
    default: "Pacific Port - Đóng Tàu và Dịch Vụ Cảng Biển",
    template: "%s | Pacific Port"
  },
  description: "Pacific Port - Đối tác tin cậy trong lĩnh vực đóng tàu, sửa chữa tàu thuyền và dịch vụ cảng biển tại Việt Nam. Chuyên nghiệp, chất lượng cao, công nghệ hiện đại.",
  keywords: [
    "đóng tàu",
    "sửa chữa tàu",
    "dịch vụ cảng",
    "logistics",
    "hàng hải",
    "tàu thuyền",
    "cảng biển",
    "Pacific Port",
    "Việt Nam",
    "shipbuilding",
    "port services"
  ],
  authors: [{ name: "Pacific Port" }],
  creator: "Pacific Port",
  publisher: "Pacific Port",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://pacificport.vn",
    siteName: "Pacific Port",
    title: "Pacific Port - Đóng Tàu và Dịch Vụ Cảng Biển",
    description: "Đối tác tin cậy trong lĩnh vực đóng tàu, sửa chữa tàu thuyền và dịch vụ cảng biển tại Việt Nam",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pacific Port - Dịch vụ đóng tàu và cảng biển",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacific Port - Đóng Tàu và Dịch Vụ Cảng Biển",
    description: "Đối tác tin cậy trong lĩnh vực đóng tàu, sửa chữa tàu thuyền và dịch vụ cảng biển tại Việt Nam",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://pacificport.vn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              style: {
                background: '#059669',
              },
            },
            error: {
              style: {
                background: '#dc2626',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
