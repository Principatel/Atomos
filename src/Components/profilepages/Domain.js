import React, { useEffect, useState } from "react";
import dp from "../../Assets/profile.jpg";
import Moralis from "moralis";
import { useAccount } from "wagmi";
import m1 from "../../Assets/poaps/p1.jpg";

function Domain() {
  const [domainvisible, setdomainvisible] = useState(false);
  const [ismirrorvisible, setismirrorvisible] = useState(false);
  const [iswarpcastvisible, setwarpcastvisible] = useState(false);
  const { address, isConnected } = useAccount();
  const [ens, setENS] = useState();
  const [unstoppable, setUnstoppable] = useState();

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
  ];

  const mirrorCards = [
    { id: 1, title: "Mirror Mint 1", imageSrc: m1 },
    { id: 2, title: "Mirror Mint 2", imageSrc: m1 },
    { id: 1, title: "Mirror Mint 1", imageSrc: m1 },
    { id: 2, title: "Mirror Mint 2", imageSrc: m1 },
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
  ];

  const getDomains = async () => {
    try {
      await Moralis.start({
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImI1YzRkNTFiLTAyNzctNDZiMC1hOWMwLTJjZTYyYzI0NDA3OSIsIm9yZ0lkIjoiMzY3MTI1IiwidXNlcklkIjoiMzc3MzA4IiwidHlwZUlkIjoiZWQxZTI0NjMtODNiYS00ODEyLWJjMmYtODNmYmU1MTkyZTkwIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDE4NTk5MjgsImV4cCI6NDg1NzYxOTkyOH0.ZMggyU9wkOZRQBvrPvD8tSbNEfq-vrhmYU9f9SwoXb8",
      });

      const ens = await Moralis.EvmApi.resolve.resolveAddress({
        address: address,
      });
      setENS(ens);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getDomains();
  }, []);

  return (
    <div>
      <div className="dao-div">
        <div onClick={toggledomain} style={{ cursor: "pointer" }}>
          <h2>Owned Domains {domainvisible ? "" : ""}</h2>
        </div>
        {domainvisible && (
          <div className="domain-card-here">
            {ens ? (
              <div className="domain-card">{ens.raw.name}</div>
            ) : (
              <div>This address does not hold any domains.</div>
            )}
          </div>
        )}
      </div>
      <div className="dao-div">
        <div onClick={togglemirror} style={{ cursor: "pointer" }}>
          <h2>Mirror {ismirrorvisible ? "" : ""}</h2>
        </div>
        {ismirrorvisible && (
          <div>
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
          <h2>Farcaster {iswarpcastvisible ? "" : ""}</h2>
        </div>
        {iswarpcastvisible && (
          <div>
            <div className="warpcast-card-here">
              <div className="image-profile">
                <img src={dp} alt="none" />
              </div>
              <div className="details-div">
                <div>
                  <h2>Ellen12</h2>
                  <h3>
                    {" "}
                    Crypto & Blockchain Advocate | Decentralization Believer |
                    NFT Enthusiast | Exploring the Future of Finance |
                    #BlockchainRevolution 🚀
                  </h3>
                  <button>View Profile</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Domain;
