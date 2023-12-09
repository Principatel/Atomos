import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Profile from "./Components/profilepages/Profile";
import Dao from "./Components/profilepages/Dao";
import Ecommerce from "./Components/Ecommerce";
import Explore from "./Components/Explore";
import Myprofile from "./Components/Myprofile";
import Feedpage from "./Components/Feedpage";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  return (
    <div className="App">
      <Router>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <Navbar />
            {/* <Ecommerce /> */}
            {/* <Explore /> */}
            {/* <Myprofile /> */}
            <Routes>
              <Route path="/e-commmerce" element={<Ecommerce />} />
              <Route path="/myprofile" element={<Myprofile />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/feed" element={<Feedpage />} />
              {/* <Route path="/dao" element={<Dao />} /> */}
            </Routes>
          </RainbowKitProvider>
        </WagmiConfig>
      </Router>
    </div>
  );
}

export default App;
