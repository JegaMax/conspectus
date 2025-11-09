import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { PortfolioContent } from "@/types/portfolio";

export const portfolioContent: PortfolioContent = {
  nav: [
    { id: "about", label: "About", href: "#about" },
    { id: "education", label: "Education", href: "#education" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "courses", label: "Courses", href: "#courses" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "C. Jegatheesh",
    title: "Engineer crafting immersive digital & IoT experiences.",
    subtitle:
      "Full-stack developer and embedded systems enthusiast focused on building reliable, human-centered solutions.",
    intro:
      "I blend electronics, automation, and modern web engineering to design products that feel effortless. From health monitoring platforms to autonomous robotics, I build experiences that are both technically sound and deeply considered.",
    primaryCta: {
      label: "Explore featured work",
      href: "#projects",
    },
    secondaryCta: {
      label: "Connect on LinkedIn",
      href: "https://in.linkedin.com/in/jegatheesh-c-038681169",
      external: true,
    },
    stats: [
      {
        label: "Major Projects",
        value: "5",
        description: "IoT, automation, and web experiences delivered end-to-end.",
      },
      {
        label: "Academic CGPA",
        value: "9.18",
        description: "Electronics & Communication Engineering, SNSCT.",
      },
      {
        label: "Certifications",
        value: "6",
        description: "Spanning Java, RPA, SEO, and digital marketing.",
      },
    ],
    portrait: {
      src: "/images/jega.jpg",
      alt: "Portrait of C. Jegatheesh",
      width: 1710,
      height: 2289,
      priority: true,
    },
  },
  about: {
    title: "About",
    statement: "“I never dreamed about success — I worked for it.”",
    bio: [
      "I'm a graduate engineer with a strong curiosity for emerging technologies and the discipline to see ideas through. I thrive when I can combine thoughtful UX with robust engineering, whether I'm crafting full-stack applications or bringing embedded systems to life.",
      "Structure, clarity, and collaboration guide everything I build. I relish debugging details, tightening performance, and shipping experiences that feel effortless to maintain. Team dynamics energize me — collective momentum always produces better outcomes.",
    ],
    highlights: [
      "Full-stack capable, from TypeScript and Next.js to microcontrollers and IoT platforms.",
      "Hands-on with cloud integrations, data visualisation dashboards, and two-way communication flows.",
      "Comfortable leading project delivery across multidisciplinary academic and freelance teams.",
    ],
    skillGroups: [
      {
        title: "Technical skills",
        skills: [
          { name: "Web Development", level: 90 },
          { name: "Java 8", level: 85 },
          { name: "C & C++", level: 80 },
          { name: "Python", level: 60 },
          { name: "MATLAB", level: 65 },
        ],
      },
      {
        title: "Creative & leadership",
        skills: [
          { name: "Leadership", level: 92 },
          { name: "Teamwork", level: 90 },
          { name: "Creativity", level: 90 },
          { name: "Analytical Thinking", level: 86 },
          { name: "Adaptability", level: 80 },
          { name: "Visual Design", level: 75 },
        ],
      },
    ],
  },
  education: [
    {
      title: "Bachelor of Engineering, Electronics & Communication",
      subtitle: "SNS College of Technology, Coimbatore",
      period: "2016 – 2020",
      description:
        "Graduated with distinction (CGPA 9.18/10), specialising in embedded systems, communication networks, and IoT-driven automation.",
      image: {
        src: "/images/Education/3.jpg",
        alt: "SNS College of Technology campus",
        width: 200,
        height: 200,
      },
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      subtitle: "L.M.S Higher Secondary School, Kadamalikuntu",
      period: "2014 – 2016",
      description: "Scored 83.33% with focus on physics, chemistry, mathematics, and computer science.",
      image: {
        src: "/images/Education/1.jpg",
        alt: "L.M.S Higher Secondary School classrooms",
        width: 194,
        height: 194,
      },
    },
    {
      title: "Secondary School Leaving Certificate (SSLC)",
      subtitle: "L.M.S Higher Secondary School, Kadamalikuntu",
      period: "2013 – 2014",
      description: "Secured 91.20%, ranking among the top performers of the batch.",
      image: null,
    },
  ],
  projects: [
    {
      slug: "health-monitoring-virtual-assistant",
      title: "Health Monitoring with Virtual Health Assistant",
      category: "IoT & Healthcare",
      duration: "3 months",
      summary:
        "End-to-end remote healthcare platform combining vitals sensing, cloud analytics, alerts, and a conversational assistant for ongoing patient support.",
      problem:
        "Patients and caregivers need reliable, real-time visibility into critical health metrics without remaining in hospital environments.",
      solution:
        "Designed a modular system that pairs sensor-based vitals tracking with cloud dashboards, automated SMS/email alerts, two-way doctor messaging, and a virtual assistant that keeps patients engaged with timely reminders.",
      outcomes: [
        "Delivered continuous monitoring with automatic triage alerts when thresholds were crossed.",
        "Enabled remote consultations and prescription management via secure messaging workflows.",
        "Improved patient adherence through conversational reminders and wellness insights.",
      ],
      stack: ["Arduino", "NodeMCU", "Firebase", "Twilio", "Dialogflow"],
      thumbnail: {
        src: "/images/Project/01-thumbnail.jpg",
        alt: "Monitoring dashboard interface preview",
        width: 400,
        height: 300,
      },
      heroImage: {
        src: "/images/Project/01-full.jpg",
        alt: "Team presenting the health monitoring system",
        width: 739,
        height: 415,
      },
      links: [
        {
          label: "Case study",
          href: "/projects/health-monitoring-virtual-assistant",
          type: "article",
        },
      ],
    },
    {
      slug: "conspectus-portfolio",
      title: "Jegatheesh Conspectus",
      category: "Web Design",
      duration: "1 week",
      summary:
        "A personal portfolio designed to communicate technical depth, aesthetic sensibility, and a multidisciplinary approach to engineering.",
      problem:
        "Needed a professional home that unified academic achievements, project work, and personal brand into a coherent narrative.",
      solution:
        "Crafted a responsive, story-driven portfolio with modular sections, bold typography, and interactive storytelling to highlight work across IoT, embedded systems, and design.",
      outcomes: [
        "Improved professional positioning with a cohesive long-form narrative.",
        "Increased inbound opportunities through clear CTAs and contact pathways.",
        "Set the foundation for this Next.js migration and performance revamp.",
      ],
      stack: ["HTML", "CSS", "Bootstrap", "jQuery"],
      thumbnail: {
        src: "/images/Project/02-thumbnail.jpg",
        alt: "Screenshot of the Conspectus website",
        width: 400,
        height: 300,
      },
      heroImage: {
        src: "/images/Project/02-full.jpg",
        alt: "Full-screen capture of the Conspectus landing page",
        width: 1080,
        height: 1960,
      },
      links: [
        {
          label: "Case study",
          href: "/projects/conspectus-portfolio",
          type: "article",
        },
      ],
    },
    {
      slug: "home-automation-google-assistant",
      title: "Home Automation using Google Assistant",
      category: "IoT Automation",
      duration: "3 months",
      summary:
        "Voice-controlled smart home platform integrating Google Assistant, cloud triggers, and custom device firmware for reliable automation.",
      problem:
        "Wanted to provide homeowners with intuitive, secure control over household appliances using natural language commands.",
      solution:
        "Implemented secure voice-to-action flows via Google Assistant, IFTTT, and Adafruit IO, creating device firmware that manages relays and delivers responsive feedback loops.",
      outcomes: [
        "Enabled seamless control of lighting and appliances from anywhere.",
        "Designed scalable patterns so new devices can be paired without rewrites.",
        "Improved energy management with usage-aware automation routines.",
      ],
      stack: ["Google Assistant", "IFTTT", "Adafruit IO", "ESP8266", "Python"],
      thumbnail: {
        src: "/images/Project/03-thumbnail.jpg",
        alt: "Voice assistant controlling home devices illustration",
        width: 400,
        height: 300,
      },
      heroImage: {
        src: "/images/Project/03-full.jpg",
        alt: "Diagram of Google Assistant home automation workflow",
        width: 1280,
        height: 719,
      },
      links: [
        {
          label: "Case study",
          href: "/projects/home-automation-google-assistant",
          type: "article",
        },
      ],
    },
    {
      slug: "smart-door-lock-face-recognition",
      title: "Smart Door Lock using Face Recognition",
      category: "IoT Security",
      duration: "3 months",
      summary:
        "Biometric access control solution powered by edge-based face recognition, intrusion alerts, and automated photo evidence.",
      problem:
        "Traditional pin or key-based systems are vulnerable to theft and unauthorised sharing, creating security gaps in sensitive spaces.",
      solution:
        "Built a Raspberry Pi-driven system that authenticates enrolled faces, controls servo locks, captures intruder photos, and sends instant alerts for manual verification.",
      outcomes: [
        "Reduced false unlocks through biometric validation and motion sensing.",
        "Delivered real-time notifications with photographic evidence to guardians.",
        "Increased resilience against tampering with offline-first design.",
      ],
      stack: ["Raspberry Pi", "OpenCV", "Python", "PIR Sensors", "SMTP"],
      thumbnail: {
        src: "/images/Project/04-thumbnail.jpg",
        alt: "Smart door lock illustration",
        width: 400,
        height: 300,
      },
      heroImage: {
        src: "/images/Project/04-full.jpg",
        alt: "Face recognition system installed on a door",
        width: 800,
        height: 533,
      },
      links: [
        {
          label: "Case study",
          href: "/projects/smart-door-lock-face-recognition",
          type: "article",
        },
      ],
    },
    {
      slug: "floor-cleaning-robot",
      title: "Floor Cleaning Robot",
      category: "Robotics & Embedded",
      duration: "3 months",
      summary:
        "Autonomous cleaning robot capable of navigating obstacles while maintaining consistent sweeping coverage of interior spaces.",
      problem:
        "Manual cleaning in large indoor environments is repetitive and labour-intensive, often leading to inconsistent hygiene.",
      solution:
        "Engineered a compact robot with obstacle detection, path persistence, and rotary cleaning modules to automate floor maintenance.",
      outcomes: [
        "Delivered reliable obstacle avoidance using IR sensors and motor drivers.",
        "Maintained cleaning coverage through adaptive movement routines.",
        "Reduced manual effort by automating repeating maintenance loops.",
      ],
      stack: ["Arduino", "IR Sensors", "Motor Drivers", "Embedded C"],
      thumbnail: {
        src: "/images/Project/05-thumbnail.jpg",
        alt: "Autonomous floor cleaning robot prototype",
        width: 400,
        height: 300,
      },
      heroImage: {
        src: "/images/Project/05-full.jpg",
        alt: "Floor cleaning robot hardware build",
        width: 488,
        height: 382,
      },
      links: [
        {
          label: "Case study",
          href: "/projects/floor-cleaning-robot",
          type: "article",
        },
      ],
    },
  ],
  courses: [
    {
      name: "Java 8",
      provider: "Be Positive Institute of Technology",
      duration: "3 months",
      focus: "Functional programming patterns, collections, and concurrent programming in modern Java.",
    },
    {
      name: "C++ Tutorial",
      provider: "SoloLearn",
      duration: "4 weeks",
      focus: "Object-oriented design patterns and STL-driven problem solving.",
    },
    {
      name: "An Introduction to RPA",
      provider: "Automation Anywhere University",
      duration: "15 hours",
      focus: "Designing software robots to automate high-volume, rule-based processes.",
    },
    {
      name: "SEO Tutorial",
      provider: "Udemy",
      duration: "1 hour",
      focus: "Search engine optimisation fundamentals for growing organic visibility.",
    },
    {
      name: "Online Marketing Fundamentals",
      provider: "Google Digital Unlocked",
      duration: "4 weeks",
      focus: "Building data-driven marketing journeys across web and mobile touchpoints.",
    },
  ],
  experience: [
    {
      role: "IoT Project Lead · Capstone Initiative",
      company: "SNS College of Technology Innovation Lab",
      period: "Jan 2020 – Apr 2020",
      location: "Coimbatore, India",
      description:
        "Led a multidisciplinary team to deliver the Health Monitoring with Virtual Assistant platform, integrating hardware, cloud, and conversational interfaces.",
      achievements: [
        "Architected the device-to-cloud data pipeline with redundancy and fallbacks.",
        "Implemented alerting workflows that triggered SMS/email notifications under 5 seconds.",
        "Presented research findings to faculty review boards and industry mentors.",
      ],
      tags: ["IoT", "Healthcare", "Team Leadership", "Cloud Services"],
    },
    {
      role: "Full-stack Developer · Personal Brand",
      company: "Freelance & Self-initiated",
      period: "2020 – Present",
      location: "Remote",
      description:
        "Design and develop web experiences that communicate personal and project narratives with clarity, performance, and accessibility.",
      achievements: [
        "Shipped multiple iterations of the Conspectus portfolio, evolving from Bootstrap to modern Next.js architecture.",
        "Optimised asset pipelines to improve lighthouse scores and first contentful paint.",
        "Collaborated with peers to review UX flows, copy, and visual direction.",
      ],
      tags: ["Next.js", "TypeScript", "Design Systems", "Performance"],
    },
    {
      role: "Embedded Systems Researcher",
      company: "SNS College of Technology",
      period: "Jun 2019 – Dec 2019",
      location: "Coimbatore, India",
      description:
        "Experimented with computer vision and robotics to create proof-of-concept prototypes addressing security and automation use-cases.",
      achievements: [
        "Developed the smart door lock firmware with on-device face recognition and secure logging.",
        "Built a cleaning robot prototype with adaptive motion planning based on obstacle feedback.",
        "Documented research for internal showcases and academic presentations.",
      ],
      tags: ["Robotics", "Computer Vision", "Embedded C", "Prototyping"],
    },
  ],
  contact: {
    title: "Let's build something meaningful.",
    subtitle:
      "Whether it's an embedded product, a performant web experience, or a hybrid of both — I'm ready to collaborate.",
    availability: "Actively open to full-time roles, freelance engagements, and research collaborations.",
    channels: [
      {
        label: "Email",
        value: "jega7354@gmail.com",
        href: "mailto:jega7354@gmail.com",
        icon: Mail,
      },
      {
        label: "Phone",
        value: "+91 98943 71096",
        href: "tel:+919894371096",
        icon: Phone,
      },
      {
        label: "Location",
        value: "Kanyakumari, Tamil Nadu, India",
        href: "https://maps.google.com/?q=Kanyakumari,+Tamil+Nadu",
        icon: MapPin,
        external: true,
      },
    ],
    socials: [
      {
        label: "LinkedIn",
        value: "linkedin.com/in/jegatheesh-c-038681169",
        href: "https://in.linkedin.com/in/jegatheesh-c-038681169",
        icon: Linkedin,
        external: true,
      },
      {
        label: "Instagram",
        value: "@__cj__007__",
        href: "https://www.instagram.com/__cj__007__/",
        icon: Instagram,
        external: true,
      },
      {
        label: "Facebook",
        value: "facebook.com/jegatheesh.c",
        href: "https://m.facebook.com/profile.php?id=100007325178542&ref=content_filter",
        icon: Facebook,
        external: true,
      },
    ],
  },
};
