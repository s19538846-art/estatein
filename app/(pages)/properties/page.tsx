"use client";
import BannerWithImageSvgs from "@/app/components/Banner";
import FormFieldWrapper from "@/app/components/FormFieldWrapper";
import PropertyContactForm, { FormRhfInput } from "@/app/components/FormPage";
import SearchInput, { InputInline } from "@/app/components/SearchInput";
import InputGrid from "@/app/components/InputGrid";
import { SearchProduct } from "@/app/components/SearchProduct";
import FormSelect from "@/app/components/Select";
import SelectDemo from "@/app/components/SelectField";
import ProductsSlider from "@/app/components/ui/features/ProductsSlider";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select";
import SliderWrapper from "@/app/components/ui/SliderWrapper";
import { MapPin, Search } from "lucide-react";
import { Form } from "radix-ui";
import React from "react";
import MainForm from "@/app/components/sections/properties/MainForm";

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
            <div className="p-4 m-auto max-w-7xl pb-30">
                <SelectDemo />
            </div>
            <SliderWrapper
                title="Discover a World of Possibilities"
                description="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
            >
                <SearchProduct />
            </SliderWrapper>
            <SliderWrapper
                title="Let's Make it Happen"
                description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
            >
                <div className="pb-30">
                    <MainForm />
                </div>
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
        </div>
    );
}
