import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import we from '@/public/we.jpg'
import shoptop1 from '@/public/shoptop1.jpg'
import Blog from "@/public/BLog.jpg"
import webscraper from '@/public/webscraper.jpg'
import real from '@/public/real.jpg';
import fsf from '@/public/fsf.png';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  }, 
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated HightSchool",
    location: "Agadir",
    description:
      "I graduated after 12 years of studying. I immediately found my passion about programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  
  {
    title: "Back-End Developer",
    location: "Agadir",
    description:
      "I worked as a Back-End Developer, designing and implementing the backend for a new forum using Laravel and SQL at (Yool Education).",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
    {
    title: "Back-End Developer",
    location: "Agadir",
    description:
      "I worked as a Back-End Developer, rebuilding an existing library system for the organization of (Aliaaf). I focused on improving functionality, resolving latency issues, and making the system fully operational and professional.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer, more Back-End",
    location: "",
    description:
      "I am now a Full-Stack Developer working as a freelancer under the label of SELERIONS. I develop WebApps, Blogs, E-commerce sites, and portfolios, and we are open to any development projects.",
    icon: React.createElement(FaReact),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "ShopTop",
    description:
      "As a full-stack developer, I contributed to an E-commerce project, elevating its design and functionality. Notably, I integrated the Stripe payment system for secure transactions.",
    tags: ["React", "Strapi", "Mysql", "Scss", "Redux","Stripe"],
    imageUrl:shoptop1,
    gitLink:"https://github.com/soulaimanboubkran/ShopTop",
    web:""
  },
  {
    title: "Finder",
    description:
      "Finder is a marketplace for real estate and cars where anyone can buy, sell, or rent properties and vehicles. It is a SaaS project where users pay to activate their seller accounts.",
    tags: ["React", "JavaScript", "Nodejs", "Tailwind css", "Firebase","MongoDb" ],
    imageUrl: real,
    gitLink:"https://github.com/soulaimanboubkran/RealEstatePF",
    web:""
  }
  , {
    title: "Fail-success",
    description:
      "This was the fastest full-stack project I've completed, highlighting the importance of commitment in achieving success or failing facing challenges in your missions.",
    tags: ["React", "tailwind css","Express","Typescript","express","NoSql","OAuth-(Google-auth)..."],
    imageUrl:fsf,
    gitLink:"https://github.com/soulaimanboubkran/fail-success-client",
    web:"https://www.fail-success.xyzp"
  },{
    title: "WebSty",
    description:
      "This library provides a collection of JSX components designed to assist students in quickly finding well-styled components for ReactJS and JSX. Additionally, it features an integrated online code editor option, enhancing the learning experience.",
    tags: ["React", "tailwind css","react-live","jsx","good routing!"],
    imageUrl:we,
    gitLink:"https://github.com/soulaimanboubkran/webSty",
    web:"https://websty.vercel.app"
  },
  {
    title: "Blog",
    description:
      "I created this blog to enhance my skills in Next.js and various other technologies. It's a platform where anyone can contribute and share diverse content.",
    tags: ["React", "JavaScript", "Next.js", "Css", "Prisma","Firebase","Auth.js" ],
    imageUrl: Blog,
    gitLink:"https://github.com/soulaimanboubkran/bloge2",
    web:"https://tomass.vercel.app"
  },
  {
    title: "Price tracker",
    description:
      "An Amazon price tracker for getting the updates about any discounts on the products. ",
    tags: ["React", "Next.js", "MongoDb", "Tailwind css", "Bright Data","Cron","TypeScript"],
    imageUrl:webscraper,
    gitLink:"https://github.com/soulaimanboubkran/webscraping",
    web:""
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Auth.js",
  "Git",
  "Docker",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "CMS",
  "Express",
  "PostgreSQL",
  "Python",

  "Framer Motion",
] as const;