"use client";
import { useMemo, useState } from "react";
import { bookingFields } from "../app/components/SelectField";
import { FilterState, PropertyCard } from "@/app/types/card.types";

// SearchProduct.tsx

import ProductsSlider from "./ui/features/ProductsSlider"; // Сам компонент
import { usePropertyFilter } from "@/app/components/hooks/usePropertyFilter"; // Хук для фильтрации
import { slides } from "@/app/types/card.types";

export const SearchProduct = () => {
    // 1. Получаем фильтры и отфильтрованный список
    const { filters, setFilters, filteredProperties } =
        usePropertyFilter(slides);

    return (
        <section>
            {/* 2. Блок с селектами (твой поиск) */}
            <div className="filter-bar">
                {/* ... твои селекты, которые вызывают setFilters ... */}
            </div>

            {/* 3. Отрисовываем слайдер, передавая ему ТОЛЬКО отфильтрованные данные */}
            <ProductsSlider data={filteredProperties} />
        </section>
    );
};
