/**
 * MARVEL VERSE x NIKE-INSPIRED E-COMMERCE ENGINE & CATALOG DATA
 * Modeled after Nike's Core Storefront Architecture
 * - Shared across index.html, categories.html, product.html, cart.html, tracking.html, profile.html, help.html
 */

const CATALOG_ITEMS = [
  {
    id: 20,
    name: "Iron Man MK5 Motorized Helmet",
    subtitle: "1:1 Wearable Voice-Control Electronic Helmet",
    category: "Helmets",
    hero: "iron-man",
    price: 33915,
    mrp: 38999,
    badge: "Best Seller",
    colorways: "2 Editions",
    rating: 4.9,
    reviewsCount: 142,
    primaryImg: "assets/images/p_mk5_helmet.jpg",
    secondaryImg: "assets/images/p_mk5_helmet_wear.jpg",
    allImages: ["assets/images/p_mk5_helmet.jpg", "assets/images/p_mk5_helmet_wear.jpg", "assets/images/p_mk5_helmet_box.jpg"],
    description: "The crown jewel of Stark Industries wearable engineering. Features multi-piece motorized faceplate opening, English & Mandarin dual-system voice recognition, magnetic induction ring controls, and combat red/gold dual LED eye illumination.",
    specs: [
      "1:1 Life-Size Movie Accurate Scale (Circumference: 60cm)",
      "Bilingual Voice Control System (JARVIS feedback audio)",
      "Dual Opening Modes: Sequence-block and Synchronous snap-fold",
      "Touch sensors on left & right ears for manual activation",
      "Brushed metallic hot-rod red and champagne gold anodized finish"
    ],
    variations: [
      { name: "With Bluetooth Speaker Base", price: 33915 },
      { name: "Standard Helmet Only", price: 24565 }
    ]
  },
  {
    id: 23,
    name: "Iron Man MK7 Avengers Helmet",
    subtitle: "1:1 Motorized Electronic Combat Edition",
    category: "Helmets",
    hero: "iron-man",
    price: 33915,
    mrp: 37999,
    badge: "Just In",
    colorways: "1 Edition",
    rating: 4.8,
    reviewsCount: 89,
    primaryImg: "assets/images/p_mk7_helmet.jpg",
    secondaryImg: "assets/images/p_mk7_helmet_wear.jpg",
    allImages: ["assets/images/p_mk7_helmet.jpg", "assets/images/p_mk7_helmet_wear.jpg", "assets/images/p_mk7_helmet_box.jpg"],
    description: "Battle-hardened MK7 armor faithfully recreated for the Avengers Battle of New York collectors. High-torque precision servo motors drive the multi-layered faceplate with realistic mechanical sound effects.",
    specs: [
      "Endgame-ready high-density ABS resin construction",
      "Combat mode lighting: Ice Blue & Battle Crimson LED eyes",
      "Voice command activation + wireless remote controller included",
      "Internal padded ergonomic head harness"
    ],
    variations: [{ name: "With Bluetooth Speaker Base", price: 33915 }]
  },
  {
    id: 24,
    name: "Iron Man MK2 Chrome Helmet",
    subtitle: "1:1 Scale Electroplated Mirror Polished Finish",
    category: "Helmets",
    hero: "iron-man",
    price: 35615,
    mrp: 39999,
    badge: "Limited Edition",
    colorways: "Mirror Silver",
    rating: 5.0,
    reviewsCount: 64,
    primaryImg: "assets/images/p_mk2_helmet.jpg",
    secondaryImg: "assets/images/p_mk2_helmet_wear.jpg",
    allImages: ["assets/images/p_mk2_helmet.jpg", "assets/images/p_mk2_helmet_wear.jpg", "assets/images/p_mk2_helmet_box.jpg"],
    description: "High-spec mirror chrome electroplating engineered to replicate Tony Stark's unpainted Mark II prototype. Pristine reflective finish with motorized opening sequence.",
    specs: [
      "Specular mirror silver multi-stage vacuum electroplating",
      "Motorized servo faceplate with Stark sound FX",
      "Wearable fit for adult collectors (head width up to 16.5cm)",
      "Magnetic charging base and acrylic collector plaque"
    ],
    variations: [{ name: "Chrome Mirror Edition", price: 35615 }]
  },
  {
    id: 25,
    name: "Captain America Vibranium Shield 1:1",
    subtitle: "60cm Full Scale Shield w/ Audio Subwoofer Base",
    category: "Helmets",
    hero: "captain-america",
    price: 41565,
    mrp: 47999,
    badge: "Iconic",
    colorways: "Classic Red/Silver/Blue",
    rating: 4.9,
    reviewsCount: 210,
    primaryImg: "assets/images/p_cap_shield.jpg",
    secondaryImg: "assets/images/p_cap_shield_wear.jpg",
    allImages: ["assets/images/p_cap_shield.jpg", "assets/images/p_cap_shield_wear.jpg", "assets/images/p_cap_shield_box.jpg"],
    description: "Official 1:1 replica of Steve Rogers' iconic shield crafted in spun aluminum-alloy with authentic hand-stitched genuine leather arm straps. Comes with a high-fidelity desktop audio subwoofer display stand.",
    specs: [
      "Exact 60cm (24-inch) theatrical movie diameter",
      "Spun aerospace-grade alloy core weighing 3.4kg",
      "Subwoofer Bluetooth base with integrated bass reflex port",
      "Individually numbered Stark Industries serial plaque"
    ],
    variations: [{ name: "1:1 Shield w/ Audio Dock", price: 41565 }]
  },
  {
    id: 26,
    name: "Captain America Tactical Helmet",
    subtitle: "1:1 Stealth Wearable Helmet w/ Speaker Base",
    category: "Helmets",
    hero: "captain-america",
    price: 29665,
    mrp: 34999,
    badge: "Tactical",
    colorways: "Stealth Navy",
    rating: 4.7,
    reviewsCount: 75,
    primaryImg: "assets/images/p_cap_helmet.jpg",
    secondaryImg: "assets/images/p_cap_helmet_wear.jpg",
    allImages: ["assets/images/p_cap_helmet.jpg", "assets/images/p_cap_helmet_wear.jpg", "assets/images/p_cap_helmet_box.jpg"],
    description: "Designed for covert tactical operations. Inspired by the Winter Soldier stealth suit, featuring reinforced matte navy composite shell and genuine leather chin harness.",
    specs: [
      "1:1 authentic tactical cast mold",
      "Matte textured military-grade finish",
      "Includes display base with integrated 10W speaker driver"
    ],
    variations: [{ name: "Tactical Stealth Edition", price: 29665 }]
  },
  {
    id: 27,
    name: "Black Panther Vibranium Helmet",
    subtitle: "1:1 Helmet w/ Luminous Purple Energy Weave",
    category: "Helmets",
    hero: "wakanda",
    price: 33065,
    mrp: 37999,
    badge: "Wakanda Tech",
    colorways: "Obsidian Purple",
    rating: 4.9,
    reviewsCount: 118,
    primaryImg: "assets/images/p_black_panther_helmet.jpg",
    secondaryImg: "assets/images/p_black_panther_helmet_wear.jpg",
    allImages: ["assets/images/p_black_panther_helmet.jpg", "assets/images/p_black_panther_helmet_wear.jpg", "assets/images/p_black_panther_helmet_box.jpg"],
    description: "Woven with Wakandan vibranium precision. Integrated optical light pipes illuminate with Kinetic Purple energy pulses at the touch of a button. Features flip-up eye lenses.",
    specs: [
      "Kinetic Energy pulse lighting along helmet crest lines",
      "Push-button retractable optical lenses",
      "Textured woven vibranium suit texture mold"
    ],
    variations: [{ name: "Wakanda Vibranium Weave", price: 33065 }]
  },
  {
    id: 28,
    name: "Iron Spider-Man Nano Helmet",
    subtitle: "1:1 Wearable Helmet w/ Motorized Shutter Eyes",
    category: "Helmets",
    hero: "spider-man",
    price: 32215,
    mrp: 36999,
    badge: "Stark Tech",
    colorways: "Nano Crimson",
    rating: 4.8,
    reviewsCount: 154,
    primaryImg: "assets/images/p_iron_spider_helmet.jpg",
    secondaryImg: "assets/images/p_iron_spider_helmet_wear.jpg",
    allImages: ["assets/images/p_iron_spider_helmet.jpg", "assets/images/p_iron_spider_helmet_wear.jpg", "assets/images/p_iron_spider_helmet_box.jpg"],
    description: "Peter Parker's high-tech armor engineered by Tony Stark. Features mechanical motorized eye apertures that widen and narrow to express emotions, with bright blue and white LED HUD optics.",
    specs: [
      "Motorized servo eye shutter expressions controlled via wireless ring",
      "Metallic crimson and midnight blue electro-coat",
      "Breathable inner fabric mesh lining with adjustable harness"
    ],
    variations: [{ name: "Metallic Crimson Edition", price: 32215 }]
  },
  {
    id: 29,
    name: "Deadpool Mask w/ Display Stand",
    subtitle: "1:1 Elastic Weave Mask w/ Magnetic Expressions",
    category: "Helmets",
    hero: "all",
    price: 24565,
    mrp: 28999,
    badge: "Popular",
    colorways: "Merc Red",
    rating: 4.7,
    reviewsCount: 92,
    primaryImg: "assets/images/p_deadpool_helmet.jpg",
    secondaryImg: "assets/images/p_deadpool_helmet_wear.jpg",
    allImages: ["assets/images/p_deadpool_helmet.jpg", "assets/images/p_deadpool_helmet_wear.jpg", "assets/images/p_deadpool_helmet_box.jpg"],
    description: "Movie-accurate textured elastic weave fabric with interchangeable magnetic eye expressions (squint, wide-eye, smirk, and battle fury). Includes custom katana desktop base.",
    specs: [
      "Authentic textured merc fabric with weathered leather accents",
      "4 pairs of interchangeable magnetic eye expressions",
      "Solid resin collector display stand included"
    ],
    variations: [{ name: "Standard Collector Edition", price: 24565 }]
  },
  {
    id: 30,
    name: "Iron Man MK85 Endgame Helmet",
    subtitle: "1:1 Nano-Armor Touch Opening Helmet",
    category: "Helmets",
    hero: "iron-man",
    price: 27965,
    mrp: 31999,
    badge: "Endgame",
    colorways: "Nano Gold/Crimson",
    rating: 4.9,
    reviewsCount: 167,
    primaryImg: "assets/images/p_mk85_helmet.jpg",
    secondaryImg: "assets/images/p_mk85_helmet_wear.jpg",
    allImages: ["assets/images/p_mk85_helmet.jpg", "assets/images/p_mk85_helmet_wear.jpg", "assets/images/p_mk85_helmet_box.jpg"],
    description: "The climactic Mark LXXXV armor helmet from Avengers: Endgame. Capacitive touch sensors on both temples trigger instant motorized faceplate transformation.",
    specs: [
      "Dual touch sensor activation (no voice command lag)",
      "High-efficiency servo motor for rapid 0.6s deployment",
      "Deep crimson and classic comic book champagne gold palette"
    ],
    variations: [{ name: "Endgame MK85 Standard", price: 27965 }]
  },
  {
    id: 31,
    name: "Arc Reactor Wireless Fast Charger",
    subtitle: "15W Qi Fast Charging w/ Motorized Sensor Lift",
    category: "Chargers",
    hero: "iron-man",
    price: 11815,
    mrp: 13999,
    badge: "Trending",
    colorways: "Stark Palladium",
    rating: 4.9,
    reviewsCount: 340,
    primaryImg: "assets/images/p_arc_reactor_charger.jpg",
    secondaryImg: "assets/images/p_arc_reactor_charging.jpg",
    allImages: ["assets/images/p_arc_reactor_charger.jpg", "assets/images/p_arc_reactor_charging.jpg", "assets/images/p_arc_reactor_box.jpg"],
    description: "Turn your desk into Tony Stark's workshop. When a Qi-enabled phone is placed on the core, mechanical copper coil wings open automatically while the palladium blue reactor pulses with light.",
    specs: [
      "15W High-Speed Qi Fast Wireless Charging (Apple & Android)",
      "Proximity infrared sensor with auto-expanding mechanical wings",
      "CNC milled copper wire coils with laser-etched Stark acrylic ring",
      "USB Type-C input with over-voltage and heat protection"
    ],
    variations: [{ name: "15W Fast Qi Wireless Charger", price: 11815 }]
  },
  {
    id: 32,
    name: "Iron Man MK5 Wireless Earbuds",
    subtitle: "MK5 Briefcase Armor Pod w/ 30h Playtime",
    category: "Tech Gear",
    hero: "iron-man",
    price: 7565,
    mrp: 9999,
    badge: "Stark Audio",
    colorways: "Briefcase Silver",
    rating: 4.6,
    reviewsCount: 88,
    primaryImg: "assets/images/p_mk5_earbuds.jpg",
    secondaryImg: "assets/images/p_mk5_earbuds_wear.jpg",
    allImages: ["assets/images/p_mk5_earbuds.jpg", "assets/images/p_mk5_earbuds_wear.jpg"],
    description: "Compact earbuds housed inside a miniature diecast Iron Man MK5 Suitcase. Features Bluetooth 5.3 low-latency gaming mode and 13mm titanium acoustic drivers.",
    specs: [
      "Zinc-alloy diecast suitcase charging case with spring latch",
      "30 hours total playtime (6h continuous earbud life)",
      "Touch gesture volume and track controls with JARVIS voice prompts"
    ],
    variations: [{ name: "Titanium Silver Case", price: 7565 }]
  },
  {
    id: 33,
    name: "Iron Man Clip-on Sports Earphones",
    subtitle: "Open-Ear Acoustic Pod w/ LED Battery Display",
    category: "Tech Gear",
    hero: "iron-man",
    price: 6715,
    mrp: 8499,
    badge: "Active",
    colorways: "Arc Red",
    rating: 4.5,
    reviewsCount: 62,
    primaryImg: "assets/images/p_clip_earphones.jpg",
    secondaryImg: "assets/images/p_clip_earphones_wear.jpg",
    allImages: ["assets/images/p_clip_earphones.jpg", "assets/images/p_clip_earphones_wear.jpg"],
    description: "Ergonomic ear-cuff design engineered for runners and workouts. Directional sound conduction delivers crystal clear audio without blocking ambient city sounds.",
    specs: [
      "Open-ear secure grip clip design (zero in-ear fatigue)",
      "Digital LED percentage battery indicator on case",
      "IPX5 sweat and splash resistance"
    ],
    variations: [{ name: "Open-Ear Sports Edition", price: 6715 }]
  },
  {
    id: 34,
    name: "Iron Man MK3 Bust Charger PD65W",
    subtitle: "65W GaN Fast Charger w/ Dual USB-C + USB-A",
    category: "Chargers",
    hero: "iron-man",
    price: 10115,
    mrp: 12499,
    badge: "Stark GaN",
    colorways: "Hot-Rod Red",
    rating: 4.9,
    reviewsCount: 112,
    primaryImg: "assets/images/p_mk3_bust_charger.jpg",
    secondaryImg: "assets/images/p_mk3_bust_charging.jpg",
    allImages: ["assets/images/p_mk3_bust_charger.jpg", "assets/images/p_mk3_bust_charging.jpg", "assets/images/p_mk3_bust_box.jpg"],
    description: "Desktop armor bust containing a high-efficiency 65W Gallium Nitride (GaN) fast charger. Power your MacBook Pro, iPhone, and Apple Watch simultaneously through chest ports.",
    specs: [
      "GaN Fast Power Delivery 65W output (charges laptops & phones)",
      "Dual USB-C PD3.0 ports + One USB-A QC4.0 port",
      "Glowing chest Arc Reactor battery status indicator"
    ],
    variations: [{ name: "PD65W GaN Dual USB-C", price: 10115 }]
  },
  {
    id: 35,
    name: "Iron Man MK42 Bust Charger 30W",
    subtitle: "30W Fast Charge Desktop Armor Bust",
    category: "Chargers",
    hero: "iron-man",
    price: 7565,
    mrp: 9499,
    badge: "Compact",
    colorways: "Prodigal Son Gold",
    rating: 4.7,
    reviewsCount: 78,
    primaryImg: "assets/images/p_mk42_bust_charger.jpg",
    secondaryImg: "assets/images/p_mk42_bust_charging.jpg",
    allImages: ["assets/images/p_mk42_bust_charger.jpg", "assets/images/p_mk42_bust_charging.jpg", "assets/images/p_mk42_bust_box.jpg"],
    description: "The MK42 'Prodigal Son' desktop charging dock. Ideal for nightstands and executive desks with 30W fast charging and ambient glowing eye optics.",
    specs: [
      "30W Fast USB-C power delivery adapter",
      "Soft LED nightlight eye illumination",
      "Sculpted desktop showpiece stand"
    ],
    variations: [{ name: "30W Quick Charge Adapter", price: 7565 }]
  },
  {
    id: 36,
    name: "Hall of Armor Busts (7-Piece Set)",
    subtitle: "Complete MK1 to MK7 Collector Box Set",
    category: "Chargers",
    hero: "iron-man",
    price: 12665,
    mrp: 15999,
    badge: "Collector Set",
    colorways: "Full Armor Vault",
    rating: 5.0,
    reviewsCount: 95,
    primaryImg: "assets/images/p_hall_of_armor_busts.jpg",
    secondaryImg: "assets/images/p_hall_of_armor_busts.jpg",
    allImages: ["assets/images/p_hall_of_armor_busts.jpg"],
    description: "The complete Hall of Armor lineage from Tony Stark's cave prototype MK1 through Avengers MK7. Interlocking illuminated alcove bays can be stacked horizontally or vertically.",
    specs: [
      "Complete 7-Piece Armor Evolution Set",
      "Modular illuminated display bays with daisy-chain power cables",
      "Deluxe magnetic gift box with certificate of authenticity"
    ],
    variations: [{ name: "Complete 7-Piece Box Set", price: 12665 }]
  },
  {
    id: 37,
    name: "Captain America Shield Speaker",
    subtitle: "Rotating Gyroscopic Pressure-Relief Mechanism",
    category: "Speakers",
    hero: "captain-america",
    price: 6715,
    mrp: 8499,
    badge: "Sound & Fidget",
    colorways: "Vibranium Alloy",
    rating: 4.8,
    reviewsCount: 145,
    primaryImg: "assets/images/p_cap_shield_speaker.jpg",
    secondaryImg: "assets/images/p_cap_shield_speaker_wear.jpg",
    allImages: ["assets/images/p_cap_shield_speaker.jpg", "assets/images/p_cap_shield_speaker_wear.jpg", "assets/images/p_cap_shield_speaker_box.jpg"],
    description: "A desktop Bluetooth speaker and tactile gyroscope in one. The outer vibranium star ring spins smoothly on ceramic bearings for hours of stress-relief while delivering 360° sound.",
    specs: [
      "Precision ceramic bearing gyroscope outer ring",
      "High-output 5W omnidirectional audio driver",
      "Bluetooth 5.2 connectivity with 8h battery runtime"
    ],
    variations: [{ name: "Rotating Gyroscope Audio Dock", price: 6715 }]
  },
  {
    id: 38,
    name: "Thor Mjolnir Solid Alloy Speaker",
    subtitle: "Solid Zinc Alloy Shell w/ 8W Subwoofer Driver",
    category: "Speakers",
    hero: "thor",
    price: 7565,
    mrp: 9499,
    badge: "Heaviest Bass",
    colorways: "Uru Hammer Metal",
    rating: 4.9,
    reviewsCount: 180,
    primaryImg: "assets/images/p_mjolnir_speaker.jpg",
    secondaryImg: "assets/images/p_mjolnir_speaker_action.jpg",
    allImages: ["assets/images/p_mjolnir_speaker.jpg", "assets/images/p_mjolnir_speaker_action.jpg", "assets/images/p_mjolnir_speaker_detail.jpg"],
    description: "Whosoever holds this hammer, if they be worthy, shall command thunderous bass. Cast in solid zinc alloy with an 8W acoustic driver and Norse rune engraving that pulses to the rhythm.",
    specs: [
      "Heavyweight solid zinc alloy hammer head (feels authentic in hand)",
      "High-excursion 8W acoustic driver with passive radiator bass",
      "Genuine stitched strap with rugged outdoor metal body"
    ],
    variations: [{ name: "Thunder Zinc Alloy Edition", price: 7565 }]
  },
  {
    id: 39,
    name: "Iron Man MK5 Bust Audio Visualizer",
    subtitle: "Spring-Loaded Opening Faceplate w/ Audio Reactor",
    category: "Speakers",
    hero: "iron-man",
    price: 8415,
    mrp: 10499,
    badge: "Mechanical",
    colorways: "Stark Red",
    rating: 4.8,
    reviewsCount: 97,
    primaryImg: "assets/images/p_mk5_bust_speaker.jpg",
    secondaryImg: "assets/images/p_mk5_bust_speaker_action.jpg",
    allImages: ["assets/images/p_mk5_bust_speaker.jpg", "assets/images/p_mk5_bust_speaker_action.jpg", "assets/images/p_mk5_bust_speaker_box.jpg"],
    description: "Desktop armor bust featuring a mechanical spring-loaded faceplate. Press the chest button to reveal internal electronics while the eye lasers and chest reactor pulse in sync with your music.",
    specs: [
      "One-touch spring-loaded mechanical faceplate deployment",
      "Dynamic sound-reactive LED equalizer",
      "Bluetooth 5.1 + TF Card + AUX input options"
    ],
    variations: [{ name: "Spring-Loaded Audio Edition", price: 8415 }]
  },
  {
    id: 40,
    name: "Iron Man MK4 Desktop Speaker Vitality",
    subtitle: "Compact Desktop Armor Bust w/ LED Equalizer",
    category: "Speakers",
    hero: "iron-man",
    price: 6715,
    mrp: 8499,
    badge: "Compact Audio",
    colorways: "Vitality Crimson",
    rating: 4.7,
    reviewsCount: 71,
    primaryImg: "assets/images/p_mk4_bust_speaker.jpg",
    secondaryImg: "assets/images/p_mk4_bust_speaker_action.jpg",
    allImages: ["assets/images/p_mk4_bust_speaker.jpg", "assets/images/p_mk4_bust_speaker_action.jpg", "assets/images/p_mk4_bust_speaker_box.jpg"],
    description: "Compact desktop companion bust engineered for gaming setups and workstations. Features dual stereo pairing and LED rhythm equalizer.",
    specs: [
      "Compact footprint suited for desk monitor stands",
      "Supports TWS dual-speaker stereo pairing",
      "Rechargeable lithium battery with 10h runtime"
    ],
    variations: [{ name: "Compact Armor Vitality Edition", price: 6715 }]
  }
];

