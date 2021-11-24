require('babel-register');
require('babel-polyfill');


module.exports= {
    networks: {
        development: {
            host: 'http://127.0.0.1:',
            port:   '7545',
            network_id: '*' // connect to any network
        }
    },
    contracts_directory: './src/contracts/',
    contracts_build_directory: './src/truffle_abis',
    compiler: {
        solc: {
            version: "0.5.8",
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}
