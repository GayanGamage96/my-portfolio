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
  mui,
  pro1,
  pro2,
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
    title: "2D Animator",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
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
      "Great work as always! I’m always satisfied with the work provided in such a short time frame. Highly recommended.",
    name: "Kerron Stark",
    designation: "Buyer",
    company: "USA",
    image: fiverr,
  },
  {
    testimonial:
      "Good communication, delivered on time and as per instructions. Very receptive to feedback and revisions!",
    name: "Humbug",
    designation: "Buyer",
    company: "Sweden",
    image: fiverr,
  },
  {
    testimonial:
      "Madura delivered Amazing results and made perfect and accurate final tweaks according to feedback. Very professional and quick turnaround, absolutely brilliant service!",
    name: "mdnperera",
    designation: "Buyer",
    company: "United Kingdom",
    image: fiverr,
  },
  {
    testimonial: "Always a pleasure and I always get exactly what I ask for!",
    name: "Kerron Stark",
    designation: "Buyer",
    company: "USA",
    image: fiverr,
  },
];

const projects = [
  {
    name: "Hospital-System",
    description:
      "A demo system  for scheduling doctor appointments and securely managing patient records. It allows patients to book appointments conveniently while providing doctors with tools to organize schedules and access medical histories efficiently.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Appwrite",
        color: "blue-text-gradient",
      },
    ],
    image: pro1,
    source_code_link: "https://github.com/GayanGamage96/patient-management-system",
  },
  {
    name: "LEARNQUEST",
    description:
      "A web application that enables users to browse and search for courses across various categories, view detailed course descriptions, and purchase courses directly through the platform. ",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "DynamoDB",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn",
        color: "pink-text-gradient",
      },
    ],
    image: pro2,
    source_code_link: "https://github.com/GayanGamage96/learning-management-system",
  },
];

export { services, technologies, experiences, testimonials, projects };
