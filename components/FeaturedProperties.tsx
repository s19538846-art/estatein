import Image from 'next/image';
import Link from 'next/link';

interface PropertyProps {
  image: string;
  title: string;
  description: string;
  beds: number;
  baths: number;
  type: string;
  price: string;
}

const PropertyCard = ({ image, title, description, beds, baths, type, price }: PropertyProps) => {
  return (
    // Увеличил внутренний отступ карточки (p-8) для большего пространства, как на фото
    <div className="bg-[#141414] border border-[#262626] rounded-[12px] p-8 flex flex-col gap-6 max-w-[400px]">
      
      {/* --- КОНТЕЙНЕР ИЗОБРАЖЕНИЯ (ИСПРАВЛЕНО) --- */}
      {/* Добавил фиксированную высоту (например, h-[240px]), скругление (rounded-[10px]) и overflow-hidden */}
      <div className="relative w-full h-[240px] overflow-hidden rounded-[10px] border border-[#262626]">    
        <Image
          src={image} 
          alt={title} 
          fill // Используем fill, чтобы изображение заполняло родительский контейнер
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Оптимизация загрузки
          priority // Можно добавить для ускорения загрузки первых изображений
          className="object-cover" // Критично: сохраняет пропорции и обрезает лишнее
        />
      </div>

      {/* Контент */}
      <div className="flex flex-col gap-3">
        <h3 className="text-white text-2xl font-semibold leading-tight">{title}</h3>
        <p className="text-[#999999] text-sm leading-relaxed">
          {description} 
          <span className="text-white cursor-pointer underline ml-1">Read More</span>
        </p>
      </div>

      {/* Теги характеристик: немного увеличил отступы для солидности */}
      <div className="flex flex-wrap gap-2.5">
        <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#262626] px-4 py-2 rounded-full text-sm text-white">
           <span className="opacity-70">🛌</span>
           <span>{beds}-Bedroom</span>
        </div>
        <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#262626] px-4 py-2 rounded-full text-sm text-white">
           <span className="opacity-70">🛁</span>
           <span>{baths}-Bathroom</span>
        </div>
        <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#262626] px-4 py-2 rounded-full text-sm text-white">
           <span className="opacity-70">🏠</span>
           <span>{type}</span>
        </div>
      </div>

      {/* Цена и Кнопка */}
      <div className="flex items-end justify-between mt-4 pt-4 border-t border-[#262626]">
        <div className="flex flex-col gap-1">
          <span className="text-[#999999] text-sm">Price</span>
          <span className="text-white text-2xl font-bold">{price}</span>
        </div>
        <Link 
          href="#" 
          className="bg-[#703BF7] text-white px-6 py-4 rounded-[10px] text-sm font-medium hover:bg-[#5D2ED1] transition-colors text-center"
        >
          View Property Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;