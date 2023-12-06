import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import shoptop1 from '@/public/shoptop1.jpg'
import Blog from "@/public/BLog.jpg"


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
    title: "Full-Stack Developer",
    location: "Agadir",
    description:
      "I worked as a ful-stack developer for a web job mession and one other in another webApp.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "",
    description:
      "I'm now a full-stack developer working as a freelancer (webApps, Blogs, E-commerce, Portfolios...). My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: " present",
  },
] as const;

export const projectsData = [
  {
    title: "ShopTop",
    description:
      "As a full-stack developer, I contributed to an E-commerce project, elevating its design and functionality. Notably, I integrated the Stripe payment system for secure transactions",
    tags: ["React", "Strapi", "Mysql", "Scss", "Redux","Stripe"],
    imageUrl:shoptop1,
    gitLink:"https://github.com/soulaimanboubkran/ShopTop",
  },
  {
    title: "Blog",
    description:
      "I created this blog to enhance my skills in Next.js and various other technologies. It's a platform where anyone can contribute and share diverse content.",
    tags: ["React", "JavaScript", "Next.js", "Css", "Prisma","Firebase","Auth.js" ],
    imageUrl: Blog,
    gitLink:"https://github.com/soulaimanboubkran/bloge2",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl:Blog,
    gitLink:"https://github.com/soulaimanboubkran/ShopTop",
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