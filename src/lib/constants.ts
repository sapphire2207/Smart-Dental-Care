export const BRAND = {
  name: "Smart Dental Care",
  shortName: "SDC",
  domain: "smartdentalsolutions.in",
  websiteUrl: "https://smartdentalsolutions.in",
  tagline: "Perfect Smiles, Expert Dental Care",
  description:
    "Advanced dental treatments with compassion, precision, and the latest technology. Led by Dr. Amulya Prrasad with 17+ years of experience.",
  foundedYear: 2009,
  logo: "/logo.png",
} as const;

export const DOCTOR = {
  name: "Dr. Amulya Prrasad",
  title: "Endodontist & Cosmetic Dentist",
  specializations: ["Endodontist", "Cosmetic/Aesthetic Dentist"],
  experienceYears: 17,
  experienceSpecialist: 11,
  teethTreated: "10,000+",
  image: "/images/doctor.png",
  bio: `Dr. Amulya Prrasad is a specialist Endodontist who has been helping general dental practitioners solve their endodontic problems for over 9 years. In that time, he has treated something over 10,000 teeth!

He qualified in 2009 from the Kamineni Institute of Dental Sciences, Narketpally, Telangana. Following his undergraduation, he got an opportunity to pursue his masters in Conservative Dentistry and Endodontics at Mamata Dental College, Khammam, Telangana State.`,
  education: [
    {
      degree: "BDS",
      institution: "Kamineni Institute of Dental Sciences",
      year: 2009,
    },
    {
      degree: "MDS - Conservative Dentistry & Endodontics",
      institution: "Mamata Dental College",
      year: 2013,
    },
  ],
  awards: [
    {
      title:
        "At 26th FODI & 19th IES National Conference Held at Chennai on 11th-13th November 2010",
      year: 2010,
    },
  ],
  memberships: ["Indian Endodontic Society"],
  experience: [
    {
      period: "2009 - Present",
      role: "Owner",
      place: "Smart Dental Care",
    },
  ],
  registrations: [
    {
      number: "A7388",
      council: "Andhra Pradesh State Dental Council",
      year: 2013,
    },
  ],
} as const;

export const CONTACT = {
  phone: "+91 99498 09200",
  phoneClean: "919949809200",
  email: "smartdentalcarehyd@gmail.com",
  whatsapp: "919949809200",
  domain: "smartdentalsolutions.in",
  plusCode: "8GXW+2X Hyderabad, Telangana, India",
  features: ["LGBTQ+ Friendly", "Identifies as Women-Owned"],
  address: {
    line1: "Plot No 154, 1st Floor, Saroor Nagar Rd",
    line2: "Opp. Namita Everest, Near LB Nagar Metro Station",
    landmark:
      "Opp. Namita Everest, Near Metro Station, Above Medplus Pharmacy, Near SBI Bank, Rajyalaxmi Nagar, SBH Colony",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500074",
    full: "Plot No 154, 1st Floor, Saroor Nagar Rd, Opp. Namita Everest, Near Metro Station, Above Medplus Pharmacy, Near SBI Bank, Rajyalaxmi Nagar, SBH Colony, L. B. Nagar, Hyderabad, Telangana 500074",
  },
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.55!3d17.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIxJzAwLjAiTiA3OMKwMzMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  googleMapsLink: "https://maps.google.com/?q=Plot+No+154+1st+Floor+Saroor+Nagar+Rd+LB+Nagar+Hyderabad",
} as const;


export const TIMINGS = {
  weekdays: {
    days: "Mon - Sat",
    morning: "10:00 AM - 02:00 PM",
    evening: "05:00 PM - 09:00 PM",
  },
  sunday: {
    days: "Sun",
    morning: "10:00 AM - 02:00 PM",
    evening: null,
  },
} as const;

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/smartdentalcare",
  instagram: "https://instagram.com/smartdentalcare",
  twitter: "https://twitter.com/smartdentalcare",
  youtube: "https://youtube.com/@smartdentalcare",
  google: "https://g.co/kgs/smartdentalcare",
} as const;

export const STATS = [
  { value: "17+", label: "Years Experience", icon: "award" },
  { value: "10,000+", label: "Happy Patients", icon: "users" },
  { value: "24+", label: "Treatments", icon: "stethoscope" },
  { value: "4.9", label: "Patient Rating", suffix: "/5", icon: "star" },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Painless Dentistry",
    description: "Comfortable, gentle & stress-free care",
    icon: "heart",
  },
  {
    title: "Digital X-Rays",
    description: "Advanced imaging with minimal radiation",
    icon: "scan",
  },
  {
    title: "Modern Equipment",
    description: "State-of-the-art dental technology",
    icon: "cpu",
  },
  {
    title: "Sterilization",
    description: "Hospital-grade sterilization protocols",
    icon: "shield-check",
  },
  {
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden costs",
    icon: "badge-indian-rupee",
  },
  {
    title: "Experienced Doctor",
    description: "17+ years of specialized expertise",
    icon: "graduation-cap",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
      { label: "Dental Implants", href: "/services/dental-implants" },
      { label: "Invisalign", href: "/services/invisalign" },
      { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
      { label: "Teeth Whitening", href: "/services/teeth-whitening" },
      { label: "Crowns & Bridges", href: "/services/crowns-and-bridges" },
      { label: "View All Services", href: "/services" },
    ],
  },
  {
    label: "Gallery & Blog",
    href: "/gallery",
    children: [
      { label: "Smile Gallery", href: "/gallery" },
      { label: "Dental Blog & Articles", href: "/blog" },
    ],
  },
  {
    label: "About & Info",
    href: "/about",
    children: [
      { label: "About Clinic", href: "/about" },
      { label: "Meet Dr. Amulya", href: "/doctor" },
      { label: "FAQs & Questions", href: "/faq" },
      { label: "Contact & Directions", href: "/contact" },
    ],
  },
] as const;



export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Meet The Doctor", href: "/doctor" },
    { label: "Smile Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact" },
  ],
  treatments: [
    { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
    { label: "Dental Implants", href: "/services/dental-implants" },
    { label: "Invisalign", href: "/services/invisalign" },
    { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
    { label: "Crowns & Bridges", href: "/services/crowns-and-bridges" },
    { label: "All Services", href: "/services" },
  ],
} as const;

export const PATIENT_JOURNEY = [
  {
    step: 1,
    title: "Book",
    description: "Schedule your appointment online or call us",
    icon: "calendar",
  },
  {
    step: 2,
    title: "Consultation",
    description: "Meet Dr. Amulya for a thorough examination",
    icon: "stethoscope",
  },
  {
    step: 3,
    title: "Diagnosis",
    description: "Get a personalized treatment plan",
    icon: "clipboard-list",
  },
  {
    step: 4,
    title: "Treatment",
    description: "Receive expert care with modern technology",
    icon: "activity",
  },
  {
    step: 5,
    title: "Smile",
    description: "Walk out with a healthier, brighter smile",
    icon: "smile",
  },
] as const;
