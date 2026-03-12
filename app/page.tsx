import Header from "./components/Header";
import PropertyCard from "./components/PropertyCard";

const featuredProperties = [
  {
    image: "/image/img1.png",
    title: "Seaside Serenity Villa",
    description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    beds: 3,
    baths: 2,
    type: "Villa",
    price: "$550,000",
  },
  {
    image: "/image/img2.png",
    title: "Metropolitan Haven",
    description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
    beds: 2,
    baths: 2,
    type: "Villa",
    price: "$550,000",
  },
  {
    image: "/image/img3.png",
    title: "Rustic Retreat Cottage",
    description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    beds: 3,
    baths: 3,
    type: "Villa",
    price: "$550,000",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#141414]">
      <Header />
      
      <main className="max-w-[1440px] mx-auto py-20 px-6 md:px-16">
        {/* Заголовок секции */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">✨</span>
              <h2 className="text-white text-4xl font-bold">Featured Properties</h2>
            </div>
            <p className="text-gray-400">
              Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.
            </p>
          </div>
          <button className="bg-[#1A1A1A] text-white border border-[#262626] px-6 py-4 rounded-lg hover:bg-[#262626] transition-all whitespace-nowrap text-sm">
            View All Properties
          </button>
        </div>

        {/* Сетка с карточками */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property, index) => (
            <PropertyCard 
              key={index}
              {...property}
            />
          ))}
        </div>

        {/* Пагинация */}
        <div className="mt-12 flex items-center justify-between border-t border-[#262626] pt-8">
          <div className="text-white">
            <span className="font-bold text-lg">01</span> <span className="text-gray-500">of 60</span>
          </div>
          <div className="flex gap-4">
            <button className="p-4 rounded-full border border-[#262626] text-white hover:bg-[#1A1A1A] transition-colors">
              ←
            </button>
            <button className="p-4 rounded-full border border-[#262626] text-white hover:bg-[#1A1A1A] transition-colors">
              →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
