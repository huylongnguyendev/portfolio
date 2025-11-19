import { StaticImageData } from "next/image"
import perfumeImg from "@/assets/perfume.png"
import portfolioImg from "@/assets/portfolio-project.png"

export type ProjectItemType = {
  name: string
  value: string
  tech: string
  cats: string
  gitUrl: string
  webUrl: string
  image: StaticImageData
}

export const projectLists = [
  {
    name: "Perfumei",
    value: "perfume",
    tech: "TypeScript, ReactJS, Tailwind, Express, MongoDB",
    cats: "MERN Stack",
    gitUrl: "string",
    webUrl: "string",
    image: perfumeImg,
  },
  {
    name: "Portfolio",
    value: "portfolio",
    tech: "TypeScript, NextJS, Tailwind",
    cats: "Frontend",
    gitUrl: "string",
    webUrl: "string",
    image: portfolioImg,
  }
]