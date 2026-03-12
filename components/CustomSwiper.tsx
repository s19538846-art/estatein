'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Импорт стилей
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CustomSwiper({ slides = [] }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {slide.content}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}