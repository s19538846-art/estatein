"use client";
import ServicesHero from "./ServicesHero";
import ServicesGrid from "./ServicesGrid";
import Footer from "@/app/components/Footer";
import UnlockValue from "./UnlockValue";
import PropertyManagement from "./PropertyManagement";
import SmartInvestments from "./SmartInvestments";
import BannerWithImageSvgs from "@/app/components/Banner";

export default function ServicesPage() {
    return (
        <main>
            <ServicesHero />
            <ServicesGrid />
            <UnlockValue />
            <PropertyManagement />
            <SmartInvestments />
            <BannerWithImageSvgs
                title="Start Your Real Estate Journey Today"
                description="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way."
                buttonText="Explore Properties"
                // Просто передаем пути к файлам
                leftImageUrl="/lefticonforbanner.svg"
                rightImageUrl="/righticonforbanner.svg"
                onButtonClick={() => alert("Поиск свойств...")}
            />
        </main>
    );
}
