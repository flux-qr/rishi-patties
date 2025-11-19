// ----- BASIC CONFIG ----- //

// 💬 Yahan par har outlet ka WhatsApp number set karo.
// Format: "91" + mobile (country code + number, without +)
const OUTLETS = [
  {
    id: "parkota",
    name: "Parkota Outlet",
    area: "Parkota",
    address: "Rishi Patties, Parkota, Sagar (M.P.)",
    whatsapp: "919009300004", // TODO: real number
    mapsUrl: "https://www.google.com/maps?q=Rishi+Patties+Parkota"
  },
  {
    id: "tili",
    name: "Tili Outlet",
    area: "Tili",
    address: "Rishi Patties, Tili, Sagar (M.P.)",
    whatsapp: "919009300004", // TODO: real number
    mapsUrl: "https://www.google.com/maps?q=Rishi+Patties+Tili"
  },
  {
    id: "civil",
    name: "Civil Line Outlet",
    area: "Civil Line",
    address: "Rishi Patties, Civil Line, Sagar (M.P.)",
    whatsapp: "919009300004", // TODO: real number
    mapsUrl: "https://www.google.com/maps?q=Rishi+Patties+Civil+Line"
  },
  {
    id: "makronia",
    name: "Makronia Outlet",
    area: "Makronia",
    address: "Rishi Patties, Makronia, Sagar (M.P.)",
    whatsapp: "919009300004", // TODO: real number
    mapsUrl: "https://www.google.com/maps?q=Rishi+Patties+Makronia"
  }
];

