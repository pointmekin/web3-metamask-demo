// https://eth-ropsten.alchemyapi.io/v2/k8TsdyQvVWOnAhsisahLO6aNjjy-1UhO

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/k8TsdyQvVWOnAhsisahLO6aNjjy-1UhO',
      accounts: [
        '0b2e23de04efb109ebdc8b85de393523fc51c02a29be5f3457ac599db7ccb851'
      ]
    }
  }
}