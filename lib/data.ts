import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import meetmateImg from "@/public/meetmate.png";

export const links = [
  {
    name: "Главная",
    hash: "#home",
  },
  {
    name: "Проекты",
    hash: "#projects",
  },
  {
    name: "Стек",
    hash: "#skills",
  },
  {
    name: "Опыт",
    hash: "#experience",
  },
  {
    name: "Контакты",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Polar State University",
    location: "Norilsk, RU",
    description: "Специальность - Прикладная Информатика",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Front-End Developer",
    location: "Norilsk, RU",
    description: "Работаю над проектами в качестве фронтенд-разработчика",
    icon: React.createElement(FaReact),
    date: "2022-2023",
  },
  {
    title: "Data Science",
    location: "Norilsk, RU",
    description: "Изучаю Data Science на курсах от Kaggle и IBM",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "KojiFanSite",
    description:
      "Адаптивный многостраничный веб-сайт, посвященный творчеству Хидео Кодзимы",
    tags: ["Html", "CSS", "JavaScript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "React Pizza",
    description:
      "Пройденный курс по созданию интернет-магазина пиццерии - 'React-Pizza-v2 от Archakov Blog'",
    tags: [
      "React",
      "TypeScript",
      "Redux ToolKit",
      "React Router",
      "CSS-Modules",
      "SCSS",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "MeetMate",
    description:
      "Сайт для знакомств, свиданий и нетворкинга | [в разработке...]",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Google Firebase",
      "Framer",
      "SWR",
      "React Hot Toast",
    ],
    imageUrl: meetmateImg,
  },
  {
    title: "Portfolio",
    description: "Портфолио",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "Google Firebase",
  "MongoDB",
  "Redux ToolKit",
  "Express",
  "Python",
  "Pandas",
  "Matplotlib",
  "TensorFlow",
] as const;
