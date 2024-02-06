export interface ButtonProps {
  text: string;
  href: string;
}

export interface HeadingProps {
  projectName: string;
  color: string;
}

export interface SectionHeadingProps {
  text: string;
}

export interface ColorVariants {
  [key: string]: string;
}

export interface PhoneProps {
  imageSrc: any;
  bgColor: string;
  hasTopBanner?: boolean;
}
