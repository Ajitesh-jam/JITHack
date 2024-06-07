import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MainPage.css';

const items = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  image: `https://source.unsplash.com/random/800x600?sig=${i}`, // Random stock images
  property1: `Property 1-${i + 1}`,
  property2: `Property 2-${i + 1}`,
  property3: `Property 3-${i + 1}`,
  property4: `Property 4-${i + 1}`,
}));

const CarouselSection = ({ title }) => (
  <div className="carousel-section">
    <h2 className="subheading">{title}</h2>
    <Carousel 
      showThumbs={false} 
      showStatus={false} 
      infiniteLoop={true} 
      useKeyboardArrows={true} 
      centerMode={true} 
      centerSlidePercentage={33.33} // Show three items at a time
      className="custom-carousel"
    >
      {items.map(item => (
        <div key={item.id} className="carousel-item">
          <img src={item.image} alt={`Item ${item.id}`} />
          <div className="item-details">
            <p>{item.property1}</p>
            <p>{item.property2}</p>
            <p>{item.property3}</p>
            <p>{item.property4}</p>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

const MainPage = () => (
  <div className="main-page">
    <CarouselSection title="Subheading 1" />
    <CarouselSection title="Subheading 2" />
    <CarouselSection title="Subheading 3" />
    <CarouselSection title="Subheading 4" />
  </div>
);

export default MainPage;
