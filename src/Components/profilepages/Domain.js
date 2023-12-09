import React, { useState, useEffect } from "react";
// import m1 from "../../Assets/poaps/p1.jpg";
import arrow from "../../Assets/Group 1.png";
import { useQuery } from "@airstack/airstack-react";

function Domain() {
  const [domainvisible, setdomainvisible] = useState(false);
  const [ismirrorvisible, setismirrorvisible] = useState(false);
  const [iswarpcastvisible, setwarpcastvisible] = useState(false);
  const [records, setRecords] = useState([]);

  const toggledomain = () => {
    setdomainvisible(!domainvisible);
  };

  const togglemirror = () => {
    setismirrorvisible(!ismirrorvisible);
  };

  const togglewarpcast = () => {
    setwarpcastvisible(!iswarpcastvisible);
  };

  // const warpcastCards = [
  //   {
  //     id: 1,
  //     title: "John Doe",
  //     description:
  //       "I'm Oliver Tan, and I'm passionate about social justice. I'm currently working as an assistant for Martin Law.",
  //   },
  // ];

  // // Example data for Mirror Mint cards
  // const mirrorCards = [
  //   { id: 1, title: "Mirror Mint 1", imageSrc: m1 },
  //   { id: 2, title: "Mirror Mint 2", imageSrc: m1 },
  //   { id: 1, title: "Mirror Mint 1", imageSrc: m1 },
  //   { id: 2, title: "Mirror Mint 2", imageSrc: m1 },
  //   // Add more mirror cards as needed
  // ];

  // const mirrorPublishCards = [
  //   {
  //     id: 1,
  //     title: "Future of Cryptocurrency",
  //     description:
  //       "Adjust the array and the structure inside the map function according to your specific requirements.",
  //     buttonLabel: "Created - 12/03/2023",
  //   },
  //   {
  //     id: 1,
  //     title: "intoducing Mode",
  //     description:
  //       "Adjust the array and the structure inside the map function according to your specific requirements.",
  //     buttonLabel: "Created - 01/12/2023",
  //   },
  //   {
  //     id: 2,
  //     title: "Blockchain Analysis",
  //     description:
  //       "Adjust the array and the structure inside the map function according to your specific requirements.",
  //     buttonLabel: "Created - 09/01/2023",
  //   },
  // ];

  const MyQuery = `
    query FarCasterQuery {
      Socials(
        input: {filter: {identity: {_eq: "0xF4B0556B9B6F53E00A1FDD2b0478Ce841991D8fA"}, dappName: {_eq: farcaster}}, blockchain: ethereum}
      ) {
        Social {
          dappName
          profileName
          profileBio
          profileDisplayName
          profileImage
          profileUrl
          userAddress
          userCreatedAtBlockTimestamp
          userCreatedAtBlockNumber
          userHomeURL
          userRecoveryAddress
          userAssociatedAddresses
        }
      }
    }
  `;

  const { data : warpData, loading, error } = useQuery(MyQuery, {}, { cache: false });
  const [warpResult, setWarpResult] = useState(null);
  console.log(warpData);


  const query = `
    query MyQuery {
      Domains(input: {filter: {owner: {_eq: "0xF4B0556B9B6F53E00A1FDD2b0478Ce841991D8fA"}}, blockchain: ethereum}) {
        Domain {
          name
        }
      }
    }
  `;

  const { data } = useQuery(query, {}, { cache: false });
  const domainName = data?.Domains?.Domain[0]?.name;
  console.log(data);

  useEffect(() => {
    const fetchMirrorData = async () => {
      const apiKey = "Fumryst0yiG1NJLxDrt7K2mrXvZilIkM"; // Add your Dune API key to environment variables

      const meta = {
        "x-dune-api-key": apiKey,
      };

      try {
        const response = await fetch(
          `https://api.dune.com/api/v1/query/3255820/results?api_key=${apiKey}`,
          {
            method: 'GET',
            headers: new Headers(meta),
          }
        );
        const body = await response.json();

        // Make sure to adjust this part based on the actual response structure
        const mirrorData = body?.result?.rows || [];
        console.log(mirrorData);

        setRecords(mirrorData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMirrorData();
  }, []);

  const warpcastCards = warpData?.Socials?.Social || [];

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
            {domainName ? (
            <div className="domain-card">{domainName}</div>
            ) : (
              <div>This address does not hold any domains.</div>
            )}
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
              {/* <h3 className="mirror-publish-head">Mirror Publish</h3> */}
              <div className="mirror-card-here">
              {records.map((record, index) => (
                  <div key={index} className="publish-mirror-card">
                  <h3>{record.title}</h3>
                  <p>{record.symbol}</p>
                  <p>{record.description}</p>
                  <p>{record.created_block_time}</p>
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
            {warpcastCards.map((card, index) => (
                <div key={index} className="warpcast-card">
                  <h3>{card.profileName}</h3>
                  <p>{card.profileBio}</p>
                  <p>{card.profileUrl}</p>
                  <img src={card.profileImage} alt={card.profileName} />
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
