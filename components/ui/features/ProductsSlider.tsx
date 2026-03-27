"use client";
import SwiperJS from "@/components/SwiperJS";
import { Bath, Bed, Building2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../button";
import Link from "next/link";

export default function ProductsSlider() {
    const slides = [
        {
            id: 1,
            title: "Seaside Serenity Villa",
            description:
                "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More",
            image: "/product-1.webp",
            bedrooms: 4,
            bathrooms: 3,
            propertyType: "Villa",
            price: 500000,
        },
        {
            id: 2,
            title: "Metropolitan Haven",
            description:
                "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
            image: "/product-2.webp",
            bedrooms: 4,
            bathrooms: 3,
            propertyType: "Villa",
            price: 500000,
        },
        {
            id: 3,
            title: "Rustic Retreat Cottage",
            description:
                "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More",
            image: "/product-3.webp",
            bedrooms: 4,
            bathrooms: 3,
            propertyType: "Villa",
            price: 500000,
        },
        {
            id: 4,
            title: "Tropical Paradise Estate",
            description:
                "A luxurious 5-bedroom, 4-bathroom estate in a tropical paradise... Read More",
            image: "/product-3.webp",
            bedrooms: 4,
            bathrooms: 3,
            propertyType: "Villa",
            price: 500000,
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
                        <Image
                            className="w-full"
                            src={slide.image}
                            alt={slide.title}
                            width={200}
                            height={200}
                        />
                        <div>
                            <h3 className="font-bold">{slide.title}</h3>
                            <p className="text-sm">{slide.description}</p>
                        </div>
                        <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 py-2 overflow-x-auto lg:overflow-visible">
                            <div className="flex items-center gap-2 bg-[#1a1a1a] border border-zinc-800 px-4 py-2 rounded-full text-white text-sm whitespace-nowrap shadow-sm hover:border-zinc-700 transition-colors">
                                <Bed size={16} className="text-zinc-400" />
                                <span>4-Bedroom</span>
                            </div>

                            <div className="flex items-center gap-2 bg-[#1a1a1a] border border-zinc-800 px-4 py-2 rounded-full text-white text-sm whitespace-nowrap shadow-sm hover:border-zinc-700 transition-colors">
                                <Bath size={16} className="text-zinc-400" />
                                <span>3-Bathroom</span>
                            </div>

                            <div className="flex items-center gap-2 bg-[#1a1a1a] border border-zinc-800 px-4 py-2 rounded-full text-white text-sm whitespace-nowrap shadow-sm hover:border-zinc-700 transition-colors">
                                <Building2
                                    size={16}
                                    className="text-zinc-400"
                                />
                                <span>Villa</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full pt-4">
                            <div className="flex flex-col">
                                <span className="text-zinc-500 text-sm">
                                    Price
                                </span>
                                <span className="text-2xl font-bold text-white">
                                    $550,000
                                </span>
                            </div>
                            <Link href="/">
                                <Button className="bg-[#703BF7] border border-[#262626] rounded-[10px] px-5 md:px-6 py-3.5 md:py-4.5 w-full">
                                    View Property Details
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </SwiperJS>
        </div>
    );
}
