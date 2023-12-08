import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="Navbar-div">
        <div className="logo-div">
          <h2>Proflex</h2>
        </div>
        <div className="connect-wallet-div">
          <button>Explore</button>
          <button>Feedpage</button>
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
