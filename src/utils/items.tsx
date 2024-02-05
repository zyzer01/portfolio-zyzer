import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaXTwitter, FaHashnode, FaCss3Alt } from 'react-icons/fa6';
import { BiLogoTypescript, BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5';
import { FaNodeJs, FaHtml5, FaReact, FaPython, FaWordpress, FaLinux } from 'react-icons/fa';
import { CgFramer } from 'react-icons/cg';
import { RiSupabaseFill } from 'react-icons/ri';
import { DiMongodb } from 'react-icons/di';
import { ExperienceItem } from './types';

export const socials = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/zyzer01',
  },
  {
    icon: <FaXTwitter />,
    href: 'https://x.com/zyzer01',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://linkedin.com/in/zyzer01',
  },
  {
    icon: <FaHashnode />,
    href: 'https://hashnode.com/@zyzer01',
  },
];
export const technologies = [
  {
    name: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    name: 'Javascript',
    icon: <IoLogoJavascript />,
  },
  {
    name: 'Typescript',
    icon: <BiLogoTypescript />,
  },
  {
    name: 'React.js',
    icon: <FaReact />,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    name: 'Python',
    icon: <FaPython />,
  },
  {
    name: 'Framer motion',
    icon: <CgFramer />,
  },
  {
    name: 'Wordpress',
    icon: <FaWordpress />,
  },
  {
    name: 'Firebase',
    icon: <IoLogoFirebase />,
  },
  {
    name: 'Supabase',
    icon: <RiSupabaseFill />,
  },
  {
    name: 'MongoDB',
    icon: <DiMongodb />,
  },
  {
    name: 'PostgreSQL',
    icon: <BiLogoPostgresql />,
  },
  {
    name: 'Linux',
    icon: <FaLinux />,
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />,
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 1,
    company: 'Lubesurgeons',
    jobDescription: 'Software Engineer @ Lubesurgeons',
    achievements: [
      'Worked closely with the interdisciplinary team to identify and rank features and requirements. Created and executed unit tests and carried out system testing to maintain the entire infrastructure quality.',
      'Worked closely with the interdisciplinary team to identify and rank features and requirements. Created and executed unit tests and carried out system testing to maintain the entire infrastructure quality.',
    ],
    duration: 'Aug 2023 - Oct 2023 * Remote',
  },
  {
    id: 2,
    company: 'Cloudnetvox',
    jobDescription: 'Frontend Developer @ Lubesurgeons',
    achievements: [
      'Worked closely with the interdisciplinary team to identify and rank features and requirements. Created and executed unit tests and carried out system testing to maintain the entire infrastructure quality.',
      'Worked closely with the interdisciplinary team to identify and rank features and requirements. Created and executed unit tests and carried out system testing to maintain the entire infrastructure quality.',
    ],
    duration: 'Aug 2023 - Oct 2023 * Remote',
  },
  {
    id: 3,
    company: 'Netvox Networks',
    jobDescription: 'Developer @ Lubesurgeons',
    achievements: [
      'Worked closely with the interdisciplinary team to identify and rank features and requirements. Created and executed unit tests and carried out system testing to maintain the entire infrastructure quality.',
      'Worked closely with the interdisciplinary team to identify and rank features and requirements. Created and executed unit tests and carried out system testing to maintain the entire infrastructure quality.',
    ],
    duration: 'Aug 2023 - Oct 2023 * Remote',
  },
];

export const projects = [
  {
    id: 1,
    name: 'Lubesurgeons',
    color: 'from-yellow-600',
    description:
      'Lubesurgeons is a platform that provides convenience with its on-demand automobile repair service. You can get swift and expert car care services delivered to your location. Enjoy transparent pricing, skilled technicians, and a seamless user experience, all at your fingertips.',
    repository: 'https://github.com/zyzer01/lubesurgeons',
    liveLink: 'https://lubesurgeons.com',
    isLive: true,
    technologies: 'React.js • Typescript • Supabase • TailwindCSS • Framer motion • Express.js ',
  },
];
