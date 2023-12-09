import React, { useState } from "react";
import "../../Styles/Defi.css";
// ContractCard component
const ContractCard = ({
  ethereumAddress,
  deployedChainName,
  date,
  timeStamp,
  numberOfTransactions,
}) => (
  <div className="contract-card">
    <p>Address: {ethereumAddress}</p>
    <p>Deployed Chain Name: {deployedChainName}</p>
    <p>Number of Transactions: {numberOfTransactions}</p>
    <p>Date: {date}</p>
    <p>Timestamp: {timeStamp}</p>
    <div className="explor-div">
      <button>Explorer Link</button>
    </div>
  </div>
);

function Defi() {
  const [defivisible, setdefivisible] = useState(false);

  const toggledefi = () => {
    setdefivisible(!defivisible);
  };

  const transactions = [
    { id: 1, amount: 100, description: "Swap ETH for DAI" },
    { id: 2, amount: -50, description: "Provide liquidity for UNI" },
    { id: 3, amount: -25, description: "Stake LINK in farming pool" },
    { id: 4, amount: 75, description: "Claim rewards from farming" },
    { id: 5, amount: -30, description: "Buy BTC with USDC" },
    { id: 1, amount: 100, description: "Swap ETH for DAI" },
    { id: 2, amount: -50, description: "Provide liquidity for UNI" },
    { id: 3, amount: -25, description: "Stake LINK in farming pool" },
    { id: 4, amount: 75, description: "Claim rewards from farming" },
    { id: 5, amount: -30, description: "Buy BTC with USDC" },
    { id: 6, amount: 20, description: "Provide liquidity for SUSHI" },
    { id: 7, amount: 50, description: "Swap DAI for ETH" },
    { id: 8, amount: -10, description: "Stake AAVE in lending pool" },
    { id: 9, amount: 40, description: "Claim rewards from staking" },
    { id: 10, amount: -15, description: "Provide liquidity for COMP" },
    // Add more transactions as needed
  ];

  // Dummy contract data
  const contracts = [
    {
      id: 1,
      ethereumAddress: "0x123abc",
      deployedChainName: "Ethereum",
      date: "2023-01-01",
      timeStamp: 1234567890,
      numberOfTransactions: 5,
    },
    {
      id: 2,
      ethereumAddress: "0x456def",
      deployedChainName: "Binance Smart Chain",
      date: "2023-02-15",
      timeStamp: 1234567900,
      numberOfTransactions: 8,
    },
    {
      id: 3,
      ethereumAddress: "0x789ghi",
      deployedChainName: "Polygon",
      date: "2023-03-22",
      timeStamp: 1234567910,
      numberOfTransactions: 12,
    },
  ];

  const shouldAddScrollClass = transactions.length > 10;

  return (
    <div>
      <div className="dao-div">
        <div onClick={toggledefi} style={{ cursor: "pointer" }}>
          <h2>Defi Activity {defivisible ? "" : ""}</h2>
        </div>
        {defivisible && (
          <div>
            <h3>Defi Transactions</h3>
            <div className="defi-transaction-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>{transaction.id}</td>
                      <td>{transaction.description}</td>
                      <td>{transaction.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="contracts-deployed-container">
              <div>
                <h3>Contracts Deployed</h3>
                <div className="contract-cards">
                  {contracts.map((contract) => (
                    <ContractCard key={contract.id} {...contract} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Defi;
