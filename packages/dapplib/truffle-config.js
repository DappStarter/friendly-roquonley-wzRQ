require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind evil imitate problem swear sunset'; 
let testAccounts = [
"0x140d64b6fefd28528822b8f25be221c252d2a26bf9da5a3e84b2b5e083dbac5c",
"0x975df4c77e69ad43f4ee99a8f2375f4aba1e83c18ebeb539298d5d76612fa312",
"0xd5783e7a75a9bd620461014628f9928e7bb7b89999cd21398ceb68f41c8f5bca",
"0x5a8d357e343235aa7fe8451e37f0cdbb544be9f8f6a0fac7158430b83d07cf62",
"0x357bb526110fd16b696b685c77a0875dc2d8f3388b05b6474a6d428a1dc3692f",
"0xab269eb03a0caded8ba7242f1a1cf27aa2c388fef92d009482d3f79a0e751efa",
"0xdd1e2e1fa85f01d57745f653202865227ff3db38823a79513b17689906f617f3",
"0x1f8ecf4cfb916a19bfacf272a0467b466b05004c92947a49c75e9d7f6453dd28",
"0x475e05a888c6b627486b54b2dc7ea039b96e1786a1ac452aec062652c2310797",
"0x5e81dae14608e60ea733d0353f92f065e1ec61bb0572114b89ecc84307c39648"
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

