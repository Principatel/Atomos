import React from "react";
import Profile from "./profilepages/Profile";
import Daos from "./profilepages/Dao";
import Domain from "./profilepages/Domain";
import Defi from "./profilepages/Defi";
import "../Styles/Profile.css";
// import Domain from "./profilepages/Domain";

function Myprofile() {
  return (
    <div className="ppp">
      <Profile />
      <Daos />
      <Domain />
      <Defi />
      {/* <Domain /> */}
    </div>
  );
}

export default Myprofile;
