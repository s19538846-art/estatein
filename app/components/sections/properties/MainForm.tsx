"use client"; // ОБЯЗАТЕЛЬНО для работы хуков

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormMessage } from "@/app/components/ui/form";
import {
    RenderField,
    contactInfoFields,
    propertyDetailsFields,
    budgetConfig,
    contactMethods,
} from "@/app/components/sections/properties/FormField";
import { Checkbox } from "../../ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "../../ui/field";
import { CheckboxBasic } from "./CheckboxDemo";
import { Button } from "../../ui/button";
import Image from "next/image";

// 1. Описываем схему валидации (какие поля есть в форме)
const formSchema = z.object({
    firstName: z.string().min(2, "Name is too short"),
    lastName: z.string().min(2, "Last name is too short"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(5, "Invalid phone"),
    // Добавь остальные поля из твоих конфигов...
});

export default function MainForm() {
    // 2. Инициализируем ту самую переменную 'form'
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        },
    });

    // 3. Функция обработки отправки
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Form Submitted:", values);
    }

    return (
        <div className="p-6 bg-[#0f0f0f] border border-[#262626] rounded-[12px] max-w-7xl m-auto">
            {/* 4. Обертка Form из shadcn (прокидывает контекст) */}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-10 "
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfoFields.map((field) => (
                            <RenderField
                                key={field.name}
                                config={field}
                                form={form}
                            />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {propertyDetailsFields.map((field) => (
                            <RenderField
                                key={field.name}
                                config={field}
                                form={form}
                            />
                        ))}
                    </div>

                    {/* Группа 3: Бюджет и Контакты (Сетка 2 колонки на десктопе) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
                        {/* 1. Бюджет — используем RenderField, он сам создаст Label и Select */}
                        <RenderField config={budgetConfig} form={form} />

                        <div className="space-y-2">
                            {/* Важно: Label должен быть такой же по высоте и стилю, как в RenderField */}
                            <p className="text-sm font-semibold text-white">
                                Preferred Contact Method
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {contactMethods.map((method) => {
                                    const isActive =
                                        form.watch("contactMethod") ===
                                        method.id;
                                    const Icon = method.icon;
                                    return (
                                        <div
                                            key={method.id}
                                            onClick={() =>
                                                form.setValue(
                                                    "contactMethod",
                                                    method.id,
                                                )
                                            }
                                            className={`
                                              flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all h-[58px]
                                              ${
                                                  isActive
                                                      ? "border-purple-600 bg-[#1a1a1a]"
                                                      : "border-[#262626] bg-[#141414] hover:border-zinc-700"
                                              }
                                            `}
                                        >
                                            {/* Иконка и текст */}
                                            <Image
                                                src={method.icon}
                                                alt={method.label}
                                                width={18}
                                                height={18}
                                                className="opacity-70" // пример стилизации под zinc-400
                                            />
                                            <span className="text-sm text-zinc-400 truncate">
                                                {method.label}
                                            </span>

                                            {/* Индикатор-кружок */}
                                            <div
                                                className={`
                                              ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center
                                              ${isActive ? "border-purple-600 bg-purple-600" : "border-zinc-800"}
                                            `}
                                            >
                                                {isActive && (
                                                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Сообщение */}
                    <RenderField
                        config={{
                            name: "message",
                            label: "Message",
                            placeholder: "Enter your Message here..",
                            type: "textarea",
                        }}
                        form={form}
                    />
                    <div className="flex justify-between">
                        <CheckboxBasic />
                        <Button
                            type="submit"
                            className="bg-purple-600 p-3 rounded-lg"
                        >
                            Send Message
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
