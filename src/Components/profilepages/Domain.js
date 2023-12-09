import React, { useState } from "react";
import m1 from "../../Assets/poaps/p1.jpg";
import arrow from "../../Assets/Group 1.png";

function Domain() {
  const [domainvisible, setdomainvisible] = useState(false);
  const [ismirrorvisible, setismirrorvisible] = useState(false);
  const [iswarpcastvisible, setwarpcastvisible] = useState(false);

  const toggledomain = () => {
    setdomainvisible(!domainvisible);
  };

  const togglemirror = () => {
    setismirrorvisible(!ismirrorvisible);
  };

  const togglewarpcast = () => {
    setwarpcastvisible(!iswarpcastvisible);
  };

  const warpcastCards = [
    {
      id: 1,
      title: "John Doe",
      description:
        "I'm Oliver Tan, and I'm passionate about social justice. I'm currently working as an assistant for Martin Law.",
    },
  ];

  // Example data for Mirror Mint cards
  const mirrorCards = [
    { id: 1, title: "Mirror Mint 1", imageSrc: m1 },
    { id: 2, title: "Mirror Mint 2", imageSrc: m1 },
    { id: 1, title: "Mirror Mint 1", imageSrc: m1 },
    { id: 2, title: "Mirror Mint 2", imageSrc: m1 },
    // Add more mirror cards as needed
  ];

  const mirrorPublishCards = [
    {
      id: 1,
      title: "Future of Cryptocurrency",
      description:
        "Adjust the array and the structure inside the map function according to your specific requirements.",
      buttonLabel: "Created - 12/03/2023",
    },
    {
      id: 1,
      title: "intoducing Mode",
      description:
        "Adjust the array and the structure inside the map function according to your specific requirements.",
      buttonLabel: "Created - 01/12/2023",
    },
    {
      id: 2,
      title: "Blockchain Analysis",
      description:
        "Adjust the array and the structure inside the map function according to your specific requirements.",
      buttonLabel: "Created - 09/01/2023",
    },
  ];

  return (
    <div>
      <div className="dao-div">
        <div
          className="dao-div-p"
          onClick={toggledomain}
          style={{ cursor: "pointer" }}
        >
          <p>
            Owned Domains <img src={arrow} alt="none" />{" "}
            {domainvisible ? "" : ""}
          </p>
        </div>
        {domainvisible && (
          <div className="domain-card-here">
            <div className="domain-card">ken.eth</div>
            <div className="domain-card">Samth.eth</div>
            <div className="domain-card">Rohin.mode</div>
          </div>
        )}
      </div>
      <div className="dao-div">
        <div
          className="mirror-head"
          onClick={togglemirror}
          style={{ cursor: "pointer" }}
        >
          <p id="font-size">
            Mirror <img id="arrorr" src={arrow} alt="none" />{" "}
            {ismirrorvisible ? "" : ""}
          </p>
        </div>
        {ismirrorvisible && (
          <div>
            <div className="mirror-publish">
              <h3 className="mirror-publish-head">Mirror Publish</h3>
              <div className="mirror-card-here">
                {mirrorPublishCards.map((card) => (
                  <div key={card.id} className="publish-mirror-card">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="button-mirror-publish">
                      <button>{card.buttonLabel}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="dao-div">
        <div
          className="dao-div-p"
          onClick={togglewarpcast}
          style={{ cursor: "pointer" }}
        >
          <p>
            Farcaster <img src={arrow} alt="none" />{" "}
            {iswarpcastvisible ? "" : ""}
          </p>
        </div>
        {iswarpcastvisible && (
          <div>
            <div className="warpcast-card-here">
              {warpcastCards.map((card) => (
                <div key={card.id} className="warpcast-card">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <p>Followers: 45</p>
                  <p> Following: 20 </p>
                  <div className="farcast-view-more">
                    <button>View More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Domain;
