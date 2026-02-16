'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="block" style={{
                  background: 'linear-gradient(135deg, #E5E7EB 0%, #9CA3AF 50%, #6B7280 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  FVSW
                </span>
                <span className="block text-white mt-2">ForkVsWall</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-xl">
                Breaking barriers, building wealth. The revolutionary memecoin on Solana.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 max-w-xl">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">1B</div>
                <div className="text-sm text-gray-500">Total Supply</div>
              </div>
              <div className="text-center border-x border-gray-800">
                <div className="text-2xl md:text-3xl font-bold text-white">20%</div>
                <div className="text-sm text-gray-500">Burned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">25%</div>
                <div className="text-sm text-gray-500">Presale</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#tokenomics" 
                className="px-8 py-4 bg-white text-black rounded-lg text-lg font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg text-center"
              >
                View Tokenomics
              </a>
              <a 
                href="#community" 
                className="px-8 py-4 bg-transparent border-2 border-gray-700 text-white rounded-lg text-lg font-bold hover:bg-gray-900 transition-all transform hover:scale-105 text-center"
              >
                Join Community
              </a>
            </div>
          </div>

          {/* Right: Logo */}
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Logo */}
              <div className="relative w-full h-full animate-float">
                <Image 
                  src="/fork-logo.png" 
                  alt="FVSW Logo" 
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
          <span className="text-sm">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
