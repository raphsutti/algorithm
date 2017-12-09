function smallestCommons(arr) {
  // sort array
  arr = arr.sort(function(a,b,) {
    return b-a;
  });
  
  // create consecutive array
  var newArr = []
  for (var i=arr[0]; i>=arr[1]; i--) {
    newArr.push(i);
  }
  
  
  // quotient
  var quot = 0;
  // loop number
  var loop = 1;
  // index number
  var n;
  
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n=2; n<newArr.length;n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== newArr.length);
  
  return quot;
}

smallestCommons([1,5]);