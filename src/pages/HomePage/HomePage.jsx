import React from 'react';
import Hero from '../../components/sections/Hero';
import CategorySection from '../../features/home/components/CategorySection';
import FitnessCarousel from '../../features/home/components/FitnessCarousel';
import PricingSection from '../../components/sections/PricingSection';

const HomePage = () => {
  const handleCategorySelect = (category) => {
    console.log(`Selected category: ${category}`);
    // Handle category selection
  };

  const handleCarouselItemClick = (item) => {
    console.log('Clicked item:', item);
    // Handle item click
  };

  const handlePlanSelect = (plan) => {
    console.log('Selected plan:', plan);
    // Handle plan selection
  };

  return (
    <>
      <Hero heroImage="/images/banner1.jpg" />
      
      <div className="container">
        <CategorySection 
          categories={['Walking', 'Running', 'Lifting']}
          onCategorySelect={handleCategorySelect}
        />
        
        <FitnessCarousel onItemClick={handleCarouselItemClick} />
      </div>

      <div className="container">
        <PricingSection onPlanSelect={handlePlanSelect} />
      </div>
    </>
  );
};

export default HomePage; 