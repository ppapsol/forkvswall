'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(55, 65, 81, 0.3), rgba(0, 0, 0, 0.8))'
      }}></div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 text-center lg:text-left max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
          <span className="block" style={{
            background: 'linear-gradient(to right, #E5E7EB, #9CA3AF, #6B7280)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            FORKVSWALL
          </span>
          <span className="block text-4xl md:text-5xl mt-4" style={{ color: '#9CA3AF' }}>
            ($FVW)
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
          The most determined meme energy on Solana. 
          <br />
          <span className="text-gray-400">Break through walls and stack wins.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
          <a 
            href="#tokenomics" 
            className="px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105"
            style={{
              background: 'linear-gradient(to right, #6B7280, #374151)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
            }}
          >
            See Tokenomics
          </a>
          <a 
            href="#community" 
            className="px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105"
            style={{
              background: 'transparent',
              border: '2px solid #6B7280'
            }}
          >
            Join Community
          </a>
        </div>

        <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
          <div>
            <span className="block text-2xl font-bold text-white">1B</span>
            <span>Total Supply</span>
          </div>
          <div className="w-px h-12 bg-gray-700"></div>
          <div>
            <span className="block text-2xl font-bold text-white">Presale</span>
            <span>Available</span>
          </div>
          <div className="w-px h-12 bg-gray-700"></div>
          <div>
            <span className="block text-2xl font-bold text-white">20%</span>
            <span>Burned</span>
          </div>
        </div>
      </div>

      {/* Fork Image */}
      <div className="relative z-10 flex-1 flex items-center justify-center mt-12 lg:mt-0">
        <div className="relative w-64 h-64 md:w-96 md:h-96 animate-float" style={{
          filter: 'drop-shadow(0 25px 50px rgba(255, 255, 255, 0.15))'
        }}>
          <Image 
            src="/fork-logo.png" 
            alt="Fork" 
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 256px, 384px"
          />
        </div>
      </div>
    </section>
  );
}
