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
  title: "ForkVsWall ($FVW) - Break Through Every Wall",
  description: "The most determined meme energy on Solana. Break through walls and stack wins. $FVW - A story about persistence.",
  metadataBase: new URL('https://forkvswall.xyz'),
  keywords: ['ForkVsWall', 'FVW', 'memecoin', 'Solana', 'crypto', 'meme', 'fork', 'wall'],
  openGraph: {
    title: "ForkVsWall ($FVW) - Break Through Every Wall",
    description: "The most determined meme energy on Solana. Break through walls and stack wins.",
    url: 'https://forkvswall.xyz',
    siteName: 'ForkVsWall',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ForkVsWall ($FVW)",
    description: "The most determined meme energy on Solana. Break through walls and stack wins.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
