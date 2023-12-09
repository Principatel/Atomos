import React from "react";
import i1 from "../Assets/poaps/p1.jpg";
import "../Styles/Explore.css";

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
  ];

  return (
    <div className="nft-container">
      {nftData.map((nft) => (
        <div key={nft.id} className="nft-card">
          <img src={nft.imageUrl} alt={nft.title} className="nft-image" />
          <div className="nft-details">
            {/* <h3 className="nft-title">{nft.title}</h3>
            <p className="nft-price">Price: {nft.price}</p> */}
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ecommerce;
