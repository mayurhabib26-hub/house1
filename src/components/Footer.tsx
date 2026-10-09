import React from 'react';
import { PistaHouseLogo } from './PistaHouseLogo';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { MapPin, Phone, Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#263D32] text-[#F5F1E8] border-t border-[#D0B787]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F5F1E8]/10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <PistaHouseLogo size="lg" variant="dark" />
              </div>

              <p className="font-serif italic text-base text-[#D0B787] mb-3">
                “Authentic Hyderabadi Flavours in East Ham.”
              </p>

              <p className="text-xs sm:text-sm text-[#F5F1E8]/80 leading-relaxed max-w-sm mb-6">
                From aromatic Hyderabadi Dum Biryani and celebratory Arabian Mandi to world-renowned Haleem and frothy Irani chai, welcoming London with authentic Nizami hospitality.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={RESTAURANT_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-[#D0B787]/40 text-[#D0B787] hover:bg-[#D0B787] hover:text-[#263D32] transition-colors"
                  aria-label="Pista House London on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={RESTAURANT_INFO.phone.telUrl}
                  className="p-2.5 rounded-full bg-white/5 border border-[#D0B787]/40 text-[#D0B787] hover:bg-[#D0B787] hover:text-[#263D32] transition-colors"
                  aria-label="Call Pista House London"
                >
                  <Phone className="w-4 h-4" />
                </a>

                <a
                  href={RESTAURANT_INFO.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-[#D0B787]/40 text-[#D0B787] hover:bg-[#D0B787] hover:text-[#263D32] transition-colors"
                  aria-label="Directions on Google Maps"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D0B787] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F5F1E8]/80">
              <li>
                <a href="#home" className="hover:text-[#D0B787] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D0B787] transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-[#D0B787] transition-colors">
                  Signatures
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#D0B787] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D0B787] transition-colors">
                  Food Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D0B787] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Menu Highlights Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D0B787] mb-4">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F5F1E8]/80">
              <li>
                <a href="#menu" className="hover:text-[#D0B787] transition-colors">
                  Dum Biryani
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D0B787] transition-colors">
                  Royal Mandi
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D0B787] transition-colors">
                  Signature Haleem
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D0B787] transition-colors">
                  Charcoal Kebabs
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D0B787] transition-colors">
                  Irani Chai
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D0B787] transition-colors">
                  Shahi Desserts
                </a>
              </li>
            </ul>
          </div>

          {/* Restaurant Details & Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D0B787] mb-4">
              Visit Pista House
            </h4>
            <div className="text-xs sm:text-sm text-[#F5F1E8]/80 space-y-3">
              <p>
                <strong className="text-white block font-medium">Pista House London</strong>
                387 Barking Road, East Ham,<br />
                London, E6 2JT, United Kingdom
              </p>

              <div>
                <span className="text-[11px] text-[#D0B787] uppercase tracking-wider block">Telephone</span>
                <a href={RESTAURANT_INFO.phone.telUrl} className="hover:text-[#D0B787] text-white font-medium">
                  {RESTAURANT_INFO.phone.display}
                </a>
              </div>

              <div>
                <span className="text-[11px] text-[#D0B787] uppercase tracking-wider block">Dining Hours</span>
                <p>{RESTAURANT_INFO.hours.summary}</p>
              </div>

              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D0B787] hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Driving & Transit Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F1E8]/60">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; {currentYear} {RESTAURANT_INFO.name}. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>East Ham, London</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#D0B787] hover:text-[#F5F1E8] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
