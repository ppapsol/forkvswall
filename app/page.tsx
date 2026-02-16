'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TokenomicsCard from './components/TokenomicsCard';
import RoadmapPhase from './components/RoadmapPhase';
import GradientText from './components/GradientText';

export default function Home() {
  const tokenomics = [
    {
      title: "Burn",
      percentage: "20%",
      description: "Deflationary mechanism ensuring long-term value appreciation and scarcity."
    },
    {
      title: "Presale",
      percentage: "25%",
      description: "Early access allocation for initial supporters and community builders."
    },
    {
      title: "Liquidity",
      percentage: "20%",
      description: "Deep liquidity pools ensuring smooth trading and price stability."
    },
    {
      title: "Marketing",
      percentage: "20%",
      description: "Strategic marketing campaigns, partnerships, and brand expansion."
    },
    {
      title: "Airdrop",
      percentage: "10%",
      description: "Community rewards and strategic airdrops for ecosystem growth."
    },
    {
      title: "Team",
      percentage: "5%",
      description: "Core team allocation with vesting schedule for long-term commitment."
    }
  ];

  const roadmap = [
    {
      phase: "Q1 2026",
      title: "Foundation & Community Building",
      description: "Launch website, establish social presence, and build initial community base."
    },
    {
      phase: "Q1 2026",
      title: "Token Launch & Presale",
      description: "Fair launch with anti-dump mechanics and presale for early supporters."
    },
    {
      phase: "Q2 2026",
      title: "Marketing Campaign Launch",
      description: "Multi-channel marketing push including memes, content, and viral campaigns."
    },
    {
      phase: "Q2 2026",
      title: "Strategic Partnerships",
      description: "Collaborations with influencers, communities, and key platforms."
    },
    {
      phase: "Q3 2026",
      title: "Exchange Listings",
      description: "List on major DEXs and pursue CEX listings for increased accessibility."
    },
    {
      phase: "Q3 2026",
      title: "Ecosystem Expansion",
      description: "Launch staking, NFT collection, and additional utility features."
    },
    {
      phase: "Q4 2026",
      title: "Global Dominance",
      description: "Establish FVSW as a leading memecoin through sustained growth and innovation."
    }
  ];

  return (
    <main className="bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <GradientText>Why FVSW?</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              More than just a memecoin. FVSW represents breaking through barriers, 
              challenging the status quo, and building wealth together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Fair Launch</h3>
              <p className="text-gray-400 leading-relaxed">
                No pre-mine, no insider allocations. Everyone starts on equal footing with transparent tokenomics.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
              <p className="text-gray-400 leading-relaxed">
                Powered by a passionate community. Every decision is made together, for the collective benefit.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Secure & Audited</h3>
              <p className="text-gray-400 leading-relaxed">
                Built on Solana with security-first approach. Smart contracts audited by leading firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <GradientText>Tokenomics</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Fair distribution designed for sustainable growth and long-term value creation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tokenomics.map((item, index) => (
              <TokenomicsCard
                key={index}
                title={item.title}
                percentage={item.percentage}
                description={item.description}
                delay={index * 100}
              />
            ))}
          </div>

          {/* Total Supply Banner */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 text-center">
            <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Total Supply</div>
            <div className="text-5xl md:text-6xl font-black" style={{
              background: 'linear-gradient(135deg, #E5E7EB 0%, #9CA3AF 50%, #6B7280 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              1,000,000,000 FVSW
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <GradientText>Roadmap</GradientText>
            </h2>
            <p className="text-xl text-gray-400">
              Our strategic plan to establish FVSW as a leading memecoin.
            </p>
          </div>

          <div className="space-y-8">
            {roadmap.map((item, index) => (
              <RoadmapPhase
                key={index}
                phase={item.phase}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <GradientText>Join the Movement</GradientText>
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Be part of a community that's breaking barriers and building the future.
            <br />
            Connect with thousands of FVSW holders worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="https://www.instagram.com/forkvswall?igsh=NWtsYmpoajhwMjRy" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg text-lg font-bold hover:from-pink-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
                Instagram
              </div>
            </a>
            <a 
              href="https://t.me/forkvswall" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-lg font-bold hover:from-blue-500 hover:to-cyan-500 transition-all transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </div>
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-12">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              "Breaking barriers, one wall at a time."
            </p>
            <p className="text-lg text-gray-400">
              The FVSW Philosophy
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-xl font-black text-white">FVSW</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-500">ForkVsWall</span>
            </div>
            
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#tokenomics" className="hover:text-white transition-colors">Tokenomics</a>
              <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
              <a href="#community" className="hover:text-white transition-colors">Community</a>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-gray-600">
            <p>© 2026 FVSW. All rights reserved.</p>
            <p className="mt-2">Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may fluctuate.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
