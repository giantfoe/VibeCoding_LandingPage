import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <img
            src="/VBCODELOGO.svg"
            alt="Vibecoding Logo"
            className="w-36 h-36"
          />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              How It Works
            </a>
            <a href="https://www.hyperlinkinfosystem.com/article/vibe-coding-strategic-roadmap-to-becoming-an-ai-developer" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Roadmap
            </a>
            <a href="#showcase" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Showcase
            </a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Community
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200">
              Join Community
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="https://www.hyperlinkinfosystem.com/article/vibe-coding-strategic-roadmap-to-becoming-an-ai-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Roadmap
              </a>
              <a
                href="#showcase"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Showcase
              </a>
              <a
                href="#community"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <div className="px-3 py-2">
                <button className="w-full bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;