/**
 * Nut Delicacy — Master Product Catalog, Cart State, Promo Engine & Video Loader
 * Single-Origin Cold Granite Stone-Ground Organic Nut Butters
 */

// Helper to generate 2 packaging tiers for any product:
// 1. 180g Standard Jar with published retail price
// 2. Bulk Order with price on request
function createSizes(price180, price100 = null) {
  const sizes = [];
  if (price100 !== null) {
    sizes.push({ size: "100 ml", label: "100 ml Standard Jar", price: price100, isBulk: false });
  }
  sizes.push({ size: "180 ml", label: "180 ml Standard Jar", price: price180, isBulk: false });
  sizes.push({ size: "Bulk Order", label: "Bulk / Wholesale Order", price: null, isBulk: true, bulkLabel: "Price on Request" });
  return sizes;
}

// Helper to generate packaging tiers for Curated Combos & Sets:
function createComboSizes(price) {
  if (price === null || price === undefined || price === "") {
    return [
      { size: "Combo Set", label: "Custom Selection", price: null, isBulk: true, bulkLabel: "Price on Request" },
      { size: "Bulk Order", label: "Corporate / Bulk Gifting", price: null, isBulk: true, bulkLabel: "Price on Request" }
    ];
  }
  return [
    { size: "Combo Set", label: "Curated Combo Box", price: Number(price), isBulk: false },
    { size: "Bulk Order", label: "Corporate / Bulk Gifting", price: null, isBulk: true, bulkLabel: "Price on Request" }
  ];
}

