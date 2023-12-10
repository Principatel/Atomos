import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Atomos-1.png";
import "../Styles/Navbar.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  return (
    <div>
      <div className="Navbar-div">
        <div className="logo-div">
          {/* <h2>Atomos</h2> */}
          <img src={logo} alt="4040" />
        </div>
        <div className="connect-wallet-div">
          <Link to="/myprofile">
            <button>Profile</button>
          </Link>
          {/* <Link to="/e-commmerce">
            <button>E-commerce</button>
          </Link> */}
          <Link to="/explore">
            <button>Explore</button>
          </Link>
          <Link to="/feed">
            <button>Feedpage</button>
          </Link>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
