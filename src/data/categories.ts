export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  bgColor: string;
}

export const categories: Category[] = [
  {
    id: "plushies",
    name: "Plushies",
    icon: "🧸",
    description: "Soft, squishy amigurumi friends made with premium yarn",
    color: "#c984a4",
    bgColor: "#fce7f3",
  },
  {
    id: "flowers",
    name: "Flowers",
    icon: "🌸",
    description: "Forever blooming crochet bouquets that never wilt",
    color: "#e8748a",
    bgColor: "#FADADD",
  },
  {
    id: "keychains",
    name: "Keychains",
    icon: "🔑",
    description: "Tiny handmade charms to carry your personality",
    color: "#9b7ec8",
    bgColor: "#E8E3F8",
  },
  {
    id: "bouquets",
    name: "Bouquets",
    icon: "💐",
    description: "Stunning flower arrangements that last a lifetime",
    color: "#7a9e7e",
    bgColor: "#DCE8D5",
  },
  {
    id: "gifts",
    name: "Gifts",
    icon: "🎁",
    description: "Thoughtful handmade presents for every occasion",
    color: "#c9855a",
    bgColor: "#F4E9DC",
  },
  {
    id: "animals",
    name: "Animals",
    icon: "🐰",
    description: "Charming crocheted animals to love and cuddle",
    color: "#6b9fd4",
    bgColor: "#dbeafe",
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: "🎀",
    description: "Wearable crochet fashion — headbands, scrunchies & more",
    color: "#c9855a",
    bgColor: "#fef3e2",
  },
];
