/**
 * Nut Delicacy — Master Product Catalog, Cart State, Promo Engine & Video Loader
 * Single-Origin Cold Granite Stone-Ground Organic Nut Butters
 */

// Helper to generate 2 packaging tiers for any product:
// 1. 180g Standard Jar with published retail price
// 2. Bulk Order with price on request
function createSizes(price180) {
  return [
    { size: "180g", label: "180g Standard Jar", price: price180, isBulk: false },
    { size: "Bulk Order", label: "Bulk / Wholesale Order", price: null, isBulk: true, bulkLabel: "Price on Request" }
  ];
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
// 1. MASTER PRODUCT CATALOG (19 PRODUCTS)
// ==========================================
const PRODUCTS = [
  // ----------------------------------------------------
  // SUPER PREMIUM & ARTISAN
  // ----------------------------------------------------
  {
    id: "zafran-gold-butter",
    name: "Almond Pista Saffron Butter",
    slug: "zafran-gold-butter",
    category: "artisan",
    categoryLabel: "Super Premium & Artisan",
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
    sizes: createSizes(875, 1215),
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
    sizes: createSizes(885, 1230),
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
    sizes: createSizes(925, 1285),
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
    tag: "Grand Reserve • 100% Pure Single Nut",
    subtitle: "100% Golden Roasted Hazelnuts, cold stone-ground without cocoa or sweetener. Pure single nut.",
    origin: "Terroir: Mountain Hazelnut Orchards",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "coming-soon-butter.webp",
      left: "coming-soon-butter.webp",
      right: "coming-soon-butter.webp"
    },
    sizes: createSizes(995, 1380),
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
    tag: "Grand Reserve • Sovereign Nut",
    subtitle: "100% Australian Style Roasted Macadamias, exceptionally buttery and high in monounsaturated fats.",
    origin: "Terroir: Certified Rainforest Macadamia Estates",
    coldMilledTemp: "Milled below 24°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "coming-soon-butter.webp",
      left: "coming-soon-butter.webp",
      right: "coming-soon-butter.webp"
    },
    sizes: createSizes(995, 1380),
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
    sizes: createSizes(385, 535),
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
    sizes: createSizes(395, 550),
    ingredients: "100% Whole Roasted Konkan W240 Cashews.",
    description: "Premium large whole cashews from the Konkan coast stone-milled into an ultra-creamy, naturally sweet butter with zero added sugars.",
    nutrition: { calories: "553 kcal", protein: "18.2g", fats: "43.8g", carbs: "30.2g" },
    tastingNotes: ["Natural Sweetness", "Velvety Cream", "Buttery Cashew"],
    pills: ["Naturally Sweet", "Zero Added Sugar", "Cold Milled", "Silky Smooth"]
  },
  {
    id: "almond-chocolate-butter",
    name: "Almond Chocolate Butter",
    slug: "almond-chocolate-butter",
    category: "classics",
    categoryLabel: "Classic Nut Butters",
    tag: "Gourmet Indulgence",
    subtitle: "Stone-Ground Roasted Almonds folded with single-origin raw cacao and organic coconut sugar.",
    origin: "Terroir: Kashmir Almonds & Kerala Cacao",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "coming-soon-butter.webp",
      left: "coming-soon-butter.webp",
      right: "coming-soon-butter.webp"
    },
    sizes: createSizes(455, 630),
    ingredients: "Roasted Almonds, Pure Single-Origin Dark Cacao, Organic Coconut Sugar.",
    description: "Freshly roasted whole almonds stone-ground with dark raw cacao and unrefined coconut nectar.",
    nutrition: { calories: "565 kcal", protein: "17.8g", fats: "46.2g", carbs: "26.4g" },
    tastingNotes: ["Dark Chocolate", "Nutty Almond", "Caramel Finish"],
    pills: ["Zero Palm Oil", "Dark Cacao", "Stone-Ground", "Coming Soon"]
  },
  {
    id: "walnut-almond-butter",
    name: "Walnut Almond Butter",
    slug: "walnut-almond-butter",
    category: "classics",
    categoryLabel: "Classic Nut Butters",
    tag: "Brain Synergy Dual-Nut",
    subtitle: "50% Cold-Milled Himalayan Snow Walnut + 50% Slow-Roasted Mamra Almond dual stone-ground blend.",
    origin: "Terroir: Kashmir & Himachal Valley",
    coldMilledTemp: "Milled below 25°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "coming-soon-butter.webp",
      left: "coming-soon-butter.webp",
      right: "coming-soon-butter.webp"
    },
    sizes: createSizes(485, 675),
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
    tag: "Rich Omega Dark Truffle",
    subtitle: "Himalayan Walnuts blended with rich dark artisanal cacao for an unforgettable dessert spread.",
    origin: "Terroir: Himachal Pradesh Walnuts & Single-Estate Cacao",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "coming-soon-butter.webp",
      left: "coming-soon-butter.webp",
      right: "coming-soon-butter.webp"
    },
    sizes: createSizes(525, 730),
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
    tag: "Buttery Pecan & Dark Truffle",
    subtitle: "Slow-Roasted Sweet Pecans stone-ground with velvety artisanal dark chocolate.",
    origin: "Terroir: Select Pecan Orchards & Kerala Cacao",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "coming-soon-butter.webp",
      left: "coming-soon-butter.webp",
      right: "coming-soon-butter.webp"
    },
    sizes: createSizes(525, 730),
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
    tag: "100% Himalayan Snow Walnut",
    subtitle: "100% Cold-Milled Himalayan Snow Walnuts, exceptionally rich in plant ALA Omega-3.",
    origin: "Terroir: Kashmir Valley, India",
    coldMilledTemp: "Milled below 24°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "coming-soon-butter.webp",
      left: "coming-soon-butter.webp",
      right: "coming-soon-butter.webp"
    },
    sizes: createSizes(545, 755),
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
    tag: "100% Pure Pecan",
    subtitle: "100% Roasted Whole Pecan Halves, stone-ground to silky perfection with natural caramel undertones.",
    origin: "Terroir: Hand-Selected Whole Pecans",
    coldMilledTemp: "Milled below 25°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "coming-soon-butter.webp",
      left: "coming-soon-butter.webp",
      right: "coming-soon-butter.webp"
    },
    sizes: createSizes(545, 755),
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
    tag: "Triple Fusion Reserve",
    subtitle: "Himalayan Walnut + Mamra Almond dual stone-ground blend unified with rich single-origin dark cacao.",
    origin: "Terroir: Kashmir & South Indian Single-Estate Cacao",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "coming-soon-butter.webp",
      left: "coming-soon-butter.webp",
      right: "coming-soon-butter.webp"
    },
    sizes: createSizes(605, 840),
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
    sizes: createSizes(175, 245),
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
    sizes: createSizes(295, 410),
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
    tag: "Nut-Free • Pure Seeds",
    subtitle: "100% Roasted Sunflower Kernels, stone-ground with zero additives. Allergen-free vitality.",
    origin: "Terroir: Maharashtra Organic Farms",
    coldMilledTemp: "Milled below 26°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "coming-soon-butter.webp",
      left: "coming-soon-butter.webp",
      right: "coming-soon-butter.webp"
    },
    sizes: createSizes(120, 165),
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
    tag: "Mineral Rich • Superfood",
    subtitle: "100% Slow-Milled Emerald Pumpkin Seeds rich in natural Zinc and Magnesium.",
    origin: "Terroir: Organic Certified Terroirs",
    coldMilledTemp: "Milled below 25°C",
    shelfLife: "6 Months",
    hasImages: false,
    images: {
      front: "coming-soon-butter.webp",
      left: "coming-soon-butter.webp",
      right: "coming-soon-butter.webp"
    },
    sizes: createSizes(120, 165),
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
    tag: "Clean Fuel • Energy Bites",
    subtitle: "Hand-rolled artisanal bites crafted from crushed roasted nuts, pumpkin seeds, dates, and raw cacao.",
    origin: "Terroir: Handcrafted in Surat, Gujarat",
    coldMilledTemp: "No Added Sugar",
    shelfLife: "3 Months",
    hasImages: false,
    images: {
      front: "coming-soon-butter.webp",
      left: "coming-soon-butter.webp",
      right: "coming-soon-butter.webp"
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
      left: "combo/everyday duo.webp",
      right: "combo/everyday duo.webp"
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
      left: "combo/clasic.webp",
      right: "combo/clasic.webp"
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
      left: "combo/trio.webp",
      right: "combo/trio.webp"
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
      left: "combo/complete.webp",
      right: "combo/complete.webp"
    },
    sizes: createComboSizes(2999),
    ingredients: "Peanut Butter, Peanut Chocolate, Almond Butter, Cashew Butter, Almond Pista Saffron, Hazelnut Chocolate, Pistachio Butter (180g each).",
    description: "The definitive tasting cellar. All 7 live handcrafted single-origin jars presented together at an exclusive 25% launch discount savings.",
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
      left: "combo/choclate.webp",
      right: "combo/choclate.webp"
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
      left: "combo/nutty trio.webp",
      right: "combo/nutty trio.webp"
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
      left: "combo/zafran pista.webp",
      right: "combo/zafran pista.webp"
    },
    sizes: createComboSizes(1692),
    ingredients: "1× 180g Almond Pista Saffron Butter, 1× 180g 100% Pure Pistachio Butter.",
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
    tag: "15% Off • Daily & Royal Contrast",
    subtitle: "Peanut Butter (180g) + Almond Pista Saffron Butter (180g)",
    origin: "Terroir: Saurashtra & Kashmiri Mongra Saffron",
    coldMilledTemp: "15% Combo Savings",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["peanut-butter", "zafran-gold-butter"],
    images: {
      front: "combo/evryday.webp",
      left: "combo/evryday.webp",
      right: "combo/evryday.webp"
    },
    sizes: createComboSizes(999),
    ingredients: "1× 180g Pure Peanut Butter, 1× 180g Almond Pista Saffron Butter.",
    description: "From daily workout fuel to royal evening indulgence. Includes 1× 180g Bold Peanut Butter and 1× 180g Grand Reserve Almond Pista Saffron Butter.",
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
      left: "combo/pure nut.webp",
      right: "combo/pure nut.webp"
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
      left: "combo/trio.webp",
      right: "combo/trio.webp"
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
      left: "combo/complete.webp",
      right: "combo/complete.webp"
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
    tag: "Festive Edition • Pure Sweet Luxury",
    subtitle: "Peanut Chocolate + Hazelnut Chocolate + Almond Pista Saffron (180g each)",
    origin: "Terroir: Kashmiri Saffron & Single-Estate Cacao",
    coldMilledTemp: "10% Launch Celebration Special",
    shelfLife: "6 Months",
    hasImages: true,
    isCombo: true,
    isAvailable: true,
    includedProductIds: ["peanut-chocolate-butter", "hazelnut-chocolate-butter", "zafran-gold-butter"],
    images: {
      front: "combo/milad.webp",
      left: "combo/milad.webp",
      right: "combo/milad.webp"
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
// 2. SHOPPING BAG, BULK ORDER & PROMO ENGINE
// ==========================================
const Cart = {
  items: [],
  promoCode: null,
  discountRate: 0.10, // 10% OFF for Milad un Nabi launch offer

  init() {
    try {
      const saved = localStorage.getItem("nut_delicacy_bag_v3");
      if (saved) this.items = JSON.parse(saved);
      const savedPromo = localStorage.getItem("nut_delicacy_promo");
      if (savedPromo) this.promoCode = savedPromo;
    } catch (e) {
      this.items = [];
    }
    this.updateBadges();
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
    } catch (e) {}
    this.updateBadges();
    this.renderDrawer();
  },

  add(productId, size = "180g", quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const sizeOpt = product.sizes.find(s => s.size === size) || product.sizes[0];
    const isBulk = Boolean(sizeOpt.isBulk);

    // If it is a bulk size (500g, 5kg, 10kg, Bulk Order) added directly
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

  subtotal() {
    return this.items.reduce((sum, item) => {
      if (item.isBulk || item.price === null) return sum;
      return sum + (item.price * item.quantity);
    }, 0);
  },

  discountAmount() {
    if (!this.promoCode || this.items.length === 0) return 0;
    return Math.round(this.subtotal() * this.discountRate);
  },

  total() {
    return Math.max(0, this.subtotal() - this.discountAmount());
  },

  count() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },

  applyPromo(code) {
    const clean = (code || "").trim().toUpperCase();
    const validCodes = ["MILAD10", "MILAD", "LAUNCH10", "NJOY10", "WELCOME10"];
    if (validCodes.includes(clean)) {
      this.promoCode = clean;
      this.save();
      this.showToast("Milad un Nabi 10% Launch Discount Applied");
    } else {
      this.showToast("Invalid code. Use MILAD10 for 10% off.");
    }
  },

  removePromo() {
    this.promoCode = null;
    this.save();
    this.showToast("Promo code removed");
  },

  openDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (drawer) drawer.classList.add("active");
    if (overlay) overlay.classList.add("active");
    if (document.body && document.body.style) document.body.style.overflow = "hidden";
  },

  closeDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (drawer) drawer.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    if (document.body && document.body.style) document.body.style.overflow = "";
  },

  updateBadges() {
    const count = this.count();
    document.querySelectorAll(".cart-badge-count").forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? "inline-block" : "none";
    });
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

    container.innerHTML = items.map(item => {
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

    // Render Promo Section & Subtotal / Discount Summary
    const subtotal = this.subtotal();
    const discount = this.discountAmount();
    const total = this.total();
    const hasBulkItems = items.some(i => i.isBulk);

    if (footerEl) {
      footerEl.innerHTML = `
        <!-- Milad un Nabi Launch Promo Box -->
        <div class="cart-promo-section">
          ${this.promoCode ? `
            <div class="promo-applied-badge">
              <span>Code <strong>${this.promoCode}</strong> applied (10% Off Retail)</span>
              <button onclick="Cart.removePromo()" style="background:transparent; border:0; color:#882222; cursor:pointer; font-weight:700; font-size:11px;">Remove</button>
            </div>
          ` : `
            <div class="promo-offer-banner" onclick="Cart.applyPromo('MILAD10')">
              <strong>Milad un Nabi Offer: 10% OFF</strong>
              <span class="promo-click-apply">Apply Code</span>
            </div>
            <div class="promo-input-row">
              <input type="text" id="cart-promo-input" placeholder="Promo code (MILAD10)" onkeydown="if(event.key==='Enter'){Cart.applyPromo(this.value); event.preventDefault();}">
              <button onclick="Cart.applyPromo(document.getElementById('cart-promo-input').value)">Apply</button>
            </div>
          `}
        </div>

        ${subtotal > 0 ? `
          <div class="cart-summary-line">
            <span>Retail Items Subtotal</span>
            <span>₹${subtotal.toLocaleString("en-IN")}</span>
          </div>
        ` : ''}

        ${discount > 0 ? `
          <div class="cart-discount-line">
            <span>Launch Discount (10%)</span>
            <span>-₹${discount.toLocaleString("en-IN")}</span>
          </div>
        ` : ''}

        ${subtotal > 0 ? `
          <div class="cart-subtotal-row">
            <span>Payable Total (Retail)</span>
            <strong>₹${total.toLocaleString("en-IN")}</strong>
          </div>
        ` : ''}

        ${hasBulkItems ? `
          <div style="font-size:11.5px; color:var(--brown-muted); background:rgba(63,75,35,0.06); border:1px solid rgba(63,75,35,0.18); padding:7px 10px; border-radius:6px; margin:8px 0;">
            <strong>Wholesale / Bulk items included:</strong> Pricing will be quoted directly on WhatsApp based on requirement.
          </div>
        ` : ''}

        <div class="cart-shipping-note">
          <span>Single-origin stone-ground jars in protective packaging</span>
        </div>

        <button class="btn-whatsapp-checkout" onclick="Cart.checkoutWhatsApp()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/></svg>
          <span>Send Order to WhatsApp Concierge</span>
          <span>→</span>
        </button>
      `;
    }
  },

  checkoutWhatsApp() {
    if (this.items.length === 0) {
      this.showToast("Your Tasting Bag is empty");
      return;
    }

    const retailItems = this.items.filter(i => !i.isBulk);
    const bulkItems = this.items.filter(i => i.isBulk);

    let itemsText = "";

    if (retailItems.length > 0) {
      itemsText += `Retail Selection:\n` +
        retailItems.map((item, idx) =>
          `${idx + 1}. ${item.name} (${item.size}) × ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString("en-IN")}`
        ).join("\n") + "\n";
    }

    if (bulkItems.length > 0) {
      if (itemsText) itemsText += `\n`;
      itemsText += `Wholesale / Bulk Inquiries:\n` +
        bulkItems.map((item, idx) =>
          `• ${item.name} (${item.size}) × ${item.quantity} units [Wholesale Quote Requested]`
        ).join("\n") + "\n";
    }

    const subtotal = this.subtotal();
    const discount = this.discountAmount();
    const total = this.total();

    let promoMsg = "";
    if (this.promoCode && discount > 0) {
      promoMsg = `\nMilad un Nabi Launch Offer (Code: ${this.promoCode}): -₹${discount.toLocaleString("en-IN")} (10% OFF)`;
    }

    let totalLine = "";
    if (subtotal > 0) {
      totalLine = `──────────────────\n` +
        `Retail Subtotal: ₹${subtotal.toLocaleString("en-IN")}` +
        `${promoMsg}\n` +
        `Payable Total (Retail): ₹${total.toLocaleString("en-IN")}`;
      if (bulkItems.length > 0) {
        totalLine += `\n(Wholesale items will be quoted separately)`;
      }
    }

    const message = `NUT DELICACY — ORDER & BULK INQUIRY\n\n` +
      `Hello Concierge, I would like to place an order from your collection:\n\n` +
      `${itemsText}` +
      `${totalLine}\n\n` +
      `Delivery City / Pincode: [Please enter your City/Pincode]\n` +
      `Name / Business Name: [Please enter your Name]\n\n` +
      `Please confirm availability, payment details, and dispatch timeline. Thank you.`;

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
let currentZoomScale = 1.6;
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

  currentZoomScale = 1.6;
  zoomTranslateX = 0;
  zoomTranslateY = 0;

  const product = PRODUCTS.find(p => p.id === productId);
  const angleBarHtml = (product && product.hasImages) ? `
    <div class="lightbox-angle-bar">
      <button class="angle-pill ${angle === 'front' ? 'active' : ''}" onclick="switchLightboxAngle('${productId}', 'front', this)">Front View</button>
      <button class="angle-pill ${angle === 'left' ? 'active' : ''}" onclick="switchLightboxAngle('${productId}', 'left', this)">Left Angle</button>
      <button class="angle-pill ${angle === 'right' ? 'active' : ''}" onclick="switchLightboxAngle('${productId}', 'right', this)">Right Angle</button>
    </div>
  ` : '';

  lightbox.innerHTML = `
    <div class="lightbox-header">
      <div class="lightbox-title-box">
        <strong>${title || 'Artisanal Jar Inspection'}</strong>
        <span>100% Stone-Ground Organic • High-Resolution Label Inspection</span>
      </div>
      <button class="lightbox-close-btn" onclick="closeImageZoom()" title="Close (Esc)" aria-label="Close Lightbox">✕</button>
    </div>
    
    ${angleBarHtml}

    <div class="lightbox-viewport" id="lightbox-viewport" onclick="handleViewportClick(event)">
      <img src="${imageUrl}" alt="${title}" id="lightbox-img" class="lightbox-zoom-img" style="transform: translate(0px, 0px) scale(1.6);">
    </div>

    <!-- Floating Zoom Controls Toolbar -->
    <div class="lightbox-floating-toolbar">
      <button class="lightbox-toolbar-btn" onclick="zoomOut()" title="Zoom Out (−)" aria-label="Zoom Out">−</button>
      <span class="lightbox-zoom-level" id="lightbox-zoom-level">160%</span>
      <button class="lightbox-toolbar-btn" onclick="zoomIn()" title="Zoom In (+)" aria-label="Zoom In">+</button>
      <button class="lightbox-toolbar-btn" onclick="resetZoom()" title="Reset (1:1)" style="font-size:11px; font-weight:800;">1:1</button>
      <span class="lightbox-hint">Drag, scroll or pinch to pan across label</span>
      <button class="lightbox-toolbar-btn" onclick="closeImageZoom()" title="Close Lightbox" style="margin-left:6px; background:rgba(255,255,255,0.25);">✕</button>
    </div>
  `;

  lightbox.style.display = "flex";
  lightbox.classList.add("active");
  if (document.body && document.body.style) document.body.style.overflow = "hidden";

  initLightboxPan();
}

function switchLightboxAngle(productId, angle, btn) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !product.images) return;
  const targetSrc = product.images[angle] || product.images.front;
  const img = document.getElementById("lightbox-img");
  if (img) {
    img.src = targetSrc;
  }
  document.querySelectorAll(".lightbox-angle-bar .angle-pill").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

