'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative">
              <Image 
                src="/fork-logo.png" 
                alt="FVSW" 
                fill
                className="object-contain transition-transform group-hover:scale-110"
                sizes="40px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white">FVSW</span>
              <span className="text-xs text-gray-500 -mt-1">ForkVsWall</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#tokenomics" className="text-sm text-gray-300 hover:text-white transition-colors">
              Tokenomics
            </a>
            <a href="#roadmap" className="text-sm text-gray-300 hover:text-white transition-colors">
              Roadmap
            </a>
            <a 
              href="#community" 
              className="px-6 py-2 bg-white text-black rounded-lg text-sm font-bold hover:bg-gray-200 transition-all"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-800 pt-4">
            <a href="#about" className="block text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#tokenomics" className="block text-gray-300 hover:text-white transition-colors">
              Tokenomics
            </a>
            <a href="#roadmap" className="block text-gray-300 hover:text-white transition-colors">
              Roadmap
            </a>
            <a 
              href="#community" 
              className="block px-6 py-2 bg-white text-black rounded-lg text-sm font-bold hover:bg-gray-200 transition-all text-center"
            >
              Join Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
