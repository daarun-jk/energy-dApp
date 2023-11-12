//const FoodOrder = artifacts.require("FoodOrder");
const Aadhar = artifacts.require("Aadhar");
const EnergyAgreement = artifacts.require("EnergyAgreement");

module.exports = function (deployer) {
  // deployer.deploy(FoodOrder);
  deployer.deploy(Aadhar);
  deployer.deploy(EnergyAgreement);
};
