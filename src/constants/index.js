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
  firebase,
} from "../assets";
import difmo from "../assets/difmot.png";
import coding from "../assets/codin.png";
import car from "../assets/car.png";
import indecor from "../assets/indecorlko.png";
import akshet from "../assets/akshet.png";
import tolet from '../assets/tolet.png';
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
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Next.js Developer",
    icon: backend,
  },
  {
    title: "Mern Stack Developer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Difmo",
    icon: "src/assets/coding.svg",
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "Difmo",
    icon: "src/assets/difmo.png",
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "difmo",
    icon: "src/assets/carclean.png",
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Difmo",
    icon: meta,
    iconBg: "#E6DEDD",
    // date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Difmo Technologies",
    description:
      "Difmo Technologies is a leading IT company providing high-level internships, training, and software development services. Specializing in cutting-edge technologies, Difmo empowers businesses with innovative, scalable, and efficient solutions while fostering the next generation of tech professionals.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: difmo,
    source_code_link: "https://www.difmo.com/",
  },
  {
    name: "Coding Of World",
    description:
      "Coding of World is a dynamic platform dedicated to empowering developers with cutting-edge coding resources, tutorials, and industry insights. We focus on modern technologies, problem-solving, and innovation, helping programmers enhance their skills and build real-world solutions.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: coding,
    source_code_link: "https://www.codingofworld.com/",
  },
  {
    name: "Car Clean Plus",
    description:
      "Car Clean Plus offers professional car cleaning and detailing services, ensuring your vehicle looks spotless and well-maintained. We provide high-quality, eco-friendly cleaning solutions for a sparkling, refreshed ride every time. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://www.carcleanplus.com/",
  },
  {
    name: "Indecorlko",
    description:
      "Transform your spaces with Indecor LKO, a professional interior design and décor platform offering expert services in home décor, modular kitchens, and personalized design solutions in Lucknow.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: indecor,
    source_code_link: "https://www.indecorlko.com/",
  },
    {
    name: "Akshat Pragati",
    description:
     "The site is titled AkshatPragati. It appears to be a personal/business website; looks like it might include content about skills, services, or projects",tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firbase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: akshet,
    source_code_link: "https://www.akshatpragati.com/",
  },
   {
    name: "TO-LET4RENT",
    description:
     "Develop a platform where users can browse, list, and manage rental properties in a seamless and user-friendly way. The goal was to simplify the rental process by connecting property owners and tenants on one platform.",tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firbase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tolet,
    source_code_link: "https://www.toletforrent.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
