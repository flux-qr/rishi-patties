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
{ id:"patties-001", name: "Aloo Masala Patties", price: 25, category: "Patties" },
{ id:"patties-002", name: "Cheese Masala Patties", price: 45, category: "Patties" },
{ id:"patties-003", name: "Aloo Paneer Patties", price: 30, category: "Patties" },
{ id:"patties-004", name: "Mayo Masala Patties", price: 30, category: "Patties" },
{ id:"patties-005", name: "Mayo Paneer Patties", price: 35, category: "Patties" },
{ id:"patties-006", name: "Veg Mayo Patties", price: 40, category: "Patties" },
{ id:"patties-007", name: "Cheese Paneer Patties", price: 40, category: "Patties" },
{ id:"patties-008", name: "Mayo Cheese", price: 40, category: "Patties" },
{ id:"patties-009", name: "Cheese Patties", price: 40, category: "Patties" },
{ id:"patties-010", name: "Cheese Chilli Patties", price: 40, category: "Patties" },
{ id:"patties-011", name: "Smokey Patties", price: 45, category: "Patties" },
{ id:"patties-012", name: "Veg Spread Patties", price: 45, category: "Patties" },
{ id:"patties-013", name: "Pizza Patties", price: 45, category: "Patties" },
{ id:"patties-014", name: "Honey Mustard Patties", price: 45, category: "Patties" },
{ id:"patties-015", name: "Mint Patties", price: 45, category: "Patties" },
{ id:"patties-016", name: "Oregano Patties", price: 45, category: "Patties" },
{ id:"patties-017", name: "Garlic Patties", price: 45, category: "Patties" },
{ id:"patties-018", name: "Cheese Jalapeno Patties", price: 45, category: "Patties" },
{ id:"patties-019", name: "Cheese Burst Jalapeno", price: 70, category: "Patties" },
{ id:"patties-020", name: "Tangy Mayo Patties", price: 45, category: "Patties" },
{ id:"patties-021", name: "Cheese Chutney Patties", price: 45, category: "Patties" },
{ id:"patties-022", name: "Cheese Garlic Bread Patties", price: 80, category: "Patties" },
{ id:"patties-023", name: "Paneer Tikka Patties", price: 100, category: "Patties" },
{ id:"patties-024", name: "Paneer Tikka Cheese Burst", price: 120, category: "Patties" },
{ id:"patties-025", name: "Kadhai Paneer Patties", price: 100, category: "Patties" },
{ id:"patties-026", name: "Paneer Makhani Patties", price: 100, category: "Patties" },
{ id:"patties-027", name: "Paneer Tandoori Patties", price: 100, category: "Patties" },
{ id:"patties-028", name: "Special Spread Patties", price: 45, category: "Patties" },
{ id:"patties-029", name: "Schezwan Patties", price: 45, category: "Patties" },
{ id:"patties-030", name: "Cheese Burst Patties", price: 70, category: "Patties" },
{ id:"patties-031", name: "Double Cheese Burst", price: 100, category: "Patties" },
{ id:"patties-032", name: "Triple Cheese Burst", price: 120, category: "Patties" },
{ id:"patties-033", name: "Sweet Corn Patties", price: 80, category: "Patties" },
{ id:"patties-034", name: "Sweet Corn Cheese Burst", price: 100, category: "Patties" },
{ id:"patties-035", name: "Maggi Cheese Burst Patties", price: 120, category: "Patties" },
{ id:"patties-036", name: "Maggi Patties", price: 90, category: "Patties" },
{ id:"patties-037", name: "Veg Paneer Patties", price: 60, category: "Patties" },
{ id:"patties-038", name: "Paneer Masala Patties", price: 90, category: "Patties" },
{ id:"patties-039", name: "Mixed Veg Patties", price: 60, category: "Patties" },
{ id:"patties-040", name: "Mutter Paneer Patties", price: 60, category: "Patties" },
{ id:"patties-041", name: "Butter Paneer Masala Patties", price: 90, category: "Patties" },
{ id:"patties-042", name: "Chilli Paneer Patties", price: 80, category: "Patties" },
{ id:"patties-043", name: "Black Olive Patties", price: 90, category: "Patties" },
{ id:"patties-044", name: "Mushroom Masala Patties", price: 90, category: "Patties" },
{ id:"patties-045", name: "Green Olive Patties", price: 90, category: "Patties" },
{ id:"patties-046", name: "Red Chilli Patties", price: 45, category: "Patties" },
{ id:"patties-047", name: "Spread Patties", price: 45, category: "Patties" },
{ id:"patties-048", name: "Chinese Flavour Patties", price: 45, category: "Patties" },
{ id:"patties-049", name: "Chipotle Patties", price: 45, category: "Patties" },
{ id:"patties-050", name: "Mustard Patties", price: 45, category: "Patties" },
{ id:"patties-051", name: "Sweet Onion Patties", price: 45, category: "Patties" },
{ id:"patties-052", name: "Sweet Chilli Patties", price: 45, category: "Patties" },
{ id:"patties-053", name: "Vinaigrette Patties", price: 45, category: "Patties" },
{ id:"patties-054", name: "Green Chilli Garlic Patties", price: 45, category: "Patties" },
{ id:"patties-055", name: "Jhatka Patties", price: 50, category: "Patties" },
{ id:"patties-056", name: "Ginger Patties", price: 45, category: "Patties" },
{ id:"patties-057", name: "Kachhi Keri Patties", price: 45, category: "Patties" },
{ id:"patties-058", name: "Lemon Patties", price: 45, category: "Patties" },
{ id:"patties-059", name: "Tomato Patties", price: 45, category: "Patties" },
{ id:"patties-060", name: "Plain Gravy Patties", price: 60, category: "Patties" },
{ id:"patties-061", name: "Capsicum Masala Patties", price: 80, category: "Patties" },
{ id:"patties-062", name: "Jalapeno Masala Patties", price: 80, category: "Patties" },
{ id:"patties-063", name: "Paprika Masala Patties", price: 80, category: "Patties" },
{ id:"patties-064", name: "Pasta Patties", price: 100, category: "Patties" },
{ id:"patties-065", name: "Pasta Cheese Burst", price: 120, category: "Patties" },
{ id:"patties-066", name: "Tandoori Patties", price: 45, category: "Patties" },
{ id:"patties-067", name: "Green Chilli Patties", price: 45, category: "Patties" },
{ id:"patties-068", name: "Garlic Patties", price: 45, category: "Patties" },
{ id:"patties-069", name: "Garlic Chilli Patties", price: 45, category: "Patties" },
{ id:"patties-070", name: "Peri Peri Patties", price: 45, category: "Patties" },
{ id:"patties-071", name: "Makhni Patties", price: 45, category: "Patties" },
{ id:"patties-072", name: "Chocolate Patties", price: 45, category: "Patties" },
{ id:"patties-073", name: "Strawberry Patties", price: 45, category: "Patties" },
{ id:"patties-074", name: "Mango Patties", price: 45, category: "Patties" },
{ id:"patties-075", name: "Orange Patties", price: 45, category: "Patties" },
{ id:"patties-076", name: "Blueberry Patties", price: 45, category: "Patties" },
{ id:"patties-077", name: "Blackcurrant Patties", price: 45, category: "Patties" },
{ id:"patties-078", name: "Butterscotch Patties", price: 45, category: "Patties" },
{ id:"patties-079", name: "Lychee Patties", price: 45, category: "Patties" },

