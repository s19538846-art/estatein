"use client";

import React from "react";
import SwiperJS from "@/app/components/SwiperJS";
import "swiper/css/navigation";
import { FAQCard, FAQItem } from "../../FAQCard";
export default function FAQSlider() {
   const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'How do I search for properties on Estatein?',
    answer: 'Learn how to use our user-friendly search tools to find properties that match your criteria. You can filter by location, price range, property type, and many other parameters to narrow down your search results.',
    category: 'Search'
  },
  {
    id: 2,
    question: 'How do I schedule a property viewing?',
    answer: 'Once you find a property you\'re interested in, you can schedule a viewing directly through our platform. Simply click the "Schedule Viewing" button on the property page and choose a time that works for you.',
    category: 'Viewings'
  },
  {
    id: 3,
    question: 'What documents do I need to make an offer?',
    answer: 'To make an offer on a property, you\'ll need to provide proof of funds, identification documents, and any pre-approval letters from lenders if applicable.',
    category: 'Purchasing'
  },
  {
    id: 4,
    question: 'Can I save my favorite properties?',
    answer: 'Yes! You can save properties to your favorites list by clicking the heart icon on any property listing. You can access your saved properties anytime from your dashboard.',
    category: 'Account'
  },
  {
    id: 5,
    question: 'How do I contact an agent?',
    answer: 'Each property listing has a dedicated agent assigned. You can contact them directly through the contact form on the property page or by calling the number provided.',
    category: 'Support'
  }
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
                {faqData.map((slide) => (
                    <div
                        key={slide.id}
                        className={` max-h-[692px] max-w-[600px] w-full flex flex-col gap-6 items-start justify-start text-white text-start text-2xl rounded-lg p-10 border border-[Grey-15]`}
                    >
                       <FAQCard item={slide} />
                    </div>
                ))}
            </SwiperJS>
        </div>
    );
}
