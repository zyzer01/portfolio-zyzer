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
    company: 'Ubuntu',
    achievements: ['Ubuntu Server 14', 'Ubuntu Server 16', 'Ubuntu Server 18', 'Ubuntu Server 20'],
    desc: 'Ubuntu Server stands out as a widely used and adaptable operating system specifically crafted for server environments. Rooted in the Linux kernel, it boasts consistent long-term support (LTS) releases. Renowned for its reliability, security, and a broad range of available software, Ubuntu Server proves to be an excellent option for hosting web services, databases, and various applications.',
  },
  {
    id: 2,
    company: 'Debian',
    achievements: ['Debian 10', 'Debian 11', 'Debian 12'],
    desc: 'Debian is recognized as a swift and resilient operating system, built upon the Linux kernel. It is meticulously assembled using open-source software and flourishes thanks to the collective contributions of the Debian Project community. Embraced by many system administrators and industry professionals, Debian has emerged as the preferred distribution.',
  },
  {
    id: 3,
    company: 'Centos',
    achievements: ['CentOS 7', 'CentOS Stream 8', 'CentOS Stream 8'],
    desc: 'CentOS, a free Linux distribution, remains fully functionally compatible with RHEL but lacks commercial support. CentOS generally offers comprehensive long-term support, along with dedicated efforts towards security and stability-focused development, ensuring ongoing maintenance updates for every major version.',
  },
];
