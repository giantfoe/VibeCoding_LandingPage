import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Lightbulb } from 'lucide-react';

const transformations = [
  {
    icon: Brain,
    title: "From Syntax to Conversation",
    description: "Stop memorizing programming languages and start speaking naturally to AI. Master the art of describing your vision in plain English and watching it come to life through intelligent code generation.",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Code,
    title: "From Writing to Orchestrating",
    description: "Shift from manually writing every line of code to conducting AI symphonies. Learn to guide, refine, and perfect applications through intuitive prompts and conversational feedback.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Lightbulb,
    title: "From Technical to Intuitive",
    description: "Embrace the vibe coding flow where creativity trumps complexity. Build applications by following your instincts and letting AI handle the technical implementation details.",
    gradient: "from-pink-500 to-orange-600"
  }
];

const TransformationSection: React.FC = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl" />
      
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
            <span className="text-foreground">Your </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Transformation</span>
            <span className="text-foreground"> Awaits</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the paradigm shift from writing code to conversing with AI. In 10 days, transform your entire approach to software development through the power of vibe coding:
          </p>
        </motion.div>

        {/* Transformation Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => {
            const IconComponent = transformation.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10">
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${transformation.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${transformation.gradient} rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {transformation.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {transformation.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom section with promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              The Promise: From Code Writer to AI Whisperer in 10 Days
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We don't just teach you to use AI tools—we revolutionize how you communicate with technology. 
              Master the fluid art of vibe coding where natural language becomes your most powerful programming tool.
            </p>
            <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg">
              Begin Your Transformation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationSection;