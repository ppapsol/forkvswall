'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <Image 
              src="/fork-logo.png" 
              alt="ForkVsWall" 
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight" style={{ 
            background: 'linear-gradient(to right, #E5E7EB, #9CA3AF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            FORKVSWALL
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a 
            href="#about" 
            className="text-sm hover:text-gray-300 transition-colors hidden md:block"
          >
            About
          </a>
          <a 
            href="#tokenomics" 
            className="text-sm hover:text-gray-300 transition-colors hidden md:block"
          >
            Tokenomics
          </a>
          <a 
            href="#roadmap" 
            className="text-sm hover:text-gray-300 transition-colors hidden md:block"
          >
            Roadmap
          </a>
          <a 
            href="#community" 
            className="px-6 py-2 rounded-full text-sm font-semibold transition-all"
            style={{
              background: 'linear-gradient(to right, #6B7280, #374151)'
            }}
          >
            Join Community
          </a>
        </div>
      </div>
    </nav>
  );
}
