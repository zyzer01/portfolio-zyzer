import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaHashnode, FaCss3Alt } from "react-icons/fa6";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import {
  FaNodeJs,
  FaHtml5,
  FaReact,
  FaPython,
  FaWordpress,
  FaLinux,
} from "react-icons/fa";
import { CgFramer } from "react-icons/cg";
import { RiSupabaseFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { Archive, ExperienceItem, OtherProjects } from "./types";

export const socials = [
  {
    icon: <FiGithub />,
    href: "https://github.com/zyzer01",
  },
  {
    icon: <FaXTwitter />,
    href: "https://x.com/zyzer01",
  },
  {
    icon: <FiLinkedin />,
    href: "https://linkedin.com/in/zyzer01",
  },
  {
    icon: <FaHashnode />,
    href: "https://hashnode.com/@zyzer01",
  },
];
export const technologies = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript />,
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript />,
  },
  {
    name: "React.js",
    icon: <FaReact />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "Framer motion",
    icon: <CgFramer />,
  },
  {
    name: "Wordpress",
    icon: <FaWordpress />,
  },
  {
    name: "Firebase",
    icon: <IoLogoFirebase />,
  },
  {
    name: "Supabase",
    icon: <RiSupabaseFill />,
  },
  {
    name: "MongoDB",
    icon: <DiMongodb />,
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql />,
  },
  {
    name: "Linux",
    icon: <FaLinux />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 1,
    company: "Lubesurgeons",
    jobDescription: "Frontend Engineer",
    achievements: [
      "Spearheaded the development of a comprehensive software solution for Lubesurgens, a pioneering startup specializing in vehicle maintenance booking services",
      "Collaborated with cross-functional team of designers and developers to bring the the project to fruition",
      "Took a leading role in building and refining the core components of the software, contributing to its succeful launch and ongoing improvement.",
    ],
    duration: "July 2023 - Nov 2023 * Remote",
    link: "https://lubesurgeons.com",
  },
  {
    id: 2,
    company: "Netvox Networks",
    jobDescription: "Frontend Engineer",
    achievements: [
      "Worked closely with the interdisciplinary team to identify and rank features and requirements. ",
      "Conducted code reviews and offered suggestions for enhancing code quality",
    ],
    duration: "Nov 2022 - May 2023 * Hybrid",
    link: "https://netvox.ng",
  },
  {
    id: 3,
    company: "Cloudnetvox",
    jobDescription: "Web Developer",
    achievements: [
      "Developed the entire Frontend from scratch for Cloudnetvox, identified and resolved software defects and issues, ensuring a seamless user experience.",
      "Identified and resolved software defects and issues, ensuring seamless user experience",
      "Played a pivotal role in advancing software development processes and best practices for continuous improvement.",
    ],
    duration: "June 2021 - Oct 2022 * On-site",
    link: "https://cloudnetvox.com",
  },
];

export const projects = [
  {
    id: 1,
    name: "Lubesurgeons",
    color: "yellow",
    phoneBgColor: "yellow",
    projectLogo: "/images/Lubesurgeons main logo.webp",
    description:
      "Lubesurgeons is a platform that provides convenience with its on-demand automobile repair service. You can get swift and expert car care services delivered to your location. Enjoy transparent pricing, skilled technicians, and a seamless user experience, all at your fingertips.",
    repository: "https://github.com/zyzer01/lubesurgeons",
    liveLink: "https://lubesurgeons.com",
    isLive: true,
    isOnGithub: true,
    technologies:
      "React.js • Typescript • Supabase • TailwindCSS • Framer motion • Express.js ",
  },
  {
    id: 2,
    name: "Cloudnetvox",
    color: "blue",
    phoneBgColor: "blue",
    projectLogo: "/images/cloudnetvox logo.png",
    description:
      "Cloudnetvox is a leading domains and web hosting provider offering comprehensive suites of services tailored to meet the diverse needs of businesses and individuals alike with robust hosting solutions ",
    repository: "https://github.com/zyzer01/cloudnetvox-new",
    liveLink: "https://cloudnetvox.vercel.app",
    isLive: true,
    isOnGithub: true,
    technologies:
      "Next.js • Typescript • TailwindCSS • Framer motion • Express.js ",
    isReversed: true,
  },
  {
    id: 3,
    name: "Cohosts",
    color: "purple",
    phoneBgColor: "purple",
    projectLogo: "/images/Cohosts-1-1.png",
    description:
      "Cohost is a UK Real Estate agency that offer higher rental income as well as flexible letting (short, medium, and long let). CoHosts handles everything from booking to check-out, housekeeping and maintenance.",
    repository: "https://github.com/zyzer01/cloudnetvox-new",
    liveLink: "https://sample.afiaoha.com",
    isLive: true,
    isOnGithub: false,
    technologies: "Wordpress • Elementor • Slider Revolution",
  },
];

