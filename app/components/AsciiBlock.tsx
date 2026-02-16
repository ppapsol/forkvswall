'use client';

interface AsciiBlockProps {
  art: string;
  className?: string;
  scrollable?: boolean;
}

export default function AsciiBlock({ art, className = '', scrollable = false }: AsciiBlockProps) {
  return (
    <div className={`my-12 ${scrollable ? 'overflow-x-auto' : ''}`}>
      <pre className={`font-mono text-xs md:text-sm lg:text-base text-gray-300 ${className}`}>
        {art}
      </pre>
    </div>
  );
}
