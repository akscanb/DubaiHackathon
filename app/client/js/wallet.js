var HookedWeb3Provider = require("hooked-web3-provider");
var Web3 = require('web3');
var io = require('socket.io-client');
var async = require('async');

require('../sass/wallet.scss');

var web3 = new Web3();
var global_keystore = '';

var signing = lightwallet.signing
var socket = io.connect()
var abiArray = [ { "constant": true, "inputs": [], "name": "currentHolder", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "Smart" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "withDraw", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "100" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "pay", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "CEOaddress", "outputs": [ { "name": "", "type": "address", "value": "0x1b60ac9a821f2820857623d3a362d3f67eb20bce" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "currentIndex", "outputs": [ { "name": "", "type": "uint256", "value": "1" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "1" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "standard", "outputs": [ { "name": "", "type": "string", "value": "Token 0.1" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "paidUntil", "outputs": [ { "name": "", "type": "uint256", "value": "1483903590" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "indexes", "outputs": [ { "name": "", "type": "address", "value": "0xb5d4d396b410384ec71ca3891b185ff37914f56a" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "SMT" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "price", "outputs": [ { "name": "", "type": "uint256", "value": "1000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_extraData", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "supplyIncreaseRate", "outputs": [ { "name": "", "type": "uint256", "value": "1" } ], "payable": false, "type": "function" }, { "inputs": [ { "name": "initialSupply", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "initial Supply", "template": "elements_input_uint", "value": "100" }, { "name": "tokenName", "type": "string", "index": 1, "typeShort": "string", "bits": "", "displayName": "token Name", "template": "elements_input_string", "value": "Smart" }, { "name": "decimalUnits", "type": "uint8", "index": 2, "typeShort": "uint", "bits": "8", "displayName": "decimal Units", "template": "elements_input_uint", "value": "1" }, { "name": "tokenSymbol", "type": "string", "index": 3, "typeShort": "string", "bits": "", "displayName": "token Symbol", "template": "elements_input_string", "value": "SMT" }, { "name": "ceoAddress", "type": "address", "index": 4, "typeShort": "address", "bits": "", "displayName": "ceo Address", "template": "elements_input_address", "value": "0x1b60ac9a821f2820857623d3a362d3f67eb20bce" }, { "name": "supplyIncRateNum", "type": "uint256", "index": 5, "typeShort": "uint", "bits": "256", "displayName": "supply Inc Rate Num", "template": "elements_input_uint", "value": "1" }, { "name": "supplyIncRateDen", "type": "uint256", "index": 6, "typeShort": "uint", "bits": "256", "displayName": "supply Inc Rate Den", "template": "elements_input_uint", "value": "1" }, { "name": "_price", "type": "uint256", "index": 7, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;price", "template": "elements_input_uint", "value": "1000000" } ], "payable": false, "type": "constructor" }, { "payable": false, "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "payer", "type": "address" }, { "indexed": false, "name": "paidUntil", "type": "uint256" } ], "name": "Payment", "type": "event" } ];


var stringAbi = JSON.stringify(abiArray);
var currentAddress = "";
var currentHolder = "";

var price;

function watchForPayment() {
    window.paymentEvent = myContractInstance.Payment();
    window.paymentEvent.watch(function(error, result) {
        if (!error) {
            console.log(result);
            console.log(result.hasOwnProperty('args') && result.args.hasOwnProperty('payer'))
            if (result.hasOwnProperty('args') && result.args.hasOwnProperty('payer')) {
                currentHolder = result.args.payer;
                var time = result.args.paidUntil.c.pop();
                console.log(currentHolder);
                console.log(currentAddress);
                if (checkIfCurrentHolder(currentHolder)) {
                    msgConsole();
                    timeCheck(time);
                }
            }
        } else {
            console.log('Payment')
        }
    })
}

function setWeb3Provider(keystore) {
    var web3Provider = new HookedWeb3Provider({
        host: "http://dci-node-1.media.mit.edu:8545",
        transaction_signer: keystore
    });
    web3.setProvider(web3Provider);
    watchForPayment();
}

window.checkIfEnoughMoney = () => {

    if (price >= window.balance || isNaN(window.balance)) {
        return false;
    } else {
        return true;
    }
}


var contractAddress = '0xab6B49003be5d5c16f8337e5B361336F65400A1E';
var MyContract = web3.eth.contract(abiArray);
var myContractInstance = MyContract.at(contractAddress);




var pricePerMin;


function checkIfCurrentHolder(address) {
    var current = "0x" + currentAddress
    return address == current;
}


socket.on('price', function(data) {
    pricePerMin = data.msg / 1.0e18;
    $('#priceInformation').text('The current price is ' + pricePerMin + ' ETH per min.');
    //console.log('pricePerMin: '+pricePerMin);
})



$(document).ready(function() {

    price = $('#periodInput').val() * pricePerMin;
    $('#periodInput').on('input', function() {
        price = $(this).val() * pricePerMin;

        if (checkIfEnoughMoney()) {
            $('#price').removeClass('alert');
            $('#price').text('This will cost ' + price + ' ETH');
            $('#payButton').prop("disabled", false);
        } else {
            $('#price').text('Your balance is too low!');
            $('#price').addClass('alert');
            $('#payButton').prop("disabled", true);
        }
    });
});

window.goToPayView = () => {
    $('#start').hide();
    $('#restore').hide();
    $('#pay').show();
    $('#loading').hide();
    $('#msging').hide();
    $('#footer').show();
}

window.toStart = () => {
    $('#restore').hide();
    $('#pay').hide();
    $('#start').show();
    $('#msging').hide();
    $('#footer').show();
}

window.restoreWallet = () => {
    $('#start').hide();
    $('#restore').show();
    $('#footer').show();
}
window.msgLoading = () => {
    $('#pay').hide();
    $('#loading').show();
    $('#footer').hide();

}
window.msgConsole = () => {
    //console.log("We are here!")
    $('#pay').hide();
    $('#loading').hide();
    $('#msging').show();
    $('#footer').show();
}
window.timeOut = () => {
  console.log("Timed Out!");
  goToPayView();
}

function timeCheck(time){
  console.log('inside timecheck');
  var timeLeftInSeconds = time-Math.floor(Date.now()/1000);
  console.log(timeLeftInSeconds);
  if(timeLeftInSeconds>0){
    console.log('inside timeCheck false');
    var milliSeconds = timeLeftInSeconds * 1000;
    console.log(milliSeconds)
    setTimeout(timeOut, milliSeconds);
  }else{
    console.log(time-Math.floor(Date.now()/1000))
    timeOut();
  }
}






window.newAddresses = (password) => {

    if (password == '') {
        password = prompt('Enter password to retrieve addresses', 'Password');
    }
    var numAddr = 1;
    numAddr = parseInt($('#numAddr').val())
    lightwallet.keystore.deriveKeyFromPassword(password, function(err, pwDerivedKey) {
        console.log(global_keystore)
        global_keystore.generateNewAddress(pwDerivedKey, numAddr);
        var addresses = global_keystore.getAddresses();
        $('#sendFrom').html('')
        $('#functionCaller').html('')
        for (var i = 0; i < addresses.length; ++i) {
            $('#sendFrom').append('<option value="' + addresses[i] + '">' + addresses[i] + '</option>')
            $('#functionCaller').append('<option value="' + addresses[i] + '">' + addresses[i] + '</option>')
        }
        var time = accountsTo.paidUntil();

        var currentHolder = myContractInstance.currentHolder();
        console.log(addresses[0])
        console.log(currentHolder)
        currentAddress = "0x"+addresses[0];
        getBalances();
        if (currentAddress == currentHolder){
          if (time > Math.floor(Date.now()/1000)){
            timeCheck(time)
            msgConsole()
          }
        }



    })

}

window.getBalances = () => {

    var addresses = global_keystore.getAddresses();
    $('#addr').html('Retrieving addresses...');
    async.map(addresses, web3.eth.getBalance, function(err, balances) {
        async.map(addresses, web3.eth.getTransactionCount, function(err, nonces) {
            $('#addr').html('');
            for (var i = 0; i < addresses.length; ++i) {
                //console.log(addresses[i]+' '+balances[i]/1.0e18+' ETH, Nonce: '+nonces[i]);
                currentAddress = addresses[0];
                window.balance = balances[0] / 1.0e18;
                $('#addr').append('<div id=\'addr\'>' + addresses[i]+ '</div>' + '<div id=\'addr\'> Your available balance is ' + (balances[i] / 1.0e18) + ' ETH </div>' );
                //$('#addr').append('<div id=\'addr\'> Your available balance is ' + (balances[i] / 1.0e18) + ' ETH </div>');
            }
        })
    })
}

window.setSeed = () => {
    //var password = prompt('Enter Password to encrypt your seed', 'Password');
    //console.log($('#seed').val());
    var password = $('#password').val();
    lightwallet.keystore.deriveKeyFromPassword(password, function(err, pwDerivedKey) {
        global_keystore = new lightwallet.keystore($('#seed').val(), pwDerivedKey);
        $('#seed').val('');
        //console.log($('#seed').val());
        newAddresses(password);
        setWeb3Provider(global_keystore);
        getBalances();
        goToPayView();
    })
}

window.updateContract = () => {
  socket.emit('updateContract',{
    'update' : 'contract'

  })
}


window.newWallet = () => {
    var extraEntropy = $('#userEntropy').val();
    $('#userEntropy').val('');
    var randomSeed = lightwallet.keystore.generateRandomSeed(extraEntropy);
    //console.log(randomSeed);
    var infoString = 'Your new wallet seed is: "' + randomSeed +
        '". Please write it down on paper or in a password manager, you will need it to access your wallet. Do not let anyone see this seed or they can take your Ether. ' +
        'Please enter a password to encrypt your seed while in the browser.'
    var password = prompt(infoString, 'Password');
    lightwallet.keystore.deriveKeyFromPassword(password, function(err, pwDerivedKey) {
        global_keystore = new lightwallet.keystore(randomSeed, pwDerivedKey);

        newAddresses(password);
        setWeb3Provider(global_keystore);
        getBalances();
        goToPayView();
    })
}

window.showSeed = function() {
    var password = prompt('Enter password to show your seed. Do not let anyone else see your seed.', 'Password');
    lightwallet.keystore.deriveKeyFromPassword(password, function(err, pwDerivedKey) {
        var seed = global_keystore.getSeed(pwDerivedKey);
        alert('Your seed is: "' + seed + '". Please write it down.')
    })
}

window.sendEth = () => {
    var fromAddr = $('#sendFrom').val()
    var toAddr = $('#sendTo').val()
    var valueEth = $('#sendValueAmount').val()
    var value = parseFloat(valueEth) * 1.0e18
    var gasPrice = 50000000000
    var gas = 50000
    web3.eth.sendTransaction({
        from: fromAddr,
        to: toAddr,
        value: value,
        gasPrice: gasPrice,
        gas: gas
    }, function(err, txhash) {
        console.log('error: ' + err)
        console.log('txhash: ' + txhash)
    })
}

window.pay = () => {
    var fromAddr = currentAddress;
    var args = [];
    var valueEth = price;


    if (valueEth <= 0) {
        alert("Please enter a valid amount of ether!");
        return;
    }
    var value = parseFloat(valueEth) * 1000000000000000000;
    var gasPrice = 50000000000
    var gas = 3141592
    msgLoading();
    args.push({
        from: fromAddr,
        value: value,
        gasPrice: gasPrice,
        gas: gas
    })
    var callback = function(err, txhash) {
        console.log('error: ' + err)
        console.log('txhash: ' + txhash)
        if (!err) {
            console.log("No Error!");
            //ss(fromAddr);
        } else {
            alert(err);
            goToPayView();
        }
    }
    args.push(callback)
    myContractInstance['pay'].apply(this, args);


}

window.signMessage = () => {
    var password = $('#password').val();
    if (name === null || name === false) { // Canceled
        msgConsole();
        console('Sending canceled');
    } else {

        var message = $('#url').val();
        lightwallet.keystore.deriveKeyFromPassword(password, function(err, pwDerivedKey) {
            var seed = global_keystore.getSeed(pwDerivedKey);
            var ks = new lightwallet.keystore(seed, pwDerivedKey);
            ks.generateNewAddress(pwDerivedKey);
            var addr = ks.getAddresses()[0];
            var signedMsg = signing.signMsg(ks, pwDerivedKey, message, addr);
            // console.log(signedMsg.v.toString());
            // console.log(signedMsg.r.toString());
            // console.log(signedMsg.s.toString());
            socket.emit('signedMessage', {
                v: signedMsg.v,
                r: signedMsg.r,
                s: signedMsg.s,
                msg: message
            });
        });
    }
}
