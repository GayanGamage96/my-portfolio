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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    hotcat,
    ebi,
    fiverr,
    nextjs,
    reactNative,
    mui
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
      title: "Content Creator",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Next.js",
      icon: nextjs,
    },
    {
      name: "React Native",
      icon: reactNative,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Material UI",
      icon: mui,
    },
  ];
  
  const experiences = [
    {
      title: "Trainee Software Engineer",
      company_name: "Enterprise Business Intelligence (pvt) ltd",
      icon: ebi,
      iconBg: "#E6DEDD",
      date: "August 2023 - October 2024",
      points: [
        "Developing and maintaining scalable web applications using React.js, Node.js, and TypeScript.",
        "Building dynamic and responsive user interfaces with Next.js to enhance user experience.",
        "Designing and implementing robust backend APIs and services using Node.js and Express.",
        "Working with MongoDB to design and manage databases for storing and retrieving application data efficiently.",
        "Collaborating with cross-functional teams to gather requirements and deliver end-to-end solutions.",
        "Ensuring code quality and maintainability through best practices, code reviews, and TypeScript typing.",
        "Optimizing application performance and implementing SEO strategies for Next.js applications.",
        "Debugging and resolving issues across the stack to ensure smooth functionality and user satisfaction.",
      ],
    },
    {
      title: "Intern Software Engineer",
      company_name: "Hotcat Technologies",
      icon: hotcat,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "2D Animator",
      company_name: "Freelancing",
      icon: fiverr,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Present",
      points: [
        "Creating 2D animations for various projects, including videos, games, and promotional content.",
        "Collaborating with clients and creative teams to understand project requirements and deliver high-quality animations.",
        "Designing storyboards, character animations, and motion graphics to bring concepts to life.",
        "Utilizing industry-standard tools such as Adobe Animate, Toon Boom, or After Effects for animation creation.",
        "Ensuring animations meet project deadlines while maintaining consistency in style and quality.",
        "Incorporating client feedback to refine animations and improve the overall visual storytelling.",
        "Staying updated on the latest animation trends and techniques to enhance creative output.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };