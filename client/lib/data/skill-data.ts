import { StaticImageData } from "next/image"
import html from "@/assets/html-5.svg"
import css from "@/assets/css-3.svg"
import scss from "@/assets/scss.svg"
import tailwind from "@/assets/tailwind.svg"
import javascript from "@/assets/javascript.svg"
import typescript from "@/assets/typscript.svg"
import react from "@/assets/react.svg"
import next from "@/assets/nextjs.svg"
import redux from "@/assets/redux.svg"
import express from "@/assets/express.svg"

export type SkillItemType = {
  name: string
  value: string
  cats: string
  image: StaticImageData
}

export const skillList: SkillItemType[] = [
  {
    name: "HTML5",
    value: "html5",
    cats: "lang",
    image: html
  },
  {
    name: "CSS3",
    value: "css3",
    cats: "lang",
    image: css
  },
  {
    name: "Sass",
    value: "sass",
    cats: "lang",
    image: scss
  },
  {
    name: "JavaScript",
    value: "javascript",
    cats: "lang",
    image: javascript
  },
  {
    name: "TypeScript",
    value: "typescript",
    cats: "lang",
    image: typescript
  },
  {
    name: "Tailwind",
    value: "tailwind",
    cats: "framework",
    image: tailwind
  },
  {
    name: "ReactJS",
    value: "react",
    cats: "libary",
    image: react
  },
  {
    name: "NextJS",
    value: "next",
    cats: "framework",
    image: next
  },
  {
    name: "Express",
    value: "express",
    cats: "libary",
    image: express
  },
]