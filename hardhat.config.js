require("@nomicfoundation/hardhat-toolbox");
 const ALCHEMY_API_KEY = ""
 const GOERLI_PRIVATE_KEY = ""
 const GANACHE_PRIVATE_KEY ="e726bc21f8725e0205c37b56aa6bf86d213a9bacd78f4acfad450b8ac257868e"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  paths:{
    artifacts:"./public/artifacts"
  },
  solidity: "0.8.9",
  networks: {
    // goerli: {
    //   url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    //   accounts: [GOERLI_PRIVATE_KEY]
    // },
    ganache:{
      url:"HTTP://127.0.0.1:7545",
      chainId:1337,
      accounts: [GANACHE_PRIVATE_KEY]
    },
    }
    
  
  
};
