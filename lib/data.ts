import React from "react";
import { MdWorkHistory } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import c4re from "@/public/c4re.png";
import fooddocs from "@/public/fooddocs.png";
import sf from "@/public/sf.png";
import squashapps from "@/public/squashapps.png";
import siemens from "@/public/siemens.png";
import unknown from "@/public/unknown.png";
import boeing from "@/public/boeing.png";
import fooddocsLogo from "@/public/fooddocs_logo.png";
import fragma from "@/public/fragma.png";
import sap from "@/public/sap.png";
import udemy from "@/public/udemy.png";
import discord from "@/public/discord.png";

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
    title: "Intern",
    location: "Bengaluru, IN",
    company: "Siemens PLM",
    companyLogo: siemens,
    description:
      "Internship opportunity where I worked with Siemens PLM Software - TeamCenter",
    icon: React.createElement(MdWorkHistory),
    date: "2014-2015",
  },
  {
    title: "Software Engineer",
    location: "Coimbatore, IN",
    company: "Squash Apps",
    companyLogo: squashapps,
    description:
      "My first job as a professional. Worked as a full-stack developer using MERN / MEAN Stack",
    icon: React.createElement(MdWorkHistory),
    date: "2016-2017",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    company: "Individual Enterpreneur",
    companyLogo: unknown,
    description:
      "I worked as a front-end developer using Angular developing a real estate solution",
    icon: React.createElement(MdWorkHistory),
    date: "2017 - 2018",
  },
  {
    title: "Software Developer",
    location: "Bengaluru, IN",
    company: "Boeing",
    companyLogo: boeing,
    description:
      "Worked as a front-end developer using Angular to developer UIs for Aircraft Module.",
    icon: React.createElement(MdWorkHistory),
    date: "2018 - 2019",
  },
  {
    title: "Software Developer",
    location: "Remote",
    company: "FoodDocs",
    companyLogo: fooddocsLogo,
    description:
      "Worked as a full stack developer using Angular, Vue, Laravel, Flutter, etc developing a SaaS product",
    icon: React.createElement(MdWorkHistory),
    date: "2019 - 2020",
  },
  {
    title: "Software Developer",
    location: "Remote",
    company: "Fragma Data Systems",
    companyLogo: fragma,
    description:
      "Worked as a front-end developer using React for government and bank based solutions",
    icon: React.createElement(MdWorkHistory),
    date: "2020",
  },
  {
    title: "Software Developer",
    location: "Bengaluru, IN",
    company: "SAP",
    companyLogo: sap,
    description:
      "Working as a full-stack developer using wide range of technologies",
    icon: React.createElement(MdWorkHistory),
    date: "2020 - present",
  },
  {
    title: "Udemy Instructor",
    location: "Remote | Side Hustle",
    company: "Udemy",
    companyLogo: udemy,
    description: "During my free time developing courses in Udemy platform",
    icon: React.createElement(MdWorkHistory),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Success Factors",
    description:
      "Development of Public Sector module inside SAP Success Factors that will help maintain customers financings.",
    tags: [
      "React",
      "Spring",
      "TypeScript",
      "Java",
      "Jenkins",
      "Redux",
      "Jest",
      "Cypress",
    ],
    imageUrl: sf,
  },
  {
    title: "Cloud for Real Estate",
    description:
      "A cloud based application on SAP BTP that is used to maintain sites, buildings, etc and provide analytical insights",
    tags: [
      "Angular",
      "TypeScript",
      "Redux",
      "SAPUI5",
      "Spring",
      "Java",
      "Jenkins",
      "DevSecOps",
      "Go",
      "Groovy",
    ],
    imageUrl: c4re,
  },
  {
    title: "FoodDocs",
    description:
      "A Saas solution from a startup based out of Tallinn, Estonia useful to maintain Food Safety",
    tags: ["Angular", "Vue", "Laravel", "TypeScript", "Nuxt", "Flutter"],
    imageUrl: fooddocs,
  },
  {
    title: "Discord Clone | Side Hustle",
    description: "Developing a clone of Discord for learning purpose",
    tags: [
      "Next",
      "TypeScript",
      "Prisma",
      "Tailwind",
      "ShadCn",
      "Planet Scale",
      "Livekit",
      "Railway",
      "Clerk",
    ],
    imageUrl: discord,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Rust",
  "Go",
  "Jenkins",
  "GitHub Actions",
  "Docker",
  "Kubernetes",
  "Java",
  "Spring Boot",
  "Angular",
  "Vue",
  "Qwik",
  "Solid",
  "React Native",
] as const;
