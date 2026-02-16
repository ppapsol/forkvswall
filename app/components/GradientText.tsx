'use client';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export default function GradientText({ 
  children, 
  className = '', 
  from = '#E5E7EB', 
  to = '#6B7280' 
}: GradientTextProps) {
  return (
    <span 
      className={className}
      style={{
        background: `linear-gradient(to right, ${from}, ${to})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}
    >
      {children}
    </span>
  );
}
