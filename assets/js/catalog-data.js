/**
 * Marvel Verse Official Collectibles Catalog & Core E-Commerce Store Engine
 * Shared across All Pages: index.html, categories.html, tracking.html, profile.html, help.html, cart.html
 */

const CATALOG_ITEMS = [
  {
    id: 20,
    name: "Iron Man MK5 Helmet: Stark Edition",
    subtitle: "1:1 Motorized Voice-Control Wearable Helmet",
    category: "wearable-helmets",
    hero: "iron-man",
    price: 33915,
    mrp: 38999,
    banner: "1:1 LIFE SIZE SCALE",
    primaryImg: "assets/images/p_mk5_helmet.jpg",
    secondaryImg: "assets/images/p_mk5_helmet_wear.jpg",
    allImages: ["assets/images/p_mk5_helmet.jpg", "assets/images/p_mk5_helmet_wear.jpg", "assets/images/p_mk5_helmet_box.jpg"],
    variations: [
      { name: "With Bluetooth Speaker Base", price: 33915 },
      { name: "Helmet Only (Standard)", price: 24565 }
    ]
  },
  {
    id: 23,
    name: "Iron Man MK7 Helmet: Avengers Edition",
    subtitle: "1:1 Scale Motorized Faceplate Helmet",
    category: "wearable-helmets",
    hero: "iron-man",
    price: 33915,
    mrp: 37999,
    banner: "DUAL LIGHT MODE",
    primaryImg: "assets/images/p_mk7_helmet.jpg",
    secondaryImg: "assets/images/p_mk7_helmet_wear.jpg",
    allImages: ["assets/images/p_mk7_helmet.jpg", "assets/images/p_mk7_helmet_wear.jpg", "assets/images/p_mk7_helmet_box.jpg"],
    variations: [{ name: "With Bluetooth Speaker Base", price: 33915 }]
  },
  {
    id: 24,
    name: "Iron Man MK2 Helmet: Chrome Mirror",
    subtitle: "1:1 Scale Electroplated Polished Finish",
    category: "wearable-helmets",
    hero: "iron-man",
    price: 35615,
    mrp: 39999,
    banner: "CHROME MIRROR FINISH",
    primaryImg: "assets/images/p_mk2_helmet.jpg",
    secondaryImg: "assets/images/p_mk2_helmet_wear.jpg",
    allImages: ["assets/images/p_mk2_helmet.jpg", "assets/images/p_mk2_helmet_wear.jpg", "assets/images/p_mk2_helmet_box.jpg"],
    variations: [{ name: "Chrome Mirror Edition", price: 35615 }]
  },
  {
    id: 25,
    name: "Captain America Shield: Vibranium 1:1",
    subtitle: "1:1 Full Scale Shield w/ Audio Subwoofer Base",
    category: "wearable-helmets",
    hero: "captain-america",
    price: 41565,
    mrp: 47999,
    banner: "60CM FULL SCALE",
    primaryImg: "assets/images/p_cap_shield.jpg",
    secondaryImg: "assets/images/p_cap_shield_wear.jpg",
    allImages: ["assets/images/p_cap_shield.jpg", "assets/images/p_cap_shield_wear.jpg", "assets/images/p_cap_shield_box.jpg"],
    variations: [{ name: "Standard 1:1 Shield w/ Audio Dock", price: 41565 }]
  },
  {
    id: 26,
    name: "Captain America Tactical Helmet",
    subtitle: "1:1 Tactical Wearable Helmet w/ Speaker Base",
    category: "wearable-helmets",
    hero: "captain-america",
    price: 29665,
    mrp: 34999,
    banner: "TACTICAL MOLD",
    primaryImg: "assets/images/p_cap_helmet.jpg",
    secondaryImg: "assets/images/p_cap_helmet_wear.jpg",
    allImages: ["assets/images/p_cap_helmet.jpg", "assets/images/p_cap_helmet_wear.jpg", "assets/images/p_cap_helmet_box.jpg"],
    variations: [{ name: "Tactical Stealth Edition", price: 29665 }]
  },
  {
    id: 27,
    name: "Black Panther Helmet: Wakanda Edition",
    subtitle: "1:1 Helmet w/ Luminous Vibranium Purple Glow",
    category: "wearable-helmets",
    hero: "wakanda",
    price: 33065,
    mrp: 37999,
    banner: "VIBRANIUM PURPLE GLOW",
    primaryImg: "assets/images/p_black_panther_helmet.jpg",
    secondaryImg: "assets/images/p_black_panther_helmet_wear.jpg",
    allImages: ["assets/images/p_black_panther_helmet.jpg", "assets/images/p_black_panther_helmet_wear.jpg", "assets/images/p_black_panther_helmet_box.jpg"],
    variations: [{ name: "Wakanda Vibranium Weave", price: 33065 }]
  },
  {
    id: 28,
    name: "Iron Spider-Man Helmet: Nano Edition",
    subtitle: "1:1 Wearable Helmet w/ Motorized Shutter Eyes",
    category: "wearable-helmets",
    hero: "spider-man",
    price: 32215,
    mrp: 36999,
    banner: "MOTORIZED SHUTTER EYES",
    primaryImg: "assets/images/p_iron_spider_helmet.jpg",
    secondaryImg: "assets/images/p_iron_spider_helmet_wear.jpg",
    allImages: ["assets/images/p_iron_spider_helmet.jpg", "assets/images/p_iron_spider_helmet_wear.jpg", "assets/images/p_iron_spider_helmet_box.jpg"],
    variations: [{ name: "Metallic Crimson Edition", price: 32215 }]
  },
  {
    id: 29,
    name: "Deadpool Mask w/ Exclusive Stand",
    subtitle: "1:1 Elastic Weave Mask w/ Magnetic Expressions",
    category: "wearable-helmets",
    hero: "all",
    price: 24565,
    mrp: 28999,
    banner: "MAGNETIC EYE EXPRESSIONS",
    primaryImg: "assets/images/p_deadpool_helmet.jpg",
    secondaryImg: "assets/images/p_deadpool_helmet_wear.jpg",
    allImages: ["assets/images/p_deadpool_helmet.jpg", "assets/images/p_deadpool_helmet_wear.jpg", "assets/images/p_deadpool_helmet_box.jpg"],
    variations: [{ name: "Standard Collector Edition", price: 24565 }]
  },
  {
    id: 30,
    name: "Iron Man MK85 Helmet: Endgame",
    subtitle: "1:1 Wearable Nano-Armor Touch Opening Helmet",
    category: "wearable-helmets",
    hero: "iron-man",
    price: 27965,
    mrp: 31999,
    banner: "TOUCH SENSOR OPENING",
    primaryImg: "assets/images/p_mk85_helmet.jpg",
    secondaryImg: "assets/images/p_mk85_helmet_wear.jpg",
    allImages: ["assets/images/p_mk85_helmet.jpg", "assets/images/p_mk85_helmet_wear.jpg", "assets/images/p_mk85_helmet_box.jpg"],
    variations: [{ name: "Endgame MK85 Standard", price: 27965 }]
  },
  {
    id: 31,
    name: "Iron Man Arc Reactor Wireless Fast Charger",
    subtitle: "15W Qi Fast Charging w/ Auto-Sensing Motorized Lift",
    category: "charging-stations",
    hero: "iron-man",
    price: 11815,
    mrp: 13999,
    banner: "15W QI FAST CHARGE",
    primaryImg: "assets/images/p_arc_reactor_charger.jpg",
    secondaryImg: "assets/images/p_arc_reactor_charging.jpg",
    allImages: ["assets/images/p_arc_reactor_charger.jpg", "assets/images/p_arc_reactor_charging.jpg", "assets/images/p_arc_reactor_box.jpg"],
    variations: [{ name: "15W Fast Qi Wireless Charger", price: 11815 }]
  },
  {
    id: 32,
    name: "Iron Man MK5 Ear Hooks Bluetooth Earbuds",
    subtitle: "MK5 Briefcase Armor Pod w/ 30h Playtime",
    category: "digital-tech",
    hero: "iron-man",
    price: 7565,
    mrp: 9999,
    banner: "BLUETOOTH 5.3",
    primaryImg: "assets/images/p_mk5_earbuds.jpg",
    secondaryImg: "assets/images/p_mk5_earbuds_wear.jpg",
    allImages: ["assets/images/p_mk5_earbuds.jpg", "assets/images/p_mk5_earbuds_wear.jpg"],
    variations: [{ name: "Titanium Silver Case", price: 7565 }]
  },
  {
    id: 33,
    name: "Iron Man Clip-on Ergonomic Earphones",
    subtitle: "Open-Ear Acoustic Pod w/ LED Battery Display",
    category: "digital-tech",
    hero: "iron-man",
    price: 6715,
    mrp: 8499,
    banner: "OPEN EAR ACOUSTIC",
    primaryImg: "assets/images/p_clip_earphones.jpg",
    secondaryImg: "assets/images/p_clip_earphones_wear.jpg",
    allImages: ["assets/images/p_clip_earphones.jpg", "assets/images/p_clip_earphones_wear.jpg"],
    variations: [{ name: "Open-Ear Sports Edition", price: 6715 }]
  },
  {
    id: 34,
    name: "Iron Man MK3 Bust Charging Center PD65W",
    subtitle: "65W GaN Fast Charger w/ Dual USB-C + USB-A",
    category: "charging-stations",
    hero: "iron-man",
    price: 10115,
    mrp: 12499,
    banner: "PD 65W GAN FAST",
    primaryImg: "assets/images/p_mk3_bust_charger.jpg",
    secondaryImg: "assets/images/p_mk3_bust_charging.jpg",
    allImages: ["assets/images/p_mk3_bust_charger.jpg", "assets/images/p_mk3_bust_charging.jpg", "assets/images/p_mk3_bust_box.jpg"],
    variations: [{ name: "PD65W GaN Dual USB-C", price: 10115 }]
  },
  {
    id: 35,
    name: "Iron Man MK42 Bust Charger Adapter 30W",
    subtitle: "30W Fast Charge Desktop Armor Bust",
    category: "charging-stations",
    hero: "iron-man",
    price: 7565,
    mrp: 9499,
    banner: "30W DESKTOP ADAPTER",
    primaryImg: "assets/images/p_mk42_bust_charger.jpg",
    secondaryImg: "assets/images/p_mk42_bust_charging.jpg",
    allImages: ["assets/images/p_mk42_bust_charger.jpg", "assets/images/p_mk42_bust_charging.jpg", "assets/images/p_mk42_bust_box.jpg"],
    variations: [{ name: "30W Quick Charge Adapter", price: 7565 }]
  },
  {
    id: 36,
    name: "Iron Man Hall of Armor Bust Collection",
    subtitle: "Complete MK1 to MK7 7-Piece Collector Box Set",
    category: "charging-stations",
    hero: "iron-man",
    price: 12665,
    mrp: 15999,
    banner: "COMPLETE 7-PIECE SET",
    primaryImg: "assets/images/p_hall_of_armor_busts.jpg",
    secondaryImg: "assets/images/p_hall_of_armor_busts.jpg",
    allImages: ["assets/images/p_hall_of_armor_busts.jpg"],
    variations: [{ name: "Complete 7-Piece Box Set", price: 12665 }]
  },
  {
    id: 37,
    name: "Captain America Shield Tactile Speaker",
    subtitle: "Rotating Gyroscopic Pressure-Relief Mechanism",
    category: "bluetooth-speakers",
    hero: "captain-america",
    price: 6715,
    mrp: 8499,
    banner: "GYROSCOPIC AUDIO",
    primaryImg: "assets/images/p_cap_shield_speaker.jpg",
    secondaryImg: "assets/images/p_cap_shield_speaker_wear.jpg",
    allImages: ["assets/images/p_cap_shield_speaker.jpg", "assets/images/p_cap_shield_speaker_wear.jpg", "assets/images/p_cap_shield_speaker_box.jpg"],
    variations: [{ name: "Rotating Gyroscope Audio Dock", price: 6715 }]
  },
  {
    id: 38,
    name: "Thor Mjolnir Pressure-Relief Speaker",
    subtitle: "Solid Zinc Alloy Shell w/ 8W Subwoofer Driver",
    category: "bluetooth-speakers",
    hero: "thor",
    price: 7565,
    mrp: 9499,
    banner: "SOLID ZINC ALLOY 8W",
    primaryImg: "assets/images/p_mjolnir_speaker.jpg",
    secondaryImg: "assets/images/p_mjolnir_speaker_action.jpg",
    allImages: ["assets/images/p_mjolnir_speaker.jpg", "assets/images/p_mjolnir_speaker_action.jpg", "assets/images/p_mjolnir_speaker_detail.jpg"],
    variations: [{ name: "Thunder Zinc Alloy Edition", price: 7565 }]
  },
  {
    id: 39,
    name: "Iron Man MK5 Bust Speaker w/ Sound Visualizer",
    subtitle: "Spring-Loaded Opening Faceplate w/ Audio Reactor",
    category: "bluetooth-speakers",
    hero: "iron-man",
    price: 8415,
    mrp: 10499,
    banner: "SPRING FACEPLATE",
    primaryImg: "assets/images/p_mk5_bust_speaker.jpg",
    secondaryImg: "assets/images/p_mk5_bust_speaker_action.jpg",
    allImages: ["assets/images/p_mk5_bust_speaker.jpg", "assets/images/p_mk5_bust_speaker_action.jpg", "assets/images/p_mk5_bust_speaker_box.jpg"],
    variations: [{ name: "Spring-Loaded Audio Edition", price: 8415 }]
  },
  {
    id: 40,
    name: "Iron Man MK4 Bust Bluetooth Speaker Vitality",
    subtitle: "Compact Desktop Armor Bust w/ LED Rhythm Equalizer",
    category: "bluetooth-speakers",
    hero: "iron-man",
    price: 6715,
    mrp: 8499,
    banner: "LED RHYTHM EQUALIZER",
    primaryImg: "assets/images/p_mk4_bust_speaker.jpg",
    secondaryImg: "assets/images/p_mk4_bust_speaker_action.jpg",
    allImages: ["assets/images/p_mk4_bust_speaker.jpg", "assets/images/p_mk4_bust_speaker_action.jpg", "assets/images/p_mk4_bust_speaker_box.jpg"],
    variations: [{ name: "Compact Armor Vitality Edition", price: 6715 }]
  }
];

