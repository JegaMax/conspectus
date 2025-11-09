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
    { id: "projects", label: "Project", href: "#projects" },
    { id: "courses", label: "Course", href: "#courses" },
    { id: "experience", label: "Skill", href: "#experience" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Welcome To My Conspectus!",
    title: "Jegatheesh C",
    subtitle:
      "\"Philosophy gets on my nerves. If we analyze the ultimate ground of everything, then everything finally falls into nothingness. But I have decided to resume my lectures again and look the Hydra of doubt straight into the eye, and it be quite ominous if one values one's life.\"",
    intro:
      "I am a fresh graduate from SNS College of Technology. Fascinated to work on current and future technologies in software field.",
    primaryCta: {
      label: "View Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "Contact Me",
      href: "#contact",
    },
    stats: [
      {
        label: "BE (ECE) CGPA",
        value: "9.18",
        description: "SNS College of Technology, Coimbatore.",
      },
      {
        label: "HSC Score",
        value: "83.33%",
        description: "L.M.S Higher Secondary School, 2016.",
      },
      {
        label: "SSLC Score",
        value: "91.20%",
        description: "L.M.S Higher Secondary School, 2014.",
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
    heading: {
      title: "About",
      subtitle: "\"I never dreamed about success\nI worked for it.\"",
    },
    bio: [
      "I am a fresh graduate from SNS College of Technology. Fascinated to work on current and future technologies in software field.",
      "I have a good knowledge of both front-end and back-end techniques. I love structure and order and I also stand for quality.",
      "I love spending time on fixing little details and optimizing web application. Also I like working in a team, I'll learn faster and much more.",
    ],
    highlights: [
      "Fascinated to work on current and future technologies in software field.",
      "Good knowledge of both front-end and back-end techniques.",
      "Love fixing little details, optimizing web applications, and collaborating with teams.",
    ],
    skillGroups: [
      {
        title: "Professional Skill",
        skills: [
          { name: "Java 8", level: 85 },
          { name: "Web Development", level: 90 },
          { name: "C & C++", level: 80 },
          { name: "Python", level: 60 },
          { name: "MAT LAB", level: 65 },
          { name: "Photoshop", level: 75 },
        ],
      },
      {
        title: "Personal Skill",
        skills: [
          { name: "Analytical", level: 86 },
          { name: "Creativity", level: 90 },
          { name: "Leadership", level: 92 },
          { name: "Team Work", level: 90 },
          { name: "Adaptable", level: 80 },
        ],
      },
    ],
  },
  education: {
    heading: {
      title: "Education",
      subtitle:
        "Education is simply the soul of a society as it passes from one generation to another.",
    },
    entries: [
      {
        title: "SSLC",
        subtitle: "L.M.S Higher Secondary School, Kadamalikuntu",
        period: "2013 – 2014",
        description:
          "Completed from L.M.S Higher Secondary School, Kadamalikuntu with 91.20%.",
        image: {
          src: "/images/Education/1.jpg",
          alt: "L.M.S Higher Secondary School",
          width: 194,
          height: 194,
        },
      },
      {
        title: "HSC",
        subtitle: "L.M.S Higher Secondary School, Kadamalikuntu",
        period: "2014 – 2016",
        description:
          "Completed from L.M.S Higher Secondary School, Kadamalikuntu with 83.33%.",
        image: {
          src: "/images/Education/1.jpg",
          alt: "Higher secondary classrooms",
          width: 194,
          height: 194,
        },
      },
      {
        title: "BE (ECE)",
        subtitle: "SNS College of Technology, Coimbatore",
        period: "2016 – 2020",
        description:
          "Completed from SNS College of Technology, Coimbatore with 9.18 CGPA.",
        image: {
          src: "/images/Education/3.jpg",
          alt: "SNS College of Technology campus",
          width: 200,
          height: 200,
        },
      },
    ],
  },
  projects: {
    heading: {
      title: "Project",
      subtitle:
        "Where you innovate, how you innovate, and what you innovate are design problems.",
    },
    items: [
      {
        slug: "health-monitoring-virtual-assistant",
        title: "Health Monitoring with Virtual Health Assistant",
        category: "IoT",
        duration: "3 months",
        summary:
          "At present situation, people want to realize their current health condition and also want proper care rapidly at their home.",
        problem:
          "As a result, this project is an attempt to solve a healthcare problem currently society is facing. The main objective of the project was to design a remote healthcare system with healthcare assistant.",
        solution:
          "It's comprised of five main parts. The first part being, detection of patient's vitals using sensors, second for sending data to cloud storage and this can be monitored from anywhere in the world over internet, the third part was providing the detected data for remote viewing. Remote viewing of the data enables a doctor and guardian to monitor a patient's health progress away from hospital premises and also send an email/SMS alert whenever those readings goes beyond critical values, fourth part is the two-way communication the doctor can send required prescription to the patient or guardians through SMS or Emails, and the last part was the virtual health assistant which can interact with the patient to take their medicine on time and give some suggestions about their current health condition and also it communicate with the patient to avoid the loneliness.",
        outcomes: [
          "Remote viewing of the data enables a doctor and guardian to monitor a patient's health progress away from hospital premises and also send an email/SMS alert whenever those readings goes beyond critical values.",
          "The doctor can send required prescription to the patient or guardians through SMS or Emails.",
          "The virtual health assistant which can interact with the patient to take their medicine on time and give some suggestions about their current health condition and also it communicate with the patient to avoid the loneliness.",
        ],
        stack: ["IoT"],
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
        title: "Jegatheesh - Conspectus",
        category: "Web Design",
        duration: "1 week",
        summary:
          "This web design project is designed to express my knowledge and experience in web development.",
        problem:
          "This web design project is designed to express my knowledge and experience in web development.",
        solution:
          "This web design project is designed to express my knowledge and experience in web development.",
        outcomes: [
          "This web design project is designed to express my knowledge and experience in web development.",
        ],
        stack: ["Web Design"],
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
        category: "IoT",
        duration: "3 months",
        summary:
          "Google assistant is AI (Artificial Intelligence) based voice command service.",
        problem:
          "Using voice, we can interact with google assistant and it can search on the internet, schedule events, set alarms, control appliances, etc. This service is available on smartphones and Google Home devices.",
        solution:
          "We can control smart home devices including lights, switches, fans and thermostats using our Google Assistant. We will build an application which can control home appliances. Here, we will control a 60W bulb and Table fan using Google Assistant service. We can also include many devices to control through our voice command. This application includes Google assistant along with Adafruit server and IFTTT service.",
        outcomes: [
          "We can control smart home devices including lights, switches, fans and thermostats using our Google Assistant.",
          "We will build an application which can control home appliances.",
          "This application includes Google assistant along with Adafruit server and IFTTT service.",
        ],
        stack: ["Google Assistant", "IFTTT", "Adafruit"],
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
        title: "Smart Door Lock Using Face Recognition",
        category: "IoT",
        duration: "3 months",
        summary:
          "The most important of feature of any home security system is to detect the people who enter or leave the house.",
        problem:
          "Instead of monitoring that through passwords or pins unique faces can be made use of as they are one's biometric trait. These are innate and cannot be modified or stolen easily. The level of security can be raised by using face detection. The proposed face recognition door lock security system has been developed to prevent robbery in highly secure areas like home environment with lesser power consumption and more reliable standalone security device for both Intruder detection and for door security.",
        solution:
          "This system is powered by raspberry pi circuit. Raspberry Pi electronic board is operated on Battery power supply, wireless internet connectivity by using USB modem, it includes camera, PIR motion sensor and a door. Whenever the person comes in front of the door, it recognizes the face and if it is registered then it unlocks the door, if the face is not registered it will raise an alarm and clicks a picture and send it on the registered number.",
        outcomes: [
          "The proposed face recognition door lock security system has been developed to prevent robbery in highly secure areas like home environment.",
          "The system recognises registered faces and unlocks the door, otherwise it raises an alarm and sends the captured picture to the registered number.",
          "Raspberry Pi electronic board operates with wireless internet connectivity, camera, PIR motion sensor and a door control unit.",
        ],
        stack: ["Raspberry Pi", "Face Recognition"],
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
        category: "Embedded",
        duration: "3 months",
        summary:
          "Automatic floor cleaning robot is an automated machine that facilitates the user to keep their place clean and hygienic.",
        problem:
          "Many industries are working in the automation field to make autonomous cleaners. Now a day's major emphasis is given on the field of robotics for decreasing human efforts.",
        solution:
          "Our aim is to construct a floor cleaning Robot that can detect the obstacles & objects in front of it and can continue moving, avoiding the obstacles, until the whole room is cleaned. It has a small brush attached to it to clean the floor.",
        outcomes: [
          "Automatic floor cleaning robot is an automated machine that facilitates the user to keep their place clean and hygienic.",
          "Our aim is to construct a floor cleaning Robot that can detect the obstacles & objects in front of it and can continue moving, avoiding the obstacles, until the whole room is cleaned.",
          "It has a small brush attached to it to clean the floor.",
        ],
        stack: ["Embedded"],
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
  },
  courses: {
    heading: {
      title: "Course",
      subtitle: "\"A Learning Curve is Essential to Growth\"",
    },
    items: [
      {
        name: "Java 8",
        provider: "Be Positive Institute of Technology",
        duration: "3 Months",
      },
      {
        name: "C++ Tutorial",
        provider: "SoloLearn",
        duration: "4 weeks",
      },
      {
        name: "An Introduction to RPA",
        provider: "Automation Anywhere University",
        duration: "15 hours",
      },
      {
        name: "SEO Tutorial",
        provider: "Udemy",
        duration: "1 hour",
      },
      {
        name: "The online Marketing Fundamentals",
        provider: "Google Digital Unlocked",
        duration: "4 weeks",
      },
    ],
  },
  experience: {
    heading: {
      eyebrow: "Skill",
      title: "Professional & Personal Skill",
      subtitle: "Be flexible open to opportunities and never stop Learning.",
    },
    items: [
      {
        role: "Professional Skill",
        company: "",
        period: "",
        location: "",
        description:
          "Be flexible open to opportunities and never stop Learning.",
        achievements: [
          "Java 8 — 85%",
          "Web Development — 90%",
          "C & C++ — 80%",
          "Python — 60%",
          "MAT LAB — 65%",
          "Photoshop — 75%",
        ],
        tags: ["Java 8", "Web Development", "C & C++", "Python", "MAT LAB", "Photoshop"],
      },
      {
        role: "Personal Skill",
        company: "",
        period: "",
        location: "",
        description:
          "It's not what you achieve, it's what you overcome. That's what defines your career.",
        achievements: [
          "Analytical — 86",
          "Creativity — 90",
          "Leadership — 92",
          "Team Work — 90",
          "Adaptable — 80",
        ],
        tags: ["Analytical", "Creativity", "Leadership", "Team Work", "Adaptable"],
      },
    ],
  },
  contact: {
    heading: {
      title: "Contact Me",
      subtitle: "One day or Day one It's your choice\nFeel free to contact with me",
    },
    availability:
      "Er. C. Jegatheesh\nWeb & Software Developer\n27/111, Kollakudi vilai,\nEathavilai, Mekkamandapam (Post),\nKanyakumari - 629166",
    channels: [
      {
        label: "Email",
        value: "jega7354@gmail.com",
        href: "mailto:jega7354@gmail.com",
        icon: Mail,
      },
      {
        label: "Phone",
        value: "+91 9894371096",
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
        label: "Facebook",
        value: "facebook.com/jegatheesh.c",
        href: "https://m.facebook.com/profile.php?id=100007325178542&ref=content_filter",
        icon: Facebook,
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
        label: "LinkedIn",
        value: "linkedin.com/in/jegatheesh-c-038681169",
        href: "https://in.linkedin.com/in/jegatheesh-c-038681169",
        icon: Linkedin,
        external: true,
      },
    ],
  },
};