// ==========================================
// 1. MASTER PRODUCT CATALOG (32 PRODUCTS: 20 SINGLE-ORIGIN + 12 CURATED COMBOS)
// ==========================================
const PRODUCTS = [
  // ----------------------------------------------------
  // SUPER PREMIUM & ARTISAN
  // ----------------------------------------------------
  {
    id: "zafran-gold-butter",
    name: "Zafran Gold Butter",
    slug: "zafran-gold-butter",
    category: "artisan",
    categoryLabel: "Super Premium & Artisan",
    productType: "individual",
    discountEligible: true,
    tag: "Grand Reserve • Royal Saffron",
    subtitle: "Stone-Ground Mamra Almonds & Royal Pistachios Infused with Pure Kashmiri Mongra Saffron.",
    origin: "Terroir: Pampore Saffron & Kashmir Mamra",
    coldMilledTemp: "Milled below 24°C",
    shelfLife: "6 Months",
    hasImages: true,
    images: {
      front: "mockups/zafran-gold-butter/front.webp",
      left: "mockups/zafran-gold-butter/left.webp",
      right: "mockups/zafran-gold-butter/right.webp"
    },
    sizes: createSizes(875, 550),
    ingredients: "100% Mamra Almonds, Royal Pistachios, Pure Kashmiri Mongra Saffron, Green Cardamom.",
    description: "Our crowning masterpiece. Hand-harvested Grade-A Kashmiri Mongra Saffron cold stone-milled into a silky blend of Mamra almonds and royal emerald pistachios. Absolutely no added sugars, preservatives, or palm oil.",
    nutrition: { calories: "585 kcal", protein: "21.2g", fats: "51.4g", carbs: "17.8g" },
    tastingNotes: ["Kashmiri Saffron Floral", "Sweet Mamra Almond", "Royal Pistachio Depth", "Velvety Finish"],
    pills: ["Pure Kashmiri Saffron", "Mamra Almonds", "Cold Stone-Ground", "Zero Palm Oil"]
  },
  {
    id: "hazelnut-chocolate-butter",
    name: "Hazelnut Chocolate Butter",
    slug: "hazelnut-chocolate-butter",
    category: "artisan",
    categoryLabel: "Super Premium & Artisan",
    productType: "individual",
    discountEligible: true,
    tag: "Grand Reserve • 75% Hazelnut Gianduja",
    subtitle: "75% Slow-Roasted Hazelnuts with Single-Origin Dark Cacao. Zero palm oil, zero shortcuts.",
    origin: "Terroir: Black Sea Hazelnuts & Kerala Estate Cacao",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: true,
    images: {
      front: "mockups/hazelnut-chocolate-butter/front.webp",
      left: "mockups/hazelnut-chocolate-butter/left.webp",
      right: "mockups/hazelnut-chocolate-butter/right.webp"
    },
    sizes: createSizes(885, 440),
    ingredients: "75% Whole Roasted Hazelnuts, Single-Origin Dark Cacao, Organic Coconut Blossom Sugar.",
    description: "An authentic Italian Gianduja tribute with an unprecedented 75% hazelnut concentration. Milled on granite stones with pure single-estate cacao and unrefined coconut sugar. Clean, rich, and unforgettable.",
    nutrition: { calories: "610 kcal", protein: "14.5g", fats: "53.2g", carbs: "22.8g" },
    tastingNotes: ["Dark Truffle Cacao", "Warm Roasted Hazelnut", "Toffee Undertones", "Creamy Spread"],
    pills: ["75% Hazelnut Content", "Zero Palm Oil", "Single-Origin Cacao", "Grand Reserve"]
  },
  {
    id: "pistachio-butter",
    name: "Pistachio Butter",
    slug: "pistachio-butter",
    category: "artisan",
    categoryLabel: "Super Premium & Artisan",
    productType: "individual",
    discountEligible: true,
    tag: "Grand Reserve • Crown Jewel",
    subtitle: "100% Royal Emerald Green Pistachios, stone-ground slowly below 28°C. Pure single ingredient.",
    origin: "Terroir: Kerman & Bronte Terroirs",
    coldMilledTemp: "Milled below 24°C",
    shelfLife: "6 Months",
    hasImages: true,
    images: {
      front: "mockups/pistachio-butter/front.webp",
      left: "mockups/pistachio-butter/left.webp",
      right: "mockups/pistachio-butter/right.webp"
    },
    sizes: createSizes(925, 590),
    ingredients: "100% Pure Roasted Royal Emerald Green Pistachios.",
    description: "Crafted exclusively from whole, vibrant emerald-green pistachios gently stone-ground for over 18 hours. Unadulterated luxury in every spoonful with zero added sugars, salt, or oils.",
    nutrition: { calories: "562 kcal", protein: "20.2g", fats: "45.3g", carbs: "27.5g" },
    tastingNotes: ["Vibrant Emerald Pistachio", "Rich Natural Butterfat", "Silky Stone-Ground Finish"],
    pills: ["100% Pure Pistachio", "Zero Palm Oil", "Cold Stone-Milled", "Crown Jewel"]
  },
  {
    id: "hazelnut-butter-pure",
    name: "Hazelnut Butter (100% Pure)",
    slug: "hazelnut-butter-pure",
    category: "artisan",
    categoryLabel: "Super Premium & Artisan",
    productType: "individual",
    discountEligible: true,
    tag: "Grand Reserve • 100% Pure Single Nut",
    subtitle: "100% Golden Roasted Hazelnuts, cold stone-ground without cocoa or sweetener. Pure single nut.",
    origin: "Terroir: Mountain Hazelnut Orchards",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "upcoming products.webp",
      left: "upcoming products.webp",
      right: "upcoming products.webp"
    },
    sizes: createSizes(995, 525),
    ingredients: "100% Slow-Roasted Golden Hazelnuts.",
    description: "Pure roasted golden hazelnuts stone-milled into a fragrant, velvety butter with zero cacao, zero sugar, and zero additives.",
    nutrition: { calories: "628 kcal", protein: "15.0g", fats: "60.8g", carbs: "16.7g" },
    tastingNotes: ["Pure Nutty Aroma", "Natural Sweetness", "Liquid Velvet"],
    pills: ["100% Pure Hazelnut", "Zero Sugar", "Cold Milled", "Coming Soon"]
  },
  {
    id: "macadamia-butter",
    name: "Macadamia Butter",
    slug: "macadamia-butter",
    category: "artisan",
    categoryLabel: "Super Premium & Artisan",
    productType: "individual",
    discountEligible: true,
    tag: "Grand Reserve • Sovereign Nut",
    subtitle: "100% Australian Style Roasted Macadamias, exceptionally buttery and high in monounsaturated fats.",
    origin: "Terroir: Certified Rainforest Macadamia Estates",
    coldMilledTemp: "Milled below 24°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "upcoming products.webp",
      left: "upcoming products.webp",
      right: "upcoming products.webp"
    },
    sizes: createSizes(995),
    ingredients: "100% Slow-Roasted Whole Macadamia Nuts.",
    description: "The world's richest nut butter. Cold-milled gently to preserve its extraordinary monounsaturated fat profile and melt-in-mouth richness.",
    nutrition: { calories: "718 kcal", protein: "7.9g", fats: "75.8g", carbs: "13.8g" },
    tastingNotes: ["Decadent Creaminess", "Buttery Richness", "Subtle Vanilla Tone"],
    pills: ["Keto Supreme", "Velvet Butterfat", "Zero Palm Oil", "Coming Soon"]
  },

  // ----------------------------------------------------
  // CLASSIC NUT BUTTERS
  // ----------------------------------------------------
  {
    id: "almond-butter",
    name: "Almond Butter",
    slug: "almond-butter",
    category: "classics",
    categoryLabel: "Classic Nut Butters",
    productType: "individual",
    discountEligible: true,
    tag: "Artisanal • Cold Granite Milled",
    subtitle: "Californian & Mamra Slow-Roasted whole almonds, stone-ground with skins intact.",
    origin: "Terroir: Kashmir Valley & California",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: true,
    images: {
      front: "mockups/almond-butter/front.webp",
      left: "mockups/almond-butter/left.webp",
      right: "mockups/almond-butter/right.webp"
    },
    sizes: createSizes(385, 250),
    ingredients: "100% Whole Roasted Almonds with Prebiotic Skin Intact.",
    description: "Crafted from slow-roasted whole almonds milled with skin intact on granite stones. Maximizes natural prebiotic dietary fiber, Vitamin E, and clean plant protein.",
    nutrition: { calories: "579 kcal", protein: "21.2g", fats: "49.9g", carbs: "21.6g" },
    tastingNotes: ["Toasted Almond", "Subtle Prebiotic Earthiness", "Silky Crunch Texture"],
    pills: ["Prebiotic Fiber", "Cold Stone-Milled", "Zero Palm Oil", "Vitamin E"]
  },
  {
    id: "cashew-butter",
    name: "Cashew Butter",
    slug: "cashew-butter",
    category: "classics",
    categoryLabel: "Classic Nut Butters",
    productType: "individual",
    discountEligible: true,
    tag: "Artisanal • Velvet Milled",
    subtitle: "100% Whole Roasted Konkan Coast Cashews, ultra-creamy velvety stone-ground texture.",
    origin: "Terroir: Konkan Coast, Maharashtra",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: true,
    images: {
      front: "mockups/cashew-butter/front.webp",
      left: "mockups/cashew-butter/left.webp",
      right: "mockups/cashew-butter/right.webp"
    },
    sizes: createSizes(395, 250),
    ingredients: "100% Whole Roasted Konkan W240 Cashews.",
    description: "Premium large whole cashews from the Konkan coast stone-milled into an ultra-creamy, naturally sweet butter with zero added sugars.",
    nutrition: { calories: "553 kcal", protein: "18.2g", fats: "43.8g", carbs: "30.2g" },
    tastingNotes: ["Natural Sweetness", "Velvety Cream", "Buttery Cashew"],
    pills: ["Naturally Sweet", "Zero Added Sugar", "Cold Milled", "Silky Smooth"]
  },
  {
    id: "cashew-chocolate-butter",
    name: "Cashew Chocolate Butter",
    slug: "cashew-chocolate-butter",
    category: "classics",
    categoryLabel: "Classic Nut Butters",
    productType: "individual",
    discountEligible: true,
    tag: "Gourmet Indulgence",
    subtitle: "Stone-Ground Roasted Cashews folded with single-origin raw cacao.",
    origin: "Terroir: Konkan Coast & Kerala Cacao",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "upcoming products.webp",
      left: "upcoming products.webp",
      right: "upcoming products.webp"
    },
    sizes: createSizes(850, 525),
    ingredients: "Roasted Cashews, Pure Single-Origin Dark Cacao, Organic Coconut Sugar.",
    description: "Freshly roasted whole cashews stone-ground with dark raw cacao and unrefined coconut nectar.",
    nutrition: { calories: "550 kcal", protein: "16.8g", fats: "44.2g", carbs: "28.4g" },
    tastingNotes: ["Dark Chocolate", "Sweet Cashew", "Velvet Finish"],
    pills: ["Zero Palm Oil", "Dark Cacao", "Stone-Ground", "Coming Soon"]
  },
  {
    id: "almond-chocolate-butter",
    name: "Almond Chocolate Butter",
    slug: "almond-chocolate-butter",
    category: "classics",
    categoryLabel: "Classic Nut Butters",
    productType: "individual",
    discountEligible: true,
    tag: "Gourmet Indulgence",
    subtitle: "Stone-Ground Roasted Almonds folded with single-origin raw cacao and organic coconut sugar.",
    origin: "Terroir: Kashmir Almonds & Kerala Cacao",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: true,
    images: {
      front: "mockups/almond-chocolate-butter/front.jpeg",
      left: "mockups/almond-chocolate-butter/left.jpeg",
      right: "mockups/almond-chocolate-butter/right.jpeg"
    },
    sizes: createSizes(455, 250),
    ingredients: "Roasted Almonds, Pure Single-Origin Dark Cacao, Organic Coconut Sugar.",
    description: "Freshly roasted whole almonds stone-ground with dark raw cacao and unrefined coconut nectar.",
    nutrition: { calories: "565 kcal", protein: "17.8g", fats: "46.2g", carbs: "26.4g" },
    tastingNotes: ["Dark Chocolate", "Nutty Almond", "Caramel Finish"],
    pills: ["Zero Palm Oil", "Dark Cacao", "Stone-Ground", "Coming Soon"]
  },
  {
    id: "almond-dark-chocolate-butter",
    name: "Almond Dark Chocolate Butter",
    slug: "almond-dark-chocolate-butter",
    category: "classics",
    categoryLabel: "Classic Nut Butters",
    productType: "individual",
    discountEligible: true,
    tag: "Gourmet • 70% Dark Cacao",
    subtitle: "Slow-Roasted Mamra & Californian Almonds folded with 70% Single-Origin Dark Chocolate.",
    origin: "Terroir: Kashmir Almonds & Kerala Estate Cacao",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "upcoming products.webp",
      left: "upcoming products.webp",
      right: "upcoming products.webp"
    },
    sizes: createSizes(465),
    ingredients: "100% Roasted Whole Almonds, Single-Origin 70% Dark Cacao, Organic Coconut Blossom Sugar.",
    description: "Slow-roasted whole almonds stone-ground with rich 70% single-origin dark chocolate and organic coconut nectar. A deep, decadent, antioxidant-rich spread with zero palm oil.",
    nutrition: { calories: "572 kcal", protein: "18.4g", fats: "47.5g", carbs: "25.1g" },
    tastingNotes: ["Intense Dark Cacao", "Roasted Almond Crunch", "Velvety Dark Ganache"],
    pills: ["70% Dark Cacao", "Zero Palm Oil", "Stone-Ground", "Coming Soon"]
  },
  {
    id: "walnut-almond-butter",
    name: "Walnut Almond Butter",
    slug: "walnut-almond-butter",
    category: "classics",
    categoryLabel: "Classic Nut Butters",
    productType: "individual",
    discountEligible: true,
    tag: "Brain Synergy Dual-Nut",
    subtitle: "50% Cold-Milled Himalayan Snow Walnut + 50% Slow-Roasted Mamra Almond dual stone-ground blend.",
    origin: "Terroir: Kashmir & Himachal Valley",
    coldMilledTemp: "Milled below 25°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "upcoming products.webp",
      left: "upcoming products.webp",
      right: "upcoming products.webp"
    },
    sizes: createSizes(485, 330),
    ingredients: "50% Himalayan Snow Walnuts, 50% Mamra Almonds.",
    description: "A functional dual-nut powerhouse pairing plant Omega-3 fatty acids from Himalayan snow walnuts with high-protein Mamra almonds.",
    nutrition: { calories: "615 kcal", protein: "18.5g", fats: "56.4g", carbs: "17.2g" },
    tastingNotes: ["Rich Walnut Depth", "Crisp Almond Sweetness", "Brain Boosting"],
    pills: ["Plant Omega-3", "Brain Fuel", "Dual-Stone Ground", "Coming Soon"]
  },
  {
    id: "walnut-chocolate-butter",
    name: "Walnut Chocolate Butter",
    slug: "walnut-chocolate-butter",
    category: "classics",
    categoryLabel: "Classic Nut Butters",
    productType: "individual",
    discountEligible: true,
    tag: "Rich Omega Dark Truffle",
    subtitle: "Himalayan Walnuts blended with rich dark artisanal cacao for an unforgettable dessert spread.",
    origin: "Terroir: Himachal Pradesh Walnuts & Single-Estate Cacao",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "upcoming products.webp",
      left: "upcoming products.webp",
      right: "upcoming products.webp"
    },
    sizes: createSizes(525, 270),
    ingredients: "Himalayan Snow Walnuts, Single-Origin Dark Cacao, Coconut Nectar.",
    description: "Deep, earthy Himalayan walnuts unified with single-origin dark cacao for a luxurious guilt-free dessert butter.",
    nutrition: { calories: "605 kcal", protein: "14.2g", fats: "54.8g", carbs: "24.0g" },
    tastingNotes: ["Dark Truffle", "Rich Walnut", "Silky Spread"],
    pills: ["Omega-3 Rich", "Decadent", "Zero Palm Oil", "Coming Soon"]
  },
  {
    id: "pecan-chocolate",
    name: "Pecan Chocolate",
    slug: "pecan-chocolate",
    category: "classics",
    categoryLabel: "Classic Nut Butters",
    productType: "individual",
    discountEligible: true,
    tag: "Buttery Pecan & Dark Truffle",
    subtitle: "Slow-Roasted Sweet Pecans stone-ground with velvety artisanal dark chocolate.",
    origin: "Terroir: Select Pecan Orchards & Kerala Cacao",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "upcoming products.webp",
      left: "upcoming products.webp",
      right: "upcoming products.webp"
    },
    sizes: createSizes(525),
    ingredients: "Roasted Pecans, Single-Origin Dark Cacao, Organic Coconut Sugar.",
    description: "Sweet slow-roasted pecans stone-milled with single-origin dark cacao for a rich praline-style spread.",
    nutrition: { calories: "640 kcal", protein: "9.5g", fats: "62.0g", carbs: "21.5g" },
    tastingNotes: ["Caramel Pecan", "Dark Cocoa", "Praline Finish"],
    pills: ["Zero Palm Oil", "Artisanal Batch", "Gourmet", "Coming Soon"]
  },
  {
    id: "walnut-butter",
    name: "Walnut Butter",
    slug: "walnut-butter",
    category: "classics",
    categoryLabel: "Classic Nut Butters",
    productType: "individual",
    discountEligible: true,
    tag: "100% Himalayan Snow Walnut",
    subtitle: "100% Cold-Milled Himalayan Snow Walnuts, exceptionally rich in plant ALA Omega-3.",
    origin: "Terroir: Kashmir Valley, India",
    coldMilledTemp: "Milled below 24°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "upcoming products.webp",
      left: "upcoming products.webp",
      right: "upcoming products.webp"
    },
    sizes: createSizes(545, 320),
    ingredients: "100% Cold-Milled Himalayan Snow Walnuts.",
    description: "Pure Himalayan snow walnuts cold-milled below 24°C to preserve delicate Omega-3 fatty acids.",
    nutrition: { calories: "654 kcal", protein: "15.2g", fats: "65.2g", carbs: "13.7g" },
    tastingNotes: ["Earthy Walnut", "Natural Bittersweet", "Creamy Richness"],
    pills: ["High Omega-3", "Brain Health", "Cold-Milled", "Coming Soon"]
  },
  {
    id: "pecan-butter",
    name: "Pecan Butter",
    slug: "pecan-butter",
    category: "classics",
    categoryLabel: "Classic Nut Butters",
    productType: "individual",
    discountEligible: true,
    tag: "100% Pure Pecan",
    subtitle: "100% Roasted Whole Pecan Halves, stone-ground to silky perfection with natural caramel undertones.",
    origin: "Terroir: Hand-Selected Whole Pecans",
    coldMilledTemp: "Milled below 25°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "upcoming products.webp",
      left: "upcoming products.webp",
      right: "upcoming products.webp"
    },
    sizes: createSizes(545),
    ingredients: "100% Roasted Pecan Nuts.",
    description: "100% Roasted whole pecan halves, stone-ground to silky perfection with natural maple and caramel notes.",
    nutrition: { calories: "690 kcal", protein: "9.2g", fats: "72.0g", carbs: "13.9g" },
    tastingNotes: ["Natural Maple Undertone", "Buttery Texture", "Sweet Roasted Nut"],
    pills: ["Keto Gold", "Zero Sugar", "Buttery Texture", "Coming Soon"]
  },
  {
    id: "walnut-almond-chocolate",
    name: "Walnut Almond Chocolate",
    slug: "walnut-almond-chocolate",
    category: "classics",
    categoryLabel: "Classic Nut Butters",
    productType: "individual",
    discountEligible: true,
    tag: "Triple Fusion Reserve",
    subtitle: "Himalayan Walnut + Mamra Almond dual stone-ground blend unified with rich single-origin dark cacao.",
    origin: "Terroir: Kashmir & South Indian Single-Estate Cacao",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "upcoming products.webp",
      left: "upcoming products.webp",
      right: "upcoming products.webp"
    },
    sizes: createSizes(605, 290),
    ingredients: "Himalayan Walnuts, Mamra Almonds, Single-Origin Cacao, Coconut Nectar.",
    description: "A signature blend of walnuts and almonds cold stone-milled with dark chocolate for a rich, nutrient-dense breakfast spread.",
    nutrition: { calories: "595 kcal", protein: "16.8g", fats: "52.5g", carbs: "23.0g" },
    tastingNotes: ["Dark Chocolate Ganache", "Walnut Depth", "Almond Crunch"],
    pills: ["Omega + Protein", "Triple Blend", "Zero Palm Oil", "Coming Soon"]
  },

  // ----------------------------------------------------
  // SEED & PEANUT SPREADS
  // ----------------------------------------------------
  {
    id: "peanut-butter",
    name: "Peanut Butter",
    slug: "peanut-butter",
    category: "seeds",
    categoryLabel: "Seed & Peanut Spreads",
    productType: "individual",
    discountEligible: true,
    tag: "Classics • 100% Pure Peanut",
    subtitle: "100% Slow-Roasted Saurashtra Bold Peanuts. Zero palm oil, zero sugar.",
    origin: "Terroir: Saurashtra, Gujarat",
    coldMilledTemp: "Milled below 28°C",
    shelfLife: "6 Months",
    hasImages: true,
    images: {
      front: "mockups/peanut-butter/front.webp",
      left: "mockups/peanut-butter/left.webp",
      right: "mockups/peanut-butter/right.webp"
    },
    sizes: createSizes(175, 75),
    ingredients: "100% Whole Roasted Saurashtra Bold Peanuts.",
    description: "Pure whole roasted peanuts stone-ground the traditional way. Packed with natural plant protein and healthy fats without hydrogenated oils or stabilizers.",
    nutrition: { calories: "588 kcal", protein: "25.8g", fats: "50.4g", carbs: "20.0g" },
    tastingNotes: ["Deep Roasted Peanut", "Thick Creamy Texture", "Honest Clean Finish"],
    pills: ["Zero Palm Oil", "High Protein", "100% Vegan", "Stone-Ground"]
  },
  {
    id: "peanut-chocolate-butter",
    name: "Peanut Chocolate Butter",
    slug: "peanut-chocolate-butter",
    category: "seeds",
    categoryLabel: "Seed & Peanut Spreads",
    productType: "individual",
    discountEligible: true,
    tag: "Classics • Single-Origin Cacao",
    subtitle: "Roasted Peanuts with Pure Single-Origin Cacao and organic coconut blossom nectar.",
    origin: "Terroir: Saurashtra Peanuts & South Indian Cacao",
    coldMilledTemp: "Milled below 28°C",
    shelfLife: "6 Months",
    hasImages: true,
    images: {
      front: "mockups/peanut-chocolate-butter/front.webp",
      left: "mockups/peanut-chocolate-butter/left.webp",
      right: "mockups/peanut-chocolate-butter/right.webp"
    },
    sizes: createSizes(295, 125),
    ingredients: "Whole Roasted Peanuts, Single-Origin Raw Cacao, Organic Coconut Sugar.",
    description: "Roasted peanuts blended with single-origin raw cacao and organic coconut sugar. Delicious, high-protein chocolate spread with zero palm oil.",
    nutrition: { calories: "572 kcal", protein: "22.5g", fats: "45.8g", carbs: "25.6g" },
    tastingNotes: ["Dark Chocolate Peanut", "Toasted Caramel", "Smooth Spread"],
    pills: ["Zero Palm Oil", "Natural Cacao", "Stone-Ground", "Guilt-Free"]
  },
  {
    id: "sunflower-seed-butter",
    name: "Sunflower Seed Butter",
    slug: "sunflower-seed-butter",
    category: "seeds",
    categoryLabel: "Seed & Peanut Spreads",
    productType: "individual",
    discountEligible: true,
    tag: "Nut-Free • Pure Seeds",
    subtitle: "100% Roasted Sunflower Kernels, stone-ground with zero additives. Allergen-free vitality.",
    origin: "Terroir: Maharashtra Organic Farms",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "upcoming products.webp",
      left: "upcoming products.webp",
      right: "upcoming products.webp"
    },
    sizes: createSizes(120),
    ingredients: "100% Roasted Organic Sunflower Seeds.",
    description: "A completely nut-free, allergen-safe seed butter packed with natural Vitamin E and magnesium.",
    nutrition: { calories: "617 kcal", protein: "20.8g", fats: "51.5g", carbs: "20.0g" },
    tastingNotes: ["Toasted Seed", "Earthy Richness", "Allergen-Safe"],
    pills: ["Nut-Free", "High Vitamin E", "Zero Palm Oil", "Coming Soon"]
  },
  {
    id: "pumpkin-seed-butter",
    name: "Pumpkin Seed Butter",
    slug: "pumpkin-seed-butter",
    category: "seeds",
    categoryLabel: "Seed & Peanut Spreads",
    productType: "individual",
    discountEligible: true,
    tag: "Mineral Rich • Superfood",
    subtitle: "100% Slow-Milled Emerald Pumpkin Seeds rich in natural Zinc and Magnesium.",
    origin: "Terroir: Organic Certified Terroirs",
    coldMilledTemp: "Milled below 25°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "upcoming products.webp",
      left: "upcoming products.webp",
      right: "upcoming products.webp"
    },
    sizes: createSizes(120),
    ingredients: "100% Slow-Milled Organic Pumpkin Seeds.",
    description: "Deep green whole pumpkin seeds cold-milled to protect essential minerals including natural Zinc and Magnesium.",
    nutrition: { calories: "559 kcal", protein: "30.2g", fats: "49.0g", carbs: "10.7g" },
    tastingNotes: ["Earthy Green Superfood", "Nutty Mineral Depth", "Savory Spread"],
    pills: ["Zinc Rich", "Cold Milled", "Immunity Boost", "Coming Soon"]
  },

  // ----------------------------------------------------
  // ENERGY BITES
  // ----------------------------------------------------
  {
    id: "nuts-and-seeds-balls",
    name: "Nuts and Seeds Balls",
    slug: "nuts-and-seeds-balls",
    category: "energy",
    categoryLabel: "Energy Bites",
    productType: "individual",
    discountEligible: true,
    tag: "Clean Fuel • Energy Bites",
    subtitle: "Hand-rolled artisanal bites crafted from crushed roasted nuts, pumpkin seeds, dates, and raw cacao.",
    origin: "Terroir: Handcrafted in Surat, Gujarat",
    coldMilledTemp: "No Added Sugar",
    shelfLife: "3 Months",
    hasImages: false,
    images: {
      front: "upcoming products.webp",
      left: "upcoming products.webp",
      right: "upcoming products.webp"
    },
    sizes: createSizes(120),
    ingredients: "Almonds, Cashews, Pumpkin Seeds, Sunflower Seeds, Medjool Dates, Raw Cacao.",
    description: "Wholesome on-the-go snack balls rolled with honest nuts, seeds, and soft dates. Free from artificial sweeteners or chemical preservatives.",
    nutrition: { calories: "420 kcal", protein: "12.0g", fats: "22.0g", carbs: "48.0g" },
    tastingNotes: ["Chewy Date Sweetness", "Crunchy Nut Texture", "Dark Cocoa Dusting"],
    pills: ["No Added Sugar", "Whole Food Energy", "High Fiber", "Coming Soon"]
  },

  // ----------------------------------------------------
  // CURATED COMBOS & GIFT SETS (FROM EXCEL)
  // ----------------------------------------------------
  {
    id: "combo-everyday-duo",
    name: "Everyday Duo",
    slug: "everyday-duo",
    category: "combos",
    categoryLabel: "Curated Combos & Sets",
    productType: "duo",
    discountEligible: false,
    tag: "15% Off • Daily Ritual Duo",
    subtitle: "Peanut Butter (180g) + Peanut Chocolate Butter (180g)",
    origin: "Terroir: Saurashtra Peanuts & Single-Estate Cacao",
    coldMilledTemp: "15% Combo Savings",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["peanut-butter", "peanut-chocolate-butter"],
    images: {
      front: "combo/everyday duo.webp",
      left: "mockups/peanut-butter/front.webp",
      right: "mockups/peanut-chocolate-butter/front.webp"
    },
    sizes: createComboSizes(399),
    ingredients: "1× 180g Pure Bold Peanut Butter, 1× 180g Peanut Chocolate Butter.",
    description: "The essential daily duo for clean plant protein and wholesome dark cacao indulgence. Contains 1× 180g Pure Roasted Peanut Butter and 1× 180g Peanut Chocolate Butter with zero palm oil.",
    nutrition: { calories: "580 kcal", protein: "24.0g", fats: "48.0g", carbs: "22.5g" },
    tastingNotes: ["Roasted Peanut", "Dark Chocolate", "Silky Texture"],
    pills: ["15% Off", "Daily Protein", "Zero Palm Oil", "Curated Duo"]
  },
  {
    id: "combo-classic-duo",
    name: "Classic Duo",
    slug: "classic-duo",
    category: "combos",
    categoryLabel: "Curated Combos & Sets",
    productType: "duo",
    discountEligible: false,
    tag: "15% Off • Artisanal Classics",
    subtitle: "Almond Butter (180g) + Cashew Butter (180g)",
    origin: "Terroir: Californian Almonds & Mangalore Cashews",
    coldMilledTemp: "15% Combo Savings",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["almond-butter", "cashew-butter"],
    images: {
      front: "combo/clasic.webp",
      left: "mockups/almond-butter/front.webp",
      right: "mockups/cashew-butter/front.webp"
    },
    sizes: createComboSizes(595),
    ingredients: "1× 180g Pure Roasted Almond Butter, 1× 180g Creamy Cashew Butter.",
    description: "Two foundational stone-ground staples unified in an elegant tasting set. Contains 1× 180g Roasted Almond Butter and 1× 180g Sweet Mangalore Cashew Butter with zero added oils.",
    nutrition: { calories: "575 kcal", protein: "19.5g", fats: "48.5g", carbs: "24.0g" },
    tastingNotes: ["Toasted Almond", "Natural Cashew Cream", "Clean Finish"],
    pills: ["15% Off", "Stone-Ground", "Zero Added Sugar", "Artisanal Duo"]
  },
  {
    id: "combo-grand-reserve-trio",
    name: "Grand Reserve Trio",
    slug: "grand-reserve-trio",
    category: "combos",
    categoryLabel: "Curated Combos & Sets",
    productType: "combo",
    discountEligible: false,
    tag: "15% Off • Luxury Master Flight",
    subtitle: "Almond Pista Saffron (180g) + Hazelnut Chocolate (180g) + Pistachio Butter (180g)",
    origin: "Terroir: Kashmir Saffron, Bronte Pistachio & Italian Hazelnuts",
    coldMilledTemp: "15% Combo Savings",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["zafran-gold-butter", "hazelnut-chocolate-butter", "pistachio-butter"],
    images: {
      front: "combo/trio.webp",
      left: "mockups/zafran-gold-butter/front.webp",
      right: "mockups/hazelnut-chocolate-butter/front.webp"
    },
    sizes: createComboSizes(2299),
    ingredients: "1× 180g Almond Pista Saffron, 1× 180g 75% Hazelnut Chocolate, 1× 180g 100% Pure Pistachio Butter.",
    description: "Our crowning trio of artisan master reserves in one luxury box. Experience Kashmiri Mongra Saffron, 75% hazelnut Gianduja, and 100% royal emerald pistachio butter.",
    nutrition: { calories: "585 kcal", protein: "18.5g", fats: "50.0g", carbs: "22.5g" },
    tastingNotes: ["Kashmiri Saffron", "Gianduja Truffle", "Emerald Pistachio"],
    pills: ["15% Off", "Grand Reserve", "Royal Edition", "Ultra-Premium"]
  },
  {
    id: "combo-complete-collection",
    name: "The Complete Collection (7 Jars)",
    slug: "the-complete-collection",
    category: "combos",
    categoryLabel: "Curated Combos & Sets",
    productType: "combo",
    discountEligible: false,
    tag: "25% Off • Master Roaster's Vault",
    subtitle: "All 7 Signature Live Jars (180g each)",
    origin: "Terroir: Complete Single-Origin Reserve terroirs",
    coldMilledTemp: "25% Maximum Bundle Savings",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["peanut-butter", "peanut-chocolate-butter", "almond-butter", "cashew-butter", "zafran-gold-butter", "hazelnut-chocolate-butter", "pistachio-butter"],
    images: {
      front: "combo/complete.webp",
      left: "mockups/zafran-gold-butter/front.webp",
      right: "mockups/pistachio-butter/front.webp"
    },
    sizes: createComboSizes(2999),
    ingredients: "Peanut Butter, Peanut Chocolate, Almond Butter, Cashew Butter, Almond Pista Saffron, Hazelnut Chocolate, Pistachio Butter (180g each).",
    description: "The definitive tasting cellar. All 7 live handcrafted single-origin jars presented together at an exclusive 25% discount savings.",
    nutrition: { calories: "580 kcal", protein: "20.0g", fats: "49.0g", carbs: "22.0g" },
    tastingNotes: ["Complete Flavor Spectrum", "Single-Origin Journey", "Master Flight"],
    pills: ["25% Off", "7 Jars Vault", "Complete Range", "Best Value"]
  },
  {
    id: "combo-chocolate-lovers-duo",
    name: "Chocolate Lovers Duo",
    slug: "chocolate-lovers-duo",
    category: "combos",
    categoryLabel: "Curated Combos & Sets",
    productType: "duo",
    discountEligible: false,
    tag: "15% Off • Pure Dark Cacao Indulgence",
    subtitle: "Peanut Chocolate (180g) + Hazelnut Chocolate (180g)",
    origin: "Terroir: South Indian Single-Estate Cacao & Hazelnuts",
    coldMilledTemp: "15% Combo Savings",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["peanut-chocolate-butter", "hazelnut-chocolate-butter"],
    images: {
      front: "combo/choclate.webp",
      left: "mockups/peanut-chocolate-butter/front.webp",
      right: "mockups/hazelnut-chocolate-butter/front.webp"
    },
    sizes: createComboSizes(999),
    ingredients: "1× 180g Peanut Chocolate Butter, 1× 180g 75% Hazelnut Chocolate Gianduja.",
    description: "For true dark chocolate lovers who demand zero palm oil. Combines robust roasted peanut chocolate with velvety Italian-style 75% hazelnut Gianduja.",
    nutrition: { calories: "590 kcal", protein: "18.5g", fats: "49.5g", carbs: "24.0g" },
    tastingNotes: ["Dark Cocoa Truffle", "Roasted Hazelnut", "Toffee Caramel"],
    pills: ["15% Off", "Zero Palm Oil", "Single-Estate Cacao", "Gourmet Duo"]
  },
  {
    id: "combo-nutty-trio-starter",
    name: "Nutty Trio Starter",
    slug: "nutty-trio-starter",
    category: "combos",
    categoryLabel: "Curated Combos & Sets",
    productType: "combo",
    discountEligible: false,
    tag: "15% Off • Daily Vitality Trio",
    subtitle: "Peanut Butter (180g) + Almond Butter (180g) + Cashew Butter (180g)",
    origin: "Terroir: Saurashtra, California & Mangalore",
    coldMilledTemp: "15% Combo Savings",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["peanut-butter", "almond-butter", "cashew-butter"],
    images: {
      front: "combo/nutty trio.webp",
      left: "mockups/almond-butter/front.webp",
      right: "mockups/cashew-butter/front.webp"
    },
    sizes: createComboSizes(799),
    ingredients: "1× 180g Peanut Butter, 1× 180g Almond Butter, 1× 180g Cashew Butter.",
    description: "The quintessential starter set for high-protein breakfasts and clean snacking. 100% whole roasted nuts with zero added sugars or hydrogenated oils.",
    nutrition: { calories: "570 kcal", protein: "20.5g", fats: "49.0g", carbs: "21.0g" },
    tastingNotes: ["Classic Peanut", "Rich Roasted Almond", "Sweet Velvety Cashew"],
    pills: ["15% Off", "High Protein", "100% Vegan", "Breakfast Trio"]
  },
  {
    id: "combo-zafran-pista-duo",
    name: "Zafran-Pista Duo",
    slug: "zafran-pista-duo",
    category: "combos",
    categoryLabel: "Curated Combos & Sets",
    productType: "duo",
    discountEligible: false,
    tag: "15% Off • Royal Reserve Pairing",
    subtitle: "Almond Pista Saffron (180g) + Pistachio Butter (180g)",
    origin: "Terroir: Kashmir Valley & Royal Pistachio Orchards",
    coldMilledTemp: "15% Combo Savings",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["zafran-gold-butter", "pistachio-butter"],
    images: {
      front: "combo/zafran pista.webp",
      left: "mockups/zafran-gold-butter/front.webp",
      right: "mockups/pistachio-butter/front.webp"
    },
    sizes: createComboSizes(1692),
    ingredients: "1× 180g Zafran Gold Butter, 1× 180g 100% Pure Pistachio Butter.",
    description: "An opulent royal pairing of Kashmiri Mongra Saffron infused Mamra almond butter with 100% pure royal emerald green pistachio butter.",
    nutrition: { calories: "574 kcal", protein: "20.7g", fats: "48.4g", carbs: "22.6g" },
    tastingNotes: ["Floral Mongra Saffron", "Vibrant Emerald Pistachio", "Melt-in-Mouth Butterfat"],
    pills: ["15% Off", "Kashmiri Saffron", "100% Pistachio", "Crown Reserve"]
  },
  {
    id: "combo-everyday-to-exquisite",
    name: "Everyday to Exquisite",
    slug: "everyday-to-exquisite",
    category: "combos",
    categoryLabel: "Curated Combos & Sets",
    productType: "combo",
    discountEligible: false,
    tag: "15% Off • Daily & Royal Contrast",
    subtitle: "Peanut Butter (180g) + Zafran Gold Butter (180g)",
    origin: "Terroir: Saurashtra & Kashmiri Mongra Saffron",
    coldMilledTemp: "15% Combo Savings",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["peanut-butter", "zafran-gold-butter"],
    images: {
      front: "combo/evryday.webp",
      left: "mockups/peanut-butter/front.webp",
      right: "mockups/zafran-gold-butter/front.webp"
    },
    sizes: createComboSizes(999),
    ingredients: "1× 180g Pure Peanut Butter, 1× 180g Zafran Gold Butter.",
    description: "From daily workout fuel to royal evening indulgence. Includes 1× 180g Bold Peanut Butter and 1× 180g Grand Reserve Zafran Gold Butter.",
    nutrition: { calories: "586 kcal", protein: "23.5g", fats: "50.9g", carbs: "18.9g" },
    tastingNotes: ["Bold Roasted Peanut", "Kashmiri Saffron", "Mamra Almond"],
    pills: ["15% Off", "Everyday & Luxury", "Stone-Ground", "Signature Pair"]
  },
  {
    id: "combo-pure-nut-flight",
    name: "Pure Nut Flight (5 Jars)",
    slug: "pure-nut-flight",
    category: "combos",
    categoryLabel: "Curated Combos & Sets",
    productType: "combo",
    discountEligible: false,
    tag: "20% Off • Connoisseur Tasting Set",
    subtitle: "Peanut, Almond, Cashew, Hazelnut Chocolate & Pistachio (180g each)",
    origin: "Terroir: Multi-Terroir Artisanal Harvests",
    coldMilledTemp: "20% Combo Savings",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["peanut-butter", "almond-butter", "cashew-butter", "hazelnut-chocolate-butter", "pistachio-butter"],
    images: {
      front: "combo/pure nut.webp",
      left: "mockups/pistachio-butter/front.webp",
      right: "mockups/hazelnut-chocolate-butter/front.webp"
    },
    sizes: createComboSizes(2199),
    ingredients: "Peanut Butter, Almond Butter, Cashew Butter, Hazelnut Chocolate Butter, Pistachio Butter (180g each).",
    description: "A comprehensive 5-jar master tasting flight spanning our finest single-origin nuts, artisanal dark cacao Gianduja, and pure emerald pistachio butter.",
    nutrition: { calories: "578 kcal", protein: "20.1g", fats: "49.2g", carbs: "22.3g" },
    tastingNotes: ["Complete Nut Harmony", "Single-Origin Notes", "Silky Textures"],
    pills: ["20% Off", "5 Jars Set", "Connoisseur Flight", "Gift Ready"]
  },
  {
    id: "combo-build-your-own-trio",
    name: "Build Your Own Trio",
    slug: "build-your-own-trio",
    category: "combos",
    categoryLabel: "Curated Combos & Sets",
    productType: "combo",
    discountEligible: false,
    tag: "15% Off • Custom Trio Selection",
    subtitle: "Choose Any 3 Jars (180g) — 15% Automatic Bundle Discount",
    origin: "Terroir: Tailored to Your Selection",
    coldMilledTemp: "15% Custom Bundle Discount",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["zafran-gold-butter", "pistachio-butter", "hazelnut-chocolate-butter"],
    images: {
      front: "combo/trio.webp",
      left: "mockups/zafran-gold-butter/front.webp",
      right: "mockups/pistachio-butter/front.webp"
    },
    sizes: createComboSizes(null),
    ingredients: "Any 3 Jars of your choice from our single-origin stone-ground collection.",
    description: "Customize your own bespoke 3-jar tasting box from any of our 19 handcrafted varieties. Our concierge team will prepare your personalized set with 15% bundle savings.",
    nutrition: { calories: "580 kcal", protein: "20.0g", fats: "50.0g", carbs: "20.0g" },
    tastingNotes: ["Custom Selection", "Tailored Flight", "Personalized Gift"],
    pills: ["15% Off", "Custom Trio", "Concierge Custom", "Gift Box"]
  },
  {
    id: "combo-corporate-bulk-set-10",
    name: "Corporate & Wedding Gifting Set (10 Jars)",
    slug: "corporate-bulk-set-10",
    category: "combos",
    categoryLabel: "Curated Combos & Sets",
    productType: "combo",
    discountEligible: false,
    tag: "20% Off • Bespoke Gifting Box",
    subtitle: "10 Custom Selected Jars in Luxury Gift Packaging",
    origin: "Terroir: Handcrafted in Surat, Gujarat",
    coldMilledTemp: "20% Wholesale / Corporate Discount",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["zafran-gold-butter", "hazelnut-chocolate-butter", "pistachio-butter", "almond-butter", "cashew-butter", "peanut-chocolate-butter", "peanut-butter"],
    images: {
      front: "combo/complete.webp",
      left: "mockups/zafran-gold-butter/front.webp",
      right: "mockups/hazelnut-chocolate-butter/front.webp"
    },
    sizes: createComboSizes(null),
    ingredients: "10 Custom Selected Jars (180g) in bespoke presentation gift box.",
    description: "Prestigious gift hampers tailored for corporate clients, executive gifting, Diwali/festive hampers, and luxury wedding favors. Custom sleeve branding and direct door delivery available.",
    nutrition: { calories: "580 kcal", protein: "20.0g", fats: "50.0g", carbs: "20.0g" },
    tastingNotes: ["Luxury Presentation", "Custom Ribbon & Sleeve", "Bespoke Hamper"],
    pills: ["20% Off", "10 Jars Set", "Corporate Gifting", "Wholesale Quote"]
  },
  {
    id: "combo-milad-mithai-box",
    name: "Milad Mithai Box",
    slug: "milad-mithai-box",
    category: "combos",
    categoryLabel: "Curated Combos & Sets",
    productType: "combo",
    discountEligible: false,
    tag: "Festive Edition • Pure Sweet Luxury",
    subtitle: "Peanut Chocolate + Hazelnut Chocolate + Almond Pista Saffron (180g each)",
    origin: "Terroir: Kashmiri Saffron & Single-Estate Cacao",
    coldMilledTemp: "10% Celebration Special",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["peanut-chocolate-butter", "hazelnut-chocolate-butter", "zafran-gold-butter"],
    images: {
      front: "combo/milad.webp",
      left: "mockups/zafran-gold-butter/front.webp",
      right: "mockups/hazelnut-chocolate-butter/front.webp"
    },
    sizes: createComboSizes(1999),
    ingredients: "1× 180g Peanut Chocolate, 1× 180g Hazelnut Chocolate Gianduja, 1× 180g Almond Pista Saffron.",
    description: "A celebration of purity for Milad un Nabi. 100% natural, refined-sugar-free sweet nut butters crafted with pure Kashmiri saffron, single-origin dark cacao, and organic hazelnuts.",
    nutrition: { calories: "588 kcal", protein: "19.5g", fats: "51.8g", carbs: "22.0g" },
    tastingNotes: ["Floral Mongra Saffron", "Gianduja Chocolate", "Toasted Peanut Truffle"],
    pills: ["Festive Box", "Zero Refined Sugar", "Zero Palm Oil", "Celebration Set"]
  }
];

