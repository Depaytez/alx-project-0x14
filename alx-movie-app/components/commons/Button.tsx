import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({title, action}) => {
 return(
  <div className="container">
   <button className='px-8 py-2 border-2 border-[#E2D609] rounded-full hover:bg-[#E2D609] hover:text-black transition-colors duration-300' onClick={action}>
    {title}

   </button>
  </div>
 );
};

export default Button;