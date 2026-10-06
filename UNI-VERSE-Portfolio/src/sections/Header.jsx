import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { linksData } from '../data/links';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Features', href: '#features' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'AI', href: '#ai' },
    { name: 'Team', href: '#team' },
    { name: 'Process', href: '#process' },
    { name: 'Troubleshooting', href: '#troubleshooting' },
    { name: 'Demo', href: '#demo' }
  ];

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md border-b border-gray-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center max-w-7xl">
        <a href="#" className="text-xl font-bold text-light flex items-center gap-2">
          <span className="text-primary">UNI:VERSE</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-sub hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <a href={linksData.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-light px-4 py-2 rounded-full text-sm font-medium transition-colors">
            <Code size={16} /> GitHub
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-light" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-card border-b border-gray-800 py-4 flex flex-col px-4 gap-4 shadow-xl">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-light font-medium py-2 border-b border-gray-800/50">
              {link.name}
            </a>
          ))}
          <a href={linksData.githubUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-primary text-light px-4 py-3 rounded-lg font-medium">
            <Code size={18} /> View on GitHub
          </a>
        </div>
      )}
    </header>
  );
}
