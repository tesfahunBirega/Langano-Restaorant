import images from "./images";

const food = [
  {
    title: "Yebeg T'ibs / Roasted Meat from Lamb",
    price: "€15.50",
    tags: "Ethiopian | Lamb",
    description:
      "Lamb roasted with onions, pepperonis, and chili sauce, served with injera or couscous and salad.",
  },
  {
    title: "Awaze T'ibs / Roasted Lamb",
    price: "€15.90",
    tags: "Ethiopian | Lamb",
    description:
      "Lamb roasted with onions, hot green pepperonis, red pepper sauce (Awaze), and tomatoes, served with injera or couscous and salad.",
  },
  {
    title: "Yebeg Alitscha Wot' / Lamb Curry",
    price: "€12.90",
    tags: "Ethiopian | Lamb",
    description:
      "Lamb cooked with curry, garlic, and onions, served with injera and salad.",
  },
  {
    title: "Special Kitfo",
    price: "€14.50",
    tags: "Ethiopian | Raw Beef",
    description:
      "Finely chopped raw beef, cottage cheese, mixed greens with butter, chili (Mitmit'a), and injera.",
  },
  {
    title: "Langano Kitfo",
    price: "€13.50",
    tags: "Ethiopian | Raw Beef",
    description:
      "Finely chopped raw beef with cottage cheese, herbal butter, chili (Mitmit'a), and injera.",
  },
];

const drinks = [
  {
    title: "Coca Cola",
    price: "€20",
    tags: "Free with a meal | Soda | 30 ml",
  },
  {
    title: "Pepsi",
    price: "€16",
    tags: "Free with a meal | Soda | 30 ml",
  },
  {
    title: "Water",
    price: "€10",
    tags: "Free with a meal | 30 ml",
  },
  {
    title: "Sparkling Water",
    price: "€31",
    tags: "Free with a meal | 30 ml",
  },
  {
    title: "Rio",
    price: "€26",
    tags: "Free with a meal | Soda | 30 ml",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Yebeg T'ibs / Roasted Meat from Lamb",
    subtitle: "Tender lamb roasted to perfection with vibrant spices.",
  },
  {
    imgUrl: images.award01,
    title: "Awaze T'ibs / Roasted Lamb",
    subtitle:
      "Lamb infused with rich flavors and served with traditional sides.",
  },
  {
    imgUrl: images.award05,
    title: "Yebeg Alitscha Wot' / Lamb Curry",
    subtitle: "A hearty lamb curry celebrated for its authentic taste.",
  },
  {
    imgUrl: images.award03,
    title: "Special Kitfo",
    subtitle: "Finely chopped raw beef prepared with passion and precision.",
  },
];

export default { food, drinks, awards };
