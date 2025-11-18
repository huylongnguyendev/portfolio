import projectPerfume from "@/assets/perfume-project.png"
import projectPortfolio from "@/assets/portfolio-project.png"

import { StaticImageData } from "next/image"

const assets = {
  projectPerfume,
  projectPortfolio
}


export type ProjectType = {
  topic: string
  name: string
  category: string
  gitUrl: string
  webtUrl: string
  tech: string
  dependencies: string,
  img: StaticImageData
}

export const projects: ProjectType[] = [
  {
    topic: "perfume",
    name: "Perfumei",
    category: "ecommerce",
    gitUrl: "https://github.com/huylongnguyendev/perfume.git",
    webtUrl: "https://perfume-eight-sigma.vercel.app/shop",
    tech: "Fullstack",
    dependencies: "TypeScript, ReactJS, Express, MongoDB, Tailwind",
    img: assets.projectPerfume
  },
  {
    topic: "portfolio",
    name: "my portfolio",
    category: "portfolio",
    gitUrl: "",
    webtUrl: "#",
    tech: "Frontend",
    dependencies: "TypeScript, Nextjs, Tailwind",
    img: assets.projectPortfolio
  },
]