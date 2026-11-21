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

export type Job = {
  role: string;
  company: string;
  meta: string;
  period: string;
  logo?: string;
  points: string[];
};

export const EXPERIENCE: Job[] = [
  {
    role: "Frontend Developer",
    company: "CepiaLabs",
    meta: "Greater Noida, India",
    period: "Dec 2025 — Present",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGvCo-bS-mZeA/company-logo_200_200/B56Zt1TUT.JoAI-/0/1767199557611/cepialabs_logo?e=1770249600&v=beta&t=kLKCGA4xP4GgCpuQuly7MJAx2nR2bRePszxda6cmdDs",
    points: [
      "Migrated legacy JavaScript pages to Next.js and React, cutting page load time by ~30% and making the codebase easier to work in.",
      "Turned Figma screens into pixel-accurate, responsive layouts and helped ship a redesign that lifted user retention by 20%.",
      "Built reusable components (forms, modals, tables, navigation) used team-wide, serving 1,000+ monthly active users.",
      "Fixed cross-browser and mobile layout bugs and reviewed pull requests to keep the UI consistent.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Go Hype Media",
    meta: "New Delhi, India",
    period: "Sept 2024 — Oct 2025",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFXDrcQfxvfwA/company-logo_200_200/company-logo_200_200/0/1731222432134/gohypemedia_logo?e=1770249600&v=beta&t=lj_yN1A9qxDlGkMFFORCYK-Ue4BA2eIg7DgSLDW8i6I",
    points: [
      "Rebuilt the React component library, speeding up new page builds and removing most UI inconsistencies.",
      "Built e-commerce checkout screens in React connected to Stripe, tested across 500+ test transactions.",
      "Added code splitting and lazy loading, reducing initial load time by 40% and raising the Lighthouse score.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "Stack Decode",
    meta: "Noida, India",
    period: "July 2023 — Aug 2024",
    points: [
      "Turned client designs into clean, responsive websites with HTML, CSS, and JavaScript across phones, tablets, and desktops.",
      "Built sliders, tabs, form validation, and dropdowns in plain JavaScript, later rebuilding some as React components.",
      "Helped set up new Next.js and React projects and handled basic SEO: meta tags, semantic HTML, image optimization.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  image?: string;
  url: string;
  tech: Tech[];
};

export const PROJECTS: Project[] = [
  {
    title: "ToolsTree",
    description:
      "60+ browser-based tools with drag-and-drop uploads, live previews, and one-click downloads. Server-rendered for speed and SEO, with no backend needed.",
    image: "/toolstree.png",
    url: "https://toolstree.top",
    tech: [TECH.ts, TECH.react, TECH.next, TECH.tailwind],
  },
  {
    title: "SocialDownlodr",
    description:
      "Video downloader for 10+ platforms with smart link detection, HLS playback via hls.js, and 11 languages with next-intl. Built on Next.js 16 and React 19.",
    image: "/socialdownlodr.png",
    url: "https://socialdownlodr.com",
    tech: [TECH.ts, TECH.react, TECH.next, TECH.tailwind],
  },
  {
    title: "JobSite",
    description:
      "A job board that pulls openings straight from company career pages, with 3,000+ live listings refreshed every 6 hours. Search by title, skill, or location, and browse by category or remote.",
    image: "/jobsite.png",
    url: "https://jobprofile-one.vercel.app/",
    tech: [TECH.react, TECH.next, TECH.tailwind, TECH.node, TECH.express, TECH.mongo],
  },
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
