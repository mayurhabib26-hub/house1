import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuCategory, MenuItem } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { Phone, Utensils, Info } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface MenuSectionProps {
  initialCategory?: string;
  onOpenOrderModal: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  initialCategory = 'biryani',
  onOpenOrderModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const shouldReduceMotion = useReducedMotion();

  const currentCategoryMeta = MENU_CATEGORIES.find((c) => c.id === activeCategory) || MENU_CATEGORIES[0];
  const filteredDishes = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 lg:py-24 bg-white border-b border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#77786F] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
            <span>A Taste of Hyderabad</span>
            <span className="w-5 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263D32] tracking-tight mb-4 text-balance">
            Our Traditional Menu
          </h2>

          <p className="text-base sm:text-lg text-[#77786F] font-light leading-relaxed">
            Prepared fresh daily with traditional recipes, authentic spices, and time-honoured techniques.
          </p>
        </ScrollReveal>

        {/* Category Navigation Tabs */}
        <ScrollReveal delay={0.1} className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 bg-[#F5F1E8] rounded-xl border border-[#E5DFD2] max-w-full">
            {MENU_CATEGORIES.map((cat: MenuCategory) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263D32] ${
                    isActive
                      ? 'bg-[#263D32] text-[#F5F1E8] shadow-xs'
                      : 'text-[#263D32] hover:bg-[#E5DFD2]/50'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Category Subhead Banner */}
        <ScrollReveal delay={0.15}>
          <div className="mb-10 p-6 bg-[#F5F1E8] rounded-xl border border-[#E5DFD2] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#D0B787] tracking-wider mb-1">
                <span>{currentCategoryMeta.tagline}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#263D32]">
                {currentCategoryMeta.title}
              </h3>
              <p className="text-sm text-[#77786F] mt-1 max-w-2xl">
                {currentCategoryMeta.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.phone.telUrl}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#263D32] bg-white border border-[#E5DFD2] rounded-md hover:border-[#D0B787] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#263D32]" />
                <span>Call: {RESTAURANT_INFO.phone.display}</span>
              </a>
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#F5F1E8] bg-[#263D32] rounded-md hover:bg-[#1C2E25] transition-colors"
              >
                <Utensils className="w-3.5 h-3.5 text-[#D0B787]" />
                <span>Order / Reserve</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Dishes Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {filteredDishes.map((dish: MenuItem, idx: number) => (
              <motion.div
                key={dish.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : idx * 0.05 }}
                className="p-6 bg-[#F5F1E8]/50 rounded-xl border border-[#E5DFD2] hover:border-[#D0B787] hover:bg-white transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#263D32] leading-snug">
                      {dish.name}
                    </h4>
                    {dish.price && (
                      <span className="font-serif font-bold text-base text-[#263D32] whitespace-nowrap shrink-0">
                        {dish.price}
                      </span>
                    )}
                  </div>

                  {/* Dietary and metadata tags */}
                  {dish.dietary && dish.dietary.length > 0 && (
                    <div className="flex items-center gap-2 text-xs text-[#77786F] mb-3">
                      {dish.dietary.map((tag, tagIdx) => (
                        <React.Fragment key={tag}>
                          <span className="font-medium text-[#263D32]">{tag}</span>
                          {tagIdx < (dish.dietary?.length ?? 0) - 1 && (
                            <span aria-hidden="true" className="text-[#A7B3A0]">·</span>
                          )}
                        </React.Fragment>
                      ))}
                      {dish.serves && (
                        <>
                          <span aria-hidden="true" className="text-[#A7B3A0]">·</span>
                          <span>{dish.serves}</span>
                        </>
                      )}
                    </div>
                  )}

                  <p className="text-sm text-[#77786F] leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                {/* Action row */}
                <div className="pt-3 border-t border-[#E5DFD2]/60 flex items-center justify-between">
                  <span className="text-xs text-[#77786F]">
                    Authentic Hyderabadi Preparation
                  </span>
                  <button
                    type="button"
                    onClick={onOpenOrderModal}
                    className="text-xs font-semibold text-[#263D32] hover:text-[#D0B787] transition-colors"
                  >
                    Order This Item &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Verification and Menu Notice */}
        <ScrollReveal delay={0.2}>
          <div className="p-4 bg-[#F5F1E8] rounded-lg border border-[#E5DFD2] flex items-start gap-3 max-w-2xl mx-auto text-xs text-[#77786F]">
            <Info className="w-4 h-4 text-[#263D32] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#263D32]">Please Note:</strong> Our menu is prepared fresh daily. Prices and daily specials can be confirmed directly when placing your order or reserving a table by calling our team on{' '}
              <a href={RESTAURANT_INFO.phone.telUrl} className="underline text-[#263D32] font-semibold">
                020 8821 9061
              </a>.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