// ==========================================
// 1b. CENTRALIZED SCROLL LOCK (prevents body scroll when overlays are open)
// ==========================================
let _scrollLockCount = 0;
let _savedScrollY = 0;

function _lockScroll() {
  if (_scrollLockCount === 0) {
    _savedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${_savedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }
  _scrollLockCount++;
}

function _unlockScroll() {
  _scrollLockCount = Math.max(0, _scrollLockCount - 1);
  if (_scrollLockCount === 0) {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    window.scrollTo({ top: _savedScrollY, left: 0, behavior: 'instant' });
  }
}

// ==========================================
// 2. SHOPPING BAG, BULK ORDER & PROMO ENGINE
// ==========================================
const Cart = {
  items: [],
  promoCode: null,
  discountRate: 0, // No active discount
  orderType: 'default', // 'default' or 'gift'
  deliveryDetails: {},
  _drawerOpen: false,

  init() {
    try {
      const saved = localStorage.getItem("nut_delicacy_bag_v3");
      if (saved) this.items = JSON.parse(saved);
      const savedPromo = localStorage.getItem("nut_delicacy_promo");
      if (savedPromo) this.promoCode = savedPromo;
      const savedType = localStorage.getItem("nut_delicacy_order_type");
      if (savedType) this.orderType = savedType;
      const savedDetails = localStorage.getItem("nut_delicacy_delivery_details");
      if (savedDetails) this.deliveryDetails = JSON.parse(savedDetails);
    } catch (e) {
      this.items = [];
    }
    this.updateBadges();
    this.renderDrawer();
  },

  setOrderType(type) {
    this.orderType = type;
    try {
      localStorage.setItem("nut_delicacy_order_type", type);
    } catch (e) {}
    this.renderDrawer();
  },

  save() {
    try {
      localStorage.setItem("nut_delicacy_bag_v3", JSON.stringify(this.items));
      if (this.promoCode) {
        localStorage.setItem("nut_delicacy_promo", this.promoCode);
      } else {
        localStorage.removeItem("nut_delicacy_promo");
      }
      localStorage.setItem("nut_delicacy_order_type", this.orderType);
      localStorage.setItem("nut_delicacy_delivery_details", JSON.stringify(this.deliveryDetails));
    } catch (e) {}
    this.updateBadges();
    this.renderDrawer();
  },

  addCustomItem(customItem) {
    this.items.push(customItem);
    this.save();
    this.showToast(`Added ${customItem.name} to Tasting Bag`);
    this.openDrawer();
  },

  add(productId, size = "180g", quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const sizeOpt = product.sizes.find(s => s.size === size) || product.sizes[0];
    const isBulk = Boolean(sizeOpt.isBulk);

    const cartItemId = `${productId}-${size}`;
    const existing = this.items.find(i => i.cartItemId === cartItemId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({
        cartItemId,
        productId: product.id,
        name: product.name,
        size: sizeOpt.size,
        sizeLabel: sizeOpt.label || sizeOpt.size,
        price: isBulk ? null : sizeOpt.price,
        isBulk,
        image: product.images ? product.images.front : "product-preview.webp",
        quantity
      });
    }

    this.save();
    if (isBulk) {
      this.showToast(`Added ${product.name} (Bulk Inquiry) to Tasting Bag`);
    } else {
      this.showToast(`Added ${product.name} (${sizeOpt.size}) to Tasting Bag`);
    }
    this.openDrawer();
  },

  remove(cartItemId) {
    this.items = this.items.filter(i => i.cartItemId !== cartItemId);
    this.save();
  },

  updateQty(cartItemId, delta) {
    const item = this.items.find(i => i.cartItemId === cartItemId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      this.remove(cartItemId);
    } else {
      this.save();
    }
  },

  calculateTotals() {
    const subtotal = this.items.reduce((sum, item) => {
      if (item.isBulk || item.price === null) return sum;
      return sum + (item.price * item.quantity);
    }, 0);

    const eligibleSubtotal = this.items.reduce((sum, item) => {
      if (item.isBulk || item.price === null) return sum;
      const product = PRODUCTS.find(p => p.id === item.productId);
      if (product && product.discountEligible) {
        return sum + (item.price * item.quantity);
      }
      return sum;
    }, 0);

    let discount = 0;
    if (this.promoCode && this.items.length > 0) {
      discount = Math.round(eligibleSubtotal * this.discountRate);
    }

    const finalTotal = Math.max(0, subtotal - discount);

    return {
      subtotal,
      eligibleSubtotal,
      discount,
      finalTotal
    };
  },

  count() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },

  applyPromo(code) {
    const clean = (code || "").trim().toUpperCase();
    const validCodes = ["LAUNCH10", "NJOY10", "WELCOME10"];
    if (validCodes.includes(clean)) {
      this.promoCode = clean;
      this.save();
      this.showToast(`${clean} Discount Applied`);
    } else {
      this.showToast("Invalid code.");
    }
  },

  applyPromoCode(code) {
    return this.applyPromo(code);
  },

  removePromo() {
    this.promoCode = null;
    this.save();
    this.showToast("Promo code removed");
  },

  openDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (overlay) {
      overlay.style.display = "block";
      overlay.classList.add("active");
    }
    if (drawer) drawer.classList.add("active");
    this._drawerOpen = true;
    _lockScroll();
  },

  closeDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (drawer) drawer.classList.remove("active");
    if (overlay) {
      overlay.classList.remove("active");
      overlay.style.display = "none";
    }
    this._drawerOpen = false;
    _unlockScroll();
  },

  updateBadges() {
    const count = this.count();
    document.querySelectorAll(".cart-badge-count").forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? "inline-block" : "none";
    });
    const moreBadge = document.getElementById("more-cart-badge");
    if (moreBadge) {
      moreBadge.textContent = count;
      moreBadge.style.display = count > 0 ? "inline-block" : "none";
    }
  },

  saveDeliveryField(id, value) {
    this.deliveryDetails[id] = value;
    
    // Clear validation error if any
    const errEl = document.getElementById(`err-${id}`);
    if (errEl) {
      errEl.style.display = 'none';
    }
  },

  renderDrawer() {
    const container = document.getElementById("cart-items-container");
    const emptyEl = document.getElementById("cart-empty-state");
    const footerEl = document.getElementById("cart-drawer-footer");
    if (!container) return;

    const items = this.items;
    if (items.length === 0) {
      container.innerHTML = "";
      if (emptyEl && emptyEl.style) emptyEl.style.display = "flex";
      if (footerEl && footerEl.style) footerEl.style.display = "none";
      return;
    }

    if (emptyEl && emptyEl.style) emptyEl.style.display = "none";
    if (footerEl && footerEl.style) footerEl.style.display = "block";

    let html = items.map(item => {
      const priceDisplay = item.isBulk || item.price === null
        ? `<div class="cart-item-price" style="color:var(--olive); font-size:12px; font-weight:700;">Price on Request (Wholesale)</div>`
        : `<div class="cart-item-price">₹${item.price.toLocaleString("en-IN")}</div>`;

      return `
        <div class="cart-item" data-id="${item.cartItemId}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='product-preview.webp'">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-meta">Pack Size: <strong>${item.size}</strong></div>
            ${priceDisplay}
            <div class="cart-item-actions">
              <div class="cart-qty-ctrl">
                <button onclick="Cart.updateQty('${item.cartItemId}', -1)" aria-label="Decrease quantity">−</button>
                <span>${item.quantity}</span>
                <button onclick="Cart.updateQty('${item.cartItemId}', 1)" aria-label="Increase quantity">+</button>
              </div>
              <button class="cart-item-remove" onclick="Cart.remove('${item.cartItemId}')">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Calculate totals
    const totals = this.calculateTotals();
    const hasBulkItems = items.some(i => i.isBulk);

    html += `
        <!-- Promo Box -->
        <div class="cart-promo-section">
          ${this.promoCode ? `
            <div class="promo-applied-badge">
              <span>Code <strong>${this.promoCode}</strong> applied</span>
              <button onclick="Cart.removePromo()" style="background:transparent; border:0; color:#882222; cursor:pointer; font-weight:700; font-size:11px;">Remove</button>
            </div>
          ` : `
            <div class="promo-input-row">
              <input type="text" id="cart-promo-input" placeholder="Promo code" onkeydown="if(event.key==='Enter'){Cart.applyPromo(this.value); event.preventDefault();}">
              <button onclick="Cart.applyPromo(document.getElementById('cart-promo-input').value)">Apply</button>
            </div>
          `}
        </div>

        ${totals.subtotal > 0 ? `
          <div class="cart-summary-line">
            <span>Items Subtotal</span>
            <span>₹${totals.subtotal.toLocaleString("en-IN")}</span>
          </div>
        ` : ''}

        ${totals.discount > 0 ? `
          <div class="cart-discount-line">
            <span>Milad Discount (10%)</span>
            <span>-₹${totals.discount.toLocaleString("en-IN")}</span>
          </div>
        ` : ''}
        
        <br/>

        <div class="delivery-details-form">
          <div class="gifting-selector-box">
            <div class="gifting-selector-title">
              <span>🎁</span> Delivery & Gifting Option
            </div>
            <div class="gifting-toggle-group">
              <label class="gift-radio-label ${this.orderType !== 'gift' ? 'active' : ''}">
                <input type="radio" name="cart-order-type" value="default" ${this.orderType !== 'gift' ? 'checked' : ''} onchange="Cart.setOrderType('default')">
                <span>🚚 Deliver to Me (Default)</span>
              </label>
              <label class="gift-radio-label ${this.orderType === 'gift' ? 'active' : ''}">
                <input type="radio" name="cart-order-type" value="gift" ${this.orderType === 'gift' ? 'checked' : ''} onchange="Cart.setOrderType('gift')">
                <span>🎁 Direct to Recipient</span>
              </label>
            </div>
          </div>

          ${this.orderType === 'gift' ? `
            <!-- Gift Direct Delivery Form -->
            <div class="gift-details-card">
              <div class="gift-card-note-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12V22H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
                <span>Recipient's Delivery Address (Where to send)</span>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">Recipient's Full Name *</label>
                <input type="text" id="gift-rec-name" value="${this.deliveryDetails['gift-rec-name'] || ''}" oninput="Cart.saveDeliveryField('gift-rec-name', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" autocomplete="name" placeholder="Recipient's Full Name">
                <span id="err-gift-rec-name" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Please enter recipient's full name.</span>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">Recipient's Mobile / WhatsApp *</label>
                <input type="tel" inputmode="tel" id="gift-rec-phone" value="${this.deliveryDetails['gift-rec-phone'] || ''}" oninput="Cart.saveDeliveryField('gift-rec-phone', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" autocomplete="tel" placeholder="+91 98765 43210">
                <span id="err-gift-rec-phone" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Please enter recipient's mobile number.</span>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">Recipient's Address Line *</label>
                <input type="text" id="gift-rec-address" value="${this.deliveryDetails['gift-rec-address'] || ''}" oninput="Cart.saveDeliveryField('gift-rec-address', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" placeholder="Flat / House No., Building Name">
                <span id="err-gift-rec-address" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Please enter delivery address.</span>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">Area / Locality *</label>
                <input type="text" id="gift-rec-area" value="${this.deliveryDetails['gift-rec-area'] || ''}" oninput="Cart.saveDeliveryField('gift-rec-area', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" placeholder="Street / Area Name">
                <span id="err-gift-rec-area" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Please enter area.</span>
              </div>

              <div style="display:flex; gap:10px; margin-bottom: 10px;">
                <div style="flex:1;">
                  <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">City *</label>
                  <input type="text" id="gift-rec-city" value="${this.deliveryDetails['gift-rec-city'] || ''}" oninput="Cart.saveDeliveryField('gift-rec-city', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" placeholder="Surat">
                  <span id="err-gift-rec-city" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Required.</span>
                </div>
                <div style="flex:1;">
                  <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">State *</label>
                  <input type="text" id="gift-rec-state" value="${this.deliveryDetails['gift-rec-state'] || ''}" oninput="Cart.saveDeliveryField('gift-rec-state', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" placeholder="Gujarat">
                  <span id="err-gift-rec-state" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Required.</span>
                </div>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">PIN Code *</label>
                <input type="text" inputmode="numeric" id="gift-rec-pin" value="${this.deliveryDetails['gift-rec-pin'] || ''}" oninput="Cart.saveDeliveryField('gift-rec-pin', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" placeholder="395007">
                <span id="err-gift-rec-pin" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Please enter PIN code.</span>
              </div>

              <div style="border-top: 1px dashed rgba(62,36,21,0.15); margin: 14px 0 10px; padding-top: 10px;">
                <div class="gift-card-note-badge">
                  <span>💌 Sender Details & Greeting Card Note</span>
                </div>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">Your Full Name (Sender) *</label>
                <input type="text" id="gift-sender-name" value="${this.deliveryDetails['gift-sender-name'] || ''}" oninput="Cart.saveDeliveryField('gift-sender-name', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" placeholder="Your Name">
                <span id="err-gift-sender-name" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Please enter your name.</span>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">Your Mobile / WhatsApp Number *</label>
                <input type="tel" inputmode="tel" id="gift-sender-phone" value="${this.deliveryDetails['gift-sender-phone'] || ''}" oninput="Cart.saveDeliveryField('gift-sender-phone', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" placeholder="+91 99999 99999">
                <span id="err-gift-sender-phone" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Please enter your phone number.</span>
              </div>

              <div style="margin-bottom: 10px;">
                <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">Personalized Gift Greeting Message (Optional)</label>
                <textarea id="gift-message" oninput="Cart.saveDeliveryField('gift-message', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:13px; min-height:60px; font-family:inherit;" placeholder="Wishing you a blessed and joyous festive season!">${this.deliveryDetails['gift-message'] || ''}</textarea>
                <small style="font-size:10px; color:#8c6225; display:block; margin-top:2px;">Printed or handwritten on luxury gold-foiled festive card inside the box.</small>
              </div>
            </div>
          ` : `
            <!-- Default Self Delivery Form -->
            <h4 style="margin-bottom: 12px; font-family: 'Fraunces', serif; color: var(--brown-deep); font-size: 15px;">Your Delivery Details</h4>
            
            <div style="margin-bottom: 10px;">
              <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">Full Name *</label>
              <input type="text" id="dlv-name" value="${this.deliveryDetails['dlv-name'] || ''}" oninput="Cart.saveDeliveryField('dlv-name', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" autocomplete="name" placeholder="John Doe">
              <span id="err-dlv-name" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Please enter your full name.</span>
            </div>

            <div style="margin-bottom: 10px;">
              <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">Mobile / WhatsApp Number *</label>
              <input type="tel" inputmode="tel" id="dlv-phone" value="${this.deliveryDetails['dlv-phone'] || ''}" oninput="Cart.saveDeliveryField('dlv-phone', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" autocomplete="tel" placeholder="+91 99999 99999">
              <span id="err-dlv-phone" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Please enter a valid mobile number.</span>
            </div>

            <div style="margin-bottom: 10px;">
              <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">Address Line *</label>
              <input type="text" id="dlv-address" value="${this.deliveryDetails['dlv-address'] || ''}" oninput="Cart.saveDeliveryField('dlv-address', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" autocomplete="address-line1" placeholder="House/Flat No., Building Name">
              <span id="err-dlv-address" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Please enter your address.</span>
            </div>

            <div style="margin-bottom: 10px;">
              <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">Area / Locality *</label>
              <input type="text" id="dlv-area" value="${this.deliveryDetails['dlv-area'] || ''}" oninput="Cart.saveDeliveryField('dlv-area', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" autocomplete="address-line2" placeholder="Street/Area Name">
              <span id="err-dlv-area" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Please enter your locality.</span>
            </div>

            <div style="display:flex; gap:10px; margin-bottom: 10px;">
              <div style="flex:1;">
                <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">City *</label>
                <input type="text" id="dlv-city" value="${this.deliveryDetails['dlv-city'] || ''}" oninput="Cart.saveDeliveryField('dlv-city', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" autocomplete="address-level2" placeholder="Surat">
                <span id="err-dlv-city" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Required.</span>
              </div>
              <div style="flex:1;">
                <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">State *</label>
                <input type="text" id="dlv-state" value="${this.deliveryDetails['dlv-state'] || ''}" oninput="Cart.saveDeliveryField('dlv-state', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" autocomplete="address-level1" placeholder="Gujarat">
                <span id="err-dlv-state" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Required.</span>
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">PIN Code *</label>
              <input type="text" inputmode="numeric" id="dlv-pin" value="${this.deliveryDetails['dlv-pin'] || ''}" oninput="Cart.saveDeliveryField('dlv-pin', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" autocomplete="postal-code" placeholder="395007">
              <span id="err-dlv-pin" style="display:none; color:#d93025; font-size:11px; margin-top:4px;">Please enter PIN code.</span>
            </div>

            <div style="margin-bottom: 10px;">
              <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">Landmark (Optional)</label>
              <input type="text" id="dlv-landmark" value="${this.deliveryDetails['dlv-landmark'] || ''}" oninput="Cart.saveDeliveryField('dlv-landmark', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" placeholder="Near...">
            </div>

            <div style="margin-bottom: 10px;">
              <label style="display:block; font-size:11px; font-weight:700; margin-bottom:4px; color:var(--brown);">Delivery Instructions (Optional)</label>
              <input type="text" id="dlv-instructions" value="${this.deliveryDetails['dlv-instructions'] || ''}" oninput="Cart.saveDeliveryField('dlv-instructions', this.value)" style="width:100%; padding:8px 12px; border:1px solid rgba(62,36,21,0.2); border-radius:6px; font-size:14px;" placeholder="Leave at the door, etc.">
            </div>
          `}
        </div>
    `;

    container.innerHTML = html;

    // Footer only contains final total and button
    if (footerEl) {
      let footerHtml = '';
      if (totals.subtotal > 0) {
        footerHtml += `
          <div class="cart-subtotal-row" style="margin-bottom: 14px; font-size: 15px;">
            <span>Payable Total</span>
            <strong>₹${totals.finalTotal.toLocaleString("en-IN")}</strong>
          </div>
        `;
      }
      
      if (hasBulkItems) {
        footerHtml += `
          <div style="font-size:11px; color:var(--brown-muted); margin-bottom:8px; text-align:center;">
            Includes Wholesale/Bulk items (Quote to follow)
          </div>
        `;
      }

      footerHtml += `
        <button class="btn-whatsapp-checkout" onclick="Cart.checkoutWhatsApp()" style="width: 100%;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/></svg>
          <span>Send Order to WhatsApp</span>
        </button>
      `;
      footerEl.innerHTML = footerHtml;
    }
  },

  checkoutWhatsApp() {
    if (this.items.length === 0) {
      this.showToast("Your Tasting Bag is empty");
      return;
    }

    // Validation based on orderType
    const isGift = this.orderType === 'gift';
    const required = isGift
      ? ['gift-rec-name', 'gift-rec-phone', 'gift-rec-address', 'gift-rec-area', 'gift-rec-city', 'gift-rec-state', 'gift-rec-pin', 'gift-sender-name', 'gift-sender-phone']
      : ['dlv-name', 'dlv-phone', 'dlv-address', 'dlv-area', 'dlv-city', 'dlv-state', 'dlv-pin'];

    let isValid = true;
    let firstInvalid = null;

    for (let id of required) {
      const val = (this.deliveryDetails[id] || "").trim();
      const errEl = document.getElementById(`err-${id}`);
      if (!val) {
        isValid = false;
        if (errEl) errEl.style.display = 'block';
        if (!firstInvalid) firstInvalid = document.getElementById(id);
      } else {
        if (errEl) errEl.style.display = 'none';
      }
    }

    if (!isValid) {
      this.showToast(isGift ? "Please complete recipient and sender details." : "Please complete all required delivery details.");
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid.focus();
      }
      return;
    }

    const retailItems = this.items.filter(i => !i.isBulk);
    const bulkItems = this.items.filter(i => i.isBulk);

    let itemsText = "";

    if (retailItems.length > 0) {
      itemsText += `ORDER DETAILS

` +
        retailItems.map((item) =>
          `${item.name} — ${item.size}
₹${item.price.toLocaleString("en-IN")} × ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString("en-IN")}`
        ).join("\n\n") + "\n\n";
    }

    if (bulkItems.length > 0) {
      itemsText += `WHOLESALE / BULK INQUIRY

` +
        bulkItems.map((item) =>
          `${item.name} — ${item.size}
Quantity: ${item.quantity} units (Wholesale Quote Requested)`
        ).join("\n\n") + "\n\n";
    }

    const totals = this.calculateTotals();

    let totalLine = "";
    if (totals.subtotal > 0) {
      totalLine = `--------------------
` +
        `Items Subtotal: ₹${totals.subtotal.toLocaleString("en-IN")}
`;
        
      if (totals.discount > 0) {
        totalLine += `Promo Discount: -₹${totals.discount.toLocaleString("en-IN")}
`;
      }
      
      totalLine += `Payable Total: ₹${totals.finalTotal.toLocaleString("en-IN")}
` +
        `--------------------

`;
    }

    let dlvText = "";
    if (isGift) {
      dlvText += `🎁 *FESTIVE GIFT ORDER (DIRECT TO RECIPIENT)*\n\n`;
      dlvText += `*RECIPIENT (DELIVER TO):*\n`;
      dlvText += `• Name: ${(this.deliveryDetails['gift-rec-name'] || '').trim()}\n`;
      dlvText += `• Mobile: ${(this.deliveryDetails['gift-rec-phone'] || '').trim()}\n`;
      dlvText += `• Address: ${(this.deliveryDetails['gift-rec-address'] || '').trim()}, ${(this.deliveryDetails['gift-rec-area'] || '').trim()}\n`;
      dlvText += `• City & PIN: ${(this.deliveryDetails['gift-rec-city'] || '').trim()}, ${(this.deliveryDetails['gift-rec-state'] || '').trim()} - ${(this.deliveryDetails['gift-rec-pin'] || '').trim()}\n\n`;

      dlvText += `*GIFT SENT BY (SENDER):*\n`;
      dlvText += `• Sender Name: ${(this.deliveryDetails['gift-sender-name'] || '').trim()}\n`;
      dlvText += `• Sender Mobile: ${(this.deliveryDetails['gift-sender-phone'] || '').trim()}\n`;

      const giftMsg = (this.deliveryDetails['gift-message'] || '').trim();
      if (giftMsg) {
        dlvText += `• Card Greeting Note: "${giftMsg}"\n`;
      }
    } else {
      dlvText += `*DELIVERY DETAILS:*\n\n`;
      dlvText += `• Name: ${(this.deliveryDetails['dlv-name'] || '').trim()}\n`;
      dlvText += `• Mobile: ${(this.deliveryDetails['dlv-phone'] || '').trim()}\n\n`;
      dlvText += `• Address: ${(this.deliveryDetails['dlv-address'] || '').trim()}, ${(this.deliveryDetails['dlv-area'] || '').trim()}\n`;
      dlvText += `• City & PIN: ${(this.deliveryDetails['dlv-city'] || '').trim()}, ${(this.deliveryDetails['dlv-state'] || '').trim()} - ${(this.deliveryDetails['dlv-pin'] || '').trim()}\n`;
      
      if (this.deliveryDetails['dlv-landmark'] && this.deliveryDetails['dlv-landmark'].trim()) {
        dlvText += `• Landmark: ${this.deliveryDetails['dlv-landmark'].trim()}\n`;
      }
      if (this.deliveryDetails['dlv-instructions'] && this.deliveryDetails['dlv-instructions'].trim()) {
        dlvText += `• Delivery Instructions: ${this.deliveryDetails['dlv-instructions'].trim()}\n`;
      }
    }

    const message = `Hello Nut Delicacy,

` +
      `I would like to place an order.

` +
      `${itemsText}` +
      `${totalLine}` +
      `${dlvText}

` +
      `Please share the available payment options so I can complete my order.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919512512151?text=${encoded}`;
    window.open(whatsappUrl, "_blank");
  },

  showToast(text) {
    let toast = document.getElementById("luxury-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "luxury-toast";
      toast.className = "luxury-toast";
      toast.innerHTML = `<span class="toast-dot"></span><span id="toast-text">${text}</span>`;
      if (document.body && document.body.appendChild) document.body.appendChild(toast);
    } else {
      const textEl = document.getElementById("toast-text");
      if (textEl) textEl.textContent = text;
    }

    if (toast) {
      toast.classList.add("show");
      if (this._toastTimer) clearTimeout(this._toastTimer);
      this._toastTimer = setTimeout(() => {
        toast.classList.remove("show");
      }, 3200);
    }
  }
};

// ==========================================
// 3. MULTI-ANGLE CARD & MODAL SWITCHERS
// ==========================================
function switchCardAngle(productId, angle, btn, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const card = btn.closest(".product-card");
  if (!card) return;

  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !product.images) return;

  const targetSrc = product.images[angle] || product.images.front;
  const imgEl = card.querySelector(".card-img");
  if (imgEl) {
    imgEl.style.opacity = "0.4";
    imgEl.src = targetSrc;
    imgEl.dataset.currentAngle = angle;
    imgEl.onload = () => { imgEl.style.opacity = "1"; };
  }

  card.querySelectorAll(".angle-pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
}

function switchModalImage(src, title, btn, prodId = null) {
  const modalImg = document.getElementById("modal-jar-img");
  const zoomBtn = document.querySelector ? document.querySelector(".modal-zoom-prompt") : null;
  const imgContainer = document.querySelector ? document.querySelector(".modal-img-container") : null;

  if (modalImg) {
    modalImg.style.opacity = "0.3";
    modalImg.src = src;
    modalImg.alt = title;
    modalImg.dataset.currentAngle = "front";
    modalImg.dataset.currentTitle = title;
    modalImg.dataset.currentProdId = prodId || currentModalProductId;
    modalImg.onload = () => { modalImg.style.opacity = "1"; };
  }

  // Update zoom bindings
  if (imgContainer) {
    imgContainer.onclick = () => openImageZoom(src, title, "front", prodId || currentModalProductId);
  }
  if (zoomBtn) {
    zoomBtn.onclick = () => openImageZoom(src, title, "front", prodId || currentModalProductId);
  }

  if (document.querySelectorAll) {
    document.querySelectorAll(".modal-angle-btn").forEach(b => b.classList.remove("active"));
  }
  if (btn) btn.classList.add("active");
}

function switchModalAngle(productId, angle, btn) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !product.images) return;

  const targetSrc = product.images[angle] || product.images.front;
  switchModalImage(targetSrc, `${product.name} (${angle})`, btn, productId);
}

function navigateModalImage(direction, e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  const buttons = Array.from(document.querySelectorAll(".modal-angle-btn"));
  if (!buttons || buttons.length <= 1) return;

  const activeIdx = buttons.findIndex(b => b.classList.contains("active"));
  let nextIdx = 0;
  if (activeIdx >= 0) {
    nextIdx = (activeIdx + direction + buttons.length) % buttons.length;
  } else {
    nextIdx = direction > 0 ? 0 : buttons.length - 1;
  }

  buttons[nextIdx].click();
}

// ==========================================
// 4. FULLSCREEN HIGH-RESOLUTION LIGHTBOX ZOOM & PAN ENGINE
// ==========================================
let currentZoomScale = 1.0;
let isZoomDragging = false;
let zoomStartX = 0, zoomStartY = 0;
let zoomTranslateX = 0, zoomTranslateY = 0;
let currentZoomProductId = "";
let currentZoomAngle = "front";

function openImageZoom(imageUrl, title, angle = "front", productId = null) {
  let lightbox = document.getElementById("image-zoom-lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "image-zoom-lightbox";
    document.body.appendChild(lightbox);
  }

  // Always reset zoom state completely
  currentZoomScale = 1.0;
  zoomTranslateX = 0;
  zoomTranslateY = 0;
  isZoomDragging = false;

  const product = PRODUCTS.find(p => p.id === productId);
  const angleBarHtml = (product && product.hasImages) ? `
    <div class="lightbox-angle-bar">
      <button type="button" class="angle-pill ${angle === 'front' ? 'active' : ''}" onclick="switchLightboxAngle('${productId}', 'front', this)">Front View</button>
      <button type="button" class="angle-pill ${angle === 'left' ? 'active' : ''}" onclick="switchLightboxAngle('${productId}', 'left', this)">Left Angle</button>
      <button type="button" class="angle-pill ${angle === 'right' ? 'active' : ''}" onclick="switchLightboxAngle('${productId}', 'right', this)">Right Angle</button>
    </div>
  ` : '';

  lightbox.innerHTML = `
    <div class="lightbox-header">
      <div class="lightbox-title-box">
        <strong>${title || 'Artisanal Jar Inspection'}</strong>
        <span>100% Stone-Ground Organic • High-Resolution Label Inspection</span>
      </div>
      <button type="button" class="lightbox-close-btn" onclick="closeImageZoom()" title="Close (Esc)" aria-label="Close Lightbox">✕</button>
    </div>
    
    ${angleBarHtml}

    <div class="lightbox-viewport" id="lightbox-viewport">
      <img src="${imageUrl}" alt="${title}" id="lightbox-img" class="lightbox-zoom-img" style="transform: translate(0px, 0px) scale(1);">
    </div>

    <!-- Floating Zoom Controls Toolbar -->
    <div class="lightbox-floating-toolbar">
      <button type="button" class="lightbox-toolbar-btn" onclick="zoomOut()" title="Zoom Out (−)" aria-label="Zoom Out">−</button>
      <span class="lightbox-zoom-level" id="lightbox-zoom-level">100%</span>
      <button type="button" class="lightbox-toolbar-btn" onclick="zoomIn()" title="Zoom In (+)" aria-label="Zoom In">+</button>
      <button type="button" class="lightbox-toolbar-btn" onclick="resetZoom()" title="Reset (1:1)" style="font-size:11px; font-weight:800;">1:1</button>
      <span class="lightbox-hint">Drag to pan or use + / −</span>
      <button type="button" class="lightbox-toolbar-btn" onclick="closeImageZoom()" title="Close Lightbox" style="margin-left:6px; background:rgba(255,255,255,0.25);">✕</button>
    </div>
  `;

  lightbox.style.display = "flex";
  lightbox.classList.add("active");
  _lockScroll();

  initLightboxPan();
}

function switchLightboxAngle(productId, angle, btn) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !product.images) return;
  const targetSrc = product.images[angle] || product.images.front;
  const img = document.getElementById("lightbox-img");
  if (img) {
    img.src = targetSrc;
    resetZoom();
  }
  document.querySelectorAll(".lightbox-angle-bar .angle-pill").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

function updateZoomTransform() {
  const img = document.getElementById("lightbox-img");
  const levelEl = document.getElementById("lightbox-zoom-level");
  if (!img) return;
  // Strict clamp between 1.0 and 3.5
  currentZoomScale = Math.max(1.0, Math.min(3.5, currentZoomScale));
  img.style.transform = `translate(${zoomTranslateX}px, ${zoomTranslateY}px) scale(${currentZoomScale.toFixed(2)})`;
  if (levelEl) {
    levelEl.textContent = `${Math.round(currentZoomScale * 100)}%`;
  }
}

function zoomIn() {
  currentZoomScale = Math.min(3.5, currentZoomScale + 0.35);
  updateZoomTransform();
}

function zoomOut() {
  currentZoomScale = Math.max(1.0, currentZoomScale - 0.35);
  if (currentZoomScale <= 1.0) {
    zoomTranslateX = 0;
    zoomTranslateY = 0;
  }
  updateZoomTransform();
}

function resetZoom() {
  currentZoomScale = 1.0;
  zoomTranslateX = 0;
  zoomTranslateY = 0;
  isZoomDragging = false;
  updateZoomTransform();
}

function closeImageZoom() {
  resetZoom();
  const lightbox = document.getElementById("image-zoom-lightbox");
  if (lightbox && (lightbox.classList.contains("active") || lightbox.style.display !== "none")) {
    lightbox.classList.remove("active");
    lightbox.style.display = "none";
    lightbox.innerHTML = "";
    _unlockScroll();
  }
}

function initLightboxPan() {
  const viewport = document.getElementById("lightbox-viewport");
  if (!viewport || viewport.dataset.panBound) return;
  viewport.dataset.panBound = "true";

  // Mouse pan handlers
  viewport.addEventListener("mousedown", (e) => {
    if (currentZoomScale <= 1.0) return;
    isZoomDragging = true;
    viewport.classList.add("is-dragging");
    zoomStartX = e.clientX - zoomTranslateX;
    zoomStartY = e.clientY - zoomTranslateY;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isZoomDragging) return;
    zoomTranslateX = e.clientX - zoomStartX;
    zoomTranslateY = e.clientY - zoomStartY;
    updateZoomTransform();
  });

  window.addEventListener("mouseup", () => {
    isZoomDragging = false;
    if (viewport) viewport.classList.remove("is-dragging");
  });

  // Touch handlers for mobile
  let initialPinchDist = 0;
  let initialPinchScale = 1;

  viewport.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      if (currentZoomScale > 1.0) {
        isZoomDragging = true;
        zoomStartX = e.touches[0].clientX - zoomTranslateX;
        zoomStartY = e.touches[0].clientY - zoomTranslateY;
      }
    } else if (e.touches.length === 2) {
      isZoomDragging = false;
      initialPinchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchScale = currentZoomScale;
    }
  }, { passive: true });

  viewport.addEventListener("touchmove", (e) => {
    if (e.touches.length === 1 && isZoomDragging) {
      zoomTranslateX = e.touches[0].clientX - zoomStartX;
      zoomTranslateY = e.touches[0].clientY - zoomStartY;
      updateZoomTransform();
    } else if (e.touches.length === 2 && initialPinchDist > 0) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      currentZoomScale = Math.max(1.0, Math.min(3.5, initialPinchScale * (dist / initialPinchDist)));
      updateZoomTransform();
    }
  }, { passive: true });

  viewport.addEventListener("touchend", () => {
    isZoomDragging = false;
    initialPinchDist = 0;
    if (currentZoomScale <= 1.0) {
      zoomTranslateX = 0;
      zoomTranslateY = 0;
      updateZoomTransform();
    }
  });
}

// ==========================================
// 5. PRODUCT QUICK-VIEW MODAL CONTROLLER (WITH BULK LOGIC)
// ==========================================
let currentModalProductId = null;
let currentModalSize = "180 ml";
let currentModalQty = 1;

// SINGLE GLOBAL ENTRY POINT FOR OPENING PRODUCTS
function handleProductOpen(productId) {
  if (!productId) return;
  window.location.hash = "#product-" + productId;
}

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  // Cleanly close any open zoom before opening modal
  closeImageZoom();

  // Completely reset modal state
  currentModalProductId = productId;
  currentModalSize = product.sizes[0].size;
  currentModalQty = 1;

  let backdrop = document.getElementById("product-modal-backdrop");
  let content = document.getElementById("product-modal-content");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "product-modal-backdrop";
    backdrop.id = "product-modal-backdrop";
    document.body.appendChild(backdrop);
  }
  if (!content) {
    content = document.createElement("div");
    content.className = "product-modal-card";
    content.id = "product-modal-content";
    backdrop.appendChild(content);
  }

  const isCombo = product.category === "combos";
  let activeImage = "product-preview.webp";
  if (product.images && product.images.front) {
    activeImage = product.images.front;
  } else if (isCombo) {
    activeImage = "hero banner image.webp";
  } else {
    activeImage = "upcoming products.webp";
  }

  let angleGalleryHtml = "";
  if (isCombo && product.hasImages) {
    let jar1Label = "Jar 1";
    let jar2Label = "Jar 2";
    if (product.includedProductIds && product.includedProductIds.length >= 2) {
      const p1 = PRODUCTS.find(p => p.id === product.includedProductIds[0]);
      const p2 = PRODUCTS.find(p => p.id === product.includedProductIds[1]);
      if (p1) jar1Label = p1.name.replace(" Butter", "").replace(" (100% Pure)", "");
      if (p2) jar2Label = p2.name.replace(" Butter", "").replace(" (100% Pure)", "");
    }
    angleGalleryHtml = `
      <div class="modal-angle-gallery">
        <button type="button" class="modal-angle-btn active" onclick="switchModalAngle('${product.id}', 'front', this)" title="View Combo Box">
          <img src="${product.images.front}" alt="Combo Box">
          <span>Combo Box</span>
        </button>
        <button type="button" class="modal-angle-btn" onclick="switchModalAngle('${product.id}', 'left', this)" title="View ${jar1Label}">
          <img src="${product.images.left}" alt="${jar1Label}">
          <span>${jar1Label}</span>
        </button>
        <button type="button" class="modal-angle-btn" onclick="switchModalAngle('${product.id}', 'right', this)" title="View ${jar2Label}">
          <img src="${product.images.right}" alt="${jar2Label}">
          <span>${jar2Label}</span>
        </button>
      </div>
    `;
  } else if (product.hasImages) {
    angleGalleryHtml = `
      <div class="modal-angle-gallery">
        <button type="button" class="modal-angle-btn active" onclick="switchModalAngle('${product.id}', 'front', this)">
          <img src="${product.images.front}" alt="Front View">
          <span>Front</span>
        </button>
        <button type="button" class="modal-angle-btn" onclick="switchModalAngle('${product.id}', 'left', this)">
          <img src="${product.images.left}" alt="Left Angle">
          <span>Left</span>
        </button>
        <button type="button" class="modal-angle-btn" onclick="switchModalAngle('${product.id}', 'right', this)">
          <img src="${product.images.right}" alt="Right Angle">
          <span>Right</span>
        </button>
      </div>
    `;
  } else if (isCombo && product.includedProductIds && product.includedProductIds.length > 0) {
    const comboHeroSrc = (product.images && product.images.front) ? product.images.front : "hero banner image.webp";
    const jarButtons = product.includedProductIds.map(id => {
      const p = PRODUCTS.find(prod => prod.id === id);
      if (!p) return "";
      const frontSrc = (p.images && p.images.front) ? p.images.front : "product-preview.webp";
      const shortName = p.name.replace(" Butter", "").replace(" (100% Pure)", "");
      return `
        <button type="button" class="modal-angle-btn" onclick="switchModalImage('${frontSrc}', '${p.name}', this, '${p.id}')" title="Inspect ${p.name}">
          <img src="${frontSrc}" alt="${p.name}">
          <span>${shortName}</span>
        </button>
      `;
    }).join("");

    angleGalleryHtml = `
      <div class="combo-included-nav-label" style="font-size:10.5px; font-weight:800; letter-spacing:1px; text-transform:uppercase; color:var(--brown-muted); margin-top:14px; text-align:center;">Inspect Included Jars:</div>
      <div class="modal-angle-gallery" style="flex-wrap:wrap; max-width:420px; margin-top:6px;">
        <button type="button" class="modal-angle-btn active" onclick="switchModalImage('${comboHeroSrc}', '${product.name} (Combo Set)', this, '${product.id}')" title="View Full Combo Box">
          <img src="${comboHeroSrc}" alt="${product.name}">
          <span>Combo Box</span>
        </button>
        ${jarButtons}
      </div>
    `;
  } else {
    angleGalleryHtml = `
      <div class="coming-soon-badge" style="position:static; margin-top:10px; display:inline-block;">Artisanal Reserve • Coming Soon</div>
    `;
  }

  const specGridHtml = isCombo ? `
    <div class="modal-spec-grid">
      <div class="modal-spec">
        <span class="spec-label">Combo Savings</span>
        <span class="spec-val">${product.coldMilledTemp}</span>
      </div>
      <div class="modal-spec">
        <span class="spec-label">Packaging</span>
        <span class="spec-val">Luxury Presentation Box</span>
      </div>
      <div class="modal-spec" style="grid-column: 1 / -1;">
        <span class="spec-label">Included Jars</span>
        <span class="spec-val">${product.ingredients}</span>
      </div>
    </div>
  ` : `
    <div class="modal-spec-grid">
      <div class="modal-spec">
        <span class="spec-label">Stone-Ground Milling</span>
        <span class="spec-val">${product.coldMilledTemp}</span>
      </div>
      <div class="modal-spec">
        <span class="spec-label">Terroir Origin</span>
        <span class="spec-val">${product.origin.replace("Terroir: ", "")}</span>
      </div>
      <div class="modal-spec" style="grid-column: 1 / -1;">
        <span class="spec-label">100% Pure Ingredients</span>
        <span class="spec-val">${product.ingredients}</span>
      </div>
    </div>
  `;

  content.innerHTML = `
    <button type="button" class="modal-close-btn" onclick="event.stopPropagation(); closeProductModal(true);" aria-label="Close Product View">✕</button>
    <div class="modal-product-layout">
      <div class="modal-product-gallery">
        <div class="modal-img-container" onclick="openImageZoom(document.getElementById('modal-jar-img').src, document.getElementById('modal-jar-img').dataset.currentTitle || '${product.name}', document.getElementById('modal-jar-img').dataset.currentAngle || 'front', document.getElementById('modal-jar-img').dataset.currentProdId || '${product.id}')" title="Click to inspect jar label in high resolution">
          <button type="button" class="modal-nav-arrow modal-nav-prev" onclick="navigateModalImage(-1, event)" aria-label="Previous Image" title="Previous Image">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <img src="${activeImage}" alt="${product.name}" id="modal-jar-img" class="modal-product-img" data-current-angle="front" data-current-title="${product.name}" data-current-prod-id="${product.id}" onerror="this.src='product-preview.webp'">
          <button type="button" class="modal-nav-arrow modal-nav-next" onclick="navigateModalImage(1, event)" aria-label="Next Image" title="Next Image">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
        <button type="button" class="modal-zoom-prompt" onclick="openImageZoom(document.getElementById('modal-jar-img').src, document.getElementById('modal-jar-img').dataset.currentTitle || '${product.name}', document.getElementById('modal-jar-img').dataset.currentAngle || 'front', document.getElementById('modal-jar-img').dataset.currentProdId || '${product.id}')">
          <span>Inspect Label in High Resolution</span>
        </button>
        ${angleGalleryHtml}
      </div>
      
      <div class="modal-product-details">
        <span class="modal-category-badge">${product.categoryLabel}</span>
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-subtitle">${product.tag}</div>
        <p class="modal-description">${product.description}</p>
        
        ${specGridHtml}

        <div class="size-selection-label" style="font-size:11px; font-weight:800; letter-spacing:1.2px; text-transform:uppercase; color:var(--brown-muted); margin-bottom:8px;">${isCombo ? 'Select Packaging Option:' : 'Select Pack Size:'}</div>
        <div class="modal-size-selector" id="modal-size-selector-grid">
          ${product.sizes.map((s, idx) => `
            <button type="button" class="size-btn ${idx === 0 ? 'selected' : ''} ${s.isBulk || s.price === null ? 'bulk-opt' : ''}" onclick="selectModalSize('${s.size}', this)">
              <span class="size-name">${s.size}</span>
              <span class="size-price">${s.isBulk || s.price === null ? 'Price on Request' : '₹' + s.price.toLocaleString("en-IN")}</span>
            </button>
          `).join("")}
        </div>

        <div id="modal-bulk-notice" class="bulk-inquiry-box" style="display:none;">
          <strong>Wholesale / Bulk / Custom Order Selected:</strong> Pricing is tailored based on quantity. When you click below, your inquiry will be sent directly to our WhatsApp concierge.
        </div>

        <div class="modal-purchase-container" id="modal-action-row">
          <div class="modal-tier1-row">
            <div class="modal-qty-ctrl">
              <button type="button" onclick="changeModalQty(-1)" aria-label="Decrease quantity">−</button>
              <input type="text" id="modal-qty-input" value="1" readonly>
              <button type="button" onclick="changeModalQty(1)" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="btn-primary modal-add-btn" id="modal-main-add-btn" onclick="addModalToBag()">
              <span>Add to Tasting Bag</span>
              <strong id="modal-total-price">${product.sizes[0].price !== null ? '₹' + product.sizes[0].price.toLocaleString("en-IN") : 'Price on Request'}</strong>
            </button>
          </div>
          <div class="modal-tier2-row">
            <button type="button" class="btn-whatsapp-direct modal-wa-full-btn" id="modal-direct-wa-btn" onclick="orderModalDirectWhatsApp()" title="Direct Concierge Order on WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/></svg>
              <span>Order via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Explicit backdrop dismiss handler
  backdrop.onclick = function(e) {
    if (e.target === backdrop) {
      closeProductModal(true);
    }
  };

  backdrop.style.display = "flex";
  backdrop.classList.add("active");
  _lockScroll();
  
  updateModalPriceDisplay();
}

function selectModalSize(size, btn) {
  currentModalSize = size;
  document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
  if (btn) btn.classList.add("selected");
  updateModalPriceDisplay();
}

function changeModalQty(delta) {
  currentModalQty = Math.max(1, currentModalQty + delta);
  const input = document.getElementById("modal-qty-input");
  if (input) input.value = currentModalQty;
  updateModalPriceDisplay();
}

function updateModalPriceDisplay() {
  const product = PRODUCTS.find(p => p.id === currentModalProductId);
  if (!product) return;
  const sizeOpt = product.sizes.find(s => s.size === currentModalSize) || product.sizes[0];
  const isBulk = Boolean(sizeOpt.isBulk || sizeOpt.price === null);

  const priceEl = document.getElementById("modal-total-price");
  const mainBtn = document.getElementById("modal-main-add-btn");
  const bulkNotice = document.getElementById("modal-bulk-notice");

  if (isBulk) {
    if (bulkNotice) bulkNotice.style.display = "block";
    if (priceEl) priceEl.textContent = "Price on Request";
    if (mainBtn) {
      mainBtn.innerHTML = `<span>Request Quote on WhatsApp</span>`;
      mainBtn.className = "btn-bulk-whatsapp";
      mainBtn.onclick = () => orderModalDirectWhatsApp();
    }
  } else {
    if (bulkNotice) bulkNotice.style.display = "none";
    const totalPrice = sizeOpt.price * currentModalQty;
    if (priceEl) priceEl.textContent = `₹${totalPrice.toLocaleString("en-IN")}`;
    if (mainBtn) {
      mainBtn.innerHTML = `<span>Add to Tasting Bag</span><strong id="modal-total-price">₹${totalPrice.toLocaleString("en-IN")}</strong>`;
      mainBtn.className = "btn-primary modal-add-btn";
      mainBtn.onclick = () => addModalToBag();
    }
  }
}

function addModalToBag() {
  if (!currentModalProductId) return;
  const pid = currentModalProductId;
  const psize = currentModalSize;
  const pqty = currentModalQty;
  closeProductModal(true);
  // Slight delay so the modal fully closes and body scroll is restored before the drawer re-locks it
  requestAnimationFrame(() => {
    Cart.add(pid, psize, pqty);
  });
}

function orderModalDirectWhatsApp() {
  const product = PRODUCTS.find(p => p.id === currentModalProductId);
  if (!product) return;
  const sizeOpt = product.sizes.find(s => s.size === currentModalSize) || product.sizes[0];

  let message = "";
  if (sizeOpt.isBulk || sizeOpt.price === null) {
    message = `NUT DELICACY — ORDER & WHOLESALE INQUIRY\n\n` +
      `Hello Concierge, I would like to inquire about pricing and availability for:\n` +
      `• Product: ${product.name}\n` +
      `• Option / Size: ${sizeOpt.label || sizeOpt.size}\n` +
      `• Quantity: ${currentModalQty} ${currentModalQty > 1 ? 'units' : 'unit'}\n\n` +
      `Delivery City / Pincode: [Please enter your City/Pincode]\n` +
      `Business / Contact Name: [Please enter your Name]\n\n` +
      `Please share your quotation, packaging details, and dispatch timeline. Thank you.`;
  } else {
    const total = sizeOpt.price * currentModalQty;
    message = `NUT DELICACY — ORDER INQUIRY\n\n` +
      `Hello Concierge, I would like to order:\n` +
      `• Product: ${product.name} (${sizeOpt.size})\n` +
      `• Quantity: ${currentModalQty}\n` +
      `• Estimated Total: ₹${total.toLocaleString("en-IN")}\n\n` +
      `Please share payment details and dispatch timeline. Thank you.`;
  }

  window.open(`https://wa.me/919512512151?text=${encodeURIComponent(message)}`, "_blank");
}

function closeProductModal(fromUserAction = false) {
  const backdrop = document.getElementById("product-modal-backdrop");
  if (backdrop) {
    backdrop.classList.remove("active");
    backdrop.style.display = "none";
  }

  closeImageZoom();
  currentModalProductId = null;
  _unlockScroll();

  if (fromUserAction) {
    if (window.location.hash && window.location.hash.startsWith("#product-")) {
      if (window.history && window.history.length > 1) {
        window.history.back();
      } else {
        window.location.hash = "";
      }
    }
  }
}

// ==========================================
// 6. DYNAMIC CATALOG GRID RENDERER (SORTED BY AVAILABILITY)
// ==========================================
function renderCatalogGrid(category = "all") {
  const container = document.getElementById("products-grid-container");
  if (!container) return;

  let filtered = [];
  if (category === "all") {
    filtered = PRODUCTS;
  } else if (category === "under999") {
    filtered = PRODUCTS.filter(p => p.sizes[0].price < 1000);
  } else if (category === "1000to1999") {
    filtered = PRODUCTS.filter(p => p.sizes[0].price >= 1000 && p.sizes[0].price < 2000);
  } else if (category === "2000plus") {
    filtered = PRODUCTS.filter(p => p.sizes[0].price >= 2000);
  } else {
    filtered = PRODUCTS.filter(p => p.category === category);
  }

  const sorted = [...filtered].sort((a, b) => {
    const getAvailabilityTier = (p) => {
      if (p.hasImages) return 1;
      if (p.category === "combos") return 2;
      return 3;
    };
    return getAvailabilityTier(a) - getAvailabilityTier(b);
  });

  container.innerHTML = sorted.map(product => {
    const defaultSize = product.sizes[0];
    let frontImg = "product-preview.webp";
    if (product.images && product.images.front) {
      frontImg = product.images.front;
    } else if (product.category === "combos") {
      frontImg = "hero banner image.webp";
    } else {
      frontImg = "upcoming products.webp";
    }

    const priceText = defaultSize.price !== null
      ? `₹${defaultSize.price.toLocaleString("en-IN")}`
      : "Price on Request";

    return `
      <article class="product-card" id="product-${product.id}">
        <a class="card-link" href="#product-${product.id}" data-product-id="${product.id}" aria-label="View details of ${product.name}">
          <div class="card-img-wrap">
            <img src="${frontImg}" alt="${product.name}" class="card-img" loading="lazy" onerror="this.src='product-preview.webp'">
          </div>
          <div class="card-info">
            <h3 class="card-title">${product.name}</h3>
            <div class="card-price">${priceText}</div>
          </div>
        </a>
        <button type="button" class="btn-card-quick-view" data-product-id="${product.id}" onclick="event.preventDefault(); window.location.hash = '#product-' + this.dataset.productId;" aria-label="Quick View ${product.name}">
          <span>View Details →</span>
        </button>
      </article>
    `;
  }).join("");
}

function filterCategory(cat, btn) {
  const allBtns = document.querySelectorAll(".filter-tab-btn");
  allBtns.forEach(b => b.classList.remove("active"));
  if (btn) {
    btn.classList.add("active");
  } else {
    const matchedBtn = Array.from(allBtns).find(b => {
      const oc = b.getAttribute("onclick") || "";
      return oc.includes(`'${cat}'`) || oc.includes(`"${cat}"`);
    });
    if (matchedBtn) matchedBtn.classList.add("active");
  }
  renderCatalogGrid(cat);
}

function initCategoryFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get("category");
  if (catParam && ['combos', 'artisan', 'classics', 'seeds', 'energy'].includes(catParam)) {
    filterCategory(catParam);
  }
}

