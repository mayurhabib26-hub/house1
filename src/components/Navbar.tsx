import React, { useState, useEffect } from 'react';
import { PistaHouseLogo } from './PistaHouseLogo';
import { Menu, X, PhoneCall, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { motion, useScroll, useSpring } from 'motion/react';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b relative ${
          isScrolled
            ? 'bg-[#F5F1E8]/95 backdrop-blur-md py-3 shadow-xs border-[#E5DFD2]'
            : 'bg-[#F5F1E8] py-4 border-[#E5DFD2]'
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D0B787] origin-left z-50 pointer-events-none"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark & Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263D32] rounded-md"
              aria-label="Pista House London Home"
            >
              <PistaHouseLogo size="md" variant="badge" />
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#263D32]" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="whitespace-nowrap transition-colors duration-200 hover:text-[#D0B787] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263D32] rounded-sm py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action & Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Desktop Direct Call quick indicator */}
              <a
                href={RESTAURANT_INFO.phone.telUrl}
                className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#263D32] hover:text-[#D0B787] transition-colors py-2 px-3 border border-[#E5DFD2] rounded-md bg-white/60"
                title="Call 020 8821 9061"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D0B787]" />
                <span className="whitespace-nowrap">{RESTAURANT_INFO.phone.display}</span>
              </a>

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#F5F1E8] bg-[#263D32] rounded-md hover:bg-[#1C2E25] hover:shadow-sm border border-[#263D32] transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D0B787] active:scale-98"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#D0B787]" />
                <span>Order Now</span>
              </button>

              {/* Mobile Menu Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#263D32] hover:bg-[#E5DFD2]/50 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263D32]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#263D32]/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <div className="fixed top-0 right-0 w-full max-w-xs h-full bg-[#F5F1E8] shadow-2xl p-6 flex flex-col justify-between border-l border-[#E5DFD2]">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5DFD2]">
                <PistaHouseLogo size="sm" showSubtitle={false} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#263D32] hover:bg-[#E5DFD2]/60 rounded-md"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center px-4 py-3 text-base font-medium text-[#263D32] rounded-md hover:bg-[#E5DFD2]/40 hover:text-[#D0B787] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-6 border-t border-[#E5DFD2] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-[#F5F1E8] bg-[#263D32] rounded-md shadow-xs hover:bg-[#1C2E25]"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#D0B787]" />
                Order & Table Enquiries
              </button>

              <a
                href={RESTAURANT_INFO.phone.telUrl}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-[#263D32] bg-white border border-[#E5DFD2] rounded-md"
              >
                <PhoneCall className="w-4 h-4 text-[#D0B787]" />
                Call {RESTAURANT_INFO.phone.display}
              </a>

              <p className="text-[11px] text-center text-[#77786F] pt-2">
                387 Barking Road, East Ham, London E6 2JT
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
