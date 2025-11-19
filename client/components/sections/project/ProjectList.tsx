"use client"
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.css'


// import required modules
import { Autoplay } from 'swiper/modules'
import { projectLists } from '@/lib/data/project-data'
import ProjectItem from './ProjectItem'

export default function ProjectList() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={
          {
            555: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1022: { slidesPerView: 3 },
            1350: { slidesPerView: 4 },
          }
        }
        modules={[Autoplay]}
        className="mySwiper max-md:h-96 h-80"
      >
        {
          projectLists.map(item => (
            <SwiperSlide key={item.value}>
              <ProjectItem item={item} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}