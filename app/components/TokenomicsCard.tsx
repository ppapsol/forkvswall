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
      className="backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:scale-105"
      style={{ 
        background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.5))',
        borderColor: '#374151',
        animationDelay: `${delay}ms`
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6B7280'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#374151'}
    >
      <div className="text-5xl font-bold mb-4" style={{
        background: 'linear-gradient(to right, #D1D5DB, #6B7280)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        {percentage}
      </div>
      <h3 className="text-2xl font-bold mb-3" style={{ color: '#FFFFFF' }}>{title}</h3>
      <p className="leading-relaxed" style={{ color: '#9CA3AF' }}>{description}</p>
    </div>
  );
}
