import Image, { ImageProps } from "next/image";
import React from "react";
interface ServicesProps {
    icon: ImageProps;
    title: string;
    description: string;

}

const Services: React.FC<ServicesProps> = () {
    return <div className="bg-[#1A1A1A] px-5 py-10">
        <Image src="/services-1.svg" alt="/" width={82} height={82}/>
        <h2>Find Your Dream Home</h2>
        <Image src="/arrow.svg" alt="/" width={34} height={34}/>
        <p></p>
    </div>;
}
