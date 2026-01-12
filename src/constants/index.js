import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  delivery,
  html,
  css,
  reactjs,
  courseapp,
  redux,
  tailwind,
  nodejs,
  tourapp,
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
  img1,
  img3,
  studynotion,
  prescripto,
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
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Shopify Theme ",
    icon: backend,
  },
  {
    title: "Digital Marketer",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Oct 2023 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Tesla",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "May 2024 - Nov 2024",
    points: [
      "Developing and maintaining robust backend services and APIs using Node.js and related technologies.",
      "Collaborating with frontend developers, designers, and product managers to deliver scalable and reliable applications",
      "Designing and managing databases, ensuring data integrity, security, and optimal performance.",
      "Implementing server-side logic, authentication, and authorization.",
    ],
  },
    {
    title: "UI/UX Designer",
    company_name: "Meta",
    icon: figma,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Sep 2025",
    points: [
      "Designing intuitive interfaces and user experiences through wireframes, prototypes, and design systems.",
      "Creating high-fidelity designs in Figma and refining them based on usability feedback.",
      "Ensuring accessibility, visual consistency, and smooth user flows across products.",
      "Working closely with developers to translate designs into polished, user-friendly interfaces.",
    ],
  },
  {
    title: "Shopify Theme Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2025 - Present",
    points: [
      "Building custom Shopify themes from scratch and customizing existing themes using Liquid, HTML, CSS, and JavaScript.",
      "Creating reusable sections, blocks, and templates to give merchants full control over their storefront content.",
      "Optimizing storefront performance, accessibility, and conversion-focused UI for better user experience.",
      "Working closely with designers and store owners to implement brand-specific designs and eCommerce functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aryan proved me wrong.",
    name: "Raj Sharma",
    designation: "CFO",
    company: "Glossier",
    image: img1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aryan does.",
    name: "Vipin Bansal",
    designation: "COO",
    company: "Tattly",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Aryan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Chinmay Pandey",
    designation: "CTO",
    company: "Musa",
    image: img3,
  },
];

const projects = [
  {
    name: "Study Notion",
    description:
      "Web-based platform that enables users to access courses, enroll in programs, track progress, and manage learning resources from various educators.",
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
    image: studynotion,
    source_code_link: "https://github.com/SharmaAryan7/studynotion",
  },
  {
    name: "Prescripto",
    description:
      "Web application that enables users to search for doctors, book appointments, view consultation availability based on the location.",
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
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: prescripto,
    source_code_link: "https://github.com/SharmaAryan7/Dr-Appointment",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tourapp,
    source_code_link: "https://github.com/SharmaAryan7/toursApp",
  },
    {
    name: "Course App",
    description:
      "An informative course showcase designed to present clear details about each program, including curriculum structure, topics covered, and learning outcomes.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "react_redux",
        color: "pink-text-gradient",
      },
    ],
    image: courseapp,
    source_code_link: "https://github.com/SharmaAryan7/courses",
  },
    {
    name: "Delivery App",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: delivery,
    source_code_link: "https://github.com/SharmaAryan7/delivery",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
