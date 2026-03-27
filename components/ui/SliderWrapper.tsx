import React from "react";
import { Button } from "./button";
import Image from "next/image";
interface SliderWrapperProps {
    children: React.ReactNode;
    title: string;
    description: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
}
export default function SliderWrapper({
    children,
    title,
    description,
    primaryButtonText,
    primaryButtonLink = "/",
}: {
    children: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="md:py-10 flex flex-col md:gap-20 p-4 max-w-7xl m-auto">
            <div className="flex flex-col md:flex-row justify-between text-start items-end gap-50 relative">
                <div>
                    <div className="absolute -left-3 -top-8">
                        <Image
                            className="w-17 h-7"
                            src="/Abstract Design.svg"
                            width={30}
                            height={30}
                            alt="/"
                        />
                    </div>
                    <h2 className="font-semibold text-[48px] text-white ">
                        {title}
                    </h2>
                    <p className="text-[#999]">{description}</p>
                </div>
                {(primaryButtonText) && (
                    <Button className="hidden md:flex border border-[#262622] bg-[#1A1A1A] text-white rounded-[10px] px-5  py-3.5 md:py-4.5">
                    {primaryButtonText}
                </Button>
                )}
            </div>
            <div>{children}</div>
        </div>
    );
}
