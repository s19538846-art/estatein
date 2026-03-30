
/// Тип для карточки недвижимости/
interface PropertyCard {
  /** Название объекта недвижимости */
  title: string;
  /** Краткое описание (первые несколько слов из описания) */
  description: string;
  /** Количество спален */
  bedrooms: number;
  /** Количество ванных комнат */
  bathrooms: number;
  /** Тип недвижимости (вилла, квартира, дом и т.д.) */
  propertyType: 'Villa' | 'Apartment' | 'House' | 'Condo' | string;
  /** Стоимость в долларах */
  price: number;
  /** Флаг, указывающий, есть ли полное описание (для кнопки "Read More") */
  hasFullDescription?: boolean;
}