// 🔥 MENU ITEMS (sample) → yahan tum PDF se prices/items ke hisaab se edit kar sakte ho
// Same menu har outlet ke liye use ho sakta hai.
const MENU = [
 // PATTIES
{ name: "Aloo Masala Patties", price: 25, category: "Patties" },
{ name: "Cheese Masala Patties", price: 45, category: "Patties" },
{ name: "Aloo Paneer Patties", price: 30, category: "Patties" },
{ name: "Mayo Masala Patties", price: 30, category: "Patties" },
{ name: "Mayo Paneer Patties", price: 35, category: "Patties" },
{ name: "Veg Mayo Patties", price: 40, category: "Patties" },
{ name: "Cheese Paneer Patties", price: 40, category: "Patties" },
{ name: "Mayo Cheese", price: 40, category: "Patties" },
{ name: "Cheese Patties", price: 40, category: "Patties" },
{ name: "Cheese Chilli Patties", price: 40, category: "Patties" },
{ name: "Smokey Patties", price: 45, category: "Patties" },
{ name: "Veg Spread Patties", price: 45, category: "Patties" },
{ name: "Pizza Patties", price: 45, category: "Patties" },
{ name: "Honey Mustard Patties", price: 45, category: "Patties" },
{ name: "Mint Patties", price: 45, category: "Patties" },
{ name: "Oregano Patties", price: 45, category: "Patties" },
{ name: "Garlic Patties", price: 45, category: "Patties" },
{ name: "Cheese Jalapeno Patties", price: 45, category: "Patties" },
{ name: "Cheese Burst Jalapeno", price: 70, category: "Patties" },
{ name: "Tangy Mayo Patties", price: 45, category: "Patties" },
{ name: "Cheese Chutney Patties", price: 45, category: "Patties" },
{ name: "Cheese Garlic Bread Patties", price: 80, category: "Patties" },
{ name: "Paneer Tikka Patties", price: 100, category: "Patties" },
{ name: "Paneer Tikka Cheese Burst", price: 120, category: "Patties" },
{ name: "Kadhai Paneer Patties", price: 100, category: "Patties" },
{ name: "Paneer Makhani Patties", price: 100, category: "Patties" },
{ name: "Paneer Tandoori Patties", price: 100, category: "Patties" },
{ name: "Special Spread Patties", price: 45, category: "Patties" },
{ name: "Schezwan Patties", price: 45, category: "Patties" },
{ name: "Cheese Burst Patties", price: 70, category: "Patties" },
{ name: "Double Cheese Burst", price: 100, category: "Patties" },
{ name: "Triple Cheese Burst", price: 120, category: "Patties" },
{ name: "Sweet Corn Patties", price: 80, category: "Patties" },
{ name: "Sweet Corn Cheese Burst", price: 100, category: "Patties" },
{ name: "Maggi Cheese Burst Patties", price: 120, category: "Patties" },
{ name: "Maggi Patties", price: 90, category: "Patties" },
{ name: "Veg Paneer Patties", price: 60, category: "Patties" },
{ name: "Paneer Masala Patties", price: 90, category: "Patties" },
{ name: "Mixed Veg Patties", price: 60, category: "Patties" },
{ name: "Mutter Paneer Patties", price: 60, category: "Patties" },
{ name: "Butter Paneer Masala Patties", price: 90, category: "Patties" },
{ name: "Chilli Paneer Patties", price: 80, category: "Patties" },
{ name: "Black Olive Patties", price: 90, category: "Patties" },
{ name: "Mushroom Masala Patties", price: 90, category: "Patties" },
{ name: "Green Olive Patties", price: 90, category: "Patties" },
{ name: "Red Chilli Patties", price: 45, category: "Patties" },
{ name: "Spread Patties", price: 45, category: "Patties" },
{ name: "Chinese Flavour Patties", price: 45, category: "Patties" },
{ name: "Chipotle Patties", price: 45, category: "Patties" },
{ name: "Mustard Patties", price: 45, category: "Patties" },
{ name: "Sweet Onion Patties", price: 45, category: "Patties" },
{ name: "Sweet Chilli Patties", price: 45, category: "Patties" },
{ name: "Vinaigrette Patties", price: 45, category: "Patties" },
{ name: "Green Chilli Garlic Patties", price: 45, category: "Patties" },
{ name: "Jhatka Patties", price: 50, category: "Patties" },
{ name: "Ginger Patties", price: 45, category: "Patties" },
{ name: "Kachhi Keri Patties", price: 45, category: "Patties" },
{ name: "Lemon Patties", price: 45, category: "Patties" },
{ name: "Tomato Patties", price: 45, category: "Patties" },
{ name: "Plain Gravy Patties", price: 60, category: "Patties" },
{ name: "Capsicum Masala Patties", price: 80, category: "Patties" },
{ name: "Jalapeno Masala Patties", price: 80, category: "Patties" },
{ name: "Paprika Masala Patties", price: 80, category: "Patties" },
{ name: "Pasta Patties", price: 100, category: "Patties" },
{ name: "Pasta Cheese Burst", price: 120, category: "Patties" },
{ name: "Tandoori Patties", price: 45, category: "Patties" },
{ name: "Green Chilli Patties", price: 45, category: "Patties" },
{ name: "Garlic Patties", price: 45, category: "Patties" },
{ name: "Garlic Chilli Patties", price: 45, category: "Patties" },
{ name: "Peri Peri Patties", price: 45, category: "Patties" },
{ name: "Makhni Patties", price: 45, category: "Patties" },
{ name: "Chocolate Patties", price: 45, category: "Patties" },
{ name: "Strawberry Patties", price: 45, category: "Patties" },
{ name: "Mango Patties", price: 45, category: "Patties" },
{ name: "Orange Patties", price: 45, category: "Patties" },
{ name: "Blueberry Patties", price: 45, category: "Patties" },
{ name: "Blackcurrant Patties", price: 45, category: "Patties" },
{ name: "Butterscotch Patties", price: 45, category: "Patties" },
{ name: "Lychee Patties", price: 45, category: "Patties" },
// BURGER
{ name: "Classic Burger", price: 50, category: "Burger" },
{ name: "Veggie Aloo Tikki Burger", price: 50, category: "Burger" },
{ name: "Veggie Paneer Tikki Burger", price: 60, category: "Burger" },
{ name: "Special Paneer Tikki Burger", price: 80, category: "Burger" },
{ name: "Cheese Paneer Burger", price: 90, category: "Burger" },
{ name: "Veggie Cheese Tikki Burger", price: 60, category: "Burger" },
{ name: "Double Cheese Burger", price: 80, category: "Burger" },
{ name: "Cheese Burst Burger", price: 100, category: "Burger" },
{ name: "Spicy Burger", price: 60, category: "Burger" },
{ name: "Corn Cheese Burger", price: 80, category: "Burger" },
{ name: "Double Tikki Burger", price: 60, category: "Burger" },
{ name: "Maggi Burger", price: 90, category: "Burger" },
{ name: "Maha Veggie Burger", price: 60, category: "Burger" },
{ name: "Jalapeno Cheese Burger", price: 90, category: "Burger" },
{ name: "Crunchy Burger", price: 100, category: "Burger" },
// SANDWICH
{ name: "Chocolate Sandwich", price: 90, category: "Sandwich" },
{ name: "Veg Cheese Masala Sandwich", price: 80, category: "Sandwich" },
{ name: "Plain Veg Sandwich", price: 80, category: "Sandwich" },
{ name: "Garlic Bread Sandwich", price: 90, category: "Sandwich" },
{ name: "Veg Sandwich", price: 70, category: "Sandwich" },
{ name: "Zingy Parcel Sandwich", price: 100, category: "Sandwich" },
{ name: "Four Tear Sandwich", price: 120, category: "Sandwich" },
{ name: "Bombay Kachha Sandwich", price: 70, category: "Sandwich" },
{ name: "Green Chilli Sandwich", price: 80, category: "Sandwich" },
{ name: "Cheese Chutney Sandwich", price: 80, category: "Sandwich" },
{ name: "Veg Cheese Sandwich", price: 80, category: "Sandwich" },
{ name: "Maggi Sandwich", price: 100, category: "Sandwich" },
{ name: "Schezwan Sandwich", price: 80, category: "Sandwich" },
{ name: "Pasta Sandwich", price: 100, category: "Sandwich" },
{ name: "Paneer Masala Sandwich", price: 90, category: "Sandwich" },
{ name: "Aloo Tikki Sandwich", price: 100, category: "Sandwich" },
{ name: "Butter Paneer Masala Sandwich", price: 100, category: "Sandwich" },
{ name: "Sweet Corn Cheese Sandwich", price: 90, category: "Sandwich" },
{ name: "Pizza Sandwich", price: 80, category: "Sandwich" },
{ name: "Aloo Masala Sandwich", price: 70, category: "Sandwich" },
{ name: "Cheese Burst Sandwich", price: 100, category: "Sandwich" },
{ name: "Double Cheese Sandwich", price: 100, category: "Sandwich" },
{ name: "Paneer Tikka Sandwich", price: 100, category: "Sandwich" },
{ name: "Kadhai Paneer Sandwich", price: 100, category: "Sandwich" },
{ name: "Paneer Makhni Sandwich", price: 100, category: "Sandwich" },
{ name: "Paneer Tandoori Sandwich", price: 100, category: "Sandwich" },
{ name: "Garlic Chilli Cheese Sandwich", price: 80, category: "Sandwich" },
// PIZZA
{ name: "Veg Paneer Pizza", price: 99, category: "Pizza" },
{ name: "Plain Cheese Pizza", price: 120, category: "Pizza" },
{ name: "Veg Cheese Pizza", price: 120, category: "Pizza" },
{ name: "Veg Cheese Paneer Pizza", price: 150, category: "Pizza" },
{ name: "Sweetcorn Cheese Pizza", price: 150, category: "Pizza" },
{ name: "Double Cheese Pizza", price: 150, category: "Pizza" },
{ name: "Veg Loaded Pizza", price: 150, category: "Pizza" },
{ name: "Paneer Masala Pizza", price: 150, category: "Pizza" },
{ name: "Maggi Cheese Pizza", price: 150, category: "Pizza" },
{ name: "Noodles Pizza", price: 150, category: "Pizza" },
{ name: "Pasta Pizza", price: 150, category: "Pizza" },
{ name: "Paneer Tikka Pizza", price: 200, category: "Pizza" },
{ name: "Paneer Makhni Pizza", price: 200, category: "Pizza" },
{ name: "Kadhai Paneer Pizza", price: 200, category: "Pizza" },
{ name: "Spicy Veg Cheese Pizza", price: 150, category: "Pizza" },
{ name: "Capsicum Masala Pizza", price: 150, category: "Pizza" },
{ name: "Tomato Masala Pizza", price: 150, category: "Pizza" },
{ name: "Black Olive Pizza", price: 170, category: "Pizza" },
{ name: "Green Olive Pizza", price: 170, category: "Pizza" },
{ name: "Jalapeno Masala Pizza", price: 170, category: "Pizza" },
{ name: "Paprika Masala Pizza", price: 170, category: "Pizza" },
{ name: "Mutter Paneer Pizza", price: 200, category: "Pizza" },
{ name: "Special Pizza", price: 200, category: "Pizza" },
// MAGGI
{ name: "Plain Maggi", price: 50, category: "Maggi" },
{ name: "Masala Maggi", price: 50, category: "Maggi" },
{ name: "Veg Maggi", price: 80, category: "Maggi" },
{ name: "Veg Cheese Maggi", price: 120, category: "Maggi" },
{ name: "Cheese Burst Maggi", price: 90, category: "Maggi" },
{ name: "Soupy Maggi", price: 70, category: "Maggi" },
{ name: "Corn Cheese Maggi", price: 90, category: "Maggi" },
{ name: "Peri Peri Maggi", price: 100, category: "Maggi" },
{ name: "Peri Peri Cheese Maggi", price: 120, category: "Maggi" },
{ name: "Double Cheese Maggi", price: 120, category: "Maggi" },
{ name: "Garlic Chilli Maggi", price: 90, category: "Maggi" },
{ name: "Garlic Chilli Cheese Maggi", price: 120, category: "Maggi" },
{ name: "Schezwan Maggi", price: 80, category: "Maggi" },
{ name: "Schezwan Cheese Maggi", price: 100, category: "Maggi" },
{ name: "Butter Maggi", price: 90, category: "Maggi" },
{ name: "Butter Cheese Maggi", price: 120, category: "Maggi" },
{ name: "White Sauce Maggi", price: 100, category: "Maggi" },
{ name: "White Sauce Cheese Maggi", price: 120, category: "Maggi" },
{ name: "Red Sauce Cheese Maggi", price: 120, category: "Maggi" },
{ name: "Tomato Maggi", price: 80, category: "Maggi" },
{ name: "Tomato Cheese Maggi", price: 100, category: "Maggi" },
{ name: "Punjabi Tadka Maggi", price: 90, category: "Maggi" },
{ name: "Double Masala Maggi", price: 60, category: "Maggi" },
{ name: "Paneer Maggi", price: 90, category: "Maggi" },
{ name: "Butter Paneer Masala Maggi", price: 100, category: "Maggi" },
{ name: "Olive Maggi", price: 120, category: "Maggi" },
{ name: "Jalapeno Maggi", price: 120, category: "Maggi" },
{ name: "Paprika Maggi", price: 120, category: "Maggi" },
{ name: "Green Chilli Maggi", price: 80, category: "Maggi" },
{ name: "Mutter Maggi", price: 70, category: "Maggi" },
{ name: "Mutter Paneer Maggi", price: 100, category: "Maggi" },
{ name: "Corn Maggi", price: 70, category: "Maggi" },
{ name: "Chilli Paneer Maggi", price: 90, category: "Maggi" },
{ name: "Indori Maggi", price: 90, category: "Maggi" },
{ name: "Chinese Fry Maggi", price: 100, category: "Maggi" },
{ name: "Paneer Tandoori Cheese Maggi", price: 140, category: "Maggi" },
{ name: "Kadhai Paneer Cheese Maggi", price: 140, category: "Maggi" },
{ name: "Tomato Capsicum Cheese Maggi", price: 140, category: "Maggi" },
// PASTA
{ name: "White Sauce Pasta", price: 120, category: "Pasta" },
{ name: "Red Sauce Pasta", price: 120, category: "Pasta" },
{ name: "Pink Sauce Pasta", price: 140, category: "Pasta" },
{ name: "Tandoori Pasta", price: 120, category: "Pasta" },
{ name: "Schezwan Pasta", price: 120, category: "Pasta" },
{ name: "Sweet Corn Pasta", price: 120, category: "Pasta" },
{ name: "Cheese Pasta", price: 140, category: "Pasta" },
{ name: "Paneer Pasta", price: 140, category: "Pasta" },
{ name: "Butter Paneer Masala Pasta", price: 140, category: "Pasta" },
{ name: "Kadhai Paneer Pasta", price: 150, category: "Pasta" },
{ name: "Makhni Pasta", price: 140, category: "Pasta" },
{ name: "Chinese Pasta", price: 120, category: "Pasta" },
{ name: "Chilli Paneer Pasta", price: 150, category: "Pasta" },
{ name: "Jalapeno Pasta", price: 140, category: "Pasta" },
{ name: "Paprika Pasta", price: 140, category: "Pasta" },
{ name: "Olive Pasta", price: 140, category: "Pasta" },
// FRIES
{ name: "French Fries (Small)", price: 80, category: "Fries" },
{ name: "French Fries (Medium)", price: 120, category: "Fries" },
{ name: "French Fries (Large)", price: 150, category: "Fries" },

{ name: "Peri Peri Fries (Small)", price: 90, category: "Fries" },
{ name: "Peri Peri Fries (Medium)", price: 130, category: "Fries" },
{ name: "Peri Peri Fries (Large)", price: 160, category: "Fries" },

{ name: "Cheese Fries", price: 120, category: "Fries" },
{ name: "Tandoori Fries", price: 130, category: "Fries" },
{ name: "Masala Fries", price: 100, category: "Fries" },
{ name: "Schezwan Fries", price: 120, category: "Fries" },
// CHINESE
{ name: "Veg Noodles", price: 80, category: "Chinese" },
{ name: "Veg Cheese Noodles", price: 120, category: "Chinese" },
{ name: "Schezwan Noodles", price: 100, category: "Chinese" },
{ name: "Schezwan Cheese Noodles", price: 130, category: "Chinese" },
{ name: "Tandoori Noodles", price: 100, category: "Chinese" },
{ name: "Garlic Chilli Noodles", price: 100, category: "Chinese" },
{ name: "Garlic Cheese Noodles", price: 130, category: "Chinese" },
{ name: "Red Sauce Noodles", price: 90, category: "Chinese" },
{ name: "White Sauce Noodles", price: 90, category: "Chinese" },

{ name: "Veg Manchurian", price: 130, category: "Chinese" },
{ name: "Cheese Manchurian", price: 150, category: "Chinese" },
{ name: "Schezwan Manchurian", price: 130, category: "Chinese" },
{ name: "Paneer Manchurian", price: 160, category: "Chinese" },
{ name: "Chilli Paneer", price: 170, category: "Chinese" },
// RICE
{ name: "Veg Fried Rice", price: 80, category: "Rice" },
{ name: "Veg Cheese Fried Rice", price: 120, category: "Rice" },
{ name: "Schezwan Fried Rice", price: 100, category: "Rice" },
{ name: "Schezwan Cheese Fried Rice", price: 130, category: "Rice" },
{ name: "Paneer Fried Rice", price: 150, category: "Rice" },
{ name: "Chinese Fry Rice", price: 100, category: "Rice" },
{ name: "Tandoori Fried Rice", price: 100, category: "Rice" },
{ name: "Garlic Chilli Fried Rice", price: 100, category: "Rice" },
// ROLL
{ name: "Veg Roll", price: 50, category: "Roll" },
{ name: "Veg Cheese Roll", price: 70, category: "Roll" },
{ name: "Paneer Roll", price: 90, category: "Roll" },
{ name: "Paneer Cheese Roll", price: 110, category: "Roll" },
{ name: "Schezwan Roll", price: 70, category: "Roll" },
{ name: "Schezwan Paneer Roll", price: 100, category: "Roll" },
{ name: "Tandoori Roll", price: 80, category: "Roll" },
{ name: "Tandoori Paneer Roll", price: 110, category: "Roll" },
{ name: "Chinese Roll", price: 70, category: "Roll" },
{ name: "Chinese Paneer Roll", price: 100, category: "Roll" },
// GARLIC BREAD
{ name: "Garlic Bread", price: 80, category: "Garlic Bread" },
{ name: "Cheese Garlic Bread", price: 100, category: "Garlic Bread" },
{ name: "Peri Peri Garlic Bread", price: 90, category: "Garlic Bread" },
{ name: "Tandoori Garlic Bread", price: 90, category: "Garlic Bread" },
{ name: "Chinese Garlic Bread", price: 90, category: "Garlic Bread" },
{ name: "Sweetcorn Garlic Bread", price: 120, category: "Garlic Bread" },
 { id: "mineral-water", name: "Mineral Water", price: 20, category: "Beverages", subtitle: "Packaged drinking water." }
];

