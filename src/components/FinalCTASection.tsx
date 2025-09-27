import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-primary/20">
        <Sparkles className="w-8 h-8 animate-pulse" />
      </div>
      <div className="absolute top-40 right-20 text-accent/20">
        <Zap className="w-6 h-6 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-20 left-20 text-primary/20">
        <Sparkles className="w-6 h-6 animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Ready to Start Vibing?
            </span>
          </motion.h2>
          
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
          >
            Your journey from syntax warrior to AI whisperer begins with a single conversation. 
            Join the vibe coding revolution where ideas flow naturally into reality.
          </motion.p>
          
          {/* Value proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">10 Days</div>
              <div className="text-muted-foreground">From syntax to conversation</div>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-2xl font-bold text-accent mb-2">Natural Flow</div>
              <div className="text-muted-foreground">Intuitive AI orchestration</div>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">3 Apps</div>
              <div className="text-muted-foreground">Built through conversation</div>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <button className="group bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
              Start Vibe Coding
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a href="https://www.hyperlinkinfosystem.com/article/vibe-coding-strategic-roadmap-to-becoming-an-ai-developer" target="_blank" rel="noopener noreferrer" className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-muted transition-colors duration-200 inline-block text-center">
              Read the Vibe Guide
            </a>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Join 2,000+ AI orchestrators who've mastered the vibe
            </p>
            <div className="flex justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Just speak your ideas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">AI whisperer community</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Intuitive flow mastery</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;