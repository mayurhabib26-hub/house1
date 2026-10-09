import React from 'react';
import { MapPin, Phone, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { motion, useReducedMotion } from 'motion/react';

interface HeroProps {
  onExploreMenu: () => void;
  onCallOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onCallOrder }) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="home" className="relative overflow-hidden bg-[#F5F1E8] pt-8 pb-16 md:py-20 lg:py-24 border-b border-[#E5DFD2]">
      {/* Delicate background decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#263D32 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Subtle Arch architectural watermark backdrop */}
      <motion.div
        animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#A7B3A0]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & CTAs */}
          <motion.div
            variants={shouldReduceMotion ? undefined : containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            
            {/* Eyebrow kicker */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#263D32] mb-4">
              <span className="w-6 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
              <span>AUTHENTIC HYDERABADI CUISINE · EAST HAM, LONDON</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#263D32] font-bold tracking-tight leading-[1.12] mb-6 text-balance"
            >
              A Taste of Hyderabad, <span className="italic font-normal text-[#D0B787]">Beautifully</span> Served.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#333832]/85 leading-relaxed mb-8 max-w-2xl font-light"
            >
              From aromatic Hyderabadi Dum Biryani to flavourful Mandi, grilled kebabs, and indulgent desserts, discover the rich tastes of Hyderabad at Pista House London.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-[#F5F1E8] bg-[#263D32] rounded-md hover:bg-[#1C2E25] transition-colors shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D0B787]"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 text-[#D0B787]" />
              </motion.button>

              <motion.a
                href={RESTAURANT_INFO.phone.telUrl}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={onCallOrder}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-medium text-[#263D32] bg-white border border-[#E5DFD2] rounded-md hover:border-[#D0B787] hover:bg-[#F5F1E8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263D32]"
              >
                <Phone className="w-4 h-4 text-[#263D32]" />
                <span>Call to Order</span>
              </motion.a>
            </motion.div>

            {/* Key Restaurant Details strip */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#E5DFD2] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#77786F]"
            >
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#263D32] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-[#263D32]">Location</span>
                  <span>387 Barking Road, East Ham</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#263D32] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-[#263D32]">Opening Hours</span>
                  <span>Open 7 Days · Until 11:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#D0B787] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-[#263D32]">Dining Formats</span>
                  <span>Dine-In · Takeaway · Delivery</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Food Photograph */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.94, y: 20 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              
              {/* Outer decorative frame */}
              <div className="relative rounded-2xl overflow-hidden p-2 bg-white/70 border border-[#E5DFD2] shadow-xl">
                <div className="relative rounded-xl overflow-hidden aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 bg-[#E5DFD2]/30">
                  <img
                    src="/src/assets/images/hero_hyderabadi_dum_biryani_1791539413189.jpg"
                    alt="Authentic Royal Hyderabadi Dum Biryani served in a traditional copper handi with fresh herbs"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle gradient vignette at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#263D32]/80 via-[#263D32]/30 to-transparent flex items-end p-5">
                    <div className="text-white">
                      <p className="text-xs uppercase tracking-wider text-[#D0B787] font-semibold">Specialty of the House</p>
                      <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight">Hyderabadi Dum Biryani</h2>
                      <p className="text-xs text-white/80 line-clamp-1">Slow-cooked on dum with fragrant saffron basmati rice</p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
