import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-foreground font-semibold text-xl">Vibecoding</span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Transforming developers into AI orchestrators through proven methodologies and hands-on learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Program links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Program</h3>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  How It Works
                </a>
              </li>
              <li>
                <a href="https://www.hyperlinkinfosystem.com/article/vibe-coding-strategic-roadmap-to-becoming-an-ai-developer" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  10-Day Roadmap
                </a>
              </li>
              <li>
                <a href="#showcase" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Student Showcase
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Curriculum
                </a>
              </li>
            </ul>
          </div>
          
          {/* Community links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://discord.gg/QBgrZ2C4" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Discord Server
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Study Groups
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Mentorship
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Vibecoding. All rights reserved.
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            <span>for developers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;