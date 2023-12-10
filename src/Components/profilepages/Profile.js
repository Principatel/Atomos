import React, { useEffect, useState } from "react";
import dp from "../../Assets/profile.jpg";
import "../../Styles/Navbar.css";
import Cookies from "js-cookie";
import i1 from "../../Assets/poaps/p1.jpg";


function Profile() {
  const [buyButtonClickCount, setBuyButtonClickCount] = useState(0);
  const [clickedNFT, setClickedNFT] = useState(null);
  const [showNFTPopup, setShowNFTPopup] = useState(false);

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

  useEffect(() => {
    // Read the cookie when the component mounts
    const countFromCookie = Cookies.get("buyButtonClickCount");
    const clickedNFTFromCookie = Cookies.get("clickedNFT");

    console.log(countFromCookie, clickedNFTFromCookie);
    // If the cookie exists, update the state
    if (countFromCookie && clickedNFTFromCookie) {
      setBuyButtonClickCount(parseInt(countFromCookie, 10));
      const clickedNFTData = nftData.find((nft) => nft.id === parseInt(clickedNFTFromCookie, 10));

      setClickedNFT(clickedNFTData);
      setShowNFTPopup(true);
    }
  }, []);

  const closePopup = () => {
    setShowNFTPopup(false);
  };

  return (
    <div>
      <div className="profile-div">
        <div className="image-profile">
          <img src={dp} alt="non" />
        </div>
        <div className="right-side-profile">
          <div className="title-profile">
            <h2>Gu Weiyi</h2>
          </div>
          <div className="description-profile">
            I'm Cameron Lee, a self-driven developer navigating the exciting
            realm of Web3. From crafting smart contracts to exploring
            decentralized applications, I'm passionate about pushing the
            boundaries of blockchain technology.
          </div>
          <div className="follow-message-button">
            <button>Follow</button>
            <button>Message</button>
          </div>
        </div>
      </div>

      {showNFTPopup && (
        <div className="popup-overlay">
          <div className="nft-popup">
            <div className="popup-content">
              <h3>Do you want to add ?</h3>
              {/* <p>Title: {clickedNFT.title}</p>
              <p>Price: {clickedNFT.price}</p> */}
              {/* Add other NFT details as needed */}
              <button onClick={closePopup}>Okay</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
