/// Тип для карточки недвижимости/
export interface PropertyCard {
    /** Название объекта недвижимости */
    title: string;
    /** Краткое описание (первые несколько слов из описания) */
    description: string;
    /** Количество спален */
    bedrooms: number;
    /** Количество ванных комнат */
    bathrooms: number;
    /** Тип недвижимости (вилла, квартира, дом и т.д.) */
    propertyType: "Villa" | "Apartment" | "House" | "Condo" | string;
    /** Стоимость в долларах */
    price: number;
    /** Флаг, указывающий, есть ли полное описание (для кнопки "Read More") */
    hasFullDescription?: boolean;
    location: string; // Добавлено
    size: number; // Добавлено (кв. м)
    buildYear: number; // Добавлено
}

export interface FilterState {
  location: string;
  propertyType: string;
  priceRange: string;
  propertySize: string;
  buildYear: string;
}
export const slides: PropertyCard[] = [
        {
            id: 1,
            title: "Seaside Serenity Villa",
            description:
                "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More",
            image: "/product-1.webp",
            bedrooms: 4,
            bathrooms: 3,
            propertyType: "Villa",
            price: 500000,
            location: "bishkek",
            size: 250,
            buildYear: 2022,
        },
        {
            id: 2,
            title: "Metropolitan Haven",
            description:
                "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
            image: "/product-2.webp",
            bedrooms: 4,
            bathrooms: 3,
            propertyType: "Villa",
            price: 500000,
        },
        {
            id: 3,
            title: "Rustic Retreat Cottage",
            description:
                "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More",
            image: "/product-3.webp",
            bedrooms: 4,
            bathrooms: 3,
            propertyType: "Villa",
            price: 500000,
            location: "almaty",
            size: 85,
            buildYear: 2020,
        },
        {
            id: 4,
            title: "Tropical Paradise Estate",
            description:
                "A luxurious 5-bedroom, 4-bathroom estate in a tropical paradise... Read More",
            image: "/product-3.webp",
            bedrooms: 4,
            bathrooms: 3,
            propertyType: "Villa",
            price: 500000,
            location: "osh",
            size: 100,
            buildYear: 2021,
        },
    ];