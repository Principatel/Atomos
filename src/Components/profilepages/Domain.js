import React, { useState } from "react";
import m1 from "../../Assets/poaps/p1.jpg";

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
      title: "Warpcast 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.Maecenas aliquet efficitur est, vel feugiat lacus elementum nec. Nullam a mi et justo feugiat condimentum. Curabitur ac dolor quam. Sed eu libero arcu. In hac habitasse platea dictumst. Fusce eu urna quis dolor efficitur pharetra. Vestibulum in arcu sit amet elit consectetur auctor in nec nisl. Curabitur nec aliquam libero. Proin tristique sem ac est ultricies, a tincidunt metus aliquet. Integer eu nulla in nisl condimentum euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed tincidunt, libero id imperdiet interdum, justo lectus luctus purus, a iaculis arcu neque in ligula. Quisque dictum ex vitae risus faucibus, non vehicula nisi volutpat",
    },
    {
      id: 2,
      title: "Warpcast 2",
      description:
        "Maecenas aliquet efficitur est, vel feugiat lacus elementum nec.Maecenas aliquet efficitur est, vel feugiat lacus elementum nec. Nullam a mi et justo feugiat condimentum. Curabitur ac dolor quam. Sed eu libero arcu. In hac habitasse platea dictumst. Fusce eu urna quis dolor efficitur pharetra. Vestibulum in arcu sit amet elit consectetur auctor in nec nisl. Curabitur nec aliquam libero. Proin tristique sem ac est ultricies, a tincidunt metus aliquet. Integer eu nulla in nisl condimentum euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed tincidunt, libero id imperdiet interdum, justo lectus luctus purus, a iaculis arcu neque in ligula. Quisque dictum ex vitae risus faucibus, non vehicula nisi volutpat",
    },
    // Add more Warpcast cards as needed
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
      title: "Mirror Publish 1",
      article:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed tincidunt, libero id imperdiet interdum, justo lectus luctus purus, a iaculis arcu neque in ligula. Quisque dictum ex vitae risus faucibus, non vehicula nisi volutpat. Sed et arcu at tortor rhoncus pellentesque a non ex. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Duis vel neque a erat venenatis dignissim. Sed dapibus congue lectus, id commodo augue rhoncus at.",
    },
    {
      id: 2,
      title: "Mirror Publish 2",
      article:
        "Maecenas aliquet efficitur est, vel feugiat lacus elementum nec. Nullam a mi et justo feugiat condimentum. Curabitur ac dolor quam. Sed eu libero arcu. In hac habitasse platea dictumst. Fusce eu urna quis dolor efficitur pharetra. Vestibulum in arcu sit amet elit consectetur auctor in nec nisl. Curabitur nec aliquam libero. Proin tristique sem ac est ultricies, a tincidunt metus aliquet. Integer eu nulla in nisl condimentum euismod.",
    },
    // Add more Mirror Publish cards as needed
  ];

  return (
    <div>
      <div className="dao-div">
        <div onClick={toggledomain} style={{ cursor: "pointer" }}>
          <h2>Owned Domains {domainvisible ? "" : ""}</h2>
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
        <div onClick={togglemirror} style={{ cursor: "pointer" }}>
          <h2>Mirror {ismirrorvisible ? "" : ""}</h2>
        </div>
        {ismirrorvisible && (
          <div>
            <div className="container-mirror-div">
              <h3>Mirror Mints</h3>
              <div className="mirror-card-here">
                {mirrorCards.map((card) => (
                  <div key={card.id} className="mirror-card">
                    <img src={card.imageSrc} alt={card.title} />
                    <h3>{card.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="mirror-publish">
              <h3>Mirror Publish</h3>
              <div className="mirror-card-here">
                {mirrorPublishCards.map((card) => (
                  <div key={card.id} className="publish-mirror-card">
                    <h3>{card.title}</h3>
                    <p>{card.article}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="dao-div">
        <div onClick={togglewarpcast} style={{ cursor: "pointer" }}>
          <h2>Warpcast {iswarpcastvisible ? "" : ""}</h2>
        </div>
        {iswarpcastvisible && (
          <div>
            <div className="warpcast-card-here">
              {warpcastCards.map((card) => (
                <div key={card.id} className="warpcast-card">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <button>View More</button>
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
