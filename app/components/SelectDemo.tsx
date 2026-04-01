"use client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Calendar, Car } from "lucide-react";
import Image from "next/image";
// Тип для отдельной опции в выпадающем списке
export interface SelectOption {
    label: string;
    value: string;
}

// Тип для объекта конфигурации поля
export interface BookingField {
    id: string;
    label: string;
    placeholder: string;
    icon: string; // Если используете SVG файлы напрямую, замените на string
    options: SelectOption[];
}
export const bookingFields = [
    {
        id: "location",
        label: "Location",
        placeholder: "Search location",
        icon: "/location.svg",
        options: [
            { label: "Bishkek, Kyrgyzstan", value: "bishkek" },
            { label: "Osh, Kyrgyzstan", value: "osh" },
            { label: "Almaty, Kazakhstan", value: "almaty" },
            { label: "Astana, Kazakhstan", value: "astana" },
            { label: "Tashkent, Uzbekistan", value: "tashkent" },
        ],
    },
    {
        id: "type",
        label: "Property Type",
        placeholder: "Select Type",
        icon: "/home.svg",
        options: [
            { label: "Villa", value: "villa" },
            { label: "Apartment", value: "apartment" },
            { label: "Townhouse", value: "townhouse" },
            { label: "Cottage", value: "cottage" },
            { label: "Office", value: "office" },
        ],
    },
    {
        id: "price",
        label: "Price Range",
        placeholder: "Select Range",
        icon: "/price.svg",
        options: [
            { label: "$100,000 - $300,000", value: "budget" },
            { label: "$300,000 - $600,000", value: "mid-range" },
            { label: "$600,000 - $1,000,000", value: "premium" },
            { label: "$1,000,000+", value: "luxury" },
        ],
    },
    {
        id: "size",
        label: "Property Size",
        placeholder: "Select Size",
        icon: "/size.svg",
        options: [
            { label: "Under 100 m²", value: "small" },
            { label: "100 - 250 m²", value: "medium" },
            { label: "250 - 500 m²", value: "large" },
            { label: "500+ m²", value: "extra-large" },
        ],
    },
    {
        id: "build-year",
        label: "Build Year",
        placeholder: "Select Year",
        icon: "/date.svg",
        options: [
            { label: "Before 2000", value: "before-2000" },
            { label: "2000 - 2010", value: "2000-2010" },
            { label: "2011 - 2020", value: "2011-2020" },
            { label: "After 2020", value: "after-2020" },
        ],
    },
];
interface SelectDemoProps {
    fields: BookingField[];
    onValueChange?: (id: string, value: string) => void;
    className?: string;
    icon?: string;
}
export default function SelectField({
    fields,
    onValueChange,
    className,
    icon,
}: SelectDemoProps) {
    return (
        <div className={cn("flex  gap-5", className)}>
            {bookingFields.map((field) => (
                <Select
                    key={field.id}
                    onValueChange={(val) => onValueChange?.(field.id, val)}
                >
                    <SelectTrigger className="w-full max-w-[240px] h-[72px] bg-[#141414] border-white/5 rounded-[12px] p-5 focus:ring-0">
                        <div className="flex items-center gap-3">
                            {field.icon && (
                                <Image
                                    src={field.icon}
                                    alt={field.label}
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 text-white"
                                />
                            )}
                            <div className="flex flex-col items-start">
                                {/* <span className="text-[10px] uppercase text-white/40 font-bold tracking-wider">
                                    {field.label}
                                </span> */}
                                <SelectValue placeholder={field.placeholder} />
                            </div>
                        </div>
                    </SelectTrigger>

                    <SelectContent className="bg-[#121212] border-white/10 text-white flex ">
                        <SelectGroup className="">
                            <SelectLabel className="text-white/40">
                                {field.label} Options
                            </SelectLabel>
                            {field.options.map((opt) => (
                                <SelectItem
                                    key={opt.value}
                                    value={opt.value}
                                    className="focus:bg-white/10 focus:text-white"
                                >
                                    {opt.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            ))}
        </div>
    );
}
