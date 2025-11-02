import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Listing Card</div>
        <p className="text-gray-700 text-base">
          This is a reusable component for property listings.
        </p>
      </div>
    </div>
  );
};

export default Card;