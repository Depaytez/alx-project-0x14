import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({title, action}) => {
 return(
  <div className="container">
   <button onClick={action}>{title}</button>
  </div>
 );
}

export default Button;