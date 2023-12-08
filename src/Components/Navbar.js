import React from "react";
import "../Styles/Navbar.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  return (
    <div>
      <div className="Navbar-div">
        <div className="logo-div">
          <h2>Proflex</h2>
        </div>
        <div className="connect-wallet-div">
          <button>My Profile</button>
          <button>Explore</button>
          <button>Feedpage</button>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
