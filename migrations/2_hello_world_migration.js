const HelloWorld = artifacts.require("HelloWorld");
const HelloWorldPermanent = artifacts.require("HelloWorldPermanent");

module.exports = function (deployer) {
  deployer.deploy(HelloWorld,"hi KG").then( async () => {
    let instance = await HelloWorld.deployed();
    let message = instance.message();
    return deployer.deploy(HelloWorldPermanent,message);
  });
};
