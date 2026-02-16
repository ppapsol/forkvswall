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
  title: "FVSW - ForkVsWall | Breaking Barriers on Solana",
  description: "FVSW is a revolutionary memecoin on Solana. Join the movement breaking through every barrier. Fair launch, community-driven, deflationary tokenomics.",
  metadataBase: new URL('https://forkvswall.xyz'),
  keywords: ['FVSW', 'ForkVsWall', 'memecoin', 'Solana', 'crypto', 'DeFi', 'token', 'presale'],
  icons: {
    icon: '/fork-logo.png',
    apple: '/fork-logo.png',
  },
  openGraph: {
    title: "FVSW - ForkVsWall | Breaking Barriers on Solana",
    description: "Revolutionary memecoin on Solana. Fair launch, community-driven, deflationary tokenomics.",
    url: 'https://forkvswall.xyz',
    siteName: 'FVSW - ForkVsWall',
    locale: 'en_US',
    type: 'website',
    images: ['/fork-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FVSW - ForkVsWall",
    description: "Revolutionary memecoin on Solana. Join the movement.",
    images: ['/fork-logo.png'],
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
