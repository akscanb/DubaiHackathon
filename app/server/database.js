
function httpGetAsync(theUrl, callback)
{
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

exports = module.exports = function(server) {
  var Web3 = require('web3');

  web3 = new Web3;
  //
  //
  // var ligthwallet  = require('eth-lightwallet');
  // var xhr = new XMLHttpRequest();
  // xhr.open("GET", "https://localhost:8080/api/users")
  // xhr.send();
  // console.log(xhr.status);

  var User = require('./../models/users.js')
  var bodyParser = require('body-parser');

  // if (typeof web3 !== 'undefined') {
  //   web3 = new Web3(web3.currentProvider);
  // } else {
  //   // set the provider you want from Web3.providers
  //   web3 = new Web3(new Web3.providers.HttpProvider("http://dci-node-1.media.mit.edu:8545"));
  // }
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  var User = require('../models/users.js');
  web3.eth.defaultAccount = web3.eth.accounts[0];
  var io = require('socket.io');
  var ws = io(server);

  //console.log(web3.eth.coinbase);

  var abiArray = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "Dubai Hackathon" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "result", "type": "string" } ], "name": "myCallback", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "currentIndex", "outputs": [ { "name": "", "type": "uint256", "value": "1" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "addressesInOrder", "outputs": [ { "name": "", "type": "address", "value": "0xc60855ead2305271da7fa348c8e3090427255d36" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "myid", "type": "bytes32" }, { "name": "result", "type": "string" } ], "name": "__callback", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "myid", "type": "bytes32" }, { "name": "result", "type": "string" }, { "name": "proof", "type": "bytes" } ], "name": "__callback", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "counter", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "energyCreditInOrder", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "myUpdate", "outputs": [], "payable": true, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "indexToAccounts", "outputs": [ { "name": "", "type": "address", "value": "0xc60855ead2305271da7fa348c8e3090427255d36" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "Owner", "outputs": [ { "name": "", "type": "address", "value": "0xc60855ead2305271da7fa348c8e3090427255d36" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "energyCredit", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "subsidyTotal", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "subsidy", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "payForElectricity", "outputs": [], "payable": true, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "accountsToIndex", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "inputs": [ { "name": "paymentName", "type": "string", "index": 0, "typeShort": "string", "bits": "", "displayName": "payment Name", "template": "elements_input_string", "value": "Dubai Hackathon" } ], "payable": false, "type": "constructor" }, { "payable": false, "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "payer", "type": "string" } ], "name": "accountRegistered", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "description", "type": "string" } ], "name": "newQuery", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "desciption", "type": "string" } ], "name": "queryCompleted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "payer", "type": "string" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "paymentMade", "type": "event" } ];
  var contractAddress = "0xdf2B4F5281Ce3708c709e215Eb2E8cDE3cf162E0";
  //var abiArray = [ { "constant": true, "inputs": [], "name": "byteCode", "outputs": [ { "name": "", "type": "bytes32", "value": "0x0000000000000000000000000000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "result", "type": "string" } ], "name": "myCallback", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "myid", "type": "bytes32" }, { "name": "result", "type": "string" } ], "name": "__callback", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "myid", "type": "bytes32" }, { "name": "result", "type": "string" }, { "name": "proof", "type": "bytes" } ], "name": "__callback", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "stringArray", "outputs": [ { "name": "", "type": "string", "value": "b5d4D396B410384Ec71CA3891b185fF37914F56A" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "temp", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "myUpdate", "outputs": [], "payable": true, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "uintArray", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "testStat", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "description", "type": "string" } ], "name": "newQuery", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "description", "type": "string" } ], "name": "queryCompleted", "type": "event" } ];
  //var contractAddress = "0x062B8BFDA87bCcbFD3FA0290Ca9783E22726eD66";
  var MyContract = web3.eth.contract(abiArray);
  var myContractInstance = MyContract.at(contractAddress);

  console.log("Contract initialized");
  ws.on('connection',function(socket){
    socket.on('updateContract',function(data){
      var args = [];
      args.push({
        gasPrice: 50000000000,
        gas: 500000
      })
      myContractInstance['myUpdate'].apply(this,args);

    })
  })

  var queryEvent = myContractInstance.newQuery();
  queryEvent.watch(function(error,result){
    if(!error){
      console.log("Query Trigger")
      console.log(result.args.description);
      User.find({publicId: result.args.description}, function(err, user){
        if (err)
          console.log(err);
        //console.log(user[0].subsidy);
        result = user[0].subsidy;

        myContractInstance.myCallback(result,{
            gasPrice: 50000000000,
            gas:  300000
        })
      })

    }
  })
  var accountRegisteredEvent = myContractInstance.accountRegistered();
  accountRegisteredEvent.watch(function(error,result){
    if(!error){
      console.log("Registeration Trigger");
      console.log(result.args.payer);
    }
  })

  var queryCompletedEvent = myContractInstance.queryCompleted();
  queryCompletedEvent.watch(function(error, result){
    if(!error){
      console.log("Query complete Trigger");
      if(result.args.deciption=="Finished Queries!"){}
      else{
        args.push({
          gasPrice: 50000000000,
          gas: 500000
        })
        myContractInstance['myUpdate'].apply(this,args);
      }
      console.log(result.args.desciption);
    }
  })
  var paymentEvent = myContractInstance.paymentMade();
  paymentEvent.watch(function(error, result){
    if(!error){
      console.log("Payment Trigger");
      console.log(result.args.payer);
      console.log(result.args.amount);
    }
  })


}