// BURGER
{ id:"burger-001", name: "Classic Burger", price: 50, category: "Burger" },
{ id:"burger-002", name: "Veggie Aloo Tikki Burger", price: 50, category: "Burger" },
{ id:"burger-003", name: "Veggie Paneer Tikki Burger", price: 60, category: "Burger" },
{ id:"burger-004", name: "Special Paneer Tikki Burger", price: 80, category: "Burger" },
{ id:"burger-005", name: "Cheese Paneer Burger", price: 90, category: "Burger" },
{ id:"burger-006", name: "Veggie Cheese Tikki Burger", price: 60, category: "Burger" },
{ id:"burger-007", name: "Double Cheese Burger", price: 80, category: "Burger" },
{ id:"burger-008", name: "Cheese Burst Burger", price: 100, category: "Burger" },
{ id:"burger-009", name: "Spicy Burger", price: 60, category: "Burger" },
{ id:"burger-010", name: "Corn Cheese Burger", price: 80, category: "Burger" },
{ id:"burger-011", name: "Double Tikki Burger", price: 60, category: "Burger" },
{ id:"burger-012", name: "Maggi Burger", price: 90, category: "Burger" },
{ id:"burger-013", name: "Maha Veggie Burger", price: 60, category: "Burger" },
{ id:"burger-014", name: "Jalapeno Cheese Burger", price: 90, category: "Burger" },
{ id:"burger-015", name: "Crunchy Burger", price: 100, category: "Burger" },
{ id:"burger-016", name: "Kulhad Pizza Burger (Special)", price: 160, category: "Burger" },// optional if needed
// SANDWICH
{ id:"sandwich-001", name: "Chocolate Sandwich", price: 90, category: "Sandwich" },
{ id:"sandwich-002", name: "Veg Cheese Masala Sandwich", price: 80, category: "Sandwich" },
{ id:"sandwich-003", name: "Plain Veg Sandwich", price: 80, category: "Sandwich" },
{ id:"sandwich-004", name: "Garlic Bread Sandwich", price: 90, category: "Sandwich" },
{ id:"sandwich-005", name: "Veg Sandwich", price: 70, category: "Sandwich" },
{ id:"sandwich-006", name: "Zingy Parcel Sandwich", price: 100, category: "Sandwich" },
{ id:"sandwich-007", name: "Four Tear Sandwich", price: 120, category: "Sandwich" },
{ id:"sandwich-008", name: "Bombay Kachha Sandwich", price: 70, category: "Sandwich" },
{ id:"sandwich-009", name: "Green Chilli Sandwich", price: 80, category: "Sandwich" },
{ id:"sandwich-010", name: "Cheese Chutney Sandwich", price: 80, category: "Sandwich" },
{ id:"sandwich-011", name: "Veg Cheese Sandwich", price: 80, category: "Sandwich" },
{ id:"sandwich-012", name: "Maggi Sandwich", price: 100, category: "Sandwich" },
{ id:"sandwich-013", name: "Schezwan Sandwich", price: 80, category: "Sandwich" },
{ id:"sandwich-014", name: "Pasta Sandwich", price: 100, category: "Sandwich" },
{ id:"sandwich-015", name: "Paneer Masala Sandwich", price: 90, category: "Sandwich" },
{ id:"sandwich-016", name: "Aloo Tikki Sandwich", price: 100, category: "Sandwich" },
{ id:"sandwich-017", name: "Butter Paneer Masala Sandwich", price: 100, category: "Sandwich" },
{ id:"sandwich-018", name: "Sweet Corn Cheese Sandwich", price: 90, category: "Sandwich" },
{ id:"sandwich-019", name: "Pizza Sandwich", price: 80, category: "Sandwich" },
{ id:"sandwich-020", name: "Aloo Masala Sandwich", price: 70, category: "Sandwich" },
{ id:"sandwich-021", name: "Cheese Burst Sandwich", price: 100, category: "Sandwich" },
{ id:"sandwich-022", name: "Double Cheese Sandwich", price: 100, category: "Sandwich" },
{ id:"sandwich-023", name: "Paneer Tikka Sandwich", price: 100, category: "Sandwich" },
{ id:"sandwich-024", name: "Kadhai Paneer Sandwich", price: 100, category: "Sandwich" },
{ id:"sandwich-025", name: "Paneer Makhni Sandwich", price: 100, category: "Sandwich" },
{ id:"sandwich-026", name: "Paneer Tandoori Sandwich", price: 100, category: "Sandwich" },
{ id:"sandwich-027", name: "Garlic Chilli Cheese Sandwich", price: 80, category: "Sandwich" },
// PIZZA
{ id:"pizza-001", name: "Veg Paneer Pizza", price: 99, category: "Pizza" },
{ id:"pizza-002", name: "Plain Cheese Pizza", price: 120, category: "Pizza" },
{ id:"pizza-003", name: "Veg Cheese Pizza", price: 120, category: "Pizza" },
{ id:"pizza-004", name: "Veg Cheese Paneer Pizza", price: 150, category: "Pizza" },
{ id:"pizza-005", name: "Sweetcorn Cheese Pizza", price: 150, category: "Pizza" },
{ id:"pizza-006", name: "Double Cheese Pizza", price: 150, category: "Pizza" },
{ id:"pizza-007", name: "Veg Loaded Pizza", price: 150, category: "Pizza" },
{ id:"pizza-008", name: "Paneer Masala Pizza", price: 150, category: "Pizza" },
{ id:"pizza-009", name: "Maggi Cheese Pizza", price: 150, category: "Pizza" },
{ id:"pizza-010", name: "Noodles Pizza", price: 150, category: "Pizza" },
{ id:"pizza-011", name: "Pasta Pizza", price: 150, category: "Pizza" },
{ id:"pizza-012", name: "Paneer Tikka Pizza", price: 200, category: "Pizza" },
{ id:"pizza-013", name: "Paneer Makhni Pizza", price: 200, category: "Pizza" },
{ id:"pizza-014", name: "Kadhai Paneer Pizza", price: 200, category: "Pizza" },
{ id:"pizza-015", name: "Spicy Veg Cheese Pizza", price: 150, category: "Pizza" },
{ id:"pizza-016", name: "Capsicum Masala Pizza", price: 150, category: "Pizza" },
{ id:"pizza-017", name: "Tomato Masala Pizza", price: 150, category: "Pizza" },
{ id:"pizza-018", name: "Black Olive Pizza", price: 170, category: "Pizza" },
{ id:"pizza-019", name: "Green Olive Pizza", price: 170, category: "Pizza" },
{ id:"pizza-020", name: "Jalapeno Masala Pizza", price: 170, category: "Pizza" },
{ id:"pizza-021", name: "Paprika Masala Pizza", price: 170, category: "Pizza" },
{ id:"pizza-022", name: "Mutter Paneer Pizza", price: 200, category: "Pizza" },
{ id:"pizza-023", name: "Special Pizza", price: 200, category: "Pizza" },
{ id:"pizza-024", name: "Kulhad Pizza", price: 160, category: "Pizza" }, 
// MAGGI
{ id:"maggi-001", name: "Plain Maggi", price: 50, category: "Maggi" },
{ id:"maggi-002", name: "Masala Maggi", price: 50, category: "Maggi" },
{ id:"maggi-003", name: "Veg Maggi", price: 80, category: "Maggi" },
{ id:"maggi-004", name: "Veg Cheese Maggi", price: 120, category: "Maggi" },
{ id:"maggi-005", name: "Cheese Burst Maggi", price: 90, category: "Maggi" },
{ id:"maggi-006", name: "Soupy Maggi", price: 70, category: "Maggi" },
{ id:"maggi-007", name: "Corn Cheese Maggi", price: 90, category: "Maggi" },
{ id:"maggi-008", name: "Peri Peri Maggi", price: 100, category: "Maggi" },
{ id:"maggi-009", name: "Peri Peri Cheese Maggi", price: 120, category: "Maggi" },
{ id:"maggi-010", name: "Double Cheese Maggi", price: 120, category: "Maggi" },
{ id:"maggi-011", name: "Garlic Chilli Maggi", price: 90, category: "Maggi" },
{ id:"maggi-012", name: "Garlic Chilli Cheese Maggi", price: 120, category: "Maggi" },
{ id:"maggi-013", name: "Schezwan Maggi", price: 80, category: "Maggi" },
{ id:"maggi-014", name: "Schezwan Cheese Maggi", price: 100, category: "Maggi" },
{ id:"maggi-015", name: "Butter Maggi", price: 90, category: "Maggi" },
{ id:"maggi-016", name: "Butter Cheese Maggi", price: 120, category: "Maggi" },
{ id:"maggi-017", name: "White Sauce Maggi", price: 100, category: "Maggi" },
{ id:"maggi-018", name: "White Sauce Cheese Maggi", price: 120, category: "Maggi" },
{ id:"maggi-019", name: "Red Sauce Cheese Maggi", price: 120, category: "Maggi" },
{ id:"maggi-020", name: "Tomato Maggi", price: 80, category: "Maggi" },
{ id:"maggi-021", name: "Tomato Cheese Maggi", price: 100, category: "Maggi" },
{ id:"maggi-022", name: "Punjabi Tadka Maggi", price: 90, category: "Maggi" },
{ id:"maggi-023", name: "Double Masala Maggi", price: 60, category: "Maggi" },
{ id:"maggi-024", name: "Paneer Maggi", price: 90, category: "Maggi" },
{ id:"maggi-025", name: "Butter Paneer Masala Maggi", price: 100, category: "Maggi" },
{ id:"maggi-026", name: "Olive Maggi", price: 120, category: "Maggi" },
{ id:"maggi-027", name: "Jalapeno Maggi", price: 120, category: "Maggi" },
{ id:"maggi-028", name: "Paprika Maggi", price: 120, category: "Maggi" },
{ id:"maggi-029", name: "Green Chilli Maggi", price: 80, category: "Maggi" },
{ id:"maggi-030", name: "Mutter Maggi", price: 70, category: "Maggi" },
{ id:"maggi-031", name: "Mutter Paneer Maggi", price: 100, category: "Maggi" },
{ id:"maggi-032", name: "Corn Maggi", price: 70, category: "Maggi" },
{ id:"maggi-033", name: "Chilli Paneer Maggi", price: 90, category: "Maggi" },
{ id:"maggi-034", name: "Indori Maggi", price: 90, category: "Maggi" },
{ id:"maggi-035", name: "Chinese Fry Maggi", price: 100, category: "Maggi" },
{ id:"maggi-036", name: "Paneer Tandoori Cheese Maggi", price: 140, category: "Maggi" },
{ id:"maggi-037", name: "Kadhai Paneer Cheese Maggi", price: 140, category: "Maggi" },
{ id:"maggi-038", name: "Tomato Capsicum Cheese Maggi", price: 140, category: "Maggi" },
// PASTA
{ id:"pasta-001", name: "White Sauce Pasta", price: 120, category: "Pasta" },
{ id:"pasta-002", name: "Red Sauce Pasta", price: 120, category: "Pasta" },
{ id:"pasta-003", name: "Pink Sauce Pasta", price: 140, category: "Pasta" },
{ id:"pasta-004", name: "Tandoori Pasta", price: 120, category: "Pasta" },
{ id:"pasta-005", name: "Schezwan Pasta", price: 120, category: "Pasta" },
{ id:"pasta-006", name: "Sweet Corn Pasta", price: 120, category: "Pasta" },
{ id:"pasta-007", name: "Cheese Pasta", price: 140, category: "Pasta" },
{ id:"pasta-008", name: "Paneer Pasta", price: 140, category: "Pasta" },
{ id:"pasta-009", name: "Butter Paneer Masala Pasta", price: 140, category: "Pasta" },
{ id:"pasta-010", name: "Kadhai Paneer Pasta", price: 150, category: "Pasta" },
{ id:"pasta-011", name: "Makhni Pasta", price: 140, category: "Pasta" },
{ id:"pasta-012", name: "Chinese Pasta", price: 120, category: "Pasta" },
{ id:"pasta-013", name: "Chilli Paneer Pasta", price: 150, category: "Pasta" },
{ id:"pasta-014", name: "Jalapeno Pasta", price: 140, category: "Pasta" },
{ id:"pasta-015", name: "Paprika Pasta", price: 140, category: "Pasta" },
{ id:"pasta-016", name: "Olive Pasta", price: 140, category: "Pasta" },

