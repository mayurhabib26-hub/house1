import React from 'react';
import { Sparkles, Utensils, ShoppingBag, Users2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { motion, useReducedMotion } from 'motion/react';

export const WhyVisitUs: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const pillars = [
    {
      icon: Sparkles,
      title: 'Authentic Hyderabadi Cuisine',
      description: 'Crafted according to time-tested recipes from Hyderabad, featuring our renowned sealed dum biryani, rich haleem, and traditional spice blends.',
    },
    {
      icon: Utensils,
      title: 'A Variety of Flavours',
      description: 'From sizzling charcoal-grilled kebabs and fragrant Arabian Mandi platters to aromatic Irani chai and royal sweets like Shahi Tukda.',
    },
    {
      icon: ShoppingBag,
      title: 'Dine-In, Takeaway & Delivery',
      description: 'Enjoy a leisurely meal in our East Ham dining room, pick up hot takeaway on your way home, or order direct to your door.',
    },
    {
      icon: Users2,
      title: 'A Welcoming Place to Gather',
      description: 'Generous sharing platters and warm hospitality designed to bring families, friends, and food lovers together around great meals.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F5F1E8] border-b border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#77786F] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
            <span>The Pista House Experience</span>
            <span className="w-5 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263D32] tracking-tight mb-4 text-balance">
            Why Visit Pista House London
          </h2>

          <p className="text-base sm:text-lg text-[#77786F] font-light leading-relaxed">
            Bringing the authentic taste and generous hospitality of Hyderabad to Barking Road, East Ham.
          </p>
        </ScrollReveal>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : idx * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className="p-8 bg-white rounded-xl border border-[#E5DFD2] hover:border-[#D0B787] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#F5F1E8] border border-[#E5DFD2] flex items-center justify-center text-[#263D32] mb-6">
                    <Icon className="w-6 h-6 text-[#263D32]" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#263D32] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#77786F] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5DFD2]/60 text-xs font-medium text-[#A7B3A0]">
                  <span>0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
