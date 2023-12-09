import React, { useState } from "react";
import i1 from "../Assets/poaps/p1.jpg";
import "../Styles/Explore.css";
import Cookies from "js-cookie";

function Ecommerce() {
  const nftData = [
    {
      id: 1,
      imageUrl: i1,
      title: "NFT Card 1",
      price: "0.1 ETH",
    },
    {
      id: 2,
      imageUrl: i1,
      title: "NFT Card 2",
      price: "0.2 ETH",
    },
    {
      id: 3,
      imageUrl: i1,
      title: "NFT Card 1",
      price: "0.1 ETH",
    },
    {
      id: 4,
      imageUrl: i1,
      title: "NFT Card 2",
      price: "0.2 ETH",
    },
    {
      id: 5,
      imageUrl: i1,
      title: "NFT Card 1",
      price: "0.1 ETH",
    },
    {
      id: 6,
      imageUrl: i1,
      title: "NFT Card 2",
      price: "0.2 ETH",
    },
    {
      id: 7,
      imageUrl: i1,
      title: "NFT Card 1",
      price: "0.1 ETH",
    },
    {
      id: 8,
      imageUrl: i1,
      title: "NFT Card 2",
      price: "0.2 ETH",
    },
  ];

  const [clickCount, setClickCount] = useState(0);
  const [clickedNFT, setClickedNFT] = useState(null);

  const handleBuyClick = (clickedNFT) => {
    // Increment click count
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    console.log(newClickCount);
    // Store the details of the clicked NFT along with the click count in cookies
    Cookies.set("buyButtonClickCount", newClickCount, { expires: 365 });
    Cookies.set("clickedNFT", clickedNFT.id, { expires: 365 });
console.log(clickedNFT);
    // Optionally, update state to reflect the clicked NFT
    setClickedNFT(clickedNFT);
  };


  return (
    <div className="nft-container">
      {nftData.map((nft) => (
        <div key={nft.id} className="nft-card">
          <img src={nft.imageUrl} alt={nft.title} className="nft-image" />
          <div className="nft-details">
            {/* <h3 className="nft-title">{nft.title}</h3>
            <p className="nft-price">Price: {nft.price}</p> */}
          <button className="buy-button" onClick={() => handleBuyClick(nft)}>
            Buy Now
          </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ecommerce;
