"use client"
import { skillList } from "@/lib/data/skill-data"
import Section from "../Section"
import Titile from "../Titile"
import { motion } from 'motion/react'
import Image from "next/image"

const SkillSection = () => {
  const list = skillList
  const languages = list.slice(0, 4)
  const techs = list.slice(4, 9)
  const tools = list.slice(9,11)
  const database = list.slice(11)

  return (
    <>
      <Section>
        <div id="skills" className="space-y-8" >
          <Titile>
            Skills
          </Titile>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-8">
            <div className="space-y-4 md:max-w-1/2">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                className="capitalize text-2xl font-semibold"
              >Frameworks/Libaries</motion.p>
              <div className="flex gap-4 items-center flex-wrap w-full"
              >
                {
                  languages.map((lang, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 30, rotateY: -180 }}
                      transition={{ duration: 0.6, delay: 0.6 * index }}
                      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      key={lang.value}
                      className="text-center space-y-4 rounded-md p-2">
                      <Image src={lang.icon} alt={lang.value} width={100} height={100} />
                      <p className="capitalize font-semibold">{lang.name}</p>
                    </motion.div>
                  ))
                }
              </div>
            </div>
            <div className="space-y-4 md:max-w-1/2">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                className="capitalize text-2xl font-semibold"
              >Frameworks/Libaries</motion.p>
              <div className="flex gap-4 items-center flex-wrap w-full"
              >
                {
                  techs.map((tech, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 30, rotateY: -180 }}
                      transition={{ duration: 0.6, delay: 0.6 * index }}
                      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      key={tech.value}
                      className="text-center space-y-4 rounded-md p-2">
                      <Image src={tech.icon} alt={tech.value} width={100} height={100} />
                      <p className="capitalize font-semibold">{tech.name}</p>
                    </motion.div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                className="capitalize text-2xl font-semibold"
              >tools</motion.p>
              <div className="flex items-center gap-4"
              >
                {
                  tools.map((lang, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 30, rotateY: -180 }}
                      transition={{ duration: 0.6, delay: 0.6 * index }}
                      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      key={lang.value}
                      className="text-center space-y-4 rounded-md p-2 ">
                      <Image src={lang.icon} alt={lang.value} width={100} height={100} />
                      <p className="capitalize font-semibold">{lang.name}</p>
                    </motion.div>
                  ))
                }
              </div>
            </div>
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                className="capitalize text-2xl font-semibold"
              >database</motion.p>
              <div className="flex items-center gap-4"
              >
                {
                  database.map((db, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 30, rotateY: -180 }}
                      transition={{ duration: 0.6, delay: 0.6 * index }}
                      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      key={db.value}
                      className="text-center space-y-4 rounded-md p-2">
                      <Image src={db.icon} alt={db.value} width={100} height={100} />
                      <p className="capitalize font-semibold">{db.name}</p>
                    </motion.div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default SkillSection