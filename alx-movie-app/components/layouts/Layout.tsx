import React from 'react';
import { LayoutProps } from '@/interfaces';

const Layout: React.FC<LayoutProps> = ({ children }) => {
 return(
  <div className="container">
   {children}
  </div>
 )
}

export default Layout;