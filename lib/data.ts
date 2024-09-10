import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
import we from '@/public/we.jpg'
import shoptop1 from '@/public/shoptop.png'
import Blog from "@/public/BLog.jpg"
import webscraper from '@/public/webscraper.jpg'
import real from '@/public/real.jpg';
import fsf from '@/public/fsf.png';
import { Feature } from "@/components/ui/card";
import { FaHtml5, FaCss3Alt, FaBootstrap,  FaReact, FaDocker, FaNodeJs, FaPython,FaLaravel } from 'react-icons/fa';
import {  DiJavascript1,  DiReact, DiGit,  DiMongodb, DiPostgresql } from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiAuthy, SiPrisma, SiRedux, SiGraphql, SiExpress,  SiFramer, SiJest } from 'react-icons/si';
import { SiStrapi } from "react-icons/si";

export const links = [
  {
    name: "HOME",
    hash: "#home",
  },
  {
    name: "ABOUT",
    hash: "#about",
  },
  {
    name: "PROJECTS",
    hash: "#projects",
  },
  {
    name: "SKILLS",
    hash: "#skills",
  }, 
  {
    name: "EXPERIENCES",
    hash: "#experience",
  },
  {
    name: "CONTACT",
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

export const projectsData : Feature[]  = [
  { id: '1', // Add unique id
    title: "ShopTop",
    description:
      "As a full-stack developer, I contributed to an E-commerce project, elevating its design and functionality. Notably, I integrated the Stripe payment system for secure transactions.",
    tags: ["React", "Strapi", "Mysql", "Scss", "Redux","Stripe"]as string[],
    imageUrl:shoptop1,
    gitLink:"https://github.com/soulaimanboubkran/ShopTop",
    web:""
  },
  { id: '2', // Add unique id
    title: "Finder",
    description:
      "Finder is a marketplace for real estate and cars where anyone can buy, sell, or rent properties and vehicles. It is a SaaS project where users pay to activate their seller accounts.",
    tags: ["React", "JavaScript", "Nodejs", "Tailwind css", "Firebase","MongoDb" ]as string[],
    imageUrl: real,
    gitLink:"https://github.com/soulaimanboubkran/RealEstatePF",
    web:""
  }
  , { id: '3', // Add unique id
    title: "Fail-success",
    description:
      "This was the fastest full-stack project I've completed, highlighting the importance of commitment in achieving success or failing facing challenges in your missions.",
    tags: ["React", "tailwind css","Express","Typescript","express","NoSql","OAuth-(Google-auth)..."]as string[],
    imageUrl:fsf,
    gitLink:"https://github.com/soulaimanboubkran/fail-success-client",
    web:"https://www.fail-success.xyz"
  },{ id: '4', // Add unique id
    title: "WebSty",
    description:
      "This library provides a collection of JSX components designed to assist students in quickly finding well-styled components for JSX. Additionally, it features an integrated online code editor option.",
    tags: ["React", "tailwind css","react-live","jsx","good routing!"]as string[],
    imageUrl:we,
    gitLink:"https://github.com/soulaimanboubkran/webSty",
    web:"https://websty.vercel.app"
  },
  { id: '5', // Add unique id
    title: "Blog",
    description:
      "I created this blog to enhance my skills in Next.js and various other technologies. It's a platform where anyone can contribute and share diverse content.",
    tags: ["React", "JavaScript", "Next.js", "Css", "Prisma","Firebase","Auth.js" ]as string[],
    imageUrl: Blog,
    gitLink:"https://github.com/soulaimanboubkran/bloge2",
    web:"https://tomass.vercel.app"
  },
  { id: '6', // Add unique id
    title: "Price tracker",
    description:
      "An Amazon price tracker for getting the updates about any discounts on the products. ",
    tags: ["React", "Next.js", "MongoDb", "Tailwind css", "Bright Data","Cron","TypeScript"]as string[],
    imageUrl:webscraper,
    gitLink:"https://github.com/soulaimanboubkran/webscraping",
    web:""
  },
];// icons.ts

// Define skills data as a readonly array of strings
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
  "Laravel",
  "Python",
  "Framer Motion",
  "Jest testing"
] as const;

// Map skill names to their corresponding icons using React.ComponentType
export const skillIcons: Record<string, React.ComponentType> = {
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "Tailwind": SiTailwindcss,
  "Bootstrap": FaBootstrap,
  "JavaScript": DiJavascript1,
  "TypeScript": SiTypescript,
  "React": DiReact,
  "Next.js": SiNextdotjs,
  "Node.js": FaNodeJs,
  "Auth.js": SiAuthy,
  "Git": DiGit,
  "Docker": FaDocker,
  "Prisma": SiPrisma,
  "MongoDB": DiMongodb,
  "Redux": SiRedux,
  "GraphQL": SiGraphql,
  "CMS": SiStrapi, // Ensure you have an icon for CMS or remove this line if not available
  "Express": SiExpress,
  "PostgreSQL": DiPostgresql,
  "Laravel":FaLaravel,
  "Python": FaPython,
  "Framer Motion": SiFramer,
  "Jest testing": SiJest
};