function updateZoomTransform() {
  const img = document.getElementById("lightbox-img");
  const levelEl = document.getElementById("lightbox-zoom-level");
  if (!img) return;
  img.style.transform = `translate(${zoomTranslateX}px, ${zoomTranslateY}px) scale(${currentZoomScale.toFixed(2)})`;
  if (levelEl) {
    levelEl.textContent = `${Math.round(currentZoomScale * 100)}%`;
  }
}

function zoomIn() {
  currentZoomScale = Math.min(4.5, currentZoomScale + 0.35);
  updateZoomTransform();
}

function zoomOut() {
  currentZoomScale = Math.max(0.6, currentZoomScale - 0.35);
  updateZoomTransform();
}

function resetZoom() {
  currentZoomScale = 1.0;
  zoomTranslateX = 0;
  zoomTranslateY = 0;
  updateZoomTransform();
}

function handleViewportClick(e) {
  if (e.target.id !== "lightbox-img") return;
  // Double-tap / single-tap toggle
  if (currentZoomScale > 1.8) {
    resetZoom();
  } else {
    currentZoomScale = 2.6;
    updateZoomTransform();
  }
}

function closeImageZoom() {
  const lightbox = document.getElementById("image-zoom-lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
    setTimeout(() => {
      if (!lightbox.classList.contains("active")) {
        lightbox.style.display = "none";
      }
    }, 300);
  }
  const modalBackdrop = document.getElementById("product-modal-backdrop");
  if (!modalBackdrop || !modalBackdrop.classList.contains("active")) {
    if (document.body && document.body.style) document.body.style.overflow = "";
  }
}

