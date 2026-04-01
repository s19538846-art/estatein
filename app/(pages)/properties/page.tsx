import BannerWithImageSvgs from "@/components/Banner";
import FormFieldWrapper from "@/components/FormFieldWrapper";
import PropertyContactForm, { FormRhfInput } from "@/app/components/FormPage";
import SearchInput, { InputInline } from "@/app/components/SearchInput";
import InputGrid from "@/components/InputGrid";
import { SearchProduct } from "@/components/SearchProduct";
import FormSelect from "@/components/Select";
import SelectDemo from "@/app/components/SelectField";
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
import { MapPin, Search } from "lucide-react";
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
                <SearchProduct />
            </SliderWrapper>
            <div className="p-4 m-auto max-w-7xl">
                <SelectDemo />
            </div>
            <div className="py-20 m-auto max-w-7xl">
                {" "}
                <InputGrid />
            </div>

            {/* <FormSelect /> */}

            <FormRhfInput />
        </div>
    );
}
