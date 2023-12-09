import React, { useState, useEffect } from "react";
import "../../Styles/Dao.css";
import arrow from "../../Assets/Group 1.png";
import { useQuery } from '@airstack/airstack-react';

const DaosCardContainer = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const meta = {
        "x-dune-api-key": "Fumryst0yiG1NJLxDrt7K2mrXvZilIkM",
      };
      const header = new Headers(meta);
      try {
        const response = await fetch(
          `https://api.dune.com/api/v1/query/3255638/results?api_key=${meta['x-dune-api-key']}`,
          {
            method: 'GET',
            headers: header,
          }
        );
        const body = await response.json();
        let delegateAddress ="0x406b607644c5d7bfda95963201e45a4c6ab1c159";
        var delgateData = [];
        for(let i=0;i<body.result.rows.length;i++)
        {
          if(body.result.rows[i]["Delegate"]===delegateAddress)
          {
            delgateData.push(body.result.rows[i]);
          }
        }
        console.log(delgateData);
        setRecords(delgateData);
        console.log(body);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="dao-card-container">
      {records.map((record, index) => (
        <DaosCard
          key={index}
          title={record.Delegate}
          votingPower={record.CurrentVotingPower}
          votingPercentage={record.VotingPowerShare}
          receivedDelegation={record.NumberOfDelegators}
          proposalsVoted={record.total_votes}
        />
      ))}
    </div>
  );
};

const DaosCard = ({
  title,
  votingPower,
  votingPercentage,
  receivedDelegation,
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
        <p>Proposals Voted: {proposalsVoted}</p>
        <div className="know-more-button">
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
};

function Daos() {
  const query = `
  query MergedQuery {
    Poaps(input: {filter: {owner: {_in: ["0xF4B0556B9B6F53E00A1FDD2b0478Ce841991D8fA"]}}, blockchain: ALL}) {
      Poap {
        eventId
        tokenId
        poapEvent {
          eventName
          description
          contentValue {
            image {
              small
            }
          }
        }
        tokenUri
      }
    }
  
    TokenBalances(input: {
      filter: {
        owner: {
          _in: ["0xF4B0556B9B6F53E00A1FDD2b0478Ce841991D8fA"]
        }
        tokenType: { _in: [ERC1155, ERC721] }
      }
      blockchain: polygon
      limit: 50
    }) {
      TokenBalance {
        owner {
          addresses
          domains {
            name
            isPrimary
          }
          socials {
            profileName
            profileTokenId
            profileTokenIdHex
            userAssociatedAddresses
          }
          xmtp {
            isXMTPEnabled
          }
        }
        amount
        tokenAddress
        tokenId
        tokenType
        tokenNfts {
          contentValue {
            image {
              extraSmall
              small
              medium
              large
            }
          }
        }
      }
      pageInfo {
        nextCursor
        prevCursor
      }
    }
  }
  `;

  const { data } = useQuery(query, {}, { cache: false });
  // const [result, setResult] = useState(null);
  const [poapImages, setPoapImages] = useState([]);
  
  // const [nftImages, setNftImages] = useState([]);
  console.log(data);

  useEffect(() => {
    // debugger;
    if (data && data.Poaps && data.Poaps.Poap) {
      const poapImages = data.Poaps.Poap.map((poap) => poap.poapEvent.contentValue.image.small);
      const nftImages = data.TokenBalances.TokenBalance
  .map((TokenBalance) => TokenBalance.tokenNfts.contentValue.image?.small)
  .filter((image) => image !== null);
  const combinedImages = [...poapImages, ...nftImages];
  console.log(nftImages,combinedImages)
  // debugger;
  setPoapImages(combinedImages);

    }

  }, [data]);

  // console.log(result);

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
      <div className="dao-div-p" id="padding-purple">
        <div onClick={togglepoap} style={{ cursor: "pointer" }}>
          <p>
            Proof of Participation <img id="arrorr" src={arrow} alt="none" />{" "}
            {ispoapvisible ? "" : ""}
          </p>{" "}
        </div>
        {ispoapvisible && (
          <div>
            <div className="poaps">
              {/* <h5>Poaps</h5> */}

              <div className="poaps-and-nft">
              {poapImages.map((image, index) => (
              <img key={index} src={image} alt={`poap-${index}`} />
            ))}
              </div>
            </div>
            {/* <div className="poaps">
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
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Daos;
