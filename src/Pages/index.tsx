import React from 'react';
import PrimaryLayout from '@/components/Layouts/PrimaryLayout';
import HeroSection from '@/components/HeroSection/HeroSection';
import FeaturesSection from '@/components/FeaturesSection/FeaturesSection';

const HomePage: React.FC = () => {
  return (
    <PrimaryLayout>
   <div className=' pt-10 bg-[#F3F3F3] '>
   <HeroSection/>
   <FeaturesSection/>
   </div>
    </PrimaryLayout>
  );
};



export default HomePage;
