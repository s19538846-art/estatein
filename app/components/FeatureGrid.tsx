import { Store, Banknote, Building2, Sun } from 'lucide-react';
import FeatureCard from './FeatureCard';

export const FeaturesGrid = () => {
  const cards = [
    { title: "Find Your Dream Home", icon: <Store size={24} /> },
    { title: "Unlock Property Value", icon: <Banknote size={24} /> },
    { title: "Effortless Property Management", icon: <Building2 size={24} /> },
    { title: "Smart Investments, Informed Decisions", icon: <Sun size={24} /> },
  ];

  return (
    <div className=" p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <FeatureCard 
            key={index} 
            title={card.title} 
            icon={card.icon} 
          />
        ))}
      </div>
    </div>
  );
};