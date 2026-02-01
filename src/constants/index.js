import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    flower1,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    pgc,
    riskly,
    trace,
    elevate,
    Nextkey,
    sams,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Android Native Developer",
      icon: creator,
    },
    {
      title: "Cross-platform Mobile Developer",
      icon: web,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Web Developer",
      company_name: "Prompt General Contracting – Abu Dhabi",
      icon: flower1,
      iconBg: "#e4c258",
      date: "Aug 2025 – Present",
      points: [
        "Collaborated closely with stakeholders and internal teams to design and develop a full-stack employee HR portal handling leave requests, salary certificates, insurance, and visa workflows.",

"Built and maintained RESTful APIs using Node.js and Express.js with JWT-based authentication and role-based approval workflows.",

"Designed and managed relational SQL database schemas to track employee records, requests, approvals, and request lifecycle states.",

"Developed a responsive React.js frontend focused on usability, clarity, and real-time request status updates.",

"Handled deployment on a Linux-based production server, including environment configuration, database updates, performance optimization, and ongoing maintenance.",

"Continuously improved system reliability by debugging issues, optimizing queries, and enhancing overall user experience.",
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "Exceed IT Services – Abu Dhabi",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aug 2025 – Sep 2025",
      points: [
       "Worked collaboratively on multiple web and mobile application projects, contributing across frontend, backend, and database layers.",

"Developed backend services using Node.js and Express.js, implementing RESTful APIs, JWT-based authentication, and role-based access control.",

"Designed and managed MongoDB and MySQL databases, including schema design, data modeling, and CRUD operations.",

"Built analytics dashboards and data visualizations to support business insights and decision-making.",

"Participated in Android application development using Kotlin and Jetpack Compose, integrating Firebase authentication, cloud synchronization, and OCR functionality.",

"Assisted in integrating data analysis and machine learning components into web and Android applications to enhance application intelligence.",
      ],
    },
    {
      title: "Android Mobile Application Developer",
      company_name: "Digital Egypt Pioneers Initiative (DEPI)",
      icon: flower1,
      iconBg: "#e4c258",
      date: "Jan 2023 - Present",
      points: [
        "Completed a 6-month intensive, hands-on training program focused on native Android development using Kotlin and modern Android tools.",

"Developed Android applications using Jetpack Compose, handling UI state management, navigation, recomposition, and lifecycle-aware components.",

"Applied MVVM architecture and Repository pattern to build modular, scalable, and maintainable codebases.",

"Integrated Firebase services including authentication, cloud data storage, and real-time synchronization with offline persistence.",

"Implemented notifications, background tasks, coroutines, and Kotlin Flows to build responsive and efficient mobile applications.",

"Applied best practices in localization, accessibility, performance optimization, and scalable mobile app design.",
      ],
    },

    {
      title: "Hotel Booking Mobile Application UI/UX Designer",
      company_name: "Freelancer",
      icon: flower1,
      iconBg: "#e4c258",
      date: "May 2024 - July 2024",
      points: [
        "Collaborated with stakeholders to design an intuitive hotel booking experience focused on seamless room discovery, booking, and payment flows.",

"Created user-centered wireframes and high-fidelity UI prototypes with strong emphasis on usability and visual hierarchy.",

"Applied UX research principles to improve navigation clarity, reduce friction, and enhance user satisfaction.",

"Ensured responsive and consistent UI design across different screen sizes and device types.",

"Worked closely with developers to ensure accurate design handoff and faithful implementation.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
     {
      name: "PGC HR Portal",
      description:
        "A full-stack employee management platform supporting leave requests, salary certificates, insurance, and visa workflows with multi-level approvals and real-time status tracking.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
          name: "JWT Authentication",
          color: "blue-text-gradient",
        },
        {
          name: "Linux Server Deployment",
          color: "green-text-gradient",
        },
      ],
      image: pgc,
      source_code_link: "https://github.com/",
    },
    {
      name: "Riskly",
      description:
        "A backend-driven risk management system focused on secure advisor authentication,and predicting the student dropout or fail risk based on machine learning analytics,  automated email alerts for high-risk cases,creating and exporting advisor students pdf reports.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
          name: "JWT Authentication",
          color: "blue-text-gradient",
        },
        {
          name: "RESTful APIs",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning Integration",
          color: "pink-text-gradient",
        },
      ],
      image: riskly,
      source_code_link: "https://github.com/",
    },
    {
      name: "SAMS",
      description:
        "A web-based academic management and analytics platform for tracking students, teachers, courses, and performance metrics with interactive data visualizations.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Mongoose",
          color: "blue-text-gradient",
        },
        {
          name: "RESTful APIs",
          color: "green-text-gradient",
        },
        {
          name: "Chart.js",
          color: "pink-text-gradient",
        },
      ],
      image: sams,
      source_code_link: "https://github.com/",
    },
     {
      name: "TraceNotes",
      description:
        "An Android application that combines OCR, AI-powered text summarization, and cloud synchronization to help users capture, organize, and understand their notes efficiently.",
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "Jetpack Compose",
          color: "green-text-gradient",
        },
        {
          name: "Firebase Auth",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase Firestore",
          color: "blue-text-gradient",
        },
        {
          name: "Tesseract OCR",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
                {
          name: "Jetpack Compose",
          color: "blue-text-gradient",
        },
        {
          name: "T5 Transformer",
          color: "green-text-gradient",
        },
      ],
      image: trace,
      source_code_link: "https://github.com/",
    },
    {
      name: "Elevate",
      description:
        "A modern habit tracking Android app that helps users build consistent routines through habit creation, notifications, streak tracking, and bilingual support.",
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "Jetpack Compose",
          color: "green-text-gradient",
        },
        {
          name: "Firebase Auth",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase Firestore",
          color: "blue-text-gradient",
        },
        {
          name: "Notifications API",
          color: "green-text-gradient",
        },
        {
          name: "Localization",
          color: "pink-text-gradient",
        },
      ],
      image: elevate,
      source_code_link: "https://github.com/",
    },
    {
      name: "NewsPulse Application",
      description:
        "An Android application that aggregates and displays real-time news from various sources,multiple countries and languages, allowing users to browse by category, search keywords, and personalize their news feed.",
      tags: [
        {
          name: "kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "newsapi",
          color: "green-text-gradient",
        },
        {
          name: "xml",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },

      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    
    {
    name: "Hotel Booking Website",
    description:
      "A full-featured hotel booking platform that allows users to browse, filter, and reserve rooms, manage reservations, reviews, and payment gateway support.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hotel Booking Mobile Application",
    description:
      "A user-centered mobile UI/UX design project focused on creating a smooth hotel discovery, booking, and payment experience.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: Nextkey,
    source_code_link: "https://github.com/",
  },
  ];
  
  export { services, technologies, experiences, testimonials, projects };           