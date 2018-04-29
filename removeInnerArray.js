function steamrollArray(arr) {
  var result = [];
  // create flatten function for recusion
  var flatten = function(arg) {
    // if the item is not an array, add to the final result array
    if (!Array.isArray(arg)) {
        result.push(arg);
        } else {
          // keep going into array element until no longer an array
          for (var j in arg) {
            flatten(arg[j]);
          }
        }
  };
  // for each item, call flatten
  arr.forEach(flatten);
  return result
}
steamrollArray([1, [2], [3, [[4]]]]);