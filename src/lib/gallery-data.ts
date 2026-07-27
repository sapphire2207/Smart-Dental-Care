export interface GalleryItem {
  id: string;
  title: string;
  category: "clinic" | "equipment" | "doctor" | "before-after";
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Clinic Reception & Consultation Lounge",
    category: "clinic",
    image: "/images/gallery/reception.jpg",
    description: "Clean, comfortable waiting environment designed for patient relaxation."
  },
  {
    id: "g2",
    title: "Modern Operatory Chair & Digital Imaging",
    category: "equipment",
    image: "/images/gallery/operatory.jpg",
    description: "State-of-the-art dental chair equipped with digital intraoral cameras."
  },
  {
    id: "g3",
    title: "Dr. Amulya Prrasad in Clinical Action",
    category: "doctor",
    image: "/images/gallery/doctor-working.jpg",
    description: "Precision endodontic care using advanced magnification."
  },
  {
    id: "g4",
    title: "Smile Transformation - Cosmetic Veneers",
    category: "before-after",
    image: "/images/gallery/ba-veneers.jpg",
    beforeImage: "/images/gallery/ba-veneers-before.jpg",
    afterImage: "/images/gallery/ba-veneers-after.jpg",
    description: "Full front tooth aesthetic restoration using high-translucency porcelain veneers."
  },
  {
    id: "g5",
    title: "Invisalign Teeth Straightening Case",
    category: "before-after",
    image: "/images/gallery/ba-invisalign.jpg",
    beforeImage: "/images/gallery/ba-invisalign-before.jpg",
    afterImage: "/images/gallery/ba-invisalign-after.jpg",
    description: "Correction of front crowding in 9 months with clear aligners."
  },
  {
    id: "g6",
    title: "Teeth Whitening & Stain Removal",
    category: "before-after",
    image: "/images/gallery/ba-whitening.jpg",
    beforeImage: "/images/gallery/ba-whitening-before.jpg",
    afterImage: "/images/gallery/ba-whitening-after.jpg",
    description: "Single-session in-office laser teeth whitening result."
  },
  {
    id: "g7",
    title: "Autoclavable Sterilization Suite",
    category: "equipment",
    image: "/images/gallery/sterilization.jpg",
    description: "Class-B autoclave sterilization ensuring 100% infection control."
  },
  {
    id: "g8",
    title: "Smart Dental Care Entrance & Exterior",
    category: "clinic",
    image: "/images/gallery/entrance.jpg",
    description: "Conveniently located at 1st Floor, SBH Colony, LB Nagar, Hyderabad."
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: "ba1",
    title: "Cosmetic Makeover",
    description: "Severe discoloration and chipped edges restored with porcelain veneers.",
    before: "/images/gallery/ba-1-before.jpg",
    after: "/images/gallery/ba-1-after.jpg",
  },
  {
    id: "ba2",
    title: "Orthodontic Aligners",
    description: "Front crowding straightened using clear Invisalign aligners.",
    before: "/images/gallery/ba-2-before.jpg",
    after: "/images/gallery/ba-2-after.jpg",
  },
  {
    id: "ba3",
    title: "Teeth Whitening",
    description: "Yellow stubborn tea stains removed in a 45-minute whitening session.",
    before: "/images/gallery/ba-3-before.jpg",
    after: "/images/gallery/ba-3-after.jpg",
  }
];