// Utility: INR Currency Formatter
function formatINR(val) {
  if (typeof val !== "number") val = Number(val) || 0;
  return "₹" + Math.round(val).toLocaleString("en-IN");
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ==========================================================================
// CART / BAG STATE & MANAGEMENT (Synced across all pages)
// ==========================================================================
let cartItems = [];

function loadCartState() {
  try {
    cartItems = JSON.parse(localStorage.getItem("tss_cart_items") || "[]");
  } catch (err) {
    cartItems = [];
  }
}

function saveCartState() {
  localStorage.setItem("tss_cart_items", JSON.stringify(cartItems));
  updateHeaderBadges();
  renderBagDrawer();
}

function getCartCount() {
  return cartItems.reduce((sum, item) => sum + (Number(item.qty) || 1), 0);
}

function getCartTotal() {
  return cartItems.reduce((sum, item) => sum + (Number(item.price) * (Number(item.qty) || 1)), 0);
}

function addToCart(productId, variantName) {
  const product = CATALOG_ITEMS.find(p => p.id === Number(productId));
  if (!product) return;

  const selectedVariant = product.variations.find(v => v.name === variantName) || product.variations[0];
  const finalPrice = selectedVariant ? selectedVariant.price : product.price;
  const finalVariantName = selectedVariant ? selectedVariant.name : "Standard Edition";

  const existingIndex = cartItems.findIndex(it => it.id === product.id && it.variant === finalVariantName);
  if (existingIndex >= 0) {
    cartItems[existingIndex].qty += 1;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      variant: finalVariantName,
      price: finalPrice,
      img: product.primaryImg,
      qty: 1
    });
  }

  saveCartState();
  showToast(`Added ${product.name} to Bag`);
  openBagDrawer();
}

