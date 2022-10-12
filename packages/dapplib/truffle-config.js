require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food green recipe sad unique harvest immense army gauge'; 
let testAccounts = [
"0xe4a1aaf41327f47e47a0b650fac9683211400b7d228f2ca0f2e02a5b8db8170f",
"0x0eae402f982bcf39b3e92f19492166fc5bc6c1674543feeeacbe47ec2631410e",
"0x7d65a331f4d4b9f7cd74916d8e8962e2c4c0ae27ddeafaa9597ad0746dc5931e",
"0x170b23f66da829c899e60440ff87d3a614c592842098c43d2c89ed3c56f765b1",
"0x7e9df894f1149e0016a798d14a9d833babad3cfc9509c9838f234474075963e1",
"0x75fe7ccf38d5fffa2a2716ea775d4cce335a0b25d1393d1f1e41f1c981a9dc82",
"0x0e6beb85d761073abfdffd76cbfe7a38ebd182a82b41fd9ff420ec6ebcf6e665",
"0x8e9075b54303a15dd150b71a80bc2a5beba1e41996fc57c5aab694be406b617c",
"0x9555254ecf55207f8fe811173a03aa8baaa68b38098714e97424f2782ba099f9",
"0x49240766b43022c8ecd2be2de7d1039d53b6bc64d5f09a531bbc918feed73645"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

