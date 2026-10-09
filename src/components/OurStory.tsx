import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PistaHouseLogo } from './PistaHouseLogo';
import { ScrollReveal } from './ScrollReveal';
import { motion, useReducedMotion } from 'motion/react';

interface OurStoryProps {
  onExploreMenu: () => void;
}

export const OurStory: React.FC<OurStoryProps> = ({ onExploreMenu }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="story" className="py-20 lg:py-24 bg-[#F5F1E8] border-b border-[#E5DFD2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal direction="left" distance={30} className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E5DFD2] bg-white p-2.5 shadow-xl">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#E5DFD2]/40">
                  <img
                    src="/images/dish_hyderabadi_mandi_1791539424987.jpg"
                    alt="Pista House London dining experience featuring royal mandi feast platter"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#263D32]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider text-[#D0B787] font-semibold">East Ham, London</p>
                    <p className="font-serif text-lg font-bold">387 Barking Road</p>
                  </div>
                </div>
              </div>

              {/* Inset Decorative Emblem Card */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                className="hidden sm:flex absolute -top-6 -right-6 bg-white p-4 rounded-xl border border-[#E5DFD2] shadow-lg items-center gap-3"
              >
                <PistaHouseLogo size="sm" variant="badge" showSubtitle={false} />
                <div>
                  <p className="text-xs font-bold text-[#263D32]">Authentic Heritage</p>
                  <p className="text-[11px] text-[#77786F]">East Ham, London E6 2JT</p>
                </div>
              </motion.div>

            </ScrollReveal>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            
            <ScrollReveal direction="up" delay={0.1}>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#263D32] mb-3">
                <span className="w-5 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
                <span>Our Culinary Heritage</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263D32] tracking-tight mb-6 text-balance">
                Rooted in Hyderabad. Welcoming London.
              </h2>

              <p className="text-base sm:text-lg text-[#333832]/85 leading-relaxed font-light mb-6">
                At Pista House London, we celebrate the rich culinary traditions of Hyderabad. Discover the flavours of biryani, Mandi, grilled kebabs, and delightful desserts in a welcoming setting in East Ham.
              </p>

              <p className="text-sm sm:text-base text-[#77786F] leading-relaxed mb-8">
                Every dish is crafted with reverence for authentic recipes — from the delicate layering of saffron basmati rice in slow-cooked dum pots to the rich complexity of traditional Haleem and the comforting warmth of fresh Irani chai. Whether dining in with family or collecting a hot takeaway, we are proud to share Hyderabad’s hospitality with our London community.
              </p>
            </ScrollReveal>

            {/* Quality Highlights */}
            <ScrollReveal direction="up" delay={0.25}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 text-sm text-[#263D32]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D0B787] shrink-0" />
                  <span>Traditional sealed Dum cooking</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D0B787] shrink-0" />
                  <span>Authentic Arabian-Hyderabadi Mandi</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D0B787] shrink-0" />
                  <span>World-renowned Signature Haleem</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D0B787] shrink-0" />
                  <span>Warm hospitality for families & friends</span>
                </div>
              </div>

              {/* Action Link */}
              <div>
                <motion.button
                  type="button"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  onClick={onExploreMenu}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#F5F1E8] bg-[#263D32] rounded-md hover:bg-[#1C2E25] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D0B787]"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4 text-[#D0B787]" />
                </motion.button>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
};
