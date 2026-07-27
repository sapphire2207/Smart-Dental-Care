export interface Service {
  id: string;
  slug: string;
  title: string;
  category: "endodontics" | "cosmetic" | "restorative" | "orthodontics" | "general" | "surgery";
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  isPopular?: boolean;
  overview: string;
  symptoms: string[];
  procedure: { title: string; description: string }[];
  benefits: string[];
  aftercare: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: Service[] = [
  {
    id: "rct",
    slug: "root-canal-treatment",
    title: "Root Canal Treatment (RCT)",
    category: "endodontics",
    shortDescription: "Save infected or severely decayed teeth with painless, single-sitting or multi-visit root canal therapy.",
    fullDescription: "Root Canal Treatment (RCT) is a specialized procedure executed by Dr. Amulya Prrasad (MDS Endodontist with 17+ years of experience and over 10,000+ teeth saved). RCT eliminates infection from the tooth pulp, cleans the internal canal structure, and seals it to preserve your natural tooth.",
    icon: "activity",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
    overview: "Root canal treatment is needed when the blood supply or nerve supply of the tooth (known as the pulp) becomes infected through decay or injury. With modern local anesthesia and endodontic technology, root canals are virtually painless.",
    symptoms: [
      "Severe toothache while chewing or applying pressure",
      "Prolonged sensitivity/pain to hot or cold temperatures",
      "Discoloration or darkening of the tooth",
      "Swelling and tenderness in nearby gums",
      "A persistent bump or pimple on the gums"
    ],
    procedure: [
      { title: "Diagnosis & Digital X-Ray", description: "Comprehensive examination using low-radiation digital X-rays to assess root canal shape and infection extent." },
      { title: "Local Anesthesia & Cleaning", description: "Painless numbing followed by precise removal of damaged pulp tissue and thorough disinfections." },
      { title: "Canal Shaping & Gutta-Percha Sealing", description: "Canals are meticulously shaped, sanitized, and hermetically sealed with biocompatible Gutta-Percha." },
      { title: "Restoration & Crown Placement", description: "A custom dental crown is fitted to restore full structural strength, function, and aesthetic look." }
    ],
    benefits: [
      "Relieves severe toothache and infection permanently",
      "Saves your natural tooth from extraction",
      "Restores normal chewing and biting efficiency",
      "Prevents infection from spreading to adjacent teeth and jawbone"
    ],
    aftercare: [
      "Avoid chewing hard foods on the treated tooth until the final crown is placed",
      "Maintain good oral hygiene with gentle brushing and flossing",
      "Take prescribed mild analgesics or antibiotics if instructed",
      "Schedule regular dental checkups every 6 months"
    ],
    faqs: [
      { question: "Is Root Canal Treatment painful?", answer: "No, under modern local anesthesia, RCT feels similar to getting a standard dental filling. Dr. Amulya Prrasad specializes in painless endodontic techniques." },
      { question: "Can a root canal be completed in a single sitting?", answer: "Yes! Single-sitting RCT is available for suitable cases, allowing you to complete treatment in just one 45-60 minute visit." },
      { question: "Why is a crown necessary after RCT?", answer: "After a root canal, the tooth loses its internal blood supply and becomes brittle over time. A crown protects it from fracturing under chewing pressure." }
    ]
  },
  {
    id: "single-sitting-rct",
    slug: "single-sitting-root-canal",
    title: "Single Sitting Root Canal Treatment",
    category: "endodontics",
    shortDescription: "Complete root canal treatment in just one single visit using advanced endodontic equipment.",
    fullDescription: "Designed for busy professionals and patients needing quick infection resolution. Single Sitting RCT uses rotary endodontic tools, digitalapex locators, and automated disinfection to finish treatment efficiently in 45 to 60 minutes.",
    icon: "clock",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
    overview: "Single Sitting RCT eliminates the hassle of multiple clinical visits without compromising clinical efficacy or patient safety.",
    symptoms: [
      "Sharp pain when biting down",
      "Unbearable throbbing tooth pain at night",
      "Deep dental decay approaching the nerve"
    ],
    procedure: [
      { title: "Digital Apex Measurement", description: "Electronic determination of exact root length." },
      { title: "Rotary Canal Shaping", description: "Faster, smoother preparation of canals." },
      { title: "Laser/Ultrasonic Irrigation", description: "Complete bacterial eradication in minutes." },
      { title: "Single-Step Obturation", description: "Immediate gutta-percha sealing." }
    ],
    benefits: [
      "Completed in a single visit",
      "Reduced dental visits and time off work",
      "Immediate relief from severe pain",
      "High long-term success rate"
    ],
    aftercare: [
      "Mild tenderness for 24-48 hours is normal",
      "Follow home care instructions and take prescribed medication"
    ],
    faqs: [
      { question: "Who is eligible for Single Sitting RCT?", answer: "Patients with non-complex root anatomy, non-suppurative pulpitis, or acute pain without severe bone swelling are ideal candidates." }
    ]
  },
  {
    id: "dental-implants",
    slug: "dental-implants",
    title: "Dental Implant Fixing",
    category: "surgery",
    shortDescription: "Permanent, natural-looking replacement for missing teeth anchored directly into the jawbone.",
    fullDescription: "Titanium dental implants provide the strongest, longest-lasting solution for missing teeth. They look, feel, and function exactly like natural teeth.",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
    overview: "A dental implant is a titanium post surgically placed into the jawbone beneath your gums to hold a replacement tooth or bridge.",
    symptoms: [
      "One or more missing teeth",
      "Difficulty chewing or speaking due to gaps",
      "Uncomfortable or loose dentures"
    ],
    procedure: [
      { title: "Consultation & 3D Imaging", description: "Evaluation of jawbone density and implant placement planning." },
      { title: "Implant Post Placement", description: "Precision surgical insertion of titanium post." },
      { title: "Osseointegration", description: "Bone fuses around the implant over 2-4 months." },
      { title: "Crown Attachment", description: "Custom ceramic crown fixed to complete your smile." }
    ],
    benefits: [
      "Looks and functions like a natural tooth",
      "Prevents bone loss in the jaw",
      "Doesn't rely on or damage adjacent healthy teeth",
      "Can last a lifetime with proper care"
    ],
    aftercare: [
      "Practice meticulous oral hygiene around the implant",
      "Avoid smoking during healing phase"
    ],
    faqs: [
      { question: "How long do dental implants last?", answer: "With good oral hygiene and regular checkups, dental implants can last 25+ years or a lifetime." }
    ]
  },
  {
    id: "invisalign",
    slug: "invisalign",
    title: "Straightening Teeth (Invisalign / Clear Aligners)",
    category: "orthodontics",
    shortDescription: "Clear, removable aligners to straighten your teeth discreetly without metal wires or brackets.",
    fullDescription: "Invisalign offers a modern, virtually invisible approach to tooth alignment. Custom clear trays gradually shift your teeth into ideal position.",
    icon: "sparkles",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
    overview: "Custom-made clear aligners that fit comfortably over your teeth and can be removed for eating, drinking, brushing, and flossing.",
    symptoms: [
      "Crowded or overlapping teeth",
      "Gaps between teeth",
      "Overbite, underbite, or crossbite"
    ],
    procedure: [
      { title: "3D Digital Scan", description: "Precise digital mapping of your teeth." },
      { title: "Custom Aligner Fabrication", description: "Series of tailored transparent trays created." },
      { title: "Progressive Alignment", description: "Wear each tray set for 1-2 weeks." }
    ],
    benefits: [
      "Virtually invisible appearance",
      "Removable for effortless eating and cleaning",
      "No sharp metal brackets or painful wires",
      "Fewer clinic visits required"
    ],
    aftercare: [
      "Wear aligners 20-22 hours daily",
      "Rinse aligners with lukewarm water regularly"
    ],
    faqs: [
      { question: "How long does Invisalign treatment take?", answer: "Average treatment time is 6 to 18 months, depending on complex tooth alignment needs." }
    ]
  },
  {
    id: "cosmetic-dentistry",
    slug: "cosmetic-dentistry",
    title: "Cosmetic / Aesthetic Dentistry",
    category: "cosmetic",
    shortDescription: "Comprehensive smile redesigns combining veneers, whitening, contouring, and aesthetic fillings.",
    fullDescription: "Transform your confidence with personalized smile design treatments tailored to your face aesthetics and natural features.",
    icon: "smile",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
    overview: "Cosmetic dentistry enhances tooth shape, color, symmetry, and overall smile appearance.",
    symptoms: [
      "Stained, dull, or yellowed teeth",
      "Chipped, cracked, or worn tooth edges",
      "Uneven tooth length or irregular spacing"
    ],
    procedure: [
      { title: "Digital Smile Design", description: "Visualization of your ideal prospective smile." },
      { title: "Treatment Customization", description: "Combining whitening, veneers, or bonding." },
      { title: "Precision Execution", description: "Expert placement and hand-finishing." }
    ],
    benefits: [
      "Dramatic boost in self-confidence",
      "Natural-looking aesthetic results",
      "Stain-resistant porcelain materials"
    ],
    aftercare: [
      "Limit dark beverages like coffee, wine, or tea",
      "Use non-abrasive toothpaste"
    ],
    faqs: [
      { question: "How long do cosmetic veneers last?", answer: "Porcelain veneers typically last 10-15 years with routine care." }
    ]
  },
  {
    id: "crowns-bridges",
    slug: "crowns-and-bridges",
    title: "Crowns and Bridges Fixing",
    category: "restorative",
    shortDescription: "Durable ceramic or porcelain tooth-caps and fixed bridges to restore damaged or missing teeth.",
    fullDescription: "Protect damaged teeth and bridge missing gaps with high-grade ceramic or zirconia crowns crafted to match your natural tooth shade.",
    icon: "layers",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
    overview: "Crowns completely cover a damaged tooth, while bridges replace missing teeth by anchoring to neighbor teeth.",
    symptoms: [
      "Broken, fractured, or deeply filled teeth",
      "Tooth after Root Canal Treatment",
      "Gap between teeth needing fixed replacement"
    ],
    procedure: [
      { title: "Tooth Preparation", description: "Gentle reshaping of the receiving tooth." },
      { title: "Digital Impression", description: "Precision mold or 3D scan sent to dental lab." },
      { title: "Crown Fixing", description: "Permanent bonding of high-strength crown." }
    ],
    benefits: [
      "Restores structural strength and chewing ability",
      "Matches natural tooth color flawlessly",
      "Long-lasting protection for weak teeth"
    ],
    aftercare: [
      "Floss regularly around bridges with threaders",
      "Avoid biting extremely hard objects like ice"
    ],
    faqs: [
      { question: "What is the difference between Ceramic and Metal-Ceramic crowns?", answer: "All-ceramic or Zirconia crowns have superior translucency and aesthetics without showing any grey metal margin at the gumline." }
    ]
  },
  {
    id: "ceramic-crowns",
    slug: "ceramic-crowns-bridges",
    title: "Ceramic Crowns and Bridges Fixing",
    category: "restorative",
    shortDescription: "Premium metal-free ceramic & zirconia crowns delivering unmatched natural translucency and strength.",
    fullDescription: "State-of-the-art metal-free ceramic solutions ideal for front and back teeth requiring high aesthetic perfection and biocompatibility.",
    icon: "gem",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    overview: "All-ceramic crowns incorporate CAD/CAM technology for exact margin fit and life-like shade gradient.",
    symptoms: ["Front tooth damage", "Metal allergy sensitivities", "Discolored old metal crowns"],
    procedure: [
      { title: "Aesthetic Shade Matching", description: "Matching natural translucency spectrum." },
      { title: "CAD/CAM Milling", description: "Computer-aided precision fabrication." },
      { title: "Adhesive Cementation", description: "High-strength resin bonding." }
    ],
    benefits: ["Metal-free and bio-compatible", "Zero dark lines near gums", "Extremely durable zirconia core"],
    aftercare: ["Standard daily brushing and interdental cleaning"],
    faqs: [{ question: "Are ceramic crowns strong enough for molars?", answer: "Yes! High-translucent Zirconia crowns possess extreme flexural strength suitable for back chewing teeth." }]
  },
  {
    id: "cosmetic-filling",
    slug: "cosmetic-filling",
    title: "Cosmetic Filling",
    category: "cosmetic",
    shortDescription: "Tooth-colored composite resin fillings that blend seamlessly with natural tooth structure.",
    fullDescription: "Replace silver amalgam fillings or restore new cavities invisibly with composite resin materials matched to your exact tooth shade.",
    icon: "pen-tool",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    overview: "Composite fillings bond directly to the tooth structure, restoring shape, integrity, and aesthetics.",
    symptoms: ["Small to medium tooth decay cavities", "Chipped tooth enamel", "Worn down tooth surfaces"],
    procedure: [
      { title: "Decay Removal", description: "Clearing bacteria from cavity." },
      { title: "Composite Layering", description: "Applying shade-matched resin in fine layers." },
      { title: "Curing & Polishing", description: "Hardening with UV light and smoothing." }
    ],
    benefits: ["Tooth-colored natural look", "Preserves more natural tooth structure", "Bonds firmly to enamel"],
    aftercare: ["Good daily brushing", "Avoid immediate heavy stain liquids"],
    faqs: [{ question: "How long do composite fillings last?", answer: "Typically 5 to 10 years depending on location and chewing habits." }]
  },
  {
    id: "cosmetic-makeovers",
    slug: "cosmetic-makeovers",
    title: "Cosmetic Makeovers",
    category: "cosmetic",
    shortDescription: "Full mouth digital smile redesign for complete transformation of aesthetic alignment and shade.",
    fullDescription: "A comprehensive smile makeover plans multiple cosmetic procedures to achieve harmony between teeth, gums, lips, and facial profile.",
    icon: "wand2",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
    overview: "Combines digital smile analysis, gum contouring, whitening, and porcelain work for a dramatic transformation.",
    symptoms: ["Multiple aesthetic concerns", "Severe staining and alignment issues", "Worn down aging smile"],
    procedure: [
      { title: "Smile Analysis", description: "Evaluating facial proportions and tooth geometry." },
      { title: "Mock-Up Trial", description: "Previewing your new smile directly in your mouth." },
      { title: "Multi-Disciplinary Execution", description: "Coordinated whitening, veneers, and alignment." }
    ],
    benefits: ["Complete aesthetic smile transformation", "Boosted personal and professional confidence", "Functional bite improvement"],
    aftercare: ["Routine dental maintenance visits", "Use nightguards if grinding teeth"],
    faqs: [{ question: "How long does a full smile makeover take?", answer: "Varies between 1 week to a few months depending on whether aligners or veneers are involved." }]
  },
  {
    id: "cosmetic-veneers",
    slug: "cosmetic-veneers-bonding",
    title: "Cosmetic Veneers / Bonding",
    category: "cosmetic",
    shortDescription: "Ultra-thin porcelain shells or direct resin bonding to fix chips, gaps, and persistent discoloration.",
    fullDescription: "Veneers are paper-thin porcelain covers crafted to conceal chips, misalignments, gaps, and severe internal stains.",
    icon: "sparkle",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop",
    overview: "Provides an instant Hollywood smile by enhancing front surface enamel contours.",
    symptoms: ["Chipped or cracked front teeth", "Stubborn stains resistant to bleaching", "Slightly misaligned front teeth"],
    procedure: [
      { title: "Minimal Preparation", description: "Micro-shaving a fraction of enamel." },
      { title: "Custom Crafting", description: "Handcrafted porcelain by expert lab technicians." },
      { title: "Precision Bonding", description: "Permanent light-cure cementation." }
    ],
    benefits: ["Ultra-natural light reflection", "Stain resistant", "Minimal enamel reduction"],
    aftercare: ["Do not use teeth as tools to open packages or bite nails"],
    faqs: [{ question: "Is veneer placement painful?", answer: "No, local anesthetic ensures total comfort during preparation and fitting." }]
  },
  {
    id: "gap-closing",
    slug: "gap-closing",
    title: "Gap Closing",
    category: "cosmetic",
    shortDescription: "Eliminate unwanted spaces between teeth using bonding, veneers, or orthodontic aligners.",
    fullDescription: "Close dental diastemas (gaps) quickly and aesthetics-focused through painless composite bonding or custom veneers.",
    icon: "minimize-2",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop",
    overview: "Gap closure improves smile symmetry and stops food impaction between teeth.",
    symptoms: ["Noticeable gap between front teeth", "Spacing issues affecting smile harmony"],
    procedure: [
      { title: "Assessment", description: "Determining if bonding or aligners are best." },
      { title: "Composite Sculpting", description: "Direct application of resin to close space in 1 visit." }
    ],
    benefits: ["Instant result in single visit with composite", "No invasive drilling required", "Symmetrical smile"],
    aftercare: ["Floss carefully between closed contact points"],
    faqs: [{ question: "Can a gap be closed in one day?", answer: "Yes, direct composite bonding can close front tooth gaps in under an hour." }]
  },
  {
    id: "conventional-braces",
    slug: "conventional-braces",
    title: "Straightening Teeth (Conventional Braces)",
    category: "orthodontics",
    shortDescription: "Reliable metal or ceramic braces to correct complex malocclusions and tooth crowding.",
    fullDescription: "Tried-and-tested orthodontic treatment using high-grade brackets to guide teeth into healthy alignment.",
    icon: "grid",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop",
    overview: "Conventional braces offer precise control over complex tooth root movements.",
    symptoms: ["Severe tooth crowding", "Complex bite misalignment", "Rotated teeth"],
    procedure: [
      { title: "Bracket Bonding", description: "Attaching precision brackets to teeth." },
      { title: "Archwire Placement", description: "Setting memory-wire forces." },
      { title: "Monthly Adjustments", description: "Regular progress tuning." }
    ],
    benefits: ["Handles the most severe orthodontic cases", "Cost-effective treatment option", "Available in tooth-colored ceramic"],
    aftercare: ["Use special orthodontic toothbrush and interdental brushes"],
    faqs: [{ question: "What age is best for braces?", answer: "Braces work effectively at any age, from teenagers (12+) to adults." }]
  },
  {
    id: "teeth-jewellery",
    slug: "teeth-jewellery",
    title: "Teeth Jewellery",
    category: "cosmetic",
    shortDescription: "Add a sparkle to your smile with painless, non-invasive dental crystals and gems.",
    fullDescription: "Express your unique style with genuine Swarovski dental crystals bonded safely onto tooth enamel without drilling.",
    icon: "star",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop",
    overview: "A painless 15-minute cosmetic procedure attaching gems securely to enamel.",
    symptoms: ["Desire for personalized trendy smile accent"],
    procedure: [
      { title: "Enamel Cleaning", description: "Polishing target tooth surface." },
      { title: "Adhesive Bonding", description: "Using dental sealant to bond crystal." }
    ],
    benefits: ["100% painless", "No drilling or damage to enamel", "Easily removable anytime"],
    aftercare: ["Standard brushing around crystal"],
    faqs: [{ question: "Does tooth jewellery damage the tooth?", answer: "Not at all! It is bonded just like an orthodontic bracket without any drilling." }]
  },
  {
    id: "scaling-polishing",
    slug: "scaling-polishing",
    title: "Scaling / Polishing",
    category: "general",
    shortDescription: "Professional ultrasonic cleaning to remove plaque, tartar, and surface stains.",
    fullDescription: "Thorough ultrasonic scaling removes hardened calculus deposits that regular brushing cannot clean, followed by high-gloss polishing.",
    icon: "droplet",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
    overview: "Recommended every 6 months to maintain healthy gums and prevent periodontitis.",
    symptoms: ["Bleeding gums when brushing", "Yellow plaque or hard tartar build-up", "Bad breath (Halitosis)"],
    procedure: [
      { title: "Ultrasonic Scaling", description: "Vibrational water-jet removal of tartar." },
      { title: "Subgingival Cleaning", description: "Cleaning along gum line pockets." },
      { title: "Fluoride Polishing", description: "Polishing paste for smooth stain-resistant surfaces." }
    ],
    benefits: ["Prevents gum disease and tooth loss", "Eliminates bad breath", "Removes tea, coffee, and tobacco stains"],
    aftercare: ["Brush twice daily and floss once daily"],
    faqs: [{ question: "Does scaling weaken teeth?", answer: "No, scaling only removes harmful calculus deposits. It does not wear away enamel." }]
  },
  {
    id: "orthodontic-treatment",
    slug: "orthodontic-treatment",
    title: "Orthodontic Treatment",
    category: "orthodontics",
    shortDescription: "Comprehensive correction of bite problems, jaw alignment, and crooked teeth.",
    fullDescription: "Specialized orthodontic solutions to harmonize jaw structure, improve chewing, and deliver long-term aesthetic alignment.",
    icon: "align-center",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop",
    overview: "Includes aligners, self-ligating braces, and growth modification appliances.",
    symptoms: ["Bite discomfort", "Difficulty chewing", "Jaw pain due to misaligned bite"],
    procedure: [
      { title: "Orthodontic Assessment", description: "Cephalometric X-ray and model analysis." },
      { title: "Custom Appliance Setup", description: "Tailored aligner or bracket system." }
    ],
    benefits: ["Improves long-term jaw health", "Easier tooth cleaning and hygiene", "Harmonious facial symmetry"],
    aftercare: ["Wear retainers post-treatment to maintain position"],
    faqs: [{ question: "Why are retainers necessary after orthodontics?", answer: "Retainers prevent teeth from gradually shifting back to their original positions." }]
  },
  {
    id: "bps-dentures",
    slug: "bps-dentures-fixing",
    title: "BPS Dentures Fixing",
    category: "restorative",
    shortDescription: "Premium Biofunctional Prosthetic System (BPS) dentures offering superior fit and chewing comfort.",
    fullDescription: "BPS dentures represent the gold standard in removable prosthetics, engineered for optimal muscle compatibility and natural aesthetics.",
    icon: "smile",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop",
    overview: "Precision-molded dentures that recreate natural chewing dynamics and speech clarity.",
    symptoms: ["Complete or partial loss of teeth", "Poorly fitting conventional dentures"],
    procedure: [
      { title: "Functional Impressions", description: "Recording exact muscle movements." },
      { title: "BPS Articulation", description: "Simulating custom jaw movements." },
      { title: "Injection Molding Placement", description: "Delivering dense, perfectly fitting denture." }
    ],
    benefits: ["Unmatched suction and stability", "Natural tooth shade and translucency", "Resistant to breakage and food stains"],
    aftercare: ["Clean daily with denture brush and soak overnight"],
    faqs: [{ question: "How are BPS dentures different from regular dentures?", answer: "BPS dentures use standardized precision equipment to copy actual jaw movement, preventing slip and sore spots." }]
  },
  {
    id: "dental-checkup",
    slug: "dental-checkup-general",
    title: "Dental Checkup (General)",
    category: "general",
    shortDescription: "Comprehensive preventive dental examination, oral cancer screening, and digital hygiene report.",
    fullDescription: "Routine dental evaluations spot hidden cavities, gum issues, and oral health warning signs early before they become painful or expensive.",
    icon: "clipboard",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
    overview: "Includes visual inspection, intraoral camera tour, gum depth measurement, and digital X-ray review.",
    symptoms: ["Routine 6-month checkup", "Mild tooth discomfort", "General preventive care"],
    procedure: [
      { title: "Visual & Digital Exam", description: "Intraoral photo examination." },
      { title: "Gum Health Check", description: "Screening for early gingivitis signs." },
      { title: "Personalized Advice", description: "Customized oral care recommendations." }
    ],
    benefits: ["Early detection of cavities", "Saves money on complex procedures", "Keeps smile fresh and healthy"],
    aftercare: ["Schedule next visit in 6 months"],
    faqs: [{ question: "How often should I get a dental checkup?", answer: "Every 6 months for optimal preventive oral health care." }]
  },
  {
    id: "dental-prophylaxis",
    slug: "dental-prophylaxis",
    title: "Dental Prophylaxis",
    category: "general",
    shortDescription: "Medical oral hygiene cleaning treatment designed to protect gums and halt early gingivitis.",
    fullDescription: "Prophylaxis goes beyond standard polishing to clean deep between teeth and beneath gum margins, eliminating bacterial bio-film.",
    icon: "shield-check",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    overview: "An essential preventive treatment for maintaining sound periodontal foundation.",
    symptoms: ["Plaque accumulation", "Slight gum inflammation", "Bad taste in mouth"],
    procedure: [
      { title: "Biofilm Removal", description: "Targeted sub-gingival scaling." },
      { title: "Fluoride Treatment", description: "Enamel strengthening application." }
    ],
    benefits: ["Stops early gum disease", "Polishes teeth enamel surface", "Freshens breath"],
    aftercare: ["Daily flossing routine"],
    faqs: [{ question: "What is prophylaxis?", answer: "It is a thorough preventive cleaning procedure aimed at keeping teeth and gums completely disease-free." }]
  },
  {
    id: "dental-xray",
    slug: "dental-xray",
    title: "Dental X-Ray (Digital RVG)",
    category: "general",
    shortDescription: "Ultra-low dose digital Radiovisiography (RVG) X-rays for instant diagnostic clarity.",
    fullDescription: "Our clinic utilizes digital RVG technology reducing radiation exposure by up to 80% while providing instant high-resolution imaging.",
    icon: "scan",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    overview: "Detects hidden decay between teeth, bone loss, root infections, and impacted wisdom teeth.",
    symptoms: ["Undiagnosed tooth pain", "Trauma assessment", "Pre-root canal evaluation"],
    procedure: [
      { title: "Sensor Placement", description: "Comfortable intraoral digital sensor insertion." },
      { title: "Instant Capture", description: "Immediate 1-second image display on monitor." }
    ],
    benefits: ["Minimal radiation exposure", "Instant high-definition images", "Environmentally safe (no chemical developer)"],
    aftercare: ["No recovery needed"],
    faqs: [{ question: "Are digital dental X-rays safe?", answer: "Yes! RVG digital X-rays emit negligible radiation—equivalent to a few minutes of natural sunlight exposure." }]
  },
  {
    id: "dental-examinations",
    slug: "dental-examinations",
    title: "Dental Examinations",
    category: "general",
    shortDescription: "Thorough diagnostic evaluations for dental emergency pain, trauma, or second opinions.",
    fullDescription: "Dedicated consultation slot for diagnosing complex oral conditions, TMJ issues, and evaluating second opinion treatment plans.",
    icon: "file-search",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    overview: "Comprehensive examination supported by specialized endodontic diagnostics.",
    symptoms: ["Unexplained facial pain", "Trauma to teeth", "Seeking expert specialist opinion"],
    procedure: [
      { title: "Detailed History", description: "Reviewing symptoms and medical history." },
      { title: "Diagnostic Testing", description: "Pulp vitality testing and X-ray analysis." }
    ],
    benefits: ["Accurate root-cause diagnosis", "Clear transparent treatment plan options", "Expert specialist guidance"],
    aftercare: ["Follow recommended diagnostic plan"],
    faqs: [{ question: "What should I bring to my examination?", answer: "Bring any previous dental records or X-rays if available, along with your medical history list." }]
  },
  {
    id: "dental-restoration",
    slug: "dental-restoration",
    title: "Dental Restoration",
    category: "restorative",
    shortDescription: "Reconstruct chipped, worn, or broken teeth to full function with tooth-colored composite and inlay/onlay.",
    fullDescription: "Restorative procedures rebuild damaged tooth enamel using advanced adhesive materials that bond seamlessly.",
    icon: "tool",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
    overview: "Restores tooth structure lost to trauma, attrition, or severe decay.",
    symptoms: ["Worn down teeth edges", "Large broken fillings", "Fractured tooth corners"],
    procedure: [
      { title: "Preparation & Cleaning", description: "Preparing tooth surface." },
      { title: "Biocompatible Layering", description: "Restoring natural contours." }
    ],
    benefits: ["Restores biting strength", "Prevents further tooth breakdown", "Seamless natural look"],
    aftercare: ["Avoid biting ice or open hard caps"],
    faqs: [{ question: "What is an inlay or onlay?", answer: "Inlays and onlays are custom laboratory-made restorations used when a cavity is too large for a simple filling but too small for a full crown." }]
  },
  {
    id: "gum-disease-treatment",
    slug: "gum-disease-treatment-surgery",
    title: "Gum Disease Treatment / Surgery",
    category: "surgery",
    shortDescription: "Advanced flap surgery, deep curettage, and laser gum therapy to cure periodontitis.",
    fullDescription: "Specialized periodontal therapies to halt gum receding, bone loss, and restore firm foundation for your teeth.",
    icon: "heart-pulse",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    overview: "Cleans deep gum pockets and regenerates supportive structures damaged by gum disease.",
    symptoms: ["Swollen, red, or bleeding gums", "Receding gum lines making teeth look longer", "Loose or shifting teeth"],
    procedure: [
      { title: "Deep Root Planing", description: "Smoothing root surfaces beneath gums." },
      { title: "Flap Surgery (If needed)", description: "Gentle gum access for deep bone cleaning." },
      { title: "Antimicrobial Treatment", description: "Targeted antibiotic placement." }
    ],
    benefits: ["Stops progressive tooth loss", "Eliminates bleeding and gum pain", "Restores healthy gum attachment"],
    aftercare: ["Use medicated mouthwash as prescribed", "Maintain soft diet during initial healing"],
    faqs: [{ question: "Is gum surgery painful?", answer: "No, procedure is performed under local anesthesia. Recovery involves mild tenderness easily managed with medication." }]
  },
  {
    id: "bleeding-gums",
    slug: "bleeding-gums-treatment",
    title: "Bleeding Gums Treatment",
    category: "general",
    shortDescription: "Targeted treatment to resolve gingivitis and stop gum bleeding while brushing or eating.",
    fullDescription: "Bleeding gums are an early warning sign of gingivitis. Prompt clinical care stops bacterial inflammation before permanent tissue damage occurs.",
    icon: "alert-circle",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
    overview: "Painless gingival therapy to eliminate plaque bio-film and soothe inflamed gums.",
    symptoms: ["Blood on toothbrush or dental floss", "Puffy, tender red gums", "Persistent unpleasant breath"],
    procedure: [
      { title: "Gingival Assessment", description: "Measuring pocket depths and inflammation." },
      { title: "Targeted Cleaning", description: "Removing irritating calculus deposits." },
      { title: "Gum Tonic Application", description: "Soothing anti-inflammatory gel application." }
    ],
    benefits: ["Stops gum bleeding immediately", "Reverses gingivitis", "Freshens breath and restores healthy pink gums"],
    aftercare: ["Use soft-bristle toothbrush with proper soft circular brushing motion"],
    faqs: [{ question: "Why do my gums bleed when I brush?", answer: "Bleeding is usually caused by plaque buildup along the gumline causing inflammation (gingivitis). A professional cleaning will fix it!" }]
  },
  {
    id: "general-dentist",
    slug: "dentist",
    title: "General Dentist Consultation",
    category: "general",
    shortDescription: "Complete oral health evaluation, preventive guidance, and custom care planning.",
    fullDescription: "Comprehensive dental consult covering all your family's oral health needs, from preventive care to restorative planning.",
    icon: "user-check",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1200&auto=format&fit=crop",
    overview: "Your primary entry point for all dental questions, checkups, and treatment scheduling.",
    symptoms: ["General dental inquiry", "Routine checkup", "Oral pain evaluation"],
    procedure: [
      { title: "Full Oral Screening", description: "Examine teeth, gums, tongue, and bite." },
      { title: "Treatment Roadmap", description: "Customized prioritized treatment options." }
    ],
    benefits: ["Holistic oral health management", "Preventive care focus", "Expert specialist referral"],
    aftercare: ["Follow custom hygiene protocol"],
    faqs: [{ question: "What should I expect during my first visit?", answer: "Dr. Amulya Prrasad will conduct a gentle examination, listen to your concerns, review X-rays, and discuss a clear treatment plan." }]
  }
];

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "endodontics", label: "Root Canal & Endodontics" },
  { id: "cosmetic", label: "Cosmetic & Aesthetic" },
  { id: "restorative", label: "Crowns, Bridges & Implants" },
  { id: "orthodontics", label: "Braces & Invisalign" },
  { id: "general", label: "General & Preventive Care" },
  { id: "surgery", label: "Gum Care & Surgery" },
] as const;
