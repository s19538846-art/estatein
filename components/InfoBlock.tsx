import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface StatItem {
    value: string;
    label: string;
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
    backgroundImage?: string;
    variant?: "hero" | "story";
    layout?: "left" | "right" | "center";
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
    backgroundImage,
    variant = "hero",
    layout = "left",
    className = "",
}) => {
    // Определяем классы для выравнивания
    const alignmentClasses = {
        left: "text-left",
        right: "text-right ml-auto",
        center: "text-center mx-auto",
    };

    // Определяем классы для сетки статистики
    const statsAlignmentClasses = {
        left: "justify-start",
        right: "justify-end",
        center: "justify-center",
    };

    return (
        <div className="flex flex-col-reverse md:flex-row justify-between gap-20 max-w-7xl m-auto relative px-4 py-10 md:py-0">
            <div className="flex flex-col gap-15 justify-center">
                <div>
                    <h1 className="text-[#FFF] font-semibold text-[46px]">
                        {title}
                    </h1>
                    <p className="text-[#999]">{description}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                    <Link className="" href={primaryButtonLink}>
                        <Button className="bg-[#141414] border border-[#262626] rounded-[10px] px-5 md:px-6 py-3.5 md:py-4.5 w-full">
                            {primaryButtonText}
                        </Button>
                    </Link>
                    <Link href={secondaryButtonLink}>
                        <Button className="bg-[#703BF7] border border-[#262626] rounded-[10px] px-5 md:px-6 py-3.5 md:py-4.5 w-full">
                            {secondaryButtonText}
                        </Button>
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex flex-row gap-3 w-full">
                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-[10px] px-4 md:px-6 py-4 md:py-4 min-h-[121px] w-full text-center md:text-balance">
                            <h2 className="text-[#FFF] font-bold text-[30px]">
                                200+
                            </h2>
                            <p className="text-[#999] text-[16px] font-medium">
                                Happy Customers
                            </p>
                        </div>
                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-[10px] px-4 md:px-6 py-4 md:py-4 min-h-[121px] w-full text-center md:text-balance">
                            <h2 className="text-[#FFF] font-bold text-[30px]">
                                10k+
                            </h2>
                            <p className="text-[#999] text-[16px] font-medium">
                                Properties For Clients
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#1A1A1A] border border-[#262626] rounded-[10px] px-4 md:px-6 py-4 md:py-4 min-h-[121px] w-full text-center md:text-balance">
                        <h2 className="text-[#FFF] font-bold text-[30px]">
                            16+
                        </h2>
                        <p className="text-[#999] text-[16px] font-medium">
                            Years of Experience
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[--hero-background] w-full">
                <Image
                    className="w-full"
                    src="/hero.webp"
                    alt="/"
                    width={920}
                    height={814}
                />
            </div>
            {/* <div>
                <Image className="absolute top-1/2 left-1/2" src="/Sub Container.webp" alt="/" width={90} height={90}/>
            </div> */}
        </div>
    );
};

export default InfoBlock;
