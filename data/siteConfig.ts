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
      degree: "B.Sc. in Computing and Information Systems (CIS)",
      result: "3rd Year, 7th Semester | CGPA: 3.40 / 4.00",
      period: "Present",
      details:
        "Focusing on Software Engineering, Autonomous Robotics, Database Systems, Web Technologies, and Computer Architecture.",
    },
    {
      institution: "Lions School and College, Saidpur",
      degree: "Higher Secondary Certificate (HSC) - Science",
      result: "GPA 4.33 / 5.00",
      period: "2023",
      details: "Focused on Mathematics, Physics, Chemistry, and Information Technology.",
    },
    {
      institution: "Barapukuria Coal Mine School",
      degree: "Secondary School Certificate (SSC) - Science",
      result: "GPA 5.00 / 5.00",
      period: "2021",
      details: "Focused on core sciences and mathematics.",
    },
  ] as EducationItem[],

  certifications: [
    {
      title: "Web Development — Batch 13",
      organization: "Programming Hero",
      period: "Completed",
      details: "Completed a comprehensive frontend web development course, building practical skills in modern web development.",
    },
    {
      title: "Shopify Advanced Store Design",
      organization: "OSTAD",
      period: "Oct 2023 – Feb 2024",
      details: "Completed advanced training in Shopify store design and custom Liquid theme development.",
    },
    {
      title: "Advanced Digital Marketing & Shopify Dropshipping",
      organization: "Webcoder-IT Limited — Uttara, Dhaka",
      period: "Dec 2021 – Mar 2022",
      details: "Completed a 6-month advanced program covering digital marketing strategy and Shopify dropshipping / e-commerce solutions.",
    },
  ],

  leadership: [
    {
      title: "Air Rover Scout Leader & Public Service Representative",
      organization: "Daffodil International University Air Rover Scout Group (DIUARSG)",
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

  extracurricular: [
    { role: "Photographer & Executive Member", org: "DIU Voluntary Service Club (DIU VSC)", period: "2025 – 2026" },
    { role: "Media & Communication Secretary", org: "DIU AIRIS", period: "Active" },
    { role: "Rover Scout Unit Leader", org: "Daffodil International University Air Rover Scout Group (DIUARSG)", period: "Active" },
    { role: "Rangpur Zone Leader", org: "Roar For Street Child (RSC)", period: "2022 – 2024" },
    { role: "Deputy Divisional Coordinator (Rangpur)", org: "National Newspaper Olympiad (NNO)", period: "2024 – 2025" },
    { role: "Executive Member", org: "CIS Club", period: "Active" },
    { role: "Group Leader", org: "Bangladesh Red Crescent Society (BDRCS)", period: "2020 – 2021" },
    { role: "Participant", org: "Building Bridges Through Leadership Training – Junior (BBLTJ)", period: "2020" },
  ],

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
      id: "shopify-store-designer",
      role: "Shopify Store Designer",
      companyOrOrg: "Pep Band — USA (Remote)",
      period: "Mar 2023 – Apr 2024",
      oneLiner: "Built visually appealing, user-friendly Shopify stores that drive sales and strengthen brand presence.",
      description: [
        "Built visually appealing, user-friendly Shopify stores that drive sales and strengthen brand presence.",
        "Developed custom Shopify themes tailored to client specifications for a unique, engaging shopping experience.",
        "Optimized stores for speed, SEO, and mobile responsiveness to maximize customer retention and conversion rates.",
      ],
      skills: ["Shopify Liquid", "Theme Customization", "E-Commerce", "CSS3", "Conversion Rate Optimization"],
      iconType: "planet",
    },
    {
      id: "digital-marketer-nation-it",
      role: "Digital Marketer",
      companyOrOrg: "Nation IT Limited — Dhaka",
      period: "Mar 2022 – Apr 2023",
      oneLiner: "Executed data-driven digital marketing campaigns boosting engagement and lead generation.",
      description: [
        "Achieved a 50% increase in social media engagement and a 35% boost in lead generation by implementing data-driven digital marketing campaigns.",
        "Managed performance marketing, audience targeting, and content strategy for regional campaigns.",
      ],
      skills: ["Digital Marketing", "Social Media Strategy", "Lead Generation", "SEO", "Analytics"],
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
    { name: "Frontend Web Development", category: "Software" },
    { name: "Shopify Store Design & Liquid", category: "E-Commerce" },
    { name: "WordPress & PHP", category: "CMS" },
    { name: "IoT & Robotics (Drones, LFR)", category: "Hardware" },
    { name: "Arduino & ESP32", category: "Hardware" },
    { name: "React & Next.js 14", category: "Frontend" },
    { name: "TypeScript & ES6+", category: "Language" },
    { name: "SEO & Digital Marketing", category: "Marketing" },
    { name: "SolidWorks", category: "Design" },
    { name: "Canva Pro & CapCut Pro", category: "Creative" },
    { name: "MS Office (Word, PowerPoint, Excel)", category: "Productivity" },
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
      description: "Secured 1st Place Champion in the autonomous Line Follower Robot (LFR) competition at NSTU EEE Day 2K26 (Team Leader).",
      icon: "trophy",
      imageUrl: "/images/nstu-eee-day-champion.jpg",
      badgeText: "🏆 1st Place Champion",
      highlight: true,
    },
    {
      id: "successful-freelancer-award",
      title: "Successful Freelancer Award 2023",
      event: "Webcoder-IT Award Ceremony",
      organization: "Webcoder-IT Institute",
      year: "2023",
      category: "Freelancing & E-Commerce",
      description: "Honored with the Successful Freelancer's Award 2023 by Webcoder-IT Institute for excellence in e-commerce storefront design, digital marketing, and client project delivery.",
      icon: "trophy",
      imageUrl: "/images/successful-freelancer-award.jpg",
      badgeText: "🏆 Award Winner",
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

