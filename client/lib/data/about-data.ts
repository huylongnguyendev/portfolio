import { BriefcaseBusiness, CodeXml, GraduationCap } from "lucide-react"
import { ElementType } from "react"

type ItemType = {
  name: string
  value: string
  icon: ElementType
  desc: string
}

export const aboutList: ItemType[] = [
  {
    name: "Programming Languages",
    value: "languages",
    icon: CodeXml,
    desc: "HTML, CSS, JavaScript, TypeScript"
  },
  {
    name: "Education",
    value: "education",
    icon: GraduationCap,
    desc: "Graduated in Frontend Development at Green Academy"
  },
  {
    name: "Projects",
    value: "projects",
    icon: BriefcaseBusiness,
    desc: "Built 2 projects"
  },
]