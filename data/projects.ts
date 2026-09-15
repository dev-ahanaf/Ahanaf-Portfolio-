export interface Project {
  id: string;
  title: string;
  category: "AI / ML" | "IoT & Robotics" | "Web Development";
  tagline: string;
  problem: string;
  solution: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "circuitmind-ai",
    title: "CircuitMind AI",
    category: "AI / ML",
    tagline: "AI-powered Electronic Design Automation workspace",
    problem:
      "Engineers and hobbyists spend hours researching component compatibility, drafting pinouts, generating BOMs, and writing starter microcontroller code from scratch.",
    solution:
      "Built an intelligent EDA workspace that converts natural-language hardware specifications into instant schematic concepts, precise connection tables, production-ready Arduino/ESP32 starter code, and a bill of materials (BOM).",
    technologies: ["React", "TypeScript", "Next.js 14", "Supabase", "Google Gemini AI", "Tailwind CSS"],
    demoUrl: "https://circuitmind-ai-omega.vercel.app/",
    githubUrl: "https://github.com/dev-ahanaf/circuitmind-ai",
    imageUrl: "/images/circuitmind-ai.png",
    featured: true,
  },
  {
    id: "wishbloom-animated-wishes",
    title: "WishBloom - Animated Birthday Surprise Creator",
    category: "Web Development",
    tagline: "Craft full-screen animated birthday pages with music, photos, & interactive confetti",
    problem:
      "Creating memorable, personalized digital birthday surprises usually requires custom web development or plain static text messages.",
    solution:
      "Engineered WishBloom, a modern web app allowing users to craft full-screen animated birthday surprise pages with custom messages, audio, photo slideshows, interactive confetti, and instant shareable social links.",
    technologies: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Canvas Confetti"],
    demoUrl: "https://birthday-wish-nfucpbwud-ahanaf25.vercel.app/",
    githubUrl: "https://github.com/dev-ahanaf/birthday-wish",
    imageUrl: "/images/wishbloom.png",
    featured: true,
  },
  {
    id: "autonomous-line-follower",
    title: "Autonomous PID Line Follower Robot (DIU RoboCamp & NSTU Champion)",
    category: "IoT & Robotics",
    tagline: "1st Place Champion High-speed PID line-tracking robot (Team Falcon Bots)",
    problem:
      "High-speed autonomous navigation requires sub-millisecond sensor response and smooth differential motor control to prevent overshoot at sharp turns.",
    solution:
      "Designed and built an autonomous robot utilizing an 8-channel IR sensor array, analog multiplexer, TB6612FNG dual motor driver, and fine-tuned PID control algorithms, winning 1st Place Champion at DIU Robo Camp 2026 and NSTU EEE Day 2K26.",
    technologies: ["Arduino Nano", "C++", "PID Algorithm", "TB6612FNG Driver", "Electronics", "Multiplexer"],
    demoUrl: "https://github.com/dev-ahanaf/pid-line-follower-robot",
    githubUrl: "https://github.com/dev-ahanaf/pid-line-follower-robot",
    imageUrl: "/images/diu-robocamp-champion.jpg",
    featured: true,
  },
  {
    id: "smart-home-automation",
    title: "Smart Home Automation System",
    category: "IoT & Robotics",
    tagline: "Comprehensive IoT home monitoring and automated security system",
    problem:
      "Traditional home automation systems are expensive, closed-source, and lack integrated power analytics with real-time weather automated protection.",
    solution:
      "Engineered an all-in-one smart home system featuring remote device control, real-time electricity consumption monitoring, automated rain-sensing curtain control, smart RFID door unlocking, and instant alert notifications.",
    technologies: ["ESP32", "Arduino", "C++", "NodeMCU", "MQTT", "Blynk IoT", "Sensors Array"],
    demoUrl: "https://github.com/dev-ahanaf/smart-home-iot",
    githubUrl: "https://github.com/dev-ahanaf/smart-home-iot",
    imageUrl: "/images/smart-home-special-mention.jpg",
    featured: true,
  },
  {
    id: "perfect-click-studio",
    title: "Perfect Click - Standalone Media Studio Platform",
    category: "Web Development",
    tagline: "Creative photography, video production & campus media showcase platform",
    problem:
      "Visual media professionals need a high-performance web platform to present high-resolution photography, event reels, and client booking services.",
    solution:
      "Developed a standalone photography & videography portfolio web application for 'Perfect Click', showcasing university convocations, bridal portraits, and event coverage.",
    technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion"],
    demoUrl: "https://perfect-click-com-bd.vercel.app/",
    githubUrl: "https://github.com/dev-ahanaf/perfect-click-studio",
    imageUrl: "/images/photography/perfect-click-1.jpg",
    featured: true,
  },
  {
    id: "kj-product-shopify",
    title: "KJ Product — E-Commerce Storefront",
    category: "Web Development",
    tagline: "Custom e-commerce optimized Shopify store design",
    problem:
      "High mobile bounce rate on single-product landings due to slow custom Liquid script loading and unoptimized product media galleries.",
    solution:
      "Engineered a lightweight Shopify Liquid theme with lazy-loaded image pipelines, custom AJAX drawer cart, and inline sticky Add-to-Cart bar. // TODO: Ask user for exact conversion % increase or load time metric (e.g. sub-2s mobile LCP).",
    technologies: ["Shopify Liquid", "CSS3", "JavaScript", "Theme Customization", "E-commerce"],
    imageUrl: "",
    featured: false,
  },
  {
    id: "hoodies-shopify",
    title: "Hoodies.com — E-Commerce Apparel Store",
    category: "Web Development",
    tagline: "Visually appealing apparel store with customized theme",
    problem:
      "Generic Shopify apparel templates failed to handle custom variant swatches (colors/sizes) and lacked a high-converting streetwear aesthetic.",
    solution:
      "Built a custom Liquid storefront with dynamic color-swatch logic, automated sizing guide modal, and integrated Instagram product tag feed. // TODO: Ask user for exact conversion/traffic metric.",
    technologies: ["Shopify Liquid", "HTML5/CSS3", "JavaScript", "Shopify Apps"],
    imageUrl: "",
    featured: false,
  },
  {
    id: "jacketsempire-shopify",
    title: "Jacketsempire.com — E-Commerce Store",
    category: "Web Development",
    tagline: "Custom store focused on e-commerce optimization & high conversion",
    problem:
      "Excessive cart abandonment caused by multi-step checkout friction and dense multi-category leather jacket collections on mobile viewports.",
    solution:
      "Redesigned catalog taxonomy with multi-attribute AJAX filtering, instant search autocomplete, and a streamlined single-page quick-buy modal. // TODO: Ask user for exact checkout conversion rate or mobile speed score.",
    technologies: ["Shopify Liquid", "JavaScript", "CSS3", "SEO Optimization"],
    imageUrl: "",
    featured: false,
  },
  {
    id: "safa-manufacturing-wordpress",
    title: "SafaManufacturing.com — Corporate WordPress Web Design",
    category: "Web Development",
    tagline: "Custom corporate WordPress website for manufacturing enterprise",
    problem:
      "Manufacturing client needed an updated corporate web presence to present industrial equipment product catalogs and specifications to international B2B buyers.",
    solution:
      "Designed a custom WordPress theme with custom post types for machinery specs, dynamic RFQ (Request for Quote) modal forms, and WooCommerce catalog mode. // TODO: Ask user for exact client engagement metric.",
    technologies: ["WordPress", "Elementor", "PHP", "WooCommerce", "CSS3"],
    imageUrl: "",
    featured: false,
  },
];