// Utility: INR Currency Formatter
function formatINR(val) {
  if (typeof val !== "number") val = Number(val) || 0;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(val);
}

// Utility: Safe HTML Escape
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Global Cart Store Management
function getCartItems() {
  try {
    return JSON.parse(localStorage.getItem("tss_cart_items") || "[]");
  } catch (e) {
    return [];
  }
}

function saveCartItems(items) {
  try {
    localStorage.setItem("tss_cart_items", JSON.stringify(items));
    updateCartBadges();
  } catch (e) {
    console.error("Cart save error:", e);
  }
}

function getCartCount() {
  const items = getCartItems();
  return items.reduce((sum, item) => sum + (item.qty || 1), 0);
}

function updateCartBadges() {
  const count = getCartCount();
  const badges = document.querySelectorAll(".cart-counter, #cartCountBadge");
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? "inline-flex" : "none";
  });
}

function addToCart(productId, variationName = null, qty = 1) {
  const item = CATALOG_ITEMS.find(p => p.id === productId);
  if (!item) return;

  const currentCart = getCartItems();
  const selectedVar = variationName || (item.variations && item.variations[0] ? item.variations[0].name : "Standard");
  const selectedPrice = (item.variations && item.variations.find(v => v.name === selectedVar)) 
    ? item.variations.find(v => v.name === selectedVar).price 
    : item.price;

  const existingIndex = currentCart.findIndex(ci => ci.id === productId && ci.variation === selectedVar);
  if (existingIndex > -1) {
    currentCart[existingIndex].qty += qty;
  } else {
    currentCart.push({
      id: item.id,
      name: item.name,
      variation: selectedVar,
      price: selectedPrice,
      img: item.primaryImg,
      qty: qty
    });
  }

  saveCartItems(currentCart);
  showGlobalToast(`${item.name} added to cart`);
}

