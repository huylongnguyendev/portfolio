"use client"
import Image from "next/image"
import Section from "../Section"
import Titile from "../Titile"
import { motion } from 'motion/react'
import myGraduation from "@/assets/my-graduate.jpg"
import { infoList } from "@/lib/data/about-data"

const AboutSection = () => {
  return (
    <>
      <Section>
        <div id="about">
          <Titile>
            <p className="first-letter:uppercase text-base">Introduction</p>
            <p>About me</p>
          </Titile>
          <div className="max-md:mt-12 flex max-lg:flex-col gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.6, delay: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="size-46 rounded-full overflow-hidden mx-auto shrink-0">
              <Image src={myGraduation} alt="my profile image"
                className="size-full object-cover shrink-0" />
            </motion.div>
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                className=" max-md:text-center p-4 bg-primary/10 text-primary rounded-md shadow-xs shadow-primary">
                I am a new web developer, who always ready to learn and improve myself at all times. I am looking for a working environment where I can practice my skills and learn to contribute to the success of the company's projects.</motion.p>
              <ul
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap">
                {
                  infoList.map((item, index) => (
                    <motion.li
                      initial={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 0.6 * index }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3}}
                      className="shadow-sm shadow-primary bg-background p-4 rounded-md space-y-8 h-32 transition-all duration-300" key={item.title}>
                      <div className="flex items-center gap-2 text-primary">
                        <Image src={item.icon} alt={item.title} className="w-7" />
                        <h3 className="font-semibold text-foreground text-lg">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-secondary-foreground text-sm">{item.description}</p>
                    </motion.li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default AboutSection