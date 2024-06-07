import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MainPage.css";
import { gasPrice } from "../../utils/web";

const items = []; // Initialize an empty array to store the items

for (let i = 0; i < 10; i++) {
  // Create an object for each item
  const item = {
    id: i,
    image: `https://source.unsplash.com/random/800x600?sig=${i}`, // Random stock images
    property1: `Name-${i}`,
    property2: `SellerName-${i}`,
    property3: `Price-${i}`,
  };

  // Add the item to the items array
  items.push(item);
}

const CarouselSection = ({ title, username }) => {
  async function buy(index) {
    console.log(`Buying item ${index} with username: ${username}`);

    // Call the buy function in the smart contract
    // const contract = await GanacheContract();
    // const accounts = await connectWalletToLocalGanache();
    const contract = await polygonContract();

    const skin = await contract.methods.OwnerOfSkin(index).call();
    const price = skin.price;
    console.log("Price:", price);
    console.log("price: ", price);
    const gas = await contract.methods
      .buySkin(index, username)
      .estimateGas({ from: accounts[0], value: price });

    const transaction = await contract.methods
      .buySkin(index, username)
      .send({ from: accounts[0], value: price, gas: gas });
    console.log(
      "Successfully buyed skin ,Transaction Hash: ",
      transaction.transactionHash
    );
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
        centerSlidePercentage={33.33}
        autoPlay={true} // Set autoPlay to true for auto-rotation
        interval={3000} // Set the interval between slides (in milliseconds)
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
    <CarouselSection username={props.username} title="Artist" />
    <CarouselSection username={props.username} title="Colors" />
  </div>
);

export default MainPage;
