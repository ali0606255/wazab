# Editing the WZZAB menu

This guide is for **non-developers**. You can change everything on the menu — categories,
items, prices, calories, badges, photos, and the brand text — by editing a few files in
the `content/` folder. You never need to touch the code.

> **Golden rule:** the menu exists in **two languages**, so most changes are made in
> **two files**: `content/menu.ar.ts` (Arabic) and `content/menu.en.ts` (English). Keep
> them in step.

After any change: save the file, commit, and push to GitHub. Vercel rebuilds and
publishes automatically (usually under a minute). See [DEPLOY.md](./DEPLOY.md).

---

## 1. The shape of one item

Every menu item looks like this:

```ts
{
  id: "areekah",                 // a permanent code — see the rule below
  name: "عريكة وزّاب",            // what customers read
  description: "عريكة فاخرة…",    // optional — a short line under the name
  price: { amount: 29, currency: "SAR" }, // optional
  calories: 251,                 // optional
  badges: ["vegan"],             // optional — see the badge list below
},
```

Only `id` and `name` are required. Leave out any optional line you don't need (delete the
whole line).

### The `id` rule — the most important thing

The `id` is a short English code that links the Arabic and English versions of the **same**
item. The item with `id: "areekah"` in `menu.ar.ts` and the item with `id: "areekah"` in
`menu.en.ts` are the same dish in two languages — that is how the AR ⇄ EN switch keeps a
customer on the same item.

- Every item's `id` **must exist in both files, spelled identically.**
- Use lowercase English letters and hyphens: `honey-cake`, `iced-latte`.
- Once an item is live, **don't change its `id`** (it's used in the page link).

---

## 2. Change a price

Find the item in **both** files (search by its `id`) and edit the `amount`:

```ts
price: { amount: 32, currency: "SAR" },   // was 29
```

The price is the same number in both languages — only the digits are shown differently
(٣٢ in Arabic, 32 in English) automatically. Currency is always `"SAR"`.

**To remove a price** (e.g. "market price"), delete the whole `price:` line in both files.
The item still shows, just without a price.

---

## 3. Change or add calories

```ts
calories: 265,
```

Delete the line to hide calories for that item. (Calories are shown across the whole menu;
to turn them off everywhere, see §8.)

---

## 4. Add a new item

Copy an existing item block, paste it inside the same category's `items: [ … ]` list, and
edit it. Do this in **both** files with the **same `id`**.

`menu.ar.ts`:

```ts
{
  id: "cheese-manakish",
  name: "مناقيش جبن",
  description: "جبن عكاوي وزعتر.",
  price: { amount: 17, currency: "SAR" },
  calories: 340,
  badges: ["vegetarian"],
},
```

`menu.en.ts`:

```ts
{
  id: "cheese-manakish",
  name: "Cheese Manakish",
  description: "Akkawi cheese and zaatar.",
  price: { amount: 17, currency: "SAR" },
  calories: 340,
  badges: ["vegetarian"],
},
```

## 5. Remove an item

Delete its whole `{ … }` block from **both** files. To hide an item **temporarily**
without deleting it, add `available: false` instead — it stays on the menu, dimmed, marked
"غير متوفر حالياً / Currently unavailable":

```ts
{
  id: "honey-cake",
  name: "كيكة عسل",
  available: false,
  …
},
```

---

## 6. Badges (dietary / highlight tags)

Add any of these to an item's `badges: [ … ]` list. They are labelled automatically in
both languages.

| Badge code    | Arabic           | English     |
| ------------- | ---------------- | ----------- |
| `new`         | جديد             | New         |
| `popular`     | الأكثر طلباً     | Popular     |
| `vegetarian`  | نباتي            | Vegetarian  |
| `vegan`       | نباتي صرف        | Vegan       |
| `spicy`       | حار              | Spicy       |
| `gluten-free` | خالٍ من الجلوتين | Gluten free |

Example: `badges: ["new", "vegetarian"]`. Remove the line for no badges. `new` and
`popular` show in the brand green; the rest are quiet neutral tags.

---

## 7. Add a photo to an item

1. Put the image file in `public/menu/` (use `.webp` or `.jpg`, ideally square, ~800×800).
2. Add an `image:` line to the item in **both** files:

```ts
image: "/menu/honey-cake.webp",
```

Cards are designed to look right **with or without** a photo, so you can add images one at
a time. The path always starts with `/menu/`.

---

## 8. Categories

A category is a section like "فطور وزّاب / WZZAB Breakfast". To rename one, edit its
`name` (and optional `description`) in both files — keep the `id` the same. To reorder
categories, move the whole category block up or down; the on-screen order follows the file
order. To add a category, copy a whole category block in both files and give it a new
shared `id`.

---

## 9. Brand text, story, and contact

Open `content/site.ts`. There you can edit, per language:

- `name`, `kicker` (the line under the logo), `tagline`
- `storyTitle` / `storyBody` (the paragraph under the hero)
- `metaTitle` / `metaDescription` (browser tab + link previews)
- `address`, `hours`

and, shared across both languages, the `contact` block (`phone`, `instagram`) and the
site `url`. Lines marked `// TODO: confirm with client` are placeholders to replace.

---

## 10. Turning features on/off

Open `lib/config.ts`. Each line is a simple `true` / `false`:

- `SHOW_PRICES` — show prices on every card.
- `SHOW_CALORIES` — show calorie counts on every card.
- `ENABLE_SEARCH` — the search box and dietary filter above the menu.

---

## Common mistakes to avoid

- **Editing only one language.** Almost every change goes in both `menu.ar.ts` and
  `menu.en.ts`.
- **Mismatched `id`s.** If an item's `id` differs between the two files, the language
  switch will lose that item. Copy the `id` exactly.
- **Deleting a comma or a bracket.** Each item ends with `},`. Keep the commas and the
  square brackets `[ ]` around each `items` list intact.
- **Curly quotes.** Use straight quotes `"` around text, not “smart” quotes.

If a change ever breaks the build, Vercel keeps the previous version live and emails you
the error — nothing goes down.
