"use client"
import { motion } from 'motion/react'

const Top = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        className="p-4 rounded-md bg-primary/20 text-foreground ">
        I'm a Frontend Developer at beginning of an exiciting journey in web development. I'm eager to learn and improve every day, aiming to contribute meaningfully to every project I'm part of.
      </motion.p>
    </>
  )
}

export default Top