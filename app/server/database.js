

exports = module.exports = function(server) {
  var Web3 = require('web3');
  var ligthwallet  = require('eth-lightwallet');
  var mongoose = require('mongoose');
  var User = require('./models/users.js')
  if (typeof web3 !== 'undefined'){
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://dci-node-1.media.mit.edu:8545"));
  }


  // var abiArray = [];
  // var contractAddress = "";
  // var MyContract = web3.eth.contract(abiArray);
  // var myContractInstance = MyContract.at(contractAddress);
  //
  // console.log("Contract initailized");
  // var event = myContractInstance.Update();
  // event.watch(function(error, result){
  //   if(!error){
  //     console.log()
  //   }
  // })
}
