import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MainPage.css";

const items = []; // Initialize an empty array to store the items

for (let i = 0; i < 10; i++) {
  // Create an object for each item
  const item = {
    id: i + 1,
    image: `https://source.unsplash.com/random/800x600?sig=${i}`, // Random stock images
    property1: `Name-${i + 1}`,
    property2: `SellerName-${i + 1}`,
    property3: `Price-${i + 1}`,
  };

  // Add the item to the items array
  items.push(item);
}

const CarouselSection = ({ title }) => {
  function buy(index) {
    console.log(`Buying item ${index}`);
  }
  return (
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
        {items.map((item, index) => (
          <div key={item.id} className="carousel-item">
            <img src={item.image} alt={`Item ${item.id}`} />
            <div className="item-details">
              <button
                onClick={() => {
                  buy(index);
                }}
              >
                BUY
              </button>
              <p>{item.property1}</p>
              <p>{item.property2}</p>
              <p>{item.property3}</p>
              <p>{item.property4}</p>
              {/* Buy button */}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const MainPage = (props) => (
  <div className="main-page">
    <CarouselSection username={props.username} title="Skins" />
    <CarouselSection username={props.username} title="Animations" />
    <CarouselSection username={props.username} title="Subheading 3" />
    <CarouselSection username={props.username} title="Subheading 4" />
  </div>
);

export default MainPage;