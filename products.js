/**
 * Nut Delicacy — Master Product Catalog, Cart State & WhatsApp Integration
 * WhatsApp Concierge: +91 95125 12151
 * Instagram: https://www.instagram.com/nut_delicacy/
 * Facebook: https://www.facebook.com/profile.php?id=61593416630125
 */

const WHATSAPP_NUMBER = "919512512151";
const INSTAGRAM_URL = "https://www.instagram.com/nut_delicacy/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61593416630125";

const PRODUCTS = [
  // ==========================================
  // 1. CLASSICS & INDULGENCE
  // ==========================================
  {
    id: "peanut-butter",
    name: "Classic Peanut Butter",
    category: "classics",
    categoryLabel: "Classic Stone-Ground",
    badge: "Bestseller",
    priceDisplay: "₹299",
    subtitle: "100% Slow-Roasted Saurashtra Bold Peanuts",
    description: "Crafted from hand-selected, slow-roasted Saurashtra peanuts milled to perfection between granite stones. Natural oils remain intact for unmatched richness and authentic roasted aroma.",
    origin: "Saurashtra, Gujarat (Single-Origin)",
    ingredients: "100% Roasted Organic Peanuts (No Added Sugar, No Hydrogenated Oil, Zero Salt)",
    texture: "Velvety Smooth & Creamy",
    roastLevel: "Medium Golden Roast",
    isBestSeller: true,
    isReserve: false,
    image: "peanut-butter.webp",
    sizes: [
      { size: "250g", price: 299 },
      { size: "500g", price: 549 },
      { size: "1kg", price: 999 }
    ],
    nutrition: {
      serving: "100g",
      calories: "588 kcal",
      protein: "26.0g",
      healthyFats: "50.0g",
      carbs: "20.0g",
      fiber: "8.5g",
      sugar: "0.0g (Zero Added)"
    },
    tastingNotes: ["Deep Toasted Peanut", "Naturally Sweet Undertones", "Buttery Velvet Finish"],
    pairings: ["Artisanal Sourdough Toast", "Morning Banana Oats", "Post-Workout Smoothies", "Fruit Slices"]
  },
  {
    id: "peanut-chocolate",
    name: "Peanut Chocolate",
    category: "classics",
    categoryLabel: "Classic Indulgence",
    badge: "Connoisseur Choice",
    priceDisplay: "₹349",
    subtitle: "Stone-Ground Roasted Peanuts with Pure Cacao",
    description: "A decadent harmony of slow-milled roasted peanuts blended with natural cocoa powder and a hint of organic coconut blossom nectar. Clean, guilt-free indulgence without palm oil.",
    origin: "Saurashtra Peanuts & Single-Origin Cacao",
    ingredients: "Roasted Peanuts (85%), Pure Single-Origin Cacao (12%), Coconut Blossom Nectar (3%)",
    texture: "Silky Chocolate Spread",
    roastLevel: "Medium Dark Roast",
    isBestSeller: true,
    isReserve: false,
    image: "peanut-chocolate.webp",
    sizes: [
      { size: "250g", price: 349 },
      { size: "500g", price: 629 },
      { size: "1kg", price: 1149 }
    ],
    nutrition: {
      serving: "100g",
      calories: "572 kcal",
      protein: "23.5g",
      healthyFats: "46.0g",
      carbs: "24.0g",
      fiber: "9.2g",
      sugar: "3.2g (Natural Unrefined)"
    },
    tastingNotes: ["Warm Roasted Cacao", "Nutty Chocolate Ganache", "Subtle Caramel Aroma"],
    pairings: ["Warm Croissants", "Crepes & Pancakes", "Berry Bowls", "Espresso Dip"]
  },
  {
    id: "peanut-dark-chocolate",
    name: "Peanut Dark Chocolate",
    category: "classics",
    categoryLabel: "Classic Indulgence",
    badge: "70% Dark Blend",
    priceDisplay: "₹379",
    subtitle: "Intense 70% Dark Cacao & Roasted Peanuts",
    description: "Designed for dark chocolate purists. Bold, high-polyphenol dark cacao paired with slow stone-ground roasted peanuts. Rich, bittersweet, and packed with natural antioxidants.",
    origin: "Indian Single-Origin Dark Cacao & Saurashtra Peanuts",
    ingredients: "Roasted Peanuts (78%), 70% Single-Origin Dark Cacao Mass (20%), Pure Stevia Leaf (2%)",
    texture: "Rich Truffle Texture",
    roastLevel: "Bold Dark Roast",
    isBestSeller: false,
    isReserve: false,
    image: "peanut-dark-chocolate.webp",
    sizes: [
      { size: "250g", price: 379 },
      { size: "500g", price: 699 },
      { size: "1kg", price: 1249 }
    ],
    nutrition: {
      serving: "100g",
      calories: "565 kcal",
      protein: "24.2g",
      healthyFats: "47.5g",
      carbs: "19.0g",
      fiber: "11.0g",
      sugar: "0.5g (Natural Trace)"
    },
    tastingNotes: ["Intense Dark Chocolate", "Bittersweet Cacao Truffle", "Roasted Peanut Finish"],
    pairings: ["Dark Roast Espresso", "Sourdough with Sea Salt", "Protein Bowls", "Gourmet Baking"]
  },

  // ==========================================
  // 2. ARTISANAL STONE-GROUND
  // ==========================================
  {
    id: "almond-butter",
    name: "Almond Butter",
    category: "artisanal",
    categoryLabel: "Artisanal Single-Origin",
    badge: "Pure Organic",
    priceDisplay: "₹599",
    subtitle: "100% Californian & Mamra Slow-Roasted Almonds",
    description: "Milled at temperatures below 28°C on traditional stone grinders to preserve the essential Vitamin E, magnesium, and delicate monounsaturated fats. A silky texture with an intoxicating roasted almond perfume.",
    origin: "California & Kashmiri Mamra Almonds",
    ingredients: "100% Slow-Roasted Whole Almonds (Zero Additives)",
    texture: "Ultra-Silky Stone-Milled",
    roastLevel: "Light Golden Roast",
    isBestSeller: true,
    isReserve: false,
    image: "almond-butter.webp",
    sizes: [
      { size: "250g", price: 599 },
      { size: "500g", price: 1099 },
      { size: "1kg", price: 1999 }
    ],
    nutrition: {
      serving: "100g",
      calories: "614 kcal",
      protein: "21.5g",
      healthyFats: "53.0g",
      carbs: "18.5g",
      fiber: "10.5g",
      sugar: "0.0g"
    },
    tastingNotes: ["Sweet Marzipan Notes", "Toasted Almond Skin", "Buttery Clean Finish"],
    pairings: ["Morning Apple & Pear Slices", "Greek Yogurt Parfait", "Grain Bowls", "Green Smoothies"]
  },
  {
    id: "walnut-butter",
    name: "Walnut Butter",
    category: "artisanal",
    categoryLabel: "Artisanal Superfood",
    badge: "Omega-3 Rich",
    priceDisplay: "₹649",
    subtitle: "Cold-Milled Himalayan Snow Walnuts",
    description: "Pure brain food. Hand-cracked Himalayan snow walnuts, gently stone-ground to release rich plant-based ALA Omega-3 fatty acids without oxidizing delicate oils. Earthy, sophisticated, and deeply nourishing.",
    origin: "Himalayan Valleys, Kashmir",
    ingredients: "100% Pure Raw & Lightly Roasted Himalayan Walnuts",
    texture: "Naturally Soft & Flowing",
    roastLevel: "Gentle Low-Temp Roast",
    isBestSeller: false,
    isReserve: false,
    image: "walnut-butter.webp",
    sizes: [
      { size: "250g", price: 649 },
      { size: "500g", price: 1199 },
      { size: "1kg", price: 2199 }
    ],
    nutrition: {
      serving: "100g",
      calories: "654 kcal",
      protein: "15.2g",
      healthyFats: "65.2g",
      carbs: "13.7g",
      fiber: "6.7g",
      sugar: "0.0g"
    },
    tastingNotes: ["Earthy Woodsy Richness", "Subtle Tannic Elegance", "Velvety Omega-3 Oils"],
    pairings: ["Figs & Goat Cheese", "Sourdough Rye Bread", "Keto Smoothies", "Gourmet Salad Dressings"]
  },
  {
    id: "walnut-almond-butter",
    name: "Walnut Almond Butter",
    category: "artisanal",
    categoryLabel: "Artisanal Master Blend",
    badge: "Signature Blend",
    priceDisplay: "₹629",
    subtitle: "Dual-Nut Synergy: 50% Himalayan Walnut + 50% Mamra Almond",
    description: "The master roaster's signature duo. Combining the rich Omega-3 profile of Himalayan walnuts with the sweet, velvety finish of stone-ground Mamra almonds. Perfectly balanced nutrition and flavor.",
    origin: "Kashmiri Walnuts & Mamra Almonds",
    ingredients: "50% Roasted Almonds, 50% Cold-Milled Walnuts",
    texture: "Creamy with Micro Stone-Ground Texture",
    roastLevel: "Balanced Dual Roast",
    isBestSeller: true,
    isReserve: false,
    image: "walnut-almond-butter.webp",
    sizes: [
      { size: "250g", price: 629 },
      { size: "500g", price: 1149 },
      { size: "1kg", price: 2099 }
    ],
    nutrition: {
      serving: "100g",
      calories: "634 kcal",
      protein: "18.3g",
      healthyFats: "59.1g",
      carbs: "16.1g",
      fiber: "8.6g",
      sugar: "0.0g"
    },
    tastingNotes: ["Toasted Almond Sweetness", "Earthy Walnut Depth", "Complex Buttery Lingering Taste"],
    pairings: ["Chia Seed Pudding", "Artisanal Brioche", "Overnight Oats", "Medjool Dates"]
  },
  {
    id: "cashew-butter",
    name: "Cashew Butter",
    category: "artisanal",
    categoryLabel: "Artisanal Pure Velvet",
    badge: "Naturally Sweet",
    priceDisplay: "₹549",
    subtitle: "100% Whole Roasted Konkan Coast Cashews",
    description: "Pure cashew luxury. Whole W320 grade Konkan cashews stone-ground into a silky, luscious cream that melts effortlessly on the tongue. Naturally sweet with zero added sugar.",
    origin: "Goa & Konkan Coast, India",
    ingredients: "100% Whole Roasted Cashews (Zero Added Oils or Sugars)",
    texture: "Luxuriously Smooth & Melting",
    roastLevel: "Blonde Light Roast",
    isBestSeller: false,
    isReserve: false,
    image: "cashew-butter.webp",
    sizes: [
      { size: "250g", price: 549 },
      { size: "500g", price: 999 },
      { size: "1kg", price: 1849 }
    ],
    nutrition: {
      serving: "100g",
      calories: "580 kcal",
      protein: "18.2g",
      healthyFats: "46.3g",
      carbs: "30.1g",
      fiber: "3.3g",
      sugar: "0.0g (Natural Lactose-Free Sweetness)"
    },
    tastingNotes: ["Sweet Cream Velvet", "Subtle Milky Cashew", "Melt-in-Mouth Finish"],
    pairings: ["Morning Matcha Lattes", "Warm Brioche", "Fresh Strawberries", "Asian Salad Dressings"]
  },

  // ==========================================
  // 3. PREMIUM RESERVE (ROYAL EDITION)
  // ==========================================
  {
    id: "pistachio-butter",
    name: "Imperial Pistachio Butter",
    category: "reserve",
    categoryLabel: "Grand Reserve Edition",
    badge: "Crown Jewel",
    priceDisplay: "₹1,199",
    subtitle: "100% Royal Iranian & Sicilian Emerald Green Pistachios",
    description: "The pinnacle of artisanal nut luxury. 100% whole grade-A pistachios stone-ground slowly without water or emulsifiers to retain their vivid emerald hue and intoxicating herbal-sweet fragrance. Rare, limited batch.",
    origin: "Single-Origin Iranian & Sicilian Terroir",
    ingredients: "100% Slow-Roasted Royal Pistachios (Pure Single Ingredient)",
    texture: "Silken Emerald Velvet",
    roastLevel: "Precision Low-Temp Roast",
    isBestSeller: true,
    isReserve: true,
    image: "pistachio-butter.webp",
    sizes: [
      { size: "250g", price: 1199 },
      { size: "500g", price: 2199 },
      { size: "1kg", price: 4199 }
    ],
    nutrition: {
      serving: "100g",
      calories: "602 kcal",
      protein: "20.6g",
      healthyFats: "49.2g",
      carbs: "22.5g",
      fiber: "10.3g",
      sugar: "0.0g"
    },
    tastingNotes: ["Vibrant Pistachio Bloom", "Sweet Floral Undertones", "Creamy Mineral Finish"],
    pairings: ["Gourmet Gelato Drizzle", "Sourdough Toast with Flaky Sea Salt", "Burrata Crostini", "Pure Spoonful Tasting"]
  },
  {
    id: "hazelnut-butter",
    name: "Piedmont Hazelnut Butter",
    category: "reserve",
    categoryLabel: "Grand Reserve Edition",
    badge: "Pure Reserve",
    priceDisplay: "₹999",
    subtitle: "100% Slow-Roasted Golden Hazelnuts",
    description: "Crafted from selected round hazelnuts renowned for their high aromatic oil content. Roasted slowly in micro-batches until golden amber, then stone-milled into pure, fragrant hazelnut butter.",
    origin: "Piedmont-style Handcrafted Hazelnut Terroir",
    ingredients: "100% Slow-Roasted Whole Hazelnuts (No Palm Oil, Zero Additives)",
    texture: "Glossy, Silky Flow",
    roastLevel: "Aromatic Golden Roast",
    isBestSeller: false,
    isReserve: true,
    image: "hazelnut-butter.webp",
    sizes: [
      { size: "250g", price: 999 },
      { size: "500g", price: 1849 },
      { size: "1kg", price: 3499 }
    ],
    nutrition: {
      serving: "100g",
      calories: "628 kcal",
      protein: "15.0g",
      healthyFats: "60.8g",
      carbs: "16.7g",
      fiber: "9.7g",
      sugar: "0.0g"
    },
    tastingNotes: ["Intense Roasted Hazelnut", "Warm Praline Perfume", "Buttery Satin Texture"],
    pairings: ["Fresh Figs", "Espresso & Cappuccino", "Oat Crepes", "Gourmet Pastry Infusions"]
  },
  {
    id: "hazelnut-chocolate",
    name: "Hazelnut Dark Chocolate Spread",
    category: "reserve",
    categoryLabel: "Grand Reserve Edition",
    badge: "Artisan Gianduja",
    priceDisplay: "₹1,099",
    subtitle: "Artisanal Gianduja: 75% Roasted Hazelnuts + 25% Pure Cacao",
    description: "The purest alternative to mass-produced hazelnut spreads. Made with 75% stone-ground roasted hazelnuts, single-origin dark cacao, and organic coconut blossom nectar. 0% palm oil, 100% luxury taste.",
    origin: "Selected Hazelnuts & Single-Origin Cacao",
    ingredients: "Roasted Hazelnuts (75%), Pure Dark Cacao (20%), Coconut Blossom Sugar (5%)",
    texture: "Ultra-Rich Gianduja Praline Cream",
    roastLevel: "Deep Chocolate Roast",
    isBestSeller: true,
    isReserve: true,
    image: "hazelnut-chocolate.webp",
    sizes: [
      { size: "250g", price: 1099 },
      { size: "500g", price: 1999 },
      { size: "1kg", price: 3799 }
    ],
    nutrition: {
      serving: "100g",
      calories: "612 kcal",
      protein: "14.2g",
      healthyFats: "54.5g",
      carbs: "22.1g",
      fiber: "10.8g",
      sugar: "4.8g (Natural Unrefined)"
    },
    tastingNotes: ["Pure Italian Gianduja", "Deep Roasted Nut Cream", "Rich Dark Chocolate Finish"],
    pairings: ["Warm French Brioche", "Strawberry Fondue", "Vanilla Bean Ice Cream", "Pure Spoonful"]
  }
];

