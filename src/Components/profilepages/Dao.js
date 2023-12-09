import React, { useState } from "react";
import "../../Styles/Dao.css";
import i1 from "../../Assets/poaps/p1.jpg";
import i2 from "../../Assets/poaps/p2.jpg";
import arrow from "../../Assets/Group 1.png";
// import i3 from "../../Assets/poaps/p3.jpg";
import i4 from "../../Assets/poaps/p4.png";

const DaosCardContainer = () => {
  const cardsData = [
    {
      title: "ProtocolX",
      votingPower: 120,
      votingPercentage: 65,
      receivedDelegation: 600,
      proposalsCreated: 8,
      proposalsVoted: 18,
    },
    {
      title: "DecentralizeCo",
      votingPower: 180,
      votingPercentage: 90,
      receivedDelegation: 800,
      proposalsCreated: 12,
      proposalsVoted: 30,
    },
    {
      title: "BlockchainSolutions",
      votingPower: 80,
      votingPercentage: 50,
      receivedDelegation: 400,
      proposalsCreated: 5,
      proposalsVoted: 15,
    },
    {
      title: "CryptoInnovators",
      votingPower: 200,
      votingPercentage: 85,
      receivedDelegation: 1000,
      proposalsCreated: 20,
      proposalsVoted: 35,
    },
    {
      title: "Web3Creators",
      votingPower: 130,
      votingPercentage: 70,
      receivedDelegation: 550,
      proposalsCreated: 9,
      proposalsVoted: 22,
    },
    {
      title: "SmartContractors",
      votingPower: 160,
      votingPercentage: 75,
      receivedDelegation: 750,
      proposalsCreated: 14,
      proposalsVoted: 28,
    },
  ];

  return (
    <div className="dao-card-container">
      {cardsData.map((card, index) => (
        <DaosCard key={index} {...card} />
      ))}
    </div>
  );
};

const DaosCard = ({
  title,
  votingPower,
  votingPercentage,
  receivedDelegation,
  proposalsCreated,
  proposalsVoted,
}) => {
  return (
    <div className="daos-card-here">
      <div className="daos-card-here-head">
        <h2>{title}</h2>
      </div>
      <div>
        <p>Voting Power: {votingPower}</p>
        <p>Voting Percentage: {votingPercentage}%</p>
        <p>Received Delegation: {receivedDelegation}</p>
        <p>Proposals Created: {proposalsCreated}</p>
        <p>Proposals Voted: {proposalsVoted}</p>
        <div className="know-more-button">
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
};

function Daos() {
  const [isDaoVisible, setIsDaoVisible] = useState(false);
  const [ispoapvisible, setispoapvisible] = useState(false);

  const toggleDao = () => {
    setIsDaoVisible(!isDaoVisible);
  };

  const togglepoap = () => {
    setispoapvisible(!ispoapvisible);
  };

  return (
    <div>
      <div className="dao-div">
        <div onClick={toggleDao} style={{ cursor: "pointer" }}>
          <p className="dao-div-p">
            DAOs Participation & Power <img src={arrow} alt="none" />{" "}
            {isDaoVisible ? "" : ""}
          </p>
        </div>
        {isDaoVisible && (
          <div>
            <div className="scrollable-container">
              <DaosCardContainer />
            </div>
          </div>
        )}
      </div>
      <div className="dao-div-nft">
        <div onClick={togglepoap} style={{ cursor: "pointer" }}>
          <p>
            Proof of Participation <img id="arrorr" src={arrow} alt="none" />{" "}
            {ispoapvisible ? "" : ""}
          </p>{" "}
        </div>
        {ispoapvisible && (
          <div>
            <div className="poaps">
              <h5>Poaps</h5>

              <div className="poaps-and-nft">
                {[i2, i1, i4].map((image, index) => (
                  <img key={index} src={image} alt={`poap-${index}`} />
                ))}
              </div>
            </div>
            <div className="poaps">
              <h5>NFTs</h5>
              <div className="and-nft">
                {[i1, i2, i4].map((image, index) => (
                  <img
                    className="nft-images"
                    key={index}
                    src={image}
                    alt={`poap-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Daos;
