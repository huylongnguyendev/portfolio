import html5 from "@/assets/html-5.svg"
import css3 from "@/assets/css-3.svg"
import js from "@/assets/javascript.svg"
import ts from "@/assets/typescript.svg"
import tailwind from "@/assets/tailwind.svg"
import redux from "@/assets/redux.svg"
import react from "@/assets/react.svg"
import next from "@/assets/nextjs.svg"
import express from "@/assets/express.svg"
import vscode from "@/assets/vscode.png"
import github from "@/assets/github.svg"
import mongo from "@/assets/mongodb.png"

import { StaticImageData } from "next/image"

const assets = {
  html5,
  css3,
  js,
  ts,
  tailwind,
  redux,
  react,
  next,
  express,
  vscode,
  github,
  mongo
}

export type SkillItemType = {
  name: string
  value: string
  icon: StaticImageData
}

export const skillList = [
  {
    name: "html5",
    value: "html",
    icon: assets.html5
  },
  {
    name: "css3",
    value: "css",
    icon: assets.css3
  },
  {
    name: "JavaScript",
    value: "js",
    icon: assets.js
  },
  {
    name: "TypeScript",
    value: "ts",
    icon: assets.ts
  },
  {
    name: "Tailwind",
    value: "tailwind",
    icon: assets.tailwind
  },
  {
    name: "reactJS",
    value: "react",
    icon: assets.react
  },
  {
    name: "nextJS",
    value: "nextjs",
    icon: assets.next
  },
  {
    name: "redux",
    value: "redux",
    icon: assets.redux
  },
  {
    name: "express",
    value: "express",
    icon: assets.express
  },
  {
    name: "github",
    value: "github",
    icon: assets.github
  },
  {
    name: "vscode",
    value: "vscode",
    icon: assets.vscode
  },
  {
    name: "MongoDB",
    value: "mongo",
    icon: assets.mongo
  },
]