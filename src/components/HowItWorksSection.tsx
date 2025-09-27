import React from 'react';
import { motion } from 'framer-motion';
import { Play, Zap, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Play,
    title: "Natural Language Prompting",
    description: "Describe what you want to build in plain English. No syntax memorization—just clear communication with AI about your vision.",
    step: "01"
  },
  {
    icon: Zap,
    title: "AI-Powered Generation",
    description: "Watch as AI transforms your ideas into working code. Experience the magic of instant application creation through intelligent automation.",
    step: "02"
  },
  {
    icon: Rocket,
    title: "Intuitive Iteration",
    description: "Refine and enhance through conversational feedback. Guide AI to perfect your application with natural language adjustments.",
    step: "03"
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
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
            <span className="text-foreground">The Vibe Coding </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Flow</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the fluid way of coding where you go with the flow and let AI tools do the work. Build applications through natural conversation, not complex syntax.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-border mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {step.step}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-muted/50 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center group-hover:bg-muted transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;