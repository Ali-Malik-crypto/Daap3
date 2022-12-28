import abi from "./contract/chai.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import chai from "./chai.png";
import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("None");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xA0FFe0211670B13202ceA965Fae411B98d40a931";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({method: "eth_requestAccounts",});

          window.ethereum.on("chainChanged", () => {     //If chain is changed then reload the brower.
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {     ////If metamask account is changed then reload the brower.
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);

          setAccount(account);

          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state);

  //state ko prop ky tour pr pas keya   in state={state}
  return (
  <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
  <img src={chai} className="img-fluid" alt=".." width="100%" />
  <p
    class="text-muted lead "
    style={{ marginTop: "10px", marginLeft: "5px" }}
  >
    <small>Connected Account - {account}</small>
  </p>
  <div className="container">
    <Buy state={state} />
    <Memos state={state} />
  </div>
</div>
);
}

export default App;
