import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { Instagram, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { ScrollReveal } from './ScrollReveal';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

export const Gallery: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeItem = selectedItemIndex !== null ? GALLERY_ITEMS[selectedItemIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % GALLERY_ITEMS.length);
    }
  }, [selectedItemIndex]);

  const handlePrev = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  }, [selectedItemIndex]);

  const handleClose = () => {
    setSelectedItemIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-white border-b border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#77786F] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
            <span>Visual Showcase</span>
            <span className="w-5 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263D32] tracking-tight mb-4 text-balance">
            A Feast for the Eyes
          </h2>

          <p className="text-base sm:text-lg text-[#77786F] font-light leading-relaxed">
            Explore the food, atmosphere, and flavours of Pista House London.
          </p>
        </ScrollReveal>

        {/* Asymmetric Gallery Grid with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {GALLERY_ITEMS.map((item: GalleryItem, index: number) => {
            const isLarge = index === 0;

            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                onClick={() => setSelectedItemIndex(index)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer border border-[#E5DFD2] bg-[#F5F1E8] shadow-xs hover:shadow-xl transition-all duration-300 ${
                  isLarge ? 'md:col-span-2 lg:col-span-2 aspect-16/10' : 'aspect-4/3'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#263D32]/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#D0B787] font-semibold">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#F5F1E8]/90 max-w-md line-clamp-1 mt-1">
                        {item.caption}
                      </p>
                    </div>
                    <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-xs text-white">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Instagram Call to Action */}
        <ScrollReveal delay={0.2}>
          <div className="p-6 sm:p-8 bg-[#F5F1E8] rounded-xl border border-[#E5DFD2] flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-xs">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-[#263D32] flex items-center justify-center text-[#D0B787] shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#263D32]">
                  Follow @pistahouselondon on Instagram
                </h3>
                <p className="text-xs sm:text-sm text-[#77786F]">
                  Stay updated on daily specials, celebrations, and festive dishes.
                </p>
              </div>
            </div>

            <motion.a
              href={RESTAURANT_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#F5F1E8] bg-[#263D32] rounded-md hover:bg-[#1C2E25] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Visit Our Instagram</span>
              <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </div>
        </ScrollReveal>

      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activeItem && selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-xs"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image container */}
            <motion.div
              initial={shouldReduceMotion ? {} : { scale: 0.95, opacity: 0 }}
              animate={shouldReduceMotion ? {} : { scale: 1, opacity: 1 }}
              exit={shouldReduceMotion ? {} : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={activeItem.image}
                alt={activeItem.alt}
                className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 text-center text-white max-w-xl">
                <span className="text-xs uppercase tracking-wider text-[#D0B787] font-semibold">
                  {activeItem.category} ({selectedItemIndex + 1} of {GALLERY_ITEMS.length})
                </span>
                <h3 className="font-serif text-xl font-bold mt-1">{activeItem.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">{activeItem.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
