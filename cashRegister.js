var denom = [
  {name: "ONE HUNDRED", value: 100.00},
  {name: "TWENTY", value: 20.00},
  {name: "TEN", value: 10.00},
  {name: "FIVE", value: 5.00},
  {name: "ONE", value: 1.00},
  {name: "QUARTER", value: 0.25},
  {name: "DIME", value: 0.10},
  {name: "NICKEL", value: 0.05},
  {name: "PENNY", value: 0.01},
];

function checkCashRegister(price, cash, cid) {
  // Change required
  var change = cash - price;
  // Total cash in register
  var totalCid = cid.reduce(function(total, amount) {
    return total + amount[1];
  }, 0.0);
  // check if total cash is less or equal to change
  if (totalCid < change) {
    return 'Insufficient Funds';
  } else if (totalCid === change) {
    return 'Closed';
  }
  
  // reverse cid
  cid = cid.reverse();
  
  // reduce through denom and update cid
  var result = denom.reduce(function(total,amount,index){
    if(change >= amount.value) {
      // current change to be given
      var current = 0.0;
      // while loop through denom
      // for that current denomination
      while (change >= amount.value && cid[index][1] >= amount.value) {
        // add current value with current denom
        current += amount.value
        // remove required change as change now added to current change to be given
        change -= amount.value
        // remove decimal error
        change = Math.round(change *100) / 100;
        // remove cash from cid
        cid[index][1] -= amount.value;
      }
      total.push([amount.name, current]);
      return total;
    } else {
      return total;
    }
  }, []);
  return result.length > 0 && change === 0 ? result: 'Insufficient Funds';
}

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
