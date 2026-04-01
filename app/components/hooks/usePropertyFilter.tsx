import { FilterState, PropertyCard, slides } from "@/app/types/card.types";
import { useMemo, useState } from "react";


export const usePropertyFilter = (properties: PropertyCard[]) => {
  const [filters, setFilters] = useState<FilterState>({
    location: "",
    propertyType: "",
    priceRange: "",
    propertySize: "",
    buildYear: "",
  });
  console.log("Is slides an array?", Array.isArray(slides));
console.log("Value of slides:", slides);
  const filteredProperties = useMemo(() => {
    return properties.filter((item) => {
      // 1. Фильтр по локации
      const matchLocation = filters.location ? item.location === filters.location : true;

      // 2. Фильтр по типу
      const matchType = filters.propertyType ? item.propertyType.toLowerCase() === filters.propertyType.toLowerCase() : true;

      // 3. Фильтр по цене (парсим диапазоны)
      let matchPrice = true;
      if (filters.priceRange) {
        if (filters.priceRange === "budget") matchPrice = item.price <= 300000;
        if (filters.priceRange === "mid-range") matchPrice = item.price > 300000 && item.price <= 600000;
        if (filters.priceRange === "luxury") matchPrice = item.price > 600000;
      }

      // 4. Фильтр по размеру
      let matchSize = true;
      if (filters.propertySize) {
        if (filters.propertySize === "small") matchSize = item.size < 100;
        if (filters.propertySize === "medium") matchSize = item.size >= 100 && item.size <= 250;
        if (filters.propertySize === "large") matchSize = item.size > 250;
      }

      // 5. Фильтр по году постройки
      const matchYear = filters.buildYear ? item.buildYear.toString() === filters.buildYear : true;

      return matchLocation && matchType && matchPrice && matchSize && matchYear;
    });
  }, [filters, properties]);

  return { filters, setFilters, filteredProperties };
};