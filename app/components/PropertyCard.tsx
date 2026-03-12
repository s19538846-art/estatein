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
    <div className="bg-[#141414]  border border-[#262626] rounded-[12px] p-6 flex flex-col gap-6">
      {/* Изображение */}
      <div className=" w-full h-[220px] overflow-hidden rounded-[10px]">    
        <Image
            src={image} 
            alt={title} 
            width={600}      // Базовая ширина для оптимизации
            height={400}     // Базовая высота
            className="w-full h-full object-cover" />
      </div>

      {/* Контент */}
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">
          {description} <span className="text-white cursor-pointer underline">Read More</span>
        </p>
      </div>

      {/* Теги характеристик */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1 bg-[#1A1A1A] border border-[#262626] px-3 py-1.5 rounded-full text-xs text-white">
           <span>🛏️ {beds}-Bedroom</span>
        </div>
        <div className="flex items-center gap-1 bg-[#1A1A1A] border border-[#262626] px-3 py-1.5 rounded-full text-xs text-white">
           <span>🚿 {baths}-Bathroom</span>
        </div>
        <div className="flex items-center gap-1 bg-[#1A1A1A] border border-[#262626] px-3 py-1.5 rounded-full text-xs text-white">
           <span>🏠 {type}</span>
        </div>
      </div>

      {/* Цена и Кнопка */}
      <div className="flex items-center justify-between mt-auto pt-4">
        <div className="flex flex-col">
          <span className="text-gray-400 text-xs">Price</span>
          <span className="text-white text-xl font-bold">{price}</span>
        </div>
        <Link 
          href="#" 
          className="bg-[#703BF7] text-white px-5 py-3 rounded-[8px] text-sm font-medium hover:bg-[#5D2ED1] transition-colors"
        >
          View Property Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;