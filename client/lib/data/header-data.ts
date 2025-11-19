import { Facebook, Github, Linkedin } from "lucide-react"
import { ElementType } from "react"

type NavItemType = {
  title: string
  value: string
  link: string
}

type ContactType = {
  value: string
  icon: ElementType
  url: string
}

export const navItemList: NavItemType[] = [
  {
    title: "home",
    value: "home",
    link: "#"
  },
  {
    title: "about me",
    value: "about",
    link: "#about"
  },
  {
    title: "projects",
    value: "projects",
    link: "#projects"
  },
  {
    title: "skills",
    value: "skills",
    link: "#skills"
  },
  {
    title: "contact me",
    value: "contact",
    link: "#contact"
  },
]

export const contactList: ContactType[] = [
  {
    value: "github",
    icon: Github,
    url: "https://github.com/huylongnguyendev"
  },
  {
    value: "facebook",
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=61583422176368"
  },
  {
    value: "linkedin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/long-nguyen-6b97a6396"
  },
]