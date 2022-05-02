require('@nomiclabs/hardhat-waffle')
require("dotenv").config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/n_HdNr8jIdk8Ch-q3g9okkO9W2VKgOD5',
      accounts: [ process.env.PRIVATE_KEY ]
    }
  }
}