// ==========================================
// CART STATE MANAGEMENT (localStorage)
// ==========================================
const Cart = {
  KEY: "nut_delicacy_cart_v1",

  get() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || [];
    } catch (e) {
      return [];
    }
  },

  save(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateBadges();
    this.renderDrawer();
  },

  add(productId, size = "250g", quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const sizeObj = product.sizes.find(s => s.size === size) || product.sizes[0];
    const items = this.get();
    const cartItemId = `${productId}-${sizeObj.size}`;
    const existing = items.find(i => i.cartItemId === cartItemId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({
        cartItemId,
        productId: product.id,
        name: product.name,
        size: sizeObj.size,
        price: sizeObj.price,
        image: product.image,
        quantity: quantity
      });
    }

    this.save(items);
    this.openDrawer();
    this.showToast(`Added ${product.name} (${sizeObj.size}) to Cart`);
  },

  remove(cartItemId) {
    const items = this.get().filter(i => i.cartItemId !== cartItemId);
    this.save(items);
  },

  updateQty(cartItemId, delta) {
    const items = this.get();
    const item = items.find(i => i.cartItemId === cartItemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.remove(cartItemId);
    } else {
      this.save(items);
    }
  },

  clear() {
    this.save([]);
  },

  count() {
    return this.get().reduce((sum, i) => sum + i.quantity, 0);
  },

  total() {
    return this.get().reduce((sum, i) => sum + (i.price * i.quantity), 0);
  },

  updateBadges() {
    const count = this.count();
    document.querySelectorAll(".cart-badge-count").forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? "inline-flex" : "none";
    });
  },

  openDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (drawer && overlay) {
      drawer.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("cart-open");
    }
  },

  closeDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (drawer && overlay) {
      drawer.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("cart-open");
    }
  },

  showToast(message) {
    let toast = document.getElementById("luxury-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "luxury-toast";
      toast.className = "luxury-toast";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="toast-dot"></span><span>${message}</span>`;
    toast.classList.add("show");
    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  },

  renderDrawer() {
    const container = document.getElementById("cart-items-container");
    const subtotalEl = document.getElementById("cart-subtotal");
    const emptyEl = document.getElementById("cart-empty-state");
    const footerEl = document.getElementById("cart-drawer-footer");
    if (!container) return;

    const items = this.get();
    if (items.length === 0) {
      container.innerHTML = "";
      if (emptyEl) emptyEl.style.display = "flex";
      if (footerEl) footerEl.style.display = "none";
      return;
    }

    if (emptyEl) emptyEl.style.display = "none";
    if (footerEl) footerEl.style.display = "block";

    container.innerHTML = items.map(item => `
      <div class="cart-item" data-id="${item.cartItemId}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='product-preview.webp'">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-meta">Jar Size: <strong>${item.size}</strong></div>
          <div class="cart-item-price">₹${item.price.toLocaleString("en-IN")}</div>
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
    `).join("");

    if (subtotalEl) {
      subtotalEl.textContent = `₹${this.total().toLocaleString("en-IN")}`;
    }
  },

  checkoutWhatsApp() {
    const items = this.get();
    if (items.length === 0) return;

    let text = `Hello *Nut Delicacy*! ✨\n\nI would like to place an order for the following artisanal nut butters:\n\n`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. *${item.name}* (${item.size}) × ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString("en-IN")}\n`;
    });

    text += `\n📦 *Total Items:* ${this.count()}`;
    text += `\n💰 *Total Order Amount:* ₹${this.total().toLocaleString("en-IN")}`;
    text += `\n\nPlease confirm availability, payment details, and estimated delivery timeline.`;
    text += `\n\nThank you!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  }
};

// ==========================================
// CATALOG GRID RENDERING ENGINE (All 10 Products)
// ==========================================
function renderCatalogGrid(category = 'all') {
  const container = document.getElementById("products-grid-container");
  if (!container) return;

  const filtered = category === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === category);

  container.innerHTML = filtered.map(product => {
    const defaultSize = product.sizes[0];
    return `
      <article class="product-card" id="card-${product.id}">
        ${product.isReserve ? '<span class="card-badge-reserve">Reserve</span>' : ''}
        
        <div class="card-img-wrap" onclick="openProductModal('${product.id}')" title="Click to view details of ${product.name}">
          <img src="${product.image}" alt="${product.name} Luxury Stone Ground Jar" class="card-img" loading="lazy" onerror="this.src='product-preview.webp'">
        </div>

        <div class="card-category-label">${product.categoryLabel}</div>
        <h3 class="card-title" onclick="openProductModal('${product.id}')">${product.name}</h3>
        <p class="card-subtitle">${product.subtitle}</p>
        
        <div class="card-origin">
          <span>📍</span>
          <span>${product.origin}</span>
        </div>

        <div class="card-pills">
          ${product.tastingNotes.slice(0, 2).map(t => `<span class="card-pill">✨ ${t}</span>`).join("")}
        </div>

        <div class="card-purchase-row">
          <!-- Size Selector -->
          <div class="card-size-selector" id="size-selector-${product.id}">
            ${product.sizes.map((s, idx) => `
              <button type="button" 
                      class="card-size-opt ${idx === 0 ? 'active' : ''}" 
                      data-size="${s.size}" 
                      data-price="${s.price}"
                      onclick="selectCardSize('${product.id}', '${s.size}', ${s.price}, this)">
                ${s.size}
              </button>
            `).join("")}
          </div>

          <!-- Price & Add Button -->
          <div class="card-action-bar">
            <div class="card-price" id="card-price-${product.id}">₹${defaultSize.price.toLocaleString("en-IN")}</div>
            <div class="card-btn-group">
              <button type="button" class="btn-quick-add" onclick="addCardItemToCart('${product.id}')" aria-label="Add ${product.name} to Tasting Bag">
                + Add to Bag
              </button>
              <button type="button" class="btn-details" onclick="openProductModal('${product.id}')" aria-label="View Details of ${product.name}">
                Details
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function selectCardSize(productId, size, price, btn) {
  const parent = document.getElementById(`size-selector-${productId}`);
  if (parent) {
    parent.querySelectorAll(".card-size-opt").forEach(b => b.classList.remove("active"));
  }
  btn.classList.add("active");
  const priceEl = document.getElementById(`card-price-${productId}`);
  if (priceEl) {
    priceEl.textContent = `₹${price.toLocaleString("en-IN")}`;
  }
}

