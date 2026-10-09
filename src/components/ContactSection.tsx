import React, { useState } from 'react';
import { MapPin, Phone, Instagram, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { ScrollReveal } from './ScrollReveal';
import { motion, useReducedMotion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    enquiryType: 'General Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.contact.trim()) {
      errs.contact = 'Please enter your phone number or email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a short message or enquiry details.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate sending enquiry to restaurant desk
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        contact: '',
        enquiryType: 'General Enquiry',
        message: '',
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#F5F1E8] border-b border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#77786F] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
            <span>Find Us & Get in Touch</span>
            <span className="w-5 h-[1.5px] bg-[#D0B787]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263D32] tracking-tight mb-4 text-balance">
            Visit Us in East Ham
          </h2>

          <p className="text-base sm:text-lg text-[#77786F] font-light leading-relaxed">
            Conveniently located on Barking Road. Join us for lunch, dinner, or pick up your hot takeaway.
          </p>
        </ScrollReveal>

        {/* 2-Column Content: Location Details + Interactive Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Location Card & Interactive Map */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-xl border border-[#E5DFD2] p-8 shadow-xs">
            <ScrollReveal delay={0.1}>
              <h3 className="font-serif text-2xl font-bold text-[#263D32] mb-6">
                Restaurant Location & Hours
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#F5F1E8] text-[#263D32] shrink-0 border border-[#E5DFD2]">
                    <MapPin className="w-5 h-5 text-[#263D32]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#77786F]">Address</h4>
                    <p className="font-serif text-base font-bold text-[#263D32] mt-0.5">
                      {RESTAURANT_INFO.name}
                    </p>
                    <p className="text-sm text-[#333832]/85">
                      {RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.neighborhood}
                    </p>
                    <p className="text-sm text-[#333832]/85">
                      {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.postcode}, {RESTAURANT_INFO.address.country}
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#F5F1E8] text-[#263D32] shrink-0 border border-[#E5DFD2]">
                    <Phone className="w-5 h-5 text-[#263D32]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#77786F]">Telephone</h4>
                    <a
                      href={RESTAURANT_INFO.phone.telUrl}
                      className="font-serif text-lg font-bold text-[#263D32] hover:text-[#D0B787] transition-colors block mt-0.5"
                    >
                      {RESTAURANT_INFO.phone.display}
                    </a>
                    <span className="text-xs text-[#77786F]">Available for orders, takeaway & reservations</span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#F5F1E8] text-[#263D32] shrink-0 border border-[#E5DFD2]">
                    <Clock className="w-5 h-5 text-[#263D32]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#77786F]">Opening Hours</h4>
                    <p className="font-semibold text-sm text-[#263D32] mt-0.5">
                      {RESTAURANT_INFO.hours.summary}
                    </p>
                    {RESTAURANT_INFO.hours.schedule.map((line, idx) => (
                      <p key={idx} className="text-xs text-[#77786F] mt-0.5">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#F5F1E8] text-[#263D32] shrink-0 border border-[#E5DFD2]">
                    <Instagram className="w-5 h-5 text-[#263D32]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#77786F]">Social Media</h4>
                    <a
                      href={RESTAURANT_INFO.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#263D32] hover:underline block mt-0.5"
                    >
                      {RESTAURANT_INFO.instagram.handle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#E5DFD2] flex flex-wrap gap-3">
                <motion.a
                  href={RESTAURANT_INFO.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#F5F1E8] bg-[#263D32] rounded-md hover:bg-[#1C2E25] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#D0B787]" />
                  <span>Get Directions (Google Maps)</span>
                </motion.a>

                <motion.a
                  href={RESTAURANT_INFO.phone.telUrl}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#263D32] bg-white border border-[#E5DFD2] rounded-md hover:border-[#D0B787] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#263D32]" />
                  <span>Call {RESTAURANT_INFO.phone.display}</span>
                </motion.a>
              </div>
            </ScrollReveal>

            {/* Embedded Map */}
            <ScrollReveal delay={0.2} className="mt-8 rounded-lg overflow-hidden border border-[#E5DFD2] aspect-16/9 w-full bg-[#E5DFD2]/40 relative">
              <iframe
                title="Pista House London Map Location"
                src={RESTAURANT_INFO.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </ScrollReveal>
          </div>

          {/* Right Column: Enquiry / Message Form */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-[#E5DFD2] p-8 shadow-xs flex flex-col justify-between">
            <ScrollReveal delay={0.15}>
              <h3 className="font-serif text-2xl font-bold text-[#263D32] mb-2">
                Send an Enquiry
              </h3>
              <p className="text-sm text-[#77786F] mb-6">
                Have a question about large party bookings, catering, or today&apos;s specials? Leave a message and our team will get in touch.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-[#F5F1E8] rounded-xl border border-[#A7B3A0] text-center my-8">
                  <div className="w-12 h-12 rounded-full bg-[#263D32] text-[#D0B787] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#263D32] mb-1">
                    Thank You for Your Enquiry
                  </h4>
                  <p className="text-sm text-[#77786F] max-w-md mx-auto">
                    Your message has been received by Pista House London. For urgent enquiries or immediate table reservations, please feel free to call us directly on{' '}
                    <a href={RESTAURANT_INFO.phone.telUrl} className="font-semibold text-[#263D32] underline">
                      020 8821 9061
                    </a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex px-4 py-2 text-xs font-semibold text-[#263D32] border border-[#E5DFD2] rounded-md hover:bg-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#263D32] mb-1">
                      Your Name <span className="text-rose-700">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Khan"
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#F5F1E8]/40 border rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263D32] transition-colors ${
                        errors.name ? 'border-rose-500 bg-rose-50/20' : 'border-[#E5DFD2]'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone / Email field */}
                  <div>
                    <label htmlFor="contact-info" className="block text-xs font-semibold uppercase tracking-wider text-[#263D32] mb-1">
                      Phone Number or Email <span className="text-rose-700">*</span>
                    </label>
                    <input
                      id="contact-info"
                      type="text"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="e.g. 07123 456789 or email@example.com"
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#F5F1E8]/40 border rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263D32] transition-colors ${
                        errors.contact ? 'border-rose-500 bg-rose-50/20' : 'border-[#E5DFD2]'
                      }`}
                      aria-invalid={!!errors.contact}
                      aria-describedby={errors.contact ? 'contact-error' : undefined}
                    />
                    {errors.contact && (
                      <p id="contact-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.contact}</span>
                      </p>
                    )}
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label htmlFor="enquiryType" className="block text-xs font-semibold uppercase tracking-wider text-[#263D32] mb-1">
                      Enquiry Nature
                    </label>
                    <select
                      id="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F1E8]/40 border border-[#E5DFD2] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263D32]"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Table Reservation">Table Reservation Enquiry</option>
                      <option value="Takeaway / Pre-Order">Takeaway / Pre-Order</option>
                      <option value="Catering & Large Orders">Catering & Event Orders</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#263D32] mb-1">
                      Your Message <span className="text-rose-700">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details such as date, preferred time, guest count, or dishes of interest..."
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#F5F1E8]/40 border rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263D32] transition-colors ${
                        errors.message ? 'border-rose-500 bg-rose-50/20' : 'border-[#E5DFD2]'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#F5F1E8] bg-[#263D32] rounded-md hover:bg-[#1C2E25] transition-all disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D0B787]"
                    >
                      {isSubmitting ? (
                        <span>Sending Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#D0B787]" />
                          <span>Submit Enquiry</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </ScrollReveal>

            <div className="pt-4 mt-6 border-t border-[#E5DFD2] text-[11px] text-[#77786F]">
              Direct phone enquiries are answered during restaurant operating hours: <strong>020 8821 9061</strong>.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
