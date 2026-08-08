import type { Menu } from "@/lib/types";

/**
 * English menu — prices and items are sourced from the live POS product export, the
 * authoritative source for pricing. Descriptions are written by hand in the brand voice.
 * Some photos are shared across visually-identical items (e.g. bakery discs, V60 by
 * temperature) — that is intentional, not a mistake. See CONTENT.md.
 *
 * Important: every `id` here must match its counterpart in menu.ar.ts so the language
 * switcher can keep the reader on the same item. Prices are in SAR, calories in kcal
 * where available.
 */
export const menuEn: Menu = [
  {
    id: "breakfast",
    name: "WZZAB Breakfast",
    items: [
      {
        id: "arabic-breakfast-platter",
        name: "Arabic Breakfast Platter",
        description: "A generous spread of local breakfast dishes, perfect for sharing.",
        price: { amount: 64, currency: "SAR" },
      },
      {
        id: "areekah",
        name: "WZZAB Areekah",
        description: "Premium areekah with honey and ghee, served the signature WZZAB way.",
        price: { amount: 29, currency: "SAR" },
        calories: 251,
        image: "/menu/areekah.webp",
      },
      {
        id: "local-meat",
        name: "Local Goat Meat",
        description: "Fresh local goat meat, carefully cooked in the authentic local tradition.",
        price: { amount: 39, currency: "SAR" },
        calories: 230,
        image: "/menu/local-meat.webp",
      },
      {
        id: "classic-foul",
        name: "WZZAB Classic Foul",
        description:
          "White fava beans in pure olive oil, prepared the signature WZZAB way, served with fresh disc bread.",
        price: { amount: 21, currency: "SAR" },
        calories: 210,
        badges: ["vegan"],
      },
      {
        id: "mashed-fava-beans",
        name: "Mashed Fava Beans",
        description: "Richly seasoned mashed fava beans, served warm with fresh disc bread.",
        price: { amount: 23, currency: "SAR" },
        badges: ["vegan"],
        image: "/menu/mashed-fava-beans.webp",
      },
    ],
  },
  {
    id: "chef-dishes",
    name: "Chef WZZAB Dishes",
    items: [
      {
        id: "creamy-chicken-cube",
        name: "Creamy Chicken Cube",
        description: "Tender chicken in a rich cream sauce inside a butter-toasted brioche cube.",
        price: { amount: 41, currency: "SAR" },
        image: "/menu/creamy-chicken-cube.webp",
      },
      {
        id: "eggplant-potato-fatteh",
        name: "Eggplant & Potato Fatteh",
        description:
          "Layers of eggplant, potato, lettuce and creamy sauce, crowned with a golden crunch.",
        price: { amount: 37, currency: "SAR" },
        badges: ["vegetarian"],
        image: "/menu/eggplant-potato-fatteh.webp",
      },
      {
        id: "butter-cheese-omelette",
        name: "Butter & Cheese Omelette",
        description:
          "A velvety butter omelette filled with a rich cheese blend, served with a fresh leaf salad.",
        price: { amount: 29, currency: "SAR" },
        badges: ["vegetarian"],
        image: "/menu/butter-cheese-omelette.webp",
      },
      {
        id: "truffle-scrambled-eggs",
        name: "Truffle Scrambled Eggs",
        description:
          "Toasted brioche topped with creamy truffle scrambled eggs, mushroom sauce and parmesan.",
        price: { amount: 37, currency: "SAR" },
        badges: ["vegetarian"],
        image: "/menu/truffle-scrambled-eggs.webp",
      },
      {
        id: "green-shakshuka",
        name: "Green Shakshuka",
        description:
          "Eggs in a herb-rich green sauce topped with mozzarella, served with disc bread.",
        price: { amount: 29, currency: "SAR" },
        badges: ["vegetarian"],
        image: "/menu/green-shakshuka.webp",
      },
      {
        id: "truffle-parmesan-fries",
        name: "Truffle & Parmesan Fries",
        price: { amount: 23, currency: "SAR" },
        image: "/menu/truffle-parmesan-fries.webp",
      },
      {
        id: "halloumi-hamsah",
        name: "Halloumi Hamsah with Pesto",
        description:
          "Halloumi cooked with pesto in the special WZZAB blend, served hot with fresh disc bread.",
        price: { amount: 34, currency: "SAR" },
        badges: ["vegetarian"],
        image: "/menu/halloumi-hamsah.webp",
      },
      {
        id: "beet-avocado-sourdough",
        name: "Beet & Avocado Sourdough",
        description:
          "Naturally leavened sourdough topped with avocado, spiced beetroot and assorted cheeses.",
        price: { amount: 36, currency: "SAR" },
        badges: ["vegetarian"],
        image: "/menu/beet-avocado-sourdough.webp",
      },
      {
        id: "makdous-scramble-croissant",
        name: "Makdous Scramble Croissant",
        description:
          "A buttery croissant filled with creamy scrambled eggs and our special makdous blend.",
        price: { amount: 36, currency: "SAR" },
        badges: ["vegetarian"],
        image: "/menu/makdous-scramble-croissant.webp",
      },
      {
        id: "tuna-danish",
        name: "Flaky Tuna Danish",
        description:
          "A golden, flaky danish filled with a rich, creamy tuna blend, served with crispy potato chips.",
        price: { amount: 34, currency: "SAR" },
        image: "/menu/tuna-danish.webp",
      },
    ],
  },
  {
    id: "bakery",
    name: "Bakery & Discs",
    description: "Baked fresh to order every day from our local, naturally leavened dough.",
    items: [
      {
        id: "cheese-stuffed-disc",
        name: "Cheese Stuffed Bread",
        description:
          "Prepared with local ancestral dough using natural leavening, oven-baked and served with a cheese filling.",
        price: { amount: 19, currency: "SAR" },
        calories: 567,
        badges: ["vegetarian"],
        image: "/menu/disc-bread-generic.webp",
      },
      {
        id: "halloumi-pesto-pizza-disc",
        name: "Halloumi & Pesto Pizza Disc",
        description: "A fresh-baked disc, pizza style, topped with halloumi and pesto.",
        price: { amount: 27, currency: "SAR" },
        badges: ["vegetarian"],
        image: "/menu/disc-bread-generic.webp",
      },
      {
        id: "halloumi-pesto-flatbread",
        name: "Halloumi & Pesto Flatbread",
        description: "Fresh flatbread filled with halloumi and pesto.",
        price: { amount: 43, currency: "SAR" },
        badges: ["vegetarian"],
        image: "/menu/halloumi-pesto-pizza-disc.webp",
      },
      {
        id: "sambousa-disc",
        name: "Sambousa Disc",
        description: "Fresh-baked disc bread with a sambousa filling.",
        price: { amount: 23, currency: "SAR" },
        image: "/menu/disc-bread-generic.webp",
      },
      {
        id: "smoked-cheese-disc",
        name: "Smoked Cheese Bread",
        description:
          "Prepared with our ancestors' local dough using natural fermentation, oven-baked and served with smoked cheese and olives.",
        price: { amount: 22, currency: "SAR" },
        calories: 588,
        badges: ["vegetarian"],
        image: "/menu/disc-bread-generic.webp",
      },
      {
        id: "egg-cheese-disc",
        name: "Scrambled Egg & Cheese Bread",
        description:
          "Prepared with our ancestors' local dough using natural fermentation, served with golden eggs, cheese and olives.",
        price: { amount: 23, currency: "SAR" },
        calories: 419,
        badges: ["vegetarian"],
        image: "/menu/disc-bread-generic.webp",
      },
      {
        id: "liver-cheese-disc",
        name: "Liver & Cheese Disc",
        price: { amount: 25, currency: "SAR" },
        calories: 190,
        image: "/menu/disc-bread-generic.webp",
      },
      {
        id: "tuna-olive-disc",
        name: "Tuna & Olive Disc",
        price: { amount: 24, currency: "SAR" },
        calories: 200,
        image: "/menu/disc-bread-generic.webp",
      },
    ],
  },
  {
    id: "snacks",
    name: "Snacks & Extras",
    items: [
      {
        id: "fresh-orange-juice",
        name: "Fresh Orange Juice",
        price: { amount: 10, currency: "SAR" },
        badges: ["vegan"],
      },
      { id: "chips", name: "Chips", price: { amount: 9, currency: "SAR" } },
      { id: "popcorn", name: "Popcorn", price: { amount: 9, currency: "SAR" } },
      { id: "mixed-nuts", name: "Mixed Nuts", price: { amount: 12, currency: "SAR" } },
      { id: "pumpkin-seeds", name: "Pumpkin Seeds", price: { amount: 8, currency: "SAR" } },
      {
        id: "dates-tahini",
        name: "Dates & Tahini",
        price: { amount: 8, currency: "SAR" },
        badges: ["vegetarian"],
      },
      {
        id: "water",
        name: "Water",
        price: { amount: 2, currency: "SAR" },
        badges: ["vegan"],
      },
      {
        id: "sparkling-water-lemon",
        name: "Sparkling Water with Lemon",
        price: { amount: 6, currency: "SAR" },
        badges: ["vegan"],
      },
      {
        id: "glass-still-water",
        name: "Glass Still Water",
        price: { amount: 4, currency: "SAR" },
        badges: ["vegan"],
      },
    ],
  },
  {
    id: "sweets",
    name: "Sweets",
    items: [
      {
        id: "wzzab-baklava",
        name: "WZZAB Baklava",
        price: { amount: 18, currency: "SAR" },
        calories: 1000,
      },
      {
        id: "baklava-box",
        name: "WZZAB Baklava Box",
        price: { amount: 47, currency: "SAR" },
        calories: 1400,
        image: "/menu/baklava-box.webp",
      },
      {
        id: "pistachio-baklava",
        name: "Pistachio Baklava",
        price: { amount: 18, currency: "SAR" },
      },
      {
        id: "pistachio-baklava-box",
        name: "Pistachio Baklava Box",
        price: { amount: 47, currency: "SAR" },
        image: "/menu/pistachio-baklava-box.webp",
      },
      {
        id: "baklava-ice-cream",
        name: "Baklava with Ice Cream",
        price: { amount: 29, currency: "SAR" },
      },
      {
        id: "truffle-pineapple",
        name: "Truffle Pineapple",
        price: { amount: 28, currency: "SAR" },
        calories: 705,
      },
      {
        id: "truffle-mango",
        name: "Truffle Mango",
        price: { amount: 28, currency: "SAR" },
        image: "/menu/truffle-mango.webp",
      },
      {
        id: "coconut-mango",
        name: "Coconut Mango",
        price: { amount: 28, currency: "SAR" },
        calories: 300,
        image: "/menu/coconut-mango.webp",
      },
      {
        id: "pecan-tiramisu",
        name: "Pecan Tiramisu",
        price: { amount: 28, currency: "SAR" },
        image: "/menu/pecan-tiramisu.webp",
      },
      {
        id: "chocolate-cake",
        name: "Chocolate Cake",
        price: { amount: 29, currency: "SAR" },
      },
      {
        id: "san-sebastian-cheesecake",
        name: "San Sebastian Cheesecake",
        price: { amount: 29, currency: "SAR" },
      },
      {
        id: "date-maamoul",
        name: "Date Maamoul",
        price: { amount: 5, currency: "SAR" },
        calories: 130,
      },
      {
        id: "cheese-cell",
        name: "Cheese Cell",
        description: "Prepared fresh daily with a cheese filling.",
        price: { amount: 19, currency: "SAR" },
        calories: 386,
        badges: ["vegetarian"],
      },
    ],
  },
  {
    id: "hot-beverages",
    name: "Tea & Saudi Coffee",
    items: [
      {
        id: "tea-pot",
        name: "Tea Pot",
        description: "Basil, zap, mint, mixed.",
        price: { amount: 30, currency: "SAR" },
        calories: 30,
        image: "/menu/tea-pot.webp",
      },
      {
        id: "leaf-tea-cup",
        name: "Leaf Tea Cup",
        description: "Basil, zap, mint, mixed.",
        price: { amount: 6, currency: "SAR" },
        calories: 3,
      },
      {
        id: "glass-tea-cup",
        name: "Glass Tea Cup",
        description: "Basil, zap, mint, mixed.",
        price: { amount: 9, currency: "SAR" },
        calories: 3,
      },
      {
        id: "glass-cup-refill",
        name: "Glass Cup Refill",
        description: "Basil, zap, mint, mixed.",
        price: { amount: 6, currency: "SAR" },
        calories: 3,
      },
      {
        id: "large-mug-tea-refill",
        name: "Large Mug Tea Refill",
        price: { amount: 21, currency: "SAR" },
        calories: 25,
      },
      {
        id: "medium-mug-tea-refill",
        name: "Medium Mug Tea Refill",
        price: { amount: 8, currency: "SAR" },
        calories: 25,
      },
      {
        id: "saudi-coffee-pot",
        name: "Saudi Coffee Pot",
        description: "Served with dates and tahini.",
        price: { amount: 33, currency: "SAR" },
        calories: 20,
        image: "/menu/saudi-coffee-pot.webp",
      },
      {
        id: "saudi-coffee-cup",
        name: "Saudi Coffee Cup",
        price: { amount: 8, currency: "SAR" },
        calories: 4,
      },
      {
        id: "large-saudi-coffee-refill",
        name: "Large Saudi Coffee Mug Refill",
        price: { amount: 27, currency: "SAR" },
        calories: 4,
      },
      {
        id: "medium-saudi-coffee-refill",
        name: "Medium Saudi Coffee Mug Refill",
        price: { amount: 12, currency: "SAR" },
        calories: 4,
      },
      {
        id: "blue-family-mug",
        name: "Blue Family Mug with Tea Refill",
        description: "Basil, zap, mint, mixed — keeps hot and cold for hours.",
        price: { amount: 69, currency: "SAR" },
        calories: 25,
      },
      {
        id: "black-family-mug",
        name: "Black Family Mug with Tea Refill",
        description: "Basil, zap, mint, mixed — keeps hot and cold for hours.",
        price: { amount: 69, currency: "SAR" },
        calories: 25,
      },
      {
        id: "medium-mug-with-tea",
        name: "Medium Mug with Tea Refill",
        description: "Basil, zap, mint, mixed — keeps hot and cold for hours.",
        price: { amount: 65, currency: "SAR" },
        calories: 30,
      },
      {
        id: "daffi",
        name: "Karak",
        price: { amount: 9, currency: "SAR" },
      },
      {
        id: "premium-saudi-coffee-beans",
        name: "Premium Saudi Coffee Beans",
        description: "Premium Saudi coffee beans, packaged to brew at home.",
        price: { amount: 55, currency: "SAR" },
      },
      {
        id: "shisha-table",
        name: "Shisha Session (1.5 Hours)",
        price: { amount: 20, currency: "SAR" },
      },
    ],
  },
  {
    id: "specialty-coffee",
    name: "Specialty Coffee",
    items: [
      {
        id: "ethiopian-cold-v60",
        name: "Ethiopian Cold V60",
        price: { amount: 18, currency: "SAR" },
        calories: 10,
        image: "/menu/cold-v60.webp",
      },
      {
        id: "ethiopian-hot-v60",
        name: "Ethiopian Hot V60",
        price: { amount: 17, currency: "SAR" },
        calories: 10,
        image: "/menu/hot-v60.webp",
      },
      {
        id: "colombian-cold-v60",
        name: "Colombian Cold V60",
        price: { amount: 18, currency: "SAR" },
        calories: 10,
        image: "/menu/cold-v60.webp",
      },
      {
        id: "colombian-hot-v60",
        name: "Colombian Hot V60",
        price: { amount: 17, currency: "SAR" },
        calories: 10,
        image: "/menu/hot-v60.webp",
      },
      {
        id: "luxury-crop-cold-v60",
        name: "Cool Luxury Crop V60",
        price: { amount: 22, currency: "SAR" },
        calories: 15,
      },
      {
        id: "luxury-crop-hot-v60",
        name: "Hot Premium Crop V60",
        price: { amount: 22, currency: "SAR" },
        calories: 15,
      },
      {
        id: "latte",
        name: "Latte",
        price: { amount: 16, currency: "SAR" },
        calories: 100,
        image: "/menu/latte.webp",
      },
      { id: "ice-latte", name: "Ice Latte", price: { amount: 17, currency: "SAR" }, calories: 88 },
      {
        id: "cappuccino",
        name: "Cappuccino",
        price: { amount: 16, currency: "SAR" },
        calories: 90,
        image: "/menu/cappuccino.webp",
      },
      {
        id: "flat-white",
        name: "Flat White",
        price: { amount: 15, currency: "SAR" },
        calories: 40,
      },
      { id: "cortado", name: "Cortado", price: { amount: 14, currency: "SAR" }, calories: 30 },
      { id: "macchiato", name: "Macchiato", price: { amount: 12, currency: "SAR" }, calories: 14 },
      { id: "espresso", name: "Espresso", price: { amount: 11, currency: "SAR" }, calories: 5 },
      {
        id: "ice-spanish-latte",
        name: "Ice Spanish Latte",
        price: { amount: 19, currency: "SAR" },
        calories: 180,
      },
      {
        id: "spanish-latte",
        name: "Spanish Latte",
        price: { amount: 18, currency: "SAR" },
        calories: 170,
      },
      {
        id: "hot-americano",
        name: "Hot Americano",
        price: { amount: 13, currency: "SAR" },
        calories: 20,
      },
      {
        id: "ice-americano",
        name: "Ice Americano",
        price: { amount: 14, currency: "SAR" },
      },
      {
        id: "hot-chocolate",
        name: "Hot Chocolate",
        price: { amount: 14, currency: "SAR" },
        calories: 30,
        badges: ["vegetarian"],
      },
    ],
  },
  {
    id: "cold-drinks",
    name: "Cold Drinks",
    items: [
      {
        id: "mojito-code-red",
        name: "Mojito (Code Red)",
        price: { amount: 16, currency: "SAR" },
        calories: 190,
      },
      {
        id: "mojito-7up",
        name: "Mojito (7UP)",
        price: { amount: 16, currency: "SAR" },
        calories: 190,
      },
      {
        id: "cold-hibiscus",
        name: "Cold Hibiscus",
        price: { amount: 17, currency: "SAR" },
        calories: 20,
        badges: ["vegan"],
        image: "/menu/cold-hibiscus.webp",
      },
      {
        id: "ice-tea",
        name: "Ice Tea",
        price: { amount: 21, currency: "SAR" },
      },
      {
        id: "alfreedo",
        name: "Alfreedo",
        price: { amount: 16, currency: "SAR" },
        image: "/menu/alfreedo.webp",
      },
    ],
  },
];
