"use client"
import Link from "next/link"
import Section from "../Section"
import { Button } from "../ui/button"
import Image from "next/image"
import profileImg from "@/assets/portfolio.jpg"
import { motion } from "motion/react"

const HeroSection = () => {
  return (
    <>
      <Section id="#" className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative size-40 rounded-full mx-auto shadow-2xl shadow-primary z-40"
        >
          <div className="size-full rounded-full overflow-hidden relative">
            <Image src={profileImg} alt="profile image" fill className="object-cover" />
          </div>
        </motion.div>
        <div className="font-semibold md:text-center text-balance">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-secondary-foreground">Welcome to my Portfolio</motion.p>
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="tracking-wider text-3xl mt-8">Hi, I'm Long - <span className="text-primary">Frontend Web Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="leading-8 mt-4">I'm a Frontend Developer at beginning of an exiciting journey in web development.</motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-x-2 mt-8 md:text-center">
          <Button>
            <Link href={"#about"}>
              About me
            </Link>
          </Button>
          <Button
            variant={"outline"}
          >
            <Link href={"#contact"}>
              Contact me
            </Link>
          </Button>
        </motion.div>
      </Section>
    </>
  )
}

export default HeroSection