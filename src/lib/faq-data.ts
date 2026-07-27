export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "doctor" | "treatments" | "appointments" | "general";
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "doctor",
    question: "Where does Dr. Amulya Prrasad practice?",
    answer: "Dr. Amulya Prrasad practices at Smart Dental Care - LB Nagar, Hyderabad (Plot No 154, 1st Floor, SBH Colony, Saroornagar Road, Landmark: Above Medplus Pharmacy, Near SBH Bank)."
  },
  {
    id: "faq-2",
    category: "doctor",
    question: "Why do patients visit Dr. Amulya Prrasad?",
    answer: "Patients frequently visit Dr. Amulya Prrasad for Root Canal Treatment (Single sitting & conventional), Bleeding Gums Treatment, Gum Disease Surgery, Cosmetic Veneers, Ceramic Crowns, Dental Implants, and Smile Makeovers."
  },
  {
    id: "faq-3",
    category: "doctor",
    question: "What is Dr. Amulya Prrasad's education qualification?",
    answer: "Dr. Amulya Prrasad holds BDS (Kamineni Institute of Dental Sciences, 2009) and MDS - Conservative Dentistry & Endodontics (Mamata Dental College, 2013). He is a registered specialist Endodontist with AP State Dental Council (Reg No: A7388)."
  },
  {
    id: "faq-4",
    category: "doctor",
    question: "What does Dr. Amulya Prrasad specialize in?",
    answer: "Dr. Amulya Prrasad specializes as an Endodontist (Root Canal Specialist) and Cosmetic/Aesthetic Dentist with 17+ years of total experience and over 10,000+ teeth treated."
  },
  {
    id: "faq-5",
    category: "doctor",
    question: "How many years of experience does Dr. Amulya Prrasad have?",
    answer: "Dr. Amulya Prrasad has an overall experience of 17 years (11 years as an Endodontic specialist) and has been managing Smart Dental Care since 2009."
  },
  {
    id: "faq-6",
    category: "appointments",
    question: "What are the clinic timings of Smart Dental Care?",
    answer: "Monday to Saturday: 10:00 AM - 02:00 PM and 05:00 PM - 09:00 PM. Sunday: 10:00 AM - 02:00 PM (Evening closed)."
  },
  {
    id: "faq-7",
    category: "appointments",
    question: "How do I book an appointment at Smart Dental Care?",
    answer: "You can book directly online through our website's Appointment Booking page, call us at +91 83179 54784, or message us on WhatsApp for instant confirmation."
  },
  {
    id: "faq-8",
    category: "treatments",
    question: "Are dental treatments at Smart Dental Care painless?",
    answer: "Yes! We specialize in painless dentistry utilizing modern local anesthetics, rotary endodontic equipment, and soft-touch techniques to ensure complete patient comfort."
  },
  {
    id: "faq-9",
    category: "treatments",
    question: "What hygiene and sterilization protocols do you follow?",
    answer: "Smart Dental Care strictly follows multi-tier autoclave sterilization protocols for all instruments, uses disposable clinical barrier wraps, and maintains a hospital-grade sterile environment."
  },
  {
    id: "faq-10",
    category: "general",
    question: "Do you offer emergency dental care?",
    answer: "Yes, we prioritize emergency cases such as acute severe toothache, broken front teeth, or facial swelling. Contact +91 83179 54784 for immediate emergency assistance."
  }
];
