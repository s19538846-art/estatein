import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

interface BannerWithImageSvgsProps {
    title: string;
    description: string;
    buttonText?: string; // Опционально: если нет, кнопки не будет
    onButtonClick?: () => void;
    leftImageUrl?: string; // Опционально: путь к SVG картинке слева (напр., '/left-pattern.svg')
    rightImageUrl?: string; // Опционально: путь к SVG картинке справа (напр., '/right-grid.svg')
}

const BannerWithImageSvgs: React.FC<BannerWithImageSvgsProps> = ({
    title,
    description,
    buttonText,
    onButtonClick,
    leftImageUrl,
    rightImageUrl,
}) => {
    return (
        <section className="relative w-full border-y border-[--Grey-15] py-16 px-6 md:px-12 lg:px-24 flex items-center min-h-[250px]">
            {/* Левое изображение (SVG) */}
            {leftImageUrl && (
                <Image
                    width={30}
                    height={30}
                    src={leftImageUrl}
                    alt="" // Декоративное изображение, alt пустой
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-auto max-w-[25%] object-contain object-left opacity-30 pointer-events-none"
                    // Стили: абсолютно слева, по центру вертикально, высота на весь баннер,
                    // ширина авто, макс ширина 25%, не мешает кликам, полупрозрачное.
                />
            )}

            {/* Правое изображение (SVG) */}
            {rightImageUrl && (
                <Image
                    width={30}
                    height={30}
                    src={rightImageUrl}
                    alt=""
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto max-w-[25%] object-contain object-right opacity-30 pointer-events-none"
                    // Те же стили, только прижато вправо
                />
            )}

            {/* Основной контент */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 w-full">
                {/* Текстовый блок */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
                        {title}
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Кнопка */}
                {buttonText && (
                    <div className="shrink-0 relative z-20">
                        <Button
                            className="bg-[#703bf7] border border-[#262626] rounded-[10px] px-5 md:px-6 py-3.5 md:py-4.5 w-full"
                            onClick={onButtonClick}
                        >
                            {buttonText}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BannerWithImageSvgs;

// {
//     /* Пример 1: Полный комплект (как на макете) */
// }
// <BannerWithImageSvgs
//     title="Start Your Real Estate Journey Today"
//     description="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way."
//     buttonText="Explore Properties"
//     // Просто передаем пути к файлам
//     leftImageUrl="/pattern-left.svg"
//     rightImageUrl="/grid-right.svg"
//     onButtonClick={() => alert("Поиск свойств...")}
// />;

// {
//     /* Пример 2: Без кнопки, но с картинками */
// }
// <BannerWithImageSvgs
//     title="Our Commitment to Quality"
//     description="We ensure the highest standards in all our properties and services."
//     leftImageUrl="/pattern-left.svg"
//     rightImageUrl="/grid-right.svg"
// />;

// {
//     /* Пример 3: Только текст (без картинок и кнопки) */
// }
// <BannerWithImageSvgs
//     title="Contact Us Anytime"
//     description="We are here to answer all your questions."
// />;
