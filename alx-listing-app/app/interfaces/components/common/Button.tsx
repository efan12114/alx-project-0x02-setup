import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = () => {
  return (
    <button className="px-4 py-2 font-bold bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-150">
      Click Here
    </button>
  );
};

export default Button;