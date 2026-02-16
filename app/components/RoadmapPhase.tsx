'use client';

interface RoadmapPhaseProps {
  phase: string;
  title: string;
  description: string;
  index: number;
}

export default function RoadmapPhase({ phase, title, description, index }: RoadmapPhaseProps) {
  return (
    <div className="relative flex items-start gap-6 group">
      {/* Phase Number Circle */}
      <div 
        className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black transition-all duration-300 group-hover:scale-110 relative z-10"
        style={{
          background: 'linear-gradient(135deg, #E5E7EB 0%, #9CA3AF 50%, #6B7280 100%)',
          color: '#000000',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
        }}
      >
        {index + 1}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 group-hover:border-gray-600 transition-all duration-300">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">{phase}</div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
      
      {/* Connecting Line */}
      {index < 6 && (
        <div 
          className="absolute left-8 top-20 w-0.5 h-full"
          style={{
            background: 'linear-gradient(to bottom, #4B5563, transparent)'
          }}
        ></div>
      )}
    </div>
  );
}