function removeFromCart(index) {
  if (index >= 0 && index < cartItems.length) {
    const item = cartItems[index];
    cartItems.splice(index, 1);
    saveCartState();
    showToast(`Removed ${item.name} from Bag`);
  }
}

function updateCartQty(index, delta) {
  if (index >= 0 && index < cartItems.length) {
    cartItems[index].qty += delta;
    if (cartItems[index].qty <= 0) {
      removeFromCart(index);
    } else {
      saveCartState();
    }
  }
}

function updateHeaderBadges() {
  const count = getCartCount();
  document.querySelectorAll(".cart-count-badge, #nav-cart-badge, .mobile-cart-badge, #mobile-bottom-cart-badge").forEach(badge => {
    badge.textContent = count;
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
  });

  const wishCount = getWishlistCount();
  document.querySelectorAll(".wishlist-count-badge, #nav-wishlist-badge, .mobile-wishlist-badge, #mobile-drawer-wishlist-badge").forEach(badge => {
    badge.textContent = wishCount;
  });
}

// ==========================================================================
// WISHLIST / FAVOURITES STATE
// ==========================================================================
let wishlistItems = [];

function loadWishlistState() {
  try {
    wishlistItems = JSON.parse(localStorage.getItem("tss_wishlist_items") || "[]");
  } catch (err) {
    wishlistItems = [];
  }
}

