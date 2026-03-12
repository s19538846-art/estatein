import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface StatItem {
    value: string;
    label: string;
}

interface ImageProps {
    src: string;
    alt: string;
    position?: "left" | "right";
}
interface InfoBlockProps {
    title: string;
    subtitle?: string;
    description: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    stats: StatItem[];
    image?: ImageProps;
    backgroundImage?: string;
    variant?: "hero" | "story";
    // layout?: "left" | "right" | "center";
    className?: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
    title,
    subtitle,
    description,
    primaryButtonText,
    primaryButtonLink = "/",
    secondaryButtonText,
    secondaryButtonLink = "/",
    stats,
    image,
    backgroundImage,
    variant = "hero",
    // layout = "left",
    className = "",
}) => {
    // // Определяем классы для выравнивания
    // const alignmentClasses = {
    //     left: "text-left",
    //     right: "text-right ml-auto",
    //     center: "text-center mx-auto",
    // };

    // // Определяем классы для сетки статистики
    // const statsAlignmentClasses = {
    //     left: "justify-start",
    //     right: "justify-end",
    //     center: "justify-center",
    // };

    return (
        <div className="flex flex-col-reverse md:flex-row justify-between gap-20 max-w-7xl m-auto px-4 relative py-10 md:py-0 z-0">
            <div className="flex flex-col gap-10 md:gap-15 justify-center">
                <div>
                    <h1 className="text-[#FFF] font-semibold text-[46px]">
                        {title}
                    </h1>
                    <p className="text-[#999]">{description}</p>
                </div>
                {(primaryButtonText || secondaryButtonText) && (
                    <div
                        className="flex flex-col md:flex-row gap-5" 
                    >
                        {primaryButtonText && (
                            <Link className="" href={primaryButtonLink}>
                                <Button className="bg-[#141414] border border-[#262626] rounded-[10px] px-5 md:px-6 py-3.5 md:py-4.5 w-full">
                                    {primaryButtonText}
                                </Button>
                            </Link>
                        )}
                        {secondaryButtonText && (
                            <Link href={secondaryButtonLink}>
                                <Button className="bg-[#703BF7] border border-[#262626] rounded-[10px] px-5 md:px-6 py-3.5 md:py-4.5 w-full">
                                    {secondaryButtonText}
                                </Button>
                            </Link>
                        )}
                    </div>
                )}{" "}
                <div className="w-full">
                    {/* Контейнер с тремя блоками */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
                        {/* Первый блок */}
                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-[10px] px-4 md:px-6 py-4 min-h-[121px] w-full md:text-start text-center">
                            <h2 className="text-[#FFF] font-bold text-[30px]">
                                200+
                            </h2>
                            <p className="text-[#999] text-[16px] font-medium">
                                Happy Customers
                            </p>
                        </div>

                        {/* Второй блок */}
                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-[10px] px-4 md:px-6 py-4 min-h-[121px] w-full md:text-start text-center">
                            <h2 className="text-[#FFF] font-bold text-[30px]">
                                10k+
                            </h2>
                            <p className="text-[#999] text-[16px] font-medium">
                                Properties For Clients
                            </p>
                        </div>

                        {/* Третий блок */}
                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-[10px] px-4 md:px-6 py-4 min-h-[121px] w-full md:text-start text-center">
                            <h2 className="text-[#FFF] font-bold text-[30px]">
                                16+
                            </h2>
                            <p className="text-[#999] text-[16px] font-medium">
                                Years of Experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[--hero-background] w-full z-0">
                <Image
                    className="w-full"
                    src={image.src}
                    alt={image.alt}
                    width={920}
                    height={814}
                />
            </div>
            {/* <div className="">
                <Image
                    className="absolute z-10 top-0 left-0 md:top-1/2 lg:left-1/2 lg:top-1/2 md:left-1/2  transform -translate-x-1/2 -translate-y-1/2"
                    src="/Sub Container.webp"
                    alt="/"
                    width={90}
                    height={90}
                />
            </div> */}
        </div>
    );
};

export default InfoBlock;
