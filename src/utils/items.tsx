import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaXTwitter, FaHashnode, FaCss3Alt } from 'react-icons/fa6';
import { BiLogoTypescript } from 'react-icons/bi';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaNodeJs, FaHtml5, FaReact, FaPython, FaWordpress, FaLinux } from 'react-icons/fa';
import { CgFramer } from 'react-icons/cg';

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
    name: 'Linux',
    icon: <FaLinux />,
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />,
  },
];

export const experience = [
  {
    id: 1,
    company: 'Lubesurgeons',
    achievements: ['Ubuntu Server 14', 'Ubuntu Server 16', 'Ubuntu Server 18', 'Ubuntu Server 20'],
    duration: 'Aug 2023 - Oct 2023 * Remote',
  },
  {
    id: 2,
    company: 'Cloudnetvox',
    achievements: ['Debian 10', 'Debian 11', 'Debian 12'],
    duration: 'Aug 2023 - Oct 2023 * Remote',
  },
  {
    id: 3,
    company: 'Netvox Networks',
    achievements: ['CentOS 7', 'CentOS Stream 8', 'CentOS Stream 8'],
    desc: 'duration',
  },
];
