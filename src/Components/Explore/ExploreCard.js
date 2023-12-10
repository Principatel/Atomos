import React from "react";
import "../../Styles/ExploreCard.css";
const ExploreCard = ({
  profilePhoto,
  walletAddress,
  description,
  onViewMore,
}) => {
  return (
    <div className="explore-card">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <p className="wallet-address">{walletAddress}</p>
      <p className="description">{description}</p>
      <button onClick={() => onViewMore(walletAddress)}>View More</button>
    </div>
  );
};
export default ExploreCard;
