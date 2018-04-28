// function to return array with largest numbers from the sub arrays
function largestOfFour(arr) {
  var result =[];
  // loop through each elem
  arr.forEach(function(elem){
    // use max and apply to reduce result into one then push into result array
    result.push(Math.max.apply(null,elem));
  });
  return result;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
