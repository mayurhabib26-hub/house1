import React from 'react';
import { Star, MessageSquareHeart, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { ScrollReveal } from './ScrollReveal';
import { motion, useReducedMotion } from 'motion/react';

export const Testimonials: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#77786F] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
            <span>Community & Feedback</span>
            <span className="w-5 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263D32] tracking-tight mb-4 text-balance">
            Loved in London
          </h2>

          <p className="text-base sm:text-lg text-[#77786F] font-light leading-relaxed">
            From our family tables in East Ham to social celebrations across London.
          </p>
        </ScrollReveal>

        {/* Community Proof Card with Scroll Reveal */}
        <ScrollReveal delay={0.15}>
          <div className="max-w-3xl mx-auto bg-[#F5F1E8] rounded-2xl border border-[#E5DFD2] p-8 sm:p-10 text-center relative overflow-hidden shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#263D32] text-[#D0B787] flex items-center justify-center mx-auto mb-6">
              <MessageSquareHeart className="w-6 h-6" />
            </div>

            {/* Star ratings representation */}
            <div className="flex items-center justify-center gap-1 text-[#D0B787] mb-4" aria-label="5 Star rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <blockquote className="font-serif italic text-xl sm:text-2xl text-[#263D32] leading-relaxed mb-6">
              “Authentic flavours, traditional dum biryani, and the genuine warmth of Hyderabadi hospitality right here on Barking Road.”
            </blockquote>

            <div className="text-xs text-[#77786F] uppercase tracking-wider mb-8">
              <span>Diners & Community Feedback</span>
              <span className="mx-2 text-[#D0B787]">·</span>
              <span>East Ham, London E6</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-[#E5DFD2]">
              <motion.a
                href={RESTAURANT_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#F5F1E8] bg-[#263D32] rounded-md hover:bg-[#1C2E25] transition-colors"
              >
                <span>See Diners on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D0B787]" />
              </motion.a>

              <motion.a
                href={`https://www.google.com/search?q=Pista+House+London+387+Barking+Road`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#263D32] bg-white border border-[#E5DFD2] rounded-md hover:border-[#D0B787] transition-colors"
              >
                <span>View Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
