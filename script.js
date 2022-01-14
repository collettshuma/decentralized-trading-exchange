/*module.exports = function(callback) {
    web3.eth.getBlock('latest').then(console.log)
  } */

  
const Gold = artifacts.require("./Gold.sol");

module.exports = async function(callback) {
  const contract = await Gold.deployed()
  const value = await contract.get()
  console.log("Value:", value)
}