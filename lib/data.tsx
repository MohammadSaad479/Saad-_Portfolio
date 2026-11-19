import type { IconType } from "react-icons";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { SiTypescript, SiExpress, SiMongodb, SiShadcnui } from "react-icons/si";
import { FaNodeJs, FaReact, FaGithub, FaGitAlt } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

export const EMAIL = "saadqureshi479@gmail.com";
export const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Contact via portfolio`;
export const X_URL = "https://x.com/MohammadSa3918";
export const GITHUB_URL = "https://github.com/MohammadSaad479";

export type Tech = { name: string; icon: IconType };

export const TECH: Record<string, Tech> = {
  js: { name: "JavaScript", icon: IoLogoJavascript },
  ts: { name: "TypeScript", icon: SiTypescript },
  node: { name: "Node.js", icon: FaNodeJs },
  react: { name: "React", icon: FaReact },
  next: { name: "Next.js", icon: RiNextjsFill },
  tailwind: { name: "Tailwind CSS", icon: RiTailwindCssFill },
  express: { name: "Express", icon: SiExpress },
  github: { name: "GitHub", icon: FaGithub },
  git: { name: "Git", icon: FaGitAlt },
  mongo: { name: "MongoDB", icon: SiMongodb },
  shadcn: { name: "shadcn/ui", icon: SiShadcnui },
  vercel: { name: "Vercel", icon: IoLogoVercel },
  motion: { name: "Framer Motion", icon: TbBrandFramerMotion },
};

export const STACK = Object.values(TECH);

export const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "CepiaLabs",
    meta: "Remote · Full-time",
    period: "Sept 2025 — Present",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGvCo-bS-mZeA/company-logo_200_200/B56Zt1TUT.JoAI-/0/1767199557611/cepialabs_logo?e=1770249600&v=beta&t=kLKCGA4xP4GgCpuQuly7MJAx2nR2bRePszxda6cmdDs",
    summary:
      "Built responsive web apps with React and Tailwind, developed backend APIs using Node.js and Express, deployed projects, and fixed bugs to ensure smooth performance.",
  },
  {
    role: "Full-Stack Developer — Intern",
    company: "Go Hype Media",
    meta: "Full-time",
    period: "Mar 2025 — June 2025",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFXDrcQfxvfwA/company-logo_200_200/company-logo_200_200/0/1731222432134/gohypemedia_logo?e=1770249600&v=beta&t=lj_yN1A9qxDlGkMFFORCYK-Ue4BA2eIg7DgSLDW8i6I",
    summary:
      "Built full-stack web applications with modern frontend tools, reliable backend services, smooth integrations, and stable deployments.",
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  tech: Tech[];
};

export const PROJECTS: Project[] = [
  {
    title: "AI Starter Kit",
    description:
      "A clean, modern starter UI for building AI-powered SaaS apps with Next.js, designed to help developers launch quickly.",
    image: "/aikit1.png",
    url: "https://ai-saas-next-js-template.vercel.app/",
    tech: [TECH.ts, TECH.react, TECH.next, TECH.tailwind],
  },
  {
    title: "Homely — Futuristic Haven",
    description:
      "A real estate website template built with Next.js and Tailwind CSS, ideal for showcasing property listings with a fast, responsive design.",
    image: "/homely1.png",
    url: "https://homely-nextjs-tailwind.vercel.app/",
    tech: [TECH.js, TECH.node, TECH.react, TECH.next, TECH.tailwind],
  },
  {
    title: "Studiova",
    description:
      "A minimal website template for creative agencies, studios, and freelancers to showcase their services, projects, and brand.",
    image: "/studio3.png",
    url: "https://studiova.vercel.app/",
    tech: [TECH.js, TECH.node, TECH.react, TECH.next, TECH.tailwind],
  },
  {
    title: "Adenta — Dental Clinic",
    description:
      "A clean dental clinic website template for showcasing services, doctors, and online appointments.",
    image: "/prot4.png",
    url: "https://adenta.vercel.app/",
    tech: [TECH.js, TECH.node, TECH.react, TECH.next, TECH.tailwind],
  },
];
