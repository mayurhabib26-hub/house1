export interface MenuItem {
  id: string;
  name: string;
  category: 'biryani' | 'mandi' | 'haleem' | 'kebabs' | 'beverages' | 'desserts';
  description: string;
  price?: string;
  dietary?: ('Halal' | 'Vegetarian' | 'Chef Special' | 'Signature')[];
  image?: string;
  serves?: string;
}

export interface MenuCategory {
  id: 'biryani' | 'mandi' | 'haleem' | 'kebabs' | 'beverages' | 'desserts';
  title: string;
  tagline: string;
  description: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'biryani',
    title: 'Hyderabadi Biryani',
    tagline: 'Sealed & Dum Cooked to Perfection',
    description: 'Aged long-grain basmati rice layered with succulent marinated meat, fragrant saffron, and royal spices, slow-cooked in traditional handis.',
  },
  {
    id: 'mandi',
    title: 'Royal Mandi',
    tagline: 'Arabian Heritage Feast',
    description: 'Fragrant spiced rice topped with tender roasted chicken or lamb, toasted dry fruits, served with tangy tomato dakous and cool raita.',
  },
  {
    id: 'haleem',
    title: 'Signature Haleem',
    tagline: 'World-Renowned Nizami Delicacy',
    description: 'Slow-simmered for hours with meat, lentils, pounded wheat, and aromatic spices until velvety smooth, finished with golden birista and mint.',
  },
  {
    id: 'kebabs',
    title: 'Starters & Kebabs',
    tagline: 'Charcoal Grilled & Sizzling',
    description: 'Marinated in yogurt, ground spices, and fresh herbs, char-grilled to tender perfection over glowing coals.',
  },
  {
    id: 'beverages',
    title: 'Beverages & Irani Chai',
    tagline: 'Authentic Hyderabadi Café Brews',
    description: 'Rich, creamy Irani tea brewed the traditional way, paired with Osmania biscuits, plus chilled refreshing fruit lassis.',
  },
  {
    id: 'desserts',
    title: 'Royal Desserts',
    tagline: 'Sweet Nizami Indulgence',
    description: 'Decadent Hyderabadi sweets including Shahi Tukda, stewed Qubani ka Meetha, and warm milk puddings.',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Biryani
  {
    id: 'b1',
    name: 'Special Hyderabadi Mutton Dum Biryani',
    category: 'biryani',
    description: 'Tender baby mutton marinated in traditional Hyderabadi spices, layered with saffron basmati rice and slow-cooked in sealed dum. Served with mirchi ka salan and raita.',
    price: '£12.95',
    dietary: ['Halal', 'Signature'],
    image: '/src/assets/images/hero_hyderabadi_dum_biryani_1791539413189.jpg',
    serves: '1 person',
  },
  {
    id: 'b2',
    name: 'Hyderabadi Chicken Dum Biryani',
    category: 'biryani',
    description: 'Classic Hyderabad recipe with tender bone-in chicken pieces infused with ginger, garlic, mint, and whole spices under layers of fragrant basmati rice.',
    price: '£10.95',
    dietary: ['Halal', 'Chef Special'],
    serves: '1 person',
  },
  {
    id: 'b3',
    name: 'Boneless Chicken 65 Biryani',
    category: 'biryani',
    description: 'Crispy, spiced Hyderabadi Chicken 65 tossed with curry leaves and green chilies, layered over aromatic biryani rice.',
    price: '£11.95',
    dietary: ['Halal'],
    serves: '1 person',
  },
  {
    id: 'b4',
    name: 'Subz Dum Biryani (Vegetable)',
    category: 'biryani',
    description: 'Farm-fresh seasonal vegetables, paneer cubes, and aromatic herbs slow-cooked on dum with fragrant saffron basmati rice.',
    price: '£9.50',
    dietary: ['Vegetarian'],
    serves: '1 person',
  },

  // Mandi
  {
    id: 'm1',
    name: 'Royal Lamb Shank Mandi Platter',
    category: 'mandi',
    description: 'Slow-roasted, fork-tender spiced lamb shank served over a grand platter of smoke-infused Mandi basmati rice, topped with roasted cashews and raisins.',
    price: '£18.50',
    dietary: ['Halal', 'Signature'],
    image: '/src/assets/images/dish_hyderabadi_mandi_1791539424987.jpg',
    serves: '1–2 persons',
  },
  {
    id: 'm2',
    name: 'Roasted Chicken Mandi',
    category: 'mandi',
    description: 'Whole-marinated tender chicken roasted to golden crisp skin, resting on aromatic spiced rice with tomato dakous salsa and mild yogurt garlic sauce.',
    price: '£13.95',
    dietary: ['Halal'],
    serves: '1–2 persons',
  },
  {
    id: 'm3',
    name: 'Pista House Grand Family Mandi',
    category: 'mandi',
    description: 'A celebratory sharing feast featuring a combination of roasted lamb pieces, chicken mandi, toasted nuts, hard-boiled eggs, and house dips.',
    price: '£34.00',
    dietary: ['Halal', 'Chef Special'],
    serves: '3–4 persons',
  },

  // Haleem
  {
    id: 'h1',
    name: 'Pista House Signature Mutton Haleem',
    category: 'haleem',
    description: 'The world-famous Pista House recipe: slow-cooked for 10 hours with prime mutton, broken wheat, lentils, and pure ghee. Garnished with golden fried onions, ginger slivers, and fresh mint.',
    price: '£10.50',
    dietary: ['Halal', 'Signature'],
    image: '/src/assets/images/dish_signature_haleem_1791539434981.jpg',
    serves: '1 person',
  },
  {
    id: 'h2',
    name: 'Shahi Special Haleem with Roasted Cashews',
    category: 'haleem',
    description: 'Velvety mutton haleem enriched with pure desi ghee, generously topped with crisp whole cashews, fresh coriander, and lime wedge.',
    price: '£11.95',
    dietary: ['Halal', 'Chef Special'],
    serves: '1 person',
  },

  // Kebabs
  {
    id: 'k1',
    name: 'Hyderabadi Lamb Seekh Kebabs',
    category: 'kebabs',
    description: 'Finely minced spiced lamb blended with fresh coriander, mint, green chilies, and roasted cumin, skewered and charred over embers.',
    price: '£9.95',
    dietary: ['Halal', 'Chef Special'],
    image: '/src/assets/images/dish_grilled_kebabs_1791539445523.jpg',
    serves: '4 skewers',
  },
  {
    id: 'k2',
    name: 'Murgh Malai Boti',
    category: 'kebabs',
    description: 'Boneless chicken cubes marinated in creamy hung yogurt, mild green cardamom, garlic, and cheese, char-grilled to melt-in-mouth tenderness.',
    price: '£8.95',
    dietary: ['Halal'],
    serves: '6 pieces',
  },
  {
    id: 'k3',
    name: 'Authentic Hyderabadi Chicken 65',
    category: 'kebabs',
    description: 'Tender marinated chicken bites crisp-fried and tossed in a tangy tempered sauce of fresh curry leaves, mustard seeds, and yogurt.',
    price: '£8.50',
    dietary: ['Halal', 'Signature'],
    serves: 'Starter portion',
  },
  {
    id: 'k4',
    name: 'Tandoori Paneer Tikka',
    category: 'kebabs',
    description: 'Cubes of cottage cheese, bell peppers, and red onions marinated in spiced mustard oil yogurt and roasted in the clay oven.',
    price: '£8.00',
    dietary: ['Vegetarian'],
    serves: 'Starter portion',
  },

  // Beverages
  {
    id: 'bev1',
    name: 'Authentic Hyderabadi Irani Chai',
    category: 'beverages',
    description: 'Brewed with slow-simmered rich condensed milk and aromatic tea decoction, creating a creamy froth. Served traditionally.',
    price: '£3.00',
    dietary: ['Vegetarian', 'Signature'],
    image: '/src/assets/images/dish_irani_chai_dessert_1791539457004.jpg',
  },
  {
    id: 'bev2',
    name: 'Irani Chai with Osmania Biscuits (Pair)',
    category: 'beverages',
    description: 'Cup of hot velvety Irani tea served alongside two traditional sweet-and-salty Hyderabadi Osmania biscuits.',
    price: '£3.95',
    dietary: ['Vegetarian'],
  },
  {
    id: 'bev3',
    name: 'Mango Lassi',
    category: 'beverages',
    description: 'Thick creamy yogurt blended with sweet Alphonso mango pulp and a pinch of green cardamom.',
    price: '£4.25',
    dietary: ['Vegetarian'],
  },
  {
    id: 'bev4',
    name: 'Rooh Afza Royal Sharbat',
    category: 'beverages',
    description: 'Traditional refreshing rose syrup beverage served chilled with sweet basil seeds (sabja) and cold milk.',
    price: '£3.75',
    dietary: ['Vegetarian'],
  },

  // Desserts
  {
    id: 'd1',
    name: 'Shahi Tukda',
    category: 'desserts',
    description: 'Crisp ghee-fried bread triangles soaked in fragrant saffron-infused sugar syrup, topped with rich thickened rabri, pistachios, and almonds.',
    price: '£5.95',
    dietary: ['Vegetarian', 'Signature'],
    image: '/src/assets/images/dish_irani_chai_dessert_1791539457004.jpg',
  },
  {
    id: 'd2',
    name: 'Qubani Ka Meetha with Fresh Cream',
    category: 'desserts',
    description: 'Iconic Hyderabadi dessert of sun-dried apricots slow-simmered with sugar and apricot kernels, served warm with chilled double cream.',
    price: '£6.50',
    dietary: ['Vegetarian', 'Chef Special'],
  },
  {
    id: 'd3',
    name: 'Double Ka Meetha',
    category: 'desserts',
    description: 'Classic Hyderabad wedding sweet made with bread, condensed milk, saffron, cardamom, and toasted cashews.',
    price: '£5.50',
    dietary: ['Vegetarian'],
  },
];