function addCardItemToCart(productId) {
  const parent = document.getElementById(`size-selector-${productId}`);
  let size = "250g";
  if (parent) {
    const activeBtn = parent.querySelector(".card-size-opt.active");
    if (activeBtn) size = activeBtn.getAttribute("data-size") || "250g";
  }
  Cart.add(productId, size, 1);
}

function filterCategory(category, btn) {
  if (btn) {
    document.querySelectorAll(".filter-tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }
  renderCatalogGrid(category);
}

// ==========================================
// PRODUCT MODAL HANDLER (Deep Linking)
// ==========================================
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-modal-backdrop") || document.getElementById("product-modal");
  const modalBody = document.getElementById("product-modal-content");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-product-gallery">
        <div class="modal-img-glow"></div>
        <img src="${product.image}" alt="${product.name} Luxury Jar" class="modal-product-img" onerror="this.src='product-preview.webp'">
        <div class="modal-purity-stamp">
          <span>🌿 100% PURE</span>
          <span>NO PALM OIL</span>
        </div>
      </div>

      <div class="modal-product-details">
        <button class="modal-close-btn" onclick="closeProductModal()" aria-label="Close modal">✕</button>
        <div class="modal-category-badge">${product.categoryLabel}</div>
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-subtitle">${product.subtitle}</div>
        
        <p class="modal-description">${product.description}</p>

        <div class="modal-spec-grid">
          <div class="modal-spec">
            <span class="spec-label">Single Origin</span>
            <span class="spec-val">${product.origin}</span>
          </div>
          <div class="modal-spec">
            <span class="spec-label">Texture</span>
            <span class="spec-val">${product.texture}</span>
          </div>
          <div class="modal-spec">
            <span class="spec-label">Roast Profile</span>
            <span class="spec-val">${product.roastLevel}</span>
          </div>
          <div class="modal-spec">
            <span class="spec-label">Ingredients</span>
            <span class="spec-val">${product.ingredients}</span>
          </div>
        </div>

        <div class="modal-tasting-section">
          <span class="spec-label">Tasting Notes</span>
          <div class="tasting-tags">
            ${product.tastingNotes.map(t => `<span class="tasting-tag">✨ ${t}</span>`).join("")}
          </div>
        </div>

        <div class="modal-nutrition-box">
          <div class="nutri-header">Nutritional Purity per 100g</div>
          <div class="nutri-grid">
            <div class="nutri-cell"><strong>${product.nutrition.calories}</strong><span>Calories</span></div>
            <div class="nutri-cell"><strong>${product.nutrition.protein}</strong><span>Protein</span></div>
            <div class="nutri-cell"><strong>${product.nutrition.healthyFats}</strong><span>Healthy Fats</span></div>
            <div class="nutri-cell"><strong>${product.nutrition.fiber}</strong><span>Dietary Fiber</span></div>
          </div>
        </div>

        <!-- Size & Price Selector -->
        <div class="modal-purchase-section">
          <div class="modal-size-selector" id="modal-size-group">
            ${product.sizes.map((s, idx) => `
              <button type="button" class="size-btn ${idx === 0 ? 'selected' : ''}" data-size="${s.size}" data-price="${s.price}" onclick="selectModalSize(this, ${s.price})">
                <span class="size-name">${s.size}</span>
                <span class="size-price">₹${s.price.toLocaleString("en-IN")}</span>
              </button>
            `).join("")}
          </div>

          <div class="modal-action-row">
            <div class="modal-qty-ctrl">
              <button type="button" onclick="adjustModalQty(-1)">−</button>
              <input type="number" id="modal-qty-input" value="1" min="1" max="50" readonly>
              <button type="button" onclick="adjustModalQty(1)">+</button>
            </div>
            
            <button type="button" class="btn-primary modal-add-btn" onclick="addModalItemToCart('${product.id}')">
              <span>Add to Cart</span>
              <span id="modal-dynamic-price">₹${product.sizes[0].price.toLocaleString("en-IN")}</span>
            </button>

            <button type="button" class="btn-whatsapp-direct" onclick="directWhatsAppProductOrder('${product.id}')" title="Direct Order on WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/></svg>
              <span>Order on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.classList.add("modal-open");
  window.location.hash = `product-${product.id}`;
}

function closeProductModal() {
  const modal = document.getElementById("product-modal-backdrop") || document.getElementById("product-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
}

function selectModalSize(btn, price) {
  document.querySelectorAll("#modal-size-group .size-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  const qty = parseInt(document.getElementById("modal-qty-input").value) || 1;
  const priceEl = document.getElementById("modal-dynamic-price");
  if (priceEl) {
    priceEl.textContent = `₹${(price * qty).toLocaleString("en-IN")}`;
  }
}

function adjustModalQty(delta) {
  const input = document.getElementById("modal-qty-input");
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val = Math.max(1, Math.min(50, val + delta));
  input.value = val;

  const selectedBtn = document.querySelector("#modal-size-group .size-btn.selected");
  if (selectedBtn) {
    const price = parseInt(selectedBtn.getAttribute("data-price"));
    const priceEl = document.getElementById("modal-dynamic-price");
    if (priceEl) {
      priceEl.textContent = `₹${(price * val).toLocaleString("en-IN")}`;
    }
  }
}

function addModalItemToCart(productId) {
  const selectedBtn = document.querySelector("#modal-size-group .size-btn.selected");
  const size = selectedBtn ? selectedBtn.getAttribute("data-size") : "250g";
  const qty = parseInt(document.getElementById("modal-qty-input").value) || 1;
  Cart.add(productId, size, qty);
  closeProductModal();
}

function directWhatsAppProductOrder(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const selectedBtn = document.querySelector("#modal-size-group .size-btn.selected");
  const size = selectedBtn ? selectedBtn.getAttribute("data-size") : "250g";
  const price = selectedBtn ? parseInt(selectedBtn.getAttribute("data-price")) : product.sizes[0].price;
  const qty = parseInt(document.getElementById("modal-qty-input").value) || 1;

  const text = `Hello *Nut Delicacy*! ✨\n\nI would like to order:\n- *${product.name}* (${size})\n- Quantity: ${qty}\n- Estimated Total: ₹${(price * qty).toLocaleString("en-IN")}\n\nPlease confirm availability and delivery details for my address.\n\nThank you!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
}

// ==========================================
// WHATSAPP CONCIERGE POPUP
// ==========================================
function toggleWhatsAppConcierge() {
  const popup = document.getElementById("whatsapp-concierge-popup");
  if (popup) {
    popup.classList.toggle("active");
  }
}

function sendConciergeInquiry(type) {
  let text = "";
  switch (type) {
    case "order":
      text = "Hello Nut Delicacy! ✨ I would like to explore your collection and place an artisanal nut butter order.";
      break;
    case "gifting":
      text = "Hello Nut Delicacy! 🎁 I am inquiring about luxury Corporate & Wedding Gifting allocations.";
      break;
    case "tasting":
      text = "Hello Nut Delicacy! 🌿 I would love recommendations on flavor pairings and single-origin tasting flights.";
      break;
    default:
      text = "Hello Nut Delicacy! ✨ I have an inquiry about your stone-ground nut butters.";
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  toggleWhatsAppConcierge();
}

// Handle deep-linked product modal opening from URL hash
function checkUrlProductHash() {
  if (window.location.hash && window.location.hash.startsWith("#product-")) {
    const pId = window.location.hash.replace("#product-", "");
    setTimeout(() => openProductModal(pId), 120);
  }
}

// Initializer on Page Load
document.addEventListener("DOMContentLoaded", () => {
  Cart.updateBadges();
  Cart.renderDrawer();
  renderCatalogGrid('all');
  checkUrlProductHash();
});

window.addEventListener("hashchange", checkUrlProductHash);


