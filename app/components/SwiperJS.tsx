"use client";

import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Импорт модулей
import {
    Navigation,
    Pagination,
    Autoplay,
    Keyboard,
    Mousewheel,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface SwiperJSProps {
    children: React.ReactNode[];
    slidesPerView?: number | "auto";
    spaceBetween?: number;
    loop?: boolean;
    autoplay?: boolean;
    autoplayDelay?: number;
    pagination?: boolean;
    navigation?: boolean;
    keyboard?: boolean;
    mousewheel?: boolean;
    centeredSlides?: boolean;
    breakpoints?: {
        [width: number]: {
            slidesPerView: number;
            spaceBetween?: number;
        };
    };
    className?: string;
    onSlideChange?: (swiper: any) => void;
    onInit?: (swiper: any) => void;
}

const SwiperJS: React.FC<SwiperJSProps> = ({
    children,
    slidesPerView = 1,
    spaceBetween = 20,
    loop = false,
    autoplay = false,
    autoplayDelay = 3000,
    pagination = true,
    navigation = true,
    keyboard = true,
    mousewheel = false,
    centeredSlides = false,
    breakpoints,
    className = "",
    onSlideChange,
    onInit,
}) => {
    const swiperContainerRef = useRef<HTMLDivElement>(null);
    const swiperInstanceRef = useRef<any>(null);

    useEffect(() => {
        if (swiperContainerRef.current && !swiperInstanceRef.current) {
            // Конфигурация Swiper
            const swiperConfig: any = {
                modules: [
                    Navigation,
                    Pagination,
                    Autoplay,
                    Keyboard,
                    Mousewheel,
                ],
                slidesPerView,
                spaceBetween,
                loop,
                centeredSlides,
                keyboard: {
                    enabled: keyboard,
                },
                mousewheel: mousewheel,
                on: {
                    slideChange: () => {
                        if (onSlideChange && swiperInstanceRef.current) {
                            onSlideChange(swiperInstanceRef.current);
                        }
                    },
                    init: (swiper: any) => {
                        if (onInit) {
                            onInit(swiper);
                        }
                    },
                },
            };

            // Добавляем навигацию если нужно
            if (navigation) {
                swiperConfig.navigation = {
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                };
            }

            // Добавляем пагинацию если нужно
            if (pagination) {
                swiperConfig.pagination = {
                    el: ".swiper-pagination",
                    clickable: true,
                    dynamicBullets: true,
                };
            }

            // Добавляем автоплей если нужно
            if (autoplay) {
                swiperConfig.autoplay = {
                    delay: autoplayDelay,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                };
            }

            // Добавляем брейкпоинты если есть
            if (breakpoints) {
                swiperConfig.breakpoints = breakpoints;
            }

            // Инициализация Swiper
            swiperInstanceRef.current = new Swiper(
                swiperContainerRef.current,
                swiperConfig,
            );
        }

        // Очистка при размонтировании
        return () => {
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.destroy(true, true);
                swiperInstanceRef.current = null;
            }
        };
    }, []); // Пустой массив зависимостей - инициализация только один раз

    // Обновление параметров при их изменении (если нужно)
    useEffect(() => {
        if (swiperInstanceRef.current) {
            // Здесь можно добавить логику для обновления параметров
            // Например, изменение автоплея, loop и т.д.
        }
    }, [autoplay, autoplayDelay, loop, slidesPerView, spaceBetween]);

    return (
        <div className={`relative ${className}`}>
            <div
                ref={swiperContainerRef}
                className="swiper relative z-0" // Убрали flex-col здесь, чтобы не ломать слайдер
            >
                <div className="swiper-wrapper">
                    {children.map((child, index) => (
                        <div key={index} className="swiper-slide min-w-[512px]">
                            {child}
                        </div>
                    ))}
                </div>

                {/* Навигационные стрелки под контентом */}
                {navigation && (
                    <div className="flex items-center justify-between w-full md:w-auto md:ml-auto gap-10">
                        <p className="text-gray-400 text-sm hidden md:block">
                            <span className="text-white font-medium">01</span>{" "}
                            of 60
                        </p>
                        <Button className="md:hidden border border-[#262622] bg-[#1A1A1A] text-white rounded-[10px] px-5  py-7 md:py-3.5  ">
                            View All Properties
                        </Button>
                        <div className="flex gap-4 mt-6 justify-end px-4">
                            {/* Кастомная кнопка НАЗАД */}
                            <button className="swiper-button-prev-custom flex items-center justify-center w-12 h-12 border rounded-full shadow-sm hover:bg-gray-50 transition-all disabled:opacity-50">
                                <ChevronLeft size={24} />{" "}
                                {/* Ваша иконка здесь */}
                            </button>
                             <p className="text-gray-400 text-sm md:hidden flex items-center justify-center">
                            <span className="text-white font-medium">01</span>{" "}
                            of 60
                        </p>
                            {/* Кастомная кнопка ВПЕРЕД */}
                            <button className="swiper-button-next-custom flex items-center justify-center w-12 h-12 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition-all disabled:opacity-50">
                                <ChevronRight size={24} />{" "}
                                {/* Ваша иконка здесь */}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SwiperJS;
