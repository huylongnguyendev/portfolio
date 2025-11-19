"use client"
import { motion } from "motion/react"
import image from "@/assets/graduate.jpg"
import Image from "next/image"

const AboutImg = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        className="size-64 rounded-full overflow-hidden shrink-0 mx-auto">
          <Image src={image} alt="image profile graduation" className="object-cover" />
        </motion.div>
        
    </>
  )
}

export default AboutImg