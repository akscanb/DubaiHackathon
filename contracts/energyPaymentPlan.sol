pragma solidity ^0.4.6;
import "github.com/oraclize/ethereum-api/oraclizeAPI.sol";


contract energyPaymentPlan is usingOraclize {
  string public name;
  uint currentIndex;
  string private addressToString;
  address public Owner;
  bytes32 private temp;

  mapping (address => uint256) public energyCredit;
  mapping (address => uint256) public subsidy;
  mapping (uint => address) public indextoAccounts;
  mapping (bytes32 => address) public subsidyUpdates;


  event accountRegistered(address payer);
  event newOraclizeQuery(string description);
  event queryCompleted(string desciption);
  event paymentMade(address payer, uint amount);

  function toString(address x) returns (string) {
    bytes memory s = new bytes(40);
    for (uint i = 0; i < 20; i++) {
      byte b = byte(uint8(uint(x) / (2**(8*(19 - i)))));
      byte hi = byte(uint8(b) / 16);
      byte lo = byte(uint8(b) - 16 * uint8(hi));
      s[2*i] = char(hi);
      s[2*i+1] = char(lo);
    }
    return string(s);
  }

    function char(byte b) returns (byte c) {
     if (b < 10) return byte(uint8(b) + 0x30);
     else return byte(uint8(b) + 0x57);
    }

  function energyPaymentPlan(
    string paymentName,
    ){
      Owner = msg.sender;
      name = paymentName;
      currentIndex = 0;
      registerAccount(msg.sender);

  }

  function registerAccount(address Payer) private{
    indextoAccounts[currentIndex] = Payer;
    subsidy[indextoAccounts[currentIndex]] = 0;
    energyCredit[indextoAccounts[currentIndex]] = 0;
    accountRegistered(Payer);
    currentIndex ++;
  }

  function creditAccount(address Payer, uint256 amount) private{
    if (accountstoIndex[Payer] > 0 && Payer != Owner){
      registerAccount(Payer);
    }
    paymentMade(Payer, amount)
    energyCredit[Payer] += amount/baseElectricityPrice;
  }

  function __callback(bytes32 myid, string result){
    if (msg.sender != oraclize_cbAddress()) throw;
    queryCompleted(strConcat("Query for ", toString(subsidyUpdates[myid])));
    subsidy[subsidyUpdates[myid]] = parseInt(result);
  }

  function update() payable{
    newOraclizeQuery("Oraclize query was sent, standing by for an answer...");
    for(uint i = 0; i < currentIndex + 1; i++){
      addressToString = toString(indextoAccounts[i]);
      newOraclizeQuery(strConcat("Oracalize query was sent for ",addressToString));
      temp = oraclize_query("URL", strConcat("json(http://www.smartproperty.media.mit.edu/api/users/",addressToString,").subsidy"));
      subsidyUpdates[temp] = indextoAccounts[i];
    }
  }

  function payForElectricity() payable{
    creditAccount(msg.sender, msg.value);
  }

  function withDraw(){
       if(subsidy[msg.sender]>0){
           uint value = subsidy[msg.sender];
           subsidy[msg.sender] = 0;
           msg.sender.send(value);
       }
   }

  function () {
    throw;
  }
}
