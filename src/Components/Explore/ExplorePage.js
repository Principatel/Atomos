import React from "react";
import { Link } from "react-router-dom";
import ExploreCard from "./ExploreCard";
const ExplorePage = () => {
  const users = [
    {
      id: 1,
      profilePhoto: "https://i.pravatar.cc/150?img=1", // Example placeholder image
      walletAddress: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d", // Example wallet address
      description:
        "Passionate about technology and coding. Exploring the vast world of programming.",
    },
    {
      id: 2,
      profilePhoto: "https://i.pravatar.cc/150?img=2",
      walletAddress: "0x9a8b7c6d5e4f3a2b1c0d9a8b7c6d5e4f",
      description:
        "Enthusiastic designer with a love for clean and modern aesthetics. Let's create beautiful things!",
    },
    {
      id: 3,
      profilePhoto: "https://i.pravatar.cc/150?img=3",
      walletAddress: "0xf1e2d3c4b5a69876",
      description:
        "Adventurous soul, always ready for new challenges. Travel, code, repeat.",
    },
    {
      id: 4,
      profilePhoto: "https://i.pravatar.cc/150?img=4",
      walletAddress: "0x76543210fedcba98",
      description:
        "Coffee lover and coding enthusiast. Turning caffeine into code, one line at a time.",
    },
    {
      id: 5,
      profilePhoto: "https://i.pravatar.cc/150?img=5",
      walletAddress: "0xabcdef0123456789",
      description:
        "Passionate about open source and contributing to the community. Let's make the world better together!",
    },
  ];
  const onViewMore = (walletAddress) => {
    console.log(`View more for user with wallet address: ${walletAddress}`);
  };
  return (
    <div>
      <div className="explore-container">
        {users.map((user) => (
          <ExploreCard
            key={user.id}
            profilePhoto={user.profilePhoto}
            walletAddress={user.walletAddress}
            description={user.description}
            onViewMore={() => onViewMore(user.walletAddress)}
          />
        ))}
      </div>
    </div>
  );
};
export default ExplorePage;
