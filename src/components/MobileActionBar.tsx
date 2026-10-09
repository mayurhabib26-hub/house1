import React from 'react';
import { Phone, MapPin, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

interface MobileActionBarProps {
  onOpenOrderModal: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-[#263D32]/95 backdrop-blur-md border-t border-[#D0B787]/40 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={RESTAURANT_INFO.phone.telUrl}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-[#1C2E25] text-[#F5F1E8] border border-[#D0B787]/30 text-center active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#D0B787] mb-0.5" />
          <span className="text-[11px] font-semibold whitespace-nowrap">Call Order</span>
        </a>

        {/* Directions Button */}
        <a
          href={RESTAURANT_INFO.maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-[#1C2E25] text-[#F5F1E8] border border-[#D0B787]/30 text-center active:scale-95 transition-transform"
        >
          <MapPin className="w-4 h-4 text-[#D0B787] mb-0.5" />
          <span className="text-[11px] font-semibold whitespace-nowrap">Directions</span>
        </a>

        {/* Order / Table Enquiry Button */}
        <button
          type="button"
          onClick={onOpenOrderModal}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-[#D0B787] text-[#263D32] text-center font-bold active:scale-95 transition-transform"
        >
          <Utensils className="w-4 h-4 text-[#263D32] mb-0.5" />
          <span className="text-[11px] font-bold whitespace-nowrap">Order / Table</span>
        </button>
      </div>
    </div>
  );
};
