const Orderbook = artifacts.require("Orderbook"); 
const Gold = artifacts.require("Gold"); 
const USD = artifacts.require("USD"); 

module.exports = function(deployer) {  
deployer.deploy(USD).then(function(){  
return deployer.deploy(Gold);}).then(function(){  
return deployer.deploy(Orderbook,USD.address,Gold.address);}) 
};