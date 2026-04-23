import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "邵剑波 | 双语作品集",
    template: "%s"
  },
  description:
    "邵剑波的双语个人网站：中文主页面向 AI 产品与数据分析实习申请，英文页面面向研究与研究生申请。",
  authors: [{ name: "Adam Shao" }],
  alternates: {
    languages: {
      "zh-CN": "/",
      en: "/en"
    }
  },
  openGraph: {
    title: "邵剑波 | Adam Shao",
    description:
      "Bilingual portfolio for AI product and data analysis internships plus a graduate-school oriented academic profile.",
    type: "website",
    images: ["/images/adam-shao-portrait.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
