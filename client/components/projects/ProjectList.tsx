"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/swiper.css"

// import required modules
import { Autoplay } from "swiper/modules"
import { projects } from "@/lib/data/project-data"
import ProjectItem from "./ProjectItem"

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={16}
        centeredSlides={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          555: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1022: { slidesPerView: 3 },
          1350: { slidesPerView: 4 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
          projects.map((project) => (
              <SwiperSlide key={project.topic}>
                <ProjectItem item={project} />
              </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}