// ----- STATE ----- //

let selectedOutletId = OUTLETS[0].id;
let cart = {}; // { itemId: quantity }
let selectedCategory = "All";
let searchTerm = "";

// ----- HELPERS ----- //

function formatCurrency(amount) {
  return "₹" + amount.toString();
}

function getOutletById(id) {
  return OUTLETS.find((o) => o.id === id);
}

function getCartItems() {
  return Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const item = MENU.find((m) => m.id === id);
      return { ...item, quantity: qty, total: item.price * qty };
    });
}

// ----- RENDER OUTLETS ----- //

function renderOutletTabs() {
  const container = document.getElementById("outletTabs");
  container.innerHTML = "";
  OUTLETS.forEach((outlet) => {
    const btn = document.createElement("button");
    btn.className = "outlet-tab" + (outlet.id === selectedOutletId ? " active" : "");
    btn.innerHTML = `
      <span>${outlet.area}</span>
      <small>${outlet.name}</small>
    `;
    btn.addEventListener("click", () => {
      selectedOutletId = outlet.id;
      renderOutletTabs();
      renderOutletInfo();
    });
    container.appendChild(btn);
  });
}

function renderOutletInfo() {
  const outlet = getOutletById(selectedOutletId);
  const info = document.getElementById("outletInfo");
  info.innerHTML = `
    <div class="outlet-row">
      <span class="icon">📍</span>
      <span>${outlet.address}</span>
    </div>
    <div class="outlet-row">
      <span class="icon">📱</span>
      <span>WhatsApp Orders: ${outlet.whatsapp}</span>
    </div>
    <div class="outlet-actions">
      <a class="outlet-btn" href="${outlet.mapsUrl}" target="_blank" rel="noopener noreferrer">
        🗺️ Live Location
      </a>
      <a class="outlet-btn primary" 
   href="https://wa.me/${outlet.whatsapp}?text=${encodeURIComponent(
     `Hello Rishi Patties! I want to order.%0AHere is your outlet live location:%0A${outlet.mapsUrl}`
   )}" 
   target="_blank" 
   rel="noopener noreferrer">
  💬 WhatsApp + 📍 Location
</a>

    </div>
  `;
}