// FRIES
{ id:"fries-001", name: "French Fries (Small)", price: 80, category: "Fries" },
{ id:"fries-002", name: "French Fries (Medium)", price: 120, category: "Fries" },
{ id:"fries-003", name: "French Fries (Large)", price: 150, category: "Fries" },

{ id:"fries-004", name: "Peri Peri Fries (Small)", price: 90, category: "Fries" },
{ id:"fries-005", name: "Peri Peri Fries (Medium)", price: 130, category: "Fries" },
{ id:"fries-006", name: "Peri Peri Fries (Large)", price: 160, category: "Fries" },

{ id:"fries-007", name: "Cheese Fries", price: 120, category: "Fries" },
{ id:"fries-008", name: "Tandoori Fries", price: 130, category: "Fries" },
{ id:"fries-009", name: "Masala Fries", price: 100, category: "Fries" },
{ id:"fries-010", name: "Schezwan Fries", price: 120, category: "Fries" },
// CHINESE
{ id:"chinese-001", name: "Veg Noodles", price: 80, category: "Chinese" },
{ id:"chinese-002", name: "Veg Cheese Noodles", price: 120, category: "Chinese" },
{ id:"chinese-003", name: "Schezwan Noodles", price: 100, category: "Chinese" },
{ id:"chinese-004", name: "Schezwan Cheese Noodles", price: 130, category: "Chinese" },
{ id:"chinese-005", name: "Tandoori Noodles", price: 100, category: "Chinese" },
{ id:"chinese-006", name: "Garlic Chilli Noodles", price: 100, category: "Chinese" },
{ id:"chinese-007", name: "Garlic Cheese Noodles", price: 130, category: "Chinese" },
{ id:"chinese-008", name: "Red Sauce Noodles", price: 90, category: "Chinese" },
{ id:"chinese-009", name: "White Sauce Noodles", price: 90, category: "Chinese" },

