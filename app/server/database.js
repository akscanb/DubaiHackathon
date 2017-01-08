

exports = module.exports = function(server) {
  var Web3 = require('web3');

  web3 = new Web3;
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

  var ligthwallet  = require('eth-lightwallet');
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://localhost:8080/api/users")
  xhr.send();
  console.log(xhr.status);

  var User = require('./../models/users.js')
  var bodyParser = require('body-parser');

  web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

  console.log(web3.eth.coinbase);

  var abiArray = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "DubaiPaymentPlan" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "myid", "type": "bytes32" }, { "name": "result", "type": "string" } ], "name": "__callback", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "myid", "type": "bytes32" }, { "name": "result", "type": "string" }, { "name": "proof", "type": "bytes" } ], "name": "__callback", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "accountstoIndex", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "update", "outputs": [], "payable": true, "type": "function" }, { "constant": true, "inputs": [], "name": "Owner", "outputs": [ { "name": "", "type": "address", "value": "0x1b60ac9a821f2820857623d3a362d3f67eb20bce" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "bytes32" } ], "name": "subsidyUpdates", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "energyCredit", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "indextoAccounts", "outputs": [ { "name": "", "type": "address", "value": "0x1b60ac9a821f2820857623d3a362d3f67eb20bce" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "subsidy", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "payForElectricity", "outputs": [], "payable": true, "type": "function" }, { "inputs": [ { "name": "paymentName", "type": "string", "index": 0, "typeShort": "string", "bits": "", "displayName": "payment Name", "template": "elements_input_string", "value": "DubaiPaymentPlan" } ], "payable": false, "type": "constructor" }, { "payable": false, "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "payer", "type": "address" } ], "name": "accountRegistered", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "description", "type": "string" } ], "name": "newOraclizeQuery", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "desciption", "type": "string" } ], "name": "queryCompleted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "payer", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "paymentMade", "type": "event" } ];
  var contractAddress = "0x0c3017D8eE9c707443593F94d38BE7219D3676A8";
  var MyContract = web3.eth.contract(abiArray);
  var myContractInstance = MyContract.at(contractAddress);

  console.log("Contract initialized");
  var mapping = myContractInstance.energyCredit();
  console.log(mapping);

  // var event = myContractInstance.newOraclizeQuery();
  // event.watch(function(error, result){
  //   if(!error){
  //     console.log()
  //   }
  // })
}