// ----- RENDER MENU ----- //

function getMenuCategories() {
  const set = new Set(MENU.map((m) => m.category));
  return ["All", ...Array.from(set)];
}

function renderCategoryPills() {
  const container = document.getElementById("categoryPills");
  container.innerHTML = "";
  getMenuCategories().forEach((cat) => {
    const pill = document.createElement("button");
    pill.className = "category-pill" + (cat === selectedCategory ? " active" : "");
    pill.textContent = cat;
    pill.addEventListener("click", () => {
      selectedCategory = cat;
      renderCategoryPills();
      renderMenuList();
    });
    container.appendChild(pill);
  });
}

function renderMenuList() {
  const list = document.getElementById("menuList");
  list.innerHTML = "";

  let items = MENU.slice();

  if (selectedCategory !== "All") {
    items = items.filter((m) => m.category === selectedCategory);
  }

  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase();
    items = items.filter(
      (m) =>
        m.name.toLowerCase().includes(term) ||
        (m.subtitle && m.subtitle.toLowerCase().includes(term))
    );
  }

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "muted";
    empty.style.fontSize = "13px";
    empty.textContent = "No items found for this filter.";
    list.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "menu-item";

    const meta = document.createElement("div");
    meta.className = "menu-meta";
    meta.innerHTML = `
      <div class="menu-name">${item.name}</div>
      <div class="menu-tagline">${item.subtitle || ""}</div>
      <div class="menu-price">${formatCurrency(item.price)}</div>
    `;

    const actions = document.createElement("div");
    actions.className = "menu-actions";

    const quantity = cart[item.id] || 0;

    if (quantity === 0) {
      const addBtn = document.createElement("button");
      addBtn.className = "primary-btn";
      addBtn.style.boxShadow = "none";
      addBtn.style.padding = "6px 10px";
      addBtn.style.fontSize = "12px";
      addBtn.textContent = "+ Add";
      addBtn.addEventListener("click", () => {
        updateCartQuantity(item.id, 1);
      });
      actions.appendChild(addBtn);
    } else {
      const qtyBadge = document.createElement("div");
      qtyBadge.className = "qty-badge";
      qtyBadge.textContent = `${quantity} in cart`;

      const control = document.createElement("div");
      control.className = "qty-control";
      control.innerHTML = `
        <button class="qty-btn">−</button>
        <span class="qty-value">${quantity}</span>
        <button class="qty-btn">+</button>
      `;

      const [minusBtn, , plusBtn] = control.querySelectorAll("button, span");

      minusBtn.addEventListener("click", () => {
        updateCartQuantity(item.id, quantity - 1);
      });

      plusBtn.addEventListener("click", () => {
        updateCartQuantity(item.id, quantity + 1);
      });

      actions.appendChild(qtyBadge);
      actions.appendChild(control);
    }

    row.appendChild(meta);
    row.appendChild(actions);
    list.appendChild(row);
  });
}

