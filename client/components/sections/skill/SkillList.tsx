"use client"
import { skillList } from "@/lib/data/skill-data"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.css"
import SkillItem from "./SkillItems"


const SkillList = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Autoplay]}

        breakpoints={
          {
            555: { slidesPerView: 2 },
            600: { slidesPerView: 4 },
            1022: { slidesPerView: 6 },
          }
        }
        loop={true}
        autoplay={{ delay: 1600 }}
      >
        {
          skillList.map(skill => (
            <SwiperSlide key={skill.value}>
              <SkillItem item={skill}/>
            </SwiperSlide>
          ))
        }

      </Swiper>

    </>
  )
}

export default SkillList