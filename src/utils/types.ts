export type ExperienceItem = {
  id: number;
  company: string;
  jobDescription: string;
  duration: string;
  achievements: string[];
  link: string;
};

export type OtherProjects = {
  id: number;
  name: string;
  description: string;
  technologies: string;
  repository?: string;
  liveLink?: string;
  isLive: boolean;
  isOnGithub: boolean;
};


export type Archive = {
  id: number,
  title: string,
  year: number,
  technologies: string,
  repository?: string,
  liveLink?: string,
  isLive: boolean,
  isOnGithub: boolean,
}


export interface ProjectProps {
  id: number,
  name: string,
  color: string,
  phoneBgColor: string,
  projectLogo: string,
  description: string,
  repository: string,
  liveLink: string,
  isLive: boolean,
  isOnGithub: boolean,
  technologies: string,
  isReversed?: boolean,
}