// ----- CART ----- //

function updateCartQuantity(itemId, newQty) {
  if (newQty <= 0) {
    delete cart[itemId];
  } else {
    cart[itemId] = newQty;
  }
  renderMenuList();
  renderCart();
}

function renderCart() {
  const items = getCartItems();
  const empty = document.getElementById("cartEmpty");
  const list = document.getElementById("cartList");
  const summaryItems = document.getElementById("summaryItems");
  const summarySubtotal = document.getElementById("summarySubtotal");

  list.innerHTML = "";

  if (items.length === 0) {
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
    items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "cart-item";

      const info = document.createElement("div");
      info.className = "cart-item-info";
      info.innerHTML = `
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">${item.quantity} × ${formatCurrency(item.price)}</div>
      `;

      const amountWrapper = document.createElement("div");
      amountWrapper.style.display = "flex";
      amountWrapper.style.alignItems = "center";
      amountWrapper.style.gap = "6px";

      const amount = document.createElement("div");
      amount.className = "cart-item-amount";
      amount.textContent = formatCurrency(item.total);

      const control = document.createElement("div");
      control.className = "qty-control";
      control.innerHTML = `
        <button class="qty-btn">−</button>
        <span class="qty-value">${item.quantity}</span>
        <button class="qty-btn">+</button>
      `;
      const [minusBtn, , plusBtn] = control.querySelectorAll("button, span");

      minusBtn.addEventListener("click", () => {
        updateCartQuantity(item.id, item.quantity - 1);
      });
      plusBtn.addEventListener("click", () => {
        updateCartQuantity(item.id, item.quantity + 1);
      });

      amountWrapper.appendChild(amount);
      amountWrapper.appendChild(control);

      row.appendChild(info);
      row.appendChild(amountWrapper);
      list.appendChild(row);
    });
  }

  const totalQty = items.reduce((sum, it) => sum + it.quantity, 0);
  const subtotal = items.reduce((sum, it) => sum + it.total, 0);

  summaryItems.textContent = totalQty;
  summarySubtotal.textContent = formatCurrency(subtotal);
}

