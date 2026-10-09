/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureDishes } from './components/SignatureDishes';
import { OurStory } from './components/OurStory';
import { MenuSection } from './components/MenuSection';
import { WhyVisitUs } from './components/WhyVisitUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { ReservationAndOrderModal } from './components/ReservationAndOrderModal';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<string>('biryani');

  const handleOpenOrderModal = () => {
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromSignatures = (categoryId: string) => {
    setSelectedMenuCategory(categoryId);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#333832] selection:bg-[#263D32] selection:text-[#F5F1E8] pb-16 lg:pb-0">
      {/* Sticky Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMenu={handleExploreMenu}
          onCallOrder={() => {}}
        />

        {/* 6 Signature Dishes */}
        <SignatureDishes onSelectCategory={handleSelectCategoryFromSignatures} />

        {/* Story & Cultural Heritage */}
        <OurStory onExploreMenu={handleExploreMenu} />

        {/* Interactive Full Menu */}
        <MenuSection
          initialCategory={selectedMenuCategory}
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* Why Visit Pista House */}
        <WhyVisitUs />

        {/* Visual Gallery with Lightbox */}
        <Gallery />

        {/* Guest Feedback & Community */}
        <Testimonials />

        {/* Location, Hours, Interactive Map & Enquiry Form */}
        <ContactSection />
      </main>

      {/* Forest Green Footer */}
      <Footer />

      {/* Mobile Fixed Action Bar (Call, Directions, Order/Table) */}
      <MobileActionBar onOpenOrderModal={handleOpenOrderModal} />

      {/* Reservation & Ordering Modal Dialog */}
      <ReservationAndOrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
      />
    </div>
  );
}
