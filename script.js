// ----- BASIC CONFIG ----- //

// 💬 Yahan par har outlet ka WhatsApp number set karo.
// Format: "91" + mobile (country code + number, without +)
const OUTLETS = [
  {
    id: "parkota",
    name: "Parkota Outlet",
    area: "Parkota",
    address: "Rishi Patties, Parkota, Sagar (M.P.)",
    whatsapp: "91XXXXXXXXXX", // TODO: real number
    mapsUrl: "https://www.google.com/maps?q=Rishi+Patties+Parkota"
  },
  {
    id: "tili",
    name: "Tili Outlet",
    area: "Tili",
    address: "Rishi Patties, Tili, Sagar (M.P.)",
    whatsapp: "91XXXXXXXXXX", // TODO: real number
    mapsUrl: "https://www.google.com/maps?q=Rishi+Patties+Tili"
  },
  {
    id: "civil",
    name: "Civil Line Outlet",
    area: "Civil Line",
    address: "Rishi Patties, Civil Line, Sagar (M.P.)",
    whatsapp: "91XXXXXXXXXX", // TODO: real number
    mapsUrl: "https://www.google.com/maps?q=Rishi+Patties+Civil+Line"
  },
  {
    id: "makronia",
    name: "Makronia Outlet",
    area: "Makronia",
    address: "Rishi Patties, Makronia, Sagar (M.P.)",
    whatsapp: "91XXXXXXXXXX", // TODO: real number
    mapsUrl: "https://www.google.com/maps?q=Rishi+Patties+Makronia"
  }
];

// 🔥 MENU ITEMS (sample) → yahan tum PDF se prices/items ke hisaab se edit kar sakte ho
// Same menu har outlet ke liye use ho sakta hai.
const MENU = [
  { id: "classic-pattie", name: "Classic Veg Pattie", price: 40, category: "Patties", subtitle: "Crispy veg filling, classic taste." },
  { id: "cheese-pattie", name: "Cheese Burst Pattie", price: 55, category: "Patties", subtitle: "Loaded with molten cheese." },
  { id: "paneer-pattie", name: "Paneer Masala Pattie", price: 60, category: "Patties", subtitle: "Paneer + masala fusion." },

  { id: "veg-burger", name: "Veg Burger", price: 60, category: "Burgers", subtitle: "Soft bun, crunchy patty, loaded veg." },
  { id: "cheese-burger", name: "Cheese Burger", price: 75, category: "Burgers", subtitle: "Extra cheese, extra happiness." },

  { id: "veg-sandwich", name: "Veg Sandwich", price: 50, category: "Sandwich", subtitle: "Fresh veggies, grilled to perfection." },
  { id: "cheese-grill", name: "Cheese Grill Sandwich", price: 70, category: "Sandwich", subtitle: "Cheesy, crispy, delicious." },

  { id: "veg-momos", name: "Veg Steamed Momos (8pc)", price: 80, category: "Momos", subtitle: "Soft dumplings with spicy chutney." },
  { id: "tandoori-momos", name: "Tandoori Momos (8pc)", price: 110, category: "Momos", subtitle: "Smoky, spicy tandoor flavour." },

  { id: "cold-drink", name: "Cold Drink 250ml", price: 25, category: "Beverages", subtitle: "Chilled soft drink." },
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
      <a class="outlet-btn primary" href="https://wa.me/${outlet.whatsapp}" target="_blank" rel="noopener noreferrer">
        💬 Chat Outlet
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
