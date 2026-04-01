"use client";

import React from "react";
import SwiperJS from "./SwiperJS";
import ReviewCard from "./ReviewCard";
import "swiper/css/navigation";
export default function SliderTest() {
    let slides = [
        {
            id: 1,
            title: "Exceptional Service!",
            text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
            author: "Wade Warren",
            location: "USA, California",
            avatarUrl: "/avatars/wade-warren.png", // Замени на реальный путь
            rating: 5,
        },
        {
            id: 2,
            title: "Efficient and Reliable",
            text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
            author: "Emelie Thomson",
            location: "USA, Florida",
            avatarUrl: "/avatars/emelie-thomson.png",
            rating: 5,
        },
        {
            id: 3,
            title: "Trusted Advisors",
            text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
            author: "John Mans",
            location: "USA, Nevada",
            avatarUrl: "/avatars/john-mans.png",
            rating: 5,
        },
        {
            id: 4,
            title: "Trusted Advisors",
            text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
            author: "John Mans",
            location: "USA, Nevada",
            avatarUrl: "/avatars/john-mans.png",
            rating: 5,
        },
    ];
    return (
        <div className="text-white text-center pt-10 max-w-7xl m-auto">
            <SwiperJS
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={true}
                autoplayDelay={4000}
                pagination={true}
                navigation={true}
                keyboard={true}
                mousewheel={false}
                centeredSlides={false}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                onSlideChange={(swiper) =>
                    console.log("Слайд изменен:", swiper.activeIndex)
                }
                onInit={(swiper) => console.log("Swiper инициализирован")}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={` max-h-[692px] max-w-[600px] w-full flex flex-col gap-6 items-start justify-start text-white text-start text-2xl rounded-lg p-10 border border-[Grey-15]`}
                    >
                        <ReviewCard
                            title={slide.title}
                            text={slide.text}
                            author={slide.author}
                            location={slide.location}
                            avatarUrl={slide.avatarUrl}
                        />
                    </div>
                ))}
            </SwiperJS>
        </div>
    );
}
