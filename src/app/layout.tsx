```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hesaplama Araçları | Ücretsiz Online Hesaplayıcılar",
    template: "%s | Hesaplama Araçları",
  },
  description:
    "Yüzde, faiz, kredi, maaş, tarih, yakıt ve daha birçok hesaplamayı ücretsiz ve kolayca yapın.",
  keywords: [
    "hesaplama",
    "hesaplama araçları",
    "online hesaplama",
    "ücretsiz hesaplama",
    "hesap makinesi",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```
