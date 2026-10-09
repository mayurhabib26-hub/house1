# Pista House London — Official Restaurant Website

> Authentic Hyderabadi Cuisine in East Ham, London.  
> **Address:** 387 Barking Road, East Ham, London, E6 2JT, United Kingdom  
> **Telephone:** 020 8821 9061  
> **Instagram:** [@pistahouselondon](https://www.instagram.com/pistahouselondon/)  
> **Dining Services:** Dine-In · Takeaway · Delivery · Open 7 Days until 11:00 PM

---

## Overview

A modern, high-performance web experience for **Pista House London**. Built with an editorial luxury hospitality aesthetic combining warm ivory backgrounds, sage accents, deep forest-green typography, and champagne-gold detailing.

### Key Features

* **Original Charminar Crest & Branding**: Scalable vector crest featuring the iconic Charminar monument, ornate filigree medallion, and official brand typography.
* **Hero Experience**: Two-column layout with authentic culinary photography, direct telephone ordering, and local East Ham trust indicators.
* **Signature Dishes**: Dedicated highlights for Hyderabadi Dum Biryani, Royal Mandi, World-Famous Haleem, Charcoal Kebabs, Irani Chai, and Nizami Desserts.
* **Interactive Menu**: Category-segmented menu navigation (Biryani, Mandi, Haleem, Starters & Kebabs, Beverages, Desserts) with dietary tags and instant ordering prompts.
* **Our Story**: Cultural narrative celebrating authentic Nizami recipes and London hospitality.
* **Why Visit Us**: 4-pillar showcase with icons representing traditional recipes, flavours, dining formats, and family gathering spaces.
* **Visual Gallery & Lightbox**: Editorial photo showcase with full-screen accessible lightbox modal (keyboard navigation, next/previous, escape to close) and verified Instagram link.
* **Table Reservation & Order Modal**: Multi-tab dialog supporting direct telephone calls (`020 8821 9061`), table reservation enquiries with field validation, and takeaway collection details.
* **Location & Contact**: Interactive Google Maps embed for 387 Barking Road and an enquiry contact form with client-side validation.
* **Scroll Motion & Micro-interactions**: Smooth progress indicator, viewport scroll reveals (`motion`), and hover effects.
* **Mobile Action Bar**: Discreet fixed bottom action bar on mobile devices providing one-touch access to **Call Order**, **Directions**, and **Order / Table**.
* **SEO & Local Search**: Schema.org `Restaurant` JSON-LD structured data, OpenGraph cards, Twitter cards, `robots.txt`, and `sitemap.xml`.

---

## Tech Stack

* **Framework**: React 19 + TypeScript + Vite
* **Styling**: Tailwind CSS v4
* **Animations**: Motion (`motion/react`)
* **Icons**: Lucide React
* **Typography**: Playfair Display (Serif) + Plus Jakarta Sans (Sans)

---

## Getting Started

### Prerequisites

* Node.js 18+
* npm or pnpm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/pista-house-london.git
cd pista-house-london

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be running locally at `http://localhost:3000`.

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## Directory Structure

```
pista-house-london/
├── index.html              # HTML entry point with Schema.org & SEO metadata
├── public/                 # Static assets, robots.txt, sitemap.xml, images
│   ├── images/             # Packaged high-resolution food & ambiance photography
│   ├── robots.txt          # SEO crawler rules
│   └── sitemap.xml         # XML sitemap
├── src/
│   ├── assets/images/      # Source food photography
│   ├── components/         # Modular React components
│   │   ├── Navbar.tsx      # Sticky top bar with scroll progress indicator
│   │   ├── Hero.tsx        # Hero showcase with call-to-action
│   │   ├── SignatureDishes.tsx # 6 signature dish cards
│   │   ├── OurStory.tsx    # Editorial culinary heritage
│   │   ├── MenuSection.tsx # Interactive segmented menu
│   │   ├── WhyVisitUs.tsx  # 4 feature pillars
│   │   ├── Gallery.tsx     # Photo gallery with lightbox modal
│   │   ├── Testimonials.tsx# Guest community and Google reviews link
│   │   ├── ContactSection.tsx # Map embed, location card & enquiry form
│   │   ├── Footer.tsx      # Forest green footer with branding & links
│   │   ├── MobileActionBar.tsx # Fixed mobile action bar
│   │   ├── PistaHouseLogo.tsx  # Authentic Charminar SVG crest
│   │   ├── ReservationAndOrderModal.tsx # Multi-tab order & booking dialog
│   │   └── ScrollReveal.tsx # Reusable viewport motion component
│   ├── data/               # Structured data files
│   │   ├── restaurantInfo.ts # Verified address, phone, hours & map links
│   │   ├── menuData.ts       # Structured dishes, prices, and categories
│   │   └── galleryData.ts    # Curated gallery items & captions
│   ├── App.tsx             # Root application component
│   ├── main.tsx            # React DOM mounting
│   └── index.css           # Tailwind CSS imports & theme tokens
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## License

All rights reserved © Pista House London.