function saveWishlistState() {
  localStorage.setItem("tss_wishlist_items", JSON.stringify(wishlistItems));
  updateHeaderBadges();
}

function isWishlisted(productId) {
  return wishlistItems.includes(Number(productId));
}

function toggleWishlist(productId) {
  const id = Number(productId);
  const idx = wishlistItems.indexOf(id);
  if (idx >= 0) {
    wishlistItems.splice(idx, 1);
    showToast("Removed from Favourites");
  } else {
    wishlistItems.push(id);
    showToast("Saved to Favourites");
  }
  saveWishlistState();
  document.querySelectorAll(`.card-wishlist-btn[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle("active", isWishlisted(id));
  });
}

function getWishlistCount() {
  return wishlistItems.length;
}

// ==========================================================================
// NIKE SLIDE-OUT BAG DRAWER (Full Overlay & Interaction)
// ==========================================================================
function openBagDrawer() {
  renderBagDrawer();
  const drawer = document.getElementById("nike-bag-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (drawer) drawer.classList.add("active");
  if (backdrop) backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeBagDrawer() {
  const drawer = document.getElementById("nike-bag-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (drawer) drawer.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================================================
// NIKE MOBILE NAVIGATION DRAWER
// ==========================================================================
function openMobileMenu() {
  const drawer = document.getElementById("mobile-nav-drawer");
  const backdrop = document.getElementById("mobile-nav-backdrop");
  if (drawer && backdrop) {
    drawer.classList.add("active");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById("mobile-nav-drawer");
  const backdrop = document.getElementById("mobile-nav-backdrop");
  if (drawer) drawer.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================================================
// NIKE MOBILE FILTER SHEET (CATEGORIES)
// ==========================================================================
function openMobileFilterDrawer() {
  const sheet = document.getElementById("mobile-filter-sheet");
  const backdrop = document.getElementById("mobile-filter-backdrop");
  if (sheet && backdrop) {
    sheet.classList.add("active");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeMobileFilterDrawer() {
  const sheet = document.getElementById("mobile-filter-sheet");
  const backdrop = document.getElementById("mobile-filter-backdrop");
  if (sheet) sheet.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

function renderBagDrawer() {
  const container = document.getElementById("bag-drawer-items-list");
  if (!container) return;

  const count = getCartCount();
  const total = getCartTotal();
  const FREE_SHIPPING_THRESHOLD = 40000;
  const away = Math.max(0, FREE_SHIPPING_THRESHOLD - total);
  const percent = Math.min(100, Math.round((total / FREE_SHIPPING_THRESHOLD) * 100));

  // Update Free Shipping Bar
  const meterText = document.getElementById("shipping-meter-status");
  const meterBar = document.getElementById("shipping-meter-bar");
  if (meterText) {
    if (away === 0) {
      meterText.innerHTML = `<span><strong>Congratulations!</strong> You get Free Express Delivery</span>`;
    } else {
      meterText.innerHTML = `<span>Add <strong>${formatINR(away)}</strong> for <strong>Free Next-Day Air Express</strong></span><span>${percent}%</span>`;
    }
  }
  if (meterBar) {
    meterBar.style.width = percent + "%";
  }

  // Subtotal in drawer
  const subtotalEl = document.getElementById("bag-drawer-subtotal");
  if (subtotalEl) subtotalEl.textContent = formatINR(total);

  if (cartItems.length === 0) {
    container.innerHTML = `
      <div class="empty-bag-state">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <h3>Your Bag is Empty</h3>
        <p style="font-size:13px; color:var(--text-secondary); margin-bottom:1.5rem;">There are no items in your bag. Explore our official 1:1 helmets and tech.</p>
        <a href="categories.html" class="btn-nike-black" onclick="closeBagDrawer()" style="width:100%;">Shop All Products</a>
      </div>
    `;
    const footerBtns = document.getElementById("bag-drawer-footer-actions");
    if (footerBtns) footerBtns.style.display = "none";
    return;
  }

  const footerBtns = document.getElementById("bag-drawer-footer-actions");
  if (footerBtns) footerBtns.style.display = "flex";

  container.innerHTML = cartItems.map((item, index) => `
    <div class="bag-item-card">
      <div class="bag-item-thumb">
        <img src="${item.img}" alt="${escapeHtml(item.name)}" />
      </div>
      <div class="bag-item-details">
        <div>
          <div class="bag-item-name">${escapeHtml(item.name)}</div>
          <div class="bag-item-variant">${escapeHtml(item.variant)}</div>
          <div class="bag-item-price">${formatINR(item.price)}</div>
        </div>
        <div class="bag-item-actions">
          <div class="qty-stepper">
            <button type="button" class="qty-btn" onclick="updateCartQty(${index}, -1)" aria-label="Decrease">&minus;</button>
            <span class="qty-val">${item.qty}</span>
            <button type="button" class="qty-btn" onclick="updateCartQty(${index}, 1)" aria-label="Increase">+</button>
          </div>
          <button type="button" class="bag-item-remove" onclick="removeFromCart(${index})">Remove</button>
        </div>
      </div>
    </div>
  `).join("");
}

// ==========================================================================
// NIKE SEARCH OVERLAY (Full-Screen Instant Experience)
// ==========================================================================
function openSearchOverlay() {
  const overlay = document.getElementById("nike-search-overlay");
  if (!overlay) return;
  overlay.classList.add("active");
  const input = document.getElementById("overlay-search-input");
  if (input) {
    setTimeout(() => input.focus(), 150);
  }
  document.body.style.overflow = "hidden";
}

function closeSearchOverlay() {
  const overlay = document.getElementById("nike-search-overlay");
  if (!overlay) return;
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

function handleSearchInput(query) {
  const q = (query || "").trim().toLowerCase();
  const resultsContainer = document.getElementById("overlay-search-results");
  const trendingContainer = document.getElementById("search-trending-section");

  if (!resultsContainer) return;

  if (!q) {
    if (trendingContainer) trendingContainer.style.display = "block";
    resultsContainer.innerHTML = "";
    return;
  }

  if (trendingContainer) trendingContainer.style.display = "none";

  const matches = CATALOG_ITEMS.filter(p => {
    return p.name.toLowerCase().includes(q) ||
           p.subtitle.toLowerCase().includes(q) ||
           p.category.toLowerCase().includes(q) ||
           p.hero.toLowerCase().includes(q);
  });

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 3rem 1rem; text-align: center; color: var(--text-secondary);">
        <p style="font-size: 16px; font-weight: 600; color: var(--text-primary);">No products found for "${escapeHtml(query)}"</p>
        <p style="font-size: 13.5px; margin-top: 6px;">Try checking your spelling or search for "helmet", "speaker", or "charger".</p>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div class="product-card" onclick="window.location.href='product.html?id=${p.id}'">
      <div class="product-image-well">
        <span class="product-badge-tag">${escapeHtml(p.badge)}</span>
        <img class="product-image-primary" src="${p.primaryImg}" alt="${escapeHtml(p.name)}" />
        <img class="product-image-secondary" src="${p.secondaryImg}" alt="${escapeHtml(p.name)}" />
      </div>
      <div class="product-meta-details">
        <div class="product-card-title">${escapeHtml(p.name)}</div>
        <div class="product-card-subtitle">${escapeHtml(p.subtitle)}</div>
        <div class="product-card-price-row">
          <span class="product-card-price">${formatINR(p.price)}</span>
        </div>
      </div>
    </div>
  `).join("");
}

