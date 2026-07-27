export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "root-canal-myths-vs-facts",
    title: "5 Common Root Canal Myths Debunked by an Endodontist",
    excerpt: "Think root canals are painful? Think again. Dr. Amulya Prrasad explains the modern facts behind root canal therapy and why it actually saves teeth painlessly.",
    content: "Root canal treatment has a reputation that modern dentistry left behind decades ago...",
    category: "Root Canal",
    author: "Dr. Amulya Prrasad",
    date: "July 15, 2026",
    readTime: "4 min read",
    image: "/images/blog/root-canal-myths.jpg"
  },
  {
    id: "post-2",
    slug: "daily-dental-hygiene-guide",
    title: "The Ultimate Guide to Daily Dental Hygiene & Preventing Cavities",
    excerpt: "Discover the correct brushing technique, flossing habits, and diet tips to keep your gums healthy and prevent costly cavity treatments.",
    content: "Maintaining a bright, healthy smile starts at home with daily oral care habits...",
    category: "Oral Care",
    author: "Smart Dental Care Team",
    date: "June 28, 2026",
    readTime: "5 min read",
    image: "/images/blog/dental-hygiene.jpg"
  },
  {
    id: "post-3",
    slug: "dental-implants-vs-bridges",
    title: "Dental Implants vs. Ceramic Bridges: Which is Right for You?",
    excerpt: "Compare longevity, costs, jawbone preservation, and aesthetics to make an informed choice for replacing missing teeth.",
    content: "When choosing how to replace a missing tooth, dental implants and bridges are the top options...",
    category: "Implants",
    author: "Dr. Amulya Prrasad",
    date: "June 10, 2026",
    readTime: "6 min read",
    image: "/images/blog/implants-vs-bridges.jpg"
  },
  {
    id: "post-4",
    slug: "kids-dental-care-tips-parents",
    title: "Pediatric Dental Care: How to Care for Your Child's Teeth",
    excerpt: "Help your children build lifelong healthy dental habits from milk teeth to permanent teeth with expert advice.",
    content: "Early childhood dental care establishes healthy habits that last a lifetime...",
    category: "Pediatric Care",
    author: "Smart Dental Care Team",
    date: "May 20, 2026",
    readTime: "4 min read",
    image: "/images/blog/kids-dental.jpg"
  }
];
