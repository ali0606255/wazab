import type { Menu } from "@/lib/types";

/**
 * القائمة بالعربية — المحتوى الرسمي من قائمة وزّاب (الأسعار والسعرات كما وردت في المنيو).
 * الصور تُضاف لاحقاً: أضِف حقل image لأي صنف يشير إلى ملف تحت public/menu. راجع CONTENT.md.
 *
 * مهم: يجب أن يتطابق كل `id` هنا مع نظيره في menu.en.ts حتى يعمل تبديل اللغة بشكل صحيح.
 * الأسعار بالريال السعودي، والسعرات بوحدة الكيلوكالوري (سعرة حرارية).
 */
export const menuAr: Menu = [
  {
    id: "breakfast",
    name: "فطور وزّاب",
    items: [
      {
        id: "areekah",
        name: "عريكة وزّاب",
        description: "عريكة فاخرة بالعسل والسمن، تُقدّم بطريقة وزّاب الخاصة والمميّزة.",
        price: { amount: 29, currency: "SAR" },
        calories: 251,
      },
      {
        id: "local-goat-meat",
        name: "لحم تيس بلدي",
        description: "لحم تيس بلدي طازج، مطهو بعناية على الطريقة التقليدية المحلية الأصيلة.",
        price: { amount: 45, currency: "SAR" },
        calories: 230,
      },
      {
        id: "foul",
        name: "فول وزّاب",
        description:
          "فول أبيض بزيت الزيتون النقي، محضّر على طريقة وزّاب الخاصة، ويُقدّم مع القرص الطازج.",
        price: { amount: 18, currency: "SAR" },
        calories: 210,
        badges: ["vegan"],
      },
      {
        id: "shakshuka",
        name: "شكشوكة وزّاب",
        description: "بيض بصلصة الطماطم والخضار على طريقة وزّاب، تُقدّم مع القرص الطازج.",
        price: { amount: 23, currency: "SAR" },
        calories: 265,
        badges: ["vegetarian"],
      },
      {
        id: "qallabah",
        name: "قلابة وزّاب",
        description: "قلابة معدّة من الفول المطهو بزيت الزيتون النقي، وتُقدّم مع قرص وزّاب الساخن.",
        badges: ["vegan"],
      },
    ],
  },
  {
    id: "chef-dishes",
    name: "أطباق شيف وزّاب",
    items: [
      {
        id: "creamy-chicken-cube",
        name: "كيوب الدجاج بالكريمة",
        description: "قطع دجاج طرية مطهوة بالكريمة الغنية داخل مكعب بريوش محمّص بالزبدة.",
      },
      {
        id: "eggplant-potato-fatteh",
        name: "فتة الباذنجان والبطاطس",
        description: "طبقات من الباذنجان والبطاطا والخس والصوص الكريمي، تتوّج بقرمشة ذهبية.",
        badges: ["vegetarian"],
      },
      {
        id: "butter-cheese-omelette",
        name: "أومليت الزبدة والأجبان",
        description:
          "أومليت مخملي بالزبدة، محشو بمزيج غني من الأجبان، ويُقدّم مع سلطة ورقيات طازجة.",
        badges: ["vegetarian"],
      },
      {
        id: "arugula-salad",
        name: "سلطة الجرجير",
        description:
          "جرجير طازج مع شرائح التفاح والخس والرمان والجوز المحمّص وجبن الفيتا والتتبيلة الخاصة.",
        badges: ["vegetarian"],
      },
      {
        id: "truffle-scrambled-eggs",
        name: "سكرامبل البيض بالترافل",
        description:
          "بريوش محمّص يعلوه بيض سكرامبل كريمي بنكهة الترافل مع صوص المشروم والبارميزان.",
        badges: ["vegetarian"],
      },
      {
        id: "green-shakshuka",
        name: "طاوة الشكشوكة الخضراء",
        description:
          "بيض بصلصة خضراء غنية بالأعشاب العطرية، يعلوها جبن الموزاريلا، وتُقدّم مع القرص.",
        badges: ["vegetarian"],
      },
      {
        id: "halloumi-hamsah",
        name: "حمسة حلوم",
        description: "قطع حلوم مطهوة بخلطة وزّاب الخاصة، تُقدّم ساخنة مع قرص وزّاب الطازج.",
        badges: ["vegetarian"],
      },
      {
        id: "beet-avocado-sourdough",
        name: "ساوردو الشمندر والأفوكادو بالأجبان",
        description:
          "خبز ساوردو بالتخمير الطبيعي، يعلوه الأفوكادو والشمندر المتبّل والأجبان المنوّعة.",
        badges: ["vegetarian"],
      },
      {
        id: "makdous-scramble-croissant",
        name: "كرواسون سكرامبل البيض مع خلطة المكدوس",
        description: "كرواسون زبدي فاخر، محشو بسكرامبل البيض الكريمي وخلطتنا الخاصة بالمكدوس.",
        badges: ["vegetarian"],
      },
      {
        id: "tuna-danish",
        name: "دانيش التونة الهش",
        description: "دانيش ذهبي هش، محشو بخليط تونة كريمي فاخر، ويُقدّم مع شيبس البطاطس المقرمش.",
      },
    ],
  },
  {
    id: "bakery",
    name: "المخبوزات والأقراص",
    description: "يُخبز طازجاً عند الطلب يومياً من عجينتنا البلدية بالتخمير الطبيعي.",
    items: [
      {
        id: "cheese-stuffed-disc",
        name: "قرص خبز بحشوة الأجبان",
        description:
          "يُحضّر من عجينة الأجداد المحلية بالتخمير الطبيعي، ويُخبز بالفرن ويُقدّم بحشوة الأجبان.",
        price: { amount: 18, currency: "SAR" },
        calories: 567,
        badges: ["vegetarian"],
      },
      {
        id: "tuna-cheese-disc",
        name: "قرص خبز بالتونة",
        description:
          "يُحضّر من عجينة الأجداد المحلية بالتخمير الطبيعي، ويُخبز بالفرن ويُقدّم بالتونة والزيتون.",
        price: { amount: 24, currency: "SAR" },
        calories: 614,
      },
      {
        id: "smoked-cheese-disc",
        name: "قرص خبز بالأجبان المدخنة",
        description:
          "يُحضّر من عجينة الأجداد المحلية بالتخمير الطبيعي، ويُخبز بالفرن ويُقدّم بالأجبان المدخنة والزيتون.",
        price: { amount: 22, currency: "SAR" },
        calories: 588,
        badges: ["vegetarian"],
      },
      {
        id: "egg-cheese-disc",
        name: "قرص خبز البيض بالأجبان",
        description:
          "يُحضّر من عجينة الأجداد المحلية بالتخمير الطبيعي، ويُقدّم بالبيض المسلوق والأجبان والزيتون.",
        price: { amount: 24, currency: "SAR" },
        calories: 419,
        badges: ["vegetarian"],
      },
      {
        id: "cheese-jam-disc",
        name: "قرص خبز بالأجبان والمربى",
        description:
          "يُحضّر من عجينة الأجداد المحلية بالتخمير الطبيعي، ويُخبز بالفرن ويُقدّم بالأجبان والمربى.",
        price: { amount: 24, currency: "SAR" },
        calories: 645,
        badges: ["vegetarian"],
      },
      {
        id: "cheese-cell",
        name: "خلية جبن",
        description: "تُحضّر يومياً طازجة بحشوة الأجبان.",
        price: { amount: 19, currency: "SAR" },
        calories: 386,
        badges: ["vegetarian"],
      },
      {
        id: "breakfast-disc",
        name: "قرص الأفطار",
        price: { amount: 23, currency: "SAR" },
        calories: 419,
      },
      {
        id: "liver-cheese-disc",
        name: "قرص الكبدة بالجبن",
        price: { amount: 25, currency: "SAR" },
        calories: 190,
      },
      {
        id: "tuna-olive-disc",
        name: "قرص التونة بالزيتون",
        price: { amount: 24, currency: "SAR" },
        calories: 200,
      },
      {
        id: "cheese-berry-disc",
        name: "قرص الأجبان بالتوت",
        price: { amount: 21, currency: "SAR" },
        calories: 645,
        badges: ["vegetarian"],
      },
    ],
  },
  {
    id: "hot-beverages",
    name: "المشروبات الساخنة",
    items: [
      {
        id: "tea-pot",
        name: "براد شاي",
        description: "حبق، وزّاب، نعناع، مخلوط.",
        price: { amount: 30, currency: "SAR" },
        calories: 30,
      },
      {
        id: "leaf-tea-cup",
        name: "كوب شاي ورق",
        description: "حبق، وزّاب، نعناع، مخلوط.",
        price: { amount: 6, currency: "SAR" },
        calories: 3,
      },
      {
        id: "glass-tea-cup",
        name: "كوب شاي زجاج",
        description: "حبق، وزّاب، نعناع، مخلوط.",
        price: { amount: 9, currency: "SAR" },
        calories: 3,
      },
      {
        id: "glass-cup-refill",
        name: "إعادة تعبئة كوب زجاج",
        description: "حبق، وزّاب، نعناع، مخلوط.",
        price: { amount: 6, currency: "SAR" },
        calories: 3,
      },
      {
        id: "family-mug-tea-refill",
        name: "إعادة تعبئة مق عائلي شاي",
        price: { amount: 21, currency: "SAR" },
        calories: 25,
      },
      {
        id: "medium-mug-tea-refill",
        name: "إعادة تعبئة مق وسط شاي",
        price: { amount: 8, currency: "SAR" },
        calories: 25,
      },
      {
        id: "saudi-coffee-pot",
        name: "دلة قهوة سعودية",
        description: "تُقدّم مع التمر والطحينة.",
        price: { amount: 33, currency: "SAR" },
        calories: 20,
      },
      {
        id: "saudi-coffee-cup",
        name: "كوب قهوة سعودية",
        price: { amount: 8, currency: "SAR" },
        calories: 4,
      },
      {
        id: "large-saudi-coffee-refill",
        name: "إعادة تعبئة مق كبير قهوة سعودية",
        price: { amount: 27, currency: "SAR" },
        calories: 4,
      },
      {
        id: "medium-saudi-coffee-refill",
        name: "إعادة تعبئة مق وسط قهوة سعودية",
        price: { amount: 12, currency: "SAR" },
        calories: 4,
      },
      {
        id: "blue-family-mug",
        name: "مق عائلي أزرق مع تعبئة شاي",
        description: "حبق، وزّاب، نعناع، مخلوط — حافظ للحرارة والبرودة ساعات طويلة.",
        price: { amount: 69, currency: "SAR" },
        calories: 25,
      },
      {
        id: "black-family-mug",
        name: "مق عائلي أسود مع تعبئة شاي",
        description: "حبق، وزّاب، نعناع، مخلوط — حافظ للحرارة والبرودة ساعات طويلة.",
        price: { amount: 69, currency: "SAR" },
        calories: 25,
      },
      {
        id: "medium-mug-with-tea",
        name: "مق وسط مع تعبئة شاي",
        description: "حبق، وزّاب، نعناع، مخلوط — حافظ للحرارة والبرودة ساعات طويلة.",
        price: { amount: 65, currency: "SAR" },
        calories: 30,
      },
    ],
  },
  {
    id: "specialty-coffee",
    name: "القهوة المختصة",
    items: [
      {
        id: "ethiopian-cold-v60",
        name: "إثيوبي بارد V60",
        price: { amount: 18, currency: "SAR" },
        calories: 10,
      },
      {
        id: "ethiopian-hot-v60",
        name: "إثيوبي حار V60",
        price: { amount: 17, currency: "SAR" },
        calories: 10,
      },
      {
        id: "colombian-cold-v60",
        name: "كولومبي بارد V60",
        price: { amount: 18, currency: "SAR" },
        calories: 10,
      },
      {
        id: "colombian-hot-v60",
        name: "كولومبي حار V60",
        price: { amount: 17, currency: "SAR" },
        calories: 10,
      },
      {
        id: "luxury-crop-cold-v60",
        name: "محصول فاخر بارد V60",
        price: { amount: 28, currency: "SAR" },
        calories: 15,
      },
      {
        id: "luxury-crop-hot-v60",
        name: "محصول فاخر حار V60",
        price: { amount: 28, currency: "SAR" },
        calories: 15,
      },
      { id: "latte", name: "لاتيه", price: { amount: 16, currency: "SAR" }, calories: 100 },
      { id: "ice-latte", name: "آيس لاتيه", price: { amount: 17, currency: "SAR" }, calories: 88 },
      { id: "cappuccino", name: "كابتشينو", price: { amount: 16, currency: "SAR" }, calories: 90 },
      { id: "flat-white", name: "فلات وايت", price: { amount: 15, currency: "SAR" }, calories: 40 },
      { id: "cortado", name: "كورتادو", price: { amount: 14, currency: "SAR" }, calories: 30 },
      { id: "macchiato", name: "مكياتو", price: { amount: 12, currency: "SAR" }, calories: 14 },
      { id: "espresso", name: "إسبريسو", price: { amount: 11, currency: "SAR" }, calories: 5 },
      {
        id: "ice-spanish-latte",
        name: "آيس سبانش لاتيه",
        price: { amount: 19, currency: "SAR" },
        calories: 180,
      },
      {
        id: "spanish-latte",
        name: "سبانش لاتيه",
        price: { amount: 18, currency: "SAR" },
        calories: 170,
      },
      { id: "americano", name: "أمريكانو", price: { amount: 13, currency: "SAR" }, calories: 20 },
    ],
  },
  {
    id: "other-drinks",
    name: "مشروبات أخرى",
    items: [
      {
        id: "mojito-code-red",
        name: "موهيتو (كود رد)",
        price: { amount: 16, currency: "SAR" },
        calories: 190,
      },
      {
        id: "mojito-7up",
        name: "موهيتو (سفن أب)",
        price: { amount: 16, currency: "SAR" },
        calories: 190,
      },
      {
        id: "hot-chocolate",
        name: "هوت شوكلت",
        price: { amount: 14, currency: "SAR" },
        calories: 30,
      },
      {
        id: "hibiscus",
        name: "كركديه",
        price: { amount: 17, currency: "SAR" },
        calories: 20,
        badges: ["vegan"],
      },
    ],
  },
  {
    id: "sweets",
    name: "الحلا",
    items: [
      {
        id: "baklava-box-small",
        name: "بقلاوة وزّاب بوكس صغير",
        price: { amount: 18, currency: "SAR" },
        calories: 1000,
      },
      {
        id: "baklava-box-large",
        name: "بقلاوة وزّاب بوكس كبير",
        price: { amount: 59, currency: "SAR" },
        calories: 1400,
      },
      {
        id: "pineapple-truffle",
        name: "ترافل أناناس",
        price: { amount: 36, currency: "SAR" },
        calories: 705,
      },
      {
        id: "mango-pudding",
        name: "بودنق مانقو",
        price: { amount: 36, currency: "SAR" },
        calories: 644,
      },
      {
        id: "cheesecake-brownies",
        name: "تشيز براونيز",
        price: { amount: 28, currency: "SAR" },
        calories: 705,
      },
      {
        id: "honey-cake",
        name: "كيكة عسل",
        price: { amount: 28, currency: "SAR" },
        calories: 680,
      },
      {
        id: "date-maamoul",
        name: "معمول تمر",
        price: { amount: 5, currency: "SAR" },
        calories: 130,
      },
      {
        id: "coconut-rose",
        name: "كوكنت ورد",
        price: { amount: 28, currency: "SAR" },
        calories: 250,
      },
      {
        id: "coconut-mango",
        name: "كوكنت مانقو",
        price: { amount: 28, currency: "SAR" },
        calories: 300,
      },
      {
        id: "kinder-roll",
        name: "كندر رول",
        price: { amount: 28, currency: "SAR" },
        calories: 300,
      },
    ],
  },
];
