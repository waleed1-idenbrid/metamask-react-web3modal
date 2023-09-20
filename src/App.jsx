import { useAccount, useDisconnect } from "wagmi";
import "./App.css";
import { useWeb3Modal } from "@web3modal/react";
function App() {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  return (
    <>
      <div></div>

      <h1>Metamask + React</h1>
      {!isConnected && (
        <div className="card">
          <button onClick={open}>Connect Wallet</button>
          <p>Click on connect wallet to connect the wallet</p>
        </div>
      )}
      {isConnected && (
        <div className="card">
          <p className="address">{address}</p>
          <button onClick={disconnect}>Disconnect Wallet</button>
        </div>
      )}
      <p className="read-the-docs">
        You need to get a wallet connect project ID
      </p>
    </>
  );
}

export default App;