function showGlobalToast(msg) {
  let c = document.getElementById("toastContainer");
  if (!c) {
    c = document.createElement("div");
    c.id = "toastContainer";
    c.style.cssText = "position:fixed; bottom:78px; right:20px; z-index:99999; display:flex; flex-direction:column; gap:8px; pointer-events:none;";
    document.body.appendChild(c);
  }
  const t = document.createElement("div");
  t.style.cssText = "background:rgba(9,13,22,0.96); color:#fff; border:1px solid #38bdf8; border-radius:8px; padding:10px 18px; font-size:13px; font-family:'Plus Jakarta Sans',sans-serif; box-shadow:0 8px 24px rgba(0,0,0,0.7); display:flex; align-items:center; gap:10px; pointer-events:auto; transition:all 0.3s cubic-bezier(0.16,1,0.3,1); transform:translateY(10px); opacity:0;";
  t.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${escapeHtml(msg)}</span>
  `;
  c.appendChild(t);
  requestAnimationFrame(() => {
    t.style.transform = "translateY(0)";
    t.style.opacity = "1";
  });
  setTimeout(() => {
    t.style.transform = "translateY(10px)";
    t.style.opacity = "0";
    setTimeout(() => t.remove(), 320);
  }, 2600);
}

// Global synchronization for multi-tab
window.addEventListener("storage", (e) => {
  if (e.key === "tss_cart_items") {
    updateCartBadges();
  }
});

// Run badge update on load
document.addEventListener("DOMContentLoaded", updateCartBadges);
