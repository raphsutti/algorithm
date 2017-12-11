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
  var totalCid = cid.reduce(function(acc, next) {
    return acc + next[1];
  }, 0.0);
  // Check if total cash less or equal to change
  if (totalCid < change) {
    return "Insufficient Funds";
  } else if (totalCid === change) {
    return "Closed";
  }
  // reversed cid to decending order
  cid = cid.reverse();
  
  var result = denom.reduce(function(acc,next,index) {
    if (change >= next.value) {
      var currVal = 0.0;
      while (change >= next.value && cid[index][1] >= next.value) {
        currVal += next.value;
        change -= next.value;
        change = Math.round(change * 100) / 100;
        cid[index][1] -= next.value;
 
      }
      acc.push([next.name, currVal]);
      return acc;
    } else {
      return acc;
    }
  }, []);
  return result.length > 0 && change === 0 ? result : 'Insufficient Funds';
}

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
