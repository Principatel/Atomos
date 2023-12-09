import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../Styles/Navbar.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  return (
    <div>
      <div className="Navbar-div">
        <div className="logo-div">
          <h2>Atomos</h2>
        </div>
        <div className="connect-wallet-div">
          <Link to="/myprofile">
            <button>My Profile</button>
          </Link>
          {/* Use Link component from react-router-dom to navigate to the Explore page */}
          <Link to="/e-commmerce">
            <button>E-commerce</button>
          </Link>
          <button>Explore</button>
          <button>Feedpage</button>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