export const otherProjects: OtherProjects[] = [
  {
    id: 1,
    name: "Wellness AI",
    description:
      "WellnessAI is an AI-powered chat bot designed to help users improve their overall well-being through health and wellness recommendations.",
    technologies: "Next.js • Typescript • GPT 3.5 • Supabase • Radix UI",
    repository: "https://github.com/zyzer01/wellness-ai",
    liveLink: "https://wellnessai.vercel.app",
    isLive: true,
    isOnGithub: true,
  },
  {
    id: 2,
    name: "Census Survey",
    description:
      "A web app for conducting census surveys, allowing users to fill in their details, and admin dashboard to manage respondent info.",
    technologies: "Next.js • Typescript • Prisma • PostgreSQL",
    repository: "https://github.com/zyzer01/census-survey",
    liveLink: "https://census-survey.vercel.app",
    isLive: true,
    isOnGithub: true,
  },
  {
    id: 3,
    name: "Acerealestates",
    description:
      "A Real Estate Company website where realtors can list properties, with CRM and analytics.",
    technologies: "Wordpress • Elementor",
    liveLink: "https://acerealestates.ng",
    isLive: true,
    isOnGithub: false,
  },
  {
    id: 4,
    name: "Flight Booker",
    description:
      "Flight booking page. The project is comprised of filtering logic and mapping of multi-nested data.",
    technologies: "React.js • Javascript • Tailwindcss",
    repository: "https://github.com/zyzer01/travel-app",
    liveLink: "https://travel-app-zyzer01.vercel.app",
    isLive: true,
    isOnGithub: true,
  },
  {
    id: 5,
    name: "Daily Times Blog",
    description:
      "A simple Blog that allows CRUD (Create, Read, Update, Delete) operations ",
    technologies: "Node.js (Express) • MongoDB • Javascript • EJS",
    repository: "https://github.com/Zyzer01/DailyTimes-Blog",
    isLive: false,
    isOnGithub: true,
  },
  {
    id: 6,
    name: "HAA Group",
    description:
      "Like AirBnB, HAA provides a unique collection of magnificent properties to rent for short stays to guests traveling to and within the UK.",
    technologies: "Wordpress • Elementor",
    liveLink: "https://ext.afiaoha.com",
    isLive: true,
    isOnGithub: false,
  },
];

export const archive: Archive[] = [
  {
    id: 1,
    title: "Weather App",
    year: 2021,
    technologies: "Node.js (Express) • Javascript • EJS",
    repository: "https://github.com/Zyzer01/WeatherApp",
    liveLink: "https://zyzer-weather.herokuapp.com",
    isLive: true,
    isOnGithub: true,
  },
  {
    id: 2,
    title: "Realifek9",
    year: 2022,
    technologies: "Wordpress • Elementor",
    liveLink: "https://realifek9.com/",
    isLive: true,
    isOnGithub: false,
  },
  {
    id: 3,
    title: "Netvox",
    year: 2022,
    technologies: "Wordpress • Elementor • Essential Addon",
    repository: "",
    liveLink: "https://netvox.ng",
    isLive: true,
    isOnGithub: false,
  },
  {
    id: 4,
    title: "TodoList Curator",
    year: 2022,
    technologies: "Node.js (express) • EJS • MongoDB",
    repository: "https://github.com/Zyzer01/Todolist",
    liveLink: "",
    isLive: false,
    isOnGithub: true,
  },
  {
    id: 5,
    title: "Basic Node Authentication",
    year: 2022,
    technologies: "Node.js (express) • EJS • MongoDB",
    repository: "https://github.com/Zyzer01/Todolist",
    liveLink: "",
    isLive: false,
    isOnGithub: true,
  },
];
