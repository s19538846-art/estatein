import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // Используем иконку стрелки из lucide-react

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col items-center justify-center p-8 bg-[#1A1A1A] border border-white/5 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-[#1a1a1a] hover:border-white/10 w-full max-w-[300px] h-[200px]"
    >
      {/* Иконка стрелки в углу */}
      <div className="absolute top-4 right-4 text-gray-500 transition-colors group-hover:text-white">
        <ArrowUpRight size={20} strokeWidth={1.5} />
      </div>

      {/* Контейнер для иконки с градиентным свечением */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Эффект свечения (кольца) */}
        <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Ободок иконки */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all">
          <div className="text-purple-400">
            {icon}
          </div>
        </div>
      </div>

      {/* Заголовок */}
      <h3 className="text-white text-center text-sm font-medium tracking-tight">
        {title}
      </h3>
    </div>
  );
};

export default FeatureCard;