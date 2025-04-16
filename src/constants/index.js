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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Android App Developer",
      icon: creator,
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
      title: "MERN Developer",
      company_name: "Freelancer",
      icon: flower1,
      iconBg: "#e4c258",
      date: "November 2024 - February 2025",
      points: [
        "Developing and maintaining a gold bidding web application using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
        "Collaborating with cross-functional teams including UI/UX designers, product managers, and backend developers to build seamless bidding experiences.",
        "Implementing responsive and user-friendly interfaces while ensuring cross-browser and device compatibility.",
        "Writing clean, maintainable code and participating in code reviews to uphold quality and performance standards.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Freelancer",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "Freelancer",
      icon: flower1,
      iconBg: "#e4c258",
      date: "Jan 2023 - Present",
      points: [
        "Designed intuitive and visually appealing interfaces for a habit tracking app focused on user motivation and daily goal setting.",
        "Created user-centered designs for a news app, prioritizing readability, accessibility, and smooth content navigation.",
        "Conducted user research, wireframing, and prototyping to validate design concepts and improve user experience.",
        "Collaborated closely with developers to ensure accurate implementation of designs and responsive behavior across devices.",
        "Utilized tools like Figma and Adobe XD to deliver high-fidelity mockups and interactive prototypes.",
      ],
    },
    {
      title: "Android Developer",
      company_name: "DEPI Technologies",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Designing and developing Android applications using Kotlin, adhering to modern development standards and best practices.",
        "Currently working on a habit tracking app with features like streak tracking, daily reminders, and progress visualization to enhance user motivation.",
        "Developed a fully functional news app integrating RESTful APIs for real-time content delivery, category-based filtering, and offline access using Room database.",
        "Collaborated with UI/UX designers to build user-friendly and visually consistent interfaces across different screen sizes and resolutions.",
        "Utilized libraries such as Retrofit, Glide, and Jetpack components to streamline development and enhance app performance.",
        "Conducted thorough testing and performance optimization to ensure smooth user experiences and broad device compatibility.",
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };           