import { HTMLInputTypeAttribute } from "react";
import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select";
import { Input } from "@/app/components/ui/input";
import { FormField } from "@/app/components/ui/form";
import { Mail, Phone } from "lucide-react";
export interface FormFieldConfig {
    name: string;
    label: string;
    placeholder: string;
    type?: HTMLInputTypeAttribute; // стандартные типы: text, email, tel
    className?: string; // для управления сеткой (например, col-span-2)
    options?: { label: string; value: string }[]; // только для селектов
}
export const contactInfoFields: FormFieldConfig[] = [
    { name: "firstName", label: "First Name", placeholder: "Enter First Name" },
    { name: "lastName", label: "Last Name", placeholder: "Enter Last Name" },
    {
        name: "email",
        label: "Email",
        placeholder: "Enter your Email",
        type: "email",
    },
    {
        name: "phone",
        label: "Phone",
        placeholder: "Enter Phone Number",
        type: "tel",
    },
];

export const propertyDetailsFields: FormFieldConfig[] = [
    {
        name: "location",
        label: "Preferred Location",
        placeholder: "Select Location",
        options: [
            { label: "London", value: "london" },
            { label: "Miami", value: "miami" },
        ],
    },
    {
        name: "propertyType",
        label: "Property Type",
        placeholder: "Select Property Type",
        options: [
            { label: "Villa", value: "villa" },
            { label: "Apartment", value: "apartment" },
        ],
    },
    {
        name: "bathrooms",
        label: "No. of Bathrooms",
        placeholder: "Select No. of Bathrooms",
        options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5+", value: "5-plus" },
        ],
    },
    {
        name: "bedrooms",
        label: "No. of Bedrooms",
        placeholder: "Select No. of Bedrooms",
        options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5+", value: "5-plus" },
        ],
    },
    
];
// 3. Третий ряд: Бюджет
export const budgetConfig = {
  name: "budget",
  label: "Budget",
  placeholder: "Select Budget",
  options: [
    { label: "$100k - $200k", value: "100-200" },
    { label: "$200k - $500k", value: "200-500" },
    { label: "$500k+", value: "500-plus" }
  ]
};

// 4. Способы связи (для кастомных радио-кнопок)
export const contactMethods: FormFieldConfig[] = [
  { id: "phone", label: "Enter Your Number", icon: "/phone.svg" },
  { id: "email", label: "Enter Your Email", icon: "/email.svg" },
  
];

// 5. Поле сообщения (Нижний блок)
export const messageField: FormFieldConfig = {
    name: "message",
    label: "Message",
    placeholder: "Enter your Message here..",
    type: "textarea",
    className: "col-span-full" // Растягиваем на всю ширину
};

// Вспомогательный компонент для прохода циклом
export function RenderField({
    config,
    form,
}: {
    config: FormFieldConfig;
    form: any;
}) {
    return (
        <FormField
            control={form.control}
            name={config.name}
            render={({ field }) => (
                <FormItem className={config.className}>
                    <FormLabel className="text-white">{config.label}</FormLabel>
                    <FormControl>
                        {config.options ? (
                            /* Если есть опции — рисуем Select */
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                
                            >
                                <SelectTrigger className="bg-[#1a1a1a] border-zinc-800">
                                    <SelectValue
                                        placeholder={config.placeholder}
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    {config.options.map((opt) => (
                                        <SelectItem
                                            key={opt.value}
                                            value={opt.value}
                                        >
                                            {opt.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        ) : (
                            /* Если опций нет — обычный Input */
                            <Input
                                type={config.type || "text"}
                                placeholder={config.placeholder}
                                className="bg-[#1a1a1a] border-zinc-800"
                                {...field}
                            />
                        )}
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
