// components/ui/Slider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import type { SlideItem, SliderProps } from '@/types/slider.types';

// Стили
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider<T extends SlideItem>({
  // Данные и рендер
  slides,
  renderSlide,
  children,
  
  // Настройки
  settings = {},
  className = '',
  
  // Опции (с значениями по умолчанию)
  navigation = true,
  pagination = false,
  autoplay = false,
  loop = false,
  spaceBetween = 20,
  slidesPerView = 1,
  
  // Адаптивность
  breakpoints = {},
  
  // События
  onSlideChange,
  onInit
}: SliderProps<T>) {
  
  // Базовые настройки с приоритетом переданных через settings
  const defaultSettings = {
    spaceBetween,
    slidesPerView,
    loop,
    ...settings
  };

  // Адаптивные настройки по умолчанию
  const responsiveBreakpoints = {
    640: { 
      slidesPerView: Math.min(2, Number(slidesPerView) || 2),
      spaceBetween: 20 
    },
    768: { 
      slidesPerView: Math.min(3, Number(slidesPerView) || 3),
      spaceBetween: 30 
    },
    1024: { 
      slidesPerView: Math.min(4, Number(slidesPerView) || 4),
      spaceBetween: 40 
    },
    ...breakpoints
  };

  // Настройки пагинации
  const paginationConfig = pagination 
    ? typeof pagination === 'boolean' 
      ? { clickable: true } 
      : pagination
    : false;

  // Настройки автоплея
  const autoplayConfig = autoplay
    ? typeof autoplay === 'boolean'
      ? { delay: 3000, disableOnInteraction: false }
      : autoplay
    : false;

  // Обработчики событий
  const handleSlideChange = (swiper: SwiperType) => {
    onSlideChange?.(swiper);
  };

  const handleInit = (swiper: SwiperType) => {
    onInit?.(swiper);
  };

  // Если передан массив данных и функция рендера
  if (slides?.length && renderSlide) {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        {...defaultSettings}
        navigation={navigation}
        pagination={paginationConfig}
        autoplay={autoplayConfig}
        breakpoints={responsiveBreakpoints}
        className={className}
        onSlideChange={handleSlideChange}
        onInit={handleInit}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={item.id || index}>
            {renderSlide(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  // Если переданы children (уже готовые слайды)
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      {...defaultSettings}
      navigation={navigation}
      pagination={paginationConfig}
      autoplay={autoplayConfig}
      breakpoints={responsiveBreakpoints}
      className={className}
      onSlideChange={handleSlideChange}
      onInit={handleInit}
    >
      {children}
    </Swiper>
  );
}