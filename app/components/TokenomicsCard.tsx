'use client';

interface TokenomicsCardProps {
  title: string;
  percentage: string;
  description: string;
  delay?: number;
}

export default function TokenomicsCard({ title, percentage, description, delay = 0 }: TokenomicsCardProps) {
  return (
    <div 
      className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700/0 to-gray-600/0 group-hover:from-gray-700/10 group-hover:to-gray-600/10 transition-all duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="text-5xl md:text-6xl font-black mb-4" style={{
          background: 'linear-gradient(135deg, #E5E7EB 0%, #9CA3AF 50%, #6B7280 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {percentage}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-700/20 to-transparent rounded-bl-full"></div>
    </div>
  );
}
