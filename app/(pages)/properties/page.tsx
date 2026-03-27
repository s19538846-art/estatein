import BannerWithImageSvgs from "@/components/Banner";
import FormFieldWrapper from "@/components/FormFieldWrapper";
import SearchInput, { InputInline } from "@/components/Input";
import { SelectDemo } from "@/components/SelectDemo";
import ProductsSlider from "@/components/ui/features/ProductsSlider";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import SliderWrapper from "@/components/ui/SliderWrapper";
import { MapPin } from "lucide-react";
import { Form } from "radix-ui";
import React from "react";

export default function PropertiesPage() {
    return (
        <div className="relative z-0">
            <BannerWithImageSvgs
                title="Find Your Dream Property"
                description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
            />
            <div className="px-6 max-w-7xl mx-auto w-full relative z-20 md:-mt-12">
                {/* Отрицательный margin (-mt-12) поднимает этот блок вверх */}
                <div className=" p-3">
                    <SearchInput />
                </div>
            </div>
            <SliderWrapper
                title="Discover a World of Possibilities"
                description="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
            >
                <ProductsSlider />
            </SliderWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-black rounded-3xl m-auto max-w-7xl">
               <SelectDemo/>
            </div>
        </div>
    );
}