// ----- WHATSAPP ORDER ----- //

function getSelectedPaymentMode() {
  const radios = document.querySelectorAll('input[name="paymentMode"]');
  for (const r of radios) {
    if (r.checked) return r.value;
  }
  return "COD";
}

function handleWhatsAppOrder() {
  const items = getCartItems();
  if (!items.length) {
    alert("Please add at least one item to your cart.");
    return;
  }

  const outlet = getOutletById(selectedOutletId);
  if (!outlet.whatsapp || outlet.whatsapp.includes("X")) {
    alert("WhatsApp number for this outlet is not configured yet.");
    return;
  }

  const customerName = document.getElementById("customerName").value.trim();
  const paymentMode = getSelectedPaymentMode();
  const note = document.getElementById("customerNote").value.trim();

  const totalQty = items.reduce((sum, it) => sum + it.quantity, 0);
  const subtotal = items.reduce((sum, it) => sum + it.total, 0);

  let text = `*Rishi Patties Order*%0A`;
  text += `Outlet: *${outlet.name}*%0A`;
  if (customerName) {
    text += `Name: *${encodeURIComponent(customerName)}*%0A`;
  }
  text += `Payment: *${paymentMode}*%0A`;
  text += `%0A*Items:*%0A`;

  items.forEach((it, index) => {
    text += `${index + 1}) ${encodeURIComponent(it.name)} x${it.quantity} - ${formatCurrency(it.total)}%0A`;
  });

  text += `%0A*Total:* ${formatCurrency(subtotal)}%0A`;
  text += `Qty: ${totalQty}%0A`;
  if (note) {
    text += `%0ANote: ${encodeURIComponent(note)}%0A`;
  }
  text += `%0AOutlet Location:%0A${encodeURIComponent(outlet.mapsUrl)}%0A`;
  text += `%0A(Generated via Fulx QR System)`;

  const url = `https://wa.me/${outlet.whatsapp}?text=${text}`;
  window.open(url, "_blank");
}

// ----- INIT ----- //

function init() {
  renderOutletTabs();
  renderOutletInfo();
  renderCategoryPills();
  renderMenuList();
  renderCart();

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderMenuList();
  });

  const btnWhatsApp = document.getElementById("btnWhatsApp");
  btnWhatsApp.addEventListener("click", handleWhatsAppOrder);
}

document.addEventListener("DOMContentLoaded", init);
