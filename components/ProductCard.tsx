import React from 'react';
import type { Product } from '@/types/cards.types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart 
}) => {
  const { name, price, image, oldPrice, rating, inStock = true } = product;

  return (
    <div className="flex items-center gap-4 bg-white rounded-lg shadow-sm p-3">
      <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
      <div className="flex-1 min-w-0">
        <h3 className="font-medium truncate">{product.name}</h3>
        <p className="text-lg font-bold">{product.price} ₽</p>
      </div>
      <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
};
