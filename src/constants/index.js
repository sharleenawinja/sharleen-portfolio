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
  openmrs,
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
    date: "January 2019 - June 2019",
    points: [
      "Developed a streamlined application empowering the quality assurance team to efficiently execute tasks traditionally managed by the on-call developers.",
      "Increased code test coverage by 33% by writing more unit and integration tests.",
      "Created API endpoints tailored to the organization's requirements, hence improving data accessibility.",
      "Conducted bug fixes on the Point of Care system, hence resolving critical issues within an average turnaround time of 24 hours and ensuring uninterrupted workflow for 300+ care sites.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "USAID AMPATH Kenya",
    icon: ampath,
    iconBg: "#E6DEDD",
    date: "July 2019 - Present",
    points: [
      "Designed and Implemented segregated and amalgamated reports for the pre-exposure prophylaxis patient program.",
      "Collaborating with cross-functional teams including product managers, quality assurance team and other developers to create essential features for the AMPATH Point of Care electronic medical records system.",
      "Creating features to meet the data collection and reporting requirements of over 300+ care sites across the country",
      "Wrote system and integration tests for the AMPATH Point of Care System.",
      "Created robust APIs, facilitating seamless communication and data exchange between different components of the system.",
      "Conducted bug fixes on the AMPATH Point of Care System",
    ],
  },
  {
    title: "Open Source Developer",
    company_name: "OpenMRS",
    icon: openmrs,
    iconBg: "#383E56",
    date: "October 2020 - Present",
    points: [
      "Leveraged JavaScript, React.js, TypeScript, and the Carbon Design System by actively contributing to bug fixes and improving overall code quality and user experience.",
      "Engaged in weekly squad calls, coffee chats, and product design meetings to provide valuable insights and collaborate with the team on feature enhancements.",
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
