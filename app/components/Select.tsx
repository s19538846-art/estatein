import SelectDemo from "../app/components/SelectField";
import { Field, FieldLabel } from "./ui/field";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

interface SelectOption {
    label: string;
    value: string;
}

interface FormSelectProps {
    label: string;
    options: SelectOption[];
    placeholder?: string;
    onChange: (value: string) => void;
    value?: string;
    error?: string;
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
    {
        id: "bathrooms",
        label: "No. of Bathrooms",
        placeholder: "Select no. of Bathrooms",
        icon: "/bathroom.svg", // путь к иконке, если она есть
        options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4+", value: "4-plus" },
        ],
    },
    {
        id: "bedrooms",
        label: "No. of Bedrooms",
        placeholder: "Select no. of Bedrooms",
        icon: "/bedroom.svg", // путь к иконке, если она есть
        options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5+", value: "5-plus" },
        ],
    },
];
export default function FormSelect({
    label,
    options,
    placeholder,
    onChange,
    value,
    error,
}: FormSelectProps) {
    return (
        <div className="flex flex-col gap-2">
            {bookingFields.map((field) => (
                <Selec
    
        </div>
    );
}
