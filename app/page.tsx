import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import InfoBlock from "@/components/InfoBlock";
import Services from "@/components/Services";
import CustomSwiper from "@/components/CustomSwiper";

export default function Home() {
    const slides = [
        { content: <div>Слайд 1</div> },
        { content: <div>Слайд 2</div> },
        { content: <div>Слайд 3</div> },
    ];
    return (
        <>
            <main className="">
                <section className="">
                    <Header />
                    <div className="max-w-7xl m-auto">
                        <InfoBlock
                            title="Discover Your Dream"
                            subtitle="Property with Estafetind"
                            description="Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams."
                            primaryButtonText="Learn More"
                            secondaryButtonText="Browse Properties"
                            // stats={[
                            //     { value: "200+", label: "Happy Customers" },
                            //     {
                            //         value: "10k+",
                            //         label: "Properties For Clients",
                            //     },
                            //     { value: "16+", label: "Years of Experience" },
                            // ]}
                            image={{
                                src: "/hero.webp",
                                alt: "Beautiful property",
                                // position: "right",
                            }}
                            variant="hero"
                            // layout="left"
                        />
                        {/* <InfoBlock
                        title="Our Journey"
                        description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
                        stats={[
                            { value: "200+", label: "Happy Customers" },
                            { value: "10k+", label: "Properties For Clients" },
                            { value: "16+", label: "Years of Experience" },
                        ]}
                        image={{
                            src: "/heroImage-2.webp",
                            alt: "Beautiful property",
                            // position: "right",
                        }}
                        variant="story"
                        // layout="left"
                    /> */}
                    </div>
                </section>
                <div>
                    {/* <Services /> */}
                </div>
                <h1>Мой слайдер</h1>
                <CustomSwiper slides={slides} />
            </main>
        </>
    );
}
