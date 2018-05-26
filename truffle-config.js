'use strict';

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "spice giggle surge segment title angry unaware analyst pilot bargain actress special";
var address = '0xD5f7b9c077083870117B0A5CC232c112188839e0';
address = address.toLowerCase();

module.exports = {
  networks: {
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/3ZK2jh4yZCuIVpKmHgOf", 1)
      },
      network_id: 1,
      gas: 2000000, 
      gasPrice: 12000000000,
      from: address
    }   
  }
};

/*
module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 7545,
      gas: 5000000,
      network_id: '*'
    }
  }
};
*/