import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: "DPG Pipeline",
    description: "Built through natural conversation: 'Create a platform for digital public goods that connects developers with global impact projects.' AI orchestrated the entire development flow.",
    tech: ["AI-Generated", "Natural Language", "Conversational Build", "Vibe Flow"],
    liveUrl: "https://launch.publicgood.dev/",
    featured: true,
    vibePrompt: "Build a platform for digital public goods collaboration",
    preview: {
      bgColor: "from-blue-900 to-purple-900",
      elements: [
        { type: "header", text: "DPG Pipeline" },
        { type: "nav", items: ["Projects", "Resources", "Community", "About"] },
        { type: "hero", text: "Digital Public Goods" },
        { type: "cards", count: 3 }
      ]
    }
  },
  {
    title: "Future of Work",
    description: "Vibe-coded from a simple idea: 'Show me the future of remote work.' Through iterative conversation with AI, this platform emerged organically.",
    tech: ["Conversational AI", "Natural Prompting", "Iterative Flow", "AI Orchestration"],
    liveUrl: "https://future-of-work-pied.vercel.app",
    featured: false,
    vibePrompt: "Explore the evolution of work in the digital age",
    preview: {
      bgColor: "from-gray-900 to-slate-900",
      elements: [
        { type: "header", text: "Future of Work" },
        { type: "nav", items: ["Insights", "Tools", "Resources", "Contact"] },
        { type: "hero", text: "The Evolution of Work" },
        { type: "content", sections: 2 }
      ]
    }
  },
  {
    title: "Springboard",
    description: "Born from vibe coding: 'I need a Web3 idea generator.' AI understood the vision and built a comprehensive platform through natural language guidance.",
    tech: ["AI Whispering", "Natural Language", "Vibe-Driven", "Conversational Build"],
    liveUrl: "https://v0-pwa-springboard-development.vercel.app/ideas",
    featured: false,
    vibePrompt: "Create a Web3 project ideas and builder platform",
    preview: {
      bgColor: "from-emerald-900 to-teal-900",
      elements: [
        { type: "header", text: "Springboard" },
        { type: "nav", items: ["Ideas", "Build", "Learn", "Connect"] },
        { type: "hero", text: "Web3 Project Ideas" },
        { type: "grid", items: 6 }
      ]
    }
  }
];

const ShowcaseSection: React.FC = () => {
  return (
    <section id="showcase" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
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
            <span className="text-foreground">From Conversation </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">to Creation</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real projects built through natural language interaction with AI. Each started with a simple conversation and evolved into production-ready applications through vibe coding.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-muted/30 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 h-full">
                {/* Project Preview */}
                <div className="relative overflow-hidden">
                  <div className={`w-full h-48 lg:h-64 bg-gradient-to-br ${project.preview.bgColor} p-4 group-hover:scale-105 transition-transform duration-500`}>
                    {/* Website Mockup */}
                    <div className="bg-gray-900/80 rounded-lg h-full p-3 space-y-2">
                      {/* Header */}
                      <div className="flex items-center justify-between bg-gray-800/60 rounded px-3 py-2">
                        <div className="text-white text-xs font-medium">{project.preview.elements.find(el => el.type === 'header')?.text}</div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Navigation */}
                      <div className="flex space-x-2 px-3">
                        {((project.preview.elements.find(el => el.type === 'nav') as any)?.items as string[])?.map((item, idx) => (
                          <div key={idx} className="text-gray-300 text-xs px-2 py-1 bg-gray-700/50 rounded">{item}</div>
                        ))}
                      </div>
                      
                      {/* Hero Section */}
                      <div className="px-3 py-2">
                        <div className="text-white text-sm font-semibold mb-1">{project.preview.elements.find(el => el.type === 'hero')?.text}</div>
                        <div className="w-3/4 h-1 bg-gray-600 rounded mb-1"></div>
                        <div className="w-1/2 h-1 bg-gray-700 rounded"></div>
                      </div>
                      
                      {/* Content Area */}
                      <div className="px-3 flex-1">
                        {project.preview.elements.find(el => el.type === 'cards') && (
                          <div className="grid grid-cols-3 gap-1">
                            {Array.from({ length: (project.preview.elements.find(el => el.type === 'cards') as any)?.count || 3 }).map((_, idx) => (
                              <div key={idx} className="bg-gray-700/40 rounded h-8"></div>
                            ))}
                          </div>
                        )}
                        
                        {project.preview.elements.find(el => el.type === 'content') && (
                          <div className="space-y-1">
                            {Array.from({ length: (project.preview.elements.find(el => el.type === 'content') as any)?.sections || 2 }).map((_, idx) => (
                              <div key={idx} className="space-y-1">
                                <div className="w-full h-2 bg-gray-700/40 rounded"></div>
                                <div className="w-4/5 h-1 bg-gray-700/30 rounded"></div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {project.preview.elements.find(el => el.type === 'grid') && (
                          <div className="grid grid-cols-3 gap-1">
                            {Array.from({ length: Array.isArray((project.preview.elements.find(el => el.type === 'grid') as any)?.items) ? (project.preview.elements.find(el => el.type === 'grid') as any).items.length : (project.preview.elements.find(el => el.type === 'grid') as any)?.items || 6 }).map((_, idx) => (
                              <div key={idx} className="bg-gray-700/40 rounded h-6"></div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay with live link */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors duration-200 flex items-center gap-2 font-medium"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Site
                    </a>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Original Vibe Prompt */}
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-4">
                    <div className="text-xs text-accent font-medium mb-1">Original Vibe Prompt:</div>
                    <div className="text-sm text-muted-foreground italic">
                      "{project.vibePrompt}"
                    </div>
                  </div>
                  
                  {/* Vibe Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Vibe Your Ideas Into Reality?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the AI orchestrators who are building the future through natural language and intuitive flow.
            </p>
            <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg">
              Start Vibe Coding
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;