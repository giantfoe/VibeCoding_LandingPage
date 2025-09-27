import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Trophy, Clock } from 'lucide-react';

const stats = [
  {
    icon: Star,
    value: "4.9",
    label: "Vibe Rating",
    description: "From AI orchestrators",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Users,
    value: "2K+",
    label: "AI Whisperers Created",
    description: "And vibing",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    icon: Trophy,
    value: "95%",
    label: "Natural Language Fluency",
    description: "Master AI conversation",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: Clock,
    value: "10",
    label: "Days to Vibe Mastery",
    description: "From syntax to conversation",
    gradient: "from-purple-400 to-pink-500"
  }
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Proven </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The vibe coding revolution is real. Here's the impact we've made on AI orchestrators worldwide.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10">
                  {/* Icon with gradient background */}
                  <div className="relative mb-4 flex justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  </div>
                  
                  {/* Value */}
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-12 h-1 bg-gradient-to-r ${stat.gradient} rounded-full mx-auto`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">90%</div>
            <div className="text-muted-foreground">Faster Development Speed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-2">3</div>
            <div className="text-muted-foreground">Apps Built Through Conversation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Natural Language Fluent</div>
          </div>
        </motion.div>

        {/* Tech Leader Quotes Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="text-foreground">What </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tech Leaders</span>
            <span className="text-foreground"> Say</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Andrej Karpathy's Original Tweet */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <blockquote className="text-lg font-medium text-foreground mb-4 italic leading-relaxed">
                "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. It's possible because the LLMs are getting too good."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  AK
                </div>
                <div>
                  <div className="font-semibold text-foreground">Andrej Karpathy</div>
                  <div className="text-sm text-muted-foreground">AI Researcher, Former Tesla AI Director</div>
                </div>
              </div>
            </motion.div>

            {/* Karpathy's "English is the hottest programming language" */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
            >
              <blockquote className="text-lg font-medium text-foreground mb-4 italic leading-relaxed">
                "The hottest new programming language is English."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  AK
                </div>
                <div>
                  <div className="font-semibold text-foreground">Andrej Karpathy</div>
                  <div className="text-sm text-muted-foreground">On the future of programming</div>
                </div>
              </div>
            </motion.div>

            {/* Karpathy's practical description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple/10 to-pink/10 border border-purple/20 rounded-2xl p-6 hover:border-purple/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple/10"
            >
              <blockquote className="text-lg font-medium text-foreground mb-4 italic leading-relaxed">
                "It's not really coding — I just see stuff, say stuff, run stuff, and copy-paste stuff, and it mostly works."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  AK
                </div>
                <div>
                  <div className="font-semibold text-foreground">Andrej Karpathy</div>
                  <div className="text-sm text-muted-foreground">Describing the vibe coding experience</div>
                </div>
              </div>
            </motion.div>

            {/* Developer reaction from Medium */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange/10 to-red/10 border border-orange/20 rounded-2xl p-6 hover:border-orange/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange/10"
            >
              <blockquote className="text-lg font-medium text-foreground mb-4 italic leading-relaxed">
                "When I first heard the term 'vibe coding,' I had a visceral reaction — namely, a full-body cringe. As a developer who takes pride in actually understanding my code, the phrase sounded like a bad joke."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  HQ
                </div>
                <div>
                  <div className="font-semibold text-foreground">Hailey Quach</div>
                  <div className="text-sm text-muted-foreground">Developer, Medium Article Author</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;