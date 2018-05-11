// test if second argument (test) is contained in the first argument (target)
function mutation(arr) {
  // make arguments lowercase
  var testArr = arr[1].toLowerCase();
  var targetArr = arr[0].toLowerCase();
  
  // loop through test string
  for(var i=0; i<testArr.length; i++) {
    if (targetArr.indexOf(testArr[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
