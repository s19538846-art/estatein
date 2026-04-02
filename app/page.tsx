
"use client";
import ProductsSlider from "@/app/components/ui/features/ProductsSlider";
import InfoBlock from "@/app/components/InfoBlock";
import SliderWrapper from "@/app/components/ui/SliderWrapper";
import RatesSlider from "@/app/components/RatesSlider";
import BannerWithImageSvgs from "@/app/components/Banner";
import FAQSlider from "./components/sections/properties/FAQSlider";
import { FeaturesGrid } from "./components/FeatureGrid";

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
            <div>
                <FeaturesGrid/>
            </div>
            <section className="text-white text-center pt-10 max-w-7xl m-auto pb-40">
                {/* <ProductsSlider /> */}
                <SliderWrapper title="Featured Properties" description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more information." primaryButtonText="View All Properties">
                    <ProductsSlider />
                </SliderWrapper>
                <SliderWrapper title="What Our Clients Say" description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs." primaryButtonText="View All Testimonials">
                    <RatesSlider />
                </SliderWrapper>
                <SliderWrapper title="Frequently Asked Questions" description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way." primaryButtonText="View All FAQ’s">
                    <FAQSlider/>
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
