"use client"
import Section from "../Section"
import { motion } from "motion/react"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import myProfileImage from "@/assets/profile-img.jpg"

const HeroSection = () => {
  return (
    <>
      <Section>
        <div id="#" className="flex flex-col-reverse gap-8 items-center">
          <div className="md:w-2/3 md:text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-lg text-accent-foreground"
            >Hi, I'm Huy Long</motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-4 text-3xl tracking-wide text-foreground">Welcome to my Portfolio, I'm a <span className="font-semibold bg-clip-text text-transparent bg-linear-to-br from-primary to-70% to-lime-500">Frontend Web Developer</span></motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-foreground mt-2">I am a frontend developer in Ho Chi Minh city, Viet Nam. Good to see you!</motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-8 space-x-2 max-md:text-center">
              <Button
                className="cursor-pointer"
              >
                <Link href={"#contact"}>
                  Contact me
                </Link>
              </Button>
              <Button
                variant="outline"
                className="cursor-pointer border-primary text-primary">
                <Link href={"#about"}>
                  About me
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.6, delay: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="size-46 rounded-full overflow-hidden">
            <Image src={myProfileImage} alt="my profile image"
              className="size-full object-cover" />
          </motion.div>
        </div>
      </Section>
    </>
  )
}

export default HeroSection