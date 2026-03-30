"use client";
import { Bath, Bed, Building2 } from "lucide-react";
import InfoBlock from "./components/InfoBlock";
import SliderWrapper from "./components/ui/SliderWrapper";
import ProductsSlider from "./components/ui/features/ProductsSlider";
import BannerWithImageSvgs from "./components/Banner";

export default function Home() {
    return (
        <main className="">
            <section className="">
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
                </div>
            </section>
            <div>{/* <Services /> */}</div>
            <section className="text-white text-center pt-10 max-w-7xl m-auto pb-40">
                {/* <ProductsSlider /> */}
                <SliderWrapper title="Featured Properties" description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more information.">
                    <ProductsSlider />
                </SliderWrapper>
                <BannerWithImageSvgs
                    title="Start Your Real Estate Journey Today"
                    description="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way."
                    buttonText="Explore Properties"
                    // Просто передаем пути к файлам
                    leftImageUrl="/lefticonforbanner.svg"
                    rightImageUrl="/righticonforbanner.svg"
                    onButtonClick={() => alert("Поиск свойств...")}
                />
            </section>
        </main>
    );
}
