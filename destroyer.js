// filter out first arr with following arguments numbers 
function destroyer(arr) {
 // Remove all the values
  for (var i=1; i<=arguments.length; i++){
    arr = arr.filter(x => x != arguments[i]);
  }
  return arr;
}

// using includes
// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);
//   return arr.filter(function(val) {
//     return !args.includes(val);
//   });
// }

// using call and filter
// function destroyer(arr) {
//   // Remove all the values
//   var array = arguments[0];
//   var slicedArgs = Array.prototype.slice.call(arguments, 1);
//   var filtered = array.filter(x => slicedArgs.indexOf(x)<0)
//   return filtered;
// }



destroyer([1, 2, 3, 1, 2, 3], 2, 3);
