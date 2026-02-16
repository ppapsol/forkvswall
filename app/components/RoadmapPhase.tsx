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
        className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-transform duration-300 group-hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #9CA3AF, #4B5563)',
          color: '#000000',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
        }}
      >
        {index + 1}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="text-sm uppercase tracking-wider mb-2" style={{ color: '#6B7280' }}>{phase}</div>
        <h3 className="text-2xl font-bold mb-3" style={{ color: '#FFFFFF' }}>{title}</h3>
        <p className="leading-relaxed" style={{ color: '#9CA3AF' }}>{description}</p>
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
