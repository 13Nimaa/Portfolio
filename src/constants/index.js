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
  git,
  nextjs,
  meta,
  holisticare,
  avatalk,
  hominex,
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
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: creator,
  },
  {
    title: "TypeScript Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
    name: "React Native",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git & GitHub",
    icon: git,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Andisheh Pezhvak Farzin",
    icon: meta,
    iconBg: "#383E56",
    date: "June 2024 - February 2026",
    points: [
      "Designing and implementing UIs for internal and enterprise web applications using React and TypeScript.",
      "Building data-driven admin dashboards with a focus on readability and performance.",
      "Creating modular, reusable components based on solid design patterns.",
      "Managing application state and integrating dynamically with REST APIs.",
      "Collaborating closely with Back-End and UI/UX teams to improve product quality and development flow.",
      "Optimizing component rendering and data handling to eliminate unnecessary re-renders.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Hominex",
    icon: web,
    iconBg: "#E6DEDD",
    date: "January 2026 - Present",
    points: [
      "Developing the front-end of a real estate marketplace that connects builders, agencies, and home buyers on a unified platform.",
      "Building rich property listing pages with advanced search and filtering, map integration, and project showcases for developers.",
      "Implementing a responsive, performance-optimized UI using React, TypeScript, and TailwindCSS.",
      "Integrating REST APIs for real-time property data, inquiry management, and user authentication flows.",
      "Contributing to an admin dashboard for managing listings, agents, and client inquiries.",
      "Working closely with the product and design team to continuously improve UX across all device sizes.",
    ],
  },
];

const projects = [
  {
    name: "Holisticare",
    description:
      "AI-based therapy clinic web application built with React and TypeScript. Includes a patient dashboard, appointment management, and booking forms, with dynamic REST API integration and a responsive UI built using TailwindCSS and Material UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: holisticare,
    source_code_link: "https://holisticare.vercel.app/",
  },
  {
    name: "Avatalk",
    description:
      "Smart digital business card platform with a modern responsive UI and an admin dashboard for tracking user engagement. Built with scalable, reusable components and social media integrations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: avatalk,
    source_code_link: "https://avatalk.me/",
  },
  {
    name: "Hominex",
    description:
      "Real estate marketplace that brings builders, agencies, and home buyers together on a single platform. Features property listings with rich filters, project showcases for developers, and an admin dashboard for managing listings and inquiries — built with a responsive, performance-focused UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hominex,
    source_code_link: "https://hominex.ir/",
  },
];

export { services, technologies, experiences, projects };
