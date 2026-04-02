"use client";
import OurJourney from "@/app/(pages)/about/OurJourney";
import OurValues from "./OurValues";
import OurAchievements from "./OurAchievements";
import OurProcess from "./OurProcess";
import OurTeam from "./OurTeam";
import OurClients from "./OurClients";
import Footer from "@/app/components/Footer";
import BannerWithImageSvgs from "@/app/components/Banner";

export default function AboutUs() {
    return (
        <div>
            <main className="min-h-screen bg-[#141414]">
                <OurJourney />
                <OurValues />
                <OurAchievements />
                <OurProcess />
                <OurTeam />
                <OurClients />
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
        </div>
    );
}