// Deep linking to product modal via URL hash (#product-pistachio-butter)
function checkUrlProductHash() {
  const hash = window.location.hash;
  if (hash && hash.startsWith("#product-")) {
    const id = hash.replace("#product-", "");
    openProductModal(id);
  }
}

// ==========================================
// 7. BRAND PAGE PRELOADER CONTROLLER
// ==========================================
function initPagePreloader() {
  function dismiss() {
    const preloader = document.getElementById("page-preloader");
    if (!preloader) return;
    preloader.classList.add("preloader-done");
    setTimeout(() => {
      if (preloader && preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
    }, 450);
  }

  if (document.readyState === "complete") {
    setTimeout(dismiss, 100);
  } else {
    window.addEventListener("load", () => setTimeout(dismiss, 150));
    // Safety fallback: dismiss after 700ms max
    setTimeout(dismiss, 700);
  }
}

// Floating WhatsApp Concierge
function toggleWhatsAppConcierge() {
  const popup = document.getElementById("whatsapp-concierge-popup");
  if (popup) popup.classList.toggle("active");
}

function sendConciergeInquiry(type) {
  let msg = "";
  if (type === "order") {
    msg = "Hello Nut Delicacy Concierge, I would like to place a retail order for your stone-ground nut butters.";
  } else if (type === "bulk") {
    msg = "Hello Nut Delicacy Concierge, I am interested in wholesale/bulk quotation (5kg/10kg) for my business.";
  } else if (type === "gifting") {
    msg = "Hello Nut Delicacy Concierge, I would like information regarding corporate & wedding bespoke gifting sets.";
  }
  window.open(`https://wa.me/919512512151?text=${encodeURIComponent(msg)}`, "_blank");
}

// ==========================================
// 9. FESTIVE CELEBRATION (NAVRATRI & DIWALI POPUP)
// ==========================================
const FestiveCelebration = {
  hasTriggeredOnHomeClimax: false,
  isActive: false,

  injectModalHtml() {
    if (document.getElementById("festive-celebration-wrap")) return;
    const wrap = document.createElement("div");
    wrap.id = "festive-celebration-wrap";
    wrap.innerHTML = `
      <div class="festive-modal-backdrop" id="festive-modal-backdrop" onclick="if(event.target===this) FestiveCelebration.closeModal()">
        <div class="festive-modal-card" onclick="event.stopPropagation()">
          <button type="button" class="festive-modal-close" onclick="FestiveCelebration.closeModal()" aria-label="Close celebration modal">✕</button>
          
          <div class="festive-header">
            <div class="festive-badge-shine">
              <span class="festive-sparkle-icon">✨</span>
              <span>Coming Soon</span>
              <span class="festive-sparkle-icon">✨</span>
            </div>

            <h2 class="festive-title">
              Navratri & Diwali <span class="festive-highlight-text">Collections</span>
            </h2>
            
            <div class="festive-ornament-divider">
              <span class="ornament-line"></span>
              <span class="ornament-symbol">✦ 🪔 ✦</span>
              <span class="ornament-line"></span>
            </div>
          </div>

          <div class="festive-banner-frame">
            <img src="hero banner image.webp" alt="Njoy by Nut Delicacy Festive Collection" class="festive-banner-img" onerror="this.src='product-preview.webp'">
            <div class="festive-banner-badge">Upcoming Exclusive Hampers</div>
          </div>

          <p class="festive-desc">
            Get ready for our limited-edition Navratri and Diwali festive hampers. Experience the joy of pure, stone-ground luxury nut butters crafted specially for the season.
          </p>

          <div class="festive-actions">
            <button type="button" class="btn-festive-apply" onclick="FestiveCelebration.closeModal()">
              <span>Stay Tuned</span>
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(wrap);
  },

  launchCelebration() {
    this.injectModalHtml();
    const backdrop = document.getElementById("festive-modal-backdrop");
    if (backdrop) {
      backdrop.style.display = "flex";
      // trigger reflow
      void backdrop.offsetWidth;
      backdrop.classList.add("active");
    }
    this.isActive = true;
  },

  closeModal() {
    const backdrop = document.getElementById("festive-modal-backdrop");
    if (backdrop) {
      backdrop.classList.remove("active");
      setTimeout(() => {
        backdrop.style.display = "none";
      }, 400); // Wait for transition
    }
    this.isActive = false;
    sessionStorage.setItem("festive_modal_dismissed", "true");
  }
};


// Keyboard navigation for modals, lightboxes & image slider
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const zoom = document.getElementById("image-zoom-lightbox");
    if (zoom && zoom.classList.contains("active")) {
      closeImageZoom();
      return;
    }
    if (typeof FestiveCelebration !== "undefined" && FestiveCelebration.isActive) {
      FestiveCelebration.closeModal();
    }
    closeProductModal();
    Cart.closeDrawer();
  } else if (e.key === "ArrowRight") {
    const modal = document.getElementById("product-modal-backdrop");
    if (modal && modal.classList.contains("active")) {
      navigateModalImage(1);
    }
  } else if (e.key === "ArrowLeft") {
    const modal = document.getElementById("product-modal-backdrop");
    if (modal && modal.classList.contains("active")) {
      navigateModalImage(-1);
    }
  }
});

// ==========================================
// PURE NATIVE HASH-BASED MODAL CONTROLLER
// ==========================================
function syncModalFromHash() {
  const hash = window.location.hash || "";
  if (hash.startsWith("#product-")) {
    const productId = hash.replace("#product-", "");
    openProductModal(productId);
  } else {
    closeProductModal(false);
  }
}

window.addEventListener("hashchange", syncModalFromHash);

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initPagePreloader();
  Cart.init();
  renderCatalogGrid("all");
  initCategoryFromUrl();
  syncModalFromHash();

});

// Popstate handler for Zoom
window.addEventListener("popstate", () => {
  const zoom = document.getElementById("image-zoom-lightbox");
  if (zoom && zoom.classList.contains("active")) {
    closeImageZoom();
    return;
  }
  if (typeof FestiveCelebration !== "undefined" && FestiveCelebration.isActive) {
    FestiveCelebration.closeModal();
    return;
  }
});



// ==========================================
// 3. MORE MENU DRAWER & GLOBAL CONTROLLER
// ==========================================
function openMoreMenu() {
  const overlay = document.getElementById("more-menu-overlay");
  const sheet = document.getElementById("more-menu-sheet");
  if (overlay) {
    overlay.style.display = "block";
    setTimeout(() => overlay.classList.add("active"), 10);
  }
  if (sheet) {
    sheet.style.display = "block";
    sheet.style.visibility = "visible";
    setTimeout(() => sheet.classList.add("active"), 10);
  }
  if (typeof Cart !== "undefined" && Cart.updateBadges) {
    Cart.updateBadges();
  }
}

function closeMoreMenu() {
  const overlay = document.getElementById("more-menu-overlay");
  const sheet = document.getElementById("more-menu-sheet");
  if (sheet) {
    sheet.classList.remove("active");
    setTimeout(() => {
      sheet.style.display = "none";
      sheet.style.visibility = "hidden";
    }, 380);
  }
  if (overlay) {
    overlay.classList.remove("active");
    setTimeout(() => { overlay.style.display = "none"; }, 300);
  }
}

function toggleMoreMenu() {
  const sheet = document.getElementById("more-menu-sheet");
  if (sheet && sheet.classList.contains("active")) {
    closeMoreMenu();
  } else {
    openMoreMenu();
  }
}

function toggleNavDropdown(e) {
  if (e) e.stopPropagation();
  const wrap = document.querySelector(".nav-dropdown-wrap");
  if (wrap) wrap.classList.toggle("open");
}

document.addEventListener("click", function(e) {
  const wrap = document.querySelector(".nav-dropdown-wrap");
  if (wrap && !wrap.contains(e.target)) {
    wrap.classList.remove("open");
  }
});
