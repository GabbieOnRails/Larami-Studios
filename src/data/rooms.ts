export interface Room {
  id: string;
  name: string;
  rate: number;
  maxGuests: number;
  description: string;
  image: string;
  gallery: string[];
  video?: string;
  features: string[];
}

export const rooms: Room[] = [
  {
    id: "verre",
    name: "Verre",
    rate: 100000,
    maxGuests: 3,
    description: "A glass-inspired sanctuary with abundant natural light and minimalist aesthetics. Perfect for high-end fashion and product photography.",
    image: "https://i.ibb.co/DPmfDCLv/Project-Mar-17-02-18-PM-1-2.png",
    gallery: [
      "https://i.ibb.co/DPmfDCLv/Project-Mar-17-02-18-PM-1-2.png",
      "https://i.ibb.co/ymz7Wdtv/Project-Mar-17-02-18-PM-1.png",
      "https://i.ibb.co/TGRDjjk/Project-Mar-17-02-18-PM-2-1.png",
      "https://i.ibb.co/bgvHRDSB/Project-Mar-17-02-18-PM-2.png",
      "https://i.ibb.co/qLFqHKJq/Project-Mar-17-02-18-PM-3.png",
      "https://i.ibb.co/d0TQsP34/Project-Mar-17-02-18-PM-4.png"
    ],
    features: ["Natural Light", "Glass Accents", "Minimalist Decor", "High Ceilings"]
  },
  {
    id: "eclat",
    name: "Eclat",
    rate: 90000,
    maxGuests: 3,
    description: "Radiant and bright, Eclat offers a clean, white-canvas feel for creators who want their subjects to pop.",
    image: "https://i.ibb.co/WvCCsMGh/Project-Mar-17-02-18-PM-1.png",
    gallery: [
      "https://i.ibb.co/WvCCsMGh/Project-Mar-17-02-18-PM-1.png",
      "https://i.ibb.co/VYCC6tS7/Project-Mar-17-02-18-PM-2.png",
      "https://i.ibb.co/JWjf5302/Project-Mar-17-02-18-PM-3.png"
    ],
    features: ["White Walls", "Versatile Lighting", "Modern Furniture", "Clean Lines"]
  },
  {
    id: "velour",
    name: "Velour",
    rate: 100000,
    maxGuests: 3,
    description: "Rich textures and deep tones define Velour. An intimate space designed for moody editorials and luxury brand content.",
    image: "https://i.ibb.co/pvZqRcbz/Project-Mar-17-02-18-PM-1.png",
    gallery: [
      "https://i.ibb.co/pvZqRcbz/Project-Mar-17-02-18-PM-1.png",
      "https://i.ibb.co/qYjHdqyW/Project-Mar-17-02-18-PM-2.png",
      "https://i.ibb.co/PbCS1Y0/Project-Mar-17-02-18-PM-3.png",
      "https://i.ibb.co/YSFsd5X/Project-Mar-17-02-18-PM-4.png",
      "https://i.ibb.co/B5f7Pccs/Project-Mar-17-02-18-PM-5.png",
      "https://i.ibb.co/MxgvJSrZ/Project-Mar-17-02-18-PM-6.png",
      "https://i.ibb.co/3YPRL7G2/Project-Mar-17-02-18-PM-7.png",
      "https://i.ibb.co/99pzxdTT/Project-Mar-17-02-18-PM-8.png",
      "https://i.ibb.co/BVGHJJYF/Project-Mar-17-02-18-PM-9.png"
    ],
    features: ["Velvet Textures", "Moody Lighting", "Luxury Accents", "Intimate Setting"]
  },
  {
    id: "zenia",
    name: "Zenia",
    rate: 80000,
    maxGuests: 3,
    description: "A zen-inspired space with organic shapes and earthy materials. Ideal for lifestyle and wellness content.",
    image: "https://i.ibb.co/G31Cq2xX/Project-Mar-17-02-18-PM-1.png",
    gallery: [
      "https://i.ibb.co/G31Cq2xX/Project-Mar-17-02-18-PM-1.png",
      "https://i.ibb.co/4gKRrqJb/Project-Mar-17-02-18-PM-2.png",
      "https://i.ibb.co/8L6MdJC3/Project-Mar-17-02-18-PM-3.png"
    ],
    features: ["Organic Shapes", "Earthy Tones", "Natural Materials", "Calm Atmosphere"]
  },
  {
    id: "kyomi",
    name: "Kyomi",
    rate: 90000,
    maxGuests: 3,
    description: "A fusion of modern and traditional elements, Kyomi offers a unique backdrop for storytelling and cultural content.",
    image: "https://i.ibb.co/zWk1x4Rf/Project-Mar-17-02-18-PM-1.png",
    gallery: [
      "https://i.ibb.co/zWk1x4Rf/Project-Mar-17-02-18-PM-1.png",
      "https://i.ibb.co/dsqZJy19/Project-Mar-17-02-18-PM-2.png",
      "https://i.ibb.co/pvz6yqbf/Project-Mar-17-02-18-PM-3.png",
      "https://i.ibb.co/NMJ8TL9/Project-Mar-17-02-18-PM-4.png",
      "https://i.ibb.co/chB7gLHg/Project-Mar-17-02-18-PM-5.png"
    ],
    features: ["Fusion Decor", "Unique Textures", "Artistic Lighting", "Spacious Layout"]
  },
  {
    id: "nova",
    name: "Nova",
    rate: 85000,
    maxGuests: 3,
    description: "A futuristic yet functional space with bold architectural elements. Perfect for innovative brand campaigns.",
    image: "https://i.ibb.co/fGT8n8WJ/Project-Mar-17-02-18-PM-1.png",
    gallery: [
      "https://i.ibb.co/fGT8n8WJ/Project-Mar-17-02-18-PM-1.png",
      "https://i.ibb.co/BV4j6fMV/Project-Mar-17-02-18-PM-2.png",
      "https://i.ibb.co/zT6cNt66/Project-Mar-17-02-18-PM-3.png",
      "https://i.ibb.co/j9pWd08w/Project-Mar-17-02-18-PM-4.png",
      "https://i.ibb.co/h1Cs85H6/Project-Mar-17-02-18-PM-5.png",
      "https://i.ibb.co/HDWcc2VJ/Project-Mar-17-02-18-PM-6.png"
    ],
    features: ["Bold Architecture", "Futuristic Vibe", "Functional Design", "Dynamic Angles"]
  },
  {
    id: "avaia",
    name: "Avaia",
    rate: 90000,
    maxGuests: 3,
    description: "An airy and ethereal space with soft lighting and fluid shapes. Designed for beauty and fashion shoots.",
    image: "https://i.ibb.co/5xKvq0VS/Project-Mar-17-02-18-PM-1.png",
    gallery: [
      "https://i.ibb.co/5xKvq0VS/Project-Mar-17-02-18-PM-1.png",
      "https://i.ibb.co/4ZV0JyRJ/Project-Mar-17-02-18-PM-2.png",
      "https://i.ibb.co/35vz9WL7/Project-Mar-17-02-18-PM-3.png",
      "https://i.ibb.co/sJFdF8p2/Project-Mar-17-02-18-PM-4.png",
      "https://i.ibb.co/m58HfT25/Project-Mar-17-02-18-PM-5.png",
      "https://i.ibb.co/5hr5T352/Project-Mar-17-02-18-PM-6.png"
    ],
    features: ["Soft Lighting", "Fluid Shapes", "Airy Feel", "Ethereal Aesthetic"]
  },
  {
    id: "zahara",
    name: "Zahara",
    rate: 90000,
    maxGuests: 3,
    description: "Inspired by the desert, Zahara features warm tones and textured walls. A perfect backdrop for lifestyle editorials.",
    image: "https://i.ibb.co/9mds0JFG/Project-Mar-17-02-18-PM-1.png",
    gallery: [
      "https://i.ibb.co/9mds0JFG/Project-Mar-17-02-18-PM-1.png",
      "https://i.ibb.co/9MTQhrJ/Project-Mar-17-02-18-PM-2.png",
      "https://i.ibb.co/HDW2ghGf/Project-Mar-17-02-18-PM-3.png",
      "https://i.ibb.co/ZRTXYR5W/Project-Mar-17-02-18-PM-4.png",
      "https://i.ibb.co/LX9Zrsx9/Project-Mar-17-02-18-PM-5.png",
      "https://i.ibb.co/pBKwk4hh/Project-Mar-17-02-18-PM-6.png",
      "https://i.ibb.co/pBgRPsqf/Project-Mar-17-02-18-PM-7.png",
      "https://i.ibb.co/G4yhRDH2/Project-Mar-17-02-18-PM-8.png"
    ],
    features: ["Warm Tones", "Textured Walls", "Desert Inspired", "Natural Accents"]
  },
  {
    id: "astra",
    name: "Astra",
    rate: 95000,
    maxGuests: 3,
    description: "A celestial-inspired space with deep blues and shimmering accents. Designed for high-impact visual storytelling and creative campaigns.",
    image: "https://i.ibb.co/gbvTNtS7/Project-Mar-17-02-18-PM-1.png",
    gallery: [
      "https://i.ibb.co/gbvTNtS7/Project-Mar-17-02-18-PM-1.png",
      "https://i.ibb.co/0RsPjk3g/Project-Mar-17-02-18-PM-2.png",
      "https://i.ibb.co/Lhpj29N3/Project-Mar-17-02-18-PM-3.png",
      "https://i.ibb.co/nMdmzZ6q/Project-Mar-17-02-18-PM-4.png"
    ],
    features: ["Celestial Decor", "Deep Tones", "Shimmering Accents", "High Impact"]
  }
];
