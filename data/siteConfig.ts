export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: "code" | "cpu" | "camera" | "figma";
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  organization: string;
  year: string;
  category: string;
  description: string;
  icon: "trophy" | "award" | "star";
  imageUrl?: string;
  badgeText?: string;
  highlight?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  result: string;
  period?: string;
  details?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  companyOrOrg: string;
  period: string;
  oneLiner: string;
  description: string[];
  skills: string[];
  iconType: "star" | "planet" | "ghost" | "person";
}

export interface LeadershipItem {
  title: string;
  organization: string;
  description: string;
  courses: string[];
  bullets: string[];
  achievements: string[];
  galleryImages: { url: string; caption: string; tag: string }[];
}

export const siteConfig = {
  personal: {
    name: "Fayek Ahanaf",
    title: "Computing & Information Systems Student | AI & Robotics Builder",
    subtitle: "Robotics Competitor • Web Developer • Photographer",
    eyebrow: "DIU CIS Student",
    headlineLine1: "Building with Code, ",
    headlineHighlightedWord: "Creating",
    headlineLine2: " with Vision.",
    headlineSubtext: "Combining software logic, hardware precision, AI tools, and creative media.",
    speechBubble: "Hello! I Am Fayek Ahanaf",
    currentStatus: "🏆 DIU Robo Camp 2026 & NSTU EEE Day Champion",
    shortIntro:
      "Computing & Information Systems student at Daffodil International University (DIU) focused on autonomous robotics, web engineering, AI tools, and visual media production.",
    fullBio:
      "I am Fayek Ahanaf, a CIS student at Daffodil International University (DIU). As Team Leader of Falcon Bots, I build autonomous line follower robots, AI EDA tools like CircuitMind AI, modern web apps, and lead technical workshops for university students.",
    availabilityStatement:
      "Interested in building technology that solves practical problems across software, robotics, and creative media.",
    email: "ahanaffayek@gmail.com",
    phone: "01516532018",
    location: "Dhaka, Bangladesh",
    resumeUrl: "/resume.pdf",
    brandLogoText: "FA",
    avatarImageUrl: "/images/fayek-portrait.jpg",
    photographyWebsite: "https://perfect-click-com-bd.vercel.app/",
  },

  socials: {
    github: "https://github.com/dev-ahanaf",
    linkedin: "https://www.linkedin.com/in/pro-ahnaf/",
    facebook: "https://www.facebook.com/itsahanaf",
    instagram: "https://www.instagram.com/its_ah_naf/",
    photographySite: "https://perfect-click-com-bd.vercel.app/",
  },

  currentlyBuilding: {
    title: "Currently Focused On",
    items: [
      "Autonomous PID Robotics",
      "AI EDA & CircuitMind Applications",
      "Modern Web Engineering (Next.js 14)",
      "Computer Systems & Architecture",
      "IoT & Microcontroller Systems",
    ],
    closingStatement:
      "Focused on building practical technology that connects software, hardware, and creative media.",
  },

  techStackMarquee: [
    "Arduino",
    "ESP32",
    "PID Control",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "C++",
    "Tailwind CSS",
    "Supabase",
    "Git",
    "GitHub",
    "WordPress",
    "Shopify",
  ],

  skillsCategories: [
    {
      id: "hardware-ai",
      title: "Robotics, AI & Hardware",
      description: "Microcontroller programming, PID robotics, and AI EDA tools",
      iconName: "cpu",
      skills: [
        "Autonomous PID Robotics",
        "Arduino & ESP32 Microcontrollers",
        "Electronics & Circuit Design",
        "Sensor Arrays & Motor Drivers",
        "AI EDA & CircuitMind AI",
        "Gemini / Google AI Studio",
        "IoT & MQTT Automation",
      ],
    },
    {
      id: "software-engineering",
      title: "Software & Web Engineering",
      description: "Building responsive React & Next.js applications",
      iconName: "code",
      skills: [
        "React.js & Next.js 14",
        "TypeScript & ES6+",
        "Tailwind CSS & Styling",
        "Python & REST APIs",
        "Shopify Development & Liquid",
        "WordPress & Custom PHP",
        "Git & GitHub Workflow",
        "Supabase & Databases",
      ],
    },
    {
      id: "creative-media",
      title: "Creative Media & Photography",
      description: "Visual media production and event coverage (Perfect Click Studio)",
      iconName: "camera",
      skills: [
        "Portrait & Campus Photography",
        "Event Coverage & Convocations",
        "Videography & Cinematography",
        "Short-form Content & Reels",
        "Video Editing & Lightroom",
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      institution: "Daffodil International University",
      degree: "BSc in Computing & Information Systems",
      result: "Currently Studying",
      period: "Present",
      details:
        "Focusing on Software Engineering, Autonomous Robotics, Database Systems, Web Technologies, and Computer Architecture.",
    },
    {
      institution: "Lions School & College, Saidpur",
      degree: "Higher Secondary Certificate (HSC) - Science",
      result: "GPA 4.33",
      period: "Completed",
      details: "Focused on Mathematics, Physics, Chemistry, and Information Technology.",
    },
    {
      institution: "Barapukuria Coal Mine School",
      degree: "Secondary School Certificate (SSC) - Science",
      result: "GPA 5.00",
      period: "Completed",
      details: "Focused on core sciences and mathematics.",
    },
  ] as EducationItem[],

  leadership: [
    {
      title: "Air Rover Scout Leader & Public Service Representative",
      organization: "Daffodil International University Air Rover Scout Group",
      description:
        "Active Rover Scout leader at DIU Air Rover Scout Group. Completed advanced unit leader training courses and represented DIU at national scouting events, youth forums, and community service drives.",
      courses: [
        "Mate Course",
        "Air Scout Unit Leader Basic Course",
        "Scout Unit Leader Advance Course",
      ],
      bullets: [
        "Selected in the Top 25 out of 100+ Rover Scouts nationwide at National Youth Forum 2025.",
        "Completed Mate Course, Air Scout Unit Leader Basic Course & Scout Unit Leader Advance Course.",
        "Represented DIU Air Rover Scout Group at National COMDECA 2025.",
        "Served in public service & welfare operations at Hajj Camp 2025 and Hajj Camp 2026.",
        "Organized community sanitation, public health awareness campaigns, and day camps.",
      ],
      achievements: [
        "National Youth Forum 2025 - Selected Top 25",
        "National COMDECA 2025 Contingent",
        "Hajj Camp 2025 & 2026 Public Service Medal",
        "Unit Leader Advance Course Certified",
      ],
      galleryImages: [
        {
          url: "/images/scouting/scout-parliament-portrait.jpg",
          caption: "National Youth Forum 2025 - Selected Top 25 Rover Scout in Bangladesh.",
          tag: "National Youth Forum 2025",
        },
        {
          url: "/images/scouting/scout-public-service.jpg",
          caption: "Hajj Camp 2025 & 2026 Public Service & Awareness Drive in Dhaka.",
          tag: "Hajj Camp 2025 & 2026",
        },
        {
          url: "/images/scouting/scout-community-drive.jpg",
          caption: "DIU Air Rover Scout Group Community Sanitation & Public Health Drive.",
          tag: "Community Service Drive",
        },
        {
          url: "/images/scouting/scout-contingent-camp.jpg",
          caption: "National COMDECA 2025 & DIU Air Rover Scout Camp Contingent.",
          tag: "National COMDECA 2025",
        },
      ],
    },
    {
      title: "Team Leader & Lead Workshop Instructor - Falcon Bots",
      organization: "Team Falcon Bots / Daffodil International University (DIU)",
      description:
        "Team Leader of robotics team Falcon Bots. Led the team to 1st Place Champion victories in Line Follower Robotics (LFR) and Project Showcases. Conducted the 'Introduction to IoT' technical workshop for CIS Batch 24 and Batch 25 students.",
      courses: [
        "Introduction to IoT Workshop (Lead Instructor)",
        "PID Autonomous Robotics Training",
        "Microcontroller & Embedded Hardware",
      ],
      bullets: [
        "Won 1st Place Champion in all competitions under Team Falcon Bots (DIU RoboCamp LFR Champion, NSTU EEE Day LFR Champion, Project Showcase Special Mention).",
        "Conducted and led the 'Introduction to IoT' workshop for DIU CIS Batch 24 & Batch 25 students.",
        "Trained 30+ students in microcontroller hardware, ESP32/Arduino programming, and IoT sensor arrays.",
        "Demonstrated real-time PID line follower robotics control algorithms and hardware assembly.",
      ],
      achievements: [
        "Team Leader - Falcon Bots",
        "DIU RoboCamp 2026 LFR Champion",
        "NSTU EEE Day 2K26 LFR Champion",
        "IoT Workshop Lead Instructor",
      ],
      galleryImages: [
        {
          url: "/images/workshops/workshop-presentation.jpg",
          caption: "Fayek Ahanaf presenting LFR Robotics & IoT concepts to CIS students.",
          tag: "Falcon Bots LFR Lecture",
        },
        {
          url: "/images/workshops/workshop-stage-falconbots.png",
          caption: "Team Falcon Bots presenting Introduction to IoT Workshop with CIS Faculty.",
          tag: "Falcon Bots Team & Faculty",
        },
        {
          url: "/images/workshops/workshop-group-participants.png",
          caption: "Group photo of CIS Batch 24 & 25 workshop student participants.",
          tag: "CIS Batch 24 & 25 Group",
        },
        {
          url: "/images/workshops/workshop-hands-on-mentoring.jpg",
          caption: "Hands-on lab mentoring session guiding students on IoT hardware boards.",
          tag: "Hands-on Hardware Lab",
        },
      ],
    },
  ] as LeadershipItem[],

  experience: [
    {
      id: "lead-robotics-dev",
      role: "Team Leader & Lead Robotics Developer",
      companyOrOrg: "Team Falcon Bots / DIU",
      period: "2024 – Present",
      oneLiner: "Led Team Falcon Bots to 1st Place Championships in Line Follower Robotics (LFR) and Project Showcases.",
      description: [
        "Led Team Falcon Bots as Team Leader, winning championships including DIU Robo Camp 2026 LFR Champion and NSTU EEE Day 2K26 LFR Champion.",
        "Conducted and led the 'Introduction to IoT' workshop for DIU CIS Batch 24 and Batch 25 students, mentoring 30+ students in microcontroller hardware & IoT sensor integration.",
        "Integrated multiplexed IR sensor arrays, TB6612FNG motor drivers, and fine-tuned PID control algorithms for high-speed autonomous navigation.",
        "Engineered CircuitMind AI - AI-powered EDA workspace converting natural language specifications into electronic schematics.",
      ],
      skills: ["Team Falcon Bots", "PID Control", "IoT Workshop", "Arduino & ESP32", "C++", "Circuit Design"],
      iconType: "star",
    },
    {
      id: "shopify-expert",
      role: "Shopify Expert & Frontend Developer",
      companyOrOrg: "Freelance / Web Agency Projects",
      period: "3+ Years (2021 – Present)",
      oneLiner: "Customized Liquid themes, optimized store speed, and built tailored e-commerce solutions.",
      description: [
        "Customized Liquid themes, optimized store speed, and integrated customized cart/checkout features.",
        "Built responsive e-commerce storefronts tailored to client specifications across diverse industries.",
        "Delivered fast UI layouts using HTML, CSS, JavaScript, and custom Shopify apps.",
      ],
      skills: ["Shopify Liquid", "JavaScript", "HTML5/CSS3", "Theme Customization", "E-commerce"],
      iconType: "planet",
    },
    {
      id: "wordpress-developer",
      role: "WordPress & Frontend Developer",
      companyOrOrg: "Independent Client Solutions",
      period: "2021 – Present",
      oneLiner: "Developed custom responsive WordPress sites with WooCommerce and PHP optimization.",
      description: [
        "Developed custom responsive WordPress websites using Elementor, WooCommerce, and PHP customization.",
        "Ensured cross-browser compatibility, mobile responsiveness, fast page loading, and SEO optimization.",
      ],
      skills: ["WordPress", "WooCommerce", "Elementor", "PHP", "SEO"],
      iconType: "ghost",
    },
    {
      id: "perfect-click-media",
      role: "Lead Photographer & Videographer",
      companyOrOrg: "Perfect Click (perfect-click-com-bd.vercel.app)",
      period: "2020 – Present",
      oneLiner: "Operates standalone creative media portfolio site 'Perfect Click' capturing campus and university events.",
      description: [
        "Operates standalone creative media portfolio site Perfect Click (https://perfect-click-com-bd.vercel.app/).",
        "Directs photography, video reels, and event coverage for university and client programs.",
      ],
      skills: ["Photography", "Videography", "Lightroom", "Premiere Pro"],
      iconType: "person",
    },
  ] as ExperienceItem[],

  tools: [
    { name: "Arduino", category: "Hardware" },
    { name: "ESP32", category: "IoT" },
    { name: "PID Control", category: "Robotics" },
    { name: "React", category: "Frontend" },
    { name: "Next.js 14", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "CSS" },
    { name: "Python", category: "Backend" },
    { name: "C++", category: "Embedded" },
    { name: "Supabase", category: "Database" },
    { name: "Git & GitHub", category: "Version Control" },
    { name: "Shopify Liquid", category: "E-Commerce" },
    { name: "WordPress", category: "CMS" },
    { name: "Lightroom", category: "Creative" },
    { name: "Premiere Pro", category: "Video" },
  ],

  achievements: [
    {
      id: "diu-robo-camp-2026",
      title: "DIU Robo Camp 2026 LFR Champion",
      event: "Robo Camp 2026",
      organization: "Daffodil International University Robotics Club",
      year: "2026",
      category: "Robotics",
      description: "Engineered high-speed differential steering and PID control algorithms to win 1st Place Champion in autonomous Line Follower Robotics at DIU Robo Camp 2026.",
      icon: "trophy",
      imageUrl: "/images/diu-robocamp-champion.jpg",
      badgeText: "🏆 1st Place Champion",
      highlight: true,
    },
    {
      id: "nstu-eee-day-champion",
      title: "NSTU EEE Day 2K26 LFR Champion",
      event: "EEE Day 2K26 Prize Giving Ceremony",
      organization: "Noakhali Science and Technology University (NSTU)",
      year: "2026",
      category: "Robotics",
      description: "Secured 1st Place Champion in the autonomous Line Follower Robot (LFR) competition at NSTU EEE Day 2K26.",
      icon: "trophy",
      imageUrl: "/images/nstu-eee-day-champion.jpg",
      badgeText: "🏆 1st Place Champion",
      highlight: true,
    },
    {
      id: "smart-home-special-mention",
      title: "Special Mention - Smart Home Automation System",
      event: "DIU RoboCamp 2026 Project Showcase",
      organization: "Daffodil International University CIS Department",
      year: "2026",
      category: "IoT & Innovation",
      description: "Awarded Special Mention for IoT hardware-software integration in the Smart Home Automation System project showcase.",
      icon: "award",
      imageUrl: "/images/smart-home-special-mention.jpg",
      badgeText: "⭐ Special Mention",
      highlight: true,
    },
  ] as AchievementItem[],
};
