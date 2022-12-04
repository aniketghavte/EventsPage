import React from 'react'

import img from './event1.jpg';
import './Eventslide.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Eventslide() {
  return (
    
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={img}></img></SwiperSlide>
      <SwiperSlide><img src={img}></img></SwiperSlide>
      <SwiperSlide><img src={img}></img></SwiperSlide>
      <SwiperSlide><img src={img}></img></SwiperSlide>
      
    </Swiper>
  )
}
