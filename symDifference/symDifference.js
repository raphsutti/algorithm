function sym(args) {
  // create set of arrays
  var argsArray = [].slice.call(arguments);
  
  // create symDiff function to compare two arrays
  function symDiff(arr1,arr2) {
    var result = [];
    // iterate through each item in array 1
    arr1.forEach(function(item) {
      // check if item exist in the other array or in results array
      if(arr2.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });
    // similar to above
    arr2.forEach(function(item) {
      if(arr1.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    })
    return result
  }
  // use reduce to cycle through all array
  return argsArray.reduce(symDiff);
}

sym([1, 2, 3], [5, 2, 1, 4]);