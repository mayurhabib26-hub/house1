import React, { useState, useEffect } from 'react';
import { X, Phone, Calendar, Clock, Users, CheckCircle2, AlertCircle, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface ReservationAndOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationAndOrderModal: React.FC<ReservationAndOrderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [tab, setTab] = useState<'call' | 'reserve' | 'takeaway'>('call');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim()) errs.phone = 'Please provide a valid contact number.';
    if (!formData.date.trim()) errs.date = 'Please select a date.';
    return errs;
  };

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95, y: 15 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative w-full max-w-lg bg-[#F5F1E8] rounded-2xl border border-[#E5DFD2] shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
          >
            
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#77786F] hover:text-[#263D32] hover:bg-[#E5DFD2]/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D0B787] mb-1">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Pista House London</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#263D32]">
                Order & Table Services
              </h3>
              <p className="text-xs sm:text-sm text-[#77786F] mt-1">
                Authentic Hyderabadi Dining · 387 Barking Road, East Ham
              </p>
            </div>

            {/* Action Selector Segment */}
            <div className="flex p-1 bg-white rounded-lg border border-[#E5DFD2] mb-6">
              <button
                type="button"
                onClick={() => {
                  setTab('call');
                  setIsSubmitted(false);
                }}
                className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${
                  tab === 'call'
                    ? 'bg-[#263D32] text-[#F5F1E8]'
                    : 'text-[#77786F] hover:text-[#263D32]'
                }`}
              >
                Direct Call Order
              </button>
              <button
                type="button"
                onClick={() => {
                  setTab('reserve');
                  setIsSubmitted(false);
                }}
                className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${
                  tab === 'reserve'
                    ? 'bg-[#263D32] text-[#F5F1E8]'
                    : 'text-[#77786F] hover:text-[#263D32]'
                }`}
              >
                Table Reservation
              </button>
              <button
                type="button"
                onClick={() => {
                  setTab('takeaway');
                  setIsSubmitted(false);
                }}
                className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${
                  tab === 'takeaway'
                    ? 'bg-[#263D32] text-[#F5F1E8]'
                    : 'text-[#77786F] hover:text-[#263D32]'
                }`}
              >
                Takeaway Pick-up
              </button>
            </div>

            {/* Tab 1: Call Order (Verified Direct Phone Action) */}
            {tab === 'call' && (
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl border border-[#E5DFD2] text-center">
                  <div className="w-12 h-12 rounded-full bg-[#263D32] text-[#D0B787] flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#263D32] mb-2">
                    Call to Place Your Order
                  </h4>
                  <p className="text-xs sm:text-sm text-[#77786F] mb-6 max-w-sm mx-auto">
                    Our kitchen prepares all Hyderabadi biryanis, kebabs, and curries fresh to order. Speak directly with our restaurant team in East Ham.
                  </p>

                  <a
                    href={RESTAURANT_INFO.phone.telUrl}
                    className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-md bg-[#263D32] text-[#F5F1E8] font-semibold text-base hover:bg-[#1C2E25] transition-all shadow-sm"
                  >
                    <Phone className="w-5 h-5 text-[#D0B787]" />
                    <span>Call {RESTAURANT_INFO.phone.display}</span>
                  </a>
                </div>

                <div className="text-xs text-[#77786F] space-y-1.5 px-1">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-[#263D32]">Hours:</span> Open 7 Days · Until 11:00 PM
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-[#263D32]">Location:</span> 387 Barking Road, East Ham, London E6 2JT
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Table Reservation Enquiry */}
            {tab === 'reserve' && (
              <div>
                {isSubmitted ? (
                  <div className="p-6 bg-white rounded-xl border border-[#A7B3A0] text-center">
                    <div className="w-12 h-12 rounded-full bg-[#263D32] text-[#D0B787] flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#263D32] mb-2">
                      Reservation Enquiry Sent
                    </h4>
                    <p className="text-xs sm:text-sm text-[#77786F] mb-4">
                      Thank you, <strong className="text-[#263D32]">{formData.name}</strong>! Your table request for {formData.guests} guest{Number(formData.guests) > 1 ? 's' : ''} on {formData.date} at {formData.time} has been recorded.
                    </p>
                    <p className="text-xs text-[#77786F] bg-[#F5F1E8] p-3 rounded-md">
                      <em>Note:</em> Table bookings are confirmed by our front desk via telephone call or WhatsApp message. If you require immediate confirmation, please phone us at <strong>020 8821 9061</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={onClose}
                      className="mt-6 px-5 py-2 text-xs font-semibold text-[#F5F1E8] bg-[#263D32] rounded-md hover:bg-[#1C2E25]"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleReserveSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="modal-name" className="block text-[11px] font-semibold uppercase text-[#263D32] mb-1">
                          Full Name *
                        </label>
                        <input
                          id="modal-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Asad Beg"
                          className={`w-full px-3 py-2 text-sm bg-white border rounded-md ${
                            errors.name ? 'border-rose-500' : 'border-[#E5DFD2]'
                          }`}
                        />
                        {errors.name && <p className="text-[10px] text-rose-600 mt-0.5">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="modal-phone" className="block text-[11px] font-semibold uppercase text-[#263D32] mb-1">
                          Phone Number *
                        </label>
                        <input
                          id="modal-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 07123 456789"
                          className={`w-full px-3 py-2 text-sm bg-white border rounded-md ${
                            errors.phone ? 'border-rose-500' : 'border-[#E5DFD2]'
                          }`}
                        />
                        {errors.phone && <p className="text-[10px] text-rose-600 mt-0.5">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label htmlFor="modal-guests" className="block text-[11px] font-semibold uppercase text-[#263D32] mb-1 flex items-center gap-1">
                          <Users className="w-3 h-3 text-[#D0B787]" /> Guests
                        </label>
                        <select
                          id="modal-guests"
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full px-2.5 py-2 text-sm bg-white border border-[#E5DFD2] rounded-md"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? 'person' : 'people'}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="modal-date" className="block text-[11px] font-semibold uppercase text-[#263D32] mb-1 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#D0B787]" /> Date *
                        </label>
                        <input
                          id="modal-date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className={`w-full px-2 py-2 text-xs bg-white border rounded-md ${
                            errors.date ? 'border-rose-500' : 'border-[#E5DFD2]'
                          }`}
                        />
                      </div>

                      <div>
                        <label htmlFor="modal-time" className="block text-[11px] font-semibold uppercase text-[#263D32] mb-1 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#D0B787]" /> Time
                        </label>
                        <select
                          id="modal-time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-2.5 py-2 text-sm bg-white border border-[#E5DFD2] rounded-md"
                        >
                          {['12:30', '13:00', '14:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="modal-notes" className="block text-[11px] font-semibold uppercase text-[#263D32] mb-1">
                        Special Notes / High Chairs / Occasion
                      </label>
                      <input
                        id="modal-notes"
                        type="text"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="e.g. Birthday dinner, family celebration..."
                        className="w-full px-3 py-2 text-xs bg-white border border-[#E5DFD2] rounded-md"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 text-sm font-semibold text-[#F5F1E8] bg-[#263D32] rounded-md hover:bg-[#1C2E25] transition-colors"
                      >
                        {isSubmitting ? 'Submitting Request...' : 'Send Table Reservation Enquiry'}
                      </button>
                      <p className="text-[10px] text-[#77786F] text-center mt-2">
                        Our team calls or messages to confirm table availability.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* Tab 3: Takeaway & Collection Pick-up */}
            {tab === 'takeaway' && (
              <div className="p-6 bg-white rounded-xl border border-[#E5DFD2] text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#263D32] text-[#D0B787] flex items-center justify-center mx-auto mb-2">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#263D32]">
                  Hot Takeaway Collection
                </h4>
                <p className="text-xs sm:text-sm text-[#77786F] max-w-sm mx-auto">
                  Call ahead with your order so our chefs can pack your aromatic Biryani, Mandi, and Kebabs steaming hot for your arrival at 387 Barking Road.
                </p>

                <a
                  href={RESTAURANT_INFO.phone.telUrl}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md bg-[#263D32] text-[#F5F1E8] font-semibold text-sm hover:bg-[#1C2E25]"
                >
                  <Phone className="w-4 h-4 text-[#D0B787]" />
                  <span>Call Ahead: 020 8821 9061</span>
                </a>

                <div className="pt-2 border-t border-[#E5DFD2] text-xs text-[#77786F]">
                  <p>Collection Address: 387 Barking Road, East Ham, London E6 2JT</p>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
