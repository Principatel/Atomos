import React from "react";
import dp from "../../Assets/profile.jpg";
import "../../Styles/Navbar.css";

function Profile() {
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
    </div>
  );
}

export default Profile;
