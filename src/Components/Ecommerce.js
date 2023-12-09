import React from "react";
import g1 from "../Assets/gif/ART 2.gif";
import g2 from "../Assets/gif/ART 3 (2).gif";
import g3 from "../Assets/gif/Untitled design (1).gif";
import i1 from "../Assets/poaps/p1.jpg";
import "../Styles/Explore.css";

function Ecommerce() {
  const nftData = [
    {
      id: 1,
      imageUrl: g1,
      title: "NFT Card 1",
      price: "0.1 ETH",
    },
    {
      id: 2,
      imageUrl: g2,
      title: "NFT Card 2",
      price: "0.2 ETH",
    },
    {
      id: 1,
      imageUrl: g3,
      title: "NFT Card 1",
      price: "0.1 ETH",
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
