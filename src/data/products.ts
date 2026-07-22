export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  dateAdded: string;
  badge?: string;
  price?: string;
}

export const products: Product[] = [
  {
    id: "tulip-bouquet",
    name: "Tulip Bouquet",
    category: "Flowers",
    description:
      "A gorgeous hand-crocheted bouquet of tulips in soft pastel tones — perfect as a lasting gift that never wilts.",
    image:
      "https://images.unsplash.com/photo-1487530811015-780d5ef8f5b9?w=600&q=80",
    isNew: true,
    dateAdded: "2025-06-20",
    badge: "New",
    price: "₹449",
  },
  {
    id: "sunflower-bouquet",
    name: "Sunflower Bouquet",
    category: "Flowers",
    description:
      "Bright and cheerful sunflowers crocheted with golden yellow yarn — a little bundle of sunshine to brighten anyone's day.",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80",
    isNew: true,
    dateAdded: "2025-06-15",
    badge: "New",
    price: "₹399",
  },
  {
    id: "crochet-teddy-bear",
    name: "Crochet Teddy Bear",
    category: "Plushies",
    description:
      "The softest, squishiest teddy bear made with premium plush yarn — a cuddly companion for all ages.",
    image:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&q=80",
    isNew: false,
    dateAdded: "2025-05-28",
    price: "₹599",
  },
  {
    id: "bunny-plush",
    name: "Bunny Plush",
    category: "Plushies",
    description:
      "An adorable floppy-eared bunny plushie crocheted with the fluffiest yarn — irresistibly huggable!",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    isNew: true,
    dateAdded: "2025-06-25",
    badge: "New",
    price: "₹549",
  },
  {
    id: "daisy-keychain",
    name: "Daisy Keychain",
    category: "Keychains",
    description:
      "A petite crocheted daisy flower keychain — carry a little handmade charm wherever you go.",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&q=80",
    isNew: false,
    dateAdded: "2025-05-10",
    price: "₹149",
  },
  {
    id: "strawberry-plushie",
    name: "Strawberry Plushie",
    category: "Plushies",
    description:
      "The cutest little strawberry plushie with a leafy green top — sweet, squishy, and totally hand-stitched.",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&q=80",
    isNew: true,
    dateAdded: "2025-06-30",
    badge: "New",
    price: "₹299",
  },
  {
    id: "rose-bouquet",
    name: "Rose Bouquet",
    category: "Flowers",
    description:
      "Timeless crocheted roses in romantic blush and red — because love should last forever, just like these blooms.",
    image:
      "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=600&q=80",
    isNew: true,
    dateAdded: "2025-07-05",
    badge: "Bestseller",
    price: "₹499",
  },
  {
    id: "cat-plushie",
    name: "Crochet Cat",
    category: "Plushies",
    description:
      "A tiny, wide-eyed crocheted kitty that fits right in your palm — whiskers, tail and all, made with love.",
    image:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&q=80",
    isNew: false,
    dateAdded: "2025-05-18",
    price: "₹479",
  },
  {
    id: "heart-keychain",
    name: "Heart Keychain",
    category: "Keychains",
    description:
      "A sweet little crocheted heart keychain — the perfect gift for someone you love or a treat for yourself.",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80",
    isNew: true,
    dateAdded: "2025-07-10",
    badge: "New",
    price: "₹129",
  },
  {
    id: "crochet-headband",
    name: "Floral Headband",
    category: "Accessories",
    description:
      "A boho-chic crocheted headband adorned with tiny flowers — perfect for everyday wear or a special occasion.",
    image:
      "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=600&q=80",
    isNew: true,
    dateAdded: "2025-07-15",
    badge: "New",
    price: "₹349",
  },
  {
    id: "gift-hamper",
    name: "Crochet Gift Hamper",
    category: "Gifts",
    description:
      "A curated gift set with a plushie, a mini bouquet, and a keychain — the perfect handmade hamper for any occasion.",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
    isNew: false,
    dateAdded: "2025-06-01",
    badge: "Popular",
    price: "₹899",
  },
  {
    id: "mixed-bouquet",
    name: "Mixed Wildflower Bouquet",
    category: "Flowers",
    description:
      "A whimsical mix of crocheted wildflowers — daisies, poppies, and lavender — bursting with colour and personality.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc45?w=600&q=80",
    isNew: false,
    dateAdded: "2025-05-22",
    price: "₹549",
  },
];

export const latestCreations: Product[] = [...products].sort(
  (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
);
