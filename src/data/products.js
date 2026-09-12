/**
 * USELESS™ Product Catalog
 * 
 * Sarcastic Pricing Structure (Rupees ₹):
 * Lower price is struck out (was cheaper), and higher price is the selling price!
 */

export const PRODUCTS = [
  {
    id: "potato-gps",
    name: "GPS Tracker for Potatoes",
    tagline: "Never lose a spud again. Real-time orbital telemetry for root vegetables.",
    description: "Equipped with dual-band GNSS and satellite uplink, this aerospace-grade titanium sleeve clips securely onto any Yukon Gold, Russet, or Idaho potato. Transmits live latitude, longitude, and soil altitude directly to your smartphone at 60Hz.",
    price: 2999,
    originalPrice: 1999, // Striked lower price
    markupLabel: "+52% Unnecessary Markup",
    category: "Tech & Telemetry",
    badge: "Flagship Innovation",
    uselessnessRating: 5.0,
    uselessnessScore: "99.9% Useless",
    utilityRating: "0.1 / 5.0",
    image: "/images/potato-gps.jpg",
    accentColor: "#f59e0b",
    specs: [
      { label: "Positioning", value: "Sub-millimeter RTK Satellite Tracking" },
      { label: "Battery Life", value: "48 hours (Potato remains stationary)" },
      { label: "Compatibility", value: "Russet, Red Bliss, Sweet Potato, Fingerling" },
      { label: "Water Resistance", value: "IP68 (Safe for potato salad)" }
    ],
    review: {
      author: "Lord Spudington III",
      comment: "My potato was sitting on the kitchen counter. Thanks to this tracker, I confirmed it was indeed still on the kitchen counter.",
      rating: 5
    }
  },
  {
    id: "banana-peeler",
    name: "Autonomous Banana Peeler",
    tagline: "Robotic precision for what your thumbs already do in 3 seconds.",
    description: "Why peel fruit manually when automated hydraulics can do it in 14 minutes? The Mk-IV Peeler utilizes AI vision to map the curve of any Cavendish banana before deploying four diamond-tipped mechanical arms with whisper-quiet 84dB brushless motors.",
    price: 4435,
    originalPrice: 2999, // Striked lower price
    markupLabel: "+50% Automation Surcharge",
    category: "Culinary Futility",
    badge: "Over-Engineered",
    uselessnessRating: 4.9,
    uselessnessScore: "98.7% Ineffective",
    utilityRating: "0.2 / 5.0",
    image: "/images/banana-peeler.jpg",
    accentColor: "#eab308",
    specs: [
      { label: "Cycle Duration", value: "14 minutes & 22 seconds per peel" },
      { label: "Noise Level", value: "84dB (Sounds like a jet engine)" },
      { label: "Cloud Sync", value: "Uploads peeling analytics to AWS" },
      { label: "Success Rate", value: "31% (May crush the banana)" }
    ],
    review: {
      author: "Chadwick V.",
      comment: "It bruised my banana beyond recognition, but the LED status ring looks exquisite in the dark.",
      rating: 5
    }
  },
  {
    id: "water-powder",
    name: "Instant Dehydrated Water Powder",
    tagline: "Concentrated H2O crystals. Just add 500ml of water to make 500ml of water.",
    description: "The peak of hydration engineering. Through proprietary freeze-vacuum sublimation, we have removed 100% of the wet liquid mass from water, leaving behind a sterile crystalline powder. To rehydrate, simply mix two tablespoons with a fresh glass of water to produce a slightly less full glass of water.",
    price: 2499,
    originalPrice: 1499, // Striked lower price
    markupLabel: "+133% Moisture-Free Premium",
    category: "Everyday Luxury",
    badge: "Just Add Water",
    uselessnessRating: 5.0,
    uselessnessScore: "100% Circular",
    utilityRating: "0.0 / 5.0",
    image: "/images/water-powder.jpg",
    accentColor: "#06b6d4",
    specs: [
      { label: "Active Ingredients", value: "100% Lyophilized H2O (0.0% moisture)" },
      { label: "Preparation", value: "Combine with 500ml water to yield 500ml water" },
      { label: "Net Weight", value: "0.00 grams (Ultra lightweight)" },
      { label: "Shelf Life", value: "Indefinite (Unless exposed to water)" }
    ],
    review: {
      author: "Dr. Marina H2O, Thirst Specialist",
      comment: "I ran out of water during a desert trek. I opened this canister, realized I needed water to activate the powder, and stared into the sun. 10/10 innovation.",
      rating: 5
    }
  },
  {
    id: "pedal-wheelchair",
    name: "Pedal-Powered Wheelchair",
    tagline: "Mobility reimagined for people with fully functional legs.",
    description: "A triumph of paradoxical mechanics. Combines the high-cadence ergonomic exercise of a Tour de France racing bicycle with the sedentary form factor of a traditional wheelchair. High-torque steel sprockets ensure an intense quadriceps workout.",
    price: 4999,
    originalPrice: 3499, // Striked lower price
    markupLabel: "+54% Inconvenience Tax",
    category: "Mobility Paradox",
    badge: "Ergonomic Enigma",
    uselessnessRating: 5.0,
    uselessnessScore: "100% Contradictory",
    utilityRating: "0.0 / 5.0",
    image: "/images/pedal-wheelchair.jpg",
    accentColor: "#ef4444",
    specs: [
      { label: "Drivetrain", value: "Shimano 21-speed cassette" },
      { label: "Requirements", value: "Extremely strong leg muscles" },
      { label: "Top Speed", value: "28 mph downhill (Brakes sold separately)" },
      { label: "Target Market", value: "Philosophically confused athletes" }
    ],
    review: {
      author: "Coach Henderson",
      comment: "If you can pedal this, you could simply walk. That is why it is pure genius.",
      rating: 5
    }
  },
  {
    id: "wifi-rock",
    name: "Wi-Fi Enabled Rock",
    tagline: "Natural volcanic basalt stone. Now pinging your router 24/7.",
    description: "Harvested from Icelandic lava fields, each stone is hand-bored and embedded with a quad-core dual-band Wi-Fi chipset. It does not speak, measure temperature, or act as an access point; it simply connects to your home network and consumes bandwidth.",
    price: 1999,
    originalPrice: 999, // Striked lower price
    markupLabel: "+73% IoT Geological Levy",
    category: "Smart Home Absurdity",
    badge: "IoT Essential",
    uselessnessRating: 4.8,
    uselessnessScore: "97.5% Purposeless",
    utilityRating: "0.2 / 5.0",
    image: "/images/wifi-rock.jpg",
    accentColor: "#8b5cf6",
    specs: [
      { label: "Material", value: "100% Genuine Granite / Basalt" },
      { label: "Bandwidth Used", value: "14 GB/month uploading silence" },
      { label: "Firmware Updates", value: "Always fails at 99%" },
      { label: "Weight", value: "3.4 lbs of solid static matter" }
    ],
    review: {
      author: "Elena Rostova",
      comment: "My smart home ecosystem is now complete. The rock has high uptime and contributes nothing.",
      rating: 5
    }
  },
  {
    id: "square-wheel",
    name: "Aerodynamic Square Wheel",
    tagline: "Challenging 5,000 years of circular bias with four sharp corners.",
    description: "Why settle for smooth rolling when you can experience violent geometric deceleration with every ninety-degree turn? Precision forged from aerospace-grade carbon fiber with 90° razor-sharp edges. Guaranteed to flatten any incline.",
    price: 3999,
    originalPrice: 2499, // Striked lower price
    markupLabel: "+59% Friction Tariff",
    category: "Mobility Paradox",
    badge: "Disruptive Geometry",
    uselessnessRating: 5.0,
    uselessnessScore: "100% Anti-Kinetic",
    utilityRating: "0.0 / 5.0",
    image: "/images/square-wheel.jpg",
    accentColor: "#f97316",
    specs: [
      { label: "Angles", value: "Four 90° corners of pure resistance" },
      { label: "Rolling Resistance", value: "Infinite (Does not roll)" },
      { label: "Pavement Damage", value: "Substantial & immediate" },
      { label: "Aesthetics", value: "Visually arresting" }
    ],
    review: {
      author: "Sir Isaac Newton (Fan)",
      comment: "Directly defies the basic laws of continuous angular momentum. 10/10.",
      rating: 5
    }
  },
  {
    id: "left-handed-spoon",
    name: "Ergonomic Left-Handed Spoon",
    tagline: "Meticulously contoured so right-handed diners cannot consume soup.",
    description: "Engineered specifically for sinister hands. Features an inverted 23.5° hydrodynamic bowl offset and mirror-asymmetric handle profiling. Attempts to use this spoon with your right hand will cause immediate aerodynamic soup deflection onto your lap.",
    price: 999,
    originalPrice: 499, // Striked lower price
    markupLabel: "+83% Southpaw Exclusivity",
    category: "Culinary Futility",
    badge: "Exclusive Asymmetry",
    uselessnessRating: 4.7,
    uselessnessScore: "95.2% Inflexible",
    utilityRating: "0.3 / 5.0",
    image: "/images/left-handed-spoon.jpg",
    accentColor: "#ec4899",
    specs: [
      { label: "Handedness", value: "Strictly Southpaw calibrated" },
      { label: "Right Hand Tolerance", value: "0% (Soup will be spilled)" },
      { label: "Material", value: "Surgical-grade 316L Stainless Steel" },
      { label: "Dishwasher Safe", value: "Yes, but only on the left rack" }
    ],
    review: {
      author: "Lefty McClane",
      comment: "My right-handed dinner guests starve in confusion. Worth every cent.",
      rating: 5
    }
  },
  {
    id: "noise-cancelling-bell",
    name: "Noise Cancelling Bell",
    tagline: "A bell that actively cancels its own sound. Ring it all day — nobody will ever know.",
    description: "Forged from premium brass and mounted on a hand-turned walnut base, this exquisite desk bell features twin acoustic horns and a built-in array of 12 counter-phase microphones that instantly generate an inverse waveform to cancel out every decibel of its own ring. The result? Absolute, pristine silence. Every single time.",
    price: 3499,
    originalPrice: 1999, // Striked lower price
    markupLabel: "+78% Silence Surcharge",
    category: "Smart Home Absurdity",
    badge: "Acoustically Futile",
    uselessnessRating: 5.0,
    uselessnessScore: "100% Inaudible",
    utilityRating: "0.0 / 5.0",
    image: "/images/noise-cancelling-bell.jpg",
    accentColor: "#d4a574",
    specs: [
      { label: "Sound Output", value: "0.0 dB (Perfect anti-phase cancellation)" },
      { label: "Bell Material", value: "Premium Brass with Walnut Base" },
      { label: "Cancellation Array", value: "12 counter-phase MEMS microphones" },
      { label: "Use Case", value: "Alerting nobody of nothing" }
    ],
    review: {
      author: "Sir Reginald Hush",
      comment: "I rang it at a hotel front desk for 45 minutes. Staff never came. Flawless noise cancellation technology.",
      rating: 5
    }
  },
  {
    id: "magic-o-meter",
    name: "MAGIC-O-METER 3000™",
    tagline: "Detecting suspicious levels of mysterious energy in your surroundings. Because you never know...",
    description: "The MAGIC-O-METER 3000™ is a highly advanced device for detecting suspicious levels of mysterious energy in your surroundings. Features a plasma-globe antenna, a 128×64 backlit LCD scanning display, and a 6-segment paranormal energy meter. Simply press the glowing purple SCAN button and watch it analyze the ambient sorcery levels in real-time. Readings range from 0% (You're Safe) to 100% (RUN).",
    price: 3499,
    originalPrice: 1999, // Striked lower price
    markupLabel: "+75% Occult Surcharge",
    category: "Paranormal & Occult",
    badge: "Spiritually Certified",
    uselessnessRating: 5.0,
    uselessnessScore: "100% Supernatural",
    utilityRating: "0.0 / 5.0",
    image: "/images/magic-o-meter.jpg",
    accentColor: "#a855f7",
    specs: [
      { label: "Detection Range", value: "0–100% Black Magic Intensity" },
      { label: "Antenna", value: "Plasma Globe (purely decorative)" },
      { label: "Accuracy", value: "Random number generator ± 100%" },
      { label: "Warning System", value: "At 100%: Display reads 'RUN.'" }
    ],
    review: {
      author: "Mystic Karen, Neighbourhood Exorcist",
      comment: "Pointed it at my mother-in-law. It read 97%. We are no longer on speaking terms. 10/10 device.",
      rating: 5
    }
  }
];

export const CATEGORIES = [
  "All Innovations",
  "Tech & Telemetry",
  "Culinary Futility",
  "Mobility Paradox",
  "Everyday Luxury",
  "Smart Home Absurdity",
  "Paranormal & Occult"
];
