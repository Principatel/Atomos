import React from "react";
import Profile from "./profilepages/Profile";
import Daos from "./profilepages/Dao";
import Domain from "./profilepages/Domain";
import Defi from "./profilepages/Defi";
// import Domain from "./profilepages/Domain";

function Myprofile() {
  return (
    <div>
      <Profile />
      <Daos />
      <Domain />
      <Defi />
      {/* <Domain /> */}
    </div>
  );
}

export default Myprofile;
