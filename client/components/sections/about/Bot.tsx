"use client"
import { aboutList } from "@/lib/data/about-data"
import { motion } from "motion/react"

const Bot = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"
      >
        {
          aboutList.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3, delay: 0.6 * index }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              key={item.value}
              className="p-4 rounded-md bg-primary/20 border border-primary flex-1"
            >
              <p className="flex items-center gap-2 text-primary">
                <item.icon />
                <span>{item.name}</span>
              </p>
              <p className="text-sm mt-4">{item.desc}</p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default Bot