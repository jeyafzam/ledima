import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import React, { ReactNode } from 'react';


interface PrimaryLayoutProps {
  children: ReactNode;
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header/>
      {children}
     <Footer/>
    </div>
  );
};

export default PrimaryLayout;