function initLightboxPan() {
  const viewport = document.getElementById("lightbox-viewport");
  if (!viewport) return;

  // Mouse pan handlers
  viewport.addEventListener("mousedown", (e) => {
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
      isZoomDragging = true;
      zoomStartX = e.touches[0].clientX - zoomTranslateX;
      zoomStartY = e.touches[0].clientY - zoomTranslateY;
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
      currentZoomScale = Math.max(0.6, Math.min(4.5, initialPinchScale * (dist / initialPinchDist)));
      updateZoomTransform();
    }
  }, { passive: true });

  viewport.addEventListener("touchend", () => {
    isZoomDragging = false;
    initialPinchDist = 0;
  });

  // Smooth mouse wheel zoom
  viewport.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      currentZoomScale = Math.min(4.5, currentZoomScale + 0.25);
    } else {
      currentZoomScale = Math.max(0.6, currentZoomScale - 0.25);
    }
    updateZoomTransform();
  }, { passive: false });
}

// ==========================================
// 5. PRODUCT QUICK-VIEW MODAL CONTROLLER (WITH BULK LOGIC)
// ==========================================
let currentModalProductId = null;
let currentModalSize = "180g";
let currentModalQty = 1;

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  currentModalProductId = productId;
  currentModalSize = product.sizes[0].size;
  currentModalQty = 1;

  const backdrop = document.getElementById("product-modal-backdrop");
  const content = document.getElementById("product-modal-content");
  if (!backdrop || !content) return;

  const isCombo = product.category === "combos";
  let activeImage = "product-preview.webp";
  if (product.images && product.images.front) {
    activeImage = product.images.front;
  } else if (isCombo) {
    activeImage = "hero banner image.webp";
  } else {
    activeImage = "coming-soon-butter.webp";
  }

  let angleGalleryHtml = "";
  if (product.hasImages) {
    angleGalleryHtml = `
      <div class="modal-angle-gallery">
        <button class="modal-angle-btn active" onclick="switchModalAngle('${product.id}', 'front', this)">
          <img src="${product.images.front}" alt="Front">
          <span>Front</span>
        </button>
        <button class="modal-angle-btn" onclick="switchModalAngle('${product.id}', 'left', this)">
          <img src="${product.images.left}" alt="Left">
          <span>Left</span>
        </button>
        <button class="modal-angle-btn" onclick="switchModalAngle('${product.id}', 'right', this)">
          <img src="${product.images.right}" alt="Right">
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
        <button class="modal-angle-btn" onclick="switchModalImage('${frontSrc}', '${p.name}', this, '${p.id}')" title="Inspect ${p.name}">
          <img src="${frontSrc}" alt="${p.name}">
          <span>${shortName}</span>
        </button>
      `;
    }).join("");

    angleGalleryHtml = `
      <div class="combo-included-nav-label" style="font-size:10.5px; font-weight:800; letter-spacing:1px; text-transform:uppercase; color:var(--brown-muted); margin-top:14px; text-align:center;">Inspect Included Jars:</div>
      <div class="modal-angle-gallery" style="flex-wrap:wrap; max-width:420px; margin-top:6px;">
        <button class="modal-angle-btn active" onclick="switchModalImage('${comboHeroSrc}', '${product.name} (Combo Set)', this, '${product.id}')" title="View Full Combo Box">
          <img src="${comboHeroSrc}" alt="${product.name}">
          <span>Combo Box</span>
        </button>
        ${jarButtons}
      </div>
    `;
  } else {
    angleGalleryHtml = `
      <div class="coming-soon-badge" style="position:static; margin-top:10px; display:inline-block;">Artisanal Reserve • Launching Soon</div>
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
    <button class="modal-close-btn" onclick="closeProductModal()" aria-label="Close Product View">✕</button>
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
            <button class="size-btn ${idx === 0 ? 'selected' : ''} ${s.isBulk || s.price === null ? 'bulk-opt' : ''}" onclick="selectModalSize('${s.size}', this)">
              <span class="size-name">${s.size}</span>
              <span class="size-price">${s.isBulk || s.price === null ? 'Price on Request' : '₹' + s.price.toLocaleString("en-IN")}</span>
            </button>
          `).join("")}
        </div>

        <div id="modal-bulk-notice" class="bulk-inquiry-box" style="display:none;">
          <strong>Wholesale / Bulk / Custom Order Selected:</strong> Pricing is tailored based on quantity. When you click below, your inquiry will be sent directly to our WhatsApp concierge.
        </div>

        <div class="modal-action-row" id="modal-action-row">
          <div class="modal-qty-ctrl">
            <button onclick="changeModalQty(-1)" aria-label="Decrease quantity">−</button>
            <input type="text" id="modal-qty-input" value="1" readonly>
            <button onclick="changeModalQty(1)" aria-label="Increase quantity">+</button>
          </div>
          <button class="btn-primary modal-add-btn" id="modal-main-add-btn" onclick="addModalToBag()">
            <span>Add to Tasting Bag</span>
            <strong id="modal-total-price">${product.sizes[0].price !== null ? '₹' + product.sizes[0].price.toLocaleString("en-IN") : 'Price on Request'}</strong>
          </button>
          <button class="btn-whatsapp-direct" id="modal-direct-wa-btn" onclick="orderModalDirectWhatsApp()" title="Direct Concierge Order">
            <span>Order via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add("active");
  if (document.body && document.body.style) document.body.style.overflow = "hidden";
  window.location.hash = `product-${productId}`;
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
  Cart.add(currentModalProductId, currentModalSize, currentModalQty);
  closeProductModal();
}

function orderModalDirectWhatsApp() {
  const product = PRODUCTS.find(p => p.id === currentModalProductId);
  if (!product) return;
  const sizeOpt = product.sizes.find(s => s.size === currentModalSize) || product.sizes[0];

  let message = "";
  if (sizeOpt.isBulk || sizeOpt.price === null) {
    // Bulk / Custom WhatsApp message — PRICE NOT DISCLOSED!
    message = `NUT DELICACY — ORDER & WHOLESALE INQUIRY\n\n` +
      `Hello Concierge, I would like to inquire about pricing and availability for:\n` +
      `• Product: ${product.name}\n` +
      `• Option / Size: ${sizeOpt.label || sizeOpt.size}\n` +
      `• Quantity: ${currentModalQty} ${currentModalQty > 1 ? 'units' : 'unit'}\n\n` +
      `Delivery City / Pincode: [Please enter your City/Pincode]\n` +
      `Business / Contact Name: [Please enter your Name]\n\n` +
      `Please share your quotation, packaging details, and dispatch timeline. Thank you.`;
  } else {
    // Retail Order WhatsApp message
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

function closeProductModal() {
  const backdrop = document.getElementById("product-modal-backdrop");
  if (backdrop) backdrop.classList.remove("active");
  if (document.body && document.body.style) document.body.style.overflow = "";
  if (window.location.hash.startsWith("#product-")) {
    history.replaceState(null, null, " ");
  }
}

// ==========================================
// 6. DYNAMIC CATALOG GRID RENDERER (SORTED BY AVAILABILITY)
// ==========================================
function renderCatalogGrid(category = "all") {
  const container = document.getElementById("products-grid-container");
  if (!container) return;

  const filtered = category === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === category);

  // Sort by availability:
  // 1. In-Stock Single-Origin Jars (hasImages: true)
  // 2. Curated Combo Offers (category === 'combos')
  // 3. Coming Soon / Artisanal Reserves (hasImages: false)
  const sorted = [...filtered].sort((a, b) => {
    const getAvailabilityTier = (p) => {
      if (p.hasImages) return 1; // Live single-origin products
      if (p.category === "combos") return 2; // Live curated combos
      return 3; // Coming soon reserves
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
      frontImg = "coming-soon-butter.webp";
    }

    const priceText = defaultSize.price !== null
      ? `₹${defaultSize.price.toLocaleString("en-IN")}`
      : "Price on Request";

    return `
      <article class="product-card" id="product-${product.id}" onclick="openProductModal('${product.id}')" title="Click to view details of ${product.name}">
        <div class="card-img-wrap">
          <img src="${frontImg}" alt="${product.name}" class="card-img" loading="lazy" onerror="this.src='product-preview.webp'">
        </div>
        <div class="card-info">
          <h3 class="card-title">${product.name}</h3>
          <div class="card-price">${priceText}</div>
        </div>
      </article>
    `;
  }).join("");
}

function filterCategory(cat, btn) {
  document.querySelectorAll(".filter-tab-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderCatalogGrid(cat);
}

// Deep linking to product modal via URL hash (#product-pistachio-butter)
function checkUrlProductHash() {
  const hash = window.location.hash;
  if (hash && hash.startsWith("#product-")) {
    const id = hash.replace("#product-", "");
    setTimeout(() => {
      openProductModal(id);
    }, 150);
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

// ==========================================
// 8. GLOBAL CONCIERGE HELPERS & INITIALIZATION
// ==========================================
function toggleWhatsAppConcierge() {
  const popup = document.getElementById("whatsapp-concierge-popup");
  if (popup) popup.classList.toggle("active");
}

function sendConciergeInquiry(type) {
  let text = "Hello Nut Delicacy! I would like to inquire about your artisanal stone-ground nut butters.";
  if (type === "order") text = "Hello Nut Delicacy! I would like to customize an artisanal nut butter order.";
  if (type === "bulk") text = "Hello! I would like to request wholesale / bulk packaging and pricing.";
  if (type === "gifting") text = "Hello! I am inquiring about luxury corporate and wedding gifting jars.";
  if (type === "tasting") text = "Hello! I would love recommendations on flavor pairings and single-origin reserve jars.";
  window.open(`https://wa.me/919512512151?text=${encodeURIComponent(text)}`, "_blank");
  toggleWhatsAppConcierge();
}

// ==========================================
// 9. MILAD UN NABI CELEBRATION & FIREWORKS ENGINE
// ==========================================
const MiladCelebration = {
  canvas: null,
  ctx: null,
  particles: [],
  animId: null,
  startTime: null,
  duration: 10000, // 10 seconds fireworks & confetti
  isActive: false,
  hasTriggeredOnHomeClimax: false,

  init() {
    let modal = document.getElementById("milad-celebration-modal");
    if (!modal) {
      this.injectModalHtml();
    }
  },

  injectModalHtml() {
    if (document.getElementById("milad-celebration-wrap")) return;
    const wrap = document.createElement("div");
    wrap.id = "milad-celebration-wrap";
    wrap.innerHTML = `
      <canvas id="celebration-canvas" class="celebration-canvas"></canvas>
      <div class="milad-modal-backdrop" id="milad-modal-backdrop" onclick="if(event.target===this) MiladCelebration.closeModal()">
        <div class="milad-modal-card" id="milad-modal-card">
          <button class="milad-modal-close" onclick="MiladCelebration.closeModal()" aria-label="Close Celebration View">✕</button>
          <div class="milad-modal-header">
            <div class="milad-eyebrow">Milad un Nabi Mubarak • Grand Launch Offer</div>
            <h2 class="milad-title">Milad Mubarak</h2>
            <div class="milad-subtitle">Celebrating Purity, Health & Real Artisanal Joy</div>
          </div>
          <div class="milad-banner-frame">
            <img src="hero banner image.webp" alt="Njoy by Nut Delicacy Pure Collection" class="milad-banner-img" onerror="this.src='product-preview.webp'">
            <div class="milad-banner-badge">100% Single-Origin Stone-Ground • All 19 Artisanal Varieties</div>
          </div>
          <div class="milad-modal-body">
            <p class="milad-offer-text">
              On the auspicious occasion of <strong>Milad un Nabi</strong>, enjoy an exclusive <strong>10% Launch Celebration Discount</strong> across our entire pure stone-ground nut butter collection.
            </p>
            <div class="milad-promo-box" onclick="MiladCelebration.applyPromoAndShop()">
              <div class="milad-promo-info">
                <span class="milad-promo-label">Special Festive Promo Code</span>
                <span class="milad-promo-code">MILAD10</span>
              </div>
              <button class="milad-promo-btn" type="button">Apply 10% Off</button>
            </div>
          </div>
          <div class="milad-modal-actions">
            <a href="products.html" class="btn-primary milad-action-shop" onclick="MiladCelebration.applyPromoAndShop()">
              <span>Explore Festive Collection</span>
              <span>→</span>
            </a>
            <a href="https://wa.me/919512512151?text=Milad%20Mubarak!%20I%20would%20like%20to%20order%20artisanal%20nut%20butters%20with%20the%20MILAD10%2010%25%20launch%20discount." target="_blank" rel="noopener noreferrer" class="btn-whatsapp-direct milad-action-wa" title="Order via WhatsApp">
              <span>Claim Offer on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(wrap);
  },

  launchCelebration() {
    this.injectModalHtml();
    const backdrop = document.getElementById("milad-modal-backdrop");
    if (backdrop) backdrop.classList.add("active");
    this.startParticles();
  },

  closeModal() {
    const backdrop = document.getElementById("milad-modal-backdrop");
    if (backdrop) backdrop.classList.remove("active");
    sessionStorage.setItem("milad_modal_dismissed", "true");
  },

  applyPromoAndShop() {
    Cart.applyPromoCode("MILAD10");
    this.closeModal();
    if (!window.location.pathname.includes("products.html")) {
      window.location.href = "products.html";
    }
  },

  startParticles() {
    this.canvas = document.getElementById("celebration-canvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());

    this.particles = [];
    this.startTime = performance.now();
    this.isActive = true;
    
    // Launch bursts
    this.spawnBursts();
    this.animate(performance.now());
  },

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  spawnBursts() {
    if (!this.isActive) return;
    const elapsed = performance.now() - this.startTime;
    if (elapsed > this.duration) {
      this.isActive = false;
      return;
    }

    const colors = [
      "#ffd700", "#d4af37", "#b38b47", "#f3e5ab", // Rich Golds
      "#0f703c", "#1b4332", "#2d6a4f", // Royal Emeralds
      "#ffffff", "#fffdfa", "#f7f1e5", // Shimmering Pearls
      "#e0a96d", "#c5a059", "#b87333"  // Rose Gold & Bronze
    ];
    const w = window.innerWidth;
    const h = window.innerHeight;

    // High volume: 24 ribbons per burst from left & right sides with slow floating flutter physics
    for (let i = 0; i < 24; i++) {
      // Left side burst
      const angleL = -Math.PI / 3 + (Math.random() * 0.7 - 0.35);
      const speedL = 9 + Math.random() * 11;
      this.particles.push({
        x: Math.random() * 60,
        y: h - Math.random() * 30,
        vx: Math.cos(angleL) * speedL,
        vy: Math.sin(angleL) * speedL,
        w: 9 + Math.random() * 8,
        h: 14 + Math.random() * 12,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10,
        tiltSpeed: 0.04 + Math.random() * 0.07,
        wobble: 0,
        wobbleSpeed: 0.03 + Math.random() * 0.05,
        gravity: 0.11 + Math.random() * 0.07, // Slow, majestic floating drift
        drag: 0.98,
        alpha: 1,
        fade: 0.0035 + Math.random() * 0.003,
        isRibbon: true
      });

      // Right side burst
      const angleR = -2 * Math.PI / 3 + (Math.random() * 0.7 - 0.35);
      const speedR = 9 + Math.random() * 11;
      this.particles.push({
        x: w - Math.random() * 60,
        y: h - Math.random() * 30,
        vx: Math.cos(angleR) * speedR,
        vy: Math.sin(angleR) * speedR,
        w: 9 + Math.random() * 8,
        h: 14 + Math.random() * 12,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10,
        tiltSpeed: 0.04 + Math.random() * 0.07,
        wobble: 0,
        wobbleSpeed: 0.03 + Math.random() * 0.05,
        gravity: 0.11 + Math.random() * 0.07,
        drag: 0.98,
        alpha: 1,
        fade: 0.0035 + Math.random() * 0.003,
        isRibbon: true
      });
    }

    // Majestic Fireworks Rockets exploding in the sky
    if (Math.random() < 0.75) {
      const originX = Math.random() < 0.5 ? (w * 0.18 + Math.random() * (w * 0.28)) : (w * 0.54 + Math.random() * (w * 0.28));
      const originY = h * 0.15 + Math.random() * (h * 0.32);
      const fireworkColor = colors[Math.floor(Math.random() * colors.length)];
      for (let s = 0; s < 42; s++) {
        const starAngle = (s / 42) * Math.PI * 2 + Math.random() * 0.15;
        const starSpeed = 2.5 + Math.random() * 6.5;
        this.particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(starAngle) * starSpeed,
          vy: Math.sin(starAngle) * starSpeed,
          size: 2.5 + Math.random() * 2.5,
          color: fireworkColor,
          gravity: 0.06,
          drag: 0.955,
          alpha: 1,
          fade: 0.012 + Math.random() * 0.01,
          isSpark: true
        });
      }
    }

    // Schedule next spawn burst while active (<10s)
    if (this.isActive) {
      setTimeout(() => this.spawnBursts(), 250);
    }
  },

  animate(now) {
    if (!this.ctx || !this.canvas) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= p.drag;
      p.vy = p.vy * p.drag + p.gravity;
      p.alpha -= p.fade;

      if (p.isRibbon) {
        p.tilt += p.tiltSpeed;
        p.wobble += p.wobbleSpeed;
        p.x += Math.sin(p.wobble) * 0.8;
      }

      if (p.alpha <= 0 || p.y > this.canvas.height + 60) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);

      if (p.isRibbon) {
        this.ctx.translate(p.x, p.y);
        const currentWidth = p.w * Math.cos(p.tilt);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-currentWidth / 2, -p.h / 2, currentWidth, p.h);
      } else if (p.isSpark) {
        this.ctx.fillStyle = p.color;
        this.ctx.shadowColor = p.color;
        this.ctx.shadowBlur = 8;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    const elapsed = now - this.startTime;
    if (elapsed < this.duration || this.particles.length > 0) {
      this.animId = requestAnimationFrame((t) => this.animate(t));
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (this.animId) cancelAnimationFrame(this.animId);
    }
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
    MiladCelebration.closeModal();
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

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initPagePreloader();
  Cart.init();
  renderCatalogGrid("all");
  checkUrlProductHash();
  MiladCelebration.init();
});

window.addEventListener("hashchange", checkUrlProductHash);
