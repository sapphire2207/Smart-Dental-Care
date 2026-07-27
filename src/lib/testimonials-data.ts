export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  date: string;
  comment: string;
  verified: boolean;
  avatar?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ramya S.",
    location: "LB Nagar, Hyderabad",
    rating: 5,
    treatment: "Single Sitting Root Canal",
    date: "2 months ago",
    comment: "Dr. Amulya Prrasad is extremely professional and explains everything clearly. My root canal was completely painless! I was terrified of dental work, but the clinic atmosphere and doctor's soft approach put me completely at ease.",
    verified: true,
  },
  {
    id: "t2",
    name: "Karthik R.",
    location: "Saroornagar, Hyderabad",
    rating: 5,
    treatment: "Dental Implant Fixing",
    date: "1 month ago",
    comment: "The clinic is very hygienic and the staff is so friendly. Highly recommended for any dental treatment. I got my molar dental implant done here and it feels completely natural. Thank you Smart Dental Care!",
    verified: true,
  },
  {
    id: "t3",
    name: "Anjali M.",
    location: "Kothapet, Hyderabad",
    rating: 5,
    treatment: "Cosmetic Makeovers & Veneers",
    date: "3 months ago",
    comment: "I got my dental veneers done here. The results are amazing and the care was excellent! My confidence has improved so much. Dr. Amulya is truly an aesthetic artist.",
    verified: true,
  },
  {
    id: "t4",
    name: "Venkatesh Rao",
    location: "Dilsukhnagar, Hyderabad",
    rating: 5,
    treatment: "Scaling & Bleeding Gums",
    date: "4 months ago",
    comment: "I suffered from bleeding gums for almost 2 years. After just 2 sessions of deep cleaning and proper guidance from Dr. Amulya, my gums are completely healthy now.",
    verified: true,
  },
  {
    id: "t5",
    name: "Priya Sharma",
    location: "LB Nagar, Hyderabad",
    rating: 5,
    treatment: "Invisalign Aligners",
    date: "5 months ago",
    comment: "Smooth orthodontic experience with clear aligners! Transparent pricing, digital scans, and flexible appointments. Best dental clinic in LB Nagar circle.",
    verified: true,
  },
  {
    id: "t6",
    name: "Suresh Kumar",
    location: "Nagole, Hyderabad",
    rating: 5,
    treatment: "Ceramic Crowns Fixing",
    date: "6 months ago",
    comment: "Very impressive digital equipment and zero waiting time. Got 2 ceramic crowns after root canal. Color match with adjacent teeth is 100% perfect.",
    verified: true,
  }
];
