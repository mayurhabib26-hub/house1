import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

interface SignatureDishesProps {
  onSelectCategory: (categoryId: string) => void;
}

interface SignatureItem {
  id: string;
  name: string;
  categoryLabel: string;
  categoryId: string;
  description: string;
  image: string;
  alt: string;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onSelectCategory }) => {
  const shouldReduceMotion = useReducedMotion();

  const signatureItems: SignatureItem[] = [
    {
      id: 'biryani',
      name: 'Hyderabadi Dum Biryani',
      categoryLabel: 'Signature Delicacy',
      categoryId: 'biryani',
      description: 'Layered saffron-infused basmati rice and marinated meat, cooked gently in sealed handis under gentle dum pressure.',
      image: '/src/assets/images/hero_hyderabadi_dum_biryani_1791539413189.jpg',
      alt: 'Royal Hyderabadi Dum Biryani in copper handi',
    },
    {
      id: 'mandi',
      name: 'Royal Mandi',
      categoryLabel: 'Sharing Platters',
      categoryId: 'mandi',
      description: 'Fragrant smoked basmati rice crowned with tender roasted chicken or lamb, garnished with toasted nuts and fresh citrus.',
      image: '/src/assets/images/dish_hyderabadi_mandi_1791539424987.jpg',
      alt: 'Hyderabadi Arabian Mandi feast platter with roasted chicken and nuts',
    },
    {
      id: 'haleem',
      name: 'Signature Haleem',
      categoryLabel: 'Heritage Recipe',
      categoryId: 'haleem',
      description: 'The world-celebrated delicacy slow-cooked for hours with meat, lentils, pounded wheat, and spices into a velvety consistency.',
      image: '/src/assets/images/dish_signature_haleem_1791539434981.jpg',
      alt: 'Authentic Hyderabadi Haleem garnished with fried onions, ginger and cashews',
    },
    {
      id: 'kebabs',
      name: 'Grilled Kebabs',
      categoryLabel: 'Charcoal Tandoor',
      categoryId: 'kebabs',
      description: 'Skewered lamb seekh and succulent chicken boti, char-grilled over embers with fresh mint and tangy red onions.',
      image: '/src/assets/images/dish_grilled_kebabs_1791539445523.jpg',
      alt: 'Sizzling platter of chargrilled kebabs with mint chutney',
    },
    {
      id: 'chai',
      name: 'Irani Chai',
      categoryLabel: 'Hyderabadi Café',
      categoryId: 'beverages',
      description: 'Velvety rich tea prepared with slow-reduced creamy milk and strong tea decoction, traditionally accompanied by crisp Osmania biscuits.',
      image: '/src/assets/images/dish_irani_chai_dessert_1791539457004.jpg',
      alt: 'Glass of steaming Hyderabadi Irani chai and Osmania biscuits',
    },
    {
      id: 'desserts',
      name: 'Nizami Desserts',
      categoryLabel: 'Royal Sweets',
      categoryId: 'desserts',
      description: 'Indulgent traditional favorites including Shahi Tukda soaked in saffron rabri and sun-dried stewed Qubani ka Meetha.',
      image: '/src/assets/images/dish_irani_chai_dessert_1791539457004.jpg',
      alt: 'Hyderabadi Shahi Tukda dessert with pistachios and saffron rabri',
    },
  ];

  return (
    <section id="signatures" className="py-20 lg:py-24 bg-white border-b border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#77786F] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
            <span>Curated Heritage</span>
            <span className="w-5 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263D32] tracking-tight mb-4 text-balance">
            Discover Our Signature Flavours
          </h2>
          
          <p className="text-base sm:text-lg text-[#77786F] font-light leading-relaxed">
            Authentic tastes, memorable meals, and flavours inspired by Hyderabad.
          </p>
        </ScrollReveal>

        {/* 6 Signature Food Cards Grid with Scroll Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              onClick={() => onSelectCategory(item.categoryId)}
              className="group cursor-pointer flex flex-col bg-[#F5F1E8] rounded-xl overflow-hidden border border-[#E5DFD2] hover:border-[#D0B787] hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container with Subtle Zoom */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#E5DFD2]/40">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  referrerPolicy="no-referrer"
                />
                
                {/* Clean unboxed category label */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded text-xs font-medium text-[#263D32] border border-[#E5DFD2]/60 shadow-xs">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between bg-white/60 group-hover:bg-white transition-colors duration-200">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#263D32] group-hover:text-[#1C2E25] transition-colors">
                      {item.name}
                    </h3>
                    <div className="p-1 rounded-full text-[#77786F] group-hover:text-[#263D32] group-hover:bg-[#E5DFD2]/50 transition-colors">
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <p className="text-sm text-[#77786F] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="pt-4 mt-4 border-t border-[#E5DFD2]/60 flex items-center justify-between text-xs font-medium text-[#263D32]">
                  <span className="group-hover:underline">View in Menu</span>
                  <span className="text-[#D0B787] font-semibold">Explore &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
