import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Award } from 'lucide-react';

const skillProgressData = [
  { day: 1, skill: 20 },
  { day: 2, skill: 35 },
  { day: 3, skill: 45 },
  { day: 4, skill: 60 },
  { day: 5, skill: 70 },
  { day: 6, skill: 80 },
  { day: 7, skill: 85 },
  { day: 8, skill: 90 },
  { day: 9, skill: 95 },
  { day: 10, skill: 100 },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-background pt-16 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/VIBECODING.jpg')",
          zIndex: 1
        }}
      />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" style={{ zIndex: 2 }} />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse-slow" style={{ zIndex: 3 }} />
      <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s', zIndex: 3 }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  FROM BUILDER TO
                </span>
                <br />
                <span className="text-foreground">ARCHITECT</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                Welcome to Vibe Coding—where natural language becomes your programming language. Master the art of conversing with AI to build full-stack applications through intuitive prompts, not complex syntax. Transform from code writer to AI orchestrator in just 10 days.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="https://www.hyperlinkinfosystem.com/article/vibe-coding-strategic-roadmap-to-becoming-an-ai-developer" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg inline-block text-center">
                View The Roadmap
              </a>
              <button className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-muted transition-colors duration-200">
                See The Showcase
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Metrics and Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-muted/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Skills Mastered</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-muted/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">3</div>
                <div className="text-sm text-muted-foreground">Capstone Projects</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-muted/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">10</div>
                <div className="text-sm text-muted-foreground">Day Journey</div>
              </motion.div>
            </div>

            {/* Skill Progression Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-muted/50 backdrop-blur-sm border border-border rounded-xl p-6"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">Your 10-Day Ascension</h3>
                <p className="text-sm text-muted-foreground">Skill progression curve</p>
              </div>
              
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={skillProgressData}>
                    <XAxis 
                      dataKey="day" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#9ca3af', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#9ca3af', fontSize: 12 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="skill" 
                      stroke="url(#gradient)" 
                      strokeWidth={3}
                      dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: '#6366f1' }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;