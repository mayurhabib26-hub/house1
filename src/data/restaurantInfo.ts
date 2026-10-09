export interface RestaurantInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    postcode: string;
    country: string;
    full: string;
  };
  phone: {
    display: string;
    telUrl: string;
  };
  instagram: {
    handle: string;
    url: string;
  };
  maps: {
    directionsUrl: string;
    embedUrl: string;
  };
  hours: {
    summary: string;
    schedule: string[];
  };
  services: string[];
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Pista House London",
  tagline: "Authentic Hyderabadi Flavours in East Ham",
  address: {
    street: "387 Barking Road",
    neighborhood: "East Ham",
    city: "London",
    postcode: "E6 2JT",
    country: "United Kingdom",
    full: "387 Barking Road, East Ham, London, E6 2JT, United Kingdom",
  },
  phone: {
    display: "020 8821 9061",
    telUrl: "tel:+442088219061",
  },
  instagram: {
    handle: "@pistahouselondon",
    url: "https://www.instagram.com/pistahouselondon/",
  },
  maps: {
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=387+Barking+Road,+East+Ham,+London+E6+2JT",
    embedUrl: "https://maps.google.com/maps?q=387+Barking+Road,+East+Ham,+London+E6+2JT&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  hours: {
    summary: "Open 7 Days · Until 11:00 PM",
    schedule: [
      "Monday – Sunday: 12:00 PM – 11:00 PM",
      "Special Ramadan & Festival Hours may vary",
    ],
  },
  services: [
    "Dine-In Experience",
    "Fresh Takeaway",
    "Delivery Services",
  ],
};