// ==========================================================================
// NIKE QUICK VIEW MODAL (PDP Light)
// ==========================================================================
let currentQuickViewProduct = null;
let currentSelectedVariant = null;

function openQuickView(productId) {
  const p = CATALOG_ITEMS.find(item => item.id === Number(productId));
  if (!p) return;
  currentQuickViewProduct = p;
  currentSelectedVariant = p.variations[0];

  const modalContent = document.getElementById("quick-view-modal-body");
  const overlay = document.getElementById("quick-view-overlay");
  if (!modalContent || !overlay) return;

  modalContent.innerHTML = `
    <div class="pdp-grid-layout">
      <!-- Gallery Column -->
      <div class="pdp-gallery-wrap">
        <div class="pdp-main-image-box">
          <img id="qv-main-img" src="${p.primaryImg}" alt="${escapeHtml(p.name)}" />
        </div>
        <div class="pdp-thumbs-row">
          ${p.allImages.map((img, i) => `
            <button type="button" class="pdp-thumb-btn ${i === 0 ? 'active' : ''}" onclick="changeQuickViewImg('${img}', this)">
              <img src="${img}" alt="${escapeHtml(p.name)}" />
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Info Column -->
      <div class="pdp-info-panel">
        <div class="pdp-badge">${escapeHtml(p.badge)} &bull; ${escapeHtml(p.category)}</div>
        <h1 class="pdp-title">${escapeHtml(p.name)}</h1>
        <div class="pdp-subtitle">${escapeHtml(p.subtitle)}</div>

        <div class="pdp-price-row">
          <div class="pdp-price" id="qv-display-price">${formatINR(currentSelectedVariant ? currentSelectedVariant.price : p.price)}</div>
          <div class="pdp-mrp">${formatINR(p.mrp)}</div>
        </div>
        <div class="pdp-tax-note">Incl. of all taxes & Free Express Shipping</div>

        <div class="pdp-variations-title">Select Edition / Variation</div>
        <div class="pdp-variations-grid">
          ${p.variations.map((v, i) => `
            <button type="button" class="pdp-variant-pill ${i === 0 ? 'active' : ''}" onclick="selectQuickViewVariant('${escapeHtml(v.name)}', ${v.price}, this)">
              ${escapeHtml(v.name)}
            </button>
          `).join('')}
        </div>

        <div class="pdp-actions-row">
          <button type="button" class="btn-nike-black" style="width:100%;" onclick="addQuickViewToBag()">
            Add to Bag
          </button>
          <button type="button" class="btn-nike-outline" style="width:100%;" onclick="toggleWishlist(${p.id})">
            Favourite &bull; Save for Later
          </button>
          <a href="product.html?id=${p.id}" style="font-size:13px; font-weight:700; text-align:center; margin-top:8px; text-decoration:underline;">
            View Full Product Specifications &rarr;
          </a>
        </div>

        <!-- Accordions -->
        <div class="pdp-accordion-group">
          <div class="pdp-accordion-item active">
            <button type="button" class="pdp-accordion-trigger" onclick="togglePdpAccordion(this)">
              Product Details & Tech
              <span>&minus;</span>
            </button>
            <div class="pdp-accordion-content" style="display:block;">
              <p>${escapeHtml(p.description)}</p>
              <ul style="margin-top:10px; padding-left:18px; line-height:1.7;">
                ${p.specs.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
              </ul>
            </div>
          </div>
          <div class="pdp-accordion-item">
            <button type="button" class="pdp-accordion-trigger" onclick="togglePdpAccordion(this)">
              Free Delivery & Returns
              <span>&#43;</span>
            </button>
            <div class="pdp-accordion-content">
              Standard delivery in 2-4 business days. Free returns within 14 days of receipt. Stark certified quality control inspection performed on all orders before dispatch.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  const overlay = document.getElementById("quick-view-overlay");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "";
}

function changeQuickViewImg(src, btn) {
  const main = document.getElementById("qv-main-img");
  if (main) main.src = src;
  document.querySelectorAll(".pdp-thumb-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

function selectQuickViewVariant(name, price, btn) {
  currentSelectedVariant = { name, price };
  const priceEl = document.getElementById("qv-display-price");
  if (priceEl) priceEl.textContent = formatINR(price);
  document.querySelectorAll(".pdp-variant-pill").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

function addQuickViewToBag() {
  if (!currentQuickViewProduct) return;
  const variantName = currentSelectedVariant ? currentSelectedVariant.name : (currentQuickViewProduct.variations[0]?.name || "Standard");
  addToCart(currentQuickViewProduct.id, variantName);
  closeQuickView();
}

function togglePdpAccordion(trigger) {
  const item = trigger.closest(".pdp-accordion-item");
  if (!item) return;
  const isActive = item.classList.contains("active");
  item.classList.toggle("active");
  const content = item.querySelector(".pdp-accordion-content");
  const icon = trigger.querySelector("span");
  if (content) content.style.display = isActive ? "none" : "block";
  if (icon) icon.innerHTML = isActive ? "&#43;" : "&minus;";
}

// ==========================================================================
// TOAST ENGINE & THEME TOGGLE
// ==========================================================================
function showToast(msg) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast-pill";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${msg}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function updateThemeUI(theme) {
  const current = theme || document.documentElement.getAttribute("data-theme") || "light";
  const isDark = current === "dark";

  // Update theme toggle buttons across all pages
  document.querySelectorAll(".theme-toggle-header-btn, #themeToggleBtn").forEach(btn => {
    const iconSlot = btn.querySelector(".theme-btn-icon");
    const textSlot = btn.querySelector(".theme-btn-text");
    if (iconSlot) {
      if (isDark) {
        // Dark mode active: show Sun icon to switch to Light mode
        iconSlot.innerHTML = `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`;
      } else {
        // Light mode active: show Moon icon to switch to Dark mode
        iconSlot.innerHTML = `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"/></svg>`;
      }
    }
    if (textSlot) {
      textSlot.textContent = isDark ? "Light" : "Dark";
    }
    btn.setAttribute("aria-label", `Switch to ${isDark ? 'Light' : 'Dark'} mode`);
    btn.setAttribute("title", `Switch to ${isDark ? 'Light' : 'Dark'} mode`);
  });

  const subnavLink = document.getElementById("subnavThemeLink");
  if (subnavLink) {
    subnavLink.textContent = isDark ? "Mode: Dark" : "Mode: Light";
  }
}

function initTheme() {
  const saved = localStorage.getItem("tss_theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeUI(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("tss_theme", next);
  updateThemeUI(next);
  showToast(`Switched to ${next === 'dark' ? 'Nike Lab Dark' : 'Studio Light'} mode`);
}

// Global Keyboard Listener (ESC closes drawers/modals)
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeBagDrawer();
    closeSearchOverlay();
    closeQuickView();
    closeMobileMenu();
    closeMobileFilterDrawer();
  }
});

// Sync cross-tab cart & wishlist changes
window.addEventListener("storage", (e) => {
  if (e.key === "tss_cart_items") {
    loadCartState();
    updateHeaderBadges();
    renderBagDrawer();
  } else if (e.key === "tss_wishlist_items") {
    loadWishlistState();
    updateHeaderBadges();
  }
});

// Boot shared state immediately
loadCartState();
loadWishlistState();
initTheme();
document.addEventListener("DOMContentLoaded", () => {
  updateHeaderBadges();
  updateThemeUI();
});
