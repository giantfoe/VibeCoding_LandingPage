import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const communityThoughts = [
  {
    name: "Sarah Chen",
    role: "Tech Lead",
    company: "@sarahbuilds",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20headshot%20of%20asian%20female%20tech%20lead%20confident%20smile%20modern%20portrait&image_size=square",
    rating: 5,
    text: "The VibeCoding methodology isn't just about AI tools - it's about fundamentally rethinking how we approach problem-solving in development. This is the future of coding education.",
    highlight: "#AIFirst #VibeCoding"
  },
  {
    name: "Marcus Dev",
    role: "Senior Engineer",
    company: "@marcusbuilds",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20headshot%20of%20hispanic%20male%20software%20engineer%20thoughtful%20modern%20portrait&image_size=square",
    rating: 5,
    text: "Hot take: Traditional coding bootcamps are teaching yesterday's skills. VibeCoding teaches you to think WITH AI, not just use it as a tool. That's the difference between surviving and thriving in 2024.",
    highlight: "#FutureOfCoding"
  },
  {
    name: "Alex Rivera",
    role: "AI Researcher",
    company: "@alexcodes",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20headshot%20of%20latino%20ai%20researcher%20glasses%20confident%20tech%20portrait&image_size=square",
    rating: 5,
    text: "Watching developers discover AI-assisted development through VibeCoding is like watching someone discover fire. The productivity gains aren't just incremental - they're exponential.",
    highlight: "#AIAssisted"
  },
  {
    name: "Emma Tech",
    role: "Product Engineer",
    company: "@emmabuilds",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20headshot%20of%20caucasian%20female%20product%20engineer%20creative%20confident%20portrait&image_size=square",
    rating: 5,
    text: "The best part about VibeCoding? It doesn't just teach you to code faster - it teaches you to think about problems differently. AI becomes your thinking partner, not just your coding assistant.",
    highlight: "#ThinkingPartner"
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    company: "@davidships",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20headshot%20of%20asian%20male%20startup%20founder%20determined%20modern%20portrait&image_size=square",
    rating: 5,
    text: "As a non-technical founder, VibeCoding gave me the confidence to prototype my own ideas. I went from idea to MVP in 2 weeks. This is democratizing software development.",
    highlight: "#NoCode2ProCode"
  },
  {
    name: "Zoe Martinez",
    role: "Full-Stack Dev",
    company: "@zoecodes",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20headshot%20of%20latina%20full%20stack%20developer%20confident%20smile%20modern%20portrait&image_size=square",
    rating: 5,
    text: "The industry is shifting faster than most realize. VibeCoding isn't just keeping up with the change - it's leading it. This is how developers will work in the AI-native era.",
    highlight: "#AINative"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
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
            <span className="text-foreground">What the </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Community is Saying</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The developer community is buzzing about AI-powered development and the VibeCoding methodology.
          </p>
        </motion.div>

        {/* Community Thoughts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityThoughts.map((thought, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-muted/30 backdrop-blur-sm border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10">
                {/* Tweet-style header */}
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={thought.image} 
                    alt={thought.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-border group-hover:border-primary/50 transition-colors duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {thought.name}
                      </span>
                      <span className="text-primary text-sm">{thought.company}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {thought.role}
                    </div>
                  </div>
                </div>
                
                {/* Tweet text */}
                <div className="text-muted-foreground mb-4 leading-relaxed">
                  {thought.text}
                </div>
                
                {/* Hashtags */}
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/30">
                    {thought.highlight}
                  </span>
                </div>
                
                {/* Tweet actions */}
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Reply</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-green-500 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>Retweet</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Like</span>
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
              Join the AI-Native Developer Movement
            </h3>
            <p className="text-muted-foreground mb-6">
              Be part of the conversation shaping the future of development. Start your VibeCoding journey today.
            </p>
            <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg">
              Join the Movement
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;