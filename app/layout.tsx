import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Adam Shao | 邵剑波",
  description:
    "Personal brand portfolio for Adam Shao, an undergraduate student focused on data-driven research and Large Language Models.",
  authors: [{ name: "Adam Shao" }],
  openGraph: {
    title: "Adam Shao | 邵剑波",
    description:
      "Building at the intersection of research, data, and Large Language Models.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