{ id:"chinese-010", name: "Veg Manchurian", price: 130, category: "Chinese" },
{ id:"chinese-011", name: "Cheese Manchurian", price: 150, category: "Chinese" },
{ id:"chinese-012", name: "Schezwan Manchurian", price: 130, category: "Chinese" },
{ id:"chinese-013", name: "Paneer Manchurian", price: 160, category: "Chinese" },
{ id:"chinese-014", name: "Chilli Paneer", price: 170, category: "Chinese" },

// RICE
{ id:"rice-001", name: "Veg Fried Rice", price: 80, category: "Rice" },
{ id:"rice-002", name: "Veg Cheese Fried Rice", price: 120, category: "Rice" },
{ id:"rice-003", name: "Schezwan Fried Rice", price: 100, category: "Rice" },
{ id:"rice-004", name: "Schezwan Cheese Fried Rice", price: 130, category: "Rice" },
{ id:"rice-005", name: "Paneer Fried Rice", price: 150, category: "Rice" },
{ id:"rice-006", name: "Chinese Fry Rice", price: 100, category: "Rice" },
{ id:"rice-007", name: "Tandoori Fried Rice", price: 100, category: "Rice" },
{ id:"rice-008", name: "Garlic Chilli Fried Rice", price: 100, category: "Rice" },

