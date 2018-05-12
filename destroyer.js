// filter out first arr with following arguments numbers 
function destroyer(arr) {
 // Remove all the values
  for (var i=1; i<=arguments.length; i++){
    arr = arr.filter(x => x != arguments[i]);
  }
  return arr
}

// using includes
// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);
//   return arr.filter(function(val) {
//     return !args.includes(val);
//   });
// }

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
