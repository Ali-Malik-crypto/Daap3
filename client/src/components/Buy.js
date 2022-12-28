import { ethers } from "ethers";
const Buy = ({ state }) => {             //Ham ny state ko call keya taky Ab ham state ki properies ko access kr sakhay.
  const buyChai = async (event) => {
    event.preventDefault();       //Is used to prevent reload of the page when you enter some thing.
    const { contract } = state;       // contract ky instance ko state sy bahir nikala.
    const name = document.querySelector("#name").value;              //user sy name ko fetch kr ly jae.
    const message = document.querySelector("#message").value;         ////user sy message ko fetch kr ly jae.
    console.log(name, message, contract);

    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();         //Wait kry ga jab tak hmara transaction testnet pr ho jae.
    console.log("Transaction is done");
  };

  //Calling function buyChai     in onSubmit{buyChai}
  //To disable the pay button if metamask is not connected    in Pay button: disabled={!state.contract} 
  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={buyChai}>         
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}       
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;