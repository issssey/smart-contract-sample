const GreeterConstract = artifacts.require("Greeter");

module.exports = function (deployer) {
  deployer.deploy(GreeterConstract);
};
