// require("@nomicfoundation/hardhat-toolbox");

// require("dotenv").config();
// /** @type import('hardhat/config').HardhatUserConfig */

// const GOERLI_URL = process.env.GOERLI_URL;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     goerli: {
//       url: GOERLI_URL,
//       accounts: [PRIVATE_KEY],
//     },
//   },
// };


require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY = "tHkMCNbiLtiYmsJYqMER2CxvfKlicKro";
const GOERLY_PRIVATE_KEY = "cb8e5c2bfc93c133c6142daed9c105f9817cb10abc8cd26ff56a8ab129e4326b";

module.exports = {
  solidity: "0.8.9",

  networks:{
    goerly:{
      url:`https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${GOERLY_PRIVATE_KEY}`]
    }
  }
};


