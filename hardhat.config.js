require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY1 = "0x8b9d7d6366a8376368c13883cae3768fe4a13d691c320013578ba39f62a3a92c"
const PRIVATE_KEY2 = "0x5d19cfb5f11d41d31faba7d1ce2bb9644951f01d147dd1e7239ce1806dfa2fd3"
const PRIVATE_KEY3 = "0x059d32078f5d7021903b63d18814e5087f23c4762e70fd68b709e88bd082e926"
const PRIVATE_KEY4 = "0xa033473a0734877951a24888d82b3d3e1584d40dcdb109c9439ef7cbc5c08531"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {

    ganache: {
      url: `http://127.0.0.1:8545`,
      accounts: [PRIVATE_KEY1, PRIVATE_KEY2, PRIVATE_KEY3, PRIVATE_KEY4]
    }


  }
};
