import type { Menu } from "@/lib/types";

/**
 * English menu — official WZZAB content. Prices and calories are taken from the printed
 * menu; English for the bakery, coffee and beverage sections uses the client's own
 * translations, with the remaining items translated to match. See CONTENT.md.
 *
 * Important: every `id` here must match its counterpart in menu.ar.ts so the language
 * switcher can keep the reader on the same item. Prices are in SAR, calories in kcal.
 */
export const menuEn: Menu = [
  {
    id: "breakfast",
    name: "WZZAB Breakfast",
    items: [
      {
        id: "areekah",
        name: "WZZAB Areekah",
        description: "Premium areekah with honey and ghee, served the signature WZZAB way.",
        price: { amount: 29, currency: "SAR" },
        calories: 251,
      },
      {
        id: "local-goat-meat",
        name: "Local Goat Meat",
        description: "Fresh local goat meat, carefully cooked in the authentic local tradition.",
        price: { amount: 45, currency: "SAR" },
        calories: 230,
      },
      {
        id: "foul",
        name: "WZZAB Foul",
        description:
          "White fava beans in pure olive oil, prepared the signature WZZAB way, served with fresh disc bread.",
        price: { amount: 18, currency: "SAR" },
        calories: 210,
        badges: ["vegan"],
      },
      {
        id: "shakshuka",
        name: "WZZAB Shakshuka",
        description:
          "Eggs in a tomato and vegetable sauce, WZZAB style, served with fresh disc bread.",
        price: { amount: 23, currency: "SAR" },
        calories: 265,
        badges: ["vegetarian"],
      },
      {
        id: "qallabah",
        name: "WZZAB Qallabah",
        description: "Fava beans slow-cooked in pure olive oil, served with hot WZZAB disc bread.",
        badges: ["vegan"],
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
      },
      {
        id: "eggplant-potato-fatteh",
        name: "Eggplant & Potato Fatteh",
        description:
          "Layers of eggplant, potato, lettuce and creamy sauce, crowned with a golden crunch.",
        badges: ["vegetarian"],
      },
      {
        id: "butter-cheese-omelette",
        name: "Butter & Cheese Omelette",
        description:
          "A velvety butter omelette filled with a rich cheese blend, served with a fresh leaf salad.",
        badges: ["vegetarian"],
      },
      {
        id: "arugula-salad",
        name: "Arugula Salad",
        description:
          "Fresh arugula with apple slices, lettuce, pomegranate, toasted walnuts, feta and our special dressing.",
        badges: ["vegetarian"],
      },
      {
        id: "truffle-scrambled-eggs",
        name: "Truffle Scrambled Eggs",
        description:
          "Toasted brioche topped with creamy truffle scrambled eggs, mushroom sauce and parmesan.",
        badges: ["vegetarian"],
      },
      {
        id: "green-shakshuka",
        name: "Green Shakshuka Pan",
        description:
          "Eggs in a herb-rich green sauce topped with mozzarella, served with disc bread.",
        badges: ["vegetarian"],
      },
      {
        id: "halloumi-hamsah",
        name: "Halloumi Hamsah",
        description:
          "Halloumi cooked in the special WZZAB blend, served hot with fresh disc bread.",
        badges: ["vegetarian"],
      },
      {
        id: "beet-avocado-sourdough",
        name: "Beet & Avocado Sourdough",
        description:
          "Naturally leavened sourdough topped with avocado, spiced beetroot and assorted cheeses.",
        badges: ["vegetarian"],
      },
      {
        id: "makdous-scramble-croissant",
        name: "Makdous Scramble Croissant",
        description:
          "A buttery croissant filled with creamy scrambled eggs and our special makdous blend.",
        badges: ["vegetarian"],
      },
      {
        id: "tuna-danish",
        name: "Flaky Tuna Danish",
        description:
          "A golden, flaky danish filled with a rich, creamy tuna blend, served with crispy potato chips.",
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
        price: { amount: 18, currency: "SAR" },
        calories: 567,
        badges: ["vegetarian"],
      },
      {
        id: "tuna-cheese-disc",
        name: "Tuna & Cheese Bread",
        description:
          "Prepared from our ancestors' local dough using natural fermentation, oven-baked and served with tuna and olives.",
        price: { amount: 24, currency: "SAR" },
        calories: 614,
      },
      {
        id: "smoked-cheese-disc",
        name: "Smoked Cheese Bread",
        description:
          "Prepared with our ancestors' local dough using natural fermentation, oven-baked and served with smoked cheese and olives.",
        price: { amount: 22, currency: "SAR" },
        calories: 588,
        badges: ["vegetarian"],
      },
      {
        id: "egg-cheese-disc",
        name: "Scrambled Egg & Cheese Bread",
        description:
          "Prepared with our ancestors' local dough using natural fermentation, served with golden eggs, cheese and olives.",
        price: { amount: 24, currency: "SAR" },
        calories: 419,
        badges: ["vegetarian"],
      },
      {
        id: "cheese-jam-disc",
        name: "Cheese & Jam Bread",
        description:
          "Prepared with local ancestral dough using natural leavening, oven-baked and served with cheese and jam.",
        price: { amount: 24, currency: "SAR" },
        calories: 645,
        badges: ["vegetarian"],
      },
      {
        id: "cheese-cell",
        name: "Cheese Cell",
        description: "Prepared fresh daily with a cheese filling.",
        price: { amount: 19, currency: "SAR" },
        calories: 386,
        badges: ["vegetarian"],
      },
      {
        id: "breakfast-disc",
        name: "Breakfast Disc",
        price: { amount: 23, currency: "SAR" },
        calories: 419,
      },
      {
        id: "liver-cheese-disc",
        name: "Liver & Cheese Disc",
        price: { amount: 25, currency: "SAR" },
        calories: 190,
      },
      {
        id: "tuna-olive-disc",
        name: "Tuna & Olive Disc",
        price: { amount: 24, currency: "SAR" },
        calories: 200,
      },
      {
        id: "cheese-berry-disc",
        name: "Cheese & Berry Disc",
        price: { amount: 21, currency: "SAR" },
        calories: 645,
        badges: ["vegetarian"],
      },
    ],
  },
  {
    id: "hot-beverages",
    name: "Hot Beverages",
    items: [
      {
        id: "tea-pot",
        name: "Tea Pot",
        description: "Basil, zap, mint, mixed.",
        price: { amount: 30, currency: "SAR" },
        calories: 30,
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
        id: "family-mug-tea-refill",
        name: "Refill Family Mug with Tea",
        price: { amount: 21, currency: "SAR" },
        calories: 25,
      },
      {
        id: "medium-mug-tea-refill",
        name: "Refill Medium Mug with Tea",
        price: { amount: 8, currency: "SAR" },
        calories: 25,
      },
      {
        id: "saudi-coffee-pot",
        name: "Saudi Coffee Pot",
        description: "Served with dates and tahini.",
        price: { amount: 33, currency: "SAR" },
        calories: 20,
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
      },
      {
        id: "ethiopian-hot-v60",
        name: "Ethiopian Hot V60",
        price: { amount: 17, currency: "SAR" },
        calories: 10,
      },
      {
        id: "colombian-cold-v60",
        name: "Colombian Cold V60",
        price: { amount: 18, currency: "SAR" },
        calories: 10,
      },
      {
        id: "colombian-hot-v60",
        name: "Colombian Hot V60",
        price: { amount: 17, currency: "SAR" },
        calories: 10,
      },
      {
        id: "luxury-crop-cold-v60",
        name: "Cool Luxury Crop V60",
        price: { amount: 28, currency: "SAR" },
        calories: 15,
      },
      {
        id: "luxury-crop-hot-v60",
        name: "Hot Premium Crop V60",
        price: { amount: 28, currency: "SAR" },
        calories: 15,
      },
      { id: "latte", name: "Latte", price: { amount: 16, currency: "SAR" }, calories: 100 },
      { id: "ice-latte", name: "Ice Latte", price: { amount: 17, currency: "SAR" }, calories: 88 },
      {
        id: "cappuccino",
        name: "Cappuccino",
        price: { amount: 16, currency: "SAR" },
        calories: 90,
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
      { id: "americano", name: "Americano", price: { amount: 13, currency: "SAR" }, calories: 20 },
    ],
  },
  {
    id: "other-drinks",
    name: "Other Drinks",
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
        id: "hot-chocolate",
        name: "Hot Chocolate",
        price: { amount: 14, currency: "SAR" },
        calories: 30,
      },
      {
        id: "hibiscus",
        name: "Hibiscus",
        price: { amount: 17, currency: "SAR" },
        calories: 20,
        badges: ["vegan"],
      },
    ],
  },
  {
    id: "sweets",
    name: "Sweets",
    items: [
      {
        id: "baklava-box-small",
        name: "Small Baklava & Zap Box",
        price: { amount: 18, currency: "SAR" },
        calories: 1000,
      },
      {
        id: "baklava-box-large",
        name: "Large Baklava & Zap Box",
        price: { amount: 59, currency: "SAR" },
        calories: 1400,
      },
      {
        id: "pineapple-truffle",
        name: "Pineapple Truffle",
        price: { amount: 36, currency: "SAR" },
        calories: 705,
      },
      {
        id: "mango-pudding",
        name: "Mango Pudding",
        price: { amount: 36, currency: "SAR" },
        calories: 644,
      },
      {
        id: "cheesecake-brownies",
        name: "Cheesecake Brownies",
        price: { amount: 28, currency: "SAR" },
        calories: 705,
      },
      {
        id: "honey-cake",
        name: "Honey Cake",
        price: { amount: 28, currency: "SAR" },
        calories: 680,
      },
      {
        id: "date-maamoul",
        name: "Date Maamoul",
        price: { amount: 5, currency: "SAR" },
        calories: 130,
      },
      {
        id: "coconut-rose",
        name: "Coconut Rose",
        price: { amount: 28, currency: "SAR" },
        calories: 250,
      },
      {
        id: "coconut-mango",
        name: "Coconut Mango",
        price: { amount: 28, currency: "SAR" },
        calories: 300,
      },
      {
        id: "kinder-roll",
        name: "Kinder Roll",
        price: { amount: 28, currency: "SAR" },
        calories: 300,
      },
    ],
  },
];
