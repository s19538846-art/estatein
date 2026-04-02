// components/FAQCard.tsx
import React, { useState } from 'react';
// types/faq.types.ts
export interface FAQItem {
  id: string | number;
  question: string;
  answer: string;
  category?: string;
  isExpanded?: boolean;
}

export interface FAQCardProps {
  item: FAQItem;
  onToggle?: (id: string | number) => void;
  isExpanded?: boolean;
}
export const FAQCard: React.FC<FAQCardProps> = ({ 
  item, 
  onToggle,
  isExpanded: controlledExpanded 
}) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  
  const isExpanded = controlledExpanded !== undefined 
    ? controlledExpanded 
    : internalExpanded;

  const handleToggle = () => {
    if (controlledExpanded === undefined) {
      setInternalExpanded(!internalExpanded);
    }
    onToggle?.(item.id);
  };

  return (
  <div className="max-w-[400px] bg-[#141414] p-6 text-white">
      {/* Иконка / Декоративный элемент */}
      {/* <div className="mb-6 flex">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-[#1a1a1a]">
          <div className="h-2 w-2 rounded-full bg-magenta-500 shadow-[0_0_10px_rgba(212,33,128,0.8)]" 
               style={{ backgroundColor: '#D42180' }} />
        </div>
      </div> */}

      {/* Контент */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold leading-tight text-zinc-100">
          How do I search for properties on Estatein?
        </h3>
        
        <p className="text-sm leading-relaxed text-zinc-400">
          Learn how to use our user-friendly search tools to find properties that match your criteria.
        </p>

        {/* Кнопка */}
        <div className="pt-2">
          <button className="rounded-lg border border-zinc-800 bg-[#1a1a1a] px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-800 active:scale-95">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};