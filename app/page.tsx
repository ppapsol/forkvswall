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
      description: "Deflationary mechanism to keep things spicy and valuable."
    },
    {
      title: "Presale",
      percentage: "25%",
      description: "Early believers get to join the breakthrough."
    },
    {
      title: "Liquidity",
      percentage: "20%",
      description: "Smooth trades and steady momentum."
    },
    {
      title: "Marketing",
      percentage: "20%",
      description: "Memes, collabs and loud promotions."
    },
    {
      title: "Airdrop",
      percentage: "10%",
      description: "Surprise drops for the real believers."
    },
    {
      title: "Team",
      percentage: "5%",
      description: "Long-term builders and operations."
    }
  ];

  const roadmap = [
    {
      phase: "Phase 1",
      title: "Reunite & grow the community",
      description: "Bring everyone together and welcome new fork warriors."
    },
    {
      phase: "Phase 2",
      title: "Coin launch with dump preventions",
      description: "Smart launch mechanics to keep the momentum healthy."
    },
    {
      phase: "Phase 3",
      title: "Flood the Internet with memes",
      description: "Daily memes, contests and community creations."
    },
    {
      phase: "Phase 4",
      title: "Raid Reddit and X",
      description: "Coordinated raids and organic reach on key platforms."
    },
    {
      phase: "Phase 5",
      title: "Get listed on Phantom and several DEX's",
      description: "Wallet integrations and multiple decentralized listings."
    },
    {
      phase: "Phase 6",
      title: "Pay influencers and memepages for shoutouts",
      description: "Strategic collabs to amplify the breakthrough."
    },
    {
      phase: "Phase 7",
      title: "Make ForkVsWall the new biggest memecoin",
      description: "Relentless community energy to break through the charts."
    }
  ];

  return (
    <main className="bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <GradientText>The Story</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A fork trapped in a drawer. Surrounded by spoons. 
              <br />
              One day, it woke up angry and decided to break through every wall.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="backdrop-blur-sm border rounded-2xl p-8 text-center transition-all"
              style={{
                background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.3), rgba(17, 24, 39, 0.3))',
                borderColor: '#374151'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6B7280'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#374151'}
            >
              <div className="text-6xl mb-4">🍴</div>
              <h3 className="text-2xl font-bold mb-3">The Fork</h3>
              <p style={{ color: '#9CA3AF' }}>Determined. Sharp. Ready to pierce through anything.</p>
            </div>

            <div 
              className="backdrop-blur-sm border rounded-2xl p-8 text-center transition-all"
              style={{
                background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.3), rgba(17, 24, 39, 0.3))',
                borderColor: '#374151'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6B7280'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#374151'}
            >
              <div className="text-6xl mb-4">🧱</div>
              <h3 className="text-2xl font-bold mb-3">The Wall</h3>
              <p style={{ color: '#9CA3AF' }}>Solid. Unmoving. But not unbreakable.</p>
            </div>

            <div 
              className="backdrop-blur-sm border rounded-2xl p-8 text-center transition-all"
              style={{
                background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.3), rgba(17, 24, 39, 0.3))',
                borderColor: '#374151'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6B7280'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#374151'}
            >
              <div className="text-6xl mb-4">💥</div>
              <h3 className="text-2xl font-bold mb-3">The Battle</h3>
              <p style={{ color: '#9CA3AF' }}>Every wall will fall. Every barrier will break.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <GradientText>Tokenomics</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Fair vibes, sustainable growth. Here's how $FVW is distributed.
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
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <GradientText>Roadmap</GradientText>
            </h2>
            <p className="text-xl text-gray-400">
              The path to breaking through every wall.
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
      <section id="community" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <GradientText>Join the Movement</GradientText>
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            The wall doesn't negotiate. Neither should you.
            <br />
            Join the community and break through together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="https://www.instagram.com/forkvswall?igsh=NWtsYmpoajhwMjRy" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105"
              style={{
                background: 'linear-gradient(to right, #DB2777, #7C3AED)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
              }}
            >
              Follow on Instagram
            </a>
            <a 
              href="https://t.me/forkvswall" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105"
              style={{
                background: 'linear-gradient(to right, #0891B2, #1E40AF)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
              }}
            >
              Join Telegram
            </a>
          </div>

          <div 
            className="backdrop-blur-sm border rounded-2xl p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.5))',
              borderColor: '#374151'
            }}
          >
            <p className="text-3xl md:text-4xl font-bold mb-4">
              "I'm going through you."
            </p>
            <p className="text-xl" style={{ color: '#9CA3AF' }}>
              - The Fork, with zero plan but infinite determination
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">
                <GradientText>FORKVSWALL</GradientText>
              </span>
            </div>
            
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#tokenomics" className="hover:text-white transition-colors">Tokenomics</a>
              <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
              <a href="#community" className="hover:text-white transition-colors">Community</a>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>© 2026 ForkVsWall. A story about persistence and breaking through walls.</p>
            <p className="mt-2">$FVW is a meme coin with no intrinsic value or expectation of financial return.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
