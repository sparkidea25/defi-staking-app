const Migrations = artifacts.require('Migrations');


modules.exports = function deployer() {
    deployer.deploy(Migrations);
};