// ROLL
{ id:"roll-001", name: "Veg Roll", price: 50, category: "Roll" },
{ id:"roll-002", name: "Veg Cheese Roll", price: 70, category: "Roll" },
{ id:"roll-003", name: "Paneer Roll", price: 90, category: "Roll" },
{ id:"roll-004", name: "Paneer Cheese Roll", price: 110, category: "Roll" },
{ id:"roll-005", name: "Schezwan Roll", price: 70, category: "Roll" },
{ id:"roll-006", name: "Schezwan Paneer Roll", price: 100, category: "Roll" },
{ id:"roll-007", name: "Tandoori Roll", price: 80, category: "Roll" },
{ id:"roll-008", name: "Tandoori Paneer Roll", price: 110, category: "Roll" },
{ id:"roll-009", name: "Chinese Roll", price: 70, category: "Roll" },
{ id:"roll-010", name: "Chinese Paneer Roll", price: 100, category: "Roll" },

// GARLIC BREAD
{ id:"garlic-001", name: "Garlic Bread", price: 80, category: "Garlic Bread" },
{ id:"garlic-002", name: "Cheese Garlic Bread", price: 100, category: "Garlic Bread" },
{ id:"garlic-003", name: "Peri Peri Garlic Bread", price: 90, category: "Garlic Bread" },
{ id:"garlic-004", name: "Tandoori Garlic Bread", price: 90, category: "Garlic Bread" },
{ id:"garlic-005", name: "Chinese Garlic Bread", price: 90, category: "Garlic Bread" },
{ id:"garlic-006", name: "Sweetcorn Garlic Bread", price: 120, category: "Garlic Bread" },
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
// ----- CUSTOMER LIVE LOCATION (AUTO FILL) ----- //

function captureCustomerLocation() {
  if (!navigator.geolocation) {
    console.log("Geolocation not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const url = `https://www.google.com/maps?q=${lat},${lng}`;
      document.getElementById("customerLocation").value = url;
      console.log("Location captured:", url);
    },
    (err) => {
      console.log("Location error:", err);
    }
  );
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
  const liveLoc = document.getElementById("customerLocation").value;
if (liveLoc) {
  text += `%0A*Customer Live Location:*%0A${encodeURIComponent(liveLoc)}%0A`;
}

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
  captureCustomerLocation(); // <-- NEW LINE


  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderMenuList();
  });

  const btnWhatsApp = document.getElementById("btnWhatsApp");
  btnWhatsApp.addEventListener("click", handleWhatsAppOrder);
}

document.addEventListener("DOMContentLoaded", init);
