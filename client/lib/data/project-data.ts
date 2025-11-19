import { StaticImageData } from "next/image"
import perfumeImg from "@/assets/perfume.png"

type ProjectItemType = {
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
    name: "string",
    value: "string",
    tech: "string",
    cats: "string",
    gitUrl: "string",
    webUrl: "string",
    image: perfumeImg,
  }
]