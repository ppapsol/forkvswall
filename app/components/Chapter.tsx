'use client';

import { useEffect, useRef, useState } from 'react';

interface ChapterProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Chapter({ id, title, subtitle, children, className = '' }: ChapterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const chapterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (chapterRef.current) {
      observer.observe(chapterRef.current);
    }

    return () => {
      if (chapterRef.current) {
        observer.unobserve(chapterRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={chapterRef}
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {title && (
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-200">
          {title}
        </h2>
      )}
      
      {subtitle && (
        <h3 className="text-2xl md:text-4xl font-light mb-12 text-gray-400">
          {subtitle}
        </h3>
      )}
      
      <div className="max-w-4xl w-full">
        {children}
      </div>
    </section>
  );
}
