function dropElements(arr, func) {
  // Drop them elements.
  var times = arr.length
  for (var i=0; i<times; i++) {
    if(!func(arr[0])) {
      arr.shift()
    } else {
      break;
    }
  }
  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;})