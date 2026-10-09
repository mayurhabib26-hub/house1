export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Authentic Hyderabadi Dum Biryani',
    category: 'Biryani Specialties',
    image: '/images/hero_hyderabadi_dum_biryani_1791539413189.jpg',
    alt: 'Traditional copper pot of Hyderabadi Dum Biryani with saffron basmati rice, mint, and fresh raita',
    caption: 'Slow-cooked on dum with marinated meats, aged basmati rice, and royal nizami spices.',
  },
  {
    id: 'g2',
    title: 'Royal Mandi Platter',
    category: 'Arabian Mandi',
    image: '/images/dish_hyderabadi_mandi_1791539424987.jpg',
    alt: 'Grand brass platter of Hyderabadi chicken and lamb Mandi with spiced rice and toasted nuts',
    caption: 'A festive sharing platter featuring spiced roasted meats, nuts, and traditional dakous dip.',
  },
  {
    id: 'g3',
    title: 'World-Renowned Signature Haleem',
    category: 'Heritage Haleem',
    image: '/images/dish_signature_haleem_1791539434981.jpg',
    alt: 'Bowl of velvety Hyderabadi mutton Haleem garnished with fried onions, ginger slivers, and cashews',
    caption: 'The celebrated Pista House delicacy, slow-simmered to velvety richness with pure ghee.',
  },
  {
    id: 'g4',
    title: 'Sizzling Charcoal Kebabs',
    category: 'Grilled Kebabs',
    image: '/images/dish_grilled_kebabs_1791539445523.jpg',
    alt: 'Cast iron sizzling platter of seekh kebabs and chicken boti with mint chutney and charred lemon',
    caption: 'Char-grilled over red-hot coals, served piping hot with fresh mint raita and red onions.',
  },
  {
    id: 'g5',
    title: 'Traditional Irani Chai & Osmania',
    category: 'Chai & Café',
    image: '/images/dish_irani_chai_dessert_1791539457004.jpg',
    alt: 'Glass of frothy Hyderabadi Irani chai alongside Osmania biscuits and Shahi Tukda dessert',
    caption: 'The true taste of Hyderabad afternoons: velvety rich tea and crumbly Osmania biscuits.',
  },
];
