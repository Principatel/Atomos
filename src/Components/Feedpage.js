import React from "react";
import dp from "../Assets/p.png";
import "../Styles/Feedpage.css";

// NotificationCard component to render individual notification cards
function NotificationCard({ userImage, activity }) {
  return (
    <div className="notification-card">
      <div className="profile-image">
        <img src={userImage} alt="Profile" />
      </div>
      <p>{activity}</p>
    </div>
  );
}

// Feedpage component to render the feed with multiple notification cards
function Feedpage() {
  const activities = [
    "0x4567890123AbCdEf added 10 ETH to Yield Farming Pool - 2023-12-10 09:30 AM",
    "0x7890123456CdEfAb joined NFT Staking - 2023-12-10 01:45 PM",
    "0x6789012345EfAbCd claimed rewards from Yield Farming - 2023-12-10 09:45 PM",
    "0x1234567890AbCdEf swapped 3 BTC for 20 ETH - 2023-12-10 11:30 PM",
    "0x5678901234CdEfAb created NFT Auction - CryptoArt #456 - 2023-12-11 01:15 AM",
    "0x9012345678AbCdEf provided liquidity for NFT/ETH pair - 2023-12-11 03:00 AM",
    "0x2345678901EfAbCd staked 1000 DAO tokens - DAO Staking - 2023-12-11 04:45 AM",
  ];

  return (
    <div className="feedpage">
      <h2>Activity Feed</h2>
      {activities.map((activity, index) => (
        <NotificationCard
          key={index}
          userImage={dp} // Provide the actual path to the profile image
          activity={activity}
        />
      ))}
    </div>
  );
}

export default Feedpage;
