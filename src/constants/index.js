import {
  backend,
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
  docker,
  ampath,
  next,
  materialui,
  admin,
  store,
  booking,
  admindash,
  gym,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Next JS",
    icon: next,
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
    name: "Material UI",
    icon: materialui,
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "USAID AMPATH Kenya",
    icon: ampath,
    iconBg: "#383E56",
    date: "August 2019 - January 2020",
    points: [
      "Design and Implement segregated and amalgamated reports for the pre-exposure prophylaxis patient program.",
      "Developed a streamlined application empowering the quality assurance team to efficiently execute tasks traditionally managed by the on-call developers.",
      "Increased code test coverage by 33% by writing more unit and integration tests.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "USAID AMPATH Kenya",
    icon: ampath,
    iconBg: "#E6DEDD",
    date: "February 2021 - Present",
    points: [
      "Collaborating with cross-functional teams including product managers, quality assurance team and other developers to create essential features for the AMPATH Point of Care electronic medical records system.",
      "Creating features to meet the data collection and reporting requirements of over 300+ care sites across the country",
      "Writing system and integration tests for the AMPATH Point of Care System.",
      "Architected and implemented robust APIs, facilitating seamless communication and data exchange between different components of the system.",
      "Conducting bug fixes on the AMPATH Point of Care System",
    ],
  },
];

const projects = [
  {
    name: "E-commerce admin dashboard",
    description:
      "An E-commerce admin dashboard that allows users to effortlessly manage products, categories, orders, and store settings, enhancing the operational efficiency of the eCommerce platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link:
      "https://github.com/sharleenawinja/full-stack-e-commerce/tree/main/ecommerce-admin",
    live_site:
      "https://full-stack-e-commerce-theta.vercel.app/sign-in?redirect_url=https%3A%2F%2Ffull-stack-e-commerce-theta.vercel.app%2F",
  },
  {
    name: "E-commerce store",
    description:
      "An e-commerce store, facilitating seamless product exploration and streamlined checkout processes for users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: store,
    source_code_link:
      "https://github.com/sharleenawinja/full-stack-e-commerce/tree/main/ecommerce-store",
    live_site: "https://full-stack-e-commerce-8eyf.vercel.app/",
  },
  {
    name: "Booking app",
    description:
      "A web application mirroring the functionality of Airbnb, providing users with a platform to discover, book, and manage accommodations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
      {
        name: "mongo db",
        color: "green-text-gradient",
      },
    ],
    image: booking,
    source_code_link:
      "https://github.com/sharleenawinja/airbnb-clone/tree/main",
    live_site: "https://booking-web-app-pied.vercel.app/",
  },
  {
    name: "Gym",
    description:
      "A web application catering to fitness enthusiasts, empowering them to explore diverse gym classes and conveniently enroll in their preferred sessions.",
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
    image: gym,
    source_code_link:
      "https://github.com/sharleenawinja/react-typescript-fitness-app",
    live_site: "https://react-typescript-fitness-app.vercel.app/",
  },
  {
    name: "Admin Dashboard",
    description:
      "A comprehensive admin dashboard page that visually presents vital statistics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
      {
        name: "mongo db",
        color: "green-text-gradient",
      },
    ],
    image: admindash,
    source_code_link:
      "https://github.com/sharleenawinja/admin_dashboard/tree/main",
    live_site: "https://admin-dashboard-frontend-bbjm.onrender.com/",
  },
];

export { services, technologies, experiences, projects